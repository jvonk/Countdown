var square = false;
var ginger = false;
var img = getImage("cute/TreeShort");
var ya = 150;
var timer=millis();
var timer2=millis();
var yaaa = 0,rangeLeftaaa = -100,rangeRightaaa = 500,
centerXaaa = 200,centerYaaa = 200,speedaaa = 5,
flakesaaa = [],
flakeSpawnaaa = function(){
    flakesaaa.push({
        xaaa: random(rangeLeftaaa, rangeRightaaa),
        zaaa: random(1,10)
    });
};
for (var ii = 0; ii < 50; ii++) {
    flakeSpawnaaa();
}
stroke(255, 255, 255);
var countsss = 0;














var xe = 0;
var ann = random(0, 100);
var bottomwhitespeed = 0.4; //0.1-0.5 reccomended
var sizeofsnow = 0.6; //0.04-infinity works 0.3-10 recomended
var whity = 0;
var whitya = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var wite = 100;
var wit = 0;
var whitestart = 0;
var white = whitestart;
var wid = 50;
var whitespeed = 8;
var nonjiglyness = 2.5;
var variance = whitespeed/nonjiglyness;
var xPositions = [];
var yPositions = [];
var opacity = [];
for (var ii = 0; ii < 40/sizeofsnow; ii++) {
    xPositions[ii]=ii*10*sizeofsnow; 
    yPositions[ii]=random(0, 400);
    opacity[ii] = 0;
}

fill(255, 255, 255);
strokeWeight(2);
ellipse(200, 200, 50, 50);

var mouseClicked = function() {
    xPositions.push(random(0,400));
    yPositions.push(random(0,400));
    
};

var New_Year = {
  year: 2017,
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
};
var Christmas = {
    year: 2016,
    month: 12,
    day: 25,
    hour: 0,
    minute: 0,
    second: 0,
};
var Sinterklaas = {
    year: 2016,
    month: 12,
    day: 5,
    hour: 0,
    minute: 0,
    second: 0,
};
var Hannukkah = {
    year: 2016,
    month: 12,
    day: 24,
    hour: 0,
    minute: 0,
    second: 0,
};
var Kwanzaa = {
    year: 2016,
    month: 12,
    day: 26,
    hour: 0,
    minute: 0,
    second: 0,
};
var Festivus = {
    year: 2016,
    month: 12,
    day: 23,
    hour: 0,
    minute: 0,
    second: 0,
};
var now = {};

var subtractdate = function(distancebetween, singleline, x, y, label, date1, date2) {
    this.distancebetween = distancebetween;
    this.singleline = singleline;
    this.x = x;
    this.y = y;
    this.label = label;
    this.year = date1.year-date2.year;
    this.month = date1.month-date2.month;
    this.day = date1.day-date2.day;
    this.hour = date1.hour-date2.hour;
    this.minute = date1.minute-date2.minute;
    this.second = date1.second-date2.second;
};
subtractdate.prototype.talk = function() {
    do {
        if (this.month < 0) {
            this.year-=1;
            this.month+=12;
        }
        if (this.day < 0) {
            this.month-=1;
            this.day+=31;
        }
        if (this.hour < 0) {
            this.day-=1;
            this.hour+=24;
        }
        if (this.minute < 0) {
            this.hour-=1;
            this.minute+=60;
        }
        if (this.second < 0) {
            this.minute-=1;
            this.second+=60;
        }
    } while (this.month < 0 || this.day < 0 || this.hour < 0 || this.minute < 0 || this.second < 0);
    fill(0, 0, 0);
    stroke(255, 255, 255);
    fill(5, 102, 0);
    if (this.singleline === true) {
        text(this.year+" year(s) and "+this.month+" month(s) and "+this.day+" day(s) and "+this.hour+" hour(s) and "+this.minute+" minute(s) and "+this.second+" second(s)!!!", this.x, this.y+this.distancebetween);
    } else {
        text(this.year+" year(s)\n"+this.month+" month(s)\n"+this.day+" day(s)\n"+this.hour+" hour(s)\n"+this.minute+" minute(s)\n"+this.second+" second(s)!!!", this.x, this.y+this.distancebetween);
    }
    text(this.label, this.x, this.y);
    
};
var snowflake = function(x, y, size, i, dark) {

    fill(dark);
    ellipse(x, y, size, size);
    var a = size/1.57155;
    var b = size/5.5;
    strokeWeight(1);
    stroke(dark);
    if ( dark !== color(72, 208, 232)) {
      
        line(x, y, x+a, y+a);
        line(x+a-b, y+a+b, x+a+b, y+a-b);
        
        line(x, y, x, y+a+b);
        line(x+b, y+a+b, x-b, y+a+b);
        
        line(x, y, x+a+b, y);
        line(x+a+b, y+b, x+a+b, y-b);
        
        line(x, y, x, y-a-b);
        line(x+b, y-a-b, x-b, y-a-b);
    
        line(x, y, x-a-b, y);
        line(x-a-b, y+b, x-a-b, y-b);
        
        line(x, y, x+a, y-a);
        line(x+a-b, y-a-b, x+a+b, y-a+b);
    
        line(x, y, x-a, y-a);
        line(x-a+b, y-a-b, x-a-b, y-a+b);
        
        line(x, y, x-a, y+a);
        line(x-a+b, y+a+b, x-a-b, y+a-b);
    }
};
var lll = 330;
var www = 330;
var draw = function () {
    //var img2 = getImage("http://ecx.images-amazon.com/images/I/81D2KYMwIEL.png")
    //image(img2, 0, 0, 400, 400);

    var anb = 3;//round(random(3, 10));
    if (anb === 3) {
        background(72, 208, 232);
    }
    for(var iaaa = 0; iaaa < flakesaaa.length; iaaa++){
        strokeWeight(20/flakesaaa[iaaa].zaaa); //sizes the flakes
        stroke(255, 255, 255);
        if (((((yaaa/noise(iaaa/10)/4)%400) +(iaaa/flakesaaa.length*400) - centerYaaa - iaaa * speedaaa) + centerYaaa) < lll) {
            stroke(255, 255, 255);
            strokeWeight(10/flakesaaa[iaaa].zaaa); //sizes the flakes
            point(flakesaaa[iaaa].xaaa ,(((yaaa/noise(iaaa/10)/4)%400) +(iaaa/flakesaaa.length*400) - centerYaaa - iaaa * speedaaa) + centerYaaa); //places the flakes
        }
    }
    
    yaaa += speedaaa;//the flakes fall
    fill(87+white/wite*224, 37+white/wite*224, 31+white/wite*224);
    strokeWeight(0.1);
    
    if (31+white/wite*224 > 255 && anb === 3) {
        var mmm = lll;
        whity+=1/10;
        whitespeed = 8;
        nonjiglyness = 20000;
        for (var x = 0; x < 400; x+=2) {
            whitya[x]+=noise((xe*0.1))*0.1;
            whitya[x]+=noise(x*0.01+ann)*0.15;
            if ((mmm < 400-round(whitya[x])-70) && (400-round(whitya[x])-70 !== undefined)){
                    mmm = 400-round(whitya[x])-70;
            }
            
            if (400-round(whitya[x])-70 < lll) {
                
                lll = 400-round(whitya[x])-70;
            }
            
            stroke(255, 255, 255);
            strokeWeight(2);
            line(x, 400, x, 400-round(whitya[x])-70);
        }
        www = mmm;
    }
    fill(93+white/wite*224, 37+white/wite*224, 31+white/wite*224);
    rect(0, 330, 400, 70);
    fill(255, 255, 255);
    text("Snowflakes: "+str(round(white/bottomwhitespeed*9.3)), 145, 15);
    strokeWeight(5);
    for (var i = 0; i < xPositions.length; i++) {
        var ahd = random(whitespeed-variance,whitespeed+variance);
        yPositions[i] += ahd;
        noStroke();
        fill(230, 230, 230);
        if(yPositions[i] > 400-(wid)-140-whity) {
            opacity[i]+=whitespeed;
        }
        if(yPositions[i] > 370-max(whitya[round(xPositions[i])], 70)+sqrt(yPositions[i]+whity)*sizeofsnow) {
            yPositions[i] = 0;
            white+=bottomwhitespeed;
            opacity[i]=0;
        } else {
            if (anb === 3) {
                snowflake(xPositions[i], yPositions[i], sqrt(yPositions[i]+whity)*sizeofsnow, i, color(250, 250, 250));
            } else {
                snowflake(xPositions[i], yPositions[i]-ahd, sqrt(yPositions[i]+whity)*sizeofsnow*2, i, color(72, 208, 232));
                snowflake(xPositions[i], yPositions[i], sqrt(yPositions[i]+whity)*sizeofsnow, i, color(250, 250, 250));
            }
        }
    }
    now = {
      year: year(),
      month: month(),
      day: day(),
      hour: hour(),
      minute: minute(),
      second: second(),
    };
    //println("1");
    var christmas = new subtractdate(25, false, 285, 155, "Time till Christmas", Christmas, now);
    //println("1");
    var new_year = new subtractdate(25, false, 15, 155, "Time till New Year", New_Year, now);
    //println("3");
    var sinterklaas = new subtractdate(25, false, 155, 155, "Time till Sinterklaas", Sinterklaas, now);
    //println("5");
    var hanukkah = new subtractdate(25, false, 285, 30, "Time till Hanukkah", Hannukkah, now);
    //println("2");
    var kwanzaa = new subtractdate(25, false, 155, 30, "Time till Kwanzaa", Kwanzaa, now);
    //println("2");
    var festivus = new subtractdate(25, false, 15, 30, "Time till Festivus", Festivus, now);

    christmas.talk();
    new_year.talk();
    sinterklaas.talk();
    hanukkah.talk();
    kwanzaa.talk();
    festivus.talk();
    if (mouseIsPressed && mouseX > 64 && mouseY > 329 && mouseX < 134 && mouseY < 354 && millis()-timer > 500) {
        timer=millis();
        square = !square;
        if (countsss % 2 === 0) {
            img = getImage("cute/StoneBlock");
        } else {
            img = getImage("cute/TreeShort");
        }
        countsss++;
    }
    /*
    if (mouseIsPressed && mouseX > housex && mouseY > houseY && mouseX < housex+housew && mouseY < housey+househ && millis()-timer2 > 500) {
        timer2=millis();
        ginger=!ginger
        
    }
    */
    wid = 50;
    noStroke();
    fill(255, 0, 0);
    if ((((200 - lll) % 200) * 4) < 400) {
        var x = 400-(xe%800);
        fill(48, 46, 48);
        rect(54+x, 50+ya, 30, 145);
        strokeWeight(10);
        quad(x+54, ya+50, -14+54+x, ya-31+60, -4+x+54, ya-47+60, x+25+60, ya-10+60);
        fill(105, 105, 105);
        rect(75+x, 150+ya, 125, 50, 200);
        fill(48, 46, 48);
        rect(x+124, ya+94, 50, 55);
        rect(x+111, ya+154, 56, 36);
        ellipse(102+x, 176+ya, 45, 45);
        ellipse(174+x, 176+ya, 45, 45);
        strokeWeight(2);
        stroke(0, 0, 0);
        line(190+x, 152+ya, 240+x, 60+ya);
        line(185+x, 150+ya, 235+x, 60+ya);
        strokeWeight(5);
        line(237+x, 60+ya, 270+x, 60+ya);
        line(270+x, 60+ya, 250+x, 85+ya);
        strokeWeight(1);
        fill(77, 77, 125);
        
        

        point(x-4, 156+ya);
        arc(-4+x, 156+ya, 150, 100, 280, 460 );
        stroke(38, 0, 255);
        strokeWeight(5);
        ellipse(x+318, ya+6, 50, 50);
        strokeWeight(4);
        ellipse(x+318, ya+77, 50, 87); 
        strokeWeight(10);
        line(x+311, ya+118, x+301-35+(14-((((x/7-200))%5)*7)), ya+197);
        line(x+325, ya+118, x+335-17+(0-((((x/7-200)+2.5)%5)*7)), ya+197);
        line(x+328, ya+56, x+261, ya+72);
        strokeWeight(1);
        whitya[(400-(xe%800))+10] = -30;
    }
    if ((((200 - lll) % 400) * 4) > 100) {
        text("Plowing...", 7, 15);
    }
    strokeWeight(10);
    for (var xb = 0; xb < 400; xb += wid - 6) {
        image(img, xb, 400-(wid*2)+(square*23), wid, wid*2);
    }
    noStroke();
    fill(255, 0, 255);
    var img5 = getImage("cute/Blank");
    var housew = 100;
    var househ = 100;
    var housex = 200-housew/2;
    var housey = 400 - househ;
    var img6 = getImage("seasonal/gingerbread-man");
    stroke(110, 47, 47);
    fill(110, 47, 47);
    rect(64, 329, 72, 25);
    rect(98, 362, 4, 45);
    if (!square) {
        fill(115, 50, 50);
        rect(housex, housey, housew, househ);
        fill(247, 0, 0);
        stroke(255, 0, 0);
        triangle(housex, housey, housex+housew, housey, housex+housew/2, housey-50);
        img5 = getImage("seasonal/stocking-empty");
        text("gingerbread family", 150, 353);
        var widt = 10;
        var hig = 25;
        fill(0, 0, 0);
        stroke(0, 0, 0);
        rect(200-widt, housey+househ-hig-hig/2, widt+widt, hig+hig/2);
        
        text("miniville\n square", 87, 338);
        textSize(18);
        text("←", 65, 347);
    } else {
        img = getImage("cute/StoneBlock");
        img6 = getImage("cute/Blank");
        fill(166, 118, 118);
        text("smallnose\n street", 83, 338);
        textSize(18);
        text("←", 65, 347);
    }
    stroke(110, 47, 47);
    var img1 = getImage("seasonal/father-winston");
    var img3 = getImage("seasonal/snownoes");
    var img4 = getImage("seasonal/reindeer-with-hat");
    var img2 = getImage("seasonal/snowman");
    var widthof = 50;
    textSize(12);
    image(img2, 275, 400 - widthof*2, widthof*2, widthof*2);
    for (var ii = 150; ii < 250; ii+=37.5) {
        image(img5, ii, 335 - widthof*0.5+(ii%170/20), widthof*0.5, widthof*0.5);
    }
    
    image(img6, 210, 400 - widthof*0.7, widthof*0.6, widthof*0.7);
    image(img1, (xe * whitespeed / 10 + (square*1221)) % (400 + widthof) - widthof, 400 - widthof*1.25, widthof*1.25, widthof*1.25);
    image(img4, 400- (xe * whitespeed / 8 + (square*1396)) % (400 + widthof) - widthof, 400 - widthof*1.5, widthof*1.5, widthof*1.5);
    image(img3, (xe * whitespeed / 6 + (square*633)) % (400+widthof) - widthof, 400 - widthof, widthof, widthof);
    xe++;
    strokeWeight(2);
};
