
export const HeroCard = ({ id, superhero }) => {

    const heroImageURL = `/assets/heroes/${id}.jpg`;

    return (
        <div className="shadow-md p-6 w-3/12 rounded-md flex flex-col">
            <div className='relative'>
                <img src={heroImageURL} className="rounded-md mb-3 z-40 hover:scale-105" alt={id} />
                <img src={heroImageURL} className="rounded-md mb-3 absolute top-0 -z-40 blur-md" alt={id} />
            </div>
            <span className="font-bold text-slate-700">{superhero}</span>



        </div>
    )
}
