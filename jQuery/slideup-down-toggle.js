
#-----------HTML------------#
<head>
<script src="scripts/script.js"></script>
</head>

<body>
<h2 id="toggleclick">Click here!</h2>
<p id="hiddencontent">You've uncovered secret text :D</p>
</body>

#-----------CSS------------#

#hiddencontent {display: none;}

#-----------JS------------#

$ (function() {
    $('#toggleclick').click(function() {
        $('#hiddencontent').slideToggle();

    });
});

//slide commands: slideUp / slideDown / slideToggle(x,y) where c -s the time of the action in miliseconds and y can be a callback function 
//e.g. .slideToggle(300) or .slideToggle(300,callback)

//Example with Callback function:

$ (function() {
    $('#toggleclick').click(function() {
        $('#hiddencontent').slideToggle(300, callback);

    });
});

window.i = 0;
function callback() {
++i;
console.log('toggle activated: '+ i + ' times');
}

#----Specifics for Django----#

HTML: like to your js file using: src="{% static 'js/script.js' %}"