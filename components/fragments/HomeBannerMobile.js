import mobilepic from '../../public/cellframemobile.png';
import Image from 'next/image'
import {Fade, Slide} from 'react-reveal';
import { Paper } from '@mui/material';
import { withStyles } from '@mui/styles'


const StyledPaper = withStyles({
  root: {
    display:"flex",
    backgroundColor: '#e80355',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",

  }



})(Paper)


 



 export default function BannerMobile(){
    
  

     return (
         <Fade ssrReveal duration={1500}>
             <StyledPaper square>
         
             
             
             <div className='titles'>
             <Slide ssrReveal duration={1500} left>
             <h1>Tu empresa performa bien en redes?</h1>
            </Slide>
             <Slide ssrReveal  duration={1500} left>
             <Image layout="fixed" width = "280vw" height="420vw" src={mobilepic}/>
             </Slide>
             </div>
        
         <style jsx>{`
}

     .titles {
         min-height: 25rem;
         z-index:2;
         color:#fff;
         display:flex;
         width:100%;
         flex-flow: column wrap;
         align-items: center;

     }
     .titles h1{
         font-size:2.5rem;
         line-height: 40px;
         text-align:center;

         
     }
    
    
     `}</style>

         
         </StyledPaper>
         </Fade> 
     )


 }