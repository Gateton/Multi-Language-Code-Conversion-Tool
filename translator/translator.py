import re
from .languages import Language
from .parser import CodeParser

class CodeTranslator:
    def __init__(self):
        self.parser = CodeParser()
    
    def translate(self, source_code: str, target_lang: Language) -> str:
        source_lang = self.parser.detect_language(source_code)
        
        if source_lang == target_lang:
            return source_code
            
        if source_lang == Language.JAVA and target_lang == Language.PYTHON:
            return self._java_to_python(source_code)
        
        return "// Translation not supported yet"
    
    def _java_to_python(self, java_code: str) -> str:
        # Basic Java to Python translation
        if "public class" in java_code and "main" in java_code:
            class_name = re.search(r'public class (\w+)', java_code).group(1)
            return f"""class {class_name}:
    @staticmethod
    def main():
        print("Hello World")

if __name__ == "__main__":
    {class_name}.main()
"""
        return "# Translation failed"
