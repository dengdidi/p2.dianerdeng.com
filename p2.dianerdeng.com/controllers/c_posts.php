<?php
class posts_controller extends base_controller {

    public function __construct() {
        
        parent::__construct();
                
        if(!$this->user){
            Router::redirect("/");
        }
    }

    public function add() {

        # Setup view
        $this->template->content = View::instance('v_posts_add');
        $this->template->title   = "Post Now";

        # Render template
        echo $this->template;

    }

    public function p_add() {

        $_POST['user_id']  = $this->user->user_id;

        $_POST['created']  = Time::now();
        $_POST['modified'] = Time::now();

        DB::instance(DB_NAME)->insert('posts', $_POST);

        #Send user to posts stream
        Router::redirect('/posts/index');

    }

    public function index() {

        # Set up the View
        $this->template->content = View::instance('v_posts_index');
        $this->template->title   = "Posts";

        # Build the query
        $q = "SELECT 
                posts .* , 
                users.first_name, 
                users.last_name
            FROM posts
            INNER JOIN users 
                ON posts.user_id = users.user_id";

        # Run the query
        $posts = DB::instance(DB_NAME)->select_rows($q);

        # Pass data to the View
        $this->template->content->posts = $posts;

        # Render the View
        echo $this->template;
    }
    
    public function users() {
                
        $this->template->content = View::instance("v_posts_users");
                
        $q = 'SELECT * 
                FROM users';
                
        $users = DB::instance(DB_NAME)->select_rows($q);
                
        $q = 'SELECT * 
                FROM users_users 
                WHERE user_id = '.$this->user->user_id;
                        
        $connections = DB::instance(DB_NAME)->select_array($q, 'user_id_followed');
                
        $this->template->content->users = $users;
        $this->template->content->connections = $connections;
                
        echo $this->template;
                
        }
    
    public function follow($user_id_followed) {
        
        $data = Array(
            "created" => Time::now(),
            "user_id" => $this->user->user_id,
            "user_id_followed" => $user_id_followed
            );
        
        DB::instance(DB_NAME)->insert('users_users', $data);
        
        Router::redirect("/posts/users");
        }
    
    public function unfollow($user_id_followed) {

        $where_condition = 'WHERE user_id = '.$this->user->user_id.' AND user_id_followed = '.$user_id_followed;
        DB::instance(DB_NAME)->delete('users_users', $where_condition);

        # Send them backe
        Router::redirect("/posts/users");
    }
}
?>
}