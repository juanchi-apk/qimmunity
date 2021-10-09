import cellpic from '../../public/cellframe.png';
import Image from 'next/image'
import {Fade, Slide} from 'react-reveal';
import { Paper } from '@mui/material';
import { withStyles } from '@mui/styles'


const StyledPaper = withStyles({
  root: {

    backgroundColor: '#e80355'
  }



})(Paper)


 



 export default function BannerDesktop(){
    
  

     return (
         <Fade ssrReveal duration={1500}>
             <StyledPaper square>
         
             
             
             <div className='titles'>
             <Slide ssrReveal duration={1500} left>
             <div className='textito'>
                 <h1>Tu empresa performa bien en redes?</h1>
                 <h3>Armá tu <span>estrategia digital</span> y aumentá tus
                 <span> ventas</span></h3>
                 <p> Te ayudamos a llegar a tu público objetivo en todas las etapas de tu producto. Diseñamos el plan de marketing digital a tu medida.
                 </p>
             </div>
             </Slide>
             <Slide ssrReveal  duration={1500} up>
             <div className="BannerImageContainer"> 
             <Image layout="fixed" width = "280vw" height="420vw" src={cellpic}/>
             </div>
             </Slide>
             </div>
        
         <style jsx>{`
}

     .titles {
        min-height: 25rem;
         display:flex;
         flex-direction:row;
         flex-wrap: wrap;
         z-index:2;
         color:#fff;
         justify-content: space-between

     }
     .textito{
         margin-top: 2%;
         display:flex;
         flex-flow:column wrap;
         justify-content:center;
         align-items:flex-start;
         margin-left:10%;
         max-width:40%;
         min-width:10rem;
         min-heigt:20rem;
                    
     }
     .textito h1{
         font-size:3rem;
         line-height: 40px;

         
     }
     .textito span{
         color:  #E8D91A
     }
     .BannerImageContainer{
         display:flex;
         justify-content:center;
         margin-right:5%;
         z-index:10;
      max-height: 40em;       
     }
     `}</style>

         
         </StyledPaper>
         </Fade> 
     )


 }