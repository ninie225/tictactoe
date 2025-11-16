import Square from "./Square"
import {calculateWinner} from "../utils/calculateWinner"

function Board({xIsNext, squares, onPlay}) {

    function handleClick(i){
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares= squares.slice()
        if (xIsNext) {
            nextSquares[i]= "X"
        }
        else {
            nextSquares[i]= "O"
        }
        onPlay(nextSquares)
    }

    const result = calculateWinner(squares);
    const winner = result?.winner;
    const winningLine= result?.line || []
    const isDraw= !winner && squares.every(square => square!==null)

    let status;
    if (winner) {
        status = winner + " a gagné !";
    }
    else if (isDraw) {
        status= "Match nul !";
    }
    else {
        status = "Prochain tour : " + (xIsNext ? "X" : "O");
    }

    return(
        <>
            <div className={`status ${winner ? "winner-text" : ""}`}>
                {status}

                {winner && (
                <>
                    {/* Haut */}
                    <span className="star yellow starA"></span>
                    <span className="spark white sparkA"></span>

                    <span className="star yellow starB"></span>
                    <span className="spark white sparkB"></span>

                    {/* Milieu */}
                    <span className="star white starC"></span>
                    <span className="spark yellow sparkC"></span>

                    <span className="star white starD"></span>
                    <span className="spark yellow sparkD"></span>

                    {/* Bas */}
                    <span className="star yellow starE"></span>
                    <span className="spark white sparkE"></span>

                    <span className="star yellow starF"></span>
                    <span className="spark white sparkF"></span>
                </>
                )}
            </div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}

export default Board