'use client'
import { useEffect, useRef } from 'react'
import navstyle from '../css_module/navbar.module.css'
import Input from './input'
import Navul from './navul'
import Img from './img'

const Navbar = (p) => {

    const lightTheme = {
        color: 'black',
        backgroundImage: `linear-gradient(280deg, #d3d0d0 50%, whitesmoke 50%)`
    }

    const darktheme = {
    color: 'whitesmoke',
    backgroundImage:`linear-gradient(280deg, #2b2828 50%, #1a1919 50%)`
    }
    
    const themeChanger = useRef<HTMLInputElement>(null)
    
    const changeTheme = (a: React.ChangeEvent<HTMLInputElement>) => {
        
        const lighttheme = a.target.checked
        const body = document.body
                
        lighttheme ? Object.assign(body.style, lightTheme) : Object.assign(body.style, darktheme)

        window.localStorage.setItem('theme', lighttheme ? 'light' : 'dark')
    }

    useEffect(
        () => {
            const theme = window.localStorage.getItem('theme')
            const body = document.body
            const ThemeChanger = themeChanger.current;


            if (ThemeChanger) {
                if (theme === 'light') {
                    Object.assign(body.style, lightTheme)
                    ThemeChanger.checked = true
                } else {
                    Object.assign(body.style, darktheme)
                    ThemeChanger.checked = false
                }
            }
            
        }, []
    )

    return (

        <nav id={navstyle.nav}>

            <div className={navstyle.nav_img}>
                <Img
                    src='/photos/IMG_20240520_075653_470.jpg'
                    className = {navstyle.nav_img}
                />
            </div>


            <div className={navstyle.toggleDiv}>
                <div className={navstyle.toggle}>
                    <Input
                        type='checkbox' 
                        id='themeChanger'
                        ref={themeChanger}
                        onChange = {changeTheme} 
                        className={navstyle.toggleCheck}
                    />
                    <span className={navstyle.toggleSpan}/>
                </div>
            </div>
            
            <label className={navstyle.collapseBar} >
                    <Input
                        type='checkbox' 
                        id={navstyle.menuCheck}
                        onChange = {changeTheme}
                    />
                <span
                    id={navstyle.barMenu}
                ></span>
            </label>

            <div className={navstyle.list}>
                <span id={navstyle.cancel}>❌</span>
                <Navul
                    liSrc1={p.liSrc1} liSrc2={p.liSrc2} liSrc3={p.liSrc3} liSrc4={p.liSrc4}
                    liClassName1={p.liClassName1} liClassName2={p.liClassName2}
                    liClassName3={p.liClassName3} liClassName4={p.liClassName4}
                    liId1={p.liId1} liId2={p.liId2} liId3={p.liId3} liId4={p.liId4}
                    liText1={p.liText1} liText2={p.liText2} liText3={p.liText3} liText4={p.liText4}
                />

            </div>

        </nav>

    )
}
export default Navbar