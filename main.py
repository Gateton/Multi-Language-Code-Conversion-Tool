from translator.languages import Language
from translator.translator import CodeTranslator

def main():
    # Example usage
    translator = CodeTranslator()
    
    java_code = """
public class Example {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
"""
    
    # Translate Java to Python
    python_code = translator.translate(java_code, Language.PYTHON)
    print("Original Java code:")
    print(java_code)
    print("\nTranslated Python code:")
    print(python_code)

if __name__ == "__main__":
    main()
