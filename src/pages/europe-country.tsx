import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryType } from "./europe";

const EuropeCountry = () => {
  let { capitalId } = useParams();
  const [countryData, setCountryData] = useState<CountryType>();
  const [loading, setLoading] = useState<boolean>(true);

  const getCountry = (capitalId: string) => {
    fetch(`https://restcountries.com/v3.1/capital/${capitalId}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setCountryData(data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (capitalId) {
      getCountry(capitalId);
    } else {
      alert("e fali ti id u url-u");
    }
  }, []);

  return (
    <div className="container">
      {loading ? (
        "Loading..."
      ) : countryData ? (
        <div>
          <h1>{countryData.name.official}</h1>
          <img
            src={countryData.flags.png}
            alt={`flag of ${countryData.name.official}`}
          />
        </div>
      ) : (
        <div>Ne postoji država s glavnim gradom {capitalId}</div>
      )}
    </div>
  );
};
export default EuropeCountry;
