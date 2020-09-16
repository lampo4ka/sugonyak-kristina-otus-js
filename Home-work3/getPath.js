function getPath(element) {

    let parents = getParentsSelector(element);
    parents.push(getElementAttributes(element));
    let selectorElement = parents.join(' ');
    if(isSelectorUnique(selectorElement)) {
        console.log(`Уникальный селектор элемента: ${selectorElement}`)
    } else {
        console.log('Что-то пошло не так');
    }

    function getParentsSelector(element) {
        let parents = [];
        while(element.parentElement) {
            element = element.parentElement;
            parents.push(element.tagName);
        }
        parents.reverse();
        return parents;

    }

    function getElementAttributes(element) {
        let attributes = [];
        for (let attributeName of element.getAttributeNames()) {
            if(attributeName === 'id') {
                let attributeIdValue = '#' + element.getAttribute(attributeName);
                attributes.push(attributeIdValue);
            } else if (attributeName === 'class') {
                let attributeClassValue = element.getAttribute(attributeName);
                let classValue = attributeClassValue.replace(/^\b|\s/g,".");
                attributes.push(classValue);
            } else if (attributeName) {
                let attributeValue = element.getAttribute(attributeName);
                let value = '[' + attributeName + '=' + "'" + attributeValue + "'" + ']';
                attributes.push(value);
            }
        }

        return attributes.join('');
    }

    function isSelectorUnique(selector) {
        let uniqueElement = document.querySelectorAll(selector);
        return (uniqueElement.length === 1);
    }
}

// запустить в консоли. Выведет селектор последнего элемента
getPath($0);
