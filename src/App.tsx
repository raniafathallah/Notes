import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import { Note } from './models/note.model';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [notes,setNotes]=React.useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: " Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);
  return (
    <div className="App">
      <>
       <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={ setNotes}/>
          </Col>
        </Row>
      </Container>
    </>

    </div>
  );
}

export default App;
