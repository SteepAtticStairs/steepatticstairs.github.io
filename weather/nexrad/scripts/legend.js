function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function setLegend(blocksOrGrad, theActuallyProduct) {
    var canvas = document.getElementById('legendCanvas');
    var context = canvas.getContext('2d');
    var colors = [
        "rgb(0, 0, 0)",
        "rgb(191, 191, 191)",
        "rgb(115, 115, 115)",
        "rgb(245, 182, 181)",
        "rgb(147, 252, 253)",
        "rgb(87, 120, 246)",
        "rgb(177, 251, 162)",
        "rgb(80, 176, 51)",
        "rgb(230, 230, 75)",
        "rgb(187, 109, 93)",
        "rgb(235, 51, 35)",
        "rgb(188, 39, 246)",
        "rgb(117, 20, 124)",
        "rgb(191, 191, 191)"
    ];

    // Horizontally
    var grd = context.createLinearGradient(0, 0, canvas.width, 0);

    // Vertically
    // var grd = context.createLinearGradient(0, 0, 0, canvas.height);

    var hehearr = []
    for (let index = 0; index < colors.length; index++) {
        const color = colors[index];
        //grd.addColorStop(index/colors.length, color);
        context.fillStyle = color;
        context.fillRect((index / colors.length * canvas.width), 0, (canvas.width / colors.length), canvas.height);
        hehearr.push((index / colors.length * canvas.width) / canvas.width)
    }
    //console.log(hehearr)
    var hehearrelem = document.createElement('div')
    hehearrelem.id = 'hehearrelem'
    hehearrelem.innerHTML = JSON.stringify(hehearr)


    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);

    var newDiv = document.createElement("div");
    newDiv.id = 'ballsy'
    newDiv.innerHTML = `
        <div id="tooltips-span" class='tooltip' style='background-color: rgb(0, 0, 0); color: white'>
            <span class="tooltiptext" id="icanchangethistext">No Data</span>
        </div>`
    newDiv.style.display = 'none'
    document.body.appendChild(newDiv)

    $('#legendCanvas').mousemove(function(e) {
        var pos = findPos(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;
        var coord = "x=" + x + ", y=" + y;
        var c = this.getContext('2d');
        var p = c.getImageData(x, y, 1, 1).data; 
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        var valueInCanvas = x / canvas.width
        $('#status').html(`
            <div>${hex}, rgb(${p[0]}, ${p[1]}, ${p[2]}), ${x / valueInCanvas}</div>
            <span style='background-color: ${hex}'>${"&nbsp;".repeat(14)}</span>
        `);
        // $('#status').html(coord + "<br>" + hex);
        //console.log(`${valueInCanvas}\n${hex}\n${rgb(p[0], p[1], p[2])}`)

        var tooltipSpan = document.getElementById('tooltips-span')
        var theText = document.getElementById('icanchangethistext')
        document.getElementById('ballsy').style.display = 'inline'
        tooltipSpan.style.display = 'inline'
        var x = e.clientX,
            y = e.clientY;
        tooltipSpan.style.top = (y - 690) + "px"
        tooltipSpan.style.left = (x) + "px"
        if (blocksOrGrad == 'blocks') {
            var sussyarr = hehearrelem.innerHTML.split(',')
            sussyarr.push(valueInCanvas)
            sussyarr.sort()
            theText.innerHTML = sussyarr.indexOf(valueInCanvas)
            //console.log(sussyarr)
        } else if (blocksOrGrad == 'gradient') {
            if (valueInCanvas > 1) {
                theText.innerHTML = 1
            } else if (valueInCanvas < 0) {
                theText.innerHTML = 0
            } else {
                theText.innerHTML = valueInCanvas
            }
        }
    });
    $('#legendCanvas').mouseleave(function(e) {
        document.getElementById('ballsy').style.display = 'none'
    })
}