
    const sizeElement = document.getElementById('sizeElement');
    const style = getComputedStyle(sizeElement);
    const sizeHTML = style.fontSize;
    let size = parseFloat(sizeHTML)     //parseInt(sizeHTML.split("px")[0]);
    console.log(size);
    console.log(window.innerWidth)
    export { size, sizeElement };


