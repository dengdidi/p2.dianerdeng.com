<?php if($user): ?>
        <h2>Share the Savings <?=$user->first_name;?>!</h2>
        <br>
        <img src="/images/skeptical.jpg" alt="skeptical couponer meme"
<?php else: ?>
        <h2>Sign-Up for ChipperClipper & Start Saving</h2><br>
		    
		    <form method='POST' action='/users/p_signup'>
		    	<center>
					<table border="0">

						<tr>
							<td><h6>First Name</h6></td>
							<td><input type='text' name='first_name'></td>
						</tr>	

						<tr>
							<td><h6>Last Name</h6></td>
							<td><input type='text' name='last_name'></td>
						</tr>	

						<tr>
							<td><h6>Email</h6></td>
							<td><input type='text' name='email'></td>
						</tr>	

						<tr>
							<td><h6>Password</h6></td>
							<td><input type='password' name='password'></td>
						</tr>							
				    </table>
				</center>
				<input type='submit' value='Sign up'>

		    </form>
		    <br>
		    <p>Already a user? <a href="/users/login">Login Here</a></p>
        <img src="/images/yuno.jpg" alt="Y U NO coupon MEME">
<?php endif; ?>
