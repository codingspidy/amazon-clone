import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

const CheckoutItem = ({
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
  hasPrime,
}) => {
  let productRating = Math.floor(rating);
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" alt="" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(productRating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
          <Currency quantity={price} currency="GBP" />
          {hasPrime && (
            <div className="flex items-center space-x-2">
              <img
                loading="lazy"
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs text-gray-500">FREE next-day delivery</p>
            </div>
          )}
        </div>
      </div>
      <div onClick={removeItemFromBasket} className="mt-auto">
        <button className="button">Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
