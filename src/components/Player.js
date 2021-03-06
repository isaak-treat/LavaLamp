import React from "react";
import "../css/Player.css";

const Player = props => {
	const backgroundStyles = {
		backgroundImage: `url(${props.item.album.images[0].url})`,
	};

	
		console.log(props.item)
	return (
	
		<div className="App">
			<div className="main-wrapper">
				<div className="now-playing__img">
					<img src={props.item.album.images[0].url} alt="album cover" />
				</div>
				<div className="now-playing__side">
					<div className="now-playing__name">{props.item.name}</div>
					<div className="now-playing__artist">
						{props.item.artists[0].name}
					</div>
					<div className="now-playing__status">
						{props.is_playing ? "Playing" : "Paused"}
					</div>
					<div className="progress">
						<div>
							className="progress__bar"
						/>
					</div>
				</div>
				<div className="background" style={backgroundStyles}>{""}</div>
			</div>
		</div>
		</div>
					
	);
}

export default Player;