import React from "react";
import { textImgData } from "../data/data";
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
        margin-left: 2.5%;
        background-image: url('${textImgData.TextImg_Image}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    & .text {
        margin-right: 2.5%;
        width: 45%;
        border: 3px solid #4f4f4f;
        background-color: #fff;
        text-align: center;
        padding: 4%;

        & p {
            margin: 2.5% 0 2.5% 0;
            text-align: left;
            font-family: ${brandPallet.secondaryFont};
        }

        & h2 {
            font-family: ${brandPallet.primaryFont};
            margin-bottom: 2.5%;
        }

        & i {
            margin-bottom: 5%;
            
        }
    }
`

function TextImg(props) {
    const contentArray = textImgData.content.split('&!&')
    
    return (
        <StyledSection id={props.id}>
            <div className="text">
                {textImgData.icon}                
                <h2>{textImgData.header}</h2>
                {contentArray.map((string, index) => {
                    return (<p key={index}>{string}</p>)
                })}
            </div>
            <div className="image">

            </div>
        </StyledSection>
    )
}

export default TextImg;