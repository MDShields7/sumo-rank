# Documentation - How to use sumoRank
"\<RANK>".sumoRank("\<DESIRED FORMAT>")

## Contents 

[Quick Brief on Sumo Ranks](#user-content-quick-brief-on-sumo-ranks)<br/>
[Rank Input](#user-content-rank-input)<br/>
[Format Input](#user-content-format-input)<br/>
[Common Usage Examples](#user-content-common-usage-examples)<br/>
[Use Guide](#user-content-use-guide)<br/>
[Format Input Rules](#user-content-format-input-rules)<br/>
[Rank Input Rules](#user-content-rank-input-rules)<br/>
[Content Errors](#user-content-content-errors)<br/>
[Input Errors for Rank](#user-content-input-errors-for-rank)<br/>
[Input Errors for Format](#user-content-input-errors-for-Format)<br/>

## QUICK BRIEF ON SUMO RANKS
**Each rank has a name, number and direction** - typically in that order.<br/>
Example 1: The highest rank in sumo<br/>
Long, all caps version: "Yokozuna 1 East"<br/>
Short, partial caps version: "Y1e"<br/>
Example 2: The lowest possible rank in the top division<br/>
Long, all caps version: "Maegashira 17 West"<br/>
Short, partial caps version: "M17w"

## RANK INPUT

Named ranks (high to low)    -->   Yokozuna, Ozeki, Sekiwake, Komusubi, Maegashira, Juryo, Makushita, Sandanme, Jonidan, Jonokuchi<br/>
Number ranks (high to low)   -->   1 - 100+ (100 is a typical maximum, but it is unlimited in some cases)<br/>
Direction ranks (high to low) -->   East, West
## FORMAT INPUT
Nn              -->   Yokozuna, Maegashira, Jonokuchi, etc.<br/>
nn              -->   yokozuna, maegashira, Jonokuchi, etc.<br/>
N               -->   Y, M, Jk, etc.<br/>
n               -->   y, m, jk, etc.<br/>
Dd              -->   East, West<br/>
dd              -->   east, west<br/>
D               -->   E, W<br/>
d               -->   e, w<br/>
\#               -->   1, 15, 68, 104, etc.

### COMMON USAGE EXAMPLES 
Nn # Dd         -->   Yokozuna 1 East, Maegashira 12 West, Jonokuchi 68 East, etc.<br/>
nn # dd         -->   yokozuna 1 east, maegashira 12 west, jonokuchi 68 east, etc.<br/>
N#D             -->   Y1E, M12W, Jk68E, etc.<br/>
N#d             -->   Y1e, M12w, Jk68e, etc.<br/>
N               -->   Y, M, Jk, etc.<br/>
\#d              -->   1e, 12w, 68e, etc.

## USE GUIDE

### FORMAT INPUT RULES
"\<RANK>".sumoRank("**\<DESIRED FORMAT>**")
1.  Format can be arranged in any combination<br/>
    "S1W".sumoRank("Nn")                 --> "Sekiwake"<br/>
    "S1W".sumoRank("N#d")                --> "S1w"<br/>
2.  Spaces between rankings will be retained<br/>
    "S1W".sumoRank("nn # dd")            --> "sekiwake 1 west"<br/>

### RANK INPUT RULES
"**\<RANK>**".sumoRank("\<DESIRED FORMAT>")
1.  Input rank can be any arrangement<br/>
    "Komusubi 1 e".sumoRank("N#D")       --> "K1E"<br/>
    "e 1 Komusubi".sumoRank("N#D")       --> "K1E"<br/>
    "K1e".sumoRank("N#D")                --> "K1E"<br/>
2.  Input rank IS caps sensitive<br/>
    "KomuSUBi 1 eASt".sumoRank("Nn")     --> Error SR.304 

### CONTENT ERRORS
+   `SR.101`  Non-existent Name/Number rankings throw error<br/>
    "Maegashira 18 East".sumoRank("N#D") --> Error<br/>
+   `SR.202`  (INCOMPLETE) Lower division rankings throw error<br/>
    "Sandanme 82 East".sumoRank("N#D")   --> Error

### INPUT ERRORS FOR RANK
+   `SR.301`  Empty rank types throw error<br/>
    "".sumoRank("Dd")                    --> Error<br/>
+   `SR.302`  Blank rank types throw error<br/>
    "     ".sumoRank("Nn#Dd")            --> Error<br/>
+   `SR.303`  (ERROR DOES NOT EXIST)<br/>
+   `SR.304`  Non-rank item throw error<br/>
    "M two east".sumoRank("N#D")         --> Error<br/>
    "i like turtles".sumoRank("N#D")     --> Error<br/>
+   `SR.305`  Multiple instances of rank type throw error<br/>
    "Y Y".sumoRank("Nn#Dd)               --> Error<br/>
    "Y y".sumoRank("Nn#Dd)               --> Error<br/>
    "Y M".sumoRank("Nn#Dd)               --> Error<br/>
    "Ozeki ozeki".sumoRank("Nn#Dd)       --> Error<br/>
    "Ozeki Sekiwake".sumoRank("Nn#Dd)    --> Error<br/>
+   `SR.306`  Rank Name not given, but requested<br/>
    "2 West".sumoRank("Nn")              --> Error<br/>
+   `SR.307`  Rank Number not given, but requested<br/>
    "Ozeki West".sumoRank("#")           --> Error<br/>
+   `SR.308`  Rank Direction not given, but requested<br/>
    "Ozeki 2".sumoRank("Dd")             --> Error<br/>


### INPUT ERRORS FOR FORMAT
+   `SR.401`  Empty format types throw error<br/>
    "K2E".sumoRank("")                   --> Error<br/>
+   `SR.402`  Blank format types throw error<br/>
    "K2E".sumoRank("    ")               --> Error<br/>
+   `SR.403`  Incorrect format types throw error<br/>
    "Y1E".sumoRank(123)                  --> Error<br/>
    "Y1E".sumoRank(true)                 --> Error<br/>
    "Y1E".sumoRank([])                   --> Error<br/>
    "Y1E".sumoRank({})                   --> Error<br/>
+   `SR.404`  Duplicate format types throw error<br/>
    "M5W".sumoRank("Dd Dd")              --> Error<br/>
    "M5W".sumoRank("Dd d")               --> Error<br/>
    "M5W".sumoRank("# #")                --> Error<br/>

## INPUT ERRORS FOR sumoRank.sort
+   `SR.501`  Empty array, or array with only 1 rank throw error<br/>
    sumoRank.sort([])                          --> Error<br/>
    sumoRank.sort([ {id:1,rank:"Y1E"} ])       --> Error<br/>
+   `SR.502`  Array items do not contain 'rank' property<br/>
    sumoRank.sort([ {id:1}, {id:2} ])          --> Error<br/>
+   `SR.503`  Cannot sort, items do not contain rank number<br/>
    sumoRank.sort([ {rank:"Y"}, {rank:"Y"} ])  --> Error<br/>
+   `SR.504`  Cannot sort, items do not contain rank direction<br/>
    sumoRank.sort([ {rank:"Y1"}, {rank:"Y1"} ])  --> Error<br/>
+   `SR.505`  Duplicate rank found<br/>
    sumoRank.sort([ {rank:"Y1E"}, {rank:"Y1E2"} ])  --> Error<br/>