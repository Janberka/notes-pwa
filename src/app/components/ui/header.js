import React from 'react';
import styled from 'styled-components';
import {Flex} from 'grid-styled';

const Wrapper = styled.div`
    width: 100%;
    background-color: white;

    ${props=>props.sticky && `
        position: sticky;
        top: 0;
        z-index: 2;
    `}

    // soft-shadow
    box-shadow: 0px 5px 10px 0px rgba(0,64,128,0.05);
`

const Header = ({children, sticky}) => (
    <Wrapper sticky>
        <Flex justify='space-between' align="center" px={3} py={2}>
            {children}
        </Flex>
    </Wrapper>
)

export default Header;