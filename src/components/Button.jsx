

export default function Button({ label, onClick }) {
    const defaultStyle = 'py-2 px-4 rounded-lg font-bold cursor-pointer border-2 border-cyan-400 bg-zinc-950 text-zinc-100 text-sm'

    return (
        <button 
        onClick={onClick}
        className={defaultStyle}
        >{label}
        </button>
    )
}