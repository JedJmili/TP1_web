const ColorSelector=document.getElementById("color");
const SizeSelector=document.getElementById("size");
const FontSelector=document.getElementById("font");
const input=document.getElementById("input");
const output=document.getElementById("output");
function ChangeColor()
{
    output.style.color=ColorSelector.value;
}
function ChangeSize()
{
    output.style.fontSize=SizeSelector.value + "px";
}
function ChangeFont()
{
    output.style.fontFamily=FontSelector.value;
}
function UpdateText() {
    output.textContent = input.value;
}
ColorSelector.addEventListener("input",ChangeColor);
SizeSelector.addEventListener("input",ChangeSize);
FontSelector.addEventListener("change",ChangeFont);
input.addEventListener("input", UpdateText);