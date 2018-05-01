function doSkillWordRain(index, words) {

    let c = document.getElementById("sc-" + index);
    let ctx = c.getContext("2d");
    let canvas = $('#sc-' + index);


    c.width = canvas.width();
    c.height = canvas.height();

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
    var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

//drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#e67e22"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            //a random chinese character to print
            var text = words[Math.floor(Math.random() * words.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, drops[i] * font_size, i * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > c.width && Math.random() > 0.875)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 40);
}

(function () {
    let chinese = "安卓ANDROIDWEBDATABASESYSTEM网页设计师数据库系统架构娴李";
    chinese = chinese.split("");
    for (let i = 0; i < 8; i++) {
        doSkillWordRain(i, chinese);
    }
})();

