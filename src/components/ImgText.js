import React from "react";
import styled from "styled-components";
import { brandPallet } from "../data/data";

const StyledSection = styled.section` 
    display: flex;
    justify-content: center;

    // & * {
    //     border: red 1px solid;
    // }

    & .image {
        width: 25%;
        margin-right: 2.5%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    & .text {
        margin-left: 2.5%;
        width: 45%;
        border: 3px solid #4f4f4f;
        background-color: #fff;
        text-align: center;
        padding: 4%;

        & p {
            margin: 2.5% 0 2.5% 0;
            text-align: center;
            font-family: ${brandPallet.secondaryFont};
        }

        & h2 {
            font-family: ${brandPallet.primaryFont};
            margin-bottom: 2.5%;
            font-size: 4.5rem;
        }

        & i {
            margin-bottom: 5%;
            
        }
    }
`

function ImgText(props) {
    const contentArray = props.data.content.split('&!&')
    
    return (
        <StyledSection id={props.data.id}>
            <div className="image" style={{backgroundImage:`url(${props.data.image})`}}>
            </div>
            <div className="text">
                <i className={props.data.icon}></i>
                <h2>{props.data.header}</h2>
                {contentArray.map((string, index) => {
                    return (<p key={index}>{string}</p>)
                })}
            </div>
        </StyledSection>
    )
}

export default ImgText;