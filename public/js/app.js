// on page load
$(function(){

  //problem1("footer", "YOUR NAME")
  //problem2()
  //problem3()
  //problem4()
  //problem5()
  //problem6()
  
});

// // // // // // //

function problem1(targetEl, name){
  // using an html string + jQuery
  // overwrite "Created by Jane Doe" in the footer
  // replace it with your name
}
function problem2(targetEl, year){
  // append "2015" to the footer inside a `small` tag
}
function problem3(targetEl, tagline){
    // console.log the html of the old tagline
    // change "Put it in my belly!" to "Get in my belly"
}

function problem4(){
  // now we're going to use underscore!
  // console.log("templateString:", "<p><%= YOUR_KEY ></p>")
  // Let's look at the docs: http://underscorejs.org/#template
  // console.log the interpolated html string returned by the `template` method
  // it should look like "<p>Hello!</p>"
}

function problem5(targetEl, gif_url){
  // Using underscore templating and the following gif
  // "http://media1.giphy.com/media/GsZDu04MCYEg/100.gif"
  // Create an img element and set its src attribute to the gif
  // Prepend the gif to the header.
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