import { useEffect } from "react";

const Vjezba0305 = () => {
  //Zadatci
  //1. dohvatimo box i promjenimo mu background-color (kroz JS)
  //2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije
  //3. animiramo box do 30px i nazad (kroz JS)
  //3.2. animirati box dijagonalno do (30px,30px) i nazad do 50px
  //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
  //5. dodaj onClick event i na klik smanji dimenzije box-a
  let position = 0;
  let reverse = false;

  useEffect(() => {
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    const frame = () => {
      if (reverse) {
        position--;
      } else {
        position++;
      }
      const currentPosition = position + "px";

      if (position == 30) {
        reverse = true;
      }
      if (position == 0) {
        reverse = false;
      }

      box.style.marginLeft = currentPosition;
    };
    setInterval(frame, 200);
  }, []);

  const handleClick = () => {};

  return (
    <div className="container">
      <h1>Vjezba 0305</h1>
      <hr />
      <div className="box"></div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default Vjezba0305;
