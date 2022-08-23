import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export default function GamePage() {

  return (
    <div>
      <img src="/logo-4.png" className="logo-gamepage" alxt="logo" />
      <section className="gamepage" id="home">
      
        <div className="content-gamepage">
          
          <div className="buttons">
            <iframe id="gameFrame" allowFullScreen={true} scrolling="no" height="1080" width="1280" sandbox="allow-same-origin allow-scripts" src="https://game.loreofdegenerates.com"></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
