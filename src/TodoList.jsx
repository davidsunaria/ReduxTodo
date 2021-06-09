import React from "react"
import { connect } from "react-redux"

export function TodoList(props) {
    console.log("kjghkh", props)



    let todos = props.list.map((value) => {
        return <h1>{value.title}</h1>
    })




    return (
        <div>
            {todos}
        </div>
    )
}
function myStateToProp(state) {
    return { list: [...state] }
}

export default connect(myStateToProp)(TodoList)