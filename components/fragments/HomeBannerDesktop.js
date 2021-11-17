import Image from 'next/image'
import {Fade, Slide} from 'react-reveal';
import { Paper } from '@mui/material';





 



 export default function BannerDesktop({banner, bannerImages}){
    const mainbanner= banner[0];
 
     return (
         <Fade ssrReveal duration={1500}>
             <Paper className="carmenquepaso" square>
          
             
             
             <div className='titles'>
             <Slide ssrReveal duration={1500} left>
             <div className='textito'>
                 <h1>{mainbanner.banner_title.toUpperCase()}</h1>
                 <h3 >{mainbanner.banner_small_title}</h3>
                 <p>{mainbanner.banner_text}</p>
             </div>
             </Slide>
             <Slide ssrReveal  duration={1500} up>
             <div className="BannerImageContainer"> 
             <Image layout="fixed" width = "280vw" height="420vw" src={bannerImages}/>
             </div>
             </Slide>
             </div>
        
         <style jsx>{`


         .carmenquepaso{
            background-color: #e80355
        }

     .titles {
        min-height: 25rem;
         display:flex;
         flex-direction:row;
         flex-wrap: wrap;
         z-index:2;
         color:#fff;
         justify-content: space-between;
         background-color: ${mainbanner.banner_hexcolor};

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
         font-family: 'Exo 2', sans-serif;      

         
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

         
         </Paper>
         </Fade> 
     )


 }