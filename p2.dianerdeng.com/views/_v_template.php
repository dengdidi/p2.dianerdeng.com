<!DOCTYPE html>
<html>
<head>

    <title><?php if(isset($title)) echo $title; ?></title>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />   
    <link href="/css/styles.css" rel="stylesheet" type="text/css">              
    
</head>

<body>  


    <div id="menu">
  
            <a href='/index.php'> | Home</a>
        <!-- Menu for users who are logged in -->
        <?php if($user): ?>
            
            <a href='/users/profile'> | My Profile</a>
            <a href='/posts/add'> | Add Post</a>  
            <a href='/posts/index'> | My Stream</a>  
            <a href='/posts/users'> | All Believrs</a>  
            <a href='/users/logout'> | Logout |</a>

        <!-- Menu options for users who are not logged in -->
        <?php else: ?>

            <a href='/users/signup'> | Sign up</a>
            <a href='/users/login'> | Log in |</a>

        <?php endif; ?>
    
    <?php if($user): ?>
        <h6>You are logged in as <em><?=$user->first_name?> <?=$user->last_name?></em> @ <?=$_SERVER['REMOTE_ADDR']?><br></hr>
    <?php endif; ?>

    </div>

    <br>
        
    
    <div id="content">
        <?php if(isset($content)) echo $content; ?>
    </div>

    <br>

    <div id="footer">
        <p>&copy;2013 Diane Deng | HARVARD DWA15 | Project 2: PHP Microblog</p>
    </div>

</body>
</html>