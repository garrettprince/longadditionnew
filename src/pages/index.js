/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Feed from "../components/Feed";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <Head>
        <title>Long Addition</title>
        <meta name="description" content="Long Addition" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="mt-5 sm:mt-20 max-w-2xl mx-auto">
        <Feed selected={selected} />
      </div>
    </div>
  );
}
