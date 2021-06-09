import React, { useState } from "react"
import { connect } from "react-redux"

export function AddTodo(props) {

    const [newTodo, setNew] = useState({ title: "raman" })

    function change(event) {
        setNew({
            title: event.target.value
        })
    }
    function clickme() {
        setNew({
            title: ""
        })
        props.addtodo(newTodo)
        console.log("new", newTodo)
    }





    return (
        <>
            <h1>Add Todd</h1>
            <input value={newTodo.title} onChange={change} /><br />
            <button onClick={clickme}>Submit</button>
        </>
    )
}

function mapDispatchToProp(dispatch) {
    return {
        addtodo: function (data) {
            let action = {
                type: "ADD",
                payload: data
            }
            dispatch(action)
        }
    }
}



export default connect(null, mapDispatchToProp)(AddTodo)