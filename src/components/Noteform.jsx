// NoteForm Component 

export const Noteform = ({ title, content, category, setTitle, setContent, setCategory, editid, updatenote, addnote }) => {
    return (
        <>
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
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* Note Content */}
                <textarea
                    placeholder="Write your note here..."
                    rows="5"
                    className="mb-4 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>


                {/* Category + Button */}
                <div className="flex items-center justify-between">

                    <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Ideas</option>
                        <option>Study</option>
                    </select>

                    <button onClick={editid !== null ? updatenote : addnote} className="rounded-lg bg-indigo-900 px-6 py-2 font-medium text-white hover:bg-green-700">
                        {editid !== null ? "Update Note" : "Add Note"}
                    </button>

                </div>

            </section>
        </>
    )
}