window.addEventListener("load", init, false);

function init() {
    var showBtn = document.getElementById('showButton');
    
    if ('showButton' in widget.preferences) {
        var show = true;

        if (typeof(widget.preferences.getItem('showButton')) == 'string')
            show = (widget.preferences.getItem('showButton') == 'true');
        else
            show = widget.preferences.getItem('showButton');
        
        showBtn.checked = show;
    } else {
        showBtn.checked = true;
        widget.preferences.showButton = showBtn.checked;
    }
    
    showBtn.addEventListener('change', function() {
        widget.preferences.showButton = showBtn.checked;
        
    }, false);
    
    // populate the name nad author
    setText('widget-name', widget.name);
    setText('widget-author', widget.author);
}

// set the textContent of an element
function setText(id, txt) {
    var e = document.getElementById(id);
    if(e) {
        e.textContent = txt;
    }
}
