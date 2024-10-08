import React, { useContext, useState, useEffect } from "react";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProducts/RelatedProduct";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Product ID from URL:", productid);
    console.log("All Products:", all_products);

    const foundProduct = all_products.find((e) => e.id === Number(productid));
    console.log("Found Product:", foundProduct);

    setProduct(foundProduct);
    setLoading(false);
  }, [all_products, productid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct category={product.category} />
    </div>
  );
}

export default Product;