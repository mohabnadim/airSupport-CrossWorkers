// $(document).ready(function() {

          
   
//             $('#sidebar-left').mouseleave(function(e)  {
//                 $("#sidebar-left").toggleClass("show", false); 
//                 $('#sidebar-left').toggleClass('menuDisplayed', false);
                
//                 e.stopPropagation();

//             });


//             $(document).on('click','#main-content',function(e){
//                 $("#sidebar-left").toggleClass("show", false); 
                    
//                 $("#sidebar-left").toggleClass("menuDisplayed", false); 
//                 e.stopPropagation();
//             });
//  });

 $(document).ready(function() {

    // open rightside tab on hover & push icon
    $(document).on('click','.js-menu_toggle.closed',function(e){

        $(this).removeClass('closed').addClass('opened');

      });
  
          // menu icon animation open

          $(document).on('click','.js-menu_toggle.closed',function(e){

            $(this).removeClass('closed').addClass('opened');
            e.preventDefault(); 
            $("#wrapper").toggleClass("menuDisplayed", true);
            $("#table-icon").toggleClass("menuDisplayed", true); 
            $("#right-tabs").toggleClass("open", true); 
  
          });
      
              // menu icon animation Close
  
          $(document).on('click','.js-menu_toggle.opened',function(e){
  
            $(this).removeClass('opened').addClass('closed');
            $("#wrapper").toggleClass("menuDisplayed", false);
            $("#table-icon").toggleClass("menuDisplayed", false); 
            $("#right-tabs").toggleClass("open", false); 
            e.stopPropagation();
            
  
          });


         
   
});

   
