<?php include('functions.php') ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="log.css">
</head>
<body>
   
    <main>
        <div class="form-container">
           
                <h1>Sign In</h1>
                <span class="form-wrapper">
                <?php 
        if(!empty($login_err)){
            echo '<div class="alert alert-danger">' . $login_err . '</div>';
        }        
        ?>

<form method="post" action="login.php">

<?php echo display_error(); ?>

<div class="input-group">
    <label>Username</label>
    <input type="text" name="username" >
</div>
<div class="input-group">
    <label>Password</label>
    <input type="password" name="password">
</div>
<div class="input-group">
    <button type="submit" class="sign-in" name="login_btn">Login</button>
</div>
<p>
    Not yet a member? <a href="register.php">Sign up</a>
</p>
</form>
                <div class="register-container">
                    <span>Don't have an account ?</span>
                    <a href="register.php">Create an Account</a>
                </div>
            </span>
        </div>
    </main>

</body>
</html>