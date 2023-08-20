const blob = _('.blob');

window.addEventListener('pointermove', (e) => {
    blob.animate(
        {
            left: `${ e.clientX }px`,
            top: `${ e.clientY }px`
        },
        { duration: 3500, fill: 'forwards' }
    );
});

function _(selector) {
    return document.querySelector(selector);
}
