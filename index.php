<!DOCTYPE html>
<html>
<head>
    <title>Evaluation Control</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./Login/login.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
</head>
<body class="be-ligth-gray">
    <div class="jumbotron font-oxygen text-center">
        <h1>Evaluation Control</h1>
    </div>
    <div class="container" ng-app="Login" ng-controller="LoginController">
        <div class="col-md-4 col-md-offset-4 content rounded-border">
            <div ng-show="errorLogin" class="alert alert-danger" role="alert">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    The identification or the password is incorrect.
            </div>

            <div class="form-group">
                <p>
                    <label class="label-size">Identification</label>
                    <input class="form-control text-box" type="text" ng-model="id" >
                    <span class="text-error">{{ errorId }}</span>
                </p>
            </div>
            <div class="form-group">
                <p>
                    <label class="label-size">Password</label>
                    <input class="form-control text-box" type="password" ng-model="password" required>
                    <span class="text-error">{{ errorPassword }}</span>
                </p>
            </div> 
            <div class="form-group">
                <p>
                    <center><button class="btn-lg btn btn-primary btn-extra" ng-click="login()">Log in <span class="glyphicon glyphicon-arrow-right"></span></button></center>
                </p>
            </div>
        </div>
    </div>

    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="./Login/login.controller.js"></script>

</body>
</html>