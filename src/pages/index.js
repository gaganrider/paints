"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import { fetchData } from "@/services/api";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Footer from "@/components/Footer";
import Section7 from "@/components/Section7";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setdata] = useState("");

  useEffect(() => {
    (async () => {
      await fetchData().then((res) => {
        setdata(res.data.data.pages.nodes[0].homepage);

        // console.log(res.data.data.pages.nodes[0].homepage);
      });
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Section1 data={data.banners} />
      <Section2 data={data.homeAboutVideoImage} />
      <Section3 data={data.categories} />
      <Section4 data={""} />
      <Section5 data={""} />
      <Section6 data={""} />
      <Section7 data={data.categories}/>
      <Footer />
    </>
  );
}
