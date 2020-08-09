<?php

$type = $_GET['tp'];

if ($type == 'signup') signup();
elseif ($type == 'login') login();
elseif ($type == 'userprofile') userprofile();
elseif ($type == 'resprofile') resprofile();
elseif ($type == 'resorders') resorders();
elseif ($type == 'userorders') userorders();
elseif ($type == 'orderdisplay') orderdisplay();
elseif ($type == 'orderinsert') orderinsert();
elseif($type=='additemdisplay') additemdisplay(); 
 elseif($type=='additeminsert') additeminsert(); 
 elseif($type=='menu') menu(); 
 elseif($type=='homepage_menu') homepage_menu(); 
 elseif($type=='allrestaurants') allrestaurants(); 
 elseif($type=='homepage_restaurants') homepage_restaurants(); 

// elseif($type=='feedDelete') feedDelete(); 
function login()
{
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $register_as_a = $json['resorcuslogin'];
    $email = $json['email'];
    $pass = $json['pass'];

    // echo($email   );
    // echo($pass  );

    $cus_hash = "select cus_pass from users where cus_email='$email' ";

    $cus_pass_hash = $db->query($cus_hash);
    $cus_pass_hash_retrive=$cus_pass_hash->fetch_array()[0] ?? '';

    
    // echo($cus_pass_hash_retrive);
    
    
   
    $res_hash = "select res_pass from restaurants where res_email='$email'";
    $res_pass_hash = $db->query($res_hash);
    $res_pass_hash_retrive=$res_pass_hash->fetch_array()[0] ?? '';



   // $pass_hash = password_hash($pass, PASSWORD_DEFAULT);
    if (password_verify ($pass, $cus_pass_hash_retrive)) {
        $userData = '';
        $query = "select * from users where cus_email='$email'  and register_as_a='$register_as_a'";
        $result = $db->query($query);
        $rowCount = $result->num_rows;
        if ($rowCount > 0 ) {
        if($register_as_a == "Customer") {
            $userData = $result->fetch_object();
            $user_id = $userData->cus_id;
            $userData = json_encode($userData);
            echo '{"userData":' . $userData . '}';
        }}

    }
    elseif(password_verify ($pass, $res_pass_hash_retrive)){
        $resData = '';
        $res_query = " select * from restaurants where res_email='$email' and register_as_a='$register_as_a'";
        $res_result= $db->query($res_query);
        $res_rowCount = $res_result->num_rows;
        if ( $res_rowCount>0) {

            if ($register_as_a == "Restaurant") {
                $resData = $res_result->fetch_object();
                $res_id = $resData->res_id;
                $resData = json_encode($resData);
                echo '{"resData":' . $resData . '}';
                
                
            }
        }
    }
    else {
        echo( "Invalid credentials");
    }
    
}





function signup()
{

    require 'config.php';

    $json = json_decode(file_get_contents('php://input'), true);

    $register_as_a = $json['resorcus'];
    $rcname = $json['rcname'];
    $email = $json['email'];
    $pass = $json['pass'];
    $dishtype = $json['dishtype'];


    // echo($json['email']);
    // echo($json);
    // echo($register_as_a );
    // echo($rcname );
    // echo($email );
    // echo($pass );
    // echo($dishtype );

    if ($register_as_a == "Restaurant") {

        $location = $json['location'];
        $description = $json['description'];
        $resrev = $json['resrev'];
        $rescost = $json['rescost'];
        $resmin = $json['resmin'];
        $paymode = $json['paymode'];
    }

    $pass_check = preg_match('/^[A-Za-z0-9!@#$%^&*()_]{4,20}$/i', $pass);

    if ($pass_check == 0)
        echo '{"error":"Invalid password"}';
    elseif (strlen(trim($pass)) > 0 && strlen(trim($email)) > 0) {
        //$userData = '';           
        $result = $db->query("select cus_email from users where  cus_email='$email'         
             UNION ALL  
            select res_email from restaurants where res_email='$email'");
        $rowCount = $result->num_rows;
       // echo ($rowCount);
        //echo '{"text": "'.$rowCount.'"}';
        if ($rowCount == 0) {
            $pass_hash = password_hash($pass, PASSWORD_DEFAULT);
           

            if ($register_as_a == "Restaurant") {
                $query = "INSERT INTO restaurants 
 (register_as_a, res_name, res_email, res_pass, res_location, res_about, res_percost, res_mindelivery, res_rating, res_paymode, res_dishtype ) 
                            VALUES 
                        ('$register_as_a',
                        '$rcname',
                        '$email',
                        '$pass_hash',
                        '$location',
                        '$description',
                        '$rescost',
                        '$resmin',
                        '$resrev',
                        '$paymode',
                        '$dishtype'
 
                        )";
                if ($db->query($query) == true) {
                    echo ("insert successful");
                } else {
                    echo "Error: " . $query . "<br>" . $db->error;
                }

                $resData='';
                $res_query= "select res_email,res_pass,res_id from restaurants where res_email='$email' ";
                $res_result = $db->query($res_query);
                $resData = $res_result->fetch_object();
                $res_id = $resData->res_id;
                $resData = json_encode($resData);
                echo '{"resData":' . $resData . '}';


            } elseif ($register_as_a == "Customer") {
                //echo ($rowCount);
                $query = "INSERT INTO users (register_as_a , cus_name, cus_email, cus_pass, cus_dish_type)
                    VALUES('$register_as_a', '$rcname', '$email', '$pass_hash', '$dishtype') ";
                if ($db->query($query) == true) {
                    echo ("insert successful");
                } else {
                    echo "Error: " . $query . "<br>" . $db->error;
                }

            $userData = '';
            $query = "select cus_email,cus_pass,cus_id from users where cus_email='$email' ";
            $result = $db->query($query);
            $userData = $result->fetch_object();
            $user_id = $userData->cus_id;
            $userData = json_encode($userData);
            echo '{"userData":' . $userData . '}';
            }
        else {
                echo "Error: <br>" . $db->error;
            }

            
        } else {
            echo '{"error":"username or email exists"}';
        }
    } else {
        echo '{"text":"Enter valid data2"}';
    }
}



function userprofile(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id']; 
    $query = "SELECT * FROM users WHERE cus_id=$user_id";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 
    $user_details = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $user_details=json_encode($user_details);
    echo '{"user_details":'.$user_details.'}';
}


function resprofile(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $res_id=$json['res_id']; 
    $query = "SELECT * FROM restaurants WHERE res_id=$res_id";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 
    $resData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $resData=json_encode($resData);
    echo '{"resData":'.$resData.'}';
}


function resorders(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $res_id=$json['res_id']; 
    $query = "SELECT * FROM orders WHERE res_id=$res_id ORDER BY order_id DESC ";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 
    $resorders = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $resorders=json_encode($resorders);
    echo '{"resorders":'.$resorders.'}';
}
function userorders(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id']; 
    $query = "SELECT * FROM orders WHERE cus_id=$user_id ORDER BY order_id DESC ";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 
    $userorders = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $userorders=json_encode($userorders);
    echo '{"userorders":'.$userorders.'}';
}

function orderdisplay(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $item_id=$json['item_id']; 
    $query = "SELECT * FROM items WHERE  item_id=$item_id";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 
    $orderData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $orderData=json_encode($orderData);
    
    echo '{"itemData":'.$orderData.'}';
    

}

function orderinsert(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);

    $register_as_a=$json['register_as_a'];
    $user_id=$json['user_id'];
    $res_id=$json['res_id'];
    $item_id=$json['item_id'];
    $order_no=$json['order_no'];
    
    if($register_as_a && $user_id>0 && $res_id>0 && $item_id>0 && $order_no){
        $query="INSERT INTO orders(register_as_a, order_no, cus_id, res_id, item_id)
     VALUES ( '$register_as_a','$order_no','$user_id','$res_id','$item_id')";       
    if($db->query($query)){
        echo ("order successful");
    }
    else{
        echo ("Something worng");
    }
    
}

}


function additemdisplay(){
    
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $res_id=$json['res_id']; 
    $query = "SELECT * FROM items WHERE res_id=$res_id ORDER BY item_id";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query); 
    $itemData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $itemData=json_encode($itemData);
    echo '{"itemData":'.$itemData.'}';
    

}

function additeminsert(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);

    $res_id=$json['res_id'];
    $item_name=$json['dishname'];
    $item_price=$json['price'];
    $item_qty=$json['quantity'];
    $item_type=$json['dishtype'];

    $itemData = '';
    if($res_id !=0)
    {
        $query = " INSERT INTO items(res_id, item_name, item_price, item_qty, item_type) 
        VALUES ('$res_id', '$item_name', '$item_price', '$item_qty', '$item_type')";
        $db->query($query);              
    }
    $query = "SELECT * FROM items WHERE res_id=$res_id ORDER BY item_id DESC LIMIT 10";
    $result = $db->query($query); 
    $itemData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $itemData=json_encode($itemData);
    echo '{"itemData":'.$itemData.'}';

}



function menu(){
    
    require 'config.php';
    $query = "SELECT * FROM items ORDER BY item_id Desc";
    $result = $db->query($query); 
    $item_data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $item_data=json_encode($item_data);
    echo '{"item_data":'.$item_data.'}';
}
function homepage_menu(){
    
    require 'config.php';
    $query = "SELECT * FROM items ORDER BY RAND() LIMIT 10";
    $result = $db->query($query); 
    $item_data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $item_data=json_encode($item_data);
    echo '{"item_data":'.$item_data.'}';
}



function allrestaurants(){
    
    require 'config.php';
     
    //$output = array();

    $query = "SELECT * FROM restaurants ORDER BY res_id DESC";
    $result = $db->query($query); 
    $allrestaurants = mysqli_fetch_all($result,MYSQLI_ASSOC);
    //$output[]=$allrestaurants;
    //$allrestaurants=json_encode($output);
    $allrestaurants=json_encode($allrestaurants);
     echo '{"allrestaurants":'.$allrestaurants.'}';
    

}
function homepage_restaurants(){
    
    require 'config.php';
     
    //$output = array();

    $query = "SELECT * FROM restaurants ORDER BY RAND() LIMIT 10";
    $result = $db->query($query); 
    $allrestaurants = mysqli_fetch_all($result,MYSQLI_ASSOC);
    //$output[]=$allrestaurants;
    //$allrestaurants=json_encode($output);
    $allrestaurants=json_encode($allrestaurants);
     echo '{"allrestaurants":'.$allrestaurants.'}';
    

}

// function feedDelete(){
//     require 'config.php';
//     $json = json_decode(file_get_contents('php://input'), true);
//     $user_id=$json['user_id'];
//     $feed_id=$json['feed_id'];    
//     $query = "Delete FROM feed WHERE user_id=$user_id AND feed_id=$feed_id";
//     $result = $db->query($query);
//     if($result)       
//     {        
//         echo '{"success":"Feed deleted"}';
//     } else{
     
//         echo '{"error":"Delete error"}';
//     }  
// }
