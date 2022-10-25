import sys
from classes.base_operations import BaseOperations

array = sys.argv[1].split(',')

a = int(array[0])
b = int(array[1])

# print('AAAAAAAAAAAAAAa', a)
# print('BBBBBBBBBBBBBBB', b)

BaseOperations.sum(a, b)
# BaseOperations.mult(a, b)
# BaseOperations.div(a, b)
# BaseOperations.substr(a, b)

# sys.stdout.flush()