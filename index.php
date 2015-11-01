<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <title>Evaluation Control</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./Login/login.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <link href='https://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
    
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-route.min.js"></script>
    <script src="./Login/login.controller.js"></script>
    <script src="./Login/login.service.js"></script>
    <script src="./Professor/professor.controller.js"></script>
    <script src="./Professor/professor.service.js"></script>
    <script src="./Student/student.controller.js"></script>
    <script src="./js/app.js"></script>
</head>
<body>
    <div ng-view></div>
</body>
</html>