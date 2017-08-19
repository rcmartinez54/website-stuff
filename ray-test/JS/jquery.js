/*/$('#target').click(function() {
  $('#output').html(function(i, val) { return val*1+1});
});
/*/
$(document).ready(function(){
  //var counter = $('#TextBox').val();
  $('#AddButton').click( function() {
    var counter = $('#TextBox').val();
    counter++ ;
    $('#TextBox').val(counter);
  });
});
