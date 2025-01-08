import ast
import re
from .languages import Language

class CodeParser:
    @staticmethod
    def detect_language(code: str) -> Language:
        # Simple language detection based on syntax patterns
        patterns = {
            r'public\s+class': Language.JAVA,
            r'System\.out\.println': Language.JAVA,
            r'console\.log': Language.JAVASCRIPT,
            r'def\s+\w+\s*\(': Language.PYTHON,
            r'cout\s*<<': Language.CPP,
            r'puts\s+': Language.RUBY
        }
        
        for pattern, lang in patterns.items():
            if re.search(pattern, code):
                return lang
        return Language.PYTHON  # Default to Python

    @staticmethod
    def parse_python(code: str) -> ast.AST:
        return ast.parse(code)
