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
var imageId = "[imageId]";

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
main_inner_div.setAttribute("id", "main-inner"); 

// Header div start ---
var main_inner_div_header = document.createElement("div");
main_inner_div_header.setAttribute("id", "main-inner-header");

var main_inner_div_title_h2 = document.createElement("h2");
main_inner_div_title_h2.setAttribute("id", "header-title");

var main_inner_div_title_text = document.createTextNode(title);

main_inner_div_title_h2.appendChild(main_inner_div_title_text);
main_inner_div_header.appendChild(main_inner_div_title_h2);
// Header div end ----


// Inner div start ---
var main_inner_image_div = document.createElement("div");
main_inner_image_div.setAttribute("id", "main-inner-image");

var main_inner_image = document.createElement("img");
main_inner_image.setAttribute("width", "100%");
main_inner_image.setAttribute("src", imageId);

main_inner_image_div.appendChild(main_inner_image);
// Inner div end ---

// footer div start ---
var main_inner_div_footer = document.createElement("div");
main_inner_div_footer.setAttribute("id", "main-inner-footer");

var main_inner_div_desc_p = document.createElement("p");
main_inner_div_desc_p.setAttribute("id", "desc-p");

var main_inner_div_desc_text = document.createTextNode(desc);
main_inner_div_desc_p.appendChild(main_inner_div_desc_text);

main_inner_div_footer.appendChild(main_inner_div_desc_p);
// footer div end ---

// outer footer div start ---
var main_inner_footer_bottom - document.createElement("div");
main_inner_footer_bottom.setAttribute("id", "main-inner-footer-bottom");

var sel_inner_ul = document.createElement("ul");
sel_inner_ul.setAttribute("id", "sel-inner-ul");

var li_one = document.createElement("li");
var li_two = document.createElement("li");
var i_heart = document.createElement("i");
var i_share = document.createElement("i");

i_heart.setAttribute("class", "fa fa-heart");
i_share.setAttribute("class", "fa fa-share-alt");
i_share.setAttribute("onclick", "generateEmbed()");

li_one.appendChild(i_heart);
li_two.appendChild(i_share);

sel_inner_ul.appendChild(li_one);
sel_inner_ul.appendChild(li_two);

main_inner_footer_bottom.appendChild(sel_inner_ul);
// outer footer div end ---


// Adding all the children to the main div
main_inner_div.appendChild(main_inner_div_header);
main_inner_div.appendChild(main_inner_image_div);
main_inner_div.appendChild(main_inner_div_footer);
main_inner_div.appendChild(main_inner_footer_bottom);
