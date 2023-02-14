import React from "react";


class Count extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
        console.log("constructor");
    }



    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)

        console.log("componentDidMount", interval);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        if (this.state.count < 10) {
            clearInterval(this.interval);
        }
    }
    render() {
        return (
            <div>

                <h2>Timer:  {this.state.count}</h2>

            </div>
        )
    }
}

export default Count;
