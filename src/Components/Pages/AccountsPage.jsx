import { Breadcrumbs, Link } from "@mui/material";
import WalletTable from "../WalletTable/WalletTable";
import Typography from '@mui/material/Typography';

const AccountsPage = () => {
  return (
    <div id="accounts-page">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <h3> Accounts Overview </h3>
      <div className="page-card">
        <WalletTable />
      </div>
    </div>
  )
}

export default AccountsPage