import { forwardRef } from "react";
interface ImgProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  alt: string;
}

const Img =forwardRef<HTMLImageElement,  ImgProps>((props, ref) => {
  return (
  <>
  <img 
      style={props.style}
      src={props.src}
      className={props.className}
      id={props.id}
      alt={props.alt || ""}
      ref={ref}
    />
  </>)
})
Img.displayName = 'Img'

interface ImgDivProps extends ImgProps {
  divClassName?: string;
  divStyle?: React.CSSProperties;
  divId?: string;
  pText?: string;
}

const ImgDiv =forwardRef <HTMLDivElement, ImgDivProps> ((props, ref)=>{
    const { divClassName, divStyle, divId, pText, ...imgProps } = props
  return(
    <>
      <div 
      className={divClassName}
      style={divStyle}
      id={divId}
      ref={ref}
      >
        <p>{props.pText}</p>
        <Img {...imgProps}/>
      </div>
    </>
  )
})

export default Img
export {ImgDiv}