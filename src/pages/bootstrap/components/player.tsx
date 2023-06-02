import { useState } from "react";
import { PlayerType } from "../bootstrap-game";

type PlayerProps = {
  handleName: (name: string, id: string) => void;
} & PlayerType;

const Player = ({ id, character, handleName }: PlayerProps) => {
  const [playerName, setPlayerName] = useState(id);

  return (
    <>
      <div className="bootstrap__game__row">
        <div key={id} className="bootstrap__game__title">
          <input
            type="text"
            value={playerName}
            onChange={(e) => {
              handleName(e.target.value, id);
              setPlayerName(e.target.value);
            }}
            placeholder="Player one"
          />
        </div>
        <div className="bootstrap__game__line">
          <img
            id={id}
            className="bootstrap__game__player"
            src={character}
            alt="player one"
          />
          <div className="bootstrap__game__grass"></div>
        </div>
      </div>
    </>
  );
};

export default Player;
