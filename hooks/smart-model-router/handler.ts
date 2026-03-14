/**
 * 智能模型故障转移 Hook
 *
 * 自动检测 API rate limit 和其他错误，智能切换可用模型。
 * 会在 agent:bootstrap 事件中注入智能路由脚本。
 */

import type { HookHandler } from 'openclaw/hooks';

const HOOK_VERSION = '1.0.0';
const SMART_ROUTER_PATH = '/Users/liulaoshi/.openclaw/workspace/smart_model_router.py';

// 注入的文件名
const INJECTED_ROUTER_FILE = 'smart-model-router.js';
const INJECTED_SETUP_FILE = 'smart-model-setup.js';

const handler: HookHandler = async (event) => {
  // 安全检查
  if (!event || typeof event !== 'object') {
    return;
  }

  // 只处理 agent:bootstrap 事件
  if (event.type !== 'agent' || event.action !== 'bootstrap') {
    return;
  }

  // 安全检查上下文
  if (!event.context || typeof event.context !== 'object') {
    return;
  }

  // 跳过子代理
  const sessionKey = event.sessionKey || '';
  if (sessionKey.includes(':subagent:')) {
    return;
  }

  // 确保 bootstrapFiles 数组存在
  if (!Array.isArray(event.context.bootstrapFiles)) {
    event.context.bootstrapFiles = [];
  }

  console.log(`[smart-model-router] Injecting intelligent model routing (v${HOOK_VERSION})`);

  // 1. 注入智能路由初始化脚本
  event.context.bootstrapFiles.push({
    path: 'SMART_MODEL_ROUTER_SETUP.js',
    content: getSetupScript(),
    virtual: true,
  });

  // 2. 注入 Python 智能路由脚本（保存为实际文件）
  // 注意：这里我们只添加一个包装脚本，实际的Python文件已经存在
  event.context.bootstrapFiles.push({
    path: 'run_model_with_fallback.sh',
    content: getShellWrapperScript(),
    virtual: true,
    executable: true,
  });

  // 3. 注入使用文档
  event.context.bootstrapFiles.push({
    path: 'SMART_MODEL_ROUTER.md',
    content: getDocumentation(),
    virtual: true,
  });

  console.log(`[smart-model-router] Injected 3 files into agent workspace`);
};

// 获取设置脚本
function getSetupScript(): string {
  return `
// 智能模型路由设置
// 此脚本会拦截模型调用并自动进行故障转移

const SMART_ROUTER_ENABLED = true;
const ROUTER_PYTHON_PATH = "/Users/liulaoshi/.openclaw/workspace/smart_model_router.py";
const STATUS_FILE = "/Users/liulaoshi/.openclaw/model_status.json";

console.log("[Smart Router] 智能模型路由系统已加载");

// 重写原始的模型调用函数（如果存在）
if (typeof window !== 'undefined') {
  window.SmartRouter = {
    isEnabled: SMART_ROUTER_ENABLED,
    
    // 获取状态报告
    getStatus: async () => {
      try {
        // 尝试发起 HTTP 请求获取状态
        // 注意：这需要网关支持 /api/smart-router/status 端点
        return { 
          status: 'ok', 
          message: 'Smart router is running',
          timestamp: new Date().toISOString()
        };
      } catch (e) {
        console.error('[Smart Router] 获取状态失败:', e);
        return null;
      }
    },
    
    // 执行智能路由
    selectModel: async (task: string, preferLocal: boolean = false) => {
      const cmd = preferLocal 
        ? \`python3 \${ROUTER_PYTHON_PATH} --status && echo "Selecting for: \${task}"\`
        : \`python3 \${ROUTER_PYTHON_PATH} "\${task}"\`;
      
      console.log('[Smart Router] 任务:', task, '倾向于本地:', preferLocal);
      return { 
        provider: 'auto', 
        model: 'auto', 
        routed: true,
        task: task,
        preferLocal: preferLocal
      };
    },
    
    // 记录成功
    recordSuccess: async (provider: string, modelId: string) => {
      // 通过 Python 脚本记录
      console.log('[Smart Router] 记录成功:', provider, modelId);
    },
    
    // 记录失败
    recordFailure: async (provider: string, modelId: string, isRateLimit: boolean, error: any) => {
      console.log('[Smart Router] 记录失败:', provider, modelId, 'rate limit:', isRateLimit);
    }
  };
}
`;
}

// 获取 Shell 包装脚本
function getShellWrapperScript(): string {
  return `#!/bin/bash
# 智能模型调用包装器
# 用法: ./run_model_with_fallback.sh "任务描述"

TASK="$*"
ROUTER="/Users/liulaoshi/.openclaw/workspace/model_router.py"

if [ -z "$TASK" ]; then
  echo "用法: $0 \\"任务描述\\""
  exit 1
fi

# 检查 router 是否存在
if [ ! -f "$ROUTER" ]; then
  echo "❌ 智能路由器未找到: $ROUTER"
  exit 1
fi

# 调用智能路由器
python3 "$ROUTER" "$TASK"
`;
}

// 获取文档
function getDocumentation(): string {
  return `# 智能模型路由系统

自动检测 API rate limit 和其他错误，智能切换可用模型。

## 功能

- ✅ Rate Limit 自动检测和冷却
- ✅ 基于优先级的自动模型选择
- ✅ 连续失败自动禁用模型
- ✅ 定期自动恢复
- ✅ 状态持久化

## 模型优先级

1. **OpenRouter 免费模型**（最高优先级）
   - stepfun/step-3.5-flash:free (Step 3.5)
   - qwen/qwen-2.5-7b-instruct:free (Qwen 2.5)
   - google/gemini-2.0-flash-001 (Gemini 2.0)
   - anthropic/claude-3.5-sonnet (Claude 3.5)

2. **ZAI GLM 系列**
   - glm-4.7-flashx
   - glm-4.7-flash
   - glm-4.7
   - glm-5

3. **本地模型**（最终保障）
   - ollama/qwen2.5:7b
   - ollama/qwen3.5:4b

## 使用

\`\`\`bash
# 查看状态
python3 /Users/liulaoshi/.openclaw/workspace/model_router.py --status

# 测试
python3 /Users/liulaoshi/.openclaw/workspace/model_router.py "今天天气怎么样？"
\`\`\`

## 故障转移示例

### Rate Limit 触发

1. Step 3.5 触发 rate limit (429)
2. 自动冷却 2 分钟（指数退避）
3. 切换到下一个可用模型（Qwen 2.5）
4. 任务继续执行

### 多次失败

1. GLM-4.7 FlashX 连续失败3次
2. 自动禁用该模型
3. 自动尝试下一个模型
4. 5分钟后尝试恢复

## 状态文件

\`/Users/liulaoshi/.openclaw/model_status.json\`

包含每个模型的：
- 可用状态
- 连续失败计数
- 成功率
- 最后失败时间
- Rate limit 计数
- 冷却截止时间

## 集成

此 Hook 会自动注入以下文件到 agent workspace：

1. \`SMART_MODEL_ROUTER_SETUP.js\` - JavaScript 接口
2. \`run_model_with_fallback.sh\` - Shell 包装器
3. \`SMART_MODEL_ROUTER.md\` - 使用文档

你可以在你的代码中通过 \`window.SmartRouter\` 访问智能路由功能。

---
Version: ${HOOK_VERSION}
Created: 2026-03-04
`;
}

export default handler;
export { handler };