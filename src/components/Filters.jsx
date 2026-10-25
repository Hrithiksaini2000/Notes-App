// Filters Component 

export const Filters = ({ filter, setFilter }) => {
    return (
        <>
            {/* Filters */}
            <div className="mb-6 flex gap-3">
                {["All", "Personal", "Work", "Ideas", "Study"].map((item) => {
                    return (
                        <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-4 py-2 text-sm font-medium ${filter === item ? `bg-gray-950 text-white` : `bg-white text-gray-700 shadow-sm hover:bg-gray-50`}`}>
                            {item}
                        </button>
                    )
                })}

            </div>
        </>
    )
}