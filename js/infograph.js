/**
 * Created by Kesha_kh on 29.04.2015.
 */

/**
 * function for dots position
 * @container - element which contains dots
 * @rad - outer radius of dots position
 * @ang - leafs inner angle
 * **/

var current_leaf;

function leaf_position(container, rad, ang) {
    if (container.getAttribute("class")== "leaf_holder solo"){
        return false
    }
    var divs = container.getElementsByClassName('circle'),
        angle = 0,
        radius = rad + 145,
        delta_radius = rad / Math.sqrt(divs.length),
        delta = Math.PI * ang / (720);

    for (var i = 0; i < divs.length; i++) {
        var elem_left = divs.length - i;
        if (elem_left > 5) {
            if ((i % 4 == 0) && (i > 0)) {
                angle = 0;
                radius -= delta_radius;
            }
            divs[i].style.position = 'absolute';
            divs[i].style.left = radius * Math.cos(angle) + 'px';
            divs[i].style.top = radius * Math.sin(angle) + 'px';
            angle += delta;
        } else {
            if (divs.length > 5){
                switch (divs.length % 4) {
                    case 0:
                        divs[i].style.position = 'absolute';
                        divs[i].style.left = radius * Math.cos(angle) + 'px';
                        divs[i].style.top = radius * Math.sin(angle) + 'px';
                        i++;
                        radius -= delta_radius*1.1;
                        angle = 0.5 * delta;
                        for (i; i < divs.length - 1; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        radius -= delta_radius;
                        angle = 1.5 * delta;
                        divs[i].style.position = 'absolute';
                        divs[i].style.left = radius * Math.cos(angle) + 'px';
                        divs[i].style.top = radius * Math.sin(angle) + 'px';
                        break;
                    case 1:
                        radius -= delta_radius;
                        angle = 0.1 * delta;
                        for (i; i < divs.length - 2; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta*1.3;
                        }
                        radius -= delta_radius;
                        angle = delta*0.9;
                        for (i; i < divs.length; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta*1.25;
                        }
                        break;
                    case 2:
                        for (i; i < divs.length - 2; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        radius -= delta_radius;
                        angle = delta*0.8;
                        for (i; i < divs.length; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta*1.25;
                        }
                        break;
                    case 3:

                        for (i; i < divs.length - 3; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        radius -= delta_radius;
                        angle = delta / 2;
                        for (i; i < divs.length; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        break;
                }
            } else if (divs.length < 5){
                switch (divs.length % 4) {
                    case 0:
                        angle = 0.5 * delta;
                        for (i; i < divs.length - 1; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        radius -= delta_radius;
                        angle = 1.5 * delta;
                        divs[i].style.position = 'absolute';
                        divs[i].style.left = radius * Math.cos(angle) + 'px';
                        divs[i].style.top = radius * Math.sin(angle) + 'px';
                        break;
                    case 1:
                        //radius -= delta_radius;
                        angle = 0.5 * delta;

                        divs[i].style.position = 'absolute';
                        divs[i].style.left = radius * Math.cos(angle) + 'px';
                        divs[i].style.top = radius * Math.sin(angle) + 'px';


                        break;
                    case 2:
                        /*for (i; i < divs.length - 2; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        radius -= delta_radius;*/
                        angle = delta;
                        for (i; i < divs.length; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        break;
                    case 3:

                        /*for (i; i < divs.length - 3; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        radius -= delta_radius;*/
                        angle = delta / 2;
                        for (i; i < divs.length; i++) {
                            divs[i].style.position = 'absolute';
                            divs[i].style.left = radius * Math.cos(angle) + 'px';
                            divs[i].style.top = radius * Math.sin(angle) + 'px';
                            angle += delta;
                        }
                        break;
                }
            } else {
                angle = 0.1 * delta;
                radius -= delta_radius*0.1;
                for (i; i < divs.length - 2; i++) {
                    divs[i].style.position = 'absolute';
                    divs[i].style.left = radius * Math.cos(angle) + 'px';
                    divs[i].style.top = radius * Math.sin(angle) + 'px';
                    angle += delta*1.428;
                }
                radius -= delta_radius*0.6;
                angle = 0.6*delta;
                for (i; i < divs.length; i++) {
                    divs[i].style.position = 'absolute';
                    divs[i].style.left = radius * Math.cos(angle) + 'px';
                    divs[i].style.top = radius * Math.sin(angle) + 'px';
                    angle += delta*1.5;
                }
            }
        }
    }
}

/**
 * function to get elements coordinates relative to svg container
 */
function get_coords(element) {
    var svg = document.getElementById("run_svg");
    var xc = element.getBoundingClientRect().left - svg.getBoundingClientRect().left,
        yc = element.getBoundingClientRect().top - svg.getBoundingClientRect().top,
        cord = {x: xc, y: yc};
    return cord;
}

/**
 * function to get distance between two points
 */
function lineDistance(point1_x, point1_y, point2_x, point2_y) {
    var xs = 0;
    var ys = 0;

    xs = point2_x - point1_x;
    xs = xs * xs;

    ys = point2_y - point1_y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
}
/**
 * Small info change function
 */
function small_change(element, title, text) {
    element.getElementsByClassName("title")[0].innerHTML = title;
    element.getElementsByClassName("text")[0].innerHTML = text;
}
/**
 * clear all intervals
 */
function ClearAllIntervals() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}
/**
 * functions to draw line between pie and infoboxes
 */

function line_init(leaf) {
    var svg = document.getElementById("run_svg"), dat_leaf = leaf,
        dat_path_id = leaf.id.replace("leaf", "path"),
        dat_path = document.getElementById(dat_path_id),
        small_info = dat_leaf.getElementsByClassName("small_info")[0],
        start_x = leaf.getAttribute("data-startx"),
        start_y = leaf.getAttribute("data-starty"),
        svg_width = svg.clientWidth || svg.parentNode.clientWidth,
        svg_height = svg.clientHeight || svg.parentNode.clientHeight;

    small_change(small_info, leaf.getElementsByClassName("year")[0].innerHTML, "");
    small_info.setAttribute("class", "small_info");
    ClearAllIntervals();
    document.getElementById("inphograph_info").setAttribute("class", "inactive");


    if (Number(start_x) > Number(svg_width) / 2) {
        var toright = true;
    }


    var info_xy = get_coords(document.getElementById("info_circle"));//position on info_circle top center
    info_xy.x += 12;


    var small_info_xy = get_coords(small_info);
    small_info_xy.y += small_info.clientHeight;

    /**/
    var path = document.createElementNS('http://www.w3.org/2000/svg', "path"),
        path_d = "M" + start_x + " " + start_y;
    if (toright === true) {
        path_d += " L" + String(small_info_xy.x) + " " + String(small_info_xy.y);
        path_d += " l" + (small_info.clientWidth) + " 0";
    } else {
        path_d += " L" + String(small_info_xy.x + small_info.clientWidth) + " " + String(small_info_xy.y);
        path_d += " l-" + (small_info.clientWidth) + " 0";
    }
    var startl = lineDistance(start_x, start_y, small_info_xy.x, small_info_xy.y) + small_info.clientWidth;
    path.setAttributeNS(null, "d", path_d);
    path.setAttributeNS(null, "data-startLength", startl);
    path.id = dat_path_id;
    path.style.stroke = '#000';

    svg.removeChild(dat_path);
    svg.appendChild(path);

    small_info.onclick = function () {line_run_active_parent(leaf);}
}
/**
 * from pie to small info*/

 function line_run(leaf) {
    var svg = document.getElementById("run_svg"), dat_leaf = leaf,
        dat_path_id = leaf.id.replace("leaf", "path"),
        dat_path = document.getElementById(dat_path_id),
        small_info = dat_leaf.getElementsByClassName("small_info")[0],
        start_x = leaf.getAttribute("data-startx"),
        start_y = leaf.getAttribute("data-starty"),
        svg_width = svg.clientWidth || svg.parentNode.clientWidth,
        svg_height = svg.clientHeight || svg.parentNode.clientHeight;

    if (Number(start_x) > Number(svg_width / 2)) {
        var toright = true;
    } else {
        var toright = false;
    }


    var info_xy = get_coords(document.getElementById("info_circle"));//position on info_circle top center
    info_xy.x += 12;


    var small_info_xy = get_coords(small_info);
    small_info_xy.y += small_info.clientHeight;

    /**/
    var path = document.createElementNS('http://www.w3.org/2000/svg', "path"),
        path_d = "M" + start_x + " " + start_y;
    if (toright === true) {
         path_d += " L" + String(small_info_xy.x) + " " + String(small_info_xy.y);
        path_d += " l" + (small_info.clientWidth) + " 0";
    } else {
        path_d += " L" + String(small_info_xy.x + small_info.clientWidth) + " " + String(small_info_xy.y);
        path_d += " l-" + (small_info.clientWidth) + " 0";
    }
    var startl = lineDistance(start_x, start_y, small_info_xy.x, small_info_xy.y) + small_info.clientWidth;
    path.setAttributeNS(null, "d", path_d);
    path.setAttributeNS(null, "data-startLength", startl);
    path.id = dat_path_id;
    path.style.stroke = '#000';

    function path_rep() {
        svg.removeChild(dat_path);
        svg.appendChild(path);
    }

    dat_path.style.strokeDasharray = [startl, 10000].join(' ');
    animate_path(dat_path, false, path_rep());
}

/**
 * from circle to small info*/

function line_run_hover(circle) {

    var svg = document.getElementById("run_svg"),
        circle_coords = get_coords(circle),
        svg_width = svg.clientWidth || svg.parentNode.clientWidth,
        svg_height = svg.clientHeight || svg.parentNode.clientHeight;
    circle_coords.x += (circle.getBoundingClientRect().width / 2);
    circle_coords.y += (circle.getBoundingClientRect().height / 2);
    if (Number(circle_coords.x) > Number(svg_width) / 2) {
        var toright = true;
        circle_coords.x += 6;
    } else {
        circle_coords.x -= 6;
    }
    if (circle_coords.y > (svg_height / 2)) {
        circle_coords.y += 6;
    } else {
        circle_coords.y -= 6;
    }

    /*------------------*/
    var dat_leaf_id = circle.parentElement.id.replace("_holder", ""),
        dat_path_id = circle.parentElement.id.replace("leaf_holder", "path"),
        dat_path = document.getElementById(dat_path_id),
        small_info = document.getElementById(dat_leaf_id).getElementsByClassName("small_info")[0];
    ClearAllIntervals();
    document.getElementById("inphograph_info").setAttribute("class", "inactive");
    if (window.current_leaf && window.current_leaf != document.getElementById(dat_leaf_id)) {
        line_init(window.current_leaf);
    }
    window.current_leaf = document.getElementById(dat_leaf_id);

    small_change(small_info, circle.getElementsByClassName("title")[0].innerHTML, circle.getElementsByClassName("text")[0].innerHTML);
    small_info.setAttribute("class", "small_info active");
    small_info.onclick = function () {
        line_run_active(circle)
    };
    var info_xy = get_coords(document.getElementById("info_circle"));//position on info_circle top center
    info_xy.x += 12;


    var small_info_xy = get_coords(small_info);
    small_info_xy.y += small_info.clientHeight;

    /**/
    var path = document.createElementNS('http://www.w3.org/2000/svg', "path"),
        path_d = "M" + circle_coords.x + " " + circle_coords.y;
    if (toright === true) {
        path_d += " L" + String(small_info_xy.x) + " " + String(small_info_xy.y);
        path_d += " l" + (small_info.clientWidth) + " 0";
    } else {
        path_d += " L" + String(small_info_xy.x + small_info.clientWidth) + " " + String(small_info_xy.y);
        path_d += " l-" + (small_info.clientWidth) + " 0";
    }
    var startl = lineDistance(circle_coords.x, circle_coords.y, small_info_xy.x, small_info_xy.y) + small_info.clientWidth;
    path.setAttributeNS(null, "d", path_d);
    path.setAttributeNS(null, "data-startLength", startl);
    path.id = dat_path_id;
    path.style.stroke = '#000';
    path.style.strokeDasharray = [startl, 10000].join(' ');

    svg.removeChild(dat_path);
    svg.appendChild(path);
}

/**
 * from circle to bottom info*/

function line_run_active(circle) {
    var svg = document.getElementById("run_svg"),
        circle_coords = get_coords(circle),
        svg_width = svg.clientWidth || svg.parentNode.clientWidth,
        svg_height = svg.clientHeight || svg.parentNode.clientHeight;
    circle_coords.x += (circle.getBoundingClientRect().width / 2);
    circle_coords.y += (circle.getBoundingClientRect().height / 2);
    if (Number(circle_coords.x) > Number(svg_width) / 2) {
        var toright = true;
        circle_coords.x += 6;
    } else {
        circle_coords.x -= 6;
    }
    if (circle_coords.y > svg_height / 2) {
        circle_coords.y += 6;
    } else {
        circle_coords.y -= 6;
    }
    var infobox_bot = document.getElementById("inphograph_info");
    infobox_bot.getElementsByClassName("date")[0].innerHTML = circle.getElementsByClassName("title")[0].innerHTML;
    infobox_bot.getElementsByClassName("title")[0].innerHTML = circle.getElementsByClassName("text")[0].innerHTML;
    infobox_bot.getElementsByClassName("text")[0].innerHTML = circle.getElementsByClassName("full")[0].innerHTML;


    /*------------------*/
    var dat_leaf_id = circle.parentElement.id.replace("_holder", ""),
        dat_path_id = circle.parentElement.id.replace("leaf_holder", "path"),
        dat_path = document.getElementById(dat_path_id),
        small_info = document.getElementById(dat_leaf_id).getElementsByClassName("small_info")[0];

    var info_xy = get_coords(document.getElementById("info_circle"));//position on info_circle top center
    info_xy.x += 12;


    var small_info_xy = get_coords(small_info);
    small_info_xy.y += small_info.clientHeight;

    /**/

    var path = document.createElementNS('http://www.w3.org/2000/svg', "path"),
        path_d = "M" + circle_coords.x + " " + circle_coords.y;
    if (toright === true) {

        path_d += " L" + String(small_info_xy.x) + " " + String(small_info_xy.y);
        path_d += " l" + (svg_width - small_info_xy.x - 20) + " 0";
        path_d += " l0 " + String(info_xy.y - small_info_xy.y - 20);
        path_d += " l-" + (svg_width - info_xy.x - 20) + " 0";
    } else {
        path_d += " L" + String(small_info_xy.x + small_info.clientWidth) + " " + String(small_info_xy.y);
        path_d += " l-" + (small_info_xy.x + small_info.clientWidth - 20) + " 0";
        path_d += " l0 " + String(info_xy.y - small_info_xy.y - 20);
        path_d += " l" + (info_xy.x - 20) + " 0";
    }
    path_d += " l0 20";

    var startl = lineDistance(circle_coords.x, circle_coords.y, small_info_xy.x, small_info_xy.y) + small_info.clientWidth;

    path.setAttributeNS(null, "d", path_d);
    path.setAttributeNS(null, "class", "active");
    path.setAttributeNS(null, "data-startLength", startl);
    path.style.strokeDasharray = [startl, 10000].join(' ');
    path.id = dat_path_id;
    svg.removeChild(dat_path);
    svg.appendChild(path);
    animate_path(path, true, function () {
        infobox_bot.getElementsByClassName("circle")[0].setAttribute("class","circle " + String(dat_leaf_id));
        infobox_bot.setAttribute("class", "active");
    });
}

function line_run_active_parent(leaf) {
    var svg = document.getElementById("run_svg"),
        circle_coords = {"x": Number(leaf.getAttribute("data-startx")),"y": Number(leaf.getAttribute("data-starty"))},
        svg_width = svg.clientWidth || svg.parentNode.clientWidth,
        svg_height = svg.clientHeight || svg.parentNode.clientHeight;

    if (Number(circle_coords.x) > Number(svg_width) / 2) {
        var toright = true;
        circle_coords.x += 6;
    } else {
        circle_coords.x -= 6;
    }
    if (circle_coords.y > svg_height / 2) {
        circle_coords.y += 6;
    } else {
        circle_coords.y -= 6;
    }

    if (window.current_leaf && window.current_leaf != leaf) {
        line_init(window.current_leaf);
    }
    window.current_leaf = leaf;

    var infobox_bot = document.getElementById("inphograph_info");
    infobox_bot.getElementsByClassName("date")[0].innerHTML = leaf.getElementsByClassName("year")[0].innerHTML;
    infobox_bot.getElementsByClassName("title")[0].innerHTML = "";
    infobox_bot.getElementsByClassName("text")[0].innerHTML = leaf.getElementsByClassName("full")[0].innerHTML;

    /*------------------*/
    var //dat_leaf_id = circle.parentElement.id.replace("_holder", ""),
        dat_path_id = leaf.id.replace("leaf", "path"),
        dat_path = document.getElementById(dat_path_id),
        small_info = leaf.getElementsByClassName("small_info")[0];

    var info_xy = get_coords(document.getElementById("info_circle"));//position on info_circle top center
    info_xy.x += 12;


    var small_info_xy = get_coords(small_info);
    small_info_xy.y += small_info.clientHeight;

    /**/

    var path = document.createElementNS('http://www.w3.org/2000/svg', "path"),
        path_d = "M" + circle_coords.x + " " + circle_coords.y;
    if (toright === true) {

        path_d += " L" + String(small_info_xy.x) + " " + String(small_info_xy.y);
        path_d += " l" + (svg_width - small_info_xy.x - 20) + " 0";
        path_d += " l0 " + String(info_xy.y - small_info_xy.y - 20);
        path_d += " l-" + (svg_width - info_xy.x - 20) + " 0";
    } else {
        path_d += " L" + String(small_info_xy.x + small_info.clientWidth) + " " + String(small_info_xy.y);
        path_d += " l-" + (small_info_xy.x + small_info.clientWidth - 20) + " 0";
        path_d += " l0 " + String(info_xy.y - small_info_xy.y - 20);
        path_d += " l" + (info_xy.x - 20) + " 0";
    }
    path_d += " l0 20";

    var startl = lineDistance(circle_coords.x, circle_coords.y, small_info_xy.x, small_info_xy.y) + small_info.clientWidth;

    path.setAttributeNS(null, "d", path_d);
    path.setAttributeNS(null, "class", "active");
    path.setAttributeNS(null, "data-startLength", startl);
    path.style.strokeDasharray = [startl, 10000].join(' ');
    path.id = dat_path_id;
    svg.removeChild(dat_path);
    svg.appendChild(path);
    animate_path(path, true, function () {
        infobox_bot.getElementsByClassName("circle")[0].setAttribute("class","circle " + String(leaf.id));
        infobox_bot.setAttribute("class", "active");
    });
}
/**
 * Drawing animation
 * **/
function animate_path(path, incr, callb) {
    callback = callb || false;

    var distancePerPoint = 20,
        drawFPS = 60,
        orig = path,
        length,
        timer;


    function startDrawingPath() {
        length = Number(orig.getAttribute("data-startLength"));
        orig.setAttributeNS(null, "stroke", "#000");
        timer = setInterval(increaseLength, 10);
    }

    function increaseLength() {
        var pathLength = orig.getTotalLength();
        length += distancePerPoint;
        orig.style.strokeDasharray = [length, pathLength].join(' ');
        if (length >= pathLength) {
            clearInterval(timer);
            if (callback != false) {
                callback.call();
            }
        }
    }

    function startunDrawingPath() {
        length = orig.getTotalLength();
        orig.style.stroke = '#000';
        timer = setInterval(decreaseLength, 10);
    }

    function decreaseLength() {
        var pathLength = orig.getTotalLength();
        length -= distancePerPoint;
        orig.style.strokeDasharray = [length, pathLength].join(' ');
        if (length <= Number(orig.getAttribute("data-startLength"))) {
            clearInterval(timer);
            orig.style.strokeDasharray = [Number(orig.getAttribute("data-startLength")), pathLength].join(' ');
            if (callback != false) {
                callback.call();
            }
        }
    }

    function stopDrawingPath() {
        clearInterval(timer);
        orig.style.stroke = '';
        orig.style.strokeDasharray = '';
    }

    if (incr === true) {
        startDrawingPath();
    } else {
        startunDrawingPath();
    }
}

/**
 * main function
 */
function infograph_init(container) {

    leaf_position(document.getElementById("leaf_holder_1"), 130, 29);
    leaf_position(document.getElementById("leaf_holder_2"), 163, 30);
    leaf_position(document.getElementById("leaf_holder_3"), 200, 32);
    leaf_position(document.getElementById("leaf_holder_4"), 220, 36);
    leaf_position(document.getElementById("leaf_holder_5"), 255, 47);
    leaf_position(document.getElementById("leaf_holder_6"), 275, 70);
    leaf_position(document.getElementById("leaf_holder_7"), 310, 63);
    leaf_position(document.getElementById("leaf_holder_8"), 340, 55);

    line_init(document.getElementById("leaf_1"));
    line_init(document.getElementById("leaf_2"));
    line_init(document.getElementById("leaf_3"));
    line_init(document.getElementById("leaf_4"));
    line_init(document.getElementById("leaf_5"));
    line_init(document.getElementById("leaf_6"));
    line_init(document.getElementById("leaf_7"));
    line_init(document.getElementById("leaf_8"));

    var circles = document.getElementById("infograph").getElementsByClassName("circle");
    for (var i = 0; i < circles.length; i++) {
        //console.log(circles[i].parentNode);
        circles[i].onclick = function () {
            line_run_hover(this);
        };
        //circles[i].onmouseout = function() {line_run(document.getElementById(this.parentElement.id.replace("_holder", "")))};
        //circles[i].onclick = function() {line_run_active(this)};
    }
}