import { useState } from "react"

function NewHogForm() {

    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: true,
        weight: "2.0",
        "highest medal achieved": "",
        image: "",
    })

    function handleInput(event) {
        const name = event.target.name
        const value = event.target.value
        setFormData({...formData, [name]: value})
    }

    return (
        <form className="new-hog-form">
            <label>Name</label>
            <input type="text" value={formData.name} name="name" onChange={handleInput}/>

            <label>Specialty</label>
            <input type="text" value={formData.specialty} name="specialty" onChange={handleInput}/>

            <label>Greased</label>
            <input type="checkbox" value={greased} name="greased" onChange={handleInput}/>

            <label>Weight</label>
            <input type="text" value={weight} name="weight" onChange={handleInput}/>

            <label>Highest Medal Achieved</label>
            <input type="text" value={formData["highest medal achieved"]} name="highest medal achieved" onChange={handleInput}/>

            <label>Image</label>
            <input type="text" value={formData.image} name="image" onChange={handleInput}/>

            <input type="submit" value="Add Hog!" />

        </form>
    )
}

export default NewHogForm