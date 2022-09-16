import { Link } from "react-router-dom"
import logotype from '../../assets/images/logotype.png';


const Logo = () => {
  return (
    <div className='header-logo'>
        <Link to={"/"}>
            <img src={logotype} alt="Gurent logo" />
        </Link>
    </div>
  )
}

export default Logo;