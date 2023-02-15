import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../Context/ProductProvider";

const Home = () => {

  const { state } = useProduct()
  const { loading, products, error } = state;
  console.log(loading, products, error);

  let content;
  if (loading) {
    content = <div className="w-screen"><p className="text-5xl text-center">Loading.....</p></div>
  }

  if (error) {
    content = <p className="text-5xl text-center">something has been wrong.....</p>
  }

  if (!loading && !error && products.length) {
    content = products?.map((product, id) => <ProductCard key={id} product={product} />)
  }
  return (
    <div>
      <h1>This is home page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          content
        }
      </div>
    </div>
  );
};

export default Home;
