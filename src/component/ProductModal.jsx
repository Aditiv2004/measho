const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">✖</button>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h2 className="text-xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 my-2">{product.description}</p>
        <p className="font-semibold text-lg">Price: ₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;

