import React, {useState} from "react";

function MoodForm ({elevatorfunction}){

    const [formData, setFormData] = useState ({
        name: "",
    })

    const handleForm = (se)=> {
        se.preventDefault();   
    }

    const handleOnChange = (se) => {
        const key = se.target.name;
        const value = se.target.value;
        setFormData({...formData, [key]: value});
    }

    function handleSubmit (){
        elevatorfunction(formData);
        setFormData({...formData, name: ""});
    }


    return(
        <form onSubmit={handleForm}>
            <label> Hey there <br></br></label>
            <input 
                type="text" 
                name="name" 
                placeholder="what's your name?"
                value={formData.name}
                onChange={handleOnChange}/>
            <br></br>
            <input 
                type="submit" 
                value="Submit"
                onClick={handleSubmit}/>
        </form>
    )
}

export default MoodForm;