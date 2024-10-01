import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import "./globals.css"
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";

export default function Home(){

    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
        </div>
    );
}