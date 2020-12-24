import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About Us</title>
			</Head>

			<div style = {{ backgroundImage:'url("https://www.sapporo.co.uk/wp-content/uploads/2018/08/Christmas-decorations-iStock_000048591732_Small.jpg")', backgroundSize: 'cover'}}>
				<Navbar />

				<section className="hero">
					<div className="container">
						<div className="text-wrapper w-full">
						<h1 className="title" style ={{color: 'white'}}>
							About Us<br></br></h1>
						<p className="description" style ={{color: 'white'}}>
						Christmas is one of the most hectic holidays of the year. We are here to make things easier for you! 
						<br></br><br></br><br></br><br></br><br></br><br></br>
						<br></br><br></br><br></br><br></br><br></br><br></br></p>
						</div>
					</div>
				</section>
			</div>
			
		</>
	);
}

export default About;
