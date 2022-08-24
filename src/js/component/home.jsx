import React, { useState } from "react";

//include images into your bundle


//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
			
		<div className="container">
			<div className="poste"></div>	
			<div className="trafficLight">
				<div 
					onClick={() => setSelectedColor("red")}
					className={
					"light red" + (selectedColor === "red" ? " glow" : "")}>
				</div>
				<div 
					onClick={() => setSelectedColor("yellow")}
					className={
					"light yellow" + (selectedColor === "yellow" ? " glow" : "")}>
				</div>
				<div 
					onClick={() => setSelectedColor("geen")}
					className={
					"light geen" + (selectedColor === "geen" ? " glow" : "")}>
				</div>
			</div>
		</div>
	);
};

export default Home;
