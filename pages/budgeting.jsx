import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import BudgetStyle  from '../styles/budgeting.module.scss'

function Budgeting() {
	return (
		<>
			<Head>
			  <title>Budgeting</title>
			</Head>

				<Navbar />
				<div style = {{ backgroundImage:'url("https://kateandtoms.com/wp-content/uploads/2019/12/new-years-eve-st-ives-cornwall.jpg")', backgroundSize: 'cover'}}>

				<section className="hero">
					<div className="container">
						<div className="text-wrapper w-full">
						<h1 className="title" style ={{color: 'white'}}>
							<br></br>
							<br></br>
							<br></br><br></br><br></br></h1> 
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