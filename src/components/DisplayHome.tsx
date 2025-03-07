import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import NavBar from "./NavBar"
import SongItem from "./SongItem"

const DisplayHome = () => {
  return (
    <>
       <NavBar />
       <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-x-auto
        ">
          {albumsData.map((item, index) => (<AlbumItem key={index} id={item.id} name={item.name} image={item.image} desc={item.desc}/>))}
        </div>
       </div>
       <h1 className="my-5 font-bold text-2xl">Today' Biggest Hits</h1>
        <div className="flex overflow-x-auto
        ">
          {songsData.map((item, index) => (<SongItem key={index} id={item.id} name={item.name} image={item.image} desc={item.desc}/>))}
        </div>
       
    </>
  )
}

export default DisplayHome