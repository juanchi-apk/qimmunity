import dynamic from 'next/dynamic'
import isMobile from '../../lib/isMobile'

const Mobile = dynamic(()=>import('../fragments/NavbarMobile'))
const Desktop = dynamic(()=>import('../fragments/NavbarDesktop'))




const Navbar = ()=>{

    
    const isThisMobile = isMobile()
   
 
    return(
        <div>

            {isThisMobile? <Mobile/> :<Desktop/>}
        </div>
    )
}

export default Navbar