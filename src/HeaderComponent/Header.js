import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Header(props)
{

    const [menulist , setMenuState] = useState();

	useEffect(()=>{
		setInterval(() => {
            if(localStorage.getItem("role")=="admin")
			{
				setMenuState(<ul>
					<li class="first"><Link to="/admin">Admin Home</Link></li>
					<li class="last" ><Link to="/logout">Logout</Link></li>
					</ul>)
			}
			else if(localStorage.getItem("role")=="user")
			{ 
				setMenuState(<ul>
					<li class="first"><Link to="/user">User Home</Link></li>
					<li class="last" ><Link to="/logout">Logout</Link></li>
					</ul>)
			}
			else
			{ 
				setMenuState(<ul>
					<li class="first"><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/service">Service</Link></li>
					<li><Link to="/register">Register</Link></li>
					<li class="last" ><Link to="/login">Login</Link></li>
					</ul>)
			}
			}, [])
	},5000)

 return(
    <div id="tooplate_header">
	
    <div id="site_title"><h1><a href="#">Orange HTML Template</a></h1></div>
    
    <div id="tooplate_menu" class="ddsmoothmenu">
        {menulist} 
        <br style={{clear: 'left'}} />
    </div> 
    {/* end of tooplate_menu */}
    <b>Welcome User : {props.myuser} </b>
</div>

 )
}

export default Header
