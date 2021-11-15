
import Image from "next/image"


export default function ServiceItem({title, text}){

    return(

        <div className="card">
        <div className="face face1">
            <div className="content">
                <div className="imagecontainer">
                <Image width="100vw" height="100vw"  src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"/>
                </div>
                <h3>{title}</h3>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <p>{text}</p>
            </div>
        </div>

       <style jsx>
        {`
            @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
         
             .card{
                position: relative;
                cursor: pointer;
                margin:0 1vw;
            }
            
             .card .face{
                width: 300px;
                height: 200px;
                transition: 0.5s;
            }
            
             .card .face.face1{
                position: relative;
                background: #333;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                transform: translateY(100px);
            }
            
             .card:hover .face.face1{
                background: #ff0057;
                transform: translateY(0);
            }
            
             .card .face.face1 .content{
                opacity: 0.2;
                transition: 0.5s;
            }
            
             .card:hover .face.face1 .content{
                opacity: 1;
            }
            
             .imagecontainer{
                max-width: 100px;
                margin:auto;
             

            }
            
             .card .face.face1 .content h3{
                margin: 10px 0 0;
                padding: 0;
                color:#ffee10;
                text-align: center;
                font-size: 1.3em;
            }
            
             .card .face.face2{
                position: relative;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                box-sizing: border-box;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
                transform: translateY(-100px);
            }
            
             .card:hover .face.face2{
                transform: translateY(0);
            }
            
             .card .face.face2 .content p{
                margin: 0;
                padding: 0;
                text-align:center;
            }
            
             

        `}    
        </style>
        </div>
    )
}