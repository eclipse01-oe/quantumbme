import { forwardRef } from "react"

interface CardProps { 
    className: string;
    id: string;
    style: React.CSSProperties;
    popover: string;
    content: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
    return (
        <div
            popover={props.popover}
            className={props.className}
            id={props.id}
            style={props.style}
            ref={ref}
        >
            {props.content}
        </div>
    )
})

export default Card;
