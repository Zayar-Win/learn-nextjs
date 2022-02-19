import Image from "next/image";
import img from "../public/1.jpg";

const Pets = () => {
  return (
    <>
      <h1>PersonalLists</h1>
      <Image
        src={img}
        placeholder='blur'
        width='300'
        blurDataURL={img}
        height='400'
        alt='something'
      />
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/${path}.jpg`}
              width='300'
              height='400'
              alt='my gf'
            />
          </div>
        );
      })}
    </>
  );
};

export default Pets;
