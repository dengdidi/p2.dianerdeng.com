 <?php if($user): ?>
        <h2>Share the Savings <?=$user->first_name;?>!</h2>
        <br>
        <img src="/images/skeptical.jpg" alt="skeptical couponer meme"
<?php else: ?>
     <script type="text/javascript" src="http://p4.dianerdeng.com/js/validatesignup.js"></script>
        <h2>Sign-Up for ChipperClipper & Start Saving</h2><br>
            
        <form name= 'signupForm' method='POST' action='/users/p_signup' onSubmit='return validateSignup(this)'>
            
                        
                           
                            <table>
                                
                                <tr>
                                    <td><h6>First Name</h6></td>
                                    <td><input type='text' id='first_name' name='first_name'></td>
                                </tr>   

                                <tr>
                                    <td><h6>Last Name</h6></td>
                                    <td><input type='text' id='last_name' name='last_name'></td>
                                </tr>   

                                <tr>
                                    <td><h6>Email</h6></td>
                                    <td><input type='text' id='email' name='email'></td>
                                </tr>   

                                <tr>
                                    <td><h6>Password</h6></td>
                                    <td><input type='password' id='password' name='password'></td>
                                </tr>   
                                                     
                            </table>
                            
                        
                <input onclick='validateSignup(signupForm)' type='submit' value='Sign Up'>
            </form>
            <br>
            <p>Already a user? <a href="/users/login">Login Here</a></p>
        <img src="/images/yuno.jpg" alt="Y U NO coupon MEME">
       
<?php endif; ?>