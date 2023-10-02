import timeit

# Define the one-loop function in Python
def mat_to_arr_one_loop(mat):
    newArr = []
    sumCol = len(mat)
    sumRow = len(mat[0])
    row = 0
    col = 0
    for i in range(sumCol * sumRow):
        newArr.append(mat[row][col])
        if col == sumRow - 1:
            row += 1
            col = 0
        else:
            col += 1
    return newArr

# Define the two-loop function in Python
def mat_to_arr_two_loop(mat):
    newArr = []
    for row in range(len(mat)):
        for col in range(len(mat[row])):
            newArr.append(mat[row][col])
    return newArr

# Create a sample 2D array (matrix) for testing
sample_mat = [[j for j in range(100)] for i in range(100)]

# Measure the time taken by each function
one_loop_time = timeit.timeit("mat_to_arr_one_loop(sample_mat)", globals=globals(), number=1000)
two_loop_time = timeit.timeit("mat_to_arr_two_loop(sample_mat)", globals=globals(), number=1000)


print(one_loop_time, two_loop_time)