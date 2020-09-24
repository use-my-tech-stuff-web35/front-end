import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
//import { axiosWithAuth } from '../utils/axiosWithAuth'
import Navigation from './Navigation'; 


const initalFormValues = {
    item: '',
    price: '',
}

const StyledDiv = styled.div`


form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    justify-content: center;
}

input{
    width:15%;
    padding:12px 20px;
    margin:8px 1%;
    &::placeholder{
        font-family: 'Montserrat', sans-serif;
    }
}
button {
  max-width: 292px;
  width: 150px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #102542;
  transition: color 0.2s ease, background-color 0.2s ease;
  font-family: Inter, sans-serif;
  cursor: pointer;
  color: #f87060;
  font-size: 18px;
  line-height: 160%;
  font-weight: 700;
  text-decoration: none;
  margin-top:1%;
  &:hover {
  background-color: #b3a394;
  color: #102542;
}
}
h1{
    margin:0 auto;
    padding:1%;
}

`

const ItemForm = () => {
    const [techItems, setTechItems] = useState([])
    const [formValues, setFormValues] = useState(initalFormValues)

/*     const getTech = () => {
		axiosWithAuth()
			.get('/items')
			.then((res) => {
				setTechItems(res.data);
			})
			.catch((err) => console.log(err));
	}; */

    const formSubmit = (evt) => {
        evt.preventDefault()

        const item = {
            item: formValues.item.trim(),
            user_id: 1,
        }

        axios.post('https://used-tech.herokuapp.com/api/items', item)
            .then(res => {
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

    useEffect(() => {
        axios
          .get("https://used-tech.herokuapp.com/api/items")
          .then((res) => {
              console.log(res.data)
           setTechItems(res.data)
          })
          .catch();
      }, []);


    return (
        <div>
        <Navigation />
        <StyledDiv>
           
            <form onSubmit={formSubmit}>
            <h1>Add new tech</h1>
                <input
                    name='item'
                    type='text'
                    onChange={onChange}
                    value={formValues.item}
                    placeholder='type your tech here!'
                />
                <button>submit</button>
            </form>
            <div>
          {/*       <h2>Here is a list of items already on our website</h2>
                  {techItems.map(item => {
                    return <div> 
                        <h2>{item.item}</h2>
                         </div>
                })}   */}
            {/*       <div>
			{techItems.map((tech) => (
				<TechRentalCard getTech={getTech} techItems={techItems} setTechItems={setTechItems} key={tech.id} tech={tech} />
			))}
			
		</div> */}
            </div>
        </StyledDiv>
        </div>
    )
}

export default ItemForm
