import './style.css'

export const Slider = () => {
    return(
        <div className="slider-div">
            <span>Colaborativo</span>
            <input type="range" id="range" min={0} max={4} step="0.1"/>
            <span>Independente</span>
        </div>
    )
}