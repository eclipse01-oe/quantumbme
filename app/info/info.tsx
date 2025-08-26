import Img from "../general_comp/img"
import ImgStyle from '../css_module/img.module.css'
import Card from "../general_comp/card"
import infoStyle from '../css_module/info.module.css'
import React, { forwardRef, useRef, useImperativeHandle, ReactNode} from 'react'

export const About = [
  {
    id: 'one',
    src: "photos/bmeq02.png",
    content: `what is the 7th wonder of the world? this is the power of compounding, 
      with compounding, over time your wealth will grow exponentially and you 
      will see a surge increase in your finance and wealth.`,
    idCard: 'ONE',
    idImg: 'one',
  },
  {
    id: 'two',
    src: "photos/bmeq_hardhat.png",
    content: `what is the 7th wonder of the world? this is the power of compounding, 
      with compounding, over time your wealth will grow exponentially and you 
      will see a surge increase in your finance and wealth.`,
    idCard: 'TWO',
    idImg: 'two',
  }
]

export interface infoP{
  src: string;
  content: ReactNode;
  idImg: string;
  idCard: string;
  CardClassName: string;
  ImgClassName :string;
  alt: string;
}

export interface infoRef{
  InfoDivRef: HTMLDivElement | null,
  InfoImgRef: HTMLImageElement | null
}

const Info = forwardRef<infoRef, infoP> ((p,ref) => {

  const infoDivRef = useRef<(HTMLDivElement | null)>(null)
  const infoImgRef = useRef<(HTMLImageElement | null)>(null)

  useImperativeHandle(ref, ()=>({
    InfoDivRef: infoDivRef?.current,
    InfoImgRef: infoImgRef?.current
  }))

  return (<>
    <Img
      id={p.idImg}
      src={p.src}
      className={p.ImgClassName}
      ref={infoImgRef}
      alt = {p.alt}
    />
    <Card
      id={p.idCard}
      className={p.CardClassName}
      content={p.content}
      ref={infoDivRef}
    />
  </>)
})

Info.displayName = 'Info'

export default Info