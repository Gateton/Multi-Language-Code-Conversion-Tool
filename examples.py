from translator.languages import Language
from translator.translator import CodeTranslator

def show_translation(source_code: str, target_lang: Language, description: str):
    print(f"\n=== {description} ===")
    print("\nCódigo Original:")
    print(source_code)
    
    translator = CodeTranslator()
    translated = translator.translate(source_code, target_lang)
    
    print("\nCódigo Traducido:")
    print(translated)
    print("\n" + "="*50)

def main():
    # Ejemplo 1: Java a Python
    java_code = """
public class Calculator {
    public static void main(String[] args) {
        System.out.println("Simple Calculator");
    }
}"""
    show_translation(java_code, Language.PYTHON, "Java a Python - Clase Simple")

    # Ejemplo 2: Java a Python con más contenido
    java_complex = """
public class UserManager {
    public static void main(String[] args) {
        System.out.println("User Management System");
    }
}"""
    show_translation(java_complex, Language.PYTHON, "Java a Python - Sistema de Usuarios")

if __name__ == "__main__":
    main()
