import BgDev from '../../public/dev.png';
import { Parallax } from "react-parallax";
import { Slide } from 'react-reveal';
import {Button}from '@mui/material'


export default function DevParallax(){

    return(
    

            <div className ="otrocontainer">
            
            <Parallax
            bgImage={BgDev.src}
            strength={300}
            style={{
            padding:'0px',
            }}
            bgImageStyle={{ opacity:"0.9",  filter :"blur(0.2rem)"}}
            >
            
            <div className="socialSlideContainer">
            <Slide ssrReveal left>

                <div className="socialTitle">
                <h1>Desarrollo Web</h1>
                <h2>Optimiza o creá tu sitio y generá más visitas</h2>
                </div>
                </Slide>
            
            <div className ="comingup">
            <div className = "anothertext">
            <h1>Tenes una página SEO friendly?</h1>
            <p>Sabias que la busqueda en la web es el primer paso antes de la compra?  O que los primeros cinco segundos del tiempo de carga de una página tienen el mayor impacto en las tasas de conversión? Te ayudamos a tener tu sitio optimizado para buscadores </p>
            <Button variant="outlined">Ver Mas</Button>
            </div>
            </div>
            
            </div>
            </Parallax>
            
            <style jsx>{`
            
            .socialSlideContainer{
                display:flex;
                flex-direction:row;
                flex-wrap:no-wrap;
                width:175%;
            
            
            }
            
            .socialTitle{
                min-width:15%;
                color:#ffee10;
                margin-left:3rem;
            }
            
            .socialTitle h1{
                font-size: 3rem;
            }
            
            .social_textcontainer{
                box-sizing:border-box;
                }
                
                
                .comingup{
                box-sizing:border-box;
                position:relative;
                left:0;
                top:-1rem;
                min-height:24rem;
                width:175%;
                background: linear-gradient(to left, #00000099 40%, transparent 30%, transparent 30%);
                transition: left 0.4s;
                margin-bottom:-2rem;
                
                
                }
                
                .comingup:hover{
                left:-42%;
                }
                .anothertext {
                    display:flex;
                    flex-direction:column;
                    color:white;
                    position:relative;
                    left:64%;
                    z-index:300;
                    max-width:38rem;
                    }
            
            `}</style>
            </div>
            
                )
            }