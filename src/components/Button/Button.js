import './Button.css';

export default function Button({ variant, disabled, color, icon, children = "Default"}) {
    
    return (
        <button 
            className = {(variant ? variant : "") + " " + (color ? color : "") + " " + (disabled ? "disabled" : "")}   
        >
            {icon === "start" && <span><i class="fas fa-shopping-cart"></i></span>}
            <span>{children}</span>
            {icon === "end" && <span><i class="fas fa-shopping-cart"></i></span>}
        </button>
    )
}
