

export default function DarkMode(props) {

    
    return (
        <div>
            <button onClick={props.switchMode} class={`switchTheme text-${props.mode==="light"? "white":"dark"} d-flex align-items-center justify-content-center bg-${props.mode==="dark"? "light" : "dark"}`}>{props.mode==="dark"?"L":"D"}</button>
        </div>
    )
}
