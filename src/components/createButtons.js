export const createButtons = (buttonData) => {
    const btn = document.createElement('button');
    btn.innerHTML = buttonData.text;
    btn.id = buttonData.id;

    return btn;
}