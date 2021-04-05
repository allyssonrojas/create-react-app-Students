import React, {useState, useEffect} from "react"
import "./style.css"

import axios from "axios"

function CardStudent(){

    const [students, setStudents] = useState([]);

    const getAllStudents = async() =>{
        axios.get(`/students`).then((response) =>{
            console.log(response)
            console.log(response.data)
            setStudents(response.data)
        })
    }

    useEffect(() => {
        getAllStudents()
    }, [])


    
    return(
        <div className="allCardss">
            {students.map((particularStudent) => (
                <div className="individualCardd">
                <h1>Card Student</h1>
                <img className="imagenn"  src="https://media.defense.gov/2020/Apr/24/2002287949/780/780/0/200424-F-F3494-1001.JPG" alt=""/>
                <div className="informationn">
                    <p className="name">Name :</p>
                    <p className="nameStudentt">{particularStudent.nameStudent}</p>
                    <p className="agee">Age :</p>
                    <p className="ageStudentt">{particularStudent.ageStudent}</p>
                </div>
                <button className="botonn">Delete</button>
                <button className="botonn">Update</button>
            </div>

            )) }
            

           
        </div>

    )
}

export default CardStudent;