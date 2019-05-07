# Documentation - How to use sumoRank
"<YOUR RANK INPUT>".sumoRank("<YOUR FORMAT INPUT>")

## RANK INPUT
Named ranks     -->   Yokozuna, Ozeki, Sekiwake, Komisubi, Maegashira
Number ranks    -->   1-17 (only top division)
Direction ranks -->   East, West
## FORMAT INPUT
Nn              -->   Yokozuna, Maegashira, etc.
nn              -->   yokozuna, maegashira, etc.
N               -->   Y, M, etc.
n               -->   y, m, etc.
Dd              -->   East, West
dd              -->   east, west
D               -->   E, W
d               -->   e, w
#               -->   1, 12, etc.

### COMMON EXAMPLES 
Nn # Dd         -->   Yokozuna 1 East, Maegashira 12 West, etc.
nn # dd         -->   yokozuna 1 east, maegashira 12 west, etc.
N#D             -->   Y1E, M12W, etc.
N#d             -->   Y1e, M12w, etc.
N               -->   Y, M, etc.
#d              -->   1e, 12w, etc.

## USE GUIDE

### FORMAT INPUTS
1.  Format can be arranged in any combination
    "S1W".sumoRank("Nn")                 --> "Sekiwake"
    "S1W".sumoRank("N#d")                --> "S1w"
2.  Spaces between rankings will be retained
    "S1W".sumoRank("nn # dd")            --> "sekiwake 1 west"
3.  Extra spaces will be removed from final result
    "S1W".sumoRank("#   Dd")             --> "1 West"

### RANK INPUTS
1.  Input rank can be any arrangement
    "Komisubi 1 e".sumoRank("N#D")       --> "K1E"
    "e 1 Komisubi".sumoRank("N#D")       --> "K1E"
    "K1e".sumoRank("N#D")                --> "K1E"
2.  Input rank is not caps sensitive
    "KomiSUBi 1 eASt".sumoRank("Nn")     --> "Komisubi"

### CONTENT ERRORS
SR.101  Lower division rankings throw error
    "Sandanme 82 East".sumoRank("N#D")   --> Error
SR.202  Non-existant Name/Number rankings throw error
    "Maegashira 18 East".sumoRank("N#D") --> Error

### INPUT ERRORS FOR RANK
SR.301  Incorrect formats throw error
    "Y1E".sumoRank("abc")                --> Error
    "Y1E".sumoRank("##")                 --> Error
SR.302  Empty format types throw error
    "K2E".sumoRank("")                   --> Error
SR.303  Blank format types throw error
    "K2E".sumoRank("    ")               --> Error
SR.304  Incorrect format types throw error
    "Y1E".sumoRank(123)                  --> Error
    "Y1E".sumoRank(true)                 --> Error
    "Y1E".sumoRank([])                   --> Error
    "Y1E".sumoRank({})                   --> Error
SR.305  Multiple instances of format type throw error
    "M5W".sumoRank("Dd Dd")              --> Error
    "M5W".sumoRank("Dd d")               --> Error
    "M5W".sumoRank("# #")                --> Error

### INPUT ERRORS FOR FORMAT
SR.401  Incorrect rank types (non-strings) throw error
    123.sumoRank("Dd")                   --> Error
    true.sumoRank("Dd")                  --> Error
    [].sumoRank("Dd")                    --> Error
    {}.sumoRank("Dd")                    --> Error
    E402. Empty rank types throw error
    "".sumoRank("Dd")                    --> Error
SR.403  Blank rank types throw error
    "     ".sumoRank("Nn#Dd")            --> Error
SR.404  Incorrect ranks throw error
    "M two east".sumoRank("N#D")         --> Error
    "i like turtles".sumoRank("N#D")     --> Error
SR.405  Duplicate rank types throw error
    "Y Y".sumoRank("Nn#Dd)               --> Error
    "Y y".sumoRank("Nn#Dd)               --> Error
    "Y M".sumoRank("Nn#Dd)               --> Error
    "Ozeki ozeki".sumoRank("Nn#Dd)       --> Error
    "Ozeki Sekiwake".sumoRank("Nn#Dd)    --> Error

INPUT COMBINATIONS ERROR
SR.501  Insufficient rank/format info throw error
    "Ozeki".sumoRank("# Nn")             --> Error
    "Ozeki".sumoRank("# Nn")             --> Error



