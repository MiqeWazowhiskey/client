import {TbCurrencySolana} from "react-icons/tb";
import { RiNftLine } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
  return (
    <div
      className="w-[6%] h-screen fixed flex items-center">
      <div
        className="w-full flex flex-col justify-around items-center h-[94%] ml-5 bg-black rounded-lg bg-opacity-50">
        <NavLink to="/">
          <div
            className="rounded-full flex justify-center text-white text-5xl hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><TbCurrencySolana/></span>
          </div>
          <p className="text-white text-sm text-center">Home</p>
        </NavLink>
        <NavLink to="/artists">
          <div
            className="rounded-full flex justify-center text-white text-4xl p-2 hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><RiNftLine/></span>
          </div>
          <p className="text-white text-sm text-center">Artists</p>
        </NavLink>
        <NavLink to="/wallet">
          <div
            className="rounded-full flex justify-center text-white text-4xl p-2 hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><IoWalletSharp/></span>
          </div>
          <p className="text-white text-sm text-center">Wallet</p>
        </NavLink>
      </div>
    </div>
  )
}