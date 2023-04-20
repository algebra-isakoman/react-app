import { useState } from "react";

type UserType = {
  name: string;
  lastName: string;
  age: number;
  height: string;
  guitars: {
    prva: string;
    druga: string;
    treca: string;
  };
};

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferarri" = "bmw";

  const obj: UserType = {
    name: "Ivan",
    lastName: "Sakoman",
    age: 29,
    height: "183cm",
    guitars: {
      prva: "Fender",
      druga: "Seagul",
      treca: "Schecter",
    },
  };

  color = "green";
  color = "asd";

  //obije vrijednosti moraju biti true, kako bi program ušao u if statement
  if (pi & number) {
    console.log(pi);
  }
  //samo jedna od varijabli treba biti true
  if (pi | number) {
  }

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  //Zadatak:
  //Definiraj varijablu za ime nekog voća
  //Definiraj varijablu za kalorijsku vrijdnost toga voća
  //definiraj varijablu za boju toga voća
  //definiraj varijablu za jestivost toga voća (da ili ne)
  //Kreiraj tablicu sa podatcima o kreiranom voću

  return (
    <div className="container">
      <h1>Varijable vježba</h1>
      <div>
        <h4>Vrijednost pi varijable je: {pi + "5"}</h4>
        <h4>Vrijednost color varijable je: {color + "red"}</h4>
        <h4>Vrijednost car varijable je: {car}</h4>
      </div>
      <hr />
      <div>
        <h4>Vrijednost našeg statea je: {value}</h4>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
      <hr />
      <div>Rezultat naše funkcije je: {addOnOurValue(4, 5)}</div>
      <hr />
      <div>
        <h4>Vrijednosti našeg objekta su:</h4>
        <div>
          Ime i prezime: {obj.name} {obj.lastName}
        </div>
        <div>Godine: {obj.age}</div>
        <div>Visina: {obj.height}</div>
        <div>
          Gitare: {obj.guitars.prva}, {obj.guitars.druga}, {obj.guitars.treca}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Varijable;
