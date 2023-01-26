import React from "react";
import styled from "styled-components";
import { brandPallet } from "../data/data";

const StyledSection = styled.section`
    height: 40vh;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    background-repeat: no-repeat;
`

function SpacerImage(props) {


    return (
        <StyledSection className="spacer-image" id={props.data.id} style={{backgroundImage:`url(${props.data.image})`}}>

        </StyledSection>
    )
}

export default SpacerImage;