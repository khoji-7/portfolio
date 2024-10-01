import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import "./globals.css"
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home(){

    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Skills/>
        </div>
    );
}