
const BurguerButton = (props) =>{
    return(
        <div onClick={props.handleClick} className={`burguerIcon burguerMenu__container ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurguerButton;