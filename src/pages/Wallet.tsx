import {
  ConnectionCard
} from "../components/ConnectionCard.tsx";
import {useWeb3React} from "@web3-react/core";

export const Wallet = () => {
  const {connector,hooks} = useWeb3React();
  return (
    <div className="text-white flex items-center justify-center">
      <ConnectionCard connector={connector} hooks={hooks} name='Solana'/>
    </div>
  )
}