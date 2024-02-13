import {Collections, Helius} from "helius-sdk";

const helius = new Helius(import.meta.env.VITE_APP_HELIUS_APIKEY);
export const createNft = async (name:string,owner:string, description:string,imageUrl:string,fee:number,symbol:string) => {
  const response = await helius.mintCompressedNft({
    name:name,
    symbol:symbol,
    owner:owner,
    description:description,
    imageUrl:imageUrl,
    sellerFeeBasisPoints:fee
  });
  console.log(response.result);

}

export const getMints = async () => {
  const response = await helius.getMintlist({query: Collections.ABC});
  return response.result;
}