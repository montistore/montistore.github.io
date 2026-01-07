//the buttons themselves
var navall = document.getElementById("all");
var navkitchen = document.getElementById("kitchen");
var navgarden = document.getElementById("garden");
var navhome = document.getElementById("home");
var navbooks = document.getElementById("books");

//categories
var categories = [all ,navkitchen, navgarden, navhome, navbooks];


//the classes of items
var itemskitchen = document.getElementsByClassName("kitchen");
var itemsgarden = document.getElementsByClassName("garden");
var itemshome = document.getElementsByClassName("home");
var itemsbooks = document.getElementsByClassName("books");

var arrayitem = [itemskitchen, itemsgarden, itemshome, itemsbooks];


//the search bar
var search = document.getElementById("search");

titleclass = document.getElementsByClassName("title");




//if navall is clicked
navall.onclick = function() {

    //returns the other buttons to normal
   for( var i = 0; i < categories.length; i++) {
    if(categories[i] !== navall) {
        categories[i].style.backgroundColor = "black";
        categories[i].style.color = "white";
    }
   }

    //changes background of selected button
    navall.style.backgroundColor = "rgb(164, 168, 219)";
    

    //shows all items
   for( var i = 0; i < arrayitem.length; i++) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "inline";
        }
   }
    
    
}


//if navkitchen is clicked
navkitchen.onclick = function() {

    //returns the other buttons to normal
   for( var i = 0; i < categories.length; i++) {
    if(categories[i] !== navkitchen) {
        categories[i].style.backgroundColor = "black";
        categories[i].style.color = "white";
    }
   }

    //changes background of selected button
    navkitchen.style.backgroundColor = "rgb(164, 168, 219)";
    

    //hides other items
   for( var i = 0; i < arrayitem.length; i++) {
    if(arrayitem[i] !== itemskitchen) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "none";
        }
    }
    else if(arrayitem[i] == itemskitchen) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "inline";
        }
    }
   }
    
    
}

//if navgarden is clicked
navgarden.onclick = function() {

    //returns other buttons to normal
   for( var i = 0; i < categories.length; i++) {
    if(categories[i] !== navgarden) {
        categories[i].style.backgroundColor = "black";
        categories[i].style.color = "white";
    }
   }

    //changes background of selected button
    navgarden.style.backgroundColor = "rgb(164, 168, 219)";
    


    //hides other items
   for( var i = 0; i < arrayitem.length; i++) {
    if(arrayitem[i] !== itemsgarden) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "none";
        }
    }
    else if(arrayitem[i] == itemsgarden) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "inline";
        }
    }
   }
    
}

//if navhome is clicked
navhome.onclick = function() {

    //returns other buttons to normal
   for( var i = 0; i < categories.length; i++) {
    if(categories[i] !== navhome) {
        categories[i].style.backgroundColor = "black";
        categories[i].style.color = "white";
    }
   }

    //changes background of selected button
    navhome.style.backgroundColor = "rgb(164, 168, 219)";
    

    //hides other items
   for( var i = 0; i < arrayitem.length; i++) {
    if(arrayitem[i] !== itemshome) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "none";
        }
    }
    else if(arrayitem[i] == itemshome) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "inline";
        }
    }
   }
    
}

//if navbooks is clicked
navbooks.onclick = function() {

    //returns other buttons to normal
   for( var i = 0; i < categories.length; i++) {
    if(categories[i] !== navbooks) {
        categories[i].style.backgroundColor = "black";
        categories[i].style.color = "white";
    }
   }

    //changes background of selected button
    navbooks.style.backgroundColor = "rgb(164, 168, 219)";
    

    //hides other items
   for( var i = 0; i < arrayitem.length; i++) {
    if(arrayitem[i] !== itemsbooks) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "none";
        }
    }
    else if(arrayitem[i] == itemsbooks) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "inline";
        }
    }
   }
    
}


var queryold = "";
var itemvisible = {};

//when the search bar is changed
search.oninput = function() {
    //shows all items
   for( var i = 0; i < arrayitem.length; i++) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            arrayitem[i][j].style.display = "inline";
        }
   }
    
    if (search.value.length > queryold.length) {

        console.log("increasing");
        queryold = search.value;

        for (var i = 0; i < titleclass.length; i++) {
            
            itemvisible[i] = false;

            for (var j = 0; j < 30; j++) {
                
                //console.log("i" + i);
                //console.log("j" + j);
                
            
                if (search.value.toLowerCase() == titleclass[i].innerHTML.substring(j, j + search.value.length).toLowerCase()) {
                    itemvisible[i] = true;
                    console.log("mogus");
                }
                
                else if (search.value == "") {
                        titleclass[i].parentElement.style.display = "inline";
                }
        
            }
            
            if (itemvisible[i] == true) {
                titleclass[i].parentElement.style.display = "inline";
            }
            else {
                titleclass[i].parentElement.style.display = "none";
            }
        }
        }

    else {
        console.log("decreasing");
        queryold = search.value;
    }
   
   //only shows items which match search query
   /*for( var i = 0; i < arrayitem.length; i++) {
        for( var j = 0; j < arrayitem[i].length; j++) {
            if (search.value == arrayitem[i][j].substring(0, search.length)) {
                arrayitem[i][j].style.display = "none";
            }
        }
    }*/
    
}

//the paragraph expansion
var items = document.getElementsByClassName("item");
var itemid = document.getElementById("item");
var para = document.getElementsByClassName("description");
//var item = document.getElementById("item");
//var para = document.getElementsByClassName("description");
var descriptionexpanded = false;

/*for (var i = 0; i < item.length; i++) {
    itemid.onclick = function() {
        console.log(i);
        console.log("thueatoh");
        if (descriptionexpanded == false) {
            para[i].style.overflow = "auto";
            descriptionexpanded = true;
            //console.log("mog");
        }
        else if (descriptionexpanded == true) {
            para[i].style.overflow = "hidden";
            descriptionexpanded = false;
            //console.log("chuc");
        }
        
    }
}*/