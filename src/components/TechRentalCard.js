import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const TechRentalCard = (props) => {
    const { tech, getTech } = props;

    const removeTech = () =>{
        axiosWithAuth()
        .delete(`/tech/${tech.id}`)
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
        getTech()
    }

    return (
        <div>
        <h1>{tech.techName}</h1>
        <button onClick={()=>removeTech()}>Delete Tech</button>
    </div>
    )
}

export default TechRentalCard
