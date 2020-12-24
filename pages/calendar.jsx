import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import React, { Component } from 'react';
import Calendar from 'react-calendar';

function App() {
	return (
		<>
			<Head>
				<title>Calendar</title>
			</Head>

			<div style = {{ backgroundImage:'url("https://wpamelia.com/wp-content/uploads/2019/02/astronomy-constellation-dark-998641.jpg")', backgroundsize: 'cover'}}>
				<Navbar />
				
				<Calendar />
				<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			</div>
			
		</>
	);
}

export default App;
