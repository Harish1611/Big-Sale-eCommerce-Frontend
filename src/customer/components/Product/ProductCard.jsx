import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product?._id}`)} className="productCard w-[11rem] sm:w-[15rem] border m-2 sm:m-3 transition-all cursor-pointer ">
      <div className="h-[12rem] sm:h-[17rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3 ">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p className="sm:text-sm text-sm line-clamp-2">{product.title}</p>

          <p className="font-semibold sm:text-sm  opacity-50">
            {product.color}
          </p>
        </div>

        <div className="flex space-x-2 items-center">
          <p className="font-semibold text-sm  ">
            ₹{product.discountedPrice}
          </p>
          <p className="opacity-50 line-through text-sm ">
            ₹{product.price}
          </p>
          <p className="text-green-600 font-semibold text-sm ">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
