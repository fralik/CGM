window.addEventListener("load", init, false);

function init() {
    // <-- flattr code
    var s = document.createElement('script'), t = document.getElementsByTagName('script')[0];
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'http://api.flattr.com/js/0.6/load.js?mode=auto';
    t.parentNode.insertBefore(s, t);
    // --> flattr code
            
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
    
    setText('donations', i18n.get('donation_text'));
    setText('options_description', i18n.get('options_description'));
    setText('show_button_label', i18n.get('show_button_label'));
}

function setText(id, txt) {
    var e = document.getElementById(id);
    if (e) {
        e.textContent = txt;
    }
}
