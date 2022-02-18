import React from "react";

function NewsList({ news }) {
  return (
    <>
      <h1>NewsList</h1>
      {news.map((singleNew) => {
        return (
          <div key={singleNew.id}>
            <h2>
              {singleNew.id} {singleNew.title} |{" "}
              {singleNew.category}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default NewsList;

export const getServerSideProps = async () => {
  const result = await fetch(
    "http://localhost:4000/news"
  );
  const data = await result.json();

  return {
    props: {
      news: data,
    },
  };
};
