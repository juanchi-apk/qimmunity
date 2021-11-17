import Image from 'next/image'
import {Fade, Slide} from 'react-reveal';
import { Paper } from '@mui/material';





 



 export default function BannerDesktop({color, title, titlesmall, text, image}){
    


     return (
         <Fade ssrReveal duration={1500} style = {{margin:"0px"}}>
             <Paper style={{backgroundColor:`${color}`, margin:"0px" , padding: "0px" ,maxWidth: "100%" }} square>
         
             
             
             <div className='titles'>
             <Slide ssrReveal duration={1500} left>
             <div className='textito'>
                 <h1>{title.toUpperCase()}</h1>
                 <h3>{titlesmall}</h3>
                 <p>{text}</p>
             </div>
             </Slide>
             <Slide ssrReveal  duration={1500} up>
             <div className="BannerImageContainer"> 
             <Image layout="fixed" width = "350rem" height="350rem" src= {image}/>
             </div>
             </Slide>
             </div>
        
         <style jsx>{`


     .titles {
        
         display:flex;
         flex-direction:row;
         flex-wrap: no-wrap;
         z-index:2;
         color:#fff;
         justify-content: space-between;
         max-width:100%;
         min-height: 25rem;

     }
     .textito{
         margin-top: 2%;
         display:flex;
         flex-flow:column wrap;
         justify-content:center;
         align-items:flex-start;
         margin-left:10%;
         max-width:40%;
         min-width:8rem;
         min-heigt:20rem;
                    
     }
     .textito h1{
         font-size:3rem;
         line-height: 40px;
         font-family: 'Exo 2', sans-serif;
         
     }
    
     .BannerImageContainer{
         display:flex;
         flex-wrap:wrap;
         justify-content:center;
         z-index:10;
         max-height: 40rem;       
     }
     `}</style>

         
         </Paper>
         </Fade> 
     )


 }