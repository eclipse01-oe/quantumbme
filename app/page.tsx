'use client'
import { useEffect, useRef } from "react"
import Navbar from "./general_comp/navbar"
import Div, {Div_info, divRef } from './card_comp/scroll_anim'
import Card from "./general_comp/card"
import Page_info, { header, Highlight, page_highlight, HighlightRef }
  from "./card_comp/card_content"
import mainStyle from './css_module/main.module.css'
import bodyStyle from './css_module/card.module.css'
import navStyle from './css_module/navbar.module.css'
import Info, {infoRef, About} from "./info/info"
import infoStyle from './css_module/info.module.css'
import ImgStyle from './css_module/img.module.css'


const Home = ()=> {

  const divRef = useRef<(divRef | null)[]>([])
  const HighlightRef = useRef<HighlightRef | null>(null)
  const infoRef = useRef<infoRef | null>(null)

  useEffect(
    
    () => {
      
      const animateScroll = () => {      
        const windowsHeight = window.innerHeight
        const windowPoint = windowsHeight + (windowsHeight * (3 / 100))

        const animateDiv = (div: HTMLElement | null) => {

          if (!div) return

          const bodyHeight = div.getBoundingClientRect()
          const offsetHeight = -div.offsetHeight + 280
    
          bodyHeight.top <= windowPoint && bodyHeight.top >= offsetHeight ?
          div.classList.add(mainStyle.divAnimate) : div.classList.remove(mainStyle.divAnimate)
 
        }

        divRef.current.forEach((i) => {
          if(i){
            const HighlighDivRef = i?.DivConRef
            const HighlightHeadRef = i?.HighlightHeadRef
            
            animateDiv(HighlighDivRef?.current)
            animateDiv(HighlightHeadRef?.current)
            
          }
        }) 

        if (infoRef.current) {
          animateDiv(infoRef.current.InfoDivRef)
          animateDiv(infoRef.current.InfoImgRef)
        }

        if (HighlightRef.current?.highlightCardRef) {
          const HighlightCard = HighlightRef.current?.highlightCardRef
          let Divs = []

          divRef.current.forEach((i) => {
          const divConRef = i?.DivConRef?.current;
            
            if (divConRef) {
              Divs.push(divConRef)
            }
          })
          
          Divs.forEach((div, i) => {
            if (HighlightCard[i]) {
              const offsetHeight = -div.offsetHeight - 50000
              const bodyHeight = div.getBoundingClientRect().top
              const windowPoint = windowsHeight - (windowsHeight * (60 / 100))

              bodyHeight <= windowPoint && bodyHeight >= offsetHeight && bodyHeight != 0 ?
                HighlightCard[i].classList.add(mainStyle.transform) :
                HighlightCard[i].classList.remove(mainStyle.transform)
            }
          })

        }

      }
      animateScroll()
      window.addEventListener('scroll', animateScroll) 

      return () => window.removeEventListener('scroll', animateScroll)

    }, [])
  
  return (
    <>
      <Card
        id={mainStyle.cardHeader}
        content=<>
          <Navbar 
            liClassName1 = {navStyle.active}
            liText1 = 'home'
            liText2 = 'about'
            liText3 = 'contact'
            liText4 = 'services'
          />
          <Card
            className={mainStyle.cardHeader}
            content=<>
              {Page_info.map(header)}
              <Card
                className={mainStyle.highlight}
                content={<Highlight ref={ HighlightRef } highlights={page_highlight}/>}
              />
            </>
          />
        </>
      />
      <Card
        className={bodyStyle.pHighlight}
        content=<>
          {Div_info.map( (i, a) => <Div
            key={i.id}
            {...i}
            ref={ el => divRef.current[a] = el }
          />)}
        </>
      />
      {About.map((i, a)=>{
        return <Info 
          key={i.idCard}
          idImg={i.idImg}
          src={i.src}
          ImgClassName={ImgStyle.bmeImg}
          alt = ''
          idCard={i.idCard}
          CardClassName={infoStyle.briefHistory}
          content={i.content}
          ref = {infoRef}
        />
      })}
    </>
  )
}
export default Home