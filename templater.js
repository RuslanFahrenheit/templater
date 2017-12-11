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
                element.outerHTML = this.render(this.tags[tag], element);
            }, this);
        }
    }

    addTag(tag, template) {
        this.tags[tag] = template;

    }

    render(template, element) {
        let attr;
        let reg = /{{(.*?)}}/ig;

        while ((attr = reg.exec(template)) !== null) {
            if (attr[1] === 'html') {
                template = template.replace(attr[0], element.innerHTML);
            } else {
                //template = template.replace(attr[0], element.getAttribute(attr[1]));
            }
        }

        return template;
    }
}

let templater = new Templater();