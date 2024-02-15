import {TbCurrencySolana} from "react-icons/tb";
import { RiNftLine } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {FaPaintBrush} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div
      className="lg:w-24 md:w-24 w-20 h-screen flex items-center">
      <div
        className="w-full flex flex-col justify-around items-center h-[94%] ml-5 bg-black rounded-lg bg-opacity-50">
        <NavLink to="/">
          <div
            className="rounded-full flex justify-center text-white text-5xl hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><TbCurrencySolana className="lg:text-5xl md:text-3xl text-xl"/></span>
          </div>
          <p className="text-white lg:text-md text-xs text-center">Home</p>
        </NavLink>
        <NavLink to="/create">
          <div
            className="rounded-full flex justify-center text-white text-3xl p-3 hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><FaPaintBrush className="lg:text-3xl md:text-3xl text-xl"/></span>
          </div>
          <p className="text-white lg:text-md text-xs text-center">Create</p>
        </NavLink>
        <NavLink to="/artists">
          <div
            className="rounded-full flex justify-center text-white text-4xl p-2 hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><RiNftLine className="lg:text-5xl md:text-3xl text-xl"/></span>
          </div>
          <p className="text-white lg:text-md text-xs text-center">Artists</p>
        </NavLink>
        <NavLink to="/wallet">
          <div
            className="rounded-full flex justify-center text-white text-4xl p-2 hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20">
            <span><IoWalletSharp className="lg:text-5xl md:text-3xl text-xl"/></span>
          </div>
          <p className="text-white lg:text-md text-xs text-center">Wallet</p>
        </NavLink>
      </div>
    </div>
  )
}