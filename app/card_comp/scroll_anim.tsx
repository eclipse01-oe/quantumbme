import Card from "../general_comp/card"
import Img from "../general_comp/img"
import style from '../css_module/navbar.module.css'
import homeStyle from '../css_module/card.module.css'
import React, { forwardRef, useRef, useImperativeHandle} from 'react'

const Div_info = [
    {
      id: 'one',
      img: '/photos/wonder_img.gif',
      h1: 'OUR SERVICES',
      p: `what is the 7th wonder of the world? this is the power of compounding, 
        with compounding, over time your wealth will grow exponentially and you 
        will see a surge increase in your finance and`,
      style: {border: 'orange 3px solid', backgroundColor: 'orange'},
      style2: {border: 'orange 2px solid'}
    },
    {
      id: 'two',
      img: '/photos/wonder_img.gif',
      h1: 'OUR PRODUCTS',
      p: `what is the 7th wonder of the world? this is the power of compounding, 
        with compounding, over time your wealth will grow exponentially and you 
        will see a surge increase in your finance and`,
      style: {border: 'yellow 3px solid', backgroundColor: 'yellow'},
      style2: {border: 'yellow 2px solid'}
    },
    {
      id: 'three',
      img: '/photos/wonder_img.gif',
      h1: 'OUR LOCATIONS',
      p: `what is the 7th wonder of the world? this is the power of compounding, 
        with compounding, over time your wealth will grow exponentially and you 
        will see a surge increase in your finance and`,
      style: {border: 'skyblue 3px solid', backgroundColor: 'skyblue'},
      style2: {border: 'skyblue 2px solid'}
    },
    {
      id: 'four',
      h1: 'USE OUR SERVICES',
      style: { backgroundColor: 'skyblue', borderRadius: '0', padding: '3px', height: '50px' },
      style2: { display: 'none' },
      style3: { height: 'auto'}
    }
]

export interface DivProps{
  id: string;
  img: string;
  h1: string;
  p: string;
  style: object;
  style2: object;
  style3: object; 
}
export interface divRef {
  HighlightbodyRef: React.RefObject<(HTMLDivElement | null)[]>
  HighlightHeadRef: React.RefObject<(HTMLDivElement | null)[]>
  DivConRef: React.RefObject<(HTMLDivElement | null)[]>
}

const Div = forwardRef<divRef, DivProps>((d, ref) => {

  const highlightCardRef = useRef<(HTMLDivElement | null)[]>([])
  const highlightHeadRef = useRef<(HTMLDivElement | null)[]>([]) 
  const divConRef = useRef<(HTMLDivElement | null)[]>([])

  useImperativeHandle(ref, () => ({
    HighlightbodyRef: highlightCardRef,
    HighlightHeadRef: highlightHeadRef,
    DivConRef: divConRef
  }))

  return (
    <Card
      className={homeStyle.highlightCard}
      style={d.style3}
      key={d.id}
      ref={highlightCardRef}
      content=<>
        <Card id='div' 
          className={homeStyle.highlightHead}
          style={d.style}
          ref={highlightHeadRef}
          content=<>
            <Img src={d.img}
              className={style.navImg}
            />
            <h1>{d.h1}</h1>
          </>
        />
        <Card id='divCon'
          className={homeStyle.highlightBody}
          style={d.style2}
          ref={divConRef}
          content=<>
            <h1>{d.p}</h1>
          </>
        />
      </>
    />
  )
})

export default Div
export { Div_info };