import { forwardRef } from "react"

interface InputProps { 
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps> ((props, ref)=>{
return(

    <input className={props.className}
        id={props.id}
        style={props.style}
        type = {props.type}
        value = {props.value}
        placeholder= {props.placeholder}
        onChange={props.onChange}
        ref={ref}
    />

)
})

export default Input