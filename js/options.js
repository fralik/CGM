/**
 * Copyright (c) Vadim Frolov, 2011.
 * Contact: fralik@gmail.com
 *
 * GNU General Public License Usage
 * This file may be used under the terms of the GNU General
 * Public License version 3.0 as published by the Free Software Foundation
 * and appearing in the file LICENSE.GPL included in the packaging of this
 * file. Please review the following information to ensure the GNU General
 * Public License version 3.0 requirements will be met:
 * http://www.gnu.org/copyleft/gpl.html.
 *
 * Other Usage
 * Alternatively, this file may be used in accordance with the terms and
 * conditions contained in a signed written agreement between you and Vadim Frolov.
 *
 * This file provides objects and function that should be shared between all components of the extension.
 */

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
