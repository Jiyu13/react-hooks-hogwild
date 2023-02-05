import { useState } from "react"

function Hog({ name, specialty, greased, weight, image}) {

    const [showDetails, setShowDetails] = useState(false)
    const isDisplay = showDetails ? "" : "none"

    function handleToggleDetails() {
        setShowDetails(show => !show)
        console.log(showDetails)
    }

    return (
        <div className="ui eight wide column pigTile">
            <div id={name}>{name}</div>
            <img src={image} alt={name} onClick={handleToggleDetails}/>
            <div className="details" style={{display:isDisplay}}>
                <p name={specialty}>{specialty}</p>
                <p name={weight}>{weight}</p>
                <p name="greased">{greased}</p>
                <p>highest medal achieved</p>
            </div>
        </div>
    )
}

export default Hog