import React from "react";
import styled from "styled-components";
import { contactData } from '../data/data'
import { brandPallet } from "../data/data";

const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;

    & h2 {
        font-family: ${brandPallet.primaryFont};
        width: 100%;
    }

    & .left, .right {
        width: 50%;
        padding: 4% 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .contact-info {
        width: 50%;
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
        width: 70%;
    }
`


function Contact() {


    return (
        <StyledSection>
            <h2>{contactData.mainText}</h2>
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