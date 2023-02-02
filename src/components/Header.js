import React, { useState } from "react";
import styled from 'styled-components';
import { brandPallet } from "../data/data";

const StyledHeader = styled.header`
& * {
    // border: 1px red solid;
}

& nav {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    height: 10vh;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo {
        height: 8vh;
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        width: 50%;
        margin-left: 5%;
        opacity: .75;
    }
    
    & .links {
        margin-right: 5%;
        width: 33%;
        display: flex;
        justify-content: space-between;

        & a {
            text-decoration: none;
            letter-spacing: 3px;
            color: #4f4f4f;
            
            &:hover {
                color: ${brandPallet.primaryColor};
            }
        }
    }
}
`

function Header(props) {
    const [hidden, setHidden] = useState(false)

    const handleHidden = () => {
        setHidden(!hidden);
        // handle assignment of classNames here rather than in the render?
    }

    return (
        <StyledHeader id={props.data.id}>
            <nav>
                <div className="logo" style={{backgroundImage:`url(${props.data.logo})`}}>
                </div>
                {/* <div onClick={() => {handleHidden()}}>
                    <i className="fa-solid fa-bars"></i>
                </div> */}
                <div className='links' >
                    {props.data.linkList.map((element, idx) => {
                        return <a key={idx} href={`#${element.toLowerCase()}`}>{element}</a>
                    })}
                </div>
            </nav>
        </StyledHeader>
    )
};

export default Header;