import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
            <div onClick={() => {navigate('/')}} className="flex gap-3 items-center pl-8 cursor-pointer">
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className="font-bold">Home</p>
            </div>
            <div className="flex gap-3 items-center pl-8 cursor-pointer">
                <img className="w-6" src={assets.search_icon} alt="" />
                <p className="font-bold">Search</p>
            </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img className="w-8" src={assets.stack_icon} alt="" />
                    <p className="font-bold">Your Library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img className="w-5" src={assets.arrow_icon} alt="" />
                    <img className="w-5" src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className="p-4 bg-[#242424] flex flex-col m-2 rounded font-semibold items-start justify-start gap-1 pl-4">
                <h1>Create Your Own Playlist</h1>
                <p className="font-light">We will help you!</p>
                <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
            </div>
            <div className="p-4 bg-[#242424] flex flex-col m-2 rounded font-semibold items-start justify-start gap-1 pl-4 mt-4">
                <h1>Let's find some podcast to follow</h1>
                <p className="font-light">We'll keep you updated with the new episodes!</p>
                <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar