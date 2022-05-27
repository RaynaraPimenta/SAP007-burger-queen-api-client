import './style.css'
const Button = ({className, color, title}) => {
    return (
        <div className='div-geral'>
            <button  className={className}> {title} <div className='transparencia'></div> </button>
        </div>
    )
}
export default Button;
