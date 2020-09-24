import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const Card = styled.div`
    margin: 2rem;
    display: flex;
    align-items: center;


    h5 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
    padding: 0;
    }
    button {
    max-width: 292px;
    width: 200px;
    margin:0 0.5%;
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
