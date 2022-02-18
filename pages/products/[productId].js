import React from "react";
import { useRouter } from "next/router";

function ProductDetail({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title}
      </h2>
      <p>
        {product.description} {product.price}
      </p>
    </>
  );
}

export default ProductDetail;

export const getStaticProps = async (context) => {
  const { params } = context;
  const result = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await result.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10, //this will ask the next app will regreanate the html page after 10s
    //at first refresh it will not give the true page it will give cache page because when we request to
    //the server it grenateing the new page so we give the cache page
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
};
