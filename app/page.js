"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import Footer from "./components/Footer";
import NetworkBackground from "./components/Background";

export default function Home() {
  return (
    <>
      <NetworkBackground />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
