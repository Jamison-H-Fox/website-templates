import React from "react";
import { spacerImgageData } from '../data/data'
import styled from "styled-components";

const StyledSection = styled.section`
    height: 40vh;
    background-image: url('${spacerImgageData.spacerImgage_URL}');
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
`

function SpacerImage(props) {


    return (
        <StyledSection className="spacer-image" id={props.id}>

        </StyledSection>
    )
}

export default SpacerImage;