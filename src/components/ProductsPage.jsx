import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(jsonData);

  const handleFilter = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleFilter={handleFilter}/>
      <ProductTable  products={filteredProducts}/>
    </div>
  );
}

export default ProductsPage;