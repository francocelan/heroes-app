import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";


export const HeroList = ({publisher}) => {

  const heroes = useMemo( () => {
    return getHeroesByPublisher(publisher)
  }, [publisher] );

  return (
    <div className="row rows-cols-6 row-cols-md-6 g-3 animate__animated animate__fadeIn">
        {
            heroes.map(hero => (
                <HeroCard 
                    key={hero.id} 
                    {...hero}
                />
                    
            ))
        }
    </div>
  )
  
}
