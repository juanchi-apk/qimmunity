import ReasonBulletContainer from '../fragments/ReasonBulletContainer';
import BgParallax from '../../public/bgparal_marketing.png';
import { Parallax } from "react-parallax";

export default function SocialReasonBox({mediareasonitems, reasonCTA}) {

    return (

        <Parallax
            bgImage={BgParallax.src}
            bgImageStyle={{ opacity: '.5' }}
            strength={300}
        >
            <div className="socialBoxParallax">
                <div className="socialBoxContainer" >
                    <div className="socialReasonCTA">

                        <p>
                            {reasonCTA.toUpperCase()}
                        </p>
                    </div >
                    <div className="reasonContainers">
                        <ReasonBulletContainer bulletElements={mediareasonitems} />
                    </div>

                </div>
                <style jsx>{`
        .socialBoxParallax{
            width:100%;
            display: inline-flex;
            justify-content:center;
            align-items:center;
            min-height:40rem;
            
        }
        
       
            .socialBoxContainer{
                display:flex;
                flex-direction:row;
                flex-wrap: no-wrap;
                justify-content:center;
                align-items:center;
                width:85%;
               
            }
            .socialReasonCTA{
                background-color:#52063094;
                align-self: stretch;
                min-width:30%;
                color:white;
                font-size:3.2vw;
                font-weight:900;
                padding:2%;
                max-width:30%;
                min-widht:200px;
                font-family: 'Exo 2', sans-serif;
             
               

            }

            .reasonContainers{
                min-width:70px;

            }
        
            
        `}</style>

            </div>
        </Parallax>
    )


}
