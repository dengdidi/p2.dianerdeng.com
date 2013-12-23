<html>

<head>
    <meta charset="utf-8">
    <title><?php if(isset($title)) echo $title; ?></title>
    
    <link href="http://p4.dianerdeng.com/css/styles.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="http://p4.dianerdeng.com/js/validatelogin.js"></script>

    <noscript> Sorry, your browser does not support JavaScript </noscript>
    
</head>

<body>
    <div id = "content">
        <h2><strong>Log In Failed! Try Again:</strong></h2>
        <br>

        <form name= 'loginForm' method='POST' action='/users/p_login' onSubmit='return validateLogin(this)'>

            <center>
                <table border="0">

                    <tr>
                        <td><h6>Email</h6></td>
                        <td><input type='text' id='email' name='email'></td>
                    </tr>

                    <tr>
                        <td><h6>Password</h6></td>
                        <td><input type='password' id='password' name='password'></td>
                    </tr>
                </table>
            </center>
            <input onclick='validateLogin(loginForm)' type='submit' value='Log in'>
        </form>
        <p>Not a user? <a href="/users/signup">Sign Up Here</a></p
    </body>
</html>
