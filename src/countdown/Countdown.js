import React, { useEffect, useState } from "react";
import './countdown.css';

const calculateTimeLeft = () => {
	const difference = +new Date(`02/25/2022`) - +new Date();
	let timeLeft = {};
	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		};
	}
	return timeLeft;
};

const TimeFrame = ({label, value}) => (
	<div className="time-frame">
		<div className="time-frame-value">{value}</div>
		<div className="time-frame-label">{label}</div>
	</div>
);

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer);
	});
	return (
		<div className="countdown-timer">
			<TimeFrame value={timeLeft.days} label="day" />
			:
			<TimeFrame value={timeLeft.hours} label="hour" />
			:
			<TimeFrame value={timeLeft.minutes} label="min" />
			:
			<TimeFrame value={timeLeft.seconds} label="sec" />
		</div>
	);
};

export default Countdown;
