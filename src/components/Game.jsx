import Button from "./Button";

const Game = ({game}) => {
  return (
    <div className="text-white max-w-[400px] flex flex-col gap-3 justify-center items-center border border-gray-500 p-5 rounded-3xl">
      <div className="image">
        <img src={game.image} alt="" />
      </div>
      <div className="name">
        <div className="name">{game.name}</div>
      </div>
      <div className="buttons flex flex-col gap-2 items-center">
        <a href={game.demo} target="_blank">
          <Button>Demo</Button>
        </a>
        <a href={game.github} target="_blank">
          <Button>Source Codes</Button>
        </a>
      </div>
    </div>
  );
};

export default Game;
