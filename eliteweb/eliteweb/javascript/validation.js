// JavaScript Document
function connect_mail(){ 
	if(document.connectfrm.name.value=='') {
			alert("Please Enter Name.");
			document.connectfrm.name.focus();
			return false;
	}
	var res2 = /^[a-zA-Z\-\.\ ]+$/;
		if (!document.connectfrm.name.value.match(res2))
		{
			alert("Please Enter Only Alphabets.");
			 document.connectfrm.name.focus();
			return false;
		}
	if(document.connectfrm.mob.value=='') {
		alert("Please Enter Mobile No.");
		document.connectfrm.mob.focus();
		return false;
	}
	var res3 = /^[0-9\-\.\ ]+$/;
		if (!document.connectfrm.mob.value.match(res3))
		{
			alert("Please Enter Only Numeric.");
			 document.connectfrm.mob.focus();
			return false;
		}
	if(document.connectfrm.email.value=='') {
		alert("Please Enter Email-id.");
		document.connectfrm.email.focus();
		return false;
	}
	var re = /^[0-9a-zA-Z\-\.\_]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z\-\.]+$/;
		if (!document.connectfrm.email.value.match(re))
		{
			alert("Please Enter a Valid Email-id ");
			 document.connectfrm.email.focus();
			return false;
		}
	if(document.connectfrm.message.value=='') {
		alert("Please Enter Message.");
		document.connectfrm.message.focus();
		return false;
	}
	document.connectfrm.submit();	
}

//---------------------Contact Mail---------------------

function connect_mails(){ 
	if(document.contact_frms.name.value=='') {
			alert("Please Enter Name.");
			document.contact_frms.name.focus();
			return false;
	}
	var res2 = /^[a-zA-Z\-\.\ ]+$/;
		if (!document.contact_frms.name.value.match(res2))
		{
			alert("Please Enter Only Alphabets.");
			 document.contact_frms.name.focus();
			return false;
		}
	if(document.contact_frms.mob.value=='') {
		alert("Please Enter Mobile No.");
		document.contact_frms.mob.focus();
		return false;
	}
	var res3 = /^[0-9\-\.\ ]+$/;
		if (!document.contact_frms.mob.value.match(res3))
		{
			alert("Please Enter Only Numeric.");
			 document.connectfrm.mob.focus();
			return false;
		}
	if(document.contact_frms.email.value=='') {
		alert("Please Enter Email-id.");
		document.contact_frms.email.focus();
		return false;
	}
	var re = /^[0-9a-zA-Z\-\.\_]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z\-\.]+$/;
		if (!document.contact_frms.email.value.match(re))
		{
			alert("Please Enter a Valid Email-id ");
			 document.contact_frms.email.focus();
			return false;
		}
	if(document.contact_frms.message.value=='') {
		alert("Please Enter Message.");
		document.contact_frms.message.focus();
		return false;
	}
	document.contact_frms.submit();	
}