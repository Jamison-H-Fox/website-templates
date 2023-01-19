import React from "react";
import styled from "styled-components";
import { contactData } from '../data/data'
import { brandPallet } from "../data/data";

const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;

    // & * {
    //     border: red 1px solid;
    // }

    & h2 {
        font-family: ${brandPallet.primaryFont};
        width: 100%;
        margin-bottom: 2.5%;
    }

    & .left, .right {
        width: 33%;
        padding: 4% 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .map {
        display: flex;

    }

    & .contact-info {
        width: 85%;
        line-height: 2;

        & h3 {
            font-family: ${brandPallet.primaryFont};
            text-align: left;
        }

        & address, a {
            font-family: ${brandPallet.secondaryFont};
            text-decoration: none;
            color: #4f4f4f;
        }
    }

    & .img-container {
        width: 85%;
        display: flex;
        
    }
`


function Contact(props) {


    return (
        <StyledSection id={props.id}>
            <h2>{contactData.mainText}</h2>
            <div className="map">
                {contactData.mapEmbedCode}
            </div>
            <div className="left">
                <div className="contact-info">
                    <h3>{contactData.greeting}</h3>
                    <address>{contactData.address1}<br/>{contactData.address2}<br/>
                        <a href={`tel:${contactData.phone}`}>Phone: {contactData.phone}</a><br/>
                        <a href={`mailto:${contactData.email}`}>Email: {contactData.email}</a>
                    </address>
                </div>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={contactData.contactImg_URL} alt={contactData.contactImg_alt} />
                </div>
            </div>
        </StyledSection>
    )
}

export default Contact;