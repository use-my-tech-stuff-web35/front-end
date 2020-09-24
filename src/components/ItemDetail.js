import React from 'react';
import {connect} from 'react-redux';
import {itemDetail, deleteItem} from '../actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation'

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
                                <h5>{this.props.item.item}</h5>
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
                                                Would you like to submit a rental request for this item?
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

const FormContainer = styled.div`
    max-width: 500px;
    justify-content: space-around;
    align-content: center;
    height: 700px;
    margin: auto;
    margin-top: 100px;
    align-content: center;
`
const CardBody = styled.div`

    width: 500px; 
    margin: auto;
    align-content: center;
 
`
