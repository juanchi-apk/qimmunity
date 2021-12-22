import { fetchStrapi } from "../../api/hidratation";
import { getStrapiMedia } from "../../api/images_media";
import Image from 'next/image';
import Link from 'next/link'




export default function CategoryPost({ catpostlist, catpostImages, allpostlist, allpostlistImages, categories }) {


    return (
        
        
          

        <div  style={{ marginTop: "80px", width: "100%", textAlign: "center" }}>
         
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

            <div className="gridContainer">
                <div className="postGallery">
            {
                catpostlist.map((post, index) => {
                    return (
                        <Link href={`/blog/post/${post.id}`} replace>
                        <div className="singlePost" key={post.id}>
                            
                            <Image layout="responsive" width="100 px" height="75 px" src={catpostImages[index]} />
                            <p>{post.categorias.name.toUpperCase()}</p>
                            <h1>{post.title}</h1>
                            <p>{post.subtitle}</p>
                            
                        </div>
                        </Link>
                    )
                })
            }
            </div>
            <div className="navigation" >
            {allpostlist.map((post, index)=>{
             return(
           
                <Link href={`/blog/post/${post.id}`}replace >
                    <div className ="postItem"  key={post.id}>
                
                    
                 <Image layout="responsive" width="100 px" height="75 px" src={allpostlistImages[index]} />
                 <p>{post.title}</p>
                
            
                 
                             
                </div>
             </Link>  
            
                
              

                ) 
          })}
            </div>
            </div>
            <style jsx>
                {`

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

                    .gridContainer{
                   
                    display:grid;
                    grid-template-columns:  minmax(auto,77%) 1fr;
                    grid-gap:10px;
                    justify-content: center;
                    margin-top:50px;
                 
                    }   
                    .postGallery{
                        display:flex;
                        flex-wrap: wrap;
                     
                        
                    }

                    .singlePost{
                        max-width:45%;
                        min-width:280px;
                        margin-left:5px;
                      
                    }

                    .navigation{
                        display:grid;
                        grid-template-columns:  1fr 1fr;
                        grid-gap:10px;


                    }
                `}                            
            </style>
        </div>
        
    )
}

export async function getServerSideProps(context) {

    const allpostlist = await fetchStrapi("/postlists?_sort=created_at:DESC");

    const catpostlist = await allpostlist.filter(element => element.categorias.name.toLowerCase() === context.query.categories.toLowerCase())

    const categories = await fetchStrapi("/categorias");

   const allpostlistImages = allpostlist.map(post => {
        let newpost = getStrapiMedia(post.postImage)
        return newpost
    })

    const catpostImages = catpostlist.map(post => {
        let newpost = getStrapiMedia(post.postImage)
        return newpost
    })


    return {

        props: {
            catpostlist,
            catpostImages,
            allpostlist,
            allpostlistImages,
            categories
        }
    };

}