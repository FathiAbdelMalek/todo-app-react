import React from "react";
import './style.css'

export default function EditForm(props) {
    return (
        <li>
            <form onSubmit={props.submit}>
                <input id='job' type='text' defaultValue={props.value} onChange={props.change} />
                <input id='submit' type='submit' value='Save it' />
            </form>
        </li>
    )
}
