import Link from 'next/link';
import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Calendar', href: '/calendar' },
    { text: 'Budgeting', href: '/budgeting'},
  ];

  return (
    <nav className="navbar">
      <div className="container" >
        <Link href="/"><a className="logo" style={{color:'white'}}>HOLIDAY HACKS</a></Link>

        <ul className="nav-links" style={{color:'white'}}>
          { navs.map(nav => (
            <li><Link href={nav.href}><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`} style={{color:'white'}}>{nav.text}</a></Link></li>
          )) }
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
