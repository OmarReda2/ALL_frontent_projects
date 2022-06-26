$('.smalImg').click(function(e){
  let x = $(this).attr('src');
  $('#bigImg').attr('src', x)
})