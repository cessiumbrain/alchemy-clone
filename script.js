
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
    
    //function testing if column adjacent spaces have matching symbol
    const checkSymbols = () =>{
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

            console.log(rowPieces)
            rowSymbols = rowPieces.map(piece=>{
                return piece?.symbol
            })
            console.log(rowSymbols)
            
            if(currentSymbol===rowSymbols[columnIndex-1] || currentSymbol===rowSymbols[columnIndex +1]){
                isMatch= true
            }

            return isMatch


        }
        console.log(checkRowSymbols())

        // checkColumnSymbols()
            
    }
    if(isSpaceOccupied()){
        console.log('space is occupied')
    } else {
        checkSymbols()
    }
    
    
    
}

//apply click listener
document.querySelector('.grid-container').addEventListener('click', (e)=>{onBoardClick(e)})