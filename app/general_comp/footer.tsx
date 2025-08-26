const Footer = (props)=>{

    const nowYear = new Date().getFullYear()

    return(
        <p className={props.className} style={props.style}>
            QBME © {nowYear}
        </p>
    )
}
export default Footer