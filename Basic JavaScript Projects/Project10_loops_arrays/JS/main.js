
function Call_Loop() {
    var counter = 1;
    var display = "";
    while (counter < 11) {
        display += "<br>" + counter;
        counter++;
    }
    document.getElementById("Loop").innerHTML = display;
}

function Check_Length() {
    var string = document.getElementById("len_string").value;
    console.log(string);
    document.getElementById("Length").innerHTML = "The string is " + string.length + " characters long.";
}

function Create_List() {
    var Content = "";
    var X;
    var Instruments = ["Guitar", "Piano", "Violin", "Viola", "Cello"];
    for (X = 0; X < Instruments.length; X++) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("List").innerHTML = Content;
}

//This little array function will generate a random number, round it down and use that 
//for the index of the array to pull and insert into the element. Cute. Simple. 
function array_Function() {
    var greetings = [];
    let greetingNumber = Math.floor(Math.random() * 6);
    greetings[0] = "Hello, there!";
    greetings[1] = "You're looking snazzy today.";
    greetings[2] = "Hmm, did you code any today?";
    greetings[3] = "Today's a fine day for some Javascript";
    greetings[4] = "Do something nice for someone today!";
    greetings[5] = "I think I'll go for some ice cream.";
    console.log(greetingNumber);

    //Gonna use a return to pass a greeting in. Keep things simple and constrained.
    function getGreeting() {
        return greetings[greetingNumber];
    }
    //Displays whatever greeting the getGreeting() function hands off thanks to the return keyword.
    document.getElementById("Array").innerHTML = getGreeting();
}

//We need to create a constant object {} and include properties with values.
//We also need to create a function to be called from the HTML file that includes a property value
//of that object.
//We then need to come back, change a property's value and add a new property with a value
//and display a string that includes those values.
function constant_Function() {
    const KanjouEffect = {
        Year: 2008,
        Genre: "Japanese Rock",
        Tracks: 8,
        Length: "52:25",
        Image: "./img/Kanjou_Effect.jpg",
    }
    document.getElementById("Constant").innerHTML = "Kanjou Effect is my favorite Album by One Ok Rock. It was released in " + KanjouEffect.Year + "!";
    KanjouEffect.hasBonusEdition = true;
    //Checking to see if my object looks like I think it does.
    console.table(KanjouEffect);
    KanjouEffect.Genre = "Pop Punk / JRock";
    //Checking again because reasons.
    console.table(KanjouEffect);
    document.getElementById("Constant").innerHTML = "Kanjou Effect is in the " + KanjouEffect.Genre + " genre and does it have a bonus edition??: " + KanjouEffect.hasBonusEdition + "... It does!";
}

//Make an object with the 'let' keyword, ensure one of the properties has a method, and give it a return. Pass that to an id-specific element.
//TODO - Learn how to convert and object to an array, either shallow / 2 Dimensional.
let TrackList = {
    Track1: "恋ノアイボウ心ノクピド",
    Track2: "どっぺるゲンガー",
    Track3: "皆無 Nothing",
    Track4: "20 Years Old",
    Track5: "Living Dolls",
    Track6: "Break My Strings",
    Track7: "Sonzai Shōmei (存在証明 Existential Proof)",
    Track8: "Convincing",
    Track9: "My Sweet Baby",
    Track10: "Reflection",
    Track11: "Viva Violent Fellow ～美しきモッシュピット～",
    Track12: "Just (With \"Bossa Nova\" hidden track)",
    favoriteTrack: function() {
        return "My favorite track is " + this.Track11 + ".";
    },
}

document.getElementById("favoriteTrack").innerHTML = TrackList.favoriteTrack();
