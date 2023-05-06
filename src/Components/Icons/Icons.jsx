import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const WalletIcon = ({color = 'green'}) => {
  return (
    <FontAwesomeIcon icon={solid('wallet')} color={color} />
  )
}

const UserIcon = ({color = 'green'}) => {
  return (
    <FontAwesomeIcon icon={solid('user')} color={color} />
  )
}

export { WalletIcon, UserIcon }
