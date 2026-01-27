<?php
if($_POST) {

    // Recipient
    $to      = "airbagucentras@gmail.com";

    // Subject
    $subject = "Inquiry - AIRBAG CENTRAS";

    // Sender
    $from = 'info@webmaster.com';
    $fromName = 'Airbag Centras';

    // Message Value
    $cname        = $_POST['cname'];
    $cemail       = $_POST['cemail'];
    $ctelephone   = $_POST['ctelephone'];
    $cmessage     = $_POST['cmessage'];
    
    // Message Content
    $htmlContent = '<p><strong>Jūsų Vardas : </strong>'.$cname.'</p>';
    $htmlContent .= '<p><strong>El. pašto adresas : </strong>'.$cemail.'</p>';
    $htmlContent .= '<p><strong>Telefono Nr. : </strong>'.$ctelephone.'</p>';
    $htmlContent .= '<p><strong>Žinutė : </strong>'.$cmessage.'</p>';  
    $bodyContent .= $htmlContent;

    // Header for sender info
    $headers = "From: ".$fromName." <".$from.">";

    // Set content-type header for sending HTML email
    $headers .= "\r\n". "MIME-Version: 1.0";
    $headers .= "\r\n". "Content-type:text/html;charset=UTF-8";

    $body .= $bodyContent;

    // Send email
    $mailsend = mail($to,$subject,$body,$headers); 

    // If mail sent
    if($mailsend) {
        $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$cname .' Dėkojame už jūsų el. laišką, netrukus susisieksime su jumis.'));
        die($output);
    }else{
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'El. pašto nepavyko išsiųsti! Patikrinkite savo PHP pašto konfigūraciją.'));
        die($output);
    }
    
}
?>
