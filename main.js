const examples = {
  hello: {
    java: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    python: `def main():
    print("Hello, World!")

if __name__ == "__main__":
    main()`
  },
  calculator: {
    java: `public class Calculator {
    public static void main(String[] args) {
        int a = 5;
        int b = 3;
        System.out.println("Sum: " + (a + b));
    }
}`,
    python: `def main():
    a = 5
    b = 3
    print(f"Sum: {a + b}")

if __name__ == "__main__":
    main()`
  }
};

function javaToPython(code) {
  let result = code
    .replace(/public class (\w+) {/, '')
    .replace(/public static void main\(String\[\] args\) {/, 'def main():')
    .replace(/System\.out\.println\((.*)\);/, 'print($1)')
    .replace(/}/g, '')
    .trim();

  return `def main():
    ${result}

if __name__ == "__main__":
    main()`;
}

function pythonToJava(code) {
  let result = code
    .replace(/def main\(\):/, 'public static void main(String[] args) {')
    .replace(/print\((.*)\)/, 'System.out.println($1);');

  return `public class Main {
    ${result}
}`;
}

function translate() {
  const sourceCode = document.getElementById('sourceCode').value;
  const sourceLang = document.getElementById('sourceLanguage').value;
  const targetLang = document.getElementById('targetLanguage').value;
  
  let translated = '';
  
  if (sourceLang === 'java' && targetLang === 'python') {
    translated = javaToPython(sourceCode);
  } else if (sourceLang === 'python' && targetLang === 'java') {
    translated = pythonToJava(sourceCode);
  } else {
    translated = '// Traducción no soportada aún';
  }
  
  document.getElementById('targetCode').value = translated;
}

function loadExample() {
  const example = document.getElementById('examples').value;
  const sourceLang = document.getElementById('sourceLanguage').value;
  
  if (example && examples[example]) {
    document.getElementById('sourceCode').value = examples[example][sourceLang];
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('translateBtn').addEventListener('click', translate);
  document.getElementById('examples').addEventListener('change', loadExample);
  document.getElementById('sourceLanguage').addEventListener('change', function() {
    const targetSelect = document.getElementById('targetLanguage');
    targetSelect.value = this.value === 'java' ? 'python' : 'java';
    loadExample();
  });
});
