// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

myApp.onPageInit('PAGENAME', function (page) {  

$$.get('http://www.mobile.fasapoin.com/login', {}, function (data) {        
        $$('#PAGEPlaceHolder').html(data);          
    });     
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

myApp.onPageInit('login', function (page) {
    // Do something here for "about" page


})
myApp.onPageInit('register', function (page) {
    // Do something here for "about" page


})


$$('.form-to-data').on('click', function(){
  var formData = myApp.formToData('#my-form');
  alert(JSON.stringify(formData));
}); 

/*$$('.get-storage-data').on('click', function() {
  var storedData = myApp.formGetData('my-form2');
  if(storedData) {
    alert(JSON.stringify(storedData));
  }
  else {
    alert('There is no stored data for this form yet. Try to change any field')
  }
});*/

 

// $$(document).on('pageInit', '.page[data-page="about"]', function (e) {
//     // Following code will be executed for page with data-page attribute equal to "about"
//     myApp.alert('Here comes About page');
// })







// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    // if (page.name === 'about') {
    //     // Following code will be executed for page with data-page attribute equal to "about"
    //     myApp.alert('Here comes About page');
    // }
})

// Option 2. Using live 'pageInit' event handlers for each page
// $$(document).on('pageInit', '.page[data-page="about"]', function (e) {
//     // Following code will be executed for page with data-page attribute equal to "about"
//     myApp.alert('Here comes About page');
// })





