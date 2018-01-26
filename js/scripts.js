//business logic

//create constructor for custom pizza order
function Custom (size, veggies, meats) {
  this.size = size;
  this.veggies = [];
  this.meats = [];
}

//when size is selected return a certain value that relates to price
Custom.prototype.size = function(){
  if(size==="small"){
    return 10
  } else if (size==="medium"){
    return 12
  } else {
    return 14
  }
}

//add up cost of toppings in array
Custom.prototype.veggies = function(){
  var veggies= veggiesChecked
  for(var i = 0; i<=veggies.length; i++)

}

//user-interface logic
$(document).ready(function(){
  $("input").each(function() {
    var veggiesChecked = [];
    var meatsChecked = []
    $("input[class='veggie']").change(function(){
      var checked = $(this).val();
      if ($(this).is(':checked')){
        veggiesChecked.push(checked);
      }
    });
    $("input[class='meat']").change(function(){
      var checked = $(this).val();
      if ($(this).is(':checked')){
        meatsChecked.push(checked);
        }
      });
  $("#orderForm").submit(function(event){
    event.preventDefault();
    console.log(veggiesChecked)
    console.log(meatsChecked)
    var inputtedSize =$("select#size").val();
    var inputtedVeggies =$("select.veggie").val();
    var inputtedMeats =$("select.meat").val();
    var newOrder = new Custom (inputtedSize, inputtedVeggies, inputtedMeats)
    });
  });
});
