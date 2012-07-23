<?php 
 $to = 'alimon808@gmail.com'; //$_REQUEST['sendto'] ; 
 $from = $_REQUEST['email'] ; 
 $name = $_REQUEST['name'] ; 
 $headers = "From: $from"; 
 $subject = "Mobile Contact Data"; 
 
 $fields = array(); 
 $fields{"name"} = "name"; 
 //$fields{"Company"} = "Company"; 
 $fields{"email"} = "email"; 
 //$fields{"Phone"} = "Phone"; 
 //$fields{"list"} = "Mailing List"; 
 $fields{"message"} = "message"; 
 
 $body = "We have received the following information:\n\n"; 
 
 foreach($fields as $a => $b){ 	
     $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); 
} 
 
$headers2 = "From: noreply@sga.com"; 
$subject2 = "Thank you for contacting us"; 
$autoreply = "Thank you for contacting us. Somebody will get back to you as soon as possible, usualy within 48 hours. If you have any more questions, please consult our website at sga.depaul.com";
 
if($from == '') {
     print "You have not entered an email, please go back and try again";
} else { 
     if($name == '') {
         print "You have not entered a name, please go back and try again";
     } else { 
         //$send = mail($to, $subject, $body, $headers); 
         $send2 = mail($from, $subject2, $autoreply, $headers2); 
        /* if($send) {
             header( "Location: http://www.YourDomain.com/thankyou.html" );
         } else {
             print "We encountered an error sending your mail, please notify webmaster@YourCompany.com";
         } */
         $result = array("success" => true);
         echo json_encode($result);
     }
}
?> 