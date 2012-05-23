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
 *
 */
var cgm = {};

cgm = {
    // OL element that contains Google links (visible and hidden)
    googleLinksContainer: null,
    
    // OL element that contains hidden Google links
    hiddenLinksContainer: null,
    
    // a copy of googleLinksContainer. Used to find original links by ID
    copiedLinksContainer: null,
    
    // communication messages
    cgmMessages: null,
    
    // Opera communication channel
    operaChannel: null,
    
    // CSS classes of a link to current service (GMail)
    currentServiceClass: null,
    
    // name of the service, which is currently openned
    currentServiceName: null,
    
    // class name of a visible LI element
    visibleLiClass: null,
    
    // class name of a visible A element
    visibleAClass: null,
    
    // class name of a hidden LI element
    hiddenLiClass: null,
    
    // class name of a hidden A element
    hiddenAClass: null,
    
    // class names of visible spans, that are used to construct visible link
    spanClassNames: [],
    
    // points to More link. Used as a reference element during layout construction
    moreLiElement: null,
    
    // LI element that contains horizontal line, used in More menu
    separatorLine: null,
    
    // if set contains layout, which has been sent to us by a background process
    currentLayout: null,

    // debug mode
    debug: false,
    
    gbarErr: 0,
    frameErr: 0,
    makeLayoutErr: 0,
    // possible number of errors before we cancel the event
    numErrors: 64,
    isValid: false,

    dlog: function(msg) {
        if (cgm.debug)
            console.log(msg);
    },
    
    error: function(msg) {
        if (cgm.isChrome())
            console.error(msg);
        else
            console.log(msg);
    },

    getLinkById: function(id) {
        // TODO: make hash map instead of the array
        var link;
        var links = cgm.copiedLinksContainer.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            if (links[i].id != id)
                continue;
            
            link = links[i];
            break;
        }
        return link;
    },
    
    // Returns text of the link regardless whether it is visible or hidden
    //  link is a <A> tag that contains link
    getLinkText: function(link) {
        var linkText = "";
        var spans = link.getElementsByTagName('span');
        if (spans && spans.length > 0) {
            linkText = spans[spans.length-1].innerHTML;
        } else {
            linkText = link.innerHTML;
        }
        
        return linkText;
    },
    
    makeVisible: function(id) {
        var link = cgm.getLinkById(id);
        if (!link) {
            cgm.error('CGM, injected, makeVisible: no element with the ID '+id);
            return null;
        }
        
        var text = cgm.getLinkText(link);
        
        var linkClone = link.cloneNode(true);
        if (text == cgm.currentServiceName)
            linkClone.className = cgm.currentServiceClass;
        else
            linkClone.className = cgm.visibleAClass;
            
        linkClone.innerHTML = '<span class="' + cgm.spanClassNames[0] + '"></span><span class="' + cgm.spanClassNames[1] + '">' + text + '</span>';
        
        var liElement = cgm.curDocument.createElement("li");
        liElement.className = cgm.visibleLiClass;
        liElement.appendChild(linkClone);
        
        return liElement;
    },

    makeHidden: function(id) {
        var link = cgm.getLinkById(id);
        if (!link) {
            console.log('CGM, injected, makeHidden: no element with the ID '+id);
            return null;
        }
            
        var text = cgm.getLinkText(link);

        var linkClone = link.cloneNode(true);
        linkClone.className = cgm.hiddenAClass;
            
        linkClone.innerHTML = text;
        
        var liElement = cgm.curDocument.createElement("li");
        liElement.className = cgm.hiddenLiClass;
        liElement.appendChild(linkClone);
        
        return liElement;
    },
    
    /* 
     * Modifies appearance of links to Google services according to
     * layout parameter.
     *
     * layout               Object. Contains links layout.
     * layout.visible       Array. Each element is an object with fields: id, text.
     * layout.hidden        Array. Each element is an object with fields: id, text.
     */
    makeLayout: function(layout) {
        if (layout == undefined || !(layout.hasOwnProperty('visible')) || !(layout.hasOwnProperty('hidden')) ) {
            //cgm.dlog('layout is undefined');
            return ;
        }
            
        if (!cgm.isValid) {
            //cgm.dlog('cgm is invalid');
            cgm.init();
            cgm.makeLayoutErr++;
            if (cgm.makeLayoutErr == cgm.numErrors) {
                cgm.makeLayoutErr = 0;
                return ;
            } else {
                return setTimeout(function() {cgm.makeLayout(layout)}, 200);
            }
        }
        
        //cgm.dlog('cgm is valid');
        
        var visibleLiElements = new Array();
        var hiddenLiElements = new Array();
        
        for (var i=0; i < layout.visible.length; i++) {
            var elem = cgm.makeVisible(layout.visible[i].id);
            if (elem)
                visibleLiElements.push(elem);
        }
        
        if (visibleLiElements.length > 0) {
            while (cgm.googleLinksContainer.firstChild.firstChild && cgm.googleLinksContainer.firstChild.firstChild.id != 'gbztm') {
                cgm.googleLinksContainer.removeChild(cgm.googleLinksContainer.firstChild);
            }
            var referenceNode = cgm.googleLinksContainer.firstChild;
            for (i = 0; i < visibleLiElements.length; i++) {
                cgm.googleLinksContainer.insertBefore(visibleLiElements[i], referenceNode);
            }
        }
        
        for (i=0; i < layout.hidden.length; i++) {
            var elem = cgm.makeHidden(layout.hidden[i].id);
            if (elem)
                hiddenLiElements.push(elem);
        }
        if (hiddenLiElements.length > 0) {
            while (1) {
                var check = cgm.hiddenLinksContainer.firstChild.firstChild;
                var check_id = check.getAttribute('id');
                if (check.nodeName != 'A') {
                    cgm.hiddenLinksContainer.removeChild(cgm.hiddenLinksContainer.firstChild);
                    continue;
                }
                if (check_id === null || check_id == "")
                    break;
                
                cgm.hiddenLinksContainer.removeChild(cgm.hiddenLinksContainer.firstChild);
            }
            var referenceNode = cgm.hiddenLinksContainer.firstChild;
            for (i = 0; i < hiddenLiElements.length; i++) {
                cgm.hiddenLinksContainer.insertBefore(hiddenLiElements[i], referenceNode);
                if (i == 2) {
                    cgm.hiddenLinksContainer.insertBefore(cgm.separatorLine.cloneNode(true), referenceNode);
                }
            }
            cgm.hiddenLinksContainer.insertBefore(cgm.separatorLine.cloneNode(true), referenceNode);
        }
    },
};

cgm.isChrome = function() {
    if (typeof chrome === "undefined")
        return false;
    else
        return true;
}

cgm.init = function() {
    var gbar, frame;
    
    if (window.location.hostname.indexOf('.google.') == -1) {
        cgm.dlog('CGM, injected, init: we are not on any Google page, we are on ' + window.location.hostname);
        //alert(window.location.hostname);
        return ;
    }
    
    if (cgm.isValid)
    {
        //cgm.dlog('CGM is valid!');
        return;
    }
        
    // NB! Google tends to change the ID from time to time.
    var googleBarID = 'gbz';
    
    gbar = document.getElementById(googleBarID);
    if (gbar == null) {
        var len = window.frames.length;
        for (var i = 0; i < len; i++) {
            if (cgm.isChrome()) {
                cgm.curDocument = window.frames[i].contentDocument;
            } else {
                cgm.curDocument = window.frames[i].document;
            }
            
            gbar = cgm.curDocument.getElementById(googleBarID);
            if (gbar != null) {
                cgm.dlog('Found gbar, errors:' + cgm.frameErr);
                break;
            }        
        }
        
        if (gbar == null) {
            cgm.frameErr++;
            if (cgm.frameErr == cgm.numErrors) {
                console.log("CGM: Failed to find Google bar. Quiting.");
                cgm.frameErr = 0;
                return;
            } else
                return cgm.setTimeout();            
        }
    }
    else {
        // We are on some page with Google service, but not on Gmail
        cgm.curDocument = document;
    }
    
    if (gbar == null) {
        //cgm.dlog('CGM, injected, init: no gbar');
        //return false;
        cgm.gbarErr++;
        if (cgm.gbarErr == cgm.numErrors) {
            cgm.gbarErr = 0;
            cgm.dlog('gbarErr is too big, quiting');
            return;
        } else
            return cgm.setTimeout();
    }
    
    for (var i=0; i < gbar.childNodes.length; i++) {
        var child = gbar.childNodes[i];
        if (child.className == 'gbtc') {
            cgm.googleLinksContainer = child;
            break;
        }
    }
    
    if (cgm.googleLinksContainer == null) {
        cgm.dlog('CGM, injected, init: no googleLinksContainer');
        return false;
    }
    
    cgm.copiedLinksContainer = cgm.googleLinksContainer.cloneNode(true);

    cgm.visibleLiClass = cgm.googleLinksContainer.firstChild.className;
    links = cgm.googleLinksContainer.firstChild.getElementsByTagName('a');
    
    cgm.spanClassNames = new Array();
    for (i = 0; i < cgm.googleLinksContainer.childNodes.length; i++) {
        var liElement = cgm.googleLinksContainer.childNodes[i];
        var aLink = liElement.firstChild;
        if (aLink.className.indexOf(' ') > -1) { // link to the current service has several classes
            cgm.currentServiceClass = aLink.className;
            cgm.currentServiceName = cgm.getLinkText(aLink);
        } else {
            if (cgm.visibleAClass == null) {
                cgm.visibleAClass = aLink.className;
                spans = aLink.getElementsByTagName('span');
                for (j = 0; j < spans.length; j++) {
                    cgm.spanClassNames.push(spans[j].className);
                }
            }
        }
        if (aLink.id != 'gbztm') // 'gbztm' stays for More link
            continue;
            
        cgm.moreLiElement = liElement;
        cgm.hiddenLinksContainer = liElement.childNodes[1].firstChild.firstChild;        
    }
    
    cgm.hiddenLiClass = cgm.hiddenLinksContainer.childNodes[0].className;
    cgm.hiddenAClass = cgm.hiddenLinksContainer.childNodes[0].firstChild.className;
    //alert(hiddenLiClass);
    
    cgm.separatorLine = cgm.curDocument.createElement("div");
    cgm.separatorLine.className = cgm.hiddenLiClass;
    tmpDiv = cgm.curDocument.createElement("div");
    tmpDiv.className = "gbmt gbmh";
    cgm.separatorLine.appendChild(tmpDiv);
    
    //return true;
    cgm.isValid = true;

    if (cgm.isChrome()) {
        //cgm.dlog('We are in Chrome');
        
        // // request common messages from the background
        // chrome.extension.sendRequest({action: "sendMessages"}, function(response) {
            // cgm.cgmMessages = response.data;
        // });

        // in Chrome we load common.js in the web page namespace
        cgm.cgmMessages = cgmMessages;
        
        chrome.extension.onConnect.addListener(function(port) {
            console.assert(port.name == "injectedPopup");
            port.onMessage.addListener(function(msg) {
                if (msg.action == cgm.cgmMessages.SEND_LINKS) {
                    cgm.sendLinks(port);
                } else if (msg.action == cgm.cgmMessages.LAYOUT) {
                    // got new layout from popup
                    cgm.makeLayout(msg);
                } else if (msg.action == cgm.cgmMessages.RELOAD) {
                    window.location.reload();
                }
            });
        });
        
        // request layout from the background
        chrome.extension.sendRequest({action: "getLayout"}, function(response) {
            //cgm.dlog('CGM, injected, init: got layout from the background, ' + response);
            cgm.makeLayout(response);
        });
    }
    cgm.dlog('CGM, injected, init: finished');
}

cgm.sendLinks = function(port) {
    if (cgm.isChrome() && !port) {
        cgm.dlog('CGM, injected, sendLinks: no port');
        return;
    }
    
    if (!cgm.isValid) {
        cgm.error('CGM, injected, sendLinks: CGM have not been properly initialized');
    }
        
    if (cgm.googleLinksContainer == null) {
        cgm.error('CGM, injected, sendLinks: googleLinksContainer is not set');
        return;
    }
    
    //cgm.dlog('CGM, injected, sendLinks: must send links');
    
    var visibleItems = [];
    var hiddenItems = [];
    var moreLinksList;
    for (var i=0; i < cgm.googleLinksContainer.childNodes.length; i++) {
        var liElement = cgm.googleLinksContainer.childNodes[i];
        var a_link = liElement.firstChild;
        
        // 'gbztm' stays for More link
        if (a_link.id != 'gbztm') {
            visibleItems.push({id: a_link.id, text: cgm.getLinkText(a_link)});
        } else {
            moreLinksList = liElement.childNodes[1].firstChild.firstChild;
        }
    }
    
    var sepLine = 0;
    for (i=0; i < moreLinksList.childNodes.length; i++) {
        var liElement = moreLinksList.childNodes[i];
        var a_link = liElement.firstChild;
        if (a_link.className.indexOf('gbmh') > -1) {
            sepLine++;
            if (sepLine == 2) {
                break; // break after second horizontal line, which is located before "Even more" link
            }
            continue;
        }
        //hiddenItems += a_link.id + ',' + cgm.getLinkText(a_link) + ';';
        hiddenItems.push({id: a_link.id, text: cgm.getLinkText(a_link)});
    }
    
    var objToSend = {action: cgm.cgmMessages.LAYOUT, visible: visibleItems, hidden: hiddenItems};
    
    if (cgm.isChrome()) {
        port.postMessage(objToSend);
    } else {
        if (!cgm.operaChannel) {
            cgm.error('CGM, injected, sendLinks: operaChannel is not defined');
            return ;
        }
        
        cgm.operaChannel.port1.postMessage(objToSend);
        //cgm.dlog('CGM, injected, sendLinks: sent links to popup in Opera');
    }
}

cgm.operaPopupHandler = function(event) {
    var msg = event.data;
    if (msg.action == cgm.cgmMessages.SEND_LINKS) {
        //cgm.dlog('CGM, injected, Opera handler: must send links');
        cgm.sendLinks({});
    } else if (msg.action == cgm.cgmMessages.LAYOUT) {
        //cgm.dlog('CGM, injected, Opera handler: must create layout');
        cgm.makeLayout(msg);
    } else if (msg.action == cgm.cgmMessages.RELOAD) {
        window.location.reload();
    } else {
        cgm.dlog('CGM, injected, operaPopupHandler: unknown event, msg: ' + msg.action);
    }
}

cgm.setTimeout = function() {
    setTimeout(cgm.init, 100);
};
    
cgm.setTimeout();

if (typeof opera !== "undefined") {
    opera.extension.onmessage = function(event) {
        if (typeof event.data !== "object") {
            cgm.dlog('CGM, injected, Opera onmessage: event.data is not an object! ' + event.data);
            return ;
        }
        
        if (event.data.action == "messages") {
            //cgm.dlog('CGM, injected, operaOnmessage: got messages from the background');
            if (!cgm.cgmMessages)
                cgm.cgmMessages = event.data.messages;
        } else if (event.data.action == cgm.cgmMessages.PORT_REQUEST) {
            //cgm.dlog('CGM, injected, Opera onMessage: got port request');
            
            //background = event.source; // in case you need to send anything to background, just do background.postMessage()
            cgm.operaChannel = new MessageChannel();

            event.ports[0].postMessage({action: cgm.cgmMessages.PORT_TO_POPUP}, [cgm.operaChannel.port2]);

            cgm.operaChannel.port1.onmessage = cgm.operaPopupHandler;
            //cgm.dlog('CGM, injected, Opera onMessage: set communication channel');
        }
        else if (event.data.action == cgm.cgmMessages.LAYOUT) {
            cgm.makeLayout(event.data);
            
            //cgm.dlog('onmessage, injected, got layout from the background');
        } else {
            //cgm.dlog('CGM, injected, Opera onMessage: got unknown event ' + event.data + ', action:' + event.data.action);
        }
    }
}
