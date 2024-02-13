export const ArtistCard = () => {
  return (
    <button className="bg-black text-start flex flex-col justify-center bg-opacity-20 hover:scale-105 transition-all w-96 h-24 text-white rounded-md px-4 py-2">
      <h3 className="text-md font-bold tracking-wider">Artist Name</h3>
      <p className="text-sm font-thin">Artist Description</p>
      <p className="text-sm">Art Count</p>
    </button>
  )
}