import WalletTable from "../WalletTable/WalletTable";

const AccountsPage = () => {
  return (
    <div id="accounts-page">
      <h3> Accounts Overview </h3>
      <div className="page-card">
        <WalletTable />
      </div>
    </div>
  )
}

export default AccountsPage