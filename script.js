const canvas = document.getElementById("clockCanvas");
const ctx = canvas.getContext("2d");

function drawClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let bgColor = "#fff0f5"; 
    const theme = document.body.className;
    if (theme === "theme-purple") bgColor = "#f9f0ff";
    else if (theme === "theme-rainbow") bgColor = "rgba(255,255,255,0.2)";

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "36px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "pink";
    ctx.shadowBlur = 10;

    if (theme === "theme-pink") ctx.fillStyle = "#ff69b4";
    else if (theme === "theme-purple") ctx.fillStyle = "#8a2be2";
    else if (theme === "theme-rainbow") ctx.fillStyle = "#ffffff";

    ctx.fillText(timeString, canvas.width / 2, canvas.height / 2);
}

setInterval(drawClock, 1000);
drawClock();

document.getElementById("pink").onclick = () => {
    document.body.className = "theme-pink";
    drawClock(); 
};

document.getElementById("purple").onclick = () => {
    document.body.className = "theme-purple";
    drawClock();
};

document.getElementById("rainbow").onclick = () => {
    document.body.className = "theme-rainbow";
    drawClock();
};
