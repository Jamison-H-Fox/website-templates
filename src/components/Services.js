import React from "react";
import { servicesData } from '../data/data'
import styled from 'styled-components'
import { brandPallet } from "../data/data";

const StyledSection = styled.section`
    
    & h2 {
        font-family: ${brandPallet.primaryFont};
    }

    & .container {
        margin-top: 5%;
        display: flex;
        justify-content: space-around;
        
        & .box {
            width: 20%;
            border: 3px solid #4f4f4f;
            text-align: center;
            padding: 4%;
            background-color: #fff;
            
            &:hover {
                color: ${brandPallet.primaryColor};
                border: 3px solid ${brandPallet.primaryColor};
            }

            & h3 {
                display: flex;
                justify-content: center;
                margin: 15% 0 0 0;
                font-family: ${brandPallet.primaryFont}
            }
        }
    }
`

function Services() {


    return (
        <StyledSection id='services'>
            <h2>{servicesData.mainText}</h2>
            <div className="container">
                {servicesData.serviceNames.map((element, index) => {
                    return (
                        <div key={index} className="box">
                            {servicesData.serviceIcons[index]}
                            <h3>{element}</h3>
                        </div>
                    )
                })}
            </div>
        </StyledSection>
    )
}

export default Services;

/* <section id="farm">
    <h2>Farm Fresh</h2>
    <div class="container">
        <div class="box">
            <i class="fas fa-cheese"></i>
            <h3>Dairy</h3>
        </div>
        <div class="box">
            <i class="fas fa-egg"></i>
            <h3>Eggs</h3>
        </div>
        <div class="box">
            <i class="fas fa-carrot"></i>
            <h3>Produce</h3>
        </div>
        <div class="box">
            <i class="fas fa-bread-slice"></i>
            <h3>Bakery</h3>
        </div>
    </div>
</section> */