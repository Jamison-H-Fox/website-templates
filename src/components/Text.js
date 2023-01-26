import React from "react";
import styled from 'styled-components';
import { brandPallet } from '../data/data';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2.5% 0;

    & h1 {
        margin: 1.25%;
    }

    & h2 {
        margin: 1.25%;
    }
    
    .divider {
        color: ${brandPallet.primaryColor};
    }

    & p {
        width: 50%;
        margin: 1.25%;
        text-align: center;
    }
`

function Text(props) {
    const textBodyArray = props.data.body.split('&!&');

    return (
        <StyledDiv id={props.data.id}>
            <h2>{props.data.header}</h2>
            <h2 className="divider">{props.data.divider}</h2>
            {textBodyArray.map((string, index) => {
                return (<p key={index}>{string}</p>)
            })}
        </StyledDiv>
    )
}

export default Text