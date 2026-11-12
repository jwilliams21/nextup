

export default function Button({ label, onClick }) {
    const defaultStyle = 'py-2 px-4 bg-cyan-600 rounded-lg'

    return (
        <button 
        onClick={onClick}
        className={defaultStyle}
        >{label}
        </button>
    )
}