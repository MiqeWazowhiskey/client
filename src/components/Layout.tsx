import {Sidebar} from "./Sidebar.tsx";

interface Props {
  children: React.ReactNode
}
export const Layout = ({ children }:Props) => {
  return (
    <div className="flex flex-row h-screen bg-gradient-to-tl from-black to-purple-950 filter">
      <Sidebar/>
      <div className="layout-calc ml-auto overflow-y-auto">
        {children}
      </div>
    </div>
  )
}