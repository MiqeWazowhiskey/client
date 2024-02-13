export const NFTCard = () => {
  return (
    <button className="flex flex-col items-center gap-2 pt-4 bg-black bg-opacity-20 transition-all hover:shadow duration-100 hover:shadow-white w-64 h-96 text-white rounded-md px-4 py-2">
      <h3 className="text-lg font-bold tracking-wider">NFTCard</h3>
      <img src="https://via.placeholder.com/150" alt="NFT" className="w-96 object-cover" />
      <p className="text-sm text-start w-full font-thin tracking-wide">NFTDescription</p>
    </button>
  )
}