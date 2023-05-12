import { useEffect, useState } from "react";
import IconCarLeft from "../assets/icon-car-left";
import IconCarRight from "../assets/icon-car-right";
import IconPopulation from "../assets/icon-population";
import { CountryType } from "./europe";

const Country = () => {
  const [countryData, setCountryData] = useState<CountryType[]>([]);

  const getCountry = () => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setCountryData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="container">
      <h1>Africa</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Map</th>
            <th>Population</th>
            <th>Borders</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {countryData.length > 0 ? (
            countryData.map((country) => {
              return (
                <tr key={country.area}>
                  <td>{country.name.official}</td>
                  <td>
                    <a href={country.maps.googleMaps}>Google maps</a>
                  </td>
                  <td>
                    <div className="table__cell--center">
                      <IconPopulation />
                      <span className="table__cell--space">
                        {new Intl.NumberFormat().format(country.population)}
                      </span>
                    </div>
                  </td>
                  <td>
                    {country.borders
                      ? country.borders.map((border, index) => {
                          if (index == country.borders.length - 1) {
                            return border;
                          } else {
                            return border + ", ";
                          }
                        })
                      : "nema granica"}
                  </td>
                  <td>
                    <div className="table__cell--center">
                      <span>
                        {country.car.side === "left" ? (
                          <IconCarLeft />
                        ) : (
                          <IconCarRight />
                        )}
                      </span>
                      <span className="table__cell--space">
                        {country.car.signs.map((sign) => {
                          return sign + " ";
                        })}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={5}>There is no data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Country;
