// Header and search Component 

export const Header = ({ search, setSearch }) => {
    return (
        <>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>
            </header>
        </>
    )
}