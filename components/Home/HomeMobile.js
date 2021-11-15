
import BannerMobile from '../fragments/HomeBannerMobile';
import MarketingMobile from '../fragments/MarketingParallaxMobile';
import ContactForm from '../fragments/ContactForm';
import ProdParallaxMobile from '../fragments/ProdParallaxMobile';

export default function HomeMobile({home, bannerImages, prodCards}){
    return (    
        <>
        <BannerMobile banner={home.home_carousel} bannerImages={bannerImages} />
        <MarketingMobile/>
        {
            prodCards.map(prodCard=>{
               return( <ProdParallaxMobile
                key ={prodCard.id}
                title={prodCard.card_title} 
                cta={prodCard.card_cta} 
                boxTitle={prodCard.card_box_title} 
                boxCta={prodCard.card_box_cta} 
                prodImage={prodCard.prodCard_Parallax}
                link ={prodCard.prodCard_link}
                />)
            })
        }
        <ContactForm/>
        
        

        </>

    )
}