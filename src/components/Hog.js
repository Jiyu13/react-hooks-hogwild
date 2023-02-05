import { useState } from "react"

function Hog({ name, specialty, greased, weight, image, medal}) {

    const [hideHog, setIsHide] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    const isDisplay = showDetails ? "" : "none"
    const isGreased = greased ? "Greased" : "Not greased"
    const isHide = hideHog ? "none" : ""


    function handleToggleDetails() {
        setShowDetails(show => !show)
    }

    function handleHide() {
        setIsHide(hide => !hide)
        console.log(hideHog)
    }

    return (
        <>

                <div className="ui eight wide column pigTile" name={name} id={name} style={{display:isHide}}>
                    <button onClick={handleHide}>Hide This Hog</button>
                    <div>{name}</div>
                    <img src={image} alt={name} onClick={handleToggleDetails}/>
                    <div className="details" style={{display:isDisplay}}>
                        <p name={specialty}>{specialty}</p>
                        <p name={weight}>{weight}</p>
                        <p name="greased">{isGreased}</p>
                        <p>Highest Medal Achieved: {medal}</p>
                    </div>
                </div>

        </>

        


    )
}

export default Hog