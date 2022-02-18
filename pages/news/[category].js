const NewDetail = ({ news, category }) => {
  return (
    <>
      <h1>About New for category {category}</h1>
      {news.map((singleNew) => {
        return (
          <div key={singleNew.id}>
            <h2>
              {singleNew.id} {singleNew.title}
            </h2>
            <p>{singleNew.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default NewDetail;

export const getServerSideProps = async (
  context
) => {
  const { params, res, req, query } = context;
  const { category } = params;

  const result = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  console.log(query);

  const data = await result.json();

  return {
    props: {
      news: data,
      category,
    },
  };
};
