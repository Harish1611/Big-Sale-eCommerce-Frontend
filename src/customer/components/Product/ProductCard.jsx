import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${5}`)} className="productCard w-[18rem] sm:w-[15rem] border m-3 transition-all cursor-pointer ">
      <div className="h-[20rem] sm:h-[17rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="sm:text-sm ">{product.title}</p>

          <p className="font-semibold sm:text-sm  opacity-50">
            {product.color}
          </p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold sm:text-sm ">
            ₹{product.discountedPrice}
          </p>
          <p className="opacity-50 line-through sm:text-sm ">
            ₹{product.price}
          </p>
          <p className="text-green-600 font-semibold sm:text-sm ">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
