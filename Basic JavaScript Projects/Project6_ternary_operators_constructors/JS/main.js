//basic comparison function, but there's no protection in 
//the input field from text....
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + ' to ride.';
}
//Similar to the above this one uses a >= operator to see if user is 18 or older.
function Voting_Check() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? 'You are old enough' : 'You are not old enough';
    document.getElementById("Vote").innerHTML = Can_vote + ' to vote.';
}
//Creates a vehicle class and constructor. 'This' binds the parameters to the object used in creation.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Some example instantiations of Class Vehicle. These are objects/instances of that class.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//This shows all of the object properties for Object Erik of class Vehicle.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//Similarly, this is a class for Album including a constructor.
function Album(Band, Genre, Year, Tracks) {
    this.Album_Band = Band;
    this.Album_Genre = Genre;
    this.Album_Year = Year;
    this.Album_Tracks = Tracks;
}

//We've got an object Kanjou of Class Album and we display it in a similar fashion.
var Kanjou = new Album("One Ok Rock", "Japanese Rock", "2008", 8);
function displayKanjou() {
    document.getElementById("New_and_This").innerHTML = "The album Kanjou Effect was written by " + Kanjou.Album_Band + " in the year " + Kanjou.Album_Year + " with " + Kanjou.Album_Tracks + " tracks in the " + Kanjou.Album_Genre + " genre.";
}

//Nested function...
//So we have Count_Function() that's responsible just for updating the element with the 
//return from the Count() function..
//The count() function is defined after by using a starting point
//Inside the Count() function is a Plus_one() function that increments the starting point 
//and returns the new starting point, which is return up to the Count which updates our element.
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {
            Starting_point += 1;
        }
        Plus_one();
        return Starting_point;
    }
}