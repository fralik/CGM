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
var cgmMessages = {
    WRONG_URL_MSG : "Wrong url!", 
    SEND_LINKS: "cgm: Send links!", 
    RELOAD: "cgm: reload!",
    PORT_REQUEST: "cgm: send a port", 
    PORT_TO_POPUP: "Here is a port to the currently focused tab",
    LAYOUT: "layout",
    MESSAGES: "messages",
    PORT_NAME: "injectedPopup",
};

var i18n = {};

i18n.messages = {
    'informer_wrong_url' :
    {
        'default' : 'Sorry! This extension works only on Google&#0153; Gmail&#0153; page. Open Google&#0153; Gmail&#0153; and try this extension once again.',
        
        'ru' : 'Это расширение работает только на странице сервиса Google&#0153; Gmail&#0153;. Откройте страницу Google&#0153; Gmail&#0153; и повторите попытку использования этого расширения.',
        
        'es' : '¡Lo siento! Esta extensión sólo funciona en las  páginas Google&#0153 y Gmail&#0153. Hay que abrir Google&#0153 o Gmail&#0153 y intentarlo de nuevo.',
        
        'es-ES' : '¡Lo siento! Esta extensión sólo funciona en las  páginas Google&#0153 y Gmail&#0153. Hay que abrir Google&#0153 o Gmail&#0153 y intentarlo de nuevo.',
        
        'de' : 'Diese Erweiterung ist nur an der Google&#0153; Gmail&#0153; Seite verfügbar. Öffnen Sie die Google&#0153; Gmail&#0153; Seite und rufen Sie erneut die Erweiterung auf.'
    },
    'error_few_visible' :
    {
        'default' : 'Sorry, but you can not leave less than 4 items in the list with visible links. Please, rearrange the items and press Save again.',
        
        'ru' : 'К сожалению, вы не можете оставить меньше четырех видимых ссылок. Пожалуйста, задайте новую структуру и нажмите Сохранить еще раз.',
        
        'es' : '¡Lo siento! pero no se puede dejar menos de 4 elementos en la lista de enlaces visibles.',
        'es-ES' : '¡Lo siento! pero no se puede dejar menos de 4 elementos en la lista de enlaces visibles.',
        
        'de' : 'Leider dürfen Sie nicht weniger als 4 sichtbaren Links haben. Bitte, bearbeiten Sie die Liste und drücken Sie erneute Speichern'
    },
    'error_few_hidden' :
    {
        'default' : 'Sorry, but you can not leave less than 6 items in the list with hidden links. Please, rearrange the items and press Save again.',
        
        'ru' : 'К сожалению, вы не можете оставить меньше шести невидимых ссылок. Пожалуйста, задайте новую структуру и нажмите Сохранить еще раз.',
        
        'es' : '¡Lo siento! pero no se puede dejar menos de 6 enlaces invisibles.',
        'es-ES' : '¡Lo siento! pero no se puede dejar menos de 4 elementos en la lista de enlaces visibles.',
        
        'de' : 'Leider dürfen Sie nicht weniger als 6 unsichtbaren Links haben. Bitte, bearbeiten Sie die Liste und drücken Sie erneut Speichern.'
    },
    'popup_title' :
    {
        'default' : 'Customize menu',
        'ru': 'Изменить меню',
        'es' : 'Modificar el menú',
        'es-ES' : 'Modificar el menú',
        'de' : 'Das Menü bearbeiten'
    },
    'popup_usage_description' :
    {
        'default' : 'Drag items from one list to another. Press <a class="action save" href="#">Save</a> when you are done. Press <a href="#" class="action reset">Reset</a> to restore original Google&#0153; menu.',
        'ru' : 'Для изменения структуры меню перетащите элементы из одного списка в другой. Нажмите <a class="action save" href="#">Сохранить</a>, чтобы сохранить текущее расположение ссылок. Нажмите <a href="#" class="action reset">Сбросить</a>, чтобы вернуться к оригинальному меню от Google&#0153;.',
        
        'es' : 'Para modificar el menú arrastre los elementos de la primera lista al otra. Pulse <a class="action save" href="#">Guardar</a> cuando esté listo. Pulse <a href="#" class="action reset">Reinicio</a> para volver al menú original de Google&#0153;.',
        'es-ES' : 'Para modificar el menú arrastre los elementos de la primera lista al otra. Pulse <a class="action save" href="#">Guardar</a> cuando esté listo. Pulse <a href="#" class="action reset">Reinicio</a> para volver al menú original de Google&#0153;.',
        
        'de' : 'Um die Struktur zu ändern, ziehen Sie die Elemente aus einer Liste in die andere. Drücken Sie <a class="action save" href="#">Speichern</a>, um die neue Konfiguration zu speichern. Drücken Sie <a href="#" class="action reset">Abbrechen</a>, um zu der ursprunglichen Konfiguration zurückzukehren.'
    },
    'save_text' :
    {
        'default' : 'Save',
        'ru' : 'Сохранить',
        'es' : 'Guardar',
        'es-ES' : 'Guardar',
        'de' : 'Speichern'
    },
    'visible_list_text' :
    {
        'default' : 'Visible list:',
        'ru' : 'Видимые ссылки:',
        'es' : 'Enlaces visibles',
        'es-ES' : 'Enlaces visibles',
        'de' : 'Sichtbare Links:'
    },
    'hidden_list_text' :
    {
        'default' : 'Hidden list:',
        'ru' : 'Скрытые ссылки:',
        'es' : 'Enlaces invisibles',
        'es-ES' : 'Enlaces invisibles',
        'de' : 'Unsichtbare links:'
    },
    'donation_text' :
    {
        'default' : 'If you like this extension, please, consider a donation. It will encourage me for futher development.',
        'ru' : 'Если вам нравится это расширение, сделайте, пожалуйста, пожертвование. Ваша поддержка стимулирует мой интерес к дальнейшей разработке.',
        'es' : 'Si se gusta esta extensión ¿porque lo considerar una donación? Su apoyo se va a fomentar un mayor desarrollo.',
        'es-ES' : 'Si se gusta esta extensión ¿porque lo considerar una donación? Su apoyo se va a fomentar un mayor desarrollo.',
        'de' : 'Sollten Sie die Erweiterung für Sich nützlich finden, könnten Sie die weitere Entwicklung mit einer Spende unterstützen.'
    }
};

i18n.get = function(msg_id)
{
    var locale = window.navigator.language;
    //alert(locale);
    var msg = i18n.messages[msg_id];
    if (msg[locale] !== undefined)
        return msg[locale];
    else
        return msg['default'];
}

var cgm = {};
cgm.common = {};

cgm.common.isChrome = function() {
    if (typeof chrome === "undefined")
        return false;
    else
        return true;
}

// saves layout object in localStorage. Object must contain fields {action, visible, hidden}.
cgm.common.saveLayout = function(origin, layout) {
    var name = hex_md5(origin) + "layout";
    if (cgm.common.isChrome()) {
        localStorage[name] = JSON.stringify(layout);
    } else {
        window.localStorage.setItem(name, JSON.stringify(layout));
        console.log('Saved layout');
    }
}

cgm.common.loadLayout = function(origin) {
    var o = {};
    var name = hex_md5(origin) + "layout";
    if (cgm.common.isChrome()) {
        if (localStorage[name])
            o = JSON.parse(localStorage[name]);
    } else {
        if (window.localStorage.getItem(name)) {
            o = JSON.parse(window.localStorage.getItem(name));
            //console.log('got layout from localstorage:' + window.localStorage.getItem("layout"));
        }
    }
    
    return o;
}

cgm.common.resetLayout = function() {
    if (cgm.common.isChrome())
        localStorage["layout"] = [];
    else
        window.localStorage.removeItem("layout");
}

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
var hexcase=0;function hex_md5(a){return rstr2hex(rstr_md5(str2rstr_utf8(a)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function rstr_hmac_md5(c,f){var e=rstr2binl(c);if(e.length>16){e=binl_md5(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binl_md5(a.concat(rstr2binl(f)),512+f.length*8);return binl2rstr(binl_md5(d.concat(g),512+128))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binl(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(c%32)}return a}function binl2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(c%32))&255)}return a}function binl_md5(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=md5_ff(o,n,m,l,p[g+0],7,-680876936);l=md5_ff(l,o,n,m,p[g+1],12,-389564586);m=md5_ff(m,l,o,n,p[g+2],17,606105819);n=md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=md5_ff(o,n,m,l,p[g+4],7,-176418897);l=md5_ff(l,o,n,m,p[g+5],12,1200080426);m=md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=md5_ff(n,m,l,o,p[g+7],22,-45705983);o=md5_ff(o,n,m,l,p[g+8],7,1770035416);l=md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=md5_ff(m,l,o,n,p[g+10],17,-42063);n=md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=md5_ff(o,n,m,l,p[g+12],7,1804603682);l=md5_ff(l,o,n,m,p[g+13],12,-40341101);m=md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=md5_ff(n,m,l,o,p[g+15],22,1236535329);o=md5_gg(o,n,m,l,p[g+1],5,-165796510);l=md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=md5_gg(m,l,o,n,p[g+11],14,643717713);n=md5_gg(n,m,l,o,p[g+0],20,-373897302);o=md5_gg(o,n,m,l,p[g+5],5,-701558691);l=md5_gg(l,o,n,m,p[g+10],9,38016083);m=md5_gg(m,l,o,n,p[g+15],14,-660478335);n=md5_gg(n,m,l,o,p[g+4],20,-405537848);o=md5_gg(o,n,m,l,p[g+9],5,568446438);l=md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=md5_gg(m,l,o,n,p[g+3],14,-187363961);n=md5_gg(n,m,l,o,p[g+8],20,1163531501);o=md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=md5_gg(l,o,n,m,p[g+2],9,-51403784);m=md5_gg(m,l,o,n,p[g+7],14,1735328473);n=md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=md5_hh(o,n,m,l,p[g+5],4,-378558);l=md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=md5_hh(m,l,o,n,p[g+11],16,1839030562);n=md5_hh(n,m,l,o,p[g+14],23,-35309556);o=md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=md5_hh(l,o,n,m,p[g+4],11,1272893353);m=md5_hh(m,l,o,n,p[g+7],16,-155497632);n=md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=md5_hh(o,n,m,l,p[g+13],4,681279174);l=md5_hh(l,o,n,m,p[g+0],11,-358537222);m=md5_hh(m,l,o,n,p[g+3],16,-722521979);n=md5_hh(n,m,l,o,p[g+6],23,76029189);o=md5_hh(o,n,m,l,p[g+9],4,-640364487);l=md5_hh(l,o,n,m,p[g+12],11,-421815835);m=md5_hh(m,l,o,n,p[g+15],16,530742520);n=md5_hh(n,m,l,o,p[g+2],23,-995338651);o=md5_ii(o,n,m,l,p[g+0],6,-198630844);l=md5_ii(l,o,n,m,p[g+7],10,1126891415);m=md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=md5_ii(n,m,l,o,p[g+5],21,-57434055);o=md5_ii(o,n,m,l,p[g+12],6,1700485571);l=md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=md5_ii(m,l,o,n,p[g+10],15,-1051523);n=md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=md5_ii(o,n,m,l,p[g+8],6,1873313359);l=md5_ii(l,o,n,m,p[g+15],10,-30611744);m=md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=md5_ii(n,m,l,o,p[g+13],21,1309151649);o=md5_ii(o,n,m,l,p[g+4],6,-145523070);l=md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=md5_ii(m,l,o,n,p[g+2],15,718787259);n=md5_ii(n,m,l,o,p[g+9],21,-343485551);o=safe_add(o,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(o,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};