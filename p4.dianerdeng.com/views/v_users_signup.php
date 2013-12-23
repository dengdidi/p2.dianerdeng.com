<html>

<head>
    <meta charset="utf-8">
    <title><?php if(isset($title)) echo $title; ?></title>
    
    <link href="http://p4.dianerdeng.com/css/styles.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="http://p4.dianerdeng.com/js/validatesignup.js"></script>

    <noscript> Sorry, your browser does not support JavaScript </noscript>
    
</head>

<body>
    <div id = "content">
        <center>
        <h2><strong>Sign Up</strong></h2>
        <p>Become a member today & start saving</p>
         
            <form name= 'signupForm' method='POST' action='/users/p_signup' onSubmit='return validateSignup(this)'>

                            <table border="0">

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

            <p>Already Signed Up? <a href="/users/login">Login Here.</a></p>
        </center>
    </div>
</body>
</html>