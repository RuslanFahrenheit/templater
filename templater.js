'use strict';

class Templater {
    run() {
        const tags = this.find();

        this.replace(tags);
    }

    find() {
        let btnNodes = document.getElementsByTagName('bootstrap_button');
        return btnNodes;
    }

    replace(tags) {
        for (let i = tags.length; i--;) {
            tags[i].outerHTML = '<button class="btn btn-default">Some Text</button>';
        }
    }
}

let templater = new Templater();