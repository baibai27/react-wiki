import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({setStatus, setPage}) => {
    let species =["Human","Alien","Mytholog","Humanoid","Poopybutthole","Animal","Robot","Cronenberg","Disease","unknown","Human-cyborg","Planet"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {species.map((item, index) => <FilterBTN key={index} name="species" index={index} item={item}/>)}
      </div>
    </div>
  </div>
  )
}

export default Species