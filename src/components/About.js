import React from "react";
import { aboutData } from "../data/data";
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
        background-image: url('${aboutData.about_Image}');
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

function About() {
    const contentArray = aboutData.content.split('&!&')
    
    return (
        <StyledSection id="about">
            <div className="text">
                {aboutData.icon}                
                <h2>{aboutData.header}</h2>
                {contentArray.map((string, index) => {
                    return (<p key={index}>{string}</p>)
                })}
            </div>
            <div className="image">

            </div>
        </StyledSection>
    )
}

export default About;