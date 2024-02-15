import {MintForm} from "../components/MintForm.tsx";

export const Create = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h3 className="text-white font-bold lg:text-3xl md:text-xl text-lg text-center w-full">Create Your Own NFT</h3>
      <MintForm/>
    </div>
  )
}