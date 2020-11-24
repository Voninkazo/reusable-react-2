import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {
	const maxLength = 28;
	const [mood,setMood] = useState("");

	function addTextToMood(badgeText) {
		setMood(prev => prev += badgeText);
	}

	return (
		<div className={`counterInput ${mood.length >= maxLength ? "tooLong" : ""}`} >
			<div>
				{defaults.map(b => {
					return <button onClick={() => addTextToMood(b)} key={b}>{b}</button>;
				})}
			</div>
			<textarea 
				placeholder={text} 
				value={mood} 
				onChange={(e) => setMood(e.target.value)} 
				disabled={mood.length >= maxLength ? "disabled" : ""}
			/>
			<div>{mood.length}/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];

	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
