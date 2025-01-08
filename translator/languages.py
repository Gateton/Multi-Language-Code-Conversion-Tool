from enum import Enum

class Language(Enum):
    PYTHON = "python"
    JAVASCRIPT = "javascript"
    JAVA = "java"
    CPP = "cpp"
    RUBY = "ruby"

    @classmethod
    def get_extension(cls, lang):
        extensions = {
            cls.PYTHON: ".py",
            cls.JAVASCRIPT: ".js",
            cls.JAVA: ".java",
            cls.CPP: ".cpp",
            cls.RUBY: ".rb"
        }
        return extensions.get(lang, "")
