import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Calendar() {
	return (
		<>
			<Head>
			  <title>Calendar</title>
			</Head>

			<div style = {{ backgroundImage:'url("https://wpamelia.com/wp-content/uploads/2019/02/astronomy-constellation-dark-998641.jpg")', backgroundsize: 'cover'}}>
				<Navbar />

				<section className="hero">
					<div className="container">
						<div className="text-wrapper w-full">
						<h1 className="title" style ={{color: 'white'}}>
							<br></br>
							<br></br>
							<br></br>Calendar<br></br><br></br></h1>
						<p className="description" style ={{color: 'white'}}>
						<br></br><br></br><br></br><br></br><br></br><br></br></p>
						</div>
					</div>
				</section>
			</div>
			
		</>
	);
}

export default Calendar;