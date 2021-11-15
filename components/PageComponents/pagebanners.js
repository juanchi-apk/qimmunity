import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerItems from '../fragments/BannerItem';
import image1 from '../../public/redessociales1.webp'



export default function Community({banners}){



       
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed: 4000,

      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,

    }

    return (
      <div className="reactSliderContainer">
        <Slider {...settings}>
          {banners.map((banner)=>{
             
             
             return(<BannerItems
                key={banner.id} 
                color = {banner.banner_hexcolor}
                title = {banner.banner_title}
                titlesmall ={banner.banner_small_title}
                text={banner.banner_text}
                image = {image1}
                />) 
          })}   
        </Slider>
       

        <style jsx>{`
            div>h3{
                background-color:black;
                color:white
            }

            .reactSliderContainer{
              max-width:100%;
              margin:0px;
            }
        `}</style>
      </div>
    );
  }

            
    