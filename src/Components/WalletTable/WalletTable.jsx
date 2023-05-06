import './WalletTable.css'

const WalletTable = () => {
  let data = [
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

  let columns = {
    name: "Account",
    description: "Description",
    initialAmount: "InitialAmount",
    balance: "Balance"
  }

  let actions = [1, 2, 3]

  return (
    <table className="wallet-table">
      <thead>
        <tr>
          { Object.values(columns).map((header) => (
            <th>{header}</th>
          )) }
          { actions.length > 0 && <th>Actions</th> }
        </tr>
      </thead>
      <tbody>

      { data.map((element) => (
            <tr key={element.id}>
              { Object.keys(columns).map((field) => (
                <td>{element[field]}</td>
              )) }
              {
                actions.length > 0  &&
                <td>
                  {
                    actions.map((action) => (
                      <span>{action}</span>
                    ))
                  }
                </td>
              }
            </tr>
          )) }
      </tbody>
    </table>
  )
}

export default WalletTable;
