import robot from "./../../assets/robot.png";
import cool from "./../../assets/cool.png";
import { useState } from "react";
import { Button } from "react-bootstrap";

const movingSpeed = 10;

const BootstrapGame = () => {
  const [finished, setFinished] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [playerOne, setPlayerOne] = useState("Player one");
  const [playerTwo, setPlayerTwo] = useState("Player two");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === "Space") {
      movePlayer("player_one");
    } else if (event.code === "Numpad0") {
      movePlayer("player_two");
    }
  };

  const movePlayer = (id: string) => {
    const lineElement = document.querySelector(
      ".bootstrap__game__line"
    ) as HTMLDivElement;
    const lineWidth = lineElement.clientWidth;

    const player = document.querySelector(`#${id}`) as HTMLImageElement;
    const playerMarginLeft = player.style.marginLeft;
    const moved = Number(
      playerMarginLeft.substring(0, playerMarginLeft.length - 2)
    );

    if (moved > lineWidth - 200) {
      setFinished(true);
      setWinner(id === "player_one" ? playerOne : playerTwo);
    } else {
      player.style.marginLeft = moved + movingSpeed + "px";
    }
  };

  const handleReset = () => {
    setFinished(false);
    setWinner("");
    const playerOne = document.querySelector(`#player_one`) as HTMLImageElement;
    const playerTwo = document.querySelector(`#player_two`) as HTMLImageElement;
    playerOne.style.marginLeft = "0";
    playerTwo.style.marginLeft = "0";
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
        <div className="bootstrap__game__row">
          <div className="bootstrap__game__title">
            <input
              type="text"
              value={playerOne}
              onChange={(e) => setPlayerOne(e.target.value)}
              placeholder="Player one"
            />
          </div>
          <div className="bootstrap__game__line">
            <img
              id="player_one"
              className="bootstrap__game__player"
              src={robot}
              alt="player one"
            />
            <div className="bootstrap__game__grass"></div>
          </div>
        </div>
        <div className="bootstrap__game__row">
          <div className="bootstrap__game__title">
            <input
              type="text"
              value={playerTwo}
              onChange={(e) => setPlayerTwo(e.target.value)}
              placeholder="Player two"
            />
          </div>
          <div className="bootstrap__game__line">
            <img
              id="player_two"
              className="bootstrap__game__player"
              src={cool}
              alt="player one"
            />
            <div className="bootstrap__game__grass"></div>
          </div>
        </div>
        {finished ? (
          <>
            <div
              className="custom-modal__overlay"
              onClick={() => handleReset}
            ></div>
            <div className="custom-modal">
              <div className="custom-modal__title">Pobjedio je {winner}</div>
              <Button variant="success" onClick={() => handleReset()}>
                Reset
              </Button>
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
