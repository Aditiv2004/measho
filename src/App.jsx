import { useState } from "react";
import ProductCard from "./component/ProductCard";
import ProductModal from "./component/ProductModal";

const sampleProducts = [
  {
    id: 1,
    name: "Nike Air Max",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/56ada3f3-dd4f-4945-ba48-f709ce03d9a3/custom-nike-air-max-97-shoes-by-you.png",
    price: 4999,
    description: "Comfortable and stylish running shoes."
  },
  {
    id: 2,
    name: "Samsung Galaxy",
    image: "https://m.media-amazon.com/images/I/71Vd1+ZnY-L._UF1000,1000_QL80_.jpg",
    price: 19999,
    description: "Latest Android smartphone with great features."
  },
  {
    id: 3,
    name: "Sony Headphones",
    image: "https://assets.ajio.com/medias/sys_master/root/20240703/yZmT/6685df151d763220fac5808a/-473Wx593H-4938418060-multi-MODEL.jpg",
    price: 2999,
    description: "Noise cancelling wireless headphones."
  },
  {
    id: 4,
    name: "T-shirt",
    image: "https://www.unstd.in/cdn/shop/files/SAGE-GREEN-2.jpg?v=1734507963&width=800",
    price: 599,
    description: "100% cotton, perfect fit casual tee."
  },
  {
    id: 5,
    name: "Kurtis Set",
    image: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX679_.jpg",
    price: 899,
    description: "Ethnic wear for women – best quality."
  }
];


function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛍 Product Gallery</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;
