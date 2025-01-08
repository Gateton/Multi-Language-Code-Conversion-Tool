export function javaToPython(javaCode) {
  // Detectar clase principal
  const classMatch = javaCode.match(/public class (\w+)/);
  if (!classMatch) return '# No se pudo detectar la clase principal';

  const className = classMatch[1];
  
  // Convertir System.out.println
  let pythonCode = javaCode
    .replace(/System\.out\.println\((.*)\);/g, 'print($1)')
    .replace(/public class \w+ {/, '')
    .replace(/public static void main\(String\[\] args\) {/, 'def main():')
    .replace(/}$/, '')
    .replace(/}/, '');

  // Limpiar el código
  pythonCode = pythonCode
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');

  // Agregar estructura Python
  return `def main():
${pythonCode}

if __name__ == "__main__":
    main()`;
}

export function pythonToJava(pythonCode) {
  // Convertir print
  let javaCode = pythonCode
    .replace(/print\((.*)\)/g, 'System.out.println($1);')
    .replace(/def main\(\):/, 'public static void main(String[] args) {');

  // Agregar estructura Java
  return `public class Main {
    ${javaCode}
}`;
}
