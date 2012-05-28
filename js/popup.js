/**
 * Copyright (c) Vadim Frolov, 2011-2012.
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
 */
var toDo = Array();
// points to the communication port
var popupPort = null;
var origin = ""; // URL to which the menu is appplied

function createLinks(layout) {
    if (layout == undefined || !(layout.hasOwnProperty('visible')) || !(layout.hasOwnProperty('hidden')) )
    {
        console.error('CGM, popup, createLinks: layout is undefined');
        return ;
    }

    //console.log('CGM, popup, createLinks');
    parseLinksAndAdd(layout.visible, "visible");
    parseLinksAndAdd(layout.hidden, "hidden");
    $('#list_area').css('visibility', 'visible');
}

function parseLinksAndAdd(links, containerId) {
    var className;

    if (containerId.indexOf("visible") > -1)
        className = "ui-state-default";
    else
        className = "ui-state-highlight";

    var selector = "#" + containerId;
    
    //console.log('popup.js, parseLinksAndAdd: containerId ' + containerId + ', links length ' + links.length);
    for (var i=0; i < links.length; i++) {
        $(selector).append('<li class="' + className + '" id="' + links[i].id + '">' + links[i].text + '</li>');
    }
}

$(document).ready(function() {
    if (cgm.common.isChrome()) {
        chrome.tabs.getSelected(null, function(tab) {
            origin = tab.url;
            saveOrigin(tab.url);
        });
    } else {
        origin = opera.extension.bgProcess.getUrl();
    }
    
    // <-- yandex metrika code
    (function(w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter10577218 = new Ya.Metrika({id:10577218, enableAll: true, trackHash:true});
            }
            catch(e) { }
        });
    })(window, "yandex_metrika_callbacks");
    // --> yandex metrika code
    
    $( "#visible, #hidden" ).sortable({
        connectWith: ".connectedSortable",
        cursor: "move",
    }).disableSelection();

    $("ul, li").disableSelection();

    //console.log('toDo length: ' + toDo.length);
    for (var i=0; i < toDo.length; i++) {
        if (toDo[i] == cgmMessages.WRONG_URL_MSG) {
            //console.log('Got Wrong_url in toDO');
            $("#informer").html(i18n.get("informer_wrong_url"));
            $("#informer").css('font-size','16px');
            $(".demo").css('visibility', 'hidden');
            $(".demo").css('display', 'none');
        }
    }
    
    $('#list_area').css('visibility', 'hidden');

    $('#popup_usage_description').html(i18n.get('popup_usage_description'));
    $('.save').html(i18n.get('save_text'));
    $('#visible_list_text').html(i18n.get('visible_list_text'));
    $('#hidden_list_text').html(i18n.get('hidden_list_text'));
    $('#donations').html(i18n.get('donation_text'));

    $(".save").click(function() {
        if ($('#visible li').length < 4) {
            $('#informer').text(i18n.get('error_few_visible'));
            $("#informer").css('color','red');
            return ;
        }
        if ($('#hidden li').length < 6) {
            $('#informer').text(i18n.get('error_few_hidden'));
            $("#informer").css('color','red');
            return ;
        }

        $('#informer').css('visibility', 'hidden');
        var visibleItems = [];
        var hiddenItems = [];
        $("#visible li").each(function() {
            visibleItems.push({id: $(this).attr('id'), text: $(this).text()});
        });
        $("#hidden li").each(function() {
            hiddenItems.push({id: $(this).attr('id'), text: $(this).text()});
        });

        sendMessage({action: "layout", visible: visibleItems, hidden: hiddenItems});

        cgm.common.saveLayout(origin, {action: "layout", visible: visibleItems, hidden: hiddenItems});
        
        window.close();        
    });

    $('.reset').click(function() {
        cgm.common.resetLayout();
        sendMessage({action: cgmMessages.RELOAD});
        window.close();
    });

    if (cgm.common.isChrome()) {
        chrome.tabs.getSelected(null, function(tab) {
            var port = chrome.tabs.connect(tab.id, {name: cgmMessages.PORT_NAME});
            savePort(port);
            port.onMessage.addListener(injectListener);
            port.postMessage({action: cgmMessages.SEND_LINKS});
        });
    }
});

// Chrome and Opera differ in msg format for listener. Opera
// sets actual data in .data property.
function injectListener(msg) {
    var actualMsg = msg;
    if (typeof opera !== "undefined") {
        //console.log('popup.js, injectListener: got message with data ' + msg.data + ', action is ' + msg.data.action);
        actualMsg = msg.data;
    }
    
    //console.log('CGM, popup, injectListener: action in message is: ' + actualMsg.action);
    if (actualMsg.action == cgmMessages.LAYOUT) {
        createLinks(actualMsg);
    }
}

if (typeof opera !== "undefined") {
    opera.extension.onmessage = function(event) {
        //console.log('Popup got message: ' + event.data.action);

        //alert(event.data.action == cgmMessages.PORT_TO_POPUP);

        if (event.data.action == cgmMessages.PORT_TO_POPUP) {
            //console.log('We are in popup: ' + event.source);
            if(event.ports.length > 0 ) {
                popupPort = event.ports[0];
                popupPort.onmessage = injectListener;
            }

            // always get links from the injected. This is done in case user switched 
            // the language elsewhere.
            // Then we'll get proper text from injected.
            sendMessage({action: cgmMessages.SEND_LINKS});
        } else if (event.data.action == cgmMessages.WRONG_URL_MSG) {
            toDo.push(cgmMessages.WRONG_URL_MSG);
            //console.log('CGM, popup, Opera onmessage: received wrong_url, put it into toDo');
        }
    }
}

// Saves communication port for further use. This function is used in Chrome and is called from 
// a nested function.
function savePort(port) {
    popupPort = port;
}

// Save URL of a current tab. This function is used in Chrome and is called from a nested 
// function.
function saveOrigin(url) {
    origiv = url;
}

function sendMessage(message) {
    if (popupPort) {
        popupPort.postMessage(message);
        return true;
    }
    return false;
}
