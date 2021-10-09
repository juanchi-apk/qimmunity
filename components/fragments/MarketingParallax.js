import BgParallax from '../../public/bgparal_marketing.png';
import { Parallax } from "react-parallax";
import {Slide} from 'react-reveal';



export default function MarketingDigitalParallax(){

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
      left: "-45%",
      top: "50%",
     
      transform: "translate(0%,-50%)",
      width: percentage * 2600,
      height: percentage * 2600
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
     flex-flow:column wrap;
     align-items: center;
     color:white;
     margin-top:2rem;
     min-height :25rem;

  
 }
 .marketing_digital_small_text{
     max-width:40rem;
 }
 .marketing_digital_small_text h1{
     text-align:center;
     font-size:3rem;
 }
 .marketing_digital_small_text h6{
    text-align:center;
    font-size:1rem;
}
.marketing_digital_small_text span{
 color:black
}

 .marketing_digital_container{
     display:flex;
     flex-flow:column wrap;
     max-height :25rem;
    

 }
 `}</style>
</div>
)
}
