$(document).ready(function(){
    $('.btn-background').on('click', function () {
        let color = $(this).data('value');
        $('.body-text').css('background', color);
    
    });
     
    $('#linehigh').on('change', function () {
        let value = $(this).val();
        $('.body-text').css('lineHeight', value);
        
    
    });
    $('#align').on('change', function () {
        let value = $(this).val();
        $('.body-text').css('text-align', value);
     
    
    });
     
    let divtxt = $('.text');
  
    $('.search-plus').click(function() {
    let curSize = divtxt.css('fontSize');
    let newSize = parseInt(curSize.replace("px", "")) + 1;
    $(divtxt).css("fontSize", newSize + "px");
    });
   
    $('.search-minus').click(function() {
    let curSize = divtxt.css('fontSize');
    let newSize = parseInt(curSize.replace("px", "")) - 1;
    $(divtxt).css("fontSize", newSize + "px");
    })
});




