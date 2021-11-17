
import BannerDesktop from '../fragments/HomeBannerDesktop';
import MarketingParallax from '../fragments/MarketingParallax';
import ContactForm from '../fragments/ContactForm';
import ProdParallax from '../fragments/ProdParallax';


export default function HomeDesktop({home, bannerImages, prodCards}){
    return (
        <>
        <BannerDesktop banner={home.home_carousel} bannerImages={bannerImages} />
        <MarketingParallax/>
        {
            prodCards.map(prodCard=>{
               return( <ProdParallax
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