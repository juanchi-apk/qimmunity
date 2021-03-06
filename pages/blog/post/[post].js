import { fetchStrapi } from "../../api/hidratation";
import { getStrapiMedia } from "../../api/images_media";
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'



export default function PostSelected({ postlist, postImages, categories , mainPost, mainImage }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay:true,
        autoplaySpeed: 0,
  
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
  
      }

    return (    

        <div className = "blogContainer" style={{ marginTop: "100px" }}>

            <div className="catContainer">
                    {categories.map(category=>{

                        return(
                        
                        <Link href={`/blog/categories/${category.name}`}>
                            <a>{category.name.toUpperCase()}</a>
                        </Link>
                        
                        )
                    })
                    }
            </div>


            <div className="mainArticle">
                <div className="postContainer">
                    <p className="catTitle">{mainPost.categorias.name.toUpperCase()}</p>
                    <h1>{mainPost.title}</h1>
                  
                    <Image layout="responsive" width="90vw" height="50vw" src={mainImage} />
                    
                    <h3>{mainPost.subtitle}</h3>
                    <div className="contentContainer">
                    <ReactMarkdown children={mainPost.postBody}/>
                    </div>
                </div>
               

            </div>
            <div className="postCarrousel">
            <Slider {...settings}>
          {postlist.map((post, index)=>{
             return(
           
                
             <div className ="postItem"  key={post.id}>
                 
                 <Image layout="responsive" width="100 px" height="75 px" src={postImages[index]} />
                 <Link href={`/blog/post/${post.id}`}>
                 <a>   
                 <div>
           
                 <p>{post.categorias.name.toUpperCase()}</p>
                 <h1>{post.title}</h1>
                 <p>{post.subtitle}</p>
                
                
                 </div>
                 </a>

             </Link>
             </div>
             
                
              
                ) 
          })}   
        </Slider>
        </div>

                <style jsx>{`
                
                .blogContainer{
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                }
                .mainArticle{
                    display: flex;
                    flex-direction:row;
                    justify-content:flex-start;
                    width:90vw;
                }

                .postContainer{
                    min-width:60vw;
                    max-width:60vw;
                }

                .catTitle{
                   font-weight:900; 
                   color:black;
                   
                }
              
                @supports (--css: variables) {
                    .catTitle{
                    background: linear-gradient(270deg, rgba(135,66,186,1) 0%, rgba(255,53,145,0.9830810375908176) 100%, rgba(0,212,255,1) 100%);  
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    }
                }

                .postContainer h3{
                    font-family: 'Exo 2', sans-serif;
                    font-size:1.5rem;
                }

                .postContainer h1{
                    font-family: 'Exo 2', sans-serif;
                    font-size:4rem;
                }
                
                .ImageContainer{
                    width:70%;
                }
                
                .catContainer{
                    display:inline-flex;
                    flex-direction:row;
                    flex-wrap: wrap;
                    min-width:100%;
                    background: linear-gradient(270deg, rgba(135,66,186,1) 0%, rgba(255,53,145,0.9830810375908176) 100%, rgba(0,212,255,1) 100%);  
                    justify-content:space-around;
                    align-items:center;
                    font-weight:700;
                    color:white;
                    min-height:50px;


                }

                .contentContainer > strong{
                    font-family: 'Exo 2', sans-serif;
                }
                .postCarrousel{
                    max-width:90%;
                }
                .postItem{
                    padding:10px;
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                }
                .postItem h1{
                    text-align:center;
                }
                       
                `}</style>
        </div>
    )

}


export async function getServerSideProps(context) {
    const queryid= parseInt(context.query.post);   
    const postlist = await fetchStrapi("/postlists?_sort=created_at:DESC");
    const categories = await fetchStrapi("/categorias");

    const mainPost = await postlist.filter( post =>(
        
        post.id===queryid
    ))

    const mainImage = getStrapiMedia(mainPost[0].postImage)

    const postImages = postlist.map(post => {
        let newpost = getStrapiMedia(post.postImage)
        return newpost
    })


    return ({
        props: {
            postlist,
            postImages,
            categories,
            mainPost : mainPost[0],
            mainImage
        }
    })
}
