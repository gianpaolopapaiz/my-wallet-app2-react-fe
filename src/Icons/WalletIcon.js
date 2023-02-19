import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const WalletIcon = (props) => {
  let color = props.color || 'green'
  return (
    <FontAwesomeIcon icon={solid('wallet')} color={color} />
  )
}