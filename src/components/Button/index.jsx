import { ButtonContainer } from "./styled"

const Button = ({children, className='default', isBig=false, fullWidth, type, style, ...rest})=>{


    return(
        <ButtonContainer style={style}  isBig={isBig} fullWidth={fullWidth} >
            <button type={type} className={className}  {...rest}>
            {children}
            </button>
        </ButtonContainer>
    )
}

export default Button
