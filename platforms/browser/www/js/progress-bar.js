var myApp = new Framework7();
var $$ = Dom7;
 
$$('.demo-progressbar-inline .button').on('click', function () {
    var progress = $$(this).attr('data-progress');
    var progressbar = $$('.demo-progressbar-inline .progressbar');
    myApp.setProgressbar(progressbar, progress);
});
$$('.demo-progressbar-load-hide .button').on('click', function () {
    var container = $$('.demo-progressbar-load-hide p:first-child');
    if (container.children('.progressbar').length) return; //don't run all this if there is a current progressbar loading
 
    myApp.showProgressbar(container, 0);
 
    // Simluate Loading Something
    var progress = 0;
    function simulateLoading() {
        setTimeout(function () {
            var progressBefore = progress;
            progress += Math.random() * 20;
            myApp.setProgressbar(container, progress);
            if (progressBefore < 100) {
                simulateLoading(); //keep "loading"
            }
            else myApp.hideProgressbar(container); //hide
        }, Math.random() * 200 + 200);
    }
    simulateLoading();
});
$$('.demo-progressbar-overlay .button').on('click', function () {
    // Add Directly To Body
    var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
 
    myApp.showProgressbar(container, 0);
 
    // Simluate Loading Something
    var progress = 0;
    function simulateLoading() {
        setTimeout(function () {
            var progressBefore = progress;
            progress += Math.random() * 20;
            myApp.setProgressbar(container, progress);
            if (progressBefore < 100) {
                simulateLoading(); //keep "loading"
            }
            else myApp.hideProgressbar(container); //hide
        }, Math.random() * 200 + 200);
    }
    simulateLoading();
});
$$('.demo-progressbar-infinite-overlay .button').on('click', function () {
    // Add Directly To Body
    var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container);
    setTimeout(function () {
        myApp.hideProgressbar();
    }, 3000);
});
$$('.demo-progressbar-infinite-multi-overlay .button').on('click', function () {
    var container = $$('body');
    if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
    myApp.showProgressbar(container, 'multi');
    setTimeout(function () {
        myApp.hideProgressbar();
    }, 3000);
});