import React from "react"
import "../css/Toggle.css";

class Toggle extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			enabled: false
		}

		this.toggleToggle = this.toggleToggle.bind(this)
	}

	toggleToggle() {
		this.setState({ enabled: !this.state.enabled })
	}

	render() {
		return(
		<div className="switch">
			<label className={this.state.enabled ? "dark-mode" : "light-mode"}>
				<input type="checkbox"></input>
				<span className="slider" onClick={this.toggleToggle}></span>
			</label>
		</div>
		);
	}
}

export default Toggle