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
cgm.common.saveLayout = function(layout) {
    if (cgm.common.isChrome()) {
        localStorage["layout"] = JSON.stringify(layout);
    } else {
        window.localStorage.setItem("layout", JSON.stringify(layout));
        console.log('Saved layout');
    }
}

cgm.common.loadLayout = function() {
    var o = {};
    if (cgm.common.isChrome()) {
        if (localStorage["layout"])
            o = JSON.parse(localStorage["layout"]);
    } else {
        if (window.localStorage.getItem("layout")) {
            o = JSON.parse(window.localStorage.getItem("layout"));
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