<?php
	header('Access-Control-Allow-Origin: *');
	
	// Esta es una clase donde $id, $number y $amount son las propiedades
	class Account {
		public $id;
		public $number;
		public $amount;
	}

	// configuro el encabezado de la respuesta
	header("Content-Type: application/json; charset=UTF-8");
	
	// De esta manera creo un objeto y configuro los valores a sus propiedades
	// primera cuenta
	$account1 = new Account();
	$account1->id = 1001;
	$account1->number = "12345-6789";
	$account1->amount = 700;
	
	// segunda cuenta
	$account2 = new Account();
	$account2->id = 1005;
	$account2->number = "98765-4321";
	$account2->amount = 100;

	// creo un arreglo de objetos
	$myArr = array($account1, $account2);

	// serializo el arreglo de objetos a formato JSON
	$myJSON = json_encode($myArr);

	// aquí se envía la respuesta al servidor
	echo $myJSON;
?>