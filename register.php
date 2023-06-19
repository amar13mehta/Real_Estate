<?php include('functions.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    
    <link rel="stylesheet" href="reg.css">
    
</head>
<body>
   


    <main>
        <div class="form-container">
                <h1>Register</h1>
                <span class="form-wrapper">
           
                <form method="post" action="register.php">
<?php echo display_error(); ?>
	<div class="input-group">
		<label>Username</label>
		<input type="text" name="username" value="<?php echo $username; ?>">
	</div>
	<div class="input-group">
		<label>Email</label>
		<input type="email" name="email" value="<?php echo $email; ?>">
	</div>
    <div class="input-group">
			<label>User type</label>
			<select name="user_type" id="user_type">
				<option value=""></option>
				<option value="editor">admin</option>
				<option value="user">user</option>
			</select>
		</div>
	<div class="input-group">
		<label>Password</label>
		<input type="password" name="password_1">
	</div>
	<div class="input-group">
		<label>Confirm password</label>
		<input type="password" name="password_2">
	</div>
	<div class="input-group">
		<button type="submit" class="sign-in" name="register_btn">Register</button>
	</div>
	<p>
		Already a member? <a href="login.php">Sign in</a>
	</p>
</form>
           
                </span>
       </div>
    </main>

     <!-- Footer Section -->
    



   </body>
</html>