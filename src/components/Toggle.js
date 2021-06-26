import "../css/Toggle.css";

const Toggle = (props) => {

	return(
	<div>
		<label class="switch">
			<input type="checkbox"></input>
			<span class="slider" onClick="enabled ? light : dark"></span>
		</label>
	</div>
	);
}

export default Toggle