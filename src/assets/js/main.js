$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})



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

   
