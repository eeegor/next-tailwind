import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/Header";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="container">
          <h1 className="text-4xl text-gray-800 font-extrabold">Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            dignissimos, delectus error placeat perspiciatis nulla amet
            repellat, modi distinctio, cupiditate odio nam maxime similique.
            Numquam ratione asperiores ipsam minima ab.
          </p>
          <p className="mt-4">
            <Link href="/about">
              <span className="text-blue-500 hover:text-blue-700 transition-colors">
                About
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
