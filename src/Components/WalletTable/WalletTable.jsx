import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
  {
    id: 1,
    name: 'Account 1',
    description: 'Sample Description 1',
    initialAmount: 'R$100,00',
    balance: 'R$100,00'
  },
  {
    id: 2,
    name: 'Account 2',
    description: 'Sample Description 2',
    initialAmount: 'R$200,00',
    balance: 'R$200,00'
  }
]

const columns = {
  name: "Account",
  description: "Description",
  initialAmount: "InitialAmount",
  balance: "Balance"
}

const WalletTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            { Object.values(columns).map((header) => (
              <TableCell key={header}>{header}</TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map((element) => (
            <TableRow
              key={element.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              { Object.keys(columns).map((field) => (
                <TableCell key={element.id}>
                  {element[field]}
                </TableCell>
              )) }
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WalletTable;
