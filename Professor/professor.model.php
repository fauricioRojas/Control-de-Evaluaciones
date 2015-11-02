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
                    'nombre' => $row[1],
                    'apellido1' => $row[2],
                    'apellido2' => $row[3]
                    );
        }
        echo json_encode($JSON);
    }
    
    function myCourses($conn) {
        $JSON = array();

        $id = $_REQUEST['id'];

        $query = "SELECT c.codigo,c.nombre,g.idgrupo FROM gruposfuncionarios AS gf INNER JOIN 
            grupos AS g ON gf.idgrupo=g.idgrupo INNER JOIN cursos AS c ON g.codigo=c.codigo 
            WHERE cedula = '$id'";
        $result = pg_query($conn, $query);

        while ($row = pg_fetch_row($result)) {
            $JSON[] = array(
                    'codigo' => $row[0], 
                    'nombre' => $row[1],
                    'idGrupo' => $row[2]
                    );
        }
        echo json_encode($JSON);
    }
    
    function getEvaluations($conn) {
        $JSON = array();

        $idGrupo = $_REQUEST['idGrupo'];

        $query = "SELECT * FROM evaluaciones WHERE idgrupo=$idGrupo";
        $result = pg_query($conn, $query);

        while ($row = pg_fetch_row($result)) {
            $JSON[] = array(
                    'id' => $row[0], 
                    'idGrupo' => $row[1],
                    'nombre' => $row[2],
                    'porcentaje' => $row[3]
                    );
        }
        echo json_encode($JSON);
    }
    
    function newEvaluation($conn) {
        $idGrupo = $_REQUEST['idGrupo'];
        $nombre = $_REQUEST['nombre'];
        $porcentaje = $_REQUEST['porcentaje'];
        
        $query = "INSERT INTO evaluaciones(idGrupo, nombre, porcentaje)";
        $query .=" values($idGrupo,'$nombre',$porcentaje)";
        
        pg_query($conn,$query);

        echo true;
    }


    function editEvaluation($conn) {
        $idEval = $_REQUEST['idEval'];
        $nombre = $_REQUEST['nombre'];
        $porcentaje = $_REQUEST['porcentaje'];
        
        $query = "UPDATE evaluaciones SET nombre='$nombre', porcentaje=$porcentaje WHERE idevaluacion=$idEval";
        pg_query($conn,$query);
        
        echo true;
    }
    
    function getStudentsFromGroup($conn) {                
        $JSON = array();

        $idGrupo = $_REQUEST['idGrupo'];

        $query = "SELECT p.cedula,p.nombre||' '||p.apellido1||' '||p.apellido2 AS nombre 
            FROM matriculas AS m INNER JOIN gruposmatriculas AS gm ON m.idmatricula=gm.idmatricula
            INNER JOIN grupos AS g ON gm.idgrupos=g.idgrupo INNER JOIN cursos AS c ON g.codigo=c.codigo 
            INNER JOIN personas p ON m.cedula=p.cedula WHERE g.idgrupo=$idGrupo";
        $result = pg_query($conn, $query);

        while ($row = pg_fetch_row($result)) {
            $JSON[] = array(
                    'cedula' => $row[0], 
                    'nombre' => $row[1]
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
        else if($action === "myCourses") {
            myCourses($conn);
        }
        else if($action === "getEvaluations") {
            getEvaluations($conn);
        }
        else if($action === "newEvaluation") {
            newEvaluation($conn);
        }
        else if($action === "editEvaluation") {
            editEvaluation($conn);
        }
        else if($action === "getStudentsFromGroup") {
            getStudentsFromGroup($conn);
        }
        

    }
    else {
        return false;
    }

