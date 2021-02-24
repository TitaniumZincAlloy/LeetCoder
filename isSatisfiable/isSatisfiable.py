import itertools

### Main function ###

# Tests if the a proposition can evaluate to true with at least one permutations out of 16
# Permutations are all combinations of true/false in an array of length 4
def isSatisfiable(proposition):
  permutations = genPermutations()
  for perm in permutations:
    if evaluteProposition(perm[0], perm[1], perm[2], perm[3], proposition):
      return True
  return False

### Helper Functions ###

# Gets all permutations of true/false for a 4 length array
def genPermutations():
  l=[False,True]
  return [list(i) for i in itertools.product(l,repeat=4)]
  

def evaluteProposition(p, q, r, s, prop) :
  evalution = None
  lastUnexecutedFunction = None
  negation = False

  index = 0
  while index < len(prop):
    ch = prop[index]

    if ch == 'v' or ch == '^' or ch == '@':
      lastUnexecutedFunction = ch
    elif ch == '~':
      negation = True
    elif ch == 'p' or \
         ch == 'q' or \
         ch == 'r' or \
         ch == 's':
      boolVal = getValueFromLetter(p, q, r, s, ch)
      if negation:
        boolVal = not boolVal
        negation = False
      evalution = evalutePropFunction(evalution, boolVal, lastUnexecutedFunction)
      lastUnexecutedFunction = None
    elif ch == '(':
      endParenIndex = getClosingParenIndex(prop, index)
      subPropResult = evaluteProposition(p, q, r, s, prop[(index+1):endParenIndex]) #recursive
      if negation:
        subPropResult = not subPropResult
        negation = False
      evalution = evalutePropFunction(evalution, subPropResult, lastUnexecutedFunction)
      lastUnexecutedFunction = None
      index = endParenIndex #move index to the closing paren index
    else:
      raise Exception("Debug: character " + ch + " is not recognized")
    index += 1
  return evalution


def getValueFromLetter(p, q, r, s, ch):
  if ch == 'p':
    return p
  if ch == 'q':
    return q
  if ch == 'r':
    return r
  if ch == 's':
    return s


def evalutePropFunction(originalVal, newVal, function):
  if originalVal == None:
    return newVal

  if function == '^': #and
    return originalVal and newVal
  elif function == 'v': #or
    return originalVal or newVal
  elif function == '@': #xor
    return originalVal != newVal
  else:
    raise Exception("Debug: Function " + str(function) + " didn't evalute")


#Given a starting parenthesis, it gets the index of the closing parenthesis. 
#Includes sub parenthesis groups  
def getClosingParenIndex(subProps, startIndex):
  subStartParen = 0
  if subProps[startIndex] != '(':
    raise Exception("Debug: This isn't even a parenthesis")
    return 
  for i in range(startIndex+1, len(subProps)):
    if subProps[i] == ')':
      if subStartParen > 0:
        subStartParen -= 1
      else:
        return i
    if subProps[i] == '(':
      subStartParen += 1
  raise Exception("Debug: wasn't able to find a closing parenthesis")
  return 


### Testing ###

example1 = ['(', 'p', 'v', 'q', 'v', 'r', ')', '^', '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')']
example2 = ['(', 'p', 'v', '~', 'q', ')', '^', 
  '(', 'q', 'v', '~', 'r', ')', '^',
  '(', 'r', 'v', '~', 'p', ')', '^',
  '(', 'p', 'v', 'q', 'v', 'r', ')', '^', 
  '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')' ]
example3 = [
  '(', 
    '(', 'p', 'v', 'q', 'v', 'r', ')', 
    '^', 
    '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')', 
  ')', 
  '^', 
  '(', 
    '(', 'p', 'v', '~', 'q', ')', 
    '^', 
    '(', 'q', 'v', '~', 'r', ')', 
    '^',
    '(', 'r', 'v', '~', 'p', ')', 
    '^',
    '(', 'p', 'v', 'q', 'v', 'r', ')', 
    '^', 
    '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')', 
  ')']
example4 = [
  '(', 
    '(', 'p', 'v', 'q', 'v', 'r', ')', 
    '^', 
    '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')', 
  ')', 
  'v', 
  '(', 
    '(', 'p', 'v', '~', 'q', ')', 
    '^', 
    '(', 'q', 'v', '~', 'r', ')', 
    '^',
    '(', 'r', 'v', '~', 'p', ')', 
    '^',
    '(', 'p', 'v', 'q', 'v', 'r', ')', 
    '^', 
    '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')', 
  ')']
example5 = [
  '(', 
    '(', 'p', 'v', 'q', 'v', 'r' , 
    '^', 
    '(', '~', 'p', 'v', '~', 'q', 'v', '~', 'r', ')', ')', 
  ')'
]

print('Example 1 is statisfiable: ', isSatisfiable(example1)) #true
print('Example 2 is statisfiable: ', isSatisfiable(example2)) #false
print('Example 3 is statisfiable: ', isSatisfiable(example3)) #false
print('Example 4 is statisfiable: ', isSatisfiable(example4)) #true
print('Example 5 is statisfiable: ', isSatisfiable(example5)) #true