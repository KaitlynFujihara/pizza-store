//business logic

//create constructor for custom pizza order
function Custom (size, veggies, meats) {
  this.size = size;
  this.veggies = [];
  this.meats = [];
}

//when size is selected return a certain value that relates to price
Custom.prototype.sizeFunction = function(inputtedSize){
  if(this.size==="small"){
    return 10
  } else if (this.size==="medium"){
    return 12
  } else {
    return 14
  }
};

//add up cost of toppings in veggie array
Custom.prototype.veggieFunction = function(inputtedVeggies){
  return inputtedVeggies.length *= 2
};

//add up cost of toppings in meat array
Custom.prototype.meatFunction = function(inputtedMeats){
  return inputtedMeats.length *= 3
};

Custom.prototype.totalCost = function(){
  return this.meatFunction(inputtedMeats) + this.veggieFunction(inputtedVeggies) + this.sizeFunction(inputtedSize);
}

//user-interface logic
$(document).ready(function(){
  var inputtedVeggies = [];
  var inputtedMeats = [];

    $("input[class='veggie']").change(function(){
      var checked = $(this).val();
      if ($(this).is(':checked')){
        inputtedVeggies.push(checked);
      }
    });
    $("input[class='meat']").change(function(){
      var checked = $(this).val();
      if ($(this).is(':checked')){
        inputtedMeats.push(checked);
        }
      });

      $("#orderForm").submit(function(event){
        event.preventDefault();
        var inputtedSize = $("select#size").val();
        var newOrder = new Custom (inputtedSize, inputtedVeggies, inputtedMeats);

        $("#total").html(newOrder.totalCost());
    });
  });
