import React from "react"
import styled from 'styled-components'
import { brandPallet } from "../data/data"

const StyledSection = styled.section`
    height: 85vh;
    margin-top: 10vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    & .titles {
        padding: 2.5%;
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 5px;

        & .break1 {
            width: 100%;
            height: 3vh;
        }

        & .break2 {
            width: 100%;
            height: 0.5vh;
        }
    }
`

function Top(props) {
    const headerBodyArray = props.data.subHeading.split('&!&');

    return (
        <StyledSection id={props.data.id} style={{backgroundImage:`url(${props.data.image})`}}>
            <div className="titles">
                <h1>{props.data.mainHeading}</h1>
                <div className="break1"></div>
                {headerBodyArray.map((string, index) => {
                    return (<h3 key={index}>{string}</h3>)
                })}
            </div>
        </StyledSection>
    )
}

export default Top;