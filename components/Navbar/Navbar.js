import dynamic from 'next/dynamic'
import isMobile from '../../lib/isMobile'

const Mobile = dynamic(()=>import('../fragments/NavbarMobile'))
const Desktop = dynamic(()=>import('../fragments/NavbarDesktop'))




const Navbar = ({navbar})=>{

    
    const isThisMobile = isMobile()
   
 
    return(
        <div>

            {isThisMobile? <Mobile navbar={navbar}/> :<Desktop navbar={navbar}/>}
        </div>
    )
}

export default Navbar