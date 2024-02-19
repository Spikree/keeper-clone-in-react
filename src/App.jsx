import React, { useState} from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes , setNotes] = useState([]);


  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItems, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {
      notes.map((noteItems, index) => {
        return <Note 
        key = {index}
        id = {index}
        title={noteItems.title}
        content={noteItems.content}
        onDelete={deleteNote}
        />
      })
    }
      <Footer />
    </div> 
  );
}

export default App;