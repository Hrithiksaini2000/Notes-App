// Header and search Component 

export const Header = ({ search, setSearch, setDarkmode, darkmode }) => {

    return (
        <>
            {/* Header */}
            <header className="mb-8 flex flex-wrap items-start sm:items-center justify-between sm:flex-row">
                <div className='mb-4'>
                    <h1 className={`text-3xl font-bold ${darkmode ? "text-white" : "text-gray-900"}`}>
                        📝 My Notes
                    </h1>

                    <p className={`mt-1 ${darkmode ? "text-white" : "text-gray-500"}`}>
                        Capture your ideas and keep your thoughts organized.
                    </p>
                </div>
                <div className="flex-1">
                    <button onClick={() => setDarkmode(!darkmode)} className="rounded-lg bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-700 hover:text-white">
                        {darkmode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    </button>
                </div>
                {/* Search */}
                <div className='flex-1 w-full sm:w-64'>
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>
            </header>
        </>
    )
}