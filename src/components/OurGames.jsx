import { gameData } from "../GameData"
import Game from "./Game"

const OurGames = () => {
  return (
    <div className="pt-5 pb-5 min-h-[100vh]">
        <h1 className="text-[#9340FF] text-3xl flex justify-center mb-10">OurGames</h1>
        <div className="games w-full flex flex-wrap gap-5 justify-center px-10">
            {gameData.map((game) => {
                return <Game key={game.id} game={game} />
            })}            
        </div>
    </div>
  )
}

export default OurGames