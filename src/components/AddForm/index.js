import React from "react";
import './style.css'

export default function AddForm(props) {
    return (
        <form onSubmit={props.submit}>
            <input id='job' type='text' placeholder='Enter the job...' value={props.current} onChange={props.change} />
            <input id='submit' type='submit' value='Add to list' />
        </form>
    )
}
