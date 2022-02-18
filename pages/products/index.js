import React from "react";

function PrductsList({ products }) {
  return (
    <>
      <h1>ProductLists</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PrductsList;

export const getStaticProps = async () => {
  console.log("Regrenation!!!!!");
  const result = await fetch(
    "http://localhost:4000/products"
  );
  const data = await result.json();

  return {
    props: {
      products: data,
    },
    revalidate: 1,
  };
};
