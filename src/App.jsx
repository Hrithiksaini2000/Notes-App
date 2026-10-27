import { useEffect, useState } from 'react'
import './App.css'
import notesdata from "./Api/notes.json"
import { Header } from './components/Header'
import { Noteform } from './components/Noteform'
import { Filters } from './components/Filters'
import { Notelist } from './components/Notelist'
import { Footer } from './components/Footer'

export const App = () => {

  // Notes State is created in which our cards data will be come 
  const [notes, Setnotes] = useState(()=>{
    // Here we get the new saved note 
    const savednotes = localStorage.getItem("SavedValues")

    // And here we convert the save note string into array 
    if (savednotes){
      return JSON.parse(savednotes)
    }

    return notesdata
  })

  // Title, Content, Category State is created  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("Personal")

  // Edit State is created 
  const [editid, setEditid] = useState(null)

  // Search State is created 
  const [search, setSearch] = useState("")

  // Filter state is created 
  const [filter, setFilter] = useState("All")

  const [darkmode, setDarkmode] = useState(false)

  // Filtered Notes Function 
  const filterednotes = notes.filter((note) => {
    const matcheSearch = note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = filter === "All" || note.category === filter

    return matcheSearch && matchesCategory
  })

  // Add a note function 
  const addnote = () => {

    if (!title.trim() || !content.trim()) {
      return
    }

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      category: category
    }

    Setnotes([...notes, newNote])

    setTitle("")
    setContent("")
    setCategory("Personal")

    console.log(title)
    console.log(content)
    console.log(category)
  }

  useEffect(() => {
    // Here we are save the new note in the  local storage set item and convert the array data into string using json stringify 
    localStorage.setItem("SavedValues", JSON.stringify(notes))
  }, [notes])

  // Update a Note Function 
  const updatenote = () => {

    if (!title.trim() || !content.trim()) {
      return
    }

    const updatednotes = notes.map((note) => {
      if (note.id === editid) {
        return {
          ...note,
          title,
          content,
          category
        }
      }
      return note
    })

    Setnotes(updatednotes)

    setEditid(null)
    setTitle("")
    setContent("")
    setCategory("Personal")
  }

  // Start Edit Function 
  const startedit = (note) => {
    setEditid(note.id)
    setTitle(note.title)
    setContent(note.content)
    setCategory(note.category)
  }
  // Delete a note function  
  const deletenote = (id) => {
    Setnotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className={`min-h-screen ${darkmode ? "bg-gray-900" : "bg-gray-100"} px-4 py-8`}>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl">

        <Header search={search} setSearch={setSearch} setDarkmode={setDarkmode} darkmode={darkmode} />

        <Noteform title={title} content={content} category={category} setTitle={setTitle} setContent={setContent} setCategory={setCategory} editid={editid} updatenote={updatenote} addnote={addnote} />

        <Filters filter={filter} setFilter={setFilter} />

        <Notelist filterednotes={filterednotes} startedit={startedit} deletenote={deletenote} />

        <Footer filterednotes={filterednotes} />

      </div>
    </div>
  )
}
