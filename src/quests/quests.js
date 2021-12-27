import React from "react";
import Quest from "./quest";
import './quests.css'

const Quests = () => {
	
	return (
		<div className="quests-container">
			<div className="quests-title">The Quests</div>
			<div className="quests-options">
				<Quest title="Explore the World" img="stone_one.jpg" />
				<Quest title="To Infinity and Beyond " img="stone_two.jpg" />
				<Quest title="Magic Happens Here" img="stone_three.jpg" />
			</div>
		</div>
	)
};

export default Quests;
