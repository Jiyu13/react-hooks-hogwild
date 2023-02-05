import { useState } from "react"

function NewHogForm({onHogFormSubmit}) {

    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: true,
        weight: 2.0,
        "highest medal achieved": "",
        image: "",
    })

    function handleInput(event) {
        const name = event.target.name
        let value = event.target.value
        
        if (event.target.type === "checkbox") {
            value = event.target.checked
        }
        // console.log(name, value)
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newHog = {
            name: formData.name,
            specialty: formData.specialty,
            greased: formData.greased,
            weight: parseFloat(formData.weight),
            "highest medal achieved": formData["highest medal achieved"],
            image: formData.image,
        }
        console.log(newHog)
        onHogFormSubmit(newHog) // call this function to update hogLists

    }

    return (
        <form className="new-hog-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={formData.name} name="name" onChange={handleInput}/>

            <label>Specialty</label>
            <input type="text" value={formData.specialty} name="specialty" onChange={handleInput}/>

            <label>Greased</label>
            <input type="checkbox" checked={formData.greased} name="greased" onChange={handleInput}/>

            <label>Weight</label>
            <input type="text" value={formData.weight} name="weight" onChange={handleInput}/>

            <label>Highest Medal Achieved</label>
            <input type="text" value={formData["highest medal achieved"]} name="highest medal achieved" onChange={handleInput}/>

            <label>Image</label>
            <input type="text" value={formData.image} name="image" onChange={handleInput}/>

            <input type="submit" value="Add Hog!" />

        </form>
    )
}

export default NewHogForm