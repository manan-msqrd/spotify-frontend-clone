
const AlbumItem = ({image, name, desc, id}: any) => {
  return (
    <div className='min-w-[180px] p-2 px-3 cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem