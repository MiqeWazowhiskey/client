//Card.tsx
import {useEffect, useState} from 'react'
import {Web3ReactSelectedHooks} from '@web3-react/core'
import {Connector} from '@web3-react/types'
import {TbCurrencySolana} from "react-icons/tb";

export function ConnectionCard({connector, hooks, name}: {
  connector: Connector,
  hooks: Web3ReactSelectedHooks,
  name: string
}) {
  const {
    useSelectedAccount,
    useSelectedChainId,
    useSelectedIsActive,
    useSelectedIsActivating
  } = hooks
  const isActivating = useSelectedIsActivating(connector)
  const isActive = useSelectedIsActive(connector)
  const account = useSelectedAccount(connector)
  const chain = useSelectedChainId(connector)

  const [error, setError] = useState<Error | undefined>(undefined)
  const [connectionStatus, setConnectionStatus] = useState('Disconnected')

  const handleToggleConnect = () => {
    setError(undefined) // clear error state

    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate()
      } else {
        void connector.resetState()
      }
    } else if (!isActivating) {
      setConnectionStatus('Connecting..')
      Promise.resolve(connector.activate(1))
        .catch((e) => {
          connector.resetState()
          setError(e)
        })
    }
  }
  useEffect(() => {
      if (isActive) {
        setConnectionStatus('Connected')
      } else {
        setConnectionStatus('Disconnected')
      }
    }
    , [isActive])

  return (
    <div
      className="bg-gradient-to-tl to-slate-500 from-purple-900 w-[500px] lg:h-[240px] h-[240px] py-4 px-4 rounded-md relative flex flex-col"
      style={{boxShadow: "8px 8px white"}}>
      <div className="flex flex-row items-center gap-2 ml-auto">
      <h3> {connectionStatus}</h3>
        <button onClick={handleToggleConnect}
                disabled={false}
                className="w-fit px-4 py-2 bg-white bg-opacity-20 rounded-md hover:bg-opacity-30">
          {isActive ? "Disconnect" : "Connect"}
        </button>
      </div>
      <div className="mt-auto w-fit">
      <p className="text-3xl font-normal">{name}</p>
        <h3>Address
          : {account ? account : "Ex4Mp...4dDr3s"}</h3>
      </div>
      <div className="flex flex-row gap-2 w-fit ml-auto mt-8">
        <TbCurrencySolana className="w-12 h-12 rounded-full border"/>
        <img src="/public/Phantom-Icon_Transparent_White.svg" alt="Phantom" className="w-12 h-12 p-2 rounded-full border"/>
      </div>
    </div>
  )
}