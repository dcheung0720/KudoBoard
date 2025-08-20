import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard'
import api from "../lib/axios"

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchNotes = async() => {
      try{
        const res = await api.get("/notes");
        setNotes(res.data);
        console.log(res.data);
      }catch(error){
        console.log("Error fetching Notes")
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, [])

    return (
    <div className="min-h-screen">
        <Navbar></Navbar>
        <div className = "max-w-7xl mx-auto p-4 mt-6">
          {loading && <div className = "text-center text-primary py-10">Loading notes...</div>}
          {notes.length > 0 && (
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notes.map(note =>
                  <NoteCard key = {note._id} note = {note} setNotes={setNotes}/>
                )}
            </div>

          )}
        </div>
    </div>)

};

export default HomePage
