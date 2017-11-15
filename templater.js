'use strict';

class Templater {
    constructor() {
        this.tags = {};
    }

    run() {
        for (let tag in this.tags) {
            let nodes = document.getElementsByTagName(tag);
            let elements = Array.from(nodes);

            elements.forEach(function(element) {
                element.outerHTML = this.tags[tag];
            }, this);
        }
    }

    addTag(tag, template) {
        this.tags[tag] = template;
    }
}

let templater = new Templater();