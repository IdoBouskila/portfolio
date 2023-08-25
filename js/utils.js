export function splitElements(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        const elementWords = element.innerText.split(' ');
      
        element.innerHTML = elementWords.map((word) => {
            const chars = word.split('');
      
            return `<span class='word'>${ chars.map(char => `<span class='char'>${ char }</span>`).join('') }</span>`;
        })
        .join(' ');
    });
}

export function _(selector) {
    return document.querySelector(selector);
}