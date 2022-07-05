import './Footer.css';

function Footer()
{
 return(
   <div>
     <div id="tooplate_bottom">
     	<div class="col_allw270">
        	<h4>Pages</h4>
            <ul class="bottom_list">
            	<li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
			</ul>
        </div>
		
   	  	<div class="col_allw270">
        	<h4>Blog Posts</h4>
            <ul class="bottom_list">
            	<li><a href="#">Donec placerat odio at leo suscipit hendrerit</a></li>
            	<li><a href="#">Proin vitae magna eget sem mattis imperdie</a></li>
            	<li><a href="#">Nunc ac nunc ut erat consectetur rutrum</a></li>
            	<li><a href="#">Phasellus cursus nulla in risus condimentum </a></li>
				<li><a href="#">Fusce euismod odio sed mauris hendrerit</a></li>
			</ul>
        </div>
		
    	<div class="col_allw270 col_last">
        	<h4>About Us</h4>
            <p><em>Donec vehicula mauris sed arcu fermentum ornare. Aliquam erat volutpat.</em></p>
            <p>Orange is one of the <a href="http://www.tooplate.com/free-templates">free templates</a> by tooplate. Credits go to <a href="http://www.photovaco.com">Free Photos</a> for photos and <a href="http://www.thewebdesignblog.co.uk">The Web Design Blog</a> for icons.</p>
        </div>   
		             
    	<div class="cleaner"></div>
    </div>    
    
    <div id="tooplate_footer">
	
        Copyright © 2048 <a href="#">Company Name</a>
		
    </div>
</div>
 )
}

export default Footer
