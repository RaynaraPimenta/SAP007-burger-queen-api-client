import './button.css'
const Button = ({className, color, title}) => {
    return (
        <div className='div-geral'>
            <div className='transparencia'>
                <button 
                className={className}
                > 
                {title}
                </button>
            </div>
        </div>
    )
}

export default Button;
