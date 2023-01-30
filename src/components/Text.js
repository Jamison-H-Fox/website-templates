import React from "react";
import styled from 'styled-components';
import { brandPallet } from '../data/data';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2.5% 0;

    & h2 {
        width: 75%;
        margin: 1.25%;
    }
    
    .divider {
        color: ${brandPallet.primaryColor};
    }

    & p {
        width: 66%;
        margin: 2.5%;
        text-align: center;
    }
`

function Text(props) {
    const headerArray = props.data.header.split('&!&');
    const textBodyArray = props.data.body.split('&!&');

    return (
        <StyledDiv id={props.data.id}>
            {headerArray.map((string, index) => {
                return (<h2 key={index}>{string}</h2>)
            })}
            <h2 className="divider">{props.data.divider}</h2>
            {textBodyArray.map((string, index) => {
                return (<p key={index}>{string}</p>)
            })}
        </StyledDiv>
    )
}

export default Text