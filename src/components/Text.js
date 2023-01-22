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
        color: ${brandPallet.primaryColor};
    }

    & h4 {
        width: 50%;
        margin: 1.25%;
    }
`

function Text(props) {
    const textBodyArray = props.data.body.split('&!&');

    return (
        <StyledDiv id={props.data.id}>
            <h1>{props.data.header}</h1>
            <h2>{props.data.divider}</h2>
            {textBodyArray.map((string, index) => {
                return (<h4 key={index}>{string}</h4>)
            })}
        </StyledDiv>
    )
}

export default Text