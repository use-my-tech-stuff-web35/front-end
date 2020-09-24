import React from 'react';
import {connect} from 'react-redux';
import {itemDetail, deleteItem} from '../actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation'

const FormContainer = styled.div`
display: flex;
flex-direction: column;
height: 60vh;
justify-content: center;

button {
    max-width: 292px;
    width: 200px;
    margin:0 0.5%;
    margin-bottom: 2rem;
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
  h3 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
  }
  h5 {
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
    padding: 0;
    }
`
const CardBody = styled.div`
    width: 500px; 
    margin: auto;
    align-content: center;
`

class ItemDetail extends React.Component {
    state = {
        deletingItem: null,
    }
    componentDidMount() {
        this.props.itemDetail(this.props.match.params.id)
    }
    getItem = id => {
        this.props.gettingDetail(id)
    }
    removeItem = id => {
        this.props.deleteItem(this.props.item.id).then(() => {
            this.props.history.push('/items');
        })
    } 
    render() {
        return (
            <div>
                <Navigation />
                <FormContainer>
                    <div>
                        <div >
                            <CardBody>
                                <h3>{this.props.item.item}</h3>
                                <Link to={`/items/${this.props.item.id}/edit`}>
                                    <button >Edit</button>
                                </Link>
                                <button  onClick={this.removeItem}>{this.props.deletingItem ? "Deleting" : "Delete"}</button>
                                <div>
                                    <div >
                                        <div >
                                            <div>
                                                <h5>Request to rent {this.props.item.item}</h5>
                                               
                                            </div>
                                            <div>
                                               <p> Would you like to submit a rental request for this item?</p>
                                            </div>
                                            <button>Request Rental</button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </div>
                </FormContainer>
            </div>
        )
    }
}

const mapStateToProps = ({ item, gettingDetail, deletingItem }) => ({
    deletingItem,
    item,
    gettingDetail
});

export default 
    connect(
        mapStateToProps,
        { itemDetail, deleteItem }
    )(ItemDetail);

