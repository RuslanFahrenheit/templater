'use strict';

class templater {
    run() {
        this.find();
        this.replace();
    }

    find() {
        this.btnNodes = document.getElementsByTagName('bootstrap_button');
    }

    replace() {
        let btnEl = this.btnNodes;

        for (let i = btnEl.length; i--;) {
            btnEl[i].outerHTML = '<button class="btn btn-default">Some Text</button>';
        }
    }
}

let Templater = new templater();