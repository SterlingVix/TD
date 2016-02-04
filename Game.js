var Game = function () {
    this.colors = ['Pink', 'LightPink', 'HotPink', 'DeepPink', 'PaleVioletRed', 'MediumVioletRed', 'LightSalmon', 'Salmon', 'DarkSalmon', 'LightCoral', 'IndianRed', 'Crimson', 'FireBrick', 'DarkRed', 'Red', 'OrangeRed', 'Tomato', 'Coral', 'DarkOrange', 'Orange', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'Gold', 'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'HTML name', 'DarkOliveGreen', 'Olive', 'OliveDrab', 'YellowGreen', 'LimeGreen', 'Lime', 'LawnGreen', 'Chartreuse', 'GreenYellow', 'SpringGreen', 'MediumSpringGreen', 'LightGreen', 'PaleGreen', 'DarkSeaGreen', 'MediumAquamarine', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'SteelBlue', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'HTML name', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'DarkSlateBlue', 'RebeccaPurple', 'SlateBlue', 'MediumSlateBlue', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGrey', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black'];
    this.colorsLength = this.colors.length;
    this.stage = document.querySelector('.stage');
    this.towers = {};
    this.towersLength = 0;
    this.towerDefaults = {
        width: '1em',
        height: '1em'
    };

    this.getTowers();
//    this.randomizeColors();
    this.updateRadiuses();
    this.getStageDimensions();
    this.makeCreep();
    
    this.addOnClick();
}; // end Game()


Game.prototype.randomizeColors = function () {
    var allElements = document.querySelectorAll('body *');
    console.log(allElements);

    for (var i = 0; i < allElements.length; i++) {
        var randomNumber = parseInt(this.colorsLength * (Math.random())) + 1;
        var randomNumber2 = parseInt(this.colorsLength * (Math.random())) + 1;
        allElements[i].style.color = this.colors[randomNumber];
        allElements[i].style.backgroundColor = this.colors[randomNumber2];
        // console.log(allElements[i]);
        // console.log(randomNumber);
        // console.log(this.colors[randomNumber]);
    } // end for (allElements)
}; // end randomizeColors()

Game.prototype.getTowers = function () {
    this.towers = document.querySelectorAll('.tower');
    this.towersLength = this.towers.length;
    
    for (var i = 0; i < this.towersLength; i ++) {
        this.towers[i].centerElement = this.towers[i].children[0];
        this.towers[i].radiusElement = this.towers[i].children[1];
        
        this.towers[i].centerElement.style.width = this.towerDefaults.width;
        this.towers[i].centerElement.style.height = this.towerDefaults.height;
        // TODO: possibly call updateRadiuses(a, b) here...
    }
}; // end getTowers()

Game.prototype.updateRadiuses = function (tower, newRadius) {
        if (!!tower) {
            // TODO
            console.log('tower', tower, ' specified');
        } else {
            for (var i = 0; i < this.towersLength; i ++) {
                var thisRadius = '' + (2 * (parseInt(this.towers[i].dataset.radius))) + 'em';
                this.towers[i].style.width = thisRadius;
                this.towers[i].style.height = thisRadius;
            }
        }
}; // end updateRadiuses()


Game.prototype.getStageDimensions = function() {
    this.stage.dimensions = this.stage.getBoundingClientRect();
    this.stage.dimensions.verticalCenter = (this.stage.dimensions.height / 2);
    this.stage.dimensions.horizontalCenter = (this.stage.dimensions.width / 2);
}; // end getStageDimensions()


Game.prototype.makeCreep = function (creepObject) {
        if (!!creepObject) {
            // TODO
            console.log('creepObject', creepObject, ' specified');
        } else {
            var newCreep = document.createElement('div');
            newCreep.className = 'creep';
            newCreep.speed = 1;
            newCreep.top = this.stage.dimensions.verticalCenter;
//            newCreep.left = this.stage.dimensions.horizontalCenter;
            newCreep.left = 0;
            newCreep.style.top = '' + newCreep.top + 'px';
            newCreep.style.left = '' + newCreep.left + 'px';
            this.stage.appendChild(newCreep);
            this.makeCreepWalk(newCreep);
        }
}; // end updateRadiuses()


Game.prototype.makeCreepWalk = function(creep) {
    if (!creep.speed) {
        creep.speed = 10;
    }
    
    creep.walkingIntervalID = window.setInterval((function() {
        creep.left += creep.speed;
        creep.style.left = '' + creep.left + 'px';
    }).bind(creep), 33);
}; // end makeCreepWalk(creep)


Game.prototype.addOnClick = function() {
    this.stage.addEventListener('click', (function() {
        this.makeCreep();
    }).bind(this));
}; // end addOnClick(actor)










