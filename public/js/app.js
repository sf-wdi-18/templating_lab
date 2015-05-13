// on page load
$(function(){

  // problem1("footer", "Nathan Allen")
  // problem2("footer", 2015)
  // problem3("h1 small", "Git in muh belluh!")
  // problem4()
  problem5("h1", "http://media1.giphy.com/media/GsZDu04MCYEg/100.gif")
  //problem6()


  
  var myData = {name: "Nathan", list: ["hello", "world"]}
  var tmpl_str = $("#tmpl-loop-example").html();
  var compile = _.template(tmpl_str); // returns a function!
  var html_str = compile(myData);
  $("body").html(html_str)


});

// // // // // // //

function problem5(targetEl, gif_url){
  var tmpl_str = "<img src='<%= url %>'>";
  var compile = _.template(tmpl_str); // returns a function!
  var html_str = compile({url: gif_url});
  $(targetEl).prepend(html_str);
}

function problem4(){
  var tmpl_str = "<p><%= whatevs %></p>"
  var compile = _.template(tmpl_str); // returns a function!
  var html_str = compile({whatevs: "Hello!"})
  console.log(html_str) // "<p>Hello!</p>"
}

function problem6(targetId, templateId, foodname){
  // Our goal is to create a list of foods
  // We already have a list (ul) in our html, but we need to populate it with items (li)
  // Create a new template with an id of "tmpl-food-item"
  // grab the template's html
  // use underscore to add the name of the food to the list item
  // add the new html to the targrt ul
}

var foods7 = ["Sushiritto", "Green Eggs & Ham", "Crayfish", "Foie Gras", "Taco", "Kale"];
function problem7(targetId, templateId, foods){
  // Using your solution to #6 and a loop,
  // can you append each food item from the foods list above to the ul?
}


var foods8 =[
  {id: 0, name: "Sushiritto", yumminess: "quite"},
  {id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
  {id: 2, name: "Crayfish", yumminess: "depending"},
  {id: 3, name: "Foie Gras", yumminess: "omg"},
  {id: 4, name: "Kale", yumminess: "meh"}
];

function problem8(targetId, templateId, first_food){
  // Using your solution to #6, wihthout making major changes,
  // can you render just the first item, "Sushiritto", in your list?
}

function problem1(targetEl, name){
  $(targetEl).text("Created by " + name);
}

function problem2(targetEl, year){
  $(targetEl).append("<small>" + year + "</small>")
}

function problem3(targetEl, tagline){
    var old_html = document.querySelector(targetEl).outerHTML
    console.log(old_html)
    $(targetEl).text(tagline)
}