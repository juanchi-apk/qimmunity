import ReasonItems from './reasonsitem'


export default function ReasonBulletContainer({bulletElements}){

    return(
        <div className = "reasonBulletContainer">
        { bulletElements.map((bullet, index)=>{
            return(
                <ReasonItems key = {index} bulletdata={bullet}/>
            )
        })
        }

        <style jsx>{`
            .reasonBulletContainer{
                display:flex;
                flex-direction:row;
                flex-wrap:wrap;
                align-items:flex-start;
        }

            
        `}</style>

        </div>
    )
}