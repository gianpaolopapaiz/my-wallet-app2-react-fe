import WalletTable from "../WalletTable/WalletTable";
import Container from "@mui/material/Container";

const AccountsPage = () => {
  return (
    <Container id="accounts-page">
      <h3> Accounts Overview </h3>
      <div className="page-card">
        <WalletTable />
      </div>
    </Container>
  )
}

export default AccountsPage