const Vjezba2604 = () => {
  //Nizovi
  let arr = ["mama", "tata", "baka", "dida"];
  for (let i = 0; i < arr.length; i++) {
    //kada dodemo do vrijednost "baka" izadji iz for petlje
    if (arr[i] == "baka") {
      break;
    }
    //izbaci vrijednost "tata" iz array-a
    if (arr[i] == "tata") {
      delete arr[i];
      //ili
      const removeIndex = arr.indexOf("tata");
      // koristi splice samo kada je index pronađen što znaci da mora biti veci od -1
      if (removeIndex > -1) {
        arr.splice(removeIndex, 1);
      }
    }
    console.log(arr[i]);
  }
  delete arr[1];
  arr.push("Ivan");
  console.log("nas array je: ", arr);

  //Funkcije
  let baka;
  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }
  const printText = (text: string) => {
    return text;
  };

  //Objekti
  type CarType = {
    [key: string]: number | string;
  };

  let car: CarType = {
    marka: "Škoda",
    model: "Fabia",
    tipMotora: "Benzin",
    obujamMotora: 1600,
    snaga: "50kw",
    boja: "zelena",
    kotaca: 4,
    maxBrzina: 180,
  };

  const recenica = `Ja imam predobar auto koji je ${car.marka} ${car.model} i ide ${car.maxBrzina} na sat. U njega točim ${car.tipMotora} i stopi se s travom jer mu je boja ${car.boja}.`;
  const printValue = (key: string) => {
    return car[key];
  };

  //Zadata
  //ispiši najveci broj iz niza
  const brojevi = [12, 98, 65, 4, 63, 51, 71, 582, 13, 4, 6, 9, 65, 56];

  //Zadača
  //ispiši najdužu i najkraću riječ iz niza
  const rijeci = [
    "balance",
    "biscuit",
    "side",
    "grind",
    "refund",
    "cast",
    "circulate",
    "accumulation",
    "fold",
    "cut",
    "entertainment",
  ];

  return (
    <div className="container">
      <h1>Funkcije</h1>
      <hr />
      <div>{bringBaka()}</div>
      <div>{printText("Neki tekst")}</div>
      <h1>Objekti</h1>
      <hr />
      <div>{recenica}</div>
      <h5>JSON objekta:</h5>
      <pre>{JSON.stringify(car, null, 2)}</pre>
      <div>{printValue("snaga")}</div>
    </div>
  );
};

export default Vjezba2604;
