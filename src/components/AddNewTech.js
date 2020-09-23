import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const initalFormValues = {
    item: '',
}

const StyledDiv = styled.div`
background-image:url('https://images.unsplash.com/7/Top_view.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80');
background-size:cover;
background-position:center;
height:900px;
background-repeat: no-repeat;
input{
    width:15%;
    padding:12px 20px;
    margin:8px 1%;
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
.item-container{
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    & div{
     width:20%; 
     border:2px solid black;  
     padding:.5%;
     margin:1%;

    }
}
`


const AddNewTech = () => {
    const [techItems, setTechItems] = useState([])
    const [formValues, setFormValues] = useState(initalFormValues)


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
           setTechItems(res.data)
          })
          .catch();
      }, []);


    return (
        <StyledDiv>
            <h1>Add new tech</h1>
            <form onSubmit={formSubmit}>
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
                <h2>Here is a list of items already on our website</h2>
                <div className='item-container'>
                {techItems.map(item => {
                    return <div className='card'>
                        <h2>{item.item}</h2>
                        </div>
                })}
                </div>
            </div>
        </StyledDiv>
    )
}

export default AddNewTech
