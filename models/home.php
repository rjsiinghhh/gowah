<?php
$dbconn = pg_connect('host=localhost dbname=houses');

class Home {
    public $id;
    public $price;
    public $bedrooms;
    public $bathrooms;
    public $squareft;
    public $housenumber;
    public $streetname;
    public $city;
    public $state;
    public $zip;
    public $image_link;

    public function __construct($id, $price, $bedrooms, $bathrooms, $squareft,$housenumber,$streetname,$city, $state, $zip, $image_link){
        $this->id =$id;
        $this->price = $price;
        $this->bedrooms = $bedrooms;
        $this->bathrooms = $bathrooms;
        $this->squareft = $squareft;
        $this->housenumber = $housenumber;
        $this->streetname = $streetname;
        $this->city = $city;
        $this->state = $state;
        $this->zip = $zip;
        $this->image_link = $image_link;
    }
}



class Homes {

  static function delete($id){
    $query = "DELETE FROM homes WHERE id = $1";
    $query_params = array($id);
    pg_query_params($query, $query_params);
    return self::all();
  }


  static function update($updated_home){
    $query = "UPDATE homes SET price = $2, bedrooms = $3, bathrooms = $4, squareft = $5, housenumber = $6, streetname = $7, city = $8, state = $9, zip = $10, image_link = $11, WHERE id = $1";
    $query_params = array(
      $updated_home->id,
      $updated_home->price,
      $updated_home->bedrooms,
      $updated_home->bathrooms,
      $updated_home->squareft,
      $updated_home->housenumber,
      $updated_home->streetname,
      $updated_home->city,
      $updated_home->state,
      $updated_home->zip,
      $updated_home->image_link);
    pg_query_params($query, $query_params);
    return self::all();
   }

  static function create($home){
    $query = "INSERT INTO homes ( id, price, bedrooms, bathrooms, squareft, housenumber, streetname, city, state, zip, image_link) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11)";
    $query_params = array(
      $home->id,
      $home->price,
    $home->bedrooms,
    $home->bathrooms,
    $home->squareft,
    $home->housenumber,
    $home->streetname,
    $home->city,
    $home->state,
    $home->zip,
    $home->image_link);
    pg_query_params($query, $query_params);
    return self::all();

}


    static function all(){
        $homes = array();


        $results = pg_query("SELECT * FROM homes ORDER BY id ASC");
        $row_object = pg_fetch_object($results); //i=0
        while($row_object !== false){ //i<5

            $new_home = new Home(
                intval($row_object->id),
                intval($row_object->price),
                $row_object->bedrooms,
                $row_object->bathrooms,
                $row_object->squareft,
                $row_object->housenumber,
                $row_object->streetname,
                $row_object->city,
                $row_object->state,
                $row_object->zip,
                $row_object->image_link
            );

            $homes[] = $new_home;

            $row_object = pg_fetch_object($results);

        }

        return $homes;
    }
}





?>
