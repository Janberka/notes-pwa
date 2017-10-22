import React from 'react';
import styled from 'styled-components';

const NoteItem = styled.a`
    display: block;
    padding: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${props=>props.isActive && `
        font-weight:bold;
    `}
`

const NoteList = ({ data, active, onClick }) => {
    return data.map((note, i)=>{
        const isActive = active === i
        return (
            <NoteItem key={i} p={2} onClick={() => onClick(i)} isActive={isActive}>{note.split(/\n/)[0]}</NoteItem>
        )
    })
}

export default NoteList