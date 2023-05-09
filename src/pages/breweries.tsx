import { useEffect, useState } from "react";

type BreweryType = {
  name: string;
  city: string;
  id: string;
  country: string;
};

const Breweries = () => {
  const [data, setData] = useState<BreweryType[]>([]);
  const [dataByCity, setDataByCity] = useState<BreweryType[]>([]);
  const [searchData, setSearchData] = useState<BreweryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const getBreweries = () => {
    fetch("https://api.openbrewerydb.org/v1/breweries")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const getBreweryByCity = (city: string) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=10&page=4`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setDataByCity(jsonData);
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = (searchValue: string) => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries/search?query=${searchValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBreweries();
    getBreweryByCity("san_diego");
  }, []);

  return (
    <div className="container">
      <h1>Breweries</h1>
      <div>
        {data.length > 0 ? (
          data.map((brewery: BreweryType) => {
            return (
              <div key={brewery.id}>
                {brewery.name}, {brewery.city}
              </div>
            );
          })
        ) : (
          <div>Nema niti jedna pivovara za zadani parametar</div>
        )}
      </div>
      <h1>By City</h1>
      <div>
        {dataByCity.map((brewery: BreweryType) => {
          return <div key={brewery.id}>{brewery.name}</div>;
        })}
      </div>
      <h1>Search</h1>
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={() => handleSearch(searchValue)}>Search</button>
      </div>
      <div>
        {searchData.length > 0 ? (
          searchData.map((brewery: BreweryType) => {
            return <div key={brewery.id}>{brewery.name}</div>;
          })
        ) : (
          <div>
            Nisam pronašao niti jednu pivovaru s imenom: {searchValue}, probaj
            upisati neku poznatiju
          </div>
        )}
      </div>
    </div>
  );
};

export default Breweries;
