import { useState } from 'react';
import './Register.css';

function Register()
{

 const [name , setName] = useState();
 const [username , setUsername] = useState();
 const [password , setPassword] = useState();    
 const [mobile , setMobile] = useState();
 const [address , setAddress] = useState();
 const [city , setCity] = useState();
 const [gender , setGender] = useState();
 const [userRegisterURL , setUserRegisterURL] = useState("http://localhost:3000/webapi/userRegister")
 const [output , setOutput] = useState("");

 const handleSubmit = (evt) =>{
    evt.preventDefault();
    
    const api_url=userRegisterURL+"?name="+name+"&username="+username+"&password="+password+"&mobile="+mobile+"&address="+address+"&city="+city+"&gender="+gender
		fetch(api_url).then((response) =>{
		  response.json().then((result)=>{
			   setOutput('User Register Successfully....');
         setName('');
         setUsername('');
         setPassword('');
         setAddress('');
         setCity('');
         setMobile('');  
		   }) 
		  }).catch((err)=>{
			  console.log(err)
		})
}

 return(
   <div>
 
 <div id="tooplate_main_top"></div>
    <div id="tooplate_main">
        	
<div class="col_fw">
<h2>Register Here!!!</h2>
<font color="white">{output}</font>
<form onSubmit={handleSubmit}>

<label>
Name:
<input type="text" value={name}
onChange={e => setName(e.target.value)} />
</label>
<br/><br/>

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

<label>
Mobile:
<input type="text" value={mobile}
onChange={e => setMobile(e.target.value)} />
</label>
<br/><br/>

<label>
Address:
<textarea value={address}
onChange={e => setAddress(e.target.value)}></textarea>
</label>
<br/><br/>

<label>
City:
<select value={city}
onChange={e => setCity(e.target.value)}>
 <option>Select City</option>
 <option>Indore</option>  
 <option>Bhopal</option>
 <option>Ujjain</option>
</select>
</label>
<br/><br/>

<label>
Gender:
<input type="radio" value="male" name="gender"
onChange={e => setGender(e.target.value)} /> Male

<input type="radio" value="female"
onChange={e => setGender(e.target.value)} name="gender" /> Female


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

export default Register
