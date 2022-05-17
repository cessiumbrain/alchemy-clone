
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
    },

    queueOne: null,
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
        const checkColumnSymbols = () =>{
            let isMatch = false
            //get currentPiece's symbol
            const currentSymbol = currentPiece.symbol
            console.log(currentSymbol)
            //create array of symbols in the column
            const columnPieces = Object.values(gameBoard[clickedColumn])
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

        }

        console.log(checkColumnSymbols())
            
    }
    if(isSpaceOccupied()){
        console.log('space is occupied')
    } else {
        checkSymbols()
    }
    
    
    
}

//apply click listener
document.querySelector('.grid-container').addEventListener('click', (e)=>{onBoardClick(e)})