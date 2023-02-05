import Hog from "./Hog"

function HogList({ hogs }) {

    const hogList = hogs.map(hog => {
        return <Hog 
                key={hog.name}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                image={hog.image}
            />
    })

    return <div className="ui grid container">{hogList}</div>
}

export default HogList