const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan

    //2. ispisati u konzolu brojeve od 0 do zadanog broja

    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)
  };
  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
