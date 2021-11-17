import BgParallax from '../../public/bgparal_marketing.png';
import { Parallax } from "react-parallax";
import {Slide} from 'react-reveal';



export default function MarketingDigitalMobile(){

return (

<div className="marketing_digital_container">

<Parallax
bgImage={BgParallax.src}
bgImageStyle={{opacity: '.5'}}
strength={300}
renderLayer={(percentage) => (
<div>
  <div
    style={{
      position: "absolute",
      background: `rgba(104, 4, 110, 0.7)`,
      left: "-58%",
      top: "30%",
     
      transform: "translate(0%,-50%)",
      width: percentage * 1600,
      height: percentage * 1600
    }}
  />
 
</div>
)}
>

<div className ="marketing_digital_small">
<div className = "marketing_digital_small_text">
  <h1>¿Para qué sirve el Marketing Digital? </h1>    
  <Slide ssrReveal left>
  <h6>Llevar el producto a tu <span> audiencia</span> es un proceso que se vuelve cada día mas exigente y mas dinámico. Una buena estrategia de <span>marketing digital</span>, te permite llegar más rápido y de forma mas eficiente a tu target de mercado , en todos los <span>micromomentos de consumo</span></h6>
  </Slide>
</div>
</div>

</Parallax>
    
 <style jsx>{`
 .marketing_digital_small{
     display:flex;
     flex-flow:column nowrap;
     align-items: center;
     color:white;
     margin-top:1rem;
     width:100%;

  
 }
 .marketing_digital_small_text{
     max-width:40rem;
 }
 .marketing_digital_small_text h1{
     text-align:center;
     font-size:2rem;
     line-spacing:1rem;
     font-family: 'Exo 2', sans-serif;
 }
 .marketing_digital_small_text h6{
    text-align:center;
    font-size:1rem;
    padding:0px 0.4rem;
    line-spacing:1rem;
}
.marketing_digital_small_text span{
 color:black
}

 .marketing_digital_container{
     display:flex;
     flex-flow:column wrap;
     
    

 }
 `}</style>
</div>
)
}
