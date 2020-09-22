import React, { useState } from 'react'
import axios from 'axios'



const initalFormValues = {
    item: '',
}


const AddNewTech = () => {

    const [formValues, setFormValues] = useState(initalFormValues)


    const formSubmit = (evt) => {
        evt.preventDefault()

        const item = {
            item: formValues.item.trim(),
            user_id: 1,
        }


        axios.post('https://used-tech.herokuapp.com/api/items', item)
            .then(res => {
                console.log(res)
                setFormValues(initalFormValues)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onChange = (evt) => {
        const { name, value } = evt.target
        setFormValues({ ...formValues, [name]: value })
    }



    return (
        <div>
            <form onSubmit={formSubmit}>
                <input
                    name='item'
                    type='text'
                    onChange={onChange}
                    value={formValues.item}
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddNewTech
