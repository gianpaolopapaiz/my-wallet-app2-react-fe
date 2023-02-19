import './NavBar.css';
import {WalletIcon} from "../../Icons/WalletIcon";


export const NavBar = () => {
  return (
    <header id='NavBar'>
      <div className='navBarLogo'>
        <WalletIcon/>
      </div>
      <div className='navBarOptions'>
        <li>
          <a href="/users/sign_in">Login</a>
        </li>
      </div>
    </header>
  )
}
