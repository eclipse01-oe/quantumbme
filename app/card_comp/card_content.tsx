// 'use client'
import mainStyle from '../css_module/main.module.css'
import Img from "../general_comp/img"
import Card from "../general_comp/card"
import style from '../css_module/navbar.module.css'
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const Page_info = [
  {
    id: 'header',
    img: '/photos/wonder_img.gif',
    h1: 'QUANTUM',
    h3: 'BIOMEDICAL',
    p: 'ENGINEERING',
    p2: 'Meet biomedical\'s quantum level.',
    pStyle: { fontWeight: '700' },
    p2Style: {fontSize: '1.5vh'}
  }
]

const page_highlight = [
  {
    id: 'one',
    img: '/photos/wonder_img.gif',
    h1: 'OUR SERVICES',
    alt: '🤝'
  },
  {
    id: 'two',
    img: '/photos/wonder_img.gif',
    h1: 'OUR PRODUCTS',
    alt: '🎁'
  },
  {
    id: 'three',
    img: '/photos/wonder_img.gif',
    h1: 'OUR LOCATIONS',
    alt: '🧭'
  },
  {
    id: 'four',
    img: '/photos/wonder_img.gif',
    h1: 'USE OUR SERVICES',
    alt: '💻'
  }
]


const header = (Pi) => {
  return (
    <Card 
      className={mainStyle.header}
      key={Pi.id}
      id={Pi.id}
      content = <>
        <h1>{Pi.h1}</h1>
        <h3> {Pi.h3} </h3>
        <p style={Pi.pStyle}> {Pi.p} </p>
        <p style={Pi.p2Style}>{ Pi.p2 }</p>
      </>
    />
  )
}

interface HighlightItem {
  id: number | string;
  img: string;
  h1: string;
  alt: string
}

export interface HighlightProps {
  highlights: HighlightItem[];
}

export interface HighlightRef{
  highlightCardRef: (HTMLDivElement | null)[]
}

const Highlight = forwardRef<HighlightRef, HighlightProps>(({ highlights }, ref)  => {

  const cardsHighlightRef = useRef<(HTMLDivElement | null)[]>([])
  
  useImperativeHandle(ref, () => ({
    highlightCardRef: cardsHighlightRef.current
  }))

  useEffect(() => {

    const color = ['orange', 'yellow', 'skyblue', 'white', 'pink']
    cardsHighlightRef.current.forEach((card, i) => {
      const rNum = (i + 2) * 6
      card.style.transform = `rotate(${rNum}deg)`
      card.style.background = color[i]
      card.style.zIndex = -i
    })
  }, [highlights])

  return (
    <>
      {highlights.map((Ph, i) => (
        <Card
          key={Ph.id}
          id='highlight'
          ref={el => cardsHighlightRef.current[i] = el}
          content=<>
            <Img src={Ph.img}
              alt={Ph.alt}
              className={style.navImg}
            />
            <h1>{Ph.h1}</h1>
          </>
        />
      ))}
    </>
  )
})

const highlight = (Ph) => <Highlight highlights={[Ph]} />

export default Page_info
export { page_highlight, header, Highlight, highlight }
