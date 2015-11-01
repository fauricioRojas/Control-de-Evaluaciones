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
    
    function getProfessor($conn) {
        $JSON = array();

        $id = $_REQUEST['id'];

        $query = "SELECT cedula,nombre,apellido1,apellido2 FROM personas WHERE cedula='$id'";
        $result = pg_query($conn, $query);

        while ($row = pg_fetch_row($result)) {
            $JSON = array(
                    'id' => $row[0], 
                    'name' => $row[1],
                    'lastName1' => $row[2],
                    'lastName2' => $row[3]
                    );
        }
        echo json_encode($JSON);
    }
    
    $connection = new Connection();
    $conn = $connection->createConnection();

    if($conn) {
        $action = $_REQUEST['action'];
        
        if($action === "getProfessor") {
            getProfessor($conn);
        }
        

    }
    else {
        return false;
    }

