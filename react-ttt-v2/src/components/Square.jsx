
const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`
    return (
        <button 
          className={style}
          onClick={onClick}
          disabled={value === null ? false : true }>
        </button>
    )
}

export default Square;