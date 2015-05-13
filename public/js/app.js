// on page load
$(function(){

  problem1("footer", "Nathan Allen")
  problem2("footer", 2015)
  problem3("h1 small", "Git in muh belluh!")
  problem4()
  problem5("h1", "http://media1.giphy.com/media/GsZDu04MCYEg/100.gif")
  problem6("ul#food-ul", "tmpl-food-item", "Thanksgiving Squash with Marshmellows")
  // problem7("ul#food-ul", "tmpl-food-item", foods7)
  problem8("ul#food-ul", "tmpl-food-item", foods8)
  grandFinale("page-wrapper", "tmpl-loop-example", myData)

});

// // // // // // //


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

function problem4(){
  var tmpl_str = "<p><%= whatevs %></p>"
  var compile = _.template(tmpl_str); // returns a function!
  var html_str = compile({whatevs: "Hello!"})
  console.log(html_str) // "<p>Hello!</p>"
}

function problem5(targetEl, gif_url){
  var tmpl_str = "<img src='<%= url %>'>";
  var compile = _.template(tmpl_str); // returns a function!
  var html_str = compile({url: gif_url});
  $(targetEl).prepend(html_str);
}

function problem6(targetId, templateId, food_name){
  var tmpl_str = $("#" + templateId).html();
  var compile = _.template(tmpl_str); // returns a function!
  var html_str = compile({name: food_name});
  $(targetId).append(html_str);
}

var foods7 = ["Sushiritto", "Green Eggs & Ham", "Crayfish", "Foie Gras", "Taco", "Kale"];
function problem7(targetId, templateId, foods){
  var tmpl_str = $("#" + templateId).html();
  var compile = _.template(tmpl_str); // returns a function!
  
  foods.forEach(function(food_name){
    var html_str = compile({name: food_name});
    $(targetId).append(html_str);
  })
}


var foods8 =[
  {id: 0, name: "Sushiritto", yumminess: "quite"},
  {id: 1, name: "Green Eggs & Ham", yumminess: "sure"},
  {id: 2, name: "Crayfish", yumminess: "depending"},
  {id: 3, name: "Foie Gras", yumminess: "omg"},
  {id: 4, name: "Kale", yumminess: "meh"}
];

function problem8(targetId, templateId, foods){
  var tmpl_str = $("#" + templateId).html();
  var compile = _.template(tmpl_str); // returns a function!
  
  foods.forEach(function(food){
    var html_str = compile(food);
    $(targetId).append(html_str);
  })
}

var myData = [
              {name: "Garbanzo", list: ["hello", "world!"]},
              {name: "Gizmo", list: ["hey"]},
              {name: "Goyle", list: ["Oy", "So...", "Wuhzah?"]}
             ];

function grandFinale(targetId, templateId, foods){
  var tmpl_str = $("#" + templateId).html();
  var compile = _.template(tmpl_str); // returns a function!
  
  foods.forEach(function(food){
    var html_str = compile(food);
    $("#" + targetId).append(html_str);
  })
}