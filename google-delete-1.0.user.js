// ==UserScript==
// @name         Google delete 1.1
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  A script that deletes oldest emails first until something triggers it to stop.
// @author       You
// @match        https://mail.google.com/mail/*

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.top === window.self) {
        console.log("script connected")

        setTimeout(()=> {
            const stopNum = parseInt(prompt("What email number do you want to stop at?"))
            setInterval(()=> {
                const numEmailEl = document.querySelector(".Dj").children[0].children[0]
                let numEmail;
                if (numEmailEl){
                    numEmail = numEmailEl.textContent
                }
                const numArr = numEmail.split("")
                let intEmailCount;
                if (numArr.includes(",")) {
                    const idx = numArr.indexOf(",")
                    numArr.splice(idx, 1)
                    const newStrEmail = numArr.join("")
                    intEmailCount = parseInt(newStrEmail)
                } else {
                    intEmailCount = parseInt(numEmail)
                }
                console.log(intEmailCount)

                if (intEmailCount > stopNum) {
                    console.log("email count greater than ", stopNum)
                    const cb = document.querySelector(".T-Jo")
                    if (cb){
                        cb.click()
                    }

                    const element = document.querySelector('.T-I.J-J5-Ji.nX.T-I-ax7.T-I-Js-Gs.mA');
                    if (element) {
                        const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
                        const mouseUpEvent = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
                        const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

                        element.dispatchEvent(mouseDownEvent);
                        element.dispatchEvent(mouseUpEvent);
                        element.dispatchEvent(clickEvent);
                    }

                }
            }, 4000)

        }, 10000)
    }
})();