<?php
    function sendSuggestion() {
        if ($_REQUEST['subject']==''){
            $result = array("success" => false, "error"=>"Subject required.");
            echo json_encode($result);
        }elseif ($_REQUEST['message']==''){
            $result = array("success" => false, "error"=>"Message required.");
            echo json_encode($result);
        } else {
            $to = 'alimon808@gmail.com';
            $subject = "Suggestion via Mobile App";
            $header = 'From: SGA Mobile <sga@depaul.edu>';
            $body = "Suggestion via mobile app:\n\n";
            $body .= sprintf("Subject: %s\n", $_REQUEST['subject']);
            $body .= sprintf("Message: %s\n", $_REQUEST['message']);
            sendEmail($to, $subject, $body, $header);
        }
    }

    function sendRSVP() {
        
    }
    
    function sendGetInvolved() {
        $to = 'alimon808@gmail.com';
        $subject = "Get Involved via Mobile App";
        $header = 'From: SGA Mobile <sga@depaul.edu>';
        $body = "Received the following information:\n\n";
        $body .= sprintf("Name: %s\n", $_REQUEST['name']);
        $body .= sprintf("Major: %s\n", $_REQUEST['major']);
        $body .= sprintf("Email: %s\n", $_REQUEST['email']);
        $body .= sprintf("Subject: %s\n", $_REQUEST['subject']);
        $body .= sprintf("Message: %s\n", $_REQUEST['message']);

        sendEmail($to, $subject, $body, $header);
    }
    
    function sendEmail($to, $subject, $message, $header) {
        $send = mail($to, $subject, $message, $header); 
        //$send = false;
        if($send) {
            //header( "Location: http://www.YourDomain.com/thankyou.html" );
            $result = array("success" => true, "to"=>$to, "subject"=>$subject, "message"=>$message);
        } else {
            //print "We encountered an error sending your mail, please notify webmaster@YourCompany.com";
            $result = array("success" => false, "error"=>"Failed to send message to SGA.  Please contact administrator at sga.depaul.edu.");
        }
        
        echo json_encode($result);

    }
    
    $f = $_REQUEST['f'];
    
    if ($f==1) {
       //get involved
       sendGetInvolved();
    } elseif ($f == 2) {
       //suggestion form
       sendSuggestion();
    } elseif ($f=='debug') {
        $result = array("success" => false, "error"=>"Debug Mode");
        echo json_encode($result);
    } else {
       $result = array("success" => false);
       echo json_encode($result);
    }
?> 