import React from 'react';
import styled from 'styled-components';
import {Box, Flex} from 'grid-styled';
import { connect } from 'react-redux';

import Textarea from '../ui/textarea';
import Button from '../ui/button';
import NoteList from './list';

import { createNote, updateNote } from '../../../store/notes'


const Content = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: calc(100vh - 100px);
    position: sticky;
    top: 50px;
    box-shadow: 0px 10px 40px -10px rgba(0,64,128,0.2);
    borderRadius: 8px;
    overflow: hidden;
`

class Notes extends React.Component{
    state = {
        note: false,
        activeIndex: -1 
    }

    showNote = (i) => {
        const {notes} = this.props;
        const note = notes[i];
        this.setState({ note, activeIndex: i });
        this.textarea.focus();
    }

    changeNote = (e) => {
        const { dispatch } = this.props;
        const { activeIndex } = this.state;
        const note = e.target.value;
        this.setState({ note });

        dispatch(updateNote(activeIndex, note))
    }

    createNote = async (e) => {
        const { dispatch, notes } = this.props;

        const nextId = notes.length;

        // create note
        await dispatch(createNote(`Note - ${nextId}`));

        // show last note
        this.showNote(nextId);
    }

    render() {
        const { notes } = this.props;
        const { activeIndex } = this.state;
        return (
            <Flex style={{ width: '100%' }}>
                <Box p={2} style={{width: '200px'}}>
                    <Button onClick={this.createNote}>Create New Note</Button>
                    <NoteList data={notes} active={activeIndex} onClick={this.showNote}/>
                </Box>
                <Content m={2} p={2}>
                <Textarea disabled={(activeIndex===-1)} innerRef={(r)=>{this.textarea=r;}} onChange={this.changeNote} value={ this.state.note || '' } style={{ flex: 1 }}/>
                </Content>
            </Flex>
        )
    }
}

const mapStateToProps = ({ notes }) => ({ notes })

export default connect(mapStateToProps)(Notes);