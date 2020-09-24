import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {fetchItems} from '../actions';
import styled from 'styled-components';
import Navigation from './Navigation';

const ItemsContainer = styled.div`
    margin: 7rem auto 0 auto;
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

class Items extends React.Component {

    componentDidMount() {
        this.props.fetchItems();
    }
    render() {
        return (
            <div>
                <Navigation />
                <ItemsContainer>
                    {this.props.items.map(item =>
                        <Item key={item.id} item={item} />)}
                </ItemsContainer>
            </div>
        )      
    }
}

const mapStateToProps = ({ items, fetchingItems}) => ({
    items,
    fetchingItems
});

export default 
    connect(
        mapStateToProps,
        { fetchItems }
    )(Items);



