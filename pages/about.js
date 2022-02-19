import Footer from "../components/Footer";

const About = () => {
  return <h1>About Page</h1>;
};

export default About;

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
