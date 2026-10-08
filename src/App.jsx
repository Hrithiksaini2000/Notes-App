import { useState } from 'react'
import './App.css'
import notesdata from "./Api/notes.json"

export const App = () =>{

  // Notes State is created in which our cards data will be come 
  const [notes, Setnotes] = useState(notesdata)

  // Title, Content, Category State is created  
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("Personal")
  
  console.log(title,content,category)
  
  return (
    <div className="min-h-full bg-gray-100 px-4 py-8">

      {/* Main Container */}
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8 flex items-start sm:items-center justify-between flex-col sm:flex-row">
          <div className='mb-4'>
            <h1 className="text-3xl font-bold text-gray-900">
              📝 My Notes
            </h1>

            <p className="mt-1 text-gray-500">
              Capture your ideas and keep your thoughts organized.
            </p>
          </div>

          {/* Search */}
          <div className='w-full sm:w-64'>
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full sm:w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>
        </header>


        {/* Add Note Section */}
        <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">

          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Create a new note
          </h2>

          {/* Note Title */}
          <input
            type="text"
            placeholder="Note title..."
            className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />

          {/* Note Content */}
          <textarea
            placeholder="Write your note here..."
            rows="5"
            className="mb-4 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            value={content}
            onChange={(e)=> setContent(e.target.value)}
          ></textarea>


          {/* Category + Button */}
          <div className="flex items-center justify-between">

            <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none" value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option>Personal</option>
              <option>Work</option>
              <option>Ideas</option>
              <option>Study</option>
            </select>

            <button className="rounded-lg bg-indigo-900 px-6 py-2 font-medium text-white hover:bg-green-700">
              Add Note
            </button>

          </div>

        </section>


        {/* Filters */}
        <div className="mb-6 flex gap-3">

          <button className="rounded-lg bg-gray-950 px-4 py-2 text-sm font-medium text-white">
            All
          </button>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            Personal
          </button>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            Work
          </button>

          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            Ideas
          </button>

        </div>


        {/* Notes Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Note Card 1 */}
          <div className="rounded-xl bg-yellow-100 p-5 shadow-sm">

            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Learn React
              </h3>

              <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-medium">
                Study
              </span>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-700">
              Learn useState, useEffect, props, components and React
              fundamentals.
            </p>

            <div className="flex justify-end gap-2">
              <button className="rounded-md bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
                Edit
              </button>

              <button className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600">
                Delete
              </button>
            </div>

          </div>


          {/* Note Card 2 */}
          <div className="rounded-xl bg-blue-100 p-5 shadow-sm">

            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Ideas
              </h3>

              <span className="rounded-full bg-blue-200 px-3 py-1 text-xs font-medium">
                Ideas
              </span>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-700">
              Build an expense tracker, weather app and an e-commerce
              dashboard.
            </p>

            <div className="flex justify-end gap-2">
              <button className="rounded-md bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
                Edit
              </button>

              <button className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600">
                Delete
              </button>
            </div>

          </div>


          {/* Note Card 3 */}
          <div className="rounded-xl bg-green-100 p-5 shadow-sm">

            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Gym Plan
              </h3>

              <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-medium">
                Personal
              </span>
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-700">
              Monday: Chest, Tuesday: Back, Wednesday: Legs and continue
              with the weekly workout plan.
            </p>

            <div className="flex justify-end gap-2">
              <button className="rounded-md bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
                Edit
              </button>

              <button className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600">
                Delete
              </button>
            </div>

          </div>

        </section>


        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          3 notes
        </footer>

      </div>
    </div>
  )
}
