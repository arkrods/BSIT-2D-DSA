class Stack:
    def __init__(self):
        self.stack = []
    
    def push(self, value):
        self.stack.append(value)
    
    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()
        return None
    
    def isEmpty(self):
        return len(self.stack) == 0

def evaluatePostfix(expression):
    stack = Stack()
    operators = set(['+', '-', '*', '/'])
    
    for char in expression:
        if char in operators:
            operand2 = stack.pop()
            operand1 = stack.pop()
            if char == '+':
                stack.push(operand1 + operand2)
            elif char == '-':
                stack.push(operand1 - operand2)
            elif char == '*':
                stack.push(operand1 * operand2)
            elif char == '/':
                stack.push(operand1 / operand2)
        else:
            stack.push(int(char))
    
    return stack.pop()