<?php
	
    class Connection {
        public function createConnection() {
            $strconn = "host=172.24.28.21 port=5433 dbname=SegundoProyecto user=usrSegundoProyecto password=12345";
            $conn = pg_connect($strconn);

            if($conn)
                return $conn;

            return false;
        }
    }
	
    function login($conn) {
        $JSON = array();

        $id = $_REQUEST['id'];
        $pass = $_REQUEST['pass'];

        $query = "SELECT cedula, tipo FROM usuarios WHERE cedula='$id' AND contraseña='$pass'";
        $result = pg_query($conn, $query);

        while ($row = pg_fetch_row($result)) {
            $JSON[] = array(
                    'id' => $row[0], 
                    'type' => $row[1]
                    );
        }
        echo json_encode($JSON);
    }

    $connection = new Connection();
    $conn = $connection->createConnection();

    if($conn) {
        $action = $_REQUEST['action'];
        
        if($action === "login") {
            login($conn);
        }
    }
    else {
        return false;
    }