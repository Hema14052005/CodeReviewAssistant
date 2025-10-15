"""
Sample Python Code for Testing Code Review Assistant
Contains functions, classes, loops, and some minor issues.
"""

import math
import random

# Global variable
pi_value = 3.14

# Function to calculate factorial
def factorial(n):
    if n < 0:
        return None  
    if n == 0:
        return 1
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

# Function to check prime numbers
def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

# Class for a simple bank account
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"{amount} deposited. New balance: {self.balance}")
        else:
            print("Deposit amount must be positive.")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds!")
        else:
            self.balance -= amount
            print(f"{amount} withdrawn. New balance: {self.balance}")

# Function to generate random numbers and filter primes
def random_primes(count, max_value):
    numbers = [random.randint(1, max_value) for _ in range(count)]
    primes = [num for num in numbers if is_prime(num)]
    return primes


def main():
    print("Factorial of 5:", factorial(5))
    account = BankAccount("Alice", 1000)
    account.deposit(500)
    account.withdraw(2000)
    print("Random primes:", random_primes(10, 50))

if __name__ == "__main__":
    main()
