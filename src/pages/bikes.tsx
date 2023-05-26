import { useState } from "react";
import IconClose from "../assets/icon-close";
import { bikesData, BikeType } from "../data/bikesData";

const Bikes = () => {
  const [activeBike, setActiveBike] = useState<BikeType | null>(null);

  const handleBike = (bikeId: number) => {
    const bike = bikesData.find((item) => item.id === bikeId);
    bike ? setActiveBike(bike) : setActiveBike(null);
  };

  return (
    <div className="container">
      <h1>Bikes</h1>
      <hr />
      <div className="bikes__grid">
        {bikesData.map((bike) => {
          return (
            <div
              key={bike.id}
              className="bikes__card"
              onClick={() => handleBike(bike.id)}
            >
              <img
                className="bikes__card__img"
                src={bike.img}
                alt={bike.type}
              />
              <div className="bikes__card__body">
                <h4 className="bikes__card__title">{bike.type}</h4>
                <p className="bikes__card__description">{bike.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {activeBike ? (
        <>
          <div
            className="modal__overlay"
            onClick={() => setActiveBike(null)}
          ></div>
          <div className="modal">
            <div className="modal__header">
              <div className="modal__header__title">{activeBike.type} Bike</div>
              <div className="modal__close" onClick={() => setActiveBike(null)}>
                <IconClose />
              </div>
            </div>
            <div className="modal__body">
              <img src={activeBike.img} alt={activeBike.type} />
              <div className="modal__body__content">
                <p className="modal__body__subtitle">
                  {activeBike.description.substring(0, 85)}...
                </p>
                <p className="modal__body__text">
                  {activeBike.longDescription}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Bikes;
