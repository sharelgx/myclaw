import subprocess
import os
from openclaw import Skill, command

NOTEBOOKLM_PYTHON = "/opt/homebrew/bin/python3.11"


class NotebookLMSkill(Skill):
    name = "notebooklm"

    def _run_notebooklm(self, args):
        """运行 notebooklm 命令"""
        cmd = [NOTEBOOKLM_PYTHON, "-m", "notebooklm"] + args
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode != 0:
            return f"错误: {result.stderr}"
        return result.stdout

    @command("create")
    def create(self, name):
        """创建笔记本"""
        return self._run_notebooklm(["create", name])

    @command("source add")
    def add_source(self, url, notebook=None):
        """推送文档/链接到笔记本"""
        if notebook:
            return self._run_notebooklm(["source", "add", url, "-n", notebook])
        return self._run_notebooklm(["source", "add", url])

    @command("ask")
    def ask(self, question, notebook=None):
        """基于文档库提问"""
        if notebook:
            return self._run_notebooklm(["ask", question, "-n", notebook])
        return self._run_notebooklm(["ask", question])

    @command("generate audio")
    def generate_audio(self, text=None, notebook=None):
        """生成播客音频"""
        args = ["audio", "generate"]
        if notebook:
            args.extend(["-n", notebook])
        return self._run_notebooklm(args)

    @command("list")
    def list_notebooks(self):
        """列出所有笔记本"""
        return self._run_notebooklm(["list"])

    @command("version")
    def version(self):
        """显示版本信息"""
        return self._run_notebooklm(["--version"])
