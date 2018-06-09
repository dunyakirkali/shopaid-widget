// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Save the world!
// @author       You
// @include      https://www.bol.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var buttonId = "submitcheck_payment";
    var elementExists = document.querySelector('[data-bank-id]');

    if(elementExists) {
      console.log("HELL");
      elementExists.onclick = function(){
        console.log("YEAH");
        // post('http://localhost:3000', {name: 'Johnny Bravo'});
        return false;
      };
    }

    function post(path, params, method) {
        method = method || "post"; // Set method to post by default if not specified.

        // The rest of this code assumes you are not using a library.
        // It can be made less wordy if you use one.
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);

        for(var key in params) {
            if(params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }
})();
