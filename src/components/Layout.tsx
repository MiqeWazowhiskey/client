import {Sidebar} from "./Sidebar.tsx";

interface Props {
  children: React.ReactNode
}
export const Layout = ({ children }:Props) => {
  return (
    <div className="flex flex-row h-screen bg-gradient-to-tl font-thin tracking-widest from-slate-500 to-purple-950 filter">
      <Sidebar/>
      <div className="layout-calc ml-auto overflow-auto">
        {children}
      </div>
    </div>
  )
}