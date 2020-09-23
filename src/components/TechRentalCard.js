import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const TechRentalCard = (props) => {
    const { tech, getTech } = props;

    const removeTech = () =>{
        axiosWithAuth()
        .delete(`/items/${tech.id}`) 
        .then((res) => {      
            localStorage.setItem('token', res.data.token);
          })
        .catch(err=> console.log(err))
        getTech()
    }

    const editTech = () => {
        axiosWithAuth()
        .put(`/items/${tech.id}`) 
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
        getTech()
    }

    return (
        <div>
        <h1>{tech.item}</h1>
        <button onClick={()=>removeTech()}>Delete</button>
        <button onClick={()=>editTech()}>Edit</button>
    </div>
    )
}

export default TechRentalCard
