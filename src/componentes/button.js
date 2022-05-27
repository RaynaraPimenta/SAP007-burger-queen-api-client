import './button.css'
const Button = ({className, color, title}) => {
    return (
        <div className='div-geral'>
            <button 
            className={className}
            color={color}
            > 
            {title}
            </button>
        </div>
    )
}

export default Button;
