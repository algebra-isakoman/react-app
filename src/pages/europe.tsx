import React, { useEffect, useState } from "react";
type CountryNameType = {
  common: string;
  official: string;
  currencies: CurrenciesType;
};
type CurrenciesType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};
type FlagsType = {
  png: string;
  svg: string;
};
export type CountryType = {
  name: CountryNameType;
  flags: FlagsType;
  currencies: CurrenciesType;
  capital: string[];
  area: number;
};

const Europe = () => {
  const [europeData, setEuropeData] = useState<CountryType[]>([]);

  const getEuropeData = () => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEuropeData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEuropeData();
  }, []);

  return (
    <div className="container">
      <h1>Europe</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currency</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {europeData.map((country: CountryType) => {
            return (
              <tr key={country.area}>
                <td>
                  <a href={`/europe/${country.capital[0].toLocaleLowerCase()}`}>
                    {country.name.official}
                  </a>
                </td>
                <td>
                  <img
                    src={country.flags.png}
                    className="table__flag"
                    alt={`${country.name.official} flag`}
                  />
                </td>
                <td>
                  {Object.keys(country.currencies).map((key) => {
                    return (
                      <React.Fragment key={key}>
                        <span>{country.currencies[key].name}</span>,{" "}
                        <span>{country.currencies[key].symbol}</span>
                      </React.Fragment>
                    );
                  })}
                </td>
                <td>{country.capital.map((capital) => capital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Europe;
