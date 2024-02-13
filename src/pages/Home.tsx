import {NFTCard} from "../components/NFTCard.tsx";
import {ArtistCard} from "../components/ArtistCard.tsx";

export const Home = () => {
  return (
    <div className="w-full text-white h-full">
      <NFTCard/>
      <ArtistCard/>
    </div>
  )
}