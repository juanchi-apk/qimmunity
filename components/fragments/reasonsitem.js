import styled from 'styled-components'

const StyledAnchor = styled.div`

display:flex;

flex-direction: column;
align-items:flex-end;
justify-content:flex-start;
margin:0.1rem;
overflow:hidden;
max-width: 18vw;
min-width: 18vw;
max-height: 18vw;
min-height: 18vw;


align-self: stretch;



figure {
	display: flex;
    flex-direction:column;
	align-self:stretch;
	overflow: hidden;

	&:hover {
	
		figcaption{
			transform: translateY(-50%);
		}
	}

	figcaption {
		color: white;
		z-index: 1;
		height:36vw;
		transition:all 0.7s;
		
		.reason {
			font-size: 2rem;
			line-height: 1.35;
			font-weight: 600;
            text-align:center;
			text-shadow: 1px 1px rgba(0,0,0,0.7);
			
			max-width: 18vw;
			min-width: 18vw;
			max-height: 18vw;
			min-height: 18vw;
		}
		.reasontext{
			text-align:center;
			color:white;
			height:18vw;
			background-color:#52063094;
			max-width: 18vw;
			min-width: 18vw;
			max-height: 18vw;
			min-height: 18vw;

		}
	}
    

 }

 @media (max-width: 768px) { 
    figure{

		figcaption{
			.reason{
				font-size: 1rem;

			}
			
		}
	

	
  }

`

export default function pepeItem({bulletdata}){

    

    return (			
        <StyledAnchor >
          


        <figure >
           
            
            <figcaption>
                <div className="reason">{bulletdata.title}</div>
				<div className= "reasontext">{bulletdata.text}</div>
            </figcaption>
            
        </figure>
		
    
		<style jsx>{`
        .reason{
			background-color: ${bulletdata.color};
			display:flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
		}
        .reasontext{
			display:flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			font-size:1.8vw;	
		}
            
        `}</style>

            </StyledAnchor>
    )
}