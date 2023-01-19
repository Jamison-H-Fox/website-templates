import React, { useState } from "react";
import { detailsBoxData } from '../data/data'
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

        & h3 {
            text-decoration: underline;
            font-weight: bold;
            margin-bottom: 2.5%;
        }

        & .details-text {
            display: flex;
            flex-direction: column;
            width: 60%;
            align-self: center;

            & p {
                margin: 2.5% 0 2.5% 0;
                align-self: center;
                text-align: center;
            }
        }


        & .details-img {
            width: 30%;
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
function DetailsBox(props) {
    const [detailsText, setDetailsText] = useState([]);
    const [detailsImg, setDetailsImg] = useState('');
    const [detailsHeader, setDetailsHeader] = useState('');

    function hideDetails() {
        const detailsBox = document.getElementById('details-box');
        detailsBox.classList.toggle('hidden');
    };

    function changeText(evt) {
        const text = detailsBoxData.detailsBoxText[evt.target.attributes["data-index"].value].split('&!&');
        const img = detailsBoxData.detailsBoxImg[evt.target.attributes["data-index"].value];
        const header = detailsBoxData.detailsBoxNames[evt.target.attributes["data-index"].value];
        setDetailsText(text);
        setDetailsImg(img);
        setDetailsHeader(header)

        const detailsBox = document.getElementById('details-box');
        if (detailsBox.classList.length === 1) {
            detailsBox.classList.toggle('hidden');
        }
    };



    return (
        <StyledSection id={props.id}>
            <h2>{detailsBoxData.mainText}</h2>
            <div className="container">
                {detailsBoxData.detailsBoxNames.map((element, index) => {
                    return (
                        <div 
                            onClick={(event) => changeText(event)}
                            key={index}
                            className="box"
                            data-index={index}
                            >
                            <i data-index={index} className={detailsBoxData.detailsBoxIcons[index]}></i>
                            <h3 data-index={index}>{element}</h3>
                        </div>
                    )
                })}
            </div>
            <div className='hidden' id='details-box'>
                <div className="details-text">
                    <h3>{detailsHeader}</h3>
                    {detailsText.map((string, index) => {
                        return <p key={index}>{string}</p>
                    })}
                </div>
                <div className='details-img'><img src={detailsImg}/></div>
                <i className="fa-solid fa-xmark" onClick={() => hideDetails()}></i>
                <div className='break'></div>
                <button>{detailsBoxData.ctaButtonText}</button>
            </div>
        </StyledSection>
    )
}

export default DetailsBox;