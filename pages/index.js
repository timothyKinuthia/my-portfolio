import { useState, useEffect } from "react";
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero'
import Projects from '../components/projects/Projects';
import Technology from "../components/technologies/Technology";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";


export default function Home() {

  const [dimension, setDimension] = useState("");

  useEffect(() => {
    const listener = () => {
      setDimension(window.innerWidth);
    };

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, []);
    
  useEffect(() => {
    const listener = () => {
      setDimension(window.innerWidth);
    };

    window.addEventListener("load", listener);

    return () => window.removeEventListener("load", listener);
  }, []);

  return (
    <div>
      <Layout dimension={dimension} >
      <Hero />
      <Projects dimension={dimension} />
      <Technology />
      <About />
      <Footer/>
      </Layout>
    </div>
  )
}
