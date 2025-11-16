import Board from "./Board"
function Square({value, onSquareClick}){

    return(
        <button
        className='square'
        onClick={onSquareClick}
        >
        {value}
        </button>

    )
}

export default Square