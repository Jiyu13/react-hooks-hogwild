import { useState } from "react"

function Hog({ name, specialty, greased, weight, image, medal}) {

    const [showDetails, setShowDetails] = useState(false)
    const isDisplay = showDetails ? "" : "none"
    const isGreased = greased ? "Greased" : "Not greased"

    function handleToggleDetails() {
        setShowDetails(show => !show)
    }

    return (
        <div className="ui eight wide column pigTile" name={name} id={name}>
            <div>{name}</div>
            <img src={image} alt={name} onClick={handleToggleDetails}/>
            <div className="details" style={{display:isDisplay}}>
                <p name={specialty}>{specialty}</p>
                <p name={weight}>{weight}</p>
                <p name="greased">{isGreased}</p>
                <p>Highest Medal Achieved: {medal}</p>
            </div>
        </div>
    )
}

export default Hog