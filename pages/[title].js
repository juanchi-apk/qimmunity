import CommunityDesktop from '../components/PageComponents/pagebanners';
import { fetchStrapi } from './api/hidratation'
import ReasonBox from '../components/PageComponents/SocialReasonBox';
import ServiceContainer from '../components/PageComponents/services';
import ContactForm from '../components/fragments/ContactForm';




    

export default function SocialMedia({banners, mediareasonitems, reasonCTA, title, services}){
 
    return (
  <div style={{marginTop:"60px"}}>
    <CommunityDesktop banners = {banners}/> 
    <ReasonBox mediareasonitems={mediareasonitems} reasonCTA={reasonCTA}/>
    <ServiceContainer services={services}/>
    <ContactForm/>
</div>
        
    )
}

export async function getServerSideProps(context){
  
    const querykey = await context.resolvedUrl.slice(2,-1);
    
    const prodpages = await fetchStrapi("/prodpages");
    console.log(querykey) 
    console.log(prodpages)
    const seosempage = prodpages.filter( prodpage =>prodpage.title==querykey)
    console.log(seosempage)
    return{

    props:{
      banners : seosempage[0].page_banner, 
        mediareasonitems : seosempage[0].reasonitem,
        reasonCTA: seosempage[0].ReasonCTA,
        title: seosempage[0].title,
        services : seosempage[0].pageServices,

    }
   };
  }