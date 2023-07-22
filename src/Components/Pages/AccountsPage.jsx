import WalletTable from "../WalletTable/WalletTable";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WalletCard from "../WalletCard/WalletCard";
import {Divider, Stack} from "@mui/material";

const AccountsPage = () => {
  return (
    <Container id="accounts-page">
      <Typography variant="h4">Accounts</Typography>
      <Divider sx={{marginTop: '5px', marginBottom: '10px'}}/>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      justifyContent="">
        <WalletCard />
        <WalletCard />
        <WalletCard />
      </Stack>
      {/*<div className="page-card">*/}
      {/*  /!*<WalletTable />*!/*/}
      {/*</div>*/}
    </Container>
  )
}

export default AccountsPage