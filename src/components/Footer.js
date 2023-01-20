import React from "react";
import styled from "styled-components";
import { brandPallet } from "../data/data";

const StyledFooter = styled.footer`
    background-color: ${brandPallet.primaryColor};
    color: #fff;
    padding: 2% 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    & div {
        width: 30%;
    }

    & .break {
        width: 100%;
    }

    // & * {
    //     border: red 1px solid;
    // }

    & a {
        color: #fff;

        &:hover{
            color: #4f4f4f;
        }
    }

    & .social-container {

        & .social {
            display: flex;
            justify-content: space-around;
            margin-top: 10%;
        }
    }

    & .bottom-right {
        width: 60%;
        display: flex;

        & .bottom-links {
            // height: 80%;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;

            & a {
                margin-left: 10%;
            }
        }

        & a {
            margin: 2% 0;
            text-decoration: none;
        }
    
    }

    & .copyright{
        width: 90%;
        display: flex;
        justify-content: flex-end;
    }
`


function Footer(props) {


    return (
        <StyledFooter id={props.data.id}>
            <div className="social-container">
                <h3>{props.data.heading}</h3>
                <nav className="social">
                    {props.data.links.map((element, index) => {
                        return (
                            <a key={index} href={element} target='_blank'>{props.data.icons[index]}</a>
                        )
                    })}                    
                </nav>
            </div>
            <div className="bottom-right">
                <nav className="bottom-links">
                    {props.data.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </nav>
            </div>
            <div className="break"></div>
            <div className="copyright">
                <p>{props.data.copyright}</p>
            </div>
        </StyledFooter>
    )
}

export default Footer;