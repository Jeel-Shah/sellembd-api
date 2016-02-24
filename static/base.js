/*
    We will manipulate a specific DOM elements ... let's see if it works
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
        console.log('Whoops, something went wrong while making the request');
    };

    xhr.send();

}

sendCorsRequest();


// This id will be changed dynamically depending on the random number passed through

var main_div_id = "[main_div_id]";

var desc = "[desc]";
var title = "[title]";
var youtubeID = "[youtubeId]";
var pageId = "[pageId]";

var main_div = document.getElementById(main_div_id);

// Let's grab the stylesheet
var head = document.head;
var style_link = document.createElement("link");

style_link.type = "text/css";
style_link.rel = "stylesheet";
style_link.href = "http://127.0.0.1:5000/api/" + main_div_id + ".css";

head.appendChild(style_link); 

/*
  main_inner_div
  +----------+
  |          |
  | +------+ |
  | |  (1) | | (1) inner div
  | |      | |
  | |      | |
  | +------+ |
  |          |
  +----------+


*/

var main_inner_div = document.createElement("div");

var main_inner_div_title = document.createElement("div");
var main_inner_div_title_p = document.createElement("p");
var main_inner_div_title_text = document.createTextNode(title);

var main_inner_div_center = document.createElement("div");

var main_inner_div_desc = document.createElement("div");
var main_inner_div_desc_p = document.createElement("p");
var main_inner_div_desc_text = document.createTextNode(desc);

main_inner_div.setAttribute("id","sell0783-main");

main_inner_div_title.setAttribute("id", "sell0783-title");
main_inner_div_center.setAttribute("id", "sell0783-center");
main_inner_div_desc.setAttribute("id", "sell0783-desc");

main_inner_div_title_p.appendChild(main_inner_div_title_text);
main_inner_div_title.appendChild(main_inner_div_title_p);

main_inner_div_desc_p.appendChild(main_inner_div_desc_text);
main_inner_div_desc.appendChild(main_inner_div_desc_p);

main_inner_div.appendChild(main_inner_div_title);
main_inner_div.appendChild(main_inner_div_center);
main_inner_div.appendChild(main_inner_div_desc);

main_div.appendChild(main_inner_div);
