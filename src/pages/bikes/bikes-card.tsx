import { useState } from "react";
import IconFavorite from "../../assets/icon-favorite";
import { bikesData, BikeType } from "../../data/bikesData";

type BikesCardProps = {
  hideFavorite?: boolean;
  bike: BikeType;
  setBike: (bikeId: number) => void;
  onFavorite?: (bikeId: number) => void;
};
const BikesCard = ({
  bike,
  setBike,
  onFavorite,
  hideFavorite = false,
}: BikesCardProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <div key={bike.id} className="bikes__card" onClick={() => setBike(bike.id)}>
      <img className="bikes__card__img" src={bike.img} alt={bike.type} />
      <div className="bikes__card__body">
        <h4 className="bikes__card__title">
          <span>{bike.type}</span>
          {hideFavorite ? (
            <></>
          ) : (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
                onFavorite && onFavorite(bike.id);
              }}
            >
              <IconFavorite active={isFavorite} />
            </span>
          )}
        </h4>
        <p className="bikes__card__description">{bike.description}</p>
      </div>
    </div>
  );
};
export default BikesCard;
