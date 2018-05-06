

//toggling right sidebar   
$(document).ready(function() {

    // open rightside tab on click & push tabs

    $(document).on('click','.js-menu_toggle.closed',function(e){

           $(this).removeClass('closed').addClass('opened');
            e.preventDefault(); 
            $("#wrapper").toggleClass("menuDisplayed", true);
            $("#table-icon").toggleClass("menuDisplayed", true); 
            $("#right-tabs").toggleClass("open", true); 
  
    });
      
    //  Close rightside tab on click & put tabs back to default
  
    $(document).on('click','.js-menu_toggle.opened',function(e){
  
            $(this).removeClass('opened').addClass('closed');
            $("#wrapper").toggleClass("menuDisplayed", false);
            $("#table-icon").toggleClass("menuDisplayed", false); 
            $("#right-tabs").toggleClass("open", false); 
            e.stopPropagation();
            
  
    });


         
   
});

//Expanding right Side Tab
$(document).ready(function() {

  // Expand rightside tab on click to full width

  $(document).on('click','.open_flights',function(e){
   
   
         $(".js-menu_toggle.opened").removeClass('opened').addClass('closed');
         $("#wrapper").toggleClass("menuDisplayed", false);
         $("#table-icon").toggleClass("menuDisplayed", false); 
         $("#right-tabs").toggleClass("open", false); 
          e.preventDefault(); 
          $("#wrapper").toggleClass("menuExpanded", true);
           
          $("#collapse-button").toggleClass("Expanded", true); 
          

  });
    
  //  collapse rightside tab on click 

  $(document).on('click','.Expanded',function(e){

          $(".open_flights").removeClass('expanded').addClass('minimized');
          $("#wrapper").toggleClass("menuExpanded", false);
          $("#table-icon").toggleClass("menuExpanded", false); 
          $("#right-tabs").toggleClass("Expanded", false); 
          $("#collapse-button").toggleClass("Expanded", false); 
          
          e.stopPropagation();
          

  });


       
 
});   
