import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul className="flex gap-4 flex-wrap justify-center">
            {
                heroes.map(({ id, superhero }) => (
                    <li key={id} className="shadow-md p-4 w-3/12 rounded-md flex flex-col">
                        {/* <img src={dc} alt={id} /> */}
                        <span className="font-bold text-slate-700">{superhero}</span>

                    </li>
                )
                )
            }
        </ul>
    )
}
