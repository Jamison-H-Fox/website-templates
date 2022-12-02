import React, { useState } from "react";
import { servicesData } from '../data/data'
import styled from 'styled-components'
import { brandPallet } from "../data/data";

const StyledSection = styled.section`    
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        font-family: ${brandPallet.primaryFont};
    }
    
    & .container {
        width: 100%;
        margin-top: 5%;
        display: flex;
        justify-content: space-evenly;
        
        & .box {
            width: 20%;
            border: 3px solid #4f4f4f;
            text-align: center;
            padding: 4%;
            background-color: #fff;
            
            &:hover {
                color: ${brandPallet.primaryColor};
                border: 3px solid ${brandPallet.primaryColor};
                cursor: pointer;
            }

            & h3 {
                display: flex;
                justify-content: center;
                margin: 15% 0 0 0;
                font-family: ${brandPallet.primaryFont}
            }
        }
    }

    & #details-box {
        position: relative;
        width: 66%;
        border: 3px solid #4f4f4f;
        text-align: center;
        padding: 2.5%;
        background-color: #fff;
        margin-top: 5%;

        & .fa-xmark {
            position: absolute;
            top: 10px;
            right: 7.5px;
            width: 15px;
            font-size: 2rem;

            &:hover {
                color: red;
                cursor: pointer;
            }
        }

        & button {
            font-size: 1.75rem;
            font-family: ${brandPallet.primaryFont};
            background-color: ${brandPallet.primaryColor};
            border-radius: 10px;
            border: none;
            padding: 2.5%;
            margin-top: 5%;

            &:hover {
                cursor: pointer;
            }
        }
    }

    & .hidden {
        display: none;
    }

`

function Services() {
    const [detailsText, setDetailsText] = useState('');

    function hideDetails() {
        const detailsBox = document.getElementById('details-box');
        detailsBox.classList.toggle('hidden');
    };

    function changeText(event) {
        const text = event.nativeEvent.srcElement.dataset.detailstext;
        setDetailsText(text)

        const detailsBox = document.getElementById('details-box');
        if (detailsBox.classList.length === 1) {
            detailsBox.classList.toggle('hidden');
        }  
    };

    return (
        <StyledSection id='services'>
            <h2>{servicesData.mainText}</h2>
            <div className="container">
                {servicesData.serviceNames.map((element, index) => {
                    return (
                        <div onClick={(event) => changeText(event)} 
                            key={index} 
                            className="box"
                            data-detailstext={servicesData.serviceDetails[index]}
                            >
                            {servicesData.serviceIcons[index]}
                            <h3>{element}</h3>                                
                        </div>                        
                    )
                })}
            </div>
            <div className='hidden' id='details-box'>
                <p>{detailsText}</p>
                <i className="fa-solid fa-xmark" onClick={() => hideDetails()}></i>
                <button>{servicesData.ctaButtonText}</button>
            </div>
        </StyledSection>
    )
}

export default Services;