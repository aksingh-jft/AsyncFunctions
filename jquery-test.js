$(function(){
  $('.container-fluid').show();
  fetchData()
})


async function fetchData(){
  const data = await $.ajax({
    url: `http://localhost:3000/emps`,
    type: 'GET'
  })
  showInConsole(data)  
}
$('#salary').on('keypress', function(e){
  console.log(this.value)
  if(this.value.toString().length > Number($(this).attr('maxlength')) -1){
    return false
  }
  if(e.originalEvent.keyCode >= 49 && e.originalEvent.keyCode <=58 ){
    return true
  }else{
    return false
  }
})
