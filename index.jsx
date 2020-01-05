import React from "react"
import ReactDOM from "react-dom"

import pokemon from "./pokemon"
import TypeaheadSearch from "./TypeaheadSearch"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            cookies: 0,
            prefix: ""
        }
    }

    render() {
        const self = this
        const handleClick = function() {
            self.setState({cookies: self.state.cookies + 1})
        }
        const setPrefix = function (newPrefix) {
            self.setState({prefix: newPrefix})
        }
        return (
            <div>
                <Cookie n={this.state.cookies} />
                <button onClick={handleClick}>click</button>
                <TypeaheadSearch elems={pokemon} prefix={this.state.prefix} onChangePrefix={setPrefix} />
            </div>
        )
    }
}

function Cookie(props) {
    const n = props.n
    
    return <h1>
        🍪 {n} {pluralize("cookie", n)} 🍪
    </h1>
}

function pluralize(noun, n) {
    if (n == 1) {
        return noun
    }
    return noun + "s"
}

ReactDOM.render(<App/>, document.querySelector('#root'))