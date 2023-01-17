# logicgates
All seven basic logic gates in one function with either two or three arguments: the gate and input.

First argument must be a string; it is not case sensitive.
Second and third arguments must be either 1 or 0; if either of the last two arguments are greater or less than 1 or 0, an error alert appears.
The "not" gate has only two arguments, the gate and input (not gates output the opposite of the input).

Example:
  logicGate("And", 0, 0)   //   0
  logicGate("And", 0, 1)   //   0
  logicGate("And", 1, 0)   //   0
  logicGate("And", 1, 1)   //   1

("AnD", "aND" etc. are all valid)

logicGate("NOT", 0)   //   1
