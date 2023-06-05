import robot from "./../../assets/robot.png";
import cool from "./../../assets/cool.png";
import { useState } from "react";
//import { Button } from "react-bootstrap";
import Player from "./components/player";

const movingSpeed = 10;

export type PlayerType = {
  id: string;
  character: string;
};

type NamesType = {
  playerOne: string;
  playerTwo: string;
};

const playersData: PlayerType[] = [
  {
    id: "player_one",
    character: robot,
  },
  {
    id: "player_two",
    character: cool,
  },
];

const BootstrapGame = () => {
  const [finished, setFinished] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [names, setNames] = useState<NamesType>({
    playerOne: "Player one",
    playerTwo: "Player Two",
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    //Check which event is fired and pass the right player ID
    if (event.code === "Space") {
      movePlayer("player_one");
    } else if (event.code === "Numpad0") {
      movePlayer("player_two");
    }
  };

  const movePlayer = (id: string) => {
    //Get line of one player and its width in px
    const lineElement = document.querySelector(
      ".bootstrap__game__line"
    ) as HTMLDivElement;
    const lineWidth: number = lineElement.clientWidth;

    //Get player element by its id
    const player = document.querySelector(`#${id}`) as HTMLImageElement;
    //Get marginLeft value and remove "px" with substring function because javascript returns me margin like this: "20px"
    const playerMarginLeft = player.style.marginLeft;
    //cast substringed value to number and save it to the "moved" variable
    const moved = Number(
      playerMarginLeft.substring(0, playerMarginLeft.length - 2)
    );

    //Check if player is moved further than my finish line
    if (moved > lineWidth - 200) {
      setFinished(true);
      setWinner(id === "player_one" ? names.playerOne : names.playerTwo);
    } else {
      //if player is not finished move it for "movingSpeed" value
      player.style.marginLeft = moved + movingSpeed + "px";
    }
  };

  const handleReset = () => {
    //Reset all states if game is reseted
    setFinished(false);
    setWinner("");
    const playerOne = document.querySelector(`#player_one`) as HTMLImageElement;
    const playerTwo = document.querySelector(`#player_two`) as HTMLImageElement;
    playerOne.style.marginLeft = "0";
    playerTwo.style.marginLeft = "0";
  };

  const handleName = (name: string, id: string) => {
    const newState = { ...names };
    if (id === "player_one") {
      newState.playerOne = name;
    } else {
      newState.playerTwo = name;
    }
    setNames(newState);
  };

  return (
    <>
      <div
        className="bootstrap__tab__content"
        tabIndex={0}
        onKeyDown={(e) => {
          if (!finished) {
            handleKeyDown(e);
          }
        }}
      >
        {playersData.map((player) => {
          return (
            <Player
              handleName={(name: string, id: string) => handleName(name, id)}
              {...player}
            />
          );
        })}

        {finished ? (
          <>
            <div
              className="custom-modal__overlay"
              onClick={() => handleReset}
            ></div>
            <div className="custom-modal">
              <div className="custom-modal__title">Pobjedio je {winner}</div>
              {/* <Button variant="success" onClick={() => handleReset()}>
                Reset
              </Button> */}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default BootstrapGame;
