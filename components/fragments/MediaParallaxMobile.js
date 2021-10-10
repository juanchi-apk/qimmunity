
import BgCommunity from '../../public/community.png';
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'


export default function MediaParallax(){

    return(

<div className ="otrocontainer">

<Parallax
bgImage={BgCommunity.src}
strength={300}
style={{
padding:'0px',
}}
bgImageStyle={{opacity: '.9', filter :"blur(0.3rem)"}}

>

<div className="socialSlideContainer">
    <Slide ssrReveal left>
    <div className="socialTitle">
    <h1>Social Media</h1>
    <h2>Potencia tus redes sociales</h2>
    </div>
    </Slide>


<p className="socialCTA">Para aumentar tus seguidores y conseguir mas ventas, necesitas conocer muy bien tu público, y lograr interaccion con tus publicaciones. Hace click y conocé todos nuestros planes para potenciar tu empresa!</p>

<span className="socialButton"><Button variant="outlined">Ver mas</Button></span>

</div>
</Parallax>

<style jsx>{`

.socialSlideContainer{
    display:flex;
    flex-direction:column;
    flex-wrap:no-wrap;
    width:100%;
    background-color:#1f1f1480;




}

.socialTitle{
    min-width:15%;
    color:#ffee10;
    padding-left: 1rem;
    padding-right:1rem;
}

.socialTitle h1{
    font-size: 2.5rem;
    line-height: 1.5rem   ;


}
.socialTitle h2{
    font-size: 1rem;
    line-height: 1rem ;
}

.socialCTA{
    padding-left: 1rem;
    padding-right:1rem;
    color:white;
}

.socialButton{
text-align:center;
margin-bottom:2rem;
}
`}</style>
</div>

    )
}
