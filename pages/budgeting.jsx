import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Budgeting() {
	return (
		<>
			<Head>
			  <title>Budgeting</title>
			</Head>

			<div style = {{ backgroundImage:'url("https://www.heritagepark.ca/sites/default/files/2019-10/cia-1500x525_.jpg")', backgroundSize: 'cover'}}>
				<Navbar />

				<section className="hero">
					<div className="container">
						<div className="text-wrapper w-full">
						<h1 className="title" style ={{color: 'white'}}>
							<br></br>
							<br></br>
							<br></br>Budgets<br></br><br></br></h1>
						<p className="description" style ={{color: 'white'}}>
						<br></br><br></br><br></br><br></br><br></br><br></br></p>
						</div>
					</div>
				</section>
			</div>
			
		</>
	);
}

export default Budgeting;