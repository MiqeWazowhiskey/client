// import {Collections, Helius} from "helius-sdk";
//
// const helius = new Helius(import.meta.env.VITE_APP_HELIUS_APIKEY);
// export const createNft = async (name:string,owner:string, description:string,imageUrl:string,fee:number,symbol:string) => {
//   try{
//     const response = await helius.mintCompressedNft({
//       name: name,
//       symbol: symbol,
//       owner: owner,
//       description: description,
//       imageUrl: imageUrl,
//       sellerFeeBasisPoints: fee
//     });
//     console.log(response.result);
//   } catch (error) {
//     console.log(error);
//   }
// }
//
// export const getMints = async () => {
//   try{
//     const response = await helius.getMintlist({query: Collections.ABC});
//     console.log(response.result);
//     return response.result;
//   }catch (error) {
//     console.log(error);
//   }
// }