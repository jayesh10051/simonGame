var arr = [];
var arrToRecordInput = [];
var i = 0;
var level = 0;
var t = 0;
$(document).keydown(function(){
    play();
    $(document).unbind();
});
function play() {
    level = arr.length;
    t = 0;
    console.log('play function is called');
    console.log("you are on level " + level);
    $(".level-heading").text("Level " + level);
    arrToRecordInput = [];
    console.log('record as of now');
    console.log(arrToRecordInput);
    // generating a random number
    var random = Math.floor(Math.random() * 4);
    // pushing the random nmber in the array
    arr.push(random);
    // showing current 
    console.log("arr as of now");
    console.log(arr);
    i = 0;
    showCurrentPattern(arr);
    // checkCurrentPattern(arr, i);
    recordClicks();
}
function recordClicks() {
    $(".green").click(function () {
        $(".green").addClass("pressed");
        setTimeout(() => {
            $(".green").removeClass("pressed")
        }, 200);
        arrToRecordInput[t] = 0;
        var green = new Audio("sounds/green.mp3");
        t++;
        check(t, green);
        console.log(arrToRecordInput);
    });
    $(".red").click(function () {
        $(".red").addClass("pressed");
        setTimeout(() => {
            $(".red").removeClass("pressed")
        }, 200);
        arrToRecordInput[t] = 1;
        var red = new Audio("sounds/red.mp3")
        t++;
        check(t, red);
        console.log(arrToRecordInput);
    })
    $(".yellow").click(function () {
        $(".yellow").addClass("pressed");
        setTimeout(() => {
            $(".yellow").removeClass("pressed")
        }, 200);
        arrToRecordInput[t] = 2;
        var yellow = new Audio("sounds/yellow.mp3")
        t++;
        check(t, yellow);
        console.log(arrToRecordInput);
    })
    $(".blue").click(function () {
        $(".blue").addClass("pressed");
        setTimeout(() => {
            $(".blue").removeClass("pressed")
        }, 200);
        arrToRecordInput[t] = 3;
        t++;
        var blue = new Audio("sounds/blue.mp3")
        check(t, blue);
        console.log(arrToRecordInput);
    })

}
function check(t, music) {
    if (arrToRecordInput[t - 1] === arr[t - 1]) {
        music.play();
        console.log("you pressed correct button");
        if (t == arr.length) {
            $(".btn").unbind();
            console.log("YOU WON");
            setTimeout(() => {
             play();   
            }, 1000);
        }
    }
    else {
        $(".btn").unbind();
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        console.log("YOU PRESSED WRONG KEY");
        arr.pop();
        setTimeout(() => {
            play();   
           }, 1000);
    }
}
function showCurrentPattern(arr) {
    switch (arr[i]) {
        case 0:
            setTimeout(() => {
                $(".green").addClass("pressed");
                var green = new Audio("sounds/green.mp3");
                green.play();
            }, 400);
            setTimeout(() => {
                $(".green").removeClass("pressed");
                i++;
                showCurrentPattern(arr);
            }, 800);
            break;
        case 1:
            setTimeout(() => {
                $(".red").addClass("pressed");
                var red = new Audio("sounds/red.mp3");
                red.play();
            }, 400);
            setTimeout(() => {
                $(".red").removeClass("pressed");
                i++;
                showCurrentPattern(arr);
            }, 800);
            break;
        case 2:
            setTimeout(() => {
                $(".yellow").addClass("pressed");
                var yellow = new Audio("sounds/yellow.mp3");
                yellow.play();
            }, 400);
            setTimeout(() => {
                $(".yellow").removeClass("pressed");
                i++;
                showCurrentPattern(arr);
            }, 800);
            break;
        case 3:
            setTimeout(() => {
                $(".blue").addClass("pressed");
                var blue = new Audio("sounds/blue.mp3");
                blue.play();
            }, 400);
            setTimeout(() => {
                $(".blue").removeClass("pressed");
                i++;
                showCurrentPattern(arr);
            }, 800);
            break;
        default:
            break;
    }
    return;
};
