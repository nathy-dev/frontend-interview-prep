function traverse(node) {
    if(node === null) return;

    if(isMatch(node, selector)) result.push(node);

    for(let child of node.children) {
        traverse(child);
    }
}

function isMatch(element, selector) {
    return element.tagName === selector.toUpperCase() || element.classList.contains(selector);
}

function myQuerySelectorAll(selector) {
    const result = [];
    traverse(document.documentElement);
    return result;
}