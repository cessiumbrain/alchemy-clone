## To Do
1. add check if the space clicked is adjacent to center block
2. all adjacent squares must be either empty or match
    - maybe test each adjacent square for empty, match or center block


## Logic
1. test if the space clicked is occupied
2. if not test for a matching color or smybol adjacent in column or row
    - four functions which return true if there is a match in row or column symbol or color
3. if none ignore the click/ if so:
    1. update the board object
    2. update the dom 
    3. bring up the next piece