import Head from "next/head";
import { Header } from "../components/Header";

export default function About({ posts }) {
  return (
    <div>
      <Head>
        <title>About / Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="container">
          <h1 className="text-4xl text-gray-800 font-extrabold">About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            dignissimos, delectus error placeat perspiciatis nulla amet
            repellat, modi distinctio, cupiditate odio nam maxime similique.
            Numquam ratione asperiores ipsam minima ab.
          </p>
        </div>
      </div>
    </div>
  );
}
