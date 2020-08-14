var addBreaks = function(id, text) {
    var list = text.split("\n");
    var el = document.getElementById(id);
    el.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        if (i === 0 || i === list.length-1) {
            var singleEl = document.createElement("span");
        } else {
            var singleEl = document.createElement("div");
        }
        el.style.backgroundColor = "lightgray";
        el.style.width = "100%";
        singleEl.className = "code";
        singleEl.textContent = list[i];
        el.appendChild(singleEl);
    }
}

addBreaks("code-1", "<html>\n    <head>\n    </head>\n\n    <body>\n    </body>\n</html>");