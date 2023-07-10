<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

function retornarConexion()
{
    $servername = "localhost";
    $database = "transit";
    $username = "root";
    $password = "root";

    try {
        $con = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $con;
    } catch (PDOException $e) {
        echo "Error de conexión: " . $e->getMessage();
        exit();
    }
}



if ($_GET['id'] == "set") {

    $json = file_get_contents('php://input');

    $params = json_decode($json, true);

    class Result
    {
        public $resultado;
        public $mensaje;
    }

    $con = retornarConexion();

    $nombre = $params['nombre'];
    $apellido = $params['apellido'];
    $cedula = $params['cedula'];
    $fecha_nac = $params['fecha_nac'];
    $categoria = $params['categoria'];
    $fecha_expedicion = $params['fecha_expedicion'];

    try {
        // Preparar la consulta con los parámetros
        $stmt = $con->prepare("INSERT INTO ciudadano (nombre, apellido, cedula, fecha_nac, categoria, fecha_expedicion) VALUES (:nombre, :apellido, :cedula, :fecha_nac, :categoria, :fecha_expedicion)");
        $stmt->bindParam(":nombre", $nombre, PDO::PARAM_STR);
        $stmt->bindParam(":apellido", $apellido, PDO::PARAM_STR);
        $stmt->bindParam(":cedula", $cedula, PDO::PARAM_INT);
        $stmt->bindParam(":fecha_nac", $fecha_nac, PDO::PARAM_STR);
        $stmt->bindParam(":categoria", $categoria, PDO::PARAM_STR);
        $stmt->bindParam(":fecha_expedicion", $fecha_expedicion, PDO::PARAM_STR);

        // Ejecutar la consulta
        $stmt->execute();

        // Verificar si se ejecutó correctamente
        if ($stmt->rowCount() > 0) {
            $response = new Result();
            $response->resultado = 'Ok';
            $response->mensaje = 'Datos enviados';
        } else {
            // No se insertaron filas, la consulta no se ejecutó correctamente
            $response = new Result();
            $response->resultado = 'No';
            $response->mensaje = 'Error en la consulta';
        }
    } catch (PDOException $e) {
        $response = new Result();
        $response->resultado = 'No';
        $response->mensaje = 'Error en la consulta' . $e->getMessage();
    }

    // Convertir la respuesta a JSON y enviarla
    header('Content-Type: application/json');
    echo json_encode($response);
}

if ($_GET['id'] == "get") {
    $cad = "";
    $con = retornarConexion();
    $TodosCiudadanos = [];

    try {
        $registros = $con->prepare("SELECT nombre, apellido, cedula, fecha_nac, categoria, fecha_expedicion FROM ciudadano");
        $registros->execute();

        foreach ($registros as $rec) {
            $TodosCiudadanos[] = $rec;
        }
    } catch (PDOException $e) {

    }
    $cad = json_encode($TodosCiudadanos);
    echo $cad;
    header('Content-Type: application/json');
}

if ($_GET['id'] == "select") {
    $con = retornarConexion();
    $Ciudadano = [];
    try {
        $registros = $con->prepare("SELECT nombre, apellido, cedula, fecha_nac, categoria, fecha_expedicion FROM ciudadano WHERE cedula =$_GET[cedula]");
        $registros->execute();

        foreach ($registros as $rec) {
            $Ciudadano[] = $rec;
        }
    } catch (PDOException $e) {

    }

    $cad = json_encode($Ciudadano);
    echo $cad;
    header('Content-Type: application/json');
}

if($_GET['id'] == "delete"){

    $con = retornarConexion();

    class Result
    {
        public $resultado;
        public $mensaje;
    }

    try{
        $registro = $con->prepare("DELETE FROM ciudadano WHERE cedula=$_GET[cedula]");
        $registro->execute();

        $response = new Result();
        $response->resultado = 'Ok';
        $response->mensaje = 'Datos eliminados';

    } catch (PDOException $e) {

        $response = new Result();
        $response->resultado = 'No';
        $response->mensaje = 'Error en la consulta' . $e->getMessage();

    }

    echo json_encode($response);
    header('Content-Type: application/json');

}

if($_GET['id'] == "edit"){

    $json = file_get_contents('php://input');

    $params = json_decode($json, true);

    class Result
    {
        public $resultado;
        public $mensaje;
    }

    $con = retornarConexion();

    $nombre = $params['nombre'];
    $apellido = $params['apellido'];
    $cedula = $params['cedula'];
    $fecha_nac = $params['fecha_nac'];
    $categoria = $params['categoria'];
    $fecha_expedicion = $params['fecha_expedicion'];

    try {
        // Preparar la consulta con los parámetros
        $stmt = $con->prepare("UPDATE ciudadano set nombre = :nombre, apellido = :apellido, fecha_nac = :fecha_nac, categoria = :categoria, fecha_expedicion = :fecha_expedicion WHERE cedula = :cedula");
        $stmt->bindParam(":nombre", $nombre, PDO::PARAM_STR);
        $stmt->bindParam(":apellido", $apellido, PDO::PARAM_STR);
        $stmt->bindParam(":cedula", $cedula, PDO::PARAM_INT);
        $stmt->bindParam(":fecha_nac", $fecha_nac, PDO::PARAM_STR);
        $stmt->bindParam(":categoria", $categoria, PDO::PARAM_STR);
        $stmt->bindParam(":fecha_expedicion", $fecha_expedicion, PDO::PARAM_STR);
        // Ejecutar la consulta
        $stmt->execute();

        // Verificar si se ejecutó correctamente
        if ($stmt->rowCount() > 0) {
            $response = new Result();
            $response->resultado = 'Ok';
            $response->mensaje = 'Datos Modificados';
        } else {
            // No se insertaron filas, la consulta no se ejecutó correctamente
            $response = new Result();
            $response->resultado = 'No';
            $response->mensaje = 'Error en la consulta';
        }
    } catch (PDOException $e) {

        $response = new Result();
        $response->resultado = 'No';
        $response->mensaje = 'Error en la consulta' . $e->getMessage();
    }

    // Convertir la respuesta a JSON y enviarla
    header('Content-Type: application/json');
    echo json_encode($response);

}

if ($_GET['id'] == "login") {
    $json = file_get_contents('php://input');
    $params = json_decode($json, true);

    class Result
    {
        public $resultado;
        public $mensaje;
    }

    $email = $params['email'];
    $pass = $params['pass'];

    $con = retornarConexion();

    try {
        $registros = $con->prepare("SELECT email, pass FROM users WHERE email = :email AND pass = :pass");
        $registros->bindParam(":email", $email, PDO::PARAM_STR);
        $registros->bindParam(":pass", $pass, PDO::PARAM_STR);
        $registros->execute();

        // Verificar si se ejecutó correctamente
        if ($registros->rowCount() > 0) {
            $response = new Result();
            $response->resultado = 'Ok';
            $response->mensaje = 'Inicio de sesión exitoso';
        } else {
            // No se encontraron registros, el inicio de sesión no es válido
            $response = new Result();
            $response->resultado = 'No';
            $response->mensaje = 'Credenciales de inicio de sesión inválidas';
        }
    } catch (PDOException $e) {
        $response = new Result();
        $response->resultado = 'No';
        $response->mensaje = 'Error en la consulta: ' . $e->getMessage();
    }

    // Convertir la respuesta a JSON y enviarla
    header('Content-Type: application/json');
    echo json_encode($response);
}


