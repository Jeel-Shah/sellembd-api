/*
    We will manipulate a specific DOM elements ... let's see if it works
*/


/*
    ouuuu some beautiful javascript
    Songs listened to while coding (irrelevant but fun to document):

    1. Kanye West - Ultra Light Beam
    2.

*/

// Variable declarations
var json_object = '';

function makeCorsRequest(method, url){
    var xhr = new XMLHttpRequest();

    if("withCredentials" in xhr) {
        // Thank you Chrome/Firefox/Opera/Safari
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        // boooo, it's IE
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // CORS is not supported :(
        xhr = null;
    }

    return xhr;
}


function sendCorsRequest(){
    var url = "http://127.0.0.1:5000/api/";

    var xhr = makeCorsRequest('GET', url);

    if (!xhr) {
        alert('CORS not supported');
        return;
    }

    // Let's get that JSON
    xhr.onload = function() {
        json_text = xhr.responseText;

        json_object = JSON.parse(json_text).ytvideos;

    };


    xhr.onerror = function(){
        console.log('Whoops, something went wrong whiel making the request');
    };

    xhr.send();

}

sendCorsRequest();

// Let's grab the stylesheet
var head = document.head;
var style_link = document.createElement("link");

style_link.type = "text/css";
style_link.rel = "stylesheet";
style_link.href = "http://127.0.0.1:5000/api/render-style.css";

head.appendChild(style_link);

// DOM Insertion
var main_div = document.getElementById("sell0783");

var sub_div_one = document.createElement("div");
sub_div_one.setAttribute("id", "sell0783-inner-div");

var sub_div_two = document.createElement("div");
sub_div_two.setAttribute("id", "sell0783-inner-div");

var sub_div_three = document.createElement("div");
sub_div_three.setAttribute("id", "sell0783-inner-div");

main_div.appendChild(sub_div_one);
main_div.appendChild(sub_div_two);
main_div.appendChild(sub_div_three);
