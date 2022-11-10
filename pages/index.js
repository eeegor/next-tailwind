import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-4xl text-gray-800 font-extrabold">Hello</h1>
      </div>
    </div>
  );
}
