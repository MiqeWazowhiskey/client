import {MintForm} from "../components/MintForm.tsx";

export const Create = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full h-full">
      <h3 className="text-white font-bold text-3xl text-center w-full">Create Your Own NFT</h3>
      <MintForm/>
    </div>
  )
}