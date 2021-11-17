import { Parallax } from "react-parallax";
import ServiceImage from "../../public/seosem.jpg";
import ServiceItem from "../fragments/serviceitem"; 
import {getStrapiMedia} from "../../pages/api/images_media"



export default function ServiceParallax({services}){
    const mediasrc= getStrapiMedia(services.bgImage);
 

    return (
        <Parallax
        bgImage={mediasrc}
        strength={300}
        style={{
        padding:'0px',
        }}
        bgImageStyle={{opacity: '.9', filter :"blur(0.3rem)"}}
        renderLayer={percentage => (
            <div
                style={{
                    position: 'absolute',
                    background: `rgba(29, 29, 29, ${percentage * 1 - (0.4)})`,
                    left: '0',
                    top: '0',
                    width: "100%",
                    height:"100%",
                }}
            />  
        )}
        
        
        >
                <div className = "service_parallax_content">
                <h1 className="service_parallax_title">{services.BoxTitle}</h1>
                <div className="service_parallax_gallery">
                {services.boxItem.map(item=>{
                    return(
                        <ServiceItem title = {item.itemTitle} text = {item.itemtext} />
                    )

                })}     
                </div>           
                <h2 className = "service_parallax_cta">{services.BoxCta}</h2>
                
                </div>
     
        <style jsx>{`


.service_parallax_content{
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:no-wrap;
    justify-content:center;
    align-items:center;


}
.service_parallax_cta{
    font-size:2vw;
    color:#ffee10;
    width:70%
   

}
.service_parallax_title{
    font-size:3vw;
    color:#ffee10;
    width:70%;
    text-align:center;

}

.service_parallax_gallery{
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    max-width:80vw;
    justify-content:space-around;
    align-items:center;

}

`}</style>
         </Parallax>
    )
} 