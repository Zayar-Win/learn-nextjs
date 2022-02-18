import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const clickHandler = () => {
    console.log("Ordering item");
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/product'>
        <a>Product</a>
      </Link>
      <br />
      <button onClick={clickHandler}>
        Oreder items
      </button>
    </>
  );
}
export default Home;
