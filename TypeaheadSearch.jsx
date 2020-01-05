import React from "react"

function TypeaheadSearch(props) {
    const listItems = props.elems
        .filter(s => s.includes(props.prefix))
        .slice(0, 10)
        .map(function(name) { 
            return <li key={name}>{name}</li>
        })

    function onChange(e) {
        const newPrefix = e.target.value
        props.onChangePrefix(newPrefix)
    }

    return <div>
        <input value={props.prefix} onChange={onChange}></input>
        <ul>
            {listItems}
        </ul>
    </div>
}

export default TypeaheadSearch