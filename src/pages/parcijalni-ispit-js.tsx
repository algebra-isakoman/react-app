import { useEffect, useState } from "react";
import IconSearch from "../assets/icon-search";
type DataType = {
  artistName: string;
  artistViewUrl: string;
  artworkUrl100: string;
  country: string;
  previewUrl: string;
  primaryGenreName: string;
  trackName: string;
};

const ParcijalniIspitJs = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState<DataType[] | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = (searchTerm: string) => {
    fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(res.statusText);
          setData(null);
        }
      })
      .then((data) => {
        setError("");
        setData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>Pretraživanje pjesama</h1>
      <div className="song__input__wrapper">
        <IconSearch />
        <input
          placeholder="Enter a song name"
          className="song__input"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            setLoading(true);
            getData(inputValue);
          }}
        >
          Search
        </button>
      </div>

      <div className="song__grid">
        {loading ? (
          "loading..."
        ) : data ? (
          data.map((song, index) => {
            return (
              <div key={index} className="song__card">
                <img
                  className="song__card__img"
                  src={song.artworkUrl100}
                  alt={`${song.artistName} - ${song.trackName}`}
                />

                <div className="song__card__body">
                  <a
                    target={"_blank"}
                    href={song.artistViewUrl}
                    className="song__card__name"
                  >
                    {song.artistName} - {song.trackName}
                  </a>
                  <div className="song__card__genre">
                    {song.primaryGenreName}
                  </div>
                </div>
                <audio controls>
                  <source src={song.previewUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            );
          })
        ) : (
          <div>{error ? error : "Nema pronađenih rezultata"}</div>
        )}
      </div>
    </div>
  );
};

export default ParcijalniIspitJs;
