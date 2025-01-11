// ==UserScript==
// @name         Google delete
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A script that deletes oldest emails first until something triggers it to stop.
// @author       You
// @match        https://mail.google.com/mail/*

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("script connected")
    setTimeout(()=> {
        setInterval(()=> {
            const numEmail = document.querySelector(".Dj").children[0].children[0].textContent
            const numArr = numEmail.split("")
            if (numArr.includes(",")) {
                const idx = numArr.indexOf(",")
                numArr.splice(idx, 1)
                const newStrEmail = numArr.join("")
                const intEmailCount = parseInt(newStrEmail)
                if (intEmailCount > 60000) {
                    console.log("email count greater than 60000")
                    const cb = document.querySelector(".T-Jo")
                    cb.click()
                    setTimeout(()=> {
                        const element = document.querySelector('.T-I.J-J5-Ji.nX.T-I-ax7.T-I-Js-Gs.mA');
                        if (element) {
                            const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
                            const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
                            const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

                            element.dispatchEvent(mouseDownEvent);
                            element.dispatchEvent(mouseUpEvent);
                            element.dispatchEvent(clickEvent);
                        }

                    },2000)
                }
            }
        },8000)
    }, 10000)

})();