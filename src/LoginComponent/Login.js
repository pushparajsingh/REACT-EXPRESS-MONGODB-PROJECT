import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login()
{
 const [username , setUsername] = useState();
 const [password , setPassword] = useState();
 const [userLoginURL , setUserLoginURL] = useState("http://localhost:3000/webapi/userLogin")
 const [output , setOutput] = useState("");
 const navigate = useNavigate();

 const handleSubmit = (evt) =>{
    evt.preventDefault();
    
    const api_url=userLoginURL+"?username="+username+"&password="+password
		fetch(api_url).then((response) =>{
		  response.json().then((result)=>{
			 
		  if(result.token!='error')
		  {
		   localStorage.setItem('token',result.token)
		   localStorage.setItem('name',result.userDetails.name)
		   localStorage.setItem('username',result.userDetails.username)	  
		   localStorage.setItem('password',result.userDetails.password)
		   localStorage.setItem('mobile',result.userDetails.mobile)
		   localStorage.setItem('address',result.userDetails.address)
		   localStorage.setItem('city',result.userDetails.city)
		   localStorage.setItem('gender',result.userDetails.gender)
		   localStorage.setItem('role',result.userDetails.role)
		   localStorage.setItem('info',result.userDetails.info)	
		   if(result.userDetails.role=="admin")	  
		   	navigate('/admin');
		   else	
		    navigate('/user');
		  } 
		  else	
		   setOutput('Invalid user please login first');

		 setUsername('');
         setPassword('');
		   }) 
		  }).catch((err)=>{
			  setOutput(err.output)
		})
}

 return(
   <div>
 
 <div id="tooplate_main_top"></div>
    <div id="tooplate_main">
        	
<div class="col_fw">
<h2>Login Here!!!</h2>
<font color="white">{output}</font>
<form onSubmit={handleSubmit}>

<label>
Username:
<input type="text" value={username}
onChange={e => setUsername(e.target.value)} />
</label>
<br/><br/>

<label>
Password:
<input type="text" value={password}
onChange={e => setPassword(e.target.value)} />
</label>
<br/><br/>

<input type="submit" value="Submit" />
</form>

<div class="cleaner"></div>
</div>
		
		<div class="cleaner"></div>       
	</div> 
	
    <div id="tooplate_main_bottom"></div>

</div>
 )
}

export default Login
