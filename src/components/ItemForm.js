/* import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions';
import styled from 'styled-components';
import Navigation from './Navigation';



class ItemForm extends React.Component {
    state = {
        item: {
            item: '', 
            availability: true,
            owner: 1,
        }
    };

    handleItemChange = e => {
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: e.target.value
            }
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item).then(() => {
            this.props.history.push('/items');
        });
        this.setState({
            item: {
            item: '',
            availability: '',
            }
        });
    }

    render() {
        return (
            <div>
                <Navigation/>
                <h1>Add an item to rent</h1>
                <Form onSubmit={this.submitItem}>
                    <label>
                        Title
                        <input
                            type="text"
                            name="item"
                            value={this.state.item.item}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        availability
                        <input
                            type="text"
                            name="availability"
                            value={this.state.item.availability}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <Button onClick={this.submitItem}>{this.props.addingItem ? "Loading" : "Add Item"}</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({owner, addingItem}) => ({
    owner,
    addingItem
});

export default 
    connect(
        mapStateToProps,
        {addItem}
    )(ItemForm);

    const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 800px;
    width: 600px;
    margin: auto;
    input {
      width: 600px;
      height: 50px;
      margin: 10px 0;
      padding: 0 10px;
      box-sizing: border-box;
      border: 1px solid grey;
      border-radius: 5px;
      font-size: 18px;
      outline: none;
    }
  `
  
  const Button = styled.button`
    height: 50px;
    width: 400px;
    margin: 10px auto;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: dodgerblue;
    cursor: pointer;
  ` */

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Navigation from './Navigation';


const initalFormValues = {
    item: '',
}

const StyledDiv = styled.div`
background-image:url('https://images.unsplash.com/7/Top_view.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80');
background-size:cover;
background-position:center;
height:1000px;
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
}
button:hover {
  background-color: #b3a394;
  color: #102542;
}
h1{
    margin:0 auto;
    padding:1%;
}
`


const ItemForm = () => {
    const [techItems, setTechItems] = useState([])
    const [formValues, setFormValues] = useState(initalFormValues)

    const getTech = () => {
		axiosWithAuth()
			.get('/items')
			.then((res) => {
				// console.log(res)
				setTechItems(res.data);
			})
			.catch((err) => console.log(err));
	};




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
