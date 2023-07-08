import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AccountsPage from "./Components/Pages/AccountsPage";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "./Components/Pages/CategoriesPage";

function App() {
  return (
    <div id="MyWalletApp">
      <NavBar/>
      <div id="main-body">
        <Routes>
          <Route path="/" element={<AccountsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
