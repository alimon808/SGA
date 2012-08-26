<?php

    $debug = true;
    
    function sendSuggestion($mail_to) {
        if ($_REQUEST['subject']==''){
            $result = array("success" => false, "error"=>"Subject required.");
            echo json_encode($result);
        }elseif ($_REQUEST['message']==''){
            $result = array("success" => false, "error"=>"Message required.");
            echo json_encode($result);
        } else {
            $subject = "Suggestion via Mobile App";
            $header = 'From: SGA Mobile <sga@depaul.edu>';
            if ($debug) {
                $headers .= 'Bcc: Adrian<adrian@ionfiniti.com>, Jorge<jorge.dominguez1992@yahoo.com>, Ali<alinawaz_leo@hotmail.com>' . "\r\n";
            }
            $body = "Form data via mobile app:\n\n";
            $body .= sprintf("Subject: %s\n", $_REQUEST['subject']);
            $body .= sprintf("Message: %s\n", $_REQUEST['message']);
            sendEmail($mail_to, $subject, $body, $header);
        }
    }
    //not implemented
    function sendRSVP() {
        
    }
    
    function sendGetInvolved($mail_to, $sender) {
        $subject = "Email via Mobile App";
        $header = 'From: SGA Mobile <sga@depaul.edu>';
        if ($debug) {
            $headers .= 'Bcc: Adrian<adrian@ionfiniti.com>, Jorge<jorge.dominguez1992@yahoo.com>, Ali<alinawaz_leo@hotmail.com>' . "\r\n";
        }
        $body = "Received the following information:\n\n";
        $body .= sprintf("Name: %s\n", $_REQUEST['name']);
        $body .= sprintf("Major: %s\n", $_REQUEST['major']);
        $body .= sprintf("Email: %s\n", $_REQUEST['email']);
        $body .= sprintf("Subject: %s\n", $_REQUEST['subject']);
        $body .= sprintf("Message: %s\n", $_REQUEST['message']);

        //send to sga
        sendEmail($mail_to, $subject, $body, $header);
    }
    
    function sendAutoReply() {
        $sender = $_REQUEST['email'];
        $name = $_REQUEST['name'];
        $header = "From: Do not reply <sga@depaul.edu>";
        $subject = "SGA Auto Reply";
        $body = sprintf("Greetings %s,\n\n", $name);
        $body .= "Thank you for contacting SGA.  Someone from SGA will respond ";
        $body .= "back to your e-mail shortly. \n\n";
        $body .= "Sincerely, \n";
        $body .= "SGA Team";
        
        //send to sender
        $send = mail($sender, $subject, $body, $header);
        if ($send) {
            $result = array("success" => true, "to"=>$to, "subject"=>$subject, "message"=>$message);
        } else {
            
        }
    }
    
    function sendEmail($to, $subject, $message, $header) {
        $send = mail($to, $subject, $message, $header); 
        //$send = false;
        if($send) {
            $result = array("success" => true, 
                            "message"=>"Thank you for contacting SGA. One of our officers will get back to you as soon as possible. ");
        } else {
            //print "We encountered an error sending your mail, please notify webmaster@YourCompany.com";
            $result = array("success" => false, "error"=>"Failed to send message to SGA.  Please contact at sga.depaul.edu if need assistance.  Thank you.");
        }
        
        echo json_encode($result);

    }
    
    function sendJSON($result) {
        echo json_encode($result);
    }
    
    $f = $_REQUEST['f'];
    
    if ($debug) {
        $mail_to = "Adrian<alimon808@gmail.com>, Adrian Limon<adrian@ionfiniti.com>";
        
    } else {
        $mail_to = "sga@depaul.edu";
    }
    
    
    if ($f==1) {  //get involved
       //check all required fields have been entered
       if ($_REQUEST['name'] == '') {
           $result = array("success" => false, "error"=>"Name is required.");
            sendJSON($result);
       } elseif ($_REQUEST['email'] == '' ) {
            $result = array("success" => false, "error"=>"Email address is required.");
            sendJSON($result);
        } elseif ($_REQUEST['subject'] ==  '') {
            $result = array("success" => false, "error"=>"Subject is required.");
            sendJSON($result);
        } elseif ($_REQUEST['message'] == '') {
            $result = array("success" => false, "error"=>"Message is required.");
            sendJSON($result);
        } else {
            sendGetInvolved($mail_to);
            sendAutoReply();
        }
    } elseif ($f == 2) {
       //suggestion form
       //check all required fields have been entered
        if ($_REQUEST['subject'] ==  '') {
            $result = array("success" => false, "error"=>"Subject is required.");
            sendJSON($result);
        } elseif ($_REQUEST['message'] == '') {
            $result = array("success" => false, "error"=>"Message is required.");
            sendJSON($result);
        } else {
            sendSuggestion($mail_to);
        }
    }
    
?> 