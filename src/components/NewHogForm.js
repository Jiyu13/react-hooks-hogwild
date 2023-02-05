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

    return (
        <form className="new-hog-form">
            <label>Name</label>
            <input type="text" value={formData.name} name="name"/>

            <label>Specialty</label>
            <input type="text" value={formData.specialty} name="specialty"/>

            <label>Greased</label>
            <input type="checkbox" value={greased} name="greased"/>

            <label>Weight</label>
            <input type="text" value={weight} name="weight"/>

            <label>Highest Medal Achieved</label>
            <input type="text" value={formData["highest medal achieved"]} name="highest medal achieved"/>

            <label>Image</label>
            <input type="text" value={formData.image} name="image"/>

            <input type="submit" value="Add Hog!" />

        </form>
    )
}

export default NewHogForm