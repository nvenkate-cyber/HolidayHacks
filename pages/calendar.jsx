import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import {useState} from 'react';
import moment from 'moment';


export default function App() {
	const [dateState, setDateState] = useState(new Date())
	const changeDate = (e) => {
		setDateState(e)
	}
	return (
		<>
			<Head>
				<title>Calendar</title>
			</Head>
			<Navbar />

			<div style = {{ backgroundImage:'url("https://i.guim.co.uk/img/media/5625255b3820fdde2ddecce7793679818bcd3b8f/0_29_3008_1805/master/3008.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b0317ce57ee33b30df244731fa0d9211")', backgroundSize: 'cover'}}>
				
				<Calendar 
					className="react-calendar"
					value={dateState}
					onChange={changeDate}
					style = {{ color: 'white' }}
				/>
				<p style = {{ color: 'white' }}>Current selected date is <b>{moment(dateState).format('dddd, MMMM Do, YYYY')}</b></p>
				<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
				<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			</div>
			
		</>
	);
}
