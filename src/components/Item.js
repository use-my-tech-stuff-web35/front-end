import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    width: 250px;
    max-height: auto;
`

const Item = props => {
    
    return (
        <Card >
            <div>
                <h5>{props.item.item}</h5>
                <Link to={`/items/${props.item.id}`}>
                    <button>More Details</button>
                </Link>
            </div>
        </Card>
    )
}

export default Item;    
