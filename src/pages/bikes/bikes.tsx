import { useState } from "react";
import IconClose from "../../assets/icon-close";
import IconFavorite from "../../assets/icon-favorite";
import { bikesData, BikeType } from "../../data/bikesData";
import BikesCard from "./bikes-card";

const Bikes = () => {
  const [activeBike, setActiveBike] = useState<BikeType | null>(null);
  const [favoriteBikes, setFavoriteBikes] = useState<BikeType[]>([]);

  const handleBike = (bikeId: number) => {
    const bike = bikesData.find((item) => item.id === bikeId);
    bike ? setActiveBike(bike) : setActiveBike(null);
  };

  const handleFavorite = (bikeId: number) => {
    const isPresent = favoriteBikes.find((item) => item.id === bikeId);
    if (isPresent) {
      const newState = favoriteBikes.filter((item) => item.id !== bikeId);
      setFavoriteBikes(newState);
    } else {
      const currentBike = bikesData.find((item) => item.id === bikeId);
      if (currentBike) {
        setFavoriteBikes([...favoriteBikes, currentBike]);
      }
    }
  };

  const handleShowFavorite = (id: number) => {
    const isFavorite = favoriteBikes.find((item) => item.id === id);
    if (isFavorite) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <h1>Bikes</h1>
      <hr />
      <div className="bikes__grid">
        {bikesData.map((bike) => {
          return (
            <BikesCard
              bike={bike}
              setBike={(id: number) => handleBike(id)}
              onFavorite={(id) => handleFavorite(id)}
            />
          );
        })}
      </div>
      {activeBike ? (
        <>
          <div
            className="custom-modal__overlay"
            onClick={() => setActiveBike(null)}
          ></div>
          <div className="custom-modal">
            <div className="custom-modal__header">
              <div className="custom-modal__header__title">
                {activeBike.type} Bike
              </div>
              <div
                className="custom-modal__close"
                onClick={() => setActiveBike(null)}
              >
                <IconClose />
              </div>
            </div>
            <div className="custom-modal__body">
              <div className="custom-modal__favorite">
                <IconFavorite
                  active={handleShowFavorite(activeBike.id)}
                  width={42}
                />
              </div>
              <img src={activeBike.img} alt={activeBike.type} />
              <div className="custom-modal__body__content">
                <p className="custom-modal__body__subtitle">
                  {activeBike.description.substring(0, 85)}...
                </p>
                <p className="custom-modal__body__text">
                  {activeBike.longDescription}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      <h1>Favorites</h1>
      <hr />
      <div className="bikes__grid">
        {favoriteBikes.length > 0 ? (
          favoriteBikes.map((favoriteBike) => {
            return (
              <BikesCard
                hideFavorite={true}
                bike={favoriteBike}
                setBike={(id: number) => handleBike(id)}
              />
            );
          })
        ) : (
          <div>
            <h4>Trenutno nemas favorita</h4>
            <p>Uvijek možeš dodati koji klikom na srce</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Bikes;
