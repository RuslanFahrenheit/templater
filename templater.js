'use strict';

class Templater {
    constructor() {
        this.tagsArray = {};
    }

    run() {
        for (let tag in this.tagsArray) {
            let elements = document.getElementsByTagName(tag);

            for (let i = 0; i < elements.length; i++) {
                elements[0].outerHTML = this.tagsArray[tag];
            }
        }
    }

    addTag(tag, template) {
        this.tagsArray[tag] = template;
    }
}

let templater = new Templater();