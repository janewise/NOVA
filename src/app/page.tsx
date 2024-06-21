import Carousel from "./Slider/carousel";
import "./homepage.css";


export default function Home() {
  return (
    <main className="homebg">
      <div className="herotext">
        <h2><span>Explore</span> Infinite World</h2>
        <p>Where Boundaries Dissolve and Imagination Regins</p>
        <a href="https://solsea.io/m/all/"><button className="herobtn">Buy</button></a>
        <h3>Type Of NFT and Benefits</h3>
      </div>
      <div>
      <Carousel />
      </div>
     <br />
    </main>
  );
}
