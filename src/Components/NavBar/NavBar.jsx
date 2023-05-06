import './NavBar.css';
import { UserIcon, WalletIcon } from "../Icons/Icons";

const NavBar = () => {
  return (
    <header id='NavBar'>
      <div className='navBarLogo'>
        <WalletIcon/>
      </div>
      <div className='navBarOptions'>
        <UserIcon />
      </div>
    </header>
  )
}

export default NavBar;
