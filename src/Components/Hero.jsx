import {useRef, useEffect} from 'react'
import '../index.css'

const Hero = () => {

    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current)videoRef.current.playbackRate = 3;
    }, []);
  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Pro" />
        </div>

        <video src="/videos/hero.mp4" autoPlay loop muted playsInline></video>

        <button>Buy</button>   
        <p>From $1999 or $133 for 12 months</p> 
        </section>
        );
    };
    export default Hero;