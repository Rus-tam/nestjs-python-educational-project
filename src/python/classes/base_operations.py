import sys


class BaseOperations:
    def __int__(self):
        pass

    @staticmethod
    def sum(a, b):
        c = a + b
        print(f"Summ - {c}")

        return c

    @staticmethod
    def mult(a, b):
        c = a * b
        print(f"Mult - {c}")

        return c

    @staticmethod
    def substr(a, b):
        c = a - b
        print(f"Substruction - {c}")

        return c

    @staticmethod
    def div(a, b):
        c = a / b
        print(f"Divide - {c}")

        return c
    
