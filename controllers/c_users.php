<?php
class users_controller extends base_controller {

    public function __construct() {
        parent::__construct();
        echo "users_controller construct called<br><br>";
    } 

    public function index() {
        echo "This is the index page";
    }

    public function signup() {
        echo "This is the signup page";
        # Setup view
            $this->template->content = View::instance('v_users_signup');
            $this->template->title   = "Sign Up";

        # Render template
            echo $this->template;

    }

    public function p_signup() {

        # Dump out the results of POST to see what the form submitted
        // print_r($_POST);

        # More data we want stored with the user
        $_POST['created']  = Time::now();
        $_POST['modified'] = Time::now();

        # Encrypt the password  
        $_POST['password'] = sha1(PASSWORD_SALT.$_POST['password']);            

        # Create an encrypted token via their email address and a random string
        $_POST['token'] = sha1(TOKEN_SALT.$_POST['email'].Utils::generate_random_string()); 

        # Insert this user into the database
        $user_id = DB::instance(DB_NAME)->insert('users', $_POST);

        # For now, just confirm they've signed up - 
        # You should eventually make a proper View for this
        echo 'You\'re signed up';

    }

    public function login() {
        echo "This is the login page";
    }

    public function logout() {
        echo "This is the logout page";
    }

    public function profile($user_name = NULL) {

        # quick and dirty (* for printing results)
        // if($user_name == NULL) {
        //     echo "No user specified";
        // }
        // else {
        //     echo "This is the profile for ".$user_name;
        // }

        # Create a new View instance
        # Do *not* include .php with the view name
            # $title is another variable used in _v_template to set the <title> of the page
        $this->template->title = "Profile";

        # Pass information to the view fragment
        $this->template->content->user_name = $user_name;

        # Render View
        echo $this-template;
    }

} # end of the class