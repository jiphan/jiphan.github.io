memo = {0:0, 1:1}
def fibm(n):
    # if not n in memo:
    #     memo[n] = fibm(n-1) + fibm(n-2)
    # return memo[n]
    a, b = 0, 1
    for i in range(0, n):
        a, b = b, a + b
    return a


print("hello world")
print(fibm(int(input('Fibonacci number: '))))
