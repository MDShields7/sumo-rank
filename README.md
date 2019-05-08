# Documentation - How to use sumoRank
"\<YOUR RANK INPUT>".sumoRank("\<YOUR FORMAT INPUT>")

## RANK INPUT
Named ranks     -->   Yokozuna, Ozeki, Sekiwake, Komisubi, Maegashira<br/>
Number ranks    -->   1-17 (only top division)<br/>
Direction ranks -->   East, West
## FORMAT INPUT
Nn              -->   Yokozuna, Maegashira, etc.<br/>
nn              -->   yokozuna, maegashira, etc.<br/>
N               -->   Y, M, etc.<br/>
n               -->   y, m, etc.<br/>
Dd              -->   East, West<br/>
dd              -->   east, west<br/>
D               -->   E, W<br/>
d               -->   e, w<br/>
\#               -->   1, 12, etc.

### COMMON EXAMPLES 
Nn # Dd         -->   Yokozuna 1 East, Maegashira 12 West, etc.<br/>
nn # dd         -->   yokozuna 1 east, maegashira 12 west, etc.<br/>
N#D             -->   Y1E, M12W, etc.<br/>
N#d             -->   Y1e, M12w, etc.<br/>
N               -->   Y, M, etc.<br/>
\#d              -->   1e, 12w, etc.

## USE GUIDE

### FORMAT INPUTS
1.  Format can be arranged in any combination<br/>
    "S1W".sumoRank("Nn")                 --> "Sekiwake"<br/>
    "S1W".sumoRank("N#d")                --> "S1w"<br/>
2.  Spaces between rankings will be retained<br/>
    "S1W".sumoRank("nn # dd")            --> "sekiwake 1 west"<br/>
3.  Extra spaces will be removed from final result<br/>
    "S1W".sumoRank("#   Dd")             --> "1 West"

### RANK INPUTS
1.  Input rank can be any arrangement<br/>
    "Komisubi 1 e".sumoRank("N#D")       --> "K1E"<br/>
    "e 1 Komisubi".sumoRank("N#D")       --> "K1E"<br/>
    "K1e".sumoRank("N#D")                --> "K1E"<br/>
2.  Input rank is not caps sensitive<br/>
    "KomiSUBi 1 eASt".sumoRank("Nn")     --> "Komisubi"

### CONTENT ERRORS
+   SR.101  Lower division rankings throw error<br/>
    "Sandanme 82 East".sumoRank("N#D")   --> Error<br/>
+   SR.202  Non-existant Name/Number rankings throw error<br/>
    "Maegashira 18 East".sumoRank("N#D") --> Error

### INPUT ERRORS FOR RANK
+   `SR.301`  Incorrect formats throw error<br/>
    "Y1E".sumoRank("abc")                --> Error<br/>
    "Y1E".sumoRank("##")                 --> Error<br/>
+   `SR.302`  Empty format types throw error<br/>
    "K2E".sumoRank("")                   --> Error<br/>
+   `SR.303`  Blank format types throw error<br/>
    "K2E".sumoRank("    ")               --> Error<br/>
+   `SR.304`  Incorrect format types throw error<br/>
    "Y1E".sumoRank(123)                  --> Error<br/>
    "Y1E".sumoRank(true)                 --> Error<br/>
    "Y1E".sumoRank([])                   --> Error<br/>
    "Y1E".sumoRank({})                   --> Error<br/>
+   `SR.305`  Multiple instances of format type throw error<br/>
    "M5W".sumoRank("Dd Dd")              --> Error<br/>
    "M5W".sumoRank("Dd d")               --> Error<br/>
    "M5W".sumoRank("# #")                --> Error

### INPUT ERRORS FOR FORMAT
+   `SR.401`  Incorrect rank types (non-strings) throw error<br/>
    123.sumoRank("Dd")                   --> Error<br/>
    true.sumoRank("Dd")                  --> Error<br/>
    [].sumoRank("Dd")                    --> Error<br/>
    {}.sumoRank("Dd")                    --> Error<br/>
    `SR.402`  Empty rank types throw error<br/>
    "".sumoRank("Dd")                    --> Error<br/>
+   `SR.403`  Blank rank types throw error<br/>
    "     ".sumoRank("Nn#Dd")            --> Error<br/>
+   `SR.404`  Incorrect ranks throw error<br/>
    "M two east".sumoRank("N#D")         --> Error<br/>
    "i like turtles".sumoRank("N#D")     --> Error<br/>
+   `SR.405`  Duplicate rank types throw error<br/>
    "Y Y".sumoRank("Nn#Dd)               --> Error<br/>
    "Y y".sumoRank("Nn#Dd)               --> Error<br/>
    "Y M".sumoRank("Nn#Dd)               --> Error<br/>
    "Ozeki ozeki".sumoRank("Nn#Dd)       --> Error<br/>
    "Ozeki Sekiwake".sumoRank("Nn#Dd)    --> Error

INPUT COMBINATIONS ERROR
+   `SR.501`  Insufficient rank/format info throw error<br/>
    "Ozeki".sumoRank("# Nn")             --> Error<br/>
    "Ozeki".sumoRank("# Nn")             --> Error