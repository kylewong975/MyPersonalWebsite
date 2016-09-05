<?php
if(isset($_POST['submit']))
{
	$field_name = $_POST['contact_name'];
	$field_email = $_POST['contact_email'];
	$field_message = $_POST['contact_message'];

	$mail_to = 'kyle.wong975@gmail.com';
	$subject = 'Message from a site visitor '.$field_name;

	$body_message = 'From: '.$field_name."\n";
	$body_message .= 'E-mail: '.$field_email."\n";
	$body_message .= 'Message: '.$field_message;

	$headers = 'From: '.$field_email."\r\n";
	$headers .= 'Reply-To: '.$field_email."\r\n";

	$mail_status = mail($mail_to, $subject, $body_message, $headers);

	if ($mail_status) { ?>
		<script language="javascript" type="text/javascript">
			alert('Thank you for sending me an email! I will contact you shortly.');
			window.location = 'http://kylewong.me/#contact';
		</script>
	<?php
	}
	else { ?>
		<script language="javascript" type="text/javascript">
			alert('Message failed. Double check the boxes you filled out, or directly e-mail me at kyle.wong975@gmail.com.');
			window.location = 'http://kylewong.me/#contact';
		</script>
<?php
	}
}
?>