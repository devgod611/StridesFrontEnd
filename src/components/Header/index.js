import React from "react";
import { useState, useEffect } from 'react';
import { HeaderContainer } from "./styles";

function Header() {
    const [isGreen, setIsGreen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setIsGreen(true);
            } else setIsGreen(false);
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    
    return (
        <HeaderContainer green={isGreen}>

        </HeaderContainer>
    );
}

export default Header;