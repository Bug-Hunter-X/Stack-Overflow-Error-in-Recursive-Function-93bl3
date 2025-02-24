# JavaScript Stack Overflow Bug

This repository demonstrates a common error in JavaScript: stack overflow caused by unbounded recursion.  The `foo` function recursively calls itself until it reaches the base case, but if 'a' is much greater than 'b', this can lead to excessive recursion and a stack overflow.

The solution provides a more efficient and safer approach to the problem using iteration, which avoids the stack overflow error.  The solution also incorporates input validation to prevent unintended scenarios that could lead to infinite recursion.