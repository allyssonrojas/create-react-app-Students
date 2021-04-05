import React from "react"
import {useForm} from "react-hook-form"
import axios from "axios"
import "./style.css"

function FormStudent(){

    const{register, handleSubmit} = useForm()

    const saveStudent = async(data) =>{
        var studentModel = {
            nameStudent : data.nameStudent,
            ageStudent : data.ageStudent,
        }
        await axios.post('/students',studentModel).catch(error =>{
            console.log(error)
        })

    }

    const onSubmitInsertStudent = (data) =>{
        saveStudent(data)

    }


    return(
        <div className="complete-form">
            <h1>Student</h1>
            <img className="imagen" src="https://media.defense.gov/2020/Apr/24/2002287949/780/780/0/200424-F-F3494-1001.JPG" alt=""/>
            <form className="form" onSubmit={handleSubmit(onSubmitInsertStudent)}>
                <input className="input" type="text" 
                placeholder="Name Student"
                name = "nameStudent"
                ref = {register}
                />
                <input className="input" type="text" 
                placeholder="Age Student"
                name = "ageStudent"
                ref = {register}
                />
                <button className="button" type="submit"> Save Student </button>
            </form>
        </div>
    )
}

export default FormStudent;