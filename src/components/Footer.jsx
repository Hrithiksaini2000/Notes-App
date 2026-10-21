// Footer component

export const Footer = ({filterednotes}) => {
    return (
        <>
            {/* Footer */}
            <footer className="mt-8 text-center text-sm text-gray-500">
                {filterednotes.length} Notes
            </footer>
        </>
    )
}