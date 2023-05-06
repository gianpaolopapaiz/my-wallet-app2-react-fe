import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AccountsPage from "./Components/Pages/AccountsPage";

function App() {
  return (
    <div id="MyWalletApp">
      <NavBar/>
      <div id="main-body">
        <AccountsPage />
      </div>
    </div>
  );
}

export default App;
