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
        font-size: 4.5rem;
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        position: relative;
        width: 75%;
        border: 3px solid #4f4f4f;
        text-align: center;
        padding: 2.5%;
        background-color: #fff;
        margin-top: 5%;

        & .break {
            width: 100%;
        }

        & .details-text {
            display: flex;
            flex-direction: column;
            width: 45%;
            align-self: center;

            & p {
                margin: 2.5% 0 2.5% 0;
                align-self: center;
                text-align: center;
            }
        }


        & .details-img {
            width: 45%;
            align-self: center;
        }

        & .fa-xmark {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 15px;
            font-size: 2rem;

            &:hover {                
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
            margin-top: 2.5%;
            
            &:hover {
                cursor: pointer;                   
            }
        }
    }

    & .hidden {
        display: none !important;
    }

`

function Services() {
    const [detailsText, setDetailsText] = useState(['lol','lolz']);
    const [detailsImg, setDetailsImg] = useState('');

    function hideDetails() {
        const detailsBox = document.getElementById('details-box');
        detailsBox.classList.toggle('hidden');
    };

    function changeText(event) {
        if (event.nativeEvent.path.length === 9) {
            const text = servicesData.serviceDetails[event.nativeEvent.srcElement.dataset.index].split('&!&');
            const img = servicesData.serviceDetailsImg[event.nativeEvent.srcElement.dataset.index];
            setDetailsText(text);
            setDetailsImg(img);
        } else {
            const text = servicesData.serviceDetails[event.nativeEvent.srcElement.parentElement.dataset.index].split('&!&');
            const img = servicesData.serviceDetailsImg[event.nativeEvent.srcElement.parentElement.dataset.index];
            setDetailsText(text);
            setDetailsImg(img);
        };                     

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
                        <div 
                            onClick={(event) => changeText(event)}
                            key={index}
                            className="box"
                            data-index={index}
                            >
                            {servicesData.serviceIcons[index]}
                            <h3>{element}</h3>
                        </div>
                    )
                })}
            </div>
            <div className='hidden' id='details-box'>
                {/* {console.log(detailsText)} */}
                <div className="details-text">
                    {detailsText.map((string, index) => {
                        return <p key={index}>{string}</p>
                    })}
                </div>
                <div className='details-img'><img src={detailsImg}/></div>
                <i className="fa-solid fa-xmark" onClick={() => hideDetails()}></i>
                <div className='break'></div>
                <button>{servicesData.ctaButtonText}</button>
            </div>
        </StyledSection>
    )
}

export default Services;