import navstyle from '../css_module/navbar.module.css'
import Img from './img'


const Navul = (props) => {
    return(
    <ul className={navstyle.navUl}>

        <li id={navstyle.navLi}className={props.liClassName1}>
            
            <a href="/user1">
                <Img src={props.liSrc1}
                />
                <p  id={props.liId1}>{props.liText1}</p>
            </a>
        </li>

        <li id={navstyle.navLi}className={props.liClassName2} >
            <a href="/user2">
                <Img src={props.liSrc2}
                />
                <p id={props.liId2}>{props.liText2}</p>
            </a>
        </li>

        <li id={navstyle.navLi}className={props.liClassName3}>
            <a href="/user3">
                <Img src={props.liSrc3}
                />
                <p  id={props.liId3}>{props.liText3}</p>
            </a>
        </li>

        <li id={navstyle.navLi}className={props.liClassName4}>
            <a href="/user4">
                <Img src={props.liSrc4}
                />
                <p  id={props.liId4}>{props.liText4}</p>
            </a>
        </li>

        </ul>
    )
}

export default Navul