import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {editItem, itemDetail} from '../actions';
import Navigation from './Navigation'

const Form = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
min-height: 800px;
width: 600px;
margin: auto;
input {
  width: 600px;
  height: 50px;
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid gainsboro;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
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
`


class ItemEditForm extends React.Component {
    state = {
        item: this.props.item,
        editingItemId: null,
    };

    componentDidMount() {
        this.props.itemDetail(this.props.match.params.id)
    }

    getItem = id => {
        this.props.gettingDetail(id)
    }

    handleChange = e => {
        let value = e.target.value;
       
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: value
            }
        })
    };


    updateItem = (e, item) => {
        e.preventDefault();
        console.log('updateItem')
        this.props.editItem(this.state.item).then(() => {
            this.setState({editingItemId: null});
            this.props.history.push('/items')
        })
    }

    render() {
        return (
            <div>
                <Navigation />
               
                <Form onSubmit={this.updateItem}>
                <h1>Edit Item</h1>
                    <label>
                        Title
                        <input
                            type="text"
                            name="item"
                            value={this.state.item.item}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button onClick={this.updateItem}>{this.props.editingItem ? "Loading" : "Edit Item"}</button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({ gettingDetail, item, editingItem }) => ({
    gettingDetail,
    editingItem,
    item,
   
});

export default 
    connect(
        mapStateToProps,
        { itemDetail,editItem }
    )(ItemEditForm);


