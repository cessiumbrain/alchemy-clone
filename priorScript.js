
//testing objects and functiions----------------------->
const BlueZero ={
    symbol: 0,
    color: 'blue'
}


class GamePiece {
    constructor(){
        this.symbol= Math.floor(Math.random()*3);
        const setColor=()=>{
            const randomNum = Math.floor(Math.random()*3)
            switch(randomNum){
                case 0:
                    return 'blue';
                case 1:
                    return 'red';
                case 2:
                    return 'black'
                    break;
            }
        }
        this.color=setColor()
        const setId = () =>{
            return pieceList.length + 1
        }
        this.Id = setId()
        this.column= null;
        this.row = null
        }
        
        
    }
let discard = 0
const gameBoard = {
    a :{
        1: BlueZero,
        2: null,
        3: null
    },
    b :{
        1: null,
        2: null,
        3: null
    },
    c:{
        1:null,
        2: null,
        3: null
    }
}
const pieceList = [BlueZero]

const onDiscardClick = () =>{
    discard += 1
    console.log('click')
    if(discard>3){
        //game over
        console.log('game over')
    }
}
const onBoardClick = (e) =>{

    //set variables to reference the row and column
    const currentPiece = pieceList.at(-1)
    const clickedRow = e.target.dataset.row
    const clickedColumn = e.target.dataset.column

    //define checking functions

    //function testing if space is occupied
    const isSpaceOccupied = () =>{

        let value=false
        if(gameBoard[clickedColumn][clickedRow]){
            value = true
        }

        return value
    }
    
    //function testing if adjacent spaces have matching symbol
    const checkSymbols = () =>{
        let anyMatches = false
        //get currentPiece's symbol
        const currentSymbol = currentPiece.symbol
        const columnPieces = Object.values(gameBoard[clickedColumn])
        const boardArray = Object.keys(gameBoard)


        const checkColumnSymbols = () =>{
            let isMatch = false

            //create array of symbols in the column
 
            let columnSymbols = [];
            columnPieces.forEach(piece =>{
                if(piece){
                    columnSymbols.push(piece.symbol)
                } else {
                    columnSymbols.push(null)
                }
            })
            const columnIndex = clickedRow -1
            //check plus and minus one in the index-if there's a matching symbol in either, set isMatch to true

            if(columnSymbols[columnIndex -1]===currentSymbol || columnSymbols[columnIndex + 1]=== currentSymbol){
                isMatch = true
            }
            return isMatch   
          

        }
        const checkRowSymbols = () =>{
            let isMatch = false
            
            //create array of pieces in the row
            let rowPieces = []
            //and array of symbols
            let rowSymbols= []
            //iterate through each column object and take the value in the particular row slot
            let columnIndex = null
            //convert column letter index to number
            switch(clickedColumn){
                case 'a':
                    columnIndex = 0;
                break;
                case 'b':
                    columnIndex = 1;
                break;
                case 'c':
                    columnIndex = 2;
                break;
            }

            //create and array of column objects on the board
            const columnArray = Object.values(gameBoard)

            //for each column object in the array, go through and push the value for the key corresponding to the clicked row ()
            columnArray.forEach(column=>{

                rowPieces.push(column[clickedRow])})


            rowSymbols = rowPieces.map(piece=>{
                return piece?.symbol
            })

            
            if(currentSymbol===rowSymbols[columnIndex-1] || currentSymbol===rowSymbols[columnIndex +1]){
                isMatch= true
            }

            return isMatch


        }

        if(checkColumnSymbols()===true || checkRowSymbols()===true){
            anyMatches =true
        }

        return anyMatches            
    }

    //function testing if adjacent space is center block
    const checkCenterBlock = () =>{
        
    }

    //place piece function will create a new piece and push it to the end of the piece list
    const placePiece=()=>{

        //update the DOM
        const updateDOM = ()=>{
            const DOMpiece = document.createElement('p')
            DOMpiece.innerText = currentPiece.symbol
            DOMpiece.style.color = currentPiece.color
            e.target.appendChild(DOMpiece)
        }
        updateDOM()
        //update the board obj
        gameBoard[clickedColumn][clickedRow]=currentPiece
        console.log(gameBoard)
        //create new piece and put it at the end of the list
        pieceList.push(new GamePiece)
        console.log(pieceList.at(-1))
        //show next piece up
        const nextPiece = document.createElement('p')
        console.log(nextPiece)
        nextPiece.innerText = pieceList.at(-1).symbol
        document.querySelector('.next-piece').appendChild(nextPiece)
        
        
    }
    //check space is occupied- if so return
    if(isSpaceOccupied()){
        console.log('space is occupied')
        return
    } 
    //check adjacent symbols - if so place piece
    else if (checkSymbols()){
        placePiece()
    } 
    //if not occupied but no adjacent matches return
    else {
        console.log('vacant space with no matches')
        return
    }
    

    
}


//update the object
const updateObj = () =>{
    
}
//apply click listener
document.querySelector('.grid-container').addEventListener('click', (e)=>{onBoardClick(e)})
document.querySelector('.discard').addEventListener('click', ()=>{onDiscardClick()})

export {gameBoard}