<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/home.php';

if($_REQUEST['action'] === 'index'){
    echo json_encode(Homes::all());



  } else if ($_REQUEST['action'] === 'create'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $new_Home = new Home(null,
       $body_object->price,
      $body_object->bedrooms,
      $body_object->bathrooms,
      $body_object->squareft,
      $body_object->housenumber,
      $body_object->streetname,
      $body_object->city,
      $body_object->state,
      $body_object->zip,
      $body_object->image_link);
    $all_homes= Homes::create($new_home);
    echo json_encode($all_homes);

  } else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object= json_decode($request_body);
    $updated_home = new Homes($_REQUEST['id'],
    $body_object->price,
    $body_object->bedrooms,
    $body_object->bathrooms,
    $body_object->squareft,
    $body_object->housenumber,
    $body_object->streetname,
    $body_object->city,
    $body_object->state,
    $body_object->zip,
    $body_object->image_link);
    $all_homes = Homes::update($updated_home);
    echo json_encode($all_homes);





  } else if ($_REQUEST['action'] === 'delete'){
  $all_homes = Homes::delete($_REQUEST['id']);
  echo json_encode($all_homes);
 }


?>
