const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl border hover:shadow-xl transition transform hover:scale-105 p-3 cursor-pointer flex flex-col"
      onClick={() => onClick(product)}
    >
      <div className="h-48 flex justify-center items-center overflow-hidden rounded-md">
        <img src={product.image} alt={product.name} className="object-contain h-full" />
      </div>
      <div className="mt-3 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-pink-600 font-bold text-base mt-1">₹{product.price}</p>
        <button className="mt-auto bg-pink-500 text-white py-1.5 px-4 rounded-full text-sm hover:bg-pink-600 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
