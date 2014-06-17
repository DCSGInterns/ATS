/* javascript for the form in the modal */

var toggle_country=0;
 function update_country(str)
 {

  if(str.toLowerCase() != "")
  {
	$('#country').fadeIn('slow');
	toggle_country=1;
    update_catalog("");
    return;
  }
  else if(toggle_country==1)
  {
   $('#country').fadeOut('slow');
	toggle_country=0;
   $('#catalog').fadeOut('slow');
	toggle_catalog=0;
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;
	
	document.getElementById('country_value').value="";  	
	document.getElementById('catalog_value').value="";  	
    return;
  }
 }
 
 var toggle_catalog=0;
 function update_catalog(str)
 {
  if(str.toLowerCase() != "")
  {
	$('#catalog').fadeIn('slow');
	toggle_catalog=1;
    update_items("");
    return;
  }
  else if(toggle_catalog==1)
  {
   $('#catalog').fadeOut('slow');
	toggle_catalog=0;  
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;
	
	document.getElementById('catalog_value').value="";  
    return;
  }
 }
 
 var toggle_items=0;
 function update_items(str)
 {
  if(str.toLowerCase() != "")
  {
	$('#subscribed_items').fadeIn('slow');
	toggle_items=1;
    return;
  }
  else if(toggle_items==1)
  {
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;
    return;
  }
 }
 
 
 function destroy_data()
 {
  document.getElementById('region_value').value="";  	
  document.getElementById('country_value').value="";  	
  document.getElementById('catalog_value').value="";

  $('#country').fadeOut('slow');
	toggle_country=0;
   $('#catalog').fadeOut('slow');
	toggle_catalog=0;
   $('#subscribed_items').fadeOut('slow');
	toggle_items=0;

 }