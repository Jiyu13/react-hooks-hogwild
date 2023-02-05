
function Hog({ name, specialty, greased, weight, image}) {
    return (
        <div className="ui eight wide column pigTile">
            <div id={name}>{name}</div>
            <img src={image} alt={name} />
            <div className="details">
                <p name={specialty}>{specialty}</p>
                <p name={weight}>{weight}</p>
                <p name="greased">{greased}</p>
                <p>highest medal achieved</p>
            </div>
        </div>
    )
}

export default Hog