/* javascript for the form in the modal */

var toggle_country=0;
 function update_country(str)
 {
  if(str.toLowerCase() != "none")
  {
	$('#country').fadeIn('slow');
	toggle_country=1;
    return;
  }
  else if(toggle_country==1)
  {
   $('#country').fadeOut('slow');
	toggle_deg=0;
   $('#catalog').fadeOut('slow');
	toggle_deg=0;
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;
	
	document.getElementById('country_value').value="NONE";  	
	document.getElementById('catalog_value').value="NONE";  	
    return;
  }
 }
 
 var toggle_catalog=0;
 function update_catalog(str)
 {
  if(str.toLowerCase() != "none")
  {
	$('#catalog').fadeIn('slow');
	toggle_catalog=1;
    return;
  }
  else if(toggle_catalog==1)
  {
   $('#catalog').fadeOut('slow');
	toggle_deg=0;  
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;
	
	document.getElementById('catalog_value').value="";  
    return;
  }
 }
 
 var toggle_items=0;
 var to_delete;
 
 function update_items(str)
 {
  if(str.toLowerCase() != "none")
  {
	$('#subscribed_items').fadeIn('slow');
	toggle_items=1;
    return;
  }
  else if(toggle_items==1)
  {
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;

	to_delete = document.getElemetById('subcribed_items');
	
    return;
  }
 }