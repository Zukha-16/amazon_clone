import Head from "next/head";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

const Home = ({ products }) => {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
