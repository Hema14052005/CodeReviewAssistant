# Sample Python code for testing the Code Review Assistant
import math
def factorial(n):
    if n < 0:
        return None
    if n == 0:
        return 1
    r = 1
    for i in range(1, n+1):
        r *= i
    return r

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"{amount} deposited")
        else:
            print("Invalid amount")

if __name__ == '__main__':
    print(factorial(5))