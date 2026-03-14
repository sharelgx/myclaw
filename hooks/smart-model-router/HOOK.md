---
name: smart-model-router
description: "智能模型故障转移和自动选择系统"
metadata: {"openclaw":{"emoji":"🔄","events":["agent:bootstrap","command:before"]}}
---

# 智能模型故障转移 Hook

自动检测 API rate limit 和其他错误，智能切换可用模型，最终回退到本地模型。

## 功能特性

- ✅ **Rate Limit 检测**：自动识别 429 错误并触发冷却
- ✅ **优先级队列**：按成功率自动选择模型
- ✅ **故障隔离**：连续失败自动禁用模型
- ✅ **自动恢复**：定期尝试恢复失败的模型
- ✅ **状态持久化**：模型状态持久化存储
- ✅ **多 Provider 支持**：ZAI、OpenRouter、Ollama

## 模型优先级

1. OpenRouter 免费模型（Step 3.5, Qwen2.5, Gemini等）
2. Google AI 模型（Gemini 2.0, 2.5, 1.5 Flash/Pro）
3. ZAI GLM 系列（GLM-4.7 FlashX/Flash/4.7/5）
4. 本地模型（Qwen 2.5 7B, Qwen 3.5 4B）- 最终保障

## API Key 轮换

- **OpenRouter**: 2 个 key 自动轮换
- **Google AI**: 1 个 key
- **ZAI GLM**: 1 个 key

当一个 key 触发 rate limit 时，自动切换到备用 key。

## 配置

Hook 自动启用，无需额外配置。

### 状态文件位置

`/Users/liulaoshi/.openclaw/model_status.json`

### 监控 CLI

```bash
# 查看模型状态
python3 /Users/liulaoshi/.openclaw/workspace/model_router.py --status

# 测试智能路由
python3 /Users/liulaoshi/.openclaw/workspace/model_router.py "你的问题"
```

## 集成方式

Hook 会在以下事件触发：
- `agent:bootstrap`：注入智能路由脚本到 agent workspace
- `command:before`：（可选）拦截命令调用进行模型选择

## 使用示例

### 简单任务（自动使用本地模型）
```
用户："今天天气怎么样？"
    ↓ 识别为简单任务
    ↓ 选择本地 Qwen 2.5
响应：< 2秒
```

### 复杂任务（使用云端模型）
```
用户："写一个Python脚本控制智能家居"
    ↓ 识别为复杂任务
    ↓ 选择 OpenRouter Step 3.5
响应：5-10秒
```

### Rate Limit 场景
```
OpenRouter Step 3.5 触发 rate limit (429)
    ↓ 自动冷却 2^N 分钟（指数退避）
    ↓ 选择下一个可用模型（OpenRouter Qwen2.5）
继续处理任务
```

## 故障转移流程

1. 尝试选择最佳可用模型
2. 如果调用失败，记录错误
3. 连续失败3次 → 暂时禁用该模型
4. Rate limit → 触发指数退避冷却
5. 继续尝试下一个模型
6. 最多尝试5个不同模型
7. 所有模型失败 → 返回错误响应
8. 定期（5分钟）尝试恢复被禁用的模型

## 智能恢复

- 冷却期结束后自动重新启用
- 成功调用后重置连续失败计数
- 基于全局成功率动态调整优先级

## 日志查看

```bash
tail -f /Users/liulaoshi/.openclaw/logs/gateway.log | grep smart
```

## 手动操作

### 强制重置模型状态
```bash
python3 -c "
from smart_model_router import get_router
router = get_router()
router.force_reset_model('openrouter', 'stepfun/step-3.5-flash:free')
"
```

### 清除所有状态（重启）
```bash
rm /Users/liulaoshi/.openclaw/model_status.json
```

## 技术细节

- **状态存储**：JSON 文件，自动持久化
- **并发安全**：线程锁保护
- **错误分类**：429 → Rate limit，其他 → 一般错误
- **冷却策略**：2^rate_limit_count 分钟，最大60分钟
- **失败阈值**：3次连续失败触发禁用

## 下一步优化

- [ ] 集成到 OpenClaw 实际的模型调用接口
- [ ] 添加更多 provider（Anthropic、Google等）
- [ ] 实现基于响应时间的动态优先级
- [ ] 添加熔断器模式（Circuit Breaker）
- [ ] 实时监控仪表板

---

**Created**: 2026-03-04
**Author**: 小元 (OpenClaw Agent)
**Version**: 1.0.0
