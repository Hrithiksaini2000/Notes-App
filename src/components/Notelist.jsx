// Notes List Component 

export const Notelist = ({ filterednotes, startedit, deletenote }) => {
    return (
        <>
            {/* Notes Grid */}
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filterednotes.map((note) => {
                    return (
                        <div key={note.id} className={`rounded-xl p-5 shadow-sm ${note.category === "Personal" ? "bg-green-100" : note.category === "Work" ? "bg-yellow-100" : note.category === "Ideas" ? "bg-blue-100" : "bg-indigo-300"}`}>

                            <div className="mb-3 flex items-start justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {note.title}
                                </h3>

                                <span className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-medium">
                                    {note.category}
                                </span>
                            </div>

                            <p className="mb-6 text-sm leading-6 text-gray-700">
                                {note.content}
                            </p>

                            <div className="flex justify-end gap-2">
                                <button onClick={() => startedit(note)} className="rounded-md bg-white px-3 py-1.5 text-sm hover:bg-gray-50">
                                    Edit
                                </button>

                                <button onClick={() => deletenote(note.id)} className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600">
                                    Delete
                                </button>
                            </div>

                        </div>
                    )
                })}
            </section>
        </>
    )
}