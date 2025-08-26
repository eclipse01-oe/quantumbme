const Btn = (p) => {
    return (
        <button
            className={p.btnClassName}
            id={p.BtnId}
            style={p.btnStyle}
            popoverTarget={p.popoverTarget}
            popoverTargetAction={p.popoverTargetAction}
        >
            {p.btnText}
        </button>
    )
}

export default Btn