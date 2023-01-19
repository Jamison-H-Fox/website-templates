import React from "react";
import styled from 'styled-components';
import { textData, brandPallet } from '../data/data';

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
    const textBodyArray = textData.textBody.split('&!&')

    return (
        <StyledDiv>
            <h1>{textData.textHeader}</h1>
            <h2>{textData.textDivider}</h2>
            {textBodyArray.map((string, index) => {
                return (<h4 key={index}>{string}</h4>)
            })}
        </StyledDiv>
    )
}

export default Text