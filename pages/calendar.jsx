import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {useState} from 'react';
import moment from 'moment'

function App() {
	const [dateState, setDateState] = useState(new Date())
	const changeDate = (e) => {
		setDateState(e)
	}
	return (
		<>
			<Head>
				<title>Calendar</title>
			</Head>

			<div style = {{ backgroundImage:'url("https://wpamelia.com/wp-content/uploads/2019/02/astronomy-constellation-dark-998641.jpg")', backgroundsize: 'cover'}}>
				<Navbar />
				
				<Calendar 
					value={dateState}
					onChange={changeDate}
				/>
				<p style = {{ color: 'white' }}>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
				<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			</div>
			
		</>
	);
}

export default App;
