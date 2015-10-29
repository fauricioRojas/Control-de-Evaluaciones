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
    
    $connection = new Connection();
    $conn = $connection->createConnection();

    if($conn) {
        $action = $_REQUEST['action'];
        
        

    }
    else {
        return false;
    }

