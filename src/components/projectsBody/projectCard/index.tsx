import Image from 'next/image'

type Props = {
    imageUrl: string,
    title: string
}
const ProjectCard = ({imageUrl, title}: Props) => {

    return (
        <>
            <div className='flex flex-col p-1 gap-2 mt-4 w-96 h-72 bg-opacity-30 rounded-t-2xl bg-black'>
                <div 
                    className='flex justify-center rounded-t-2xl border-y-0 border-2 border-white hover:border-0 transition-all w-full h-72
                    hover:scale-150'
                    style={{backgroundImage: `url(${imageUrl})`,backgroundSize: '100% 100%'}}
                >
                </div>
                <h2 className='text-2xl text-center font-bold'>{title}</h2>
            </div>
        </>
    )
}

export default ProjectCard