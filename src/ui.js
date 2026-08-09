export function setText(id, text) {

    const element =
        document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}


export function setButtonState(
    id,
    enabled
) {

    const button =
        document.getElementById(id);

    if (button) {
        button.disabled = !enabled;
    }
}


export function setScreenMessage(
    title,
    message
) {

    const screen =
        document.getElementById("boot-message");

    if (!screen) return;

    screen.innerHTML = `
        <div class="boot-icon">⚡</div>

        <h2>${title}</h2>

        <p>${message}</p>
    `;
}
