/*

Copyright 2018 Sambhav Saggi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
var mina    = document.getElementById("mina");
var element = document.getElementById("date");
var monTop  = document.getElementById("mon-top");
var tueTop  = document.getElementById("tue-top");
var wedTop  = document.getElementById("wed-top");
var thuTop  = document.getElementById("thu-top");
var friTop  = document.getElementById("fri-top");
var n = new Date();
var x = n.getMonth() + 1;
var d = n.getDate();
var l = n.getDay() + 1;
var x = n.getMonth() + 1;
var d = n.getDate();
var l = n.getDay() + 1;
var m;
switch(x) {
    case 1:
        m = "January ";
        break;
    case 2:
        m = "February ";
        break;
    case 3:
        m = "March ";
        break;
    case 4:
        m = "April ";
        break;
    case 5:
        m = "May ";
        break;
    case 6:
        m = "June ";
        break;
    case 7:
        m = "July ";
        break;
    case 8:
        m = "August ";
        break;
    case 9:
        m = "September ";
        break;
    case 10:
        m = "October ";
        break;
    case 11:
        m = "November ";
        break;
    case 12:
        m = "December ";
        break;
}
switch(l) {
    case 1:
        element.innerHTML = "Sunday, " + m + d;
        break;
    case 2:
        element.innerHTML = "Monday, " + m + d;
        monTop.style.background = "#DF0030";
        break;
    case 3:
        element.innerHTML = "Tuesday, " + m + d;
        tueTop.style.background = "#DF0030";
        break;
    case 4:
        element.innerHTML = "Wednesday, " + m + d;
        wedTop.style.background = "#DF0030";
        break;
    case 5:
        element.innerHTML = "Thursday, " + m + d;
        thuTop.style.background = "#DF0030";
        break;
    case 6:
        element.innerHTML = "Friday, " + m + d;
        friTop.style.background = "#DF0030";
        break;
    case 7:
        element.innerHTML = "Saturday, " + m + d;
        break;
}

//Populate the lists
var monList = document.getElementById("mon-list");
var tueList = document.getElementById("tue-list");
var wedList = document.getElementById("wed-list");
var thuList = document.getElementById("thu-list");
var friList = document.getElementById("fri-list");

var monSelection  = document.getElementById("mon-selection");
var tueSelection  = document.getElementById("tue-selection");
var wedSelection  = document.getElementById("wed-selection");
var thuSelection  = document.getElementById("thu-selection");
var friSelection  = document.getElementById("fri-selection");

function newEntery(dayOfTheWeek, teacher, message) {
    var output = "<div><a onclick=\'setValue(" + dayOfTheWeek + "," + "\"" + teacher + "\"" + ")\'>" + teacher + "<br><div class=\"sub\">" + message + "</div></a>" + "<br><br><br><br><br></div>";
    switch(dayOfTheWeek) {
        case 1:
            console.log(output);
            monList.innerHTML += output;
            break;
        case 2:
            console.log(output);
            tueList.innerHTML += output;
            break;
        case 3:
            console.log(output);
            wedList.innerHTML += output;
            break;
        case 4:
            console.log(output);
            thuList.innerHTML += output;
            break;
        case 5:
            console.log(output);
            friList.innerHTML += output;
            break;
    }
}

function endAll() {
    var endThing = "";
    monList.innerHTML += endThing;
    tueList.innerHTML += endThing;
    wedList.innerHTML += endThing;
    thuList.innerHTML += endThing;
    friList.innerHTML += endThing;
}


// Get the modals
var monModal = document.getElementById("mon-modal");
var tueModal = document.getElementById("tue-modal");
var wedModal = document.getElementById("wed-modal");
var thuModal = document.getElementById("thu-modal");
var friModal = document.getElementById("fri-modal");

// Get the buttons that open the modals
var monOpen = document.getElementById("mon-open");
var tueOpen = document.getElementById("tue-open");
var wedOpen = document.getElementById("wed-open");
var thuOpen = document.getElementById("thu-open");
var friOpen = document.getElementById("fri-open");

// Get the <span> elements that close the modals
var monClose = document.getElementById("mon-close");
var tueClose = document.getElementById("tue-close");
var wedClose = document.getElementById("wed-close");
var thuClose = document.getElementById("thu-close");
var friClose = document.getElementById("fri-close");

var monPlus = document.getElementById("mon-plus");
var tuePlus = document.getElementById("tue-plus");
var wedPlus = document.getElementById("wed-plus");
var thuPlus = document.getElementById("thu-plus");
var friPlus = document.getElementById("fri-plus");

var monRemove = document.getElementById("mon-remove");
var tueRemove = document.getElementById("tue-remove");
var wedRemove = document.getElementById("wed-remove");
var thuRemove = document.getElementById("thu-remove");
var friRemove = document.getElementById("fri-remove");

//Monday
// When the user clicks on the button, open the modal
monOpen.onclick = function() {
    monModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
monClose.onclick = function() {
    monModal.style.display = "none";
};


//Tuesday
// When the user clicks on the button, open the modal
tueOpen.onclick = function() {
    tueModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
tueClose.onclick = function() {
    tueModal.style.display = "none";
};


//Wednesday
// When the user clicks on the button, open the modal
wedOpen.onclick = function() {
    wedModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
wedClose.onclick = function() {
    wedModal.style.display = "none";
};


//Thursday
// When the user clicks on the button, open the modal
thuOpen.onclick = function() {
    thuModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
thuClose.onclick = function() {
    thuModal.style.display = "none";
};


//Friday
// When the user clicks on the button, open the modal
friOpen.onclick = function() {
    friModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
friClose.onclick = function() {
    friModal.style.display = "none";
};

mina.onclick = function(event) {
    if ((event.target == monModal)||(event.target == tueModal)||
    (event.target == wedModal)||(event.target == thuModal)||
    (event.target == friModal)) {
        monModal.style.display = "none";
        tueModal.style.display = "none";
        wedModal.style.display = "none";
        thuModal.style.display = "none";
        friModal.style.display = "none";
    }    
};

function closeAll() {
    monModal.style.display = "none";
    tueModal.style.display = "none";
    wedModal.style.display = "none";
    thuModal.style.display = "none";
    friModal.style.display = "none";
}

function setValue(dayOfTheWeek, teacher) {
    closeAll();
    switch(dayOfTheWeek) {
        case 1:
            monSelection.innerHTML = teacher;
            monPlus.style.visibility = "hidden";
            monRemove.style.visibility = "visible";
            break;
        case 2:
            tueSelection.innerHTML = teacher;
            tuePlus.style.visibility = "hidden";
            tueRemove.style.visibility = "visible";
            break;
        case 3:
            wedSelection.innerHTML = teacher;
            wedPlus.style.visibility = "hidden";
            wedRemove.style.visibility = "visible";
            break;
        case 4:
            thuSelection.innerHTML = teacher;
            thuPlus.style.visibility = "hidden";
            thuRemove.style.visibility = "visible";
            break;
        case 5:
            friSelection.innerHTML = teacher;
            friPlus.style.visibility = "hidden";
            friRemove.style.visibility = "visible";
            break;
    }
}

/*
//For the removal of panther time selections
monRemove.style.visibility = "hidden";
tueRemove.style.visibility = "hidden";
wedRemove.style.visibility = "hidden";
thuRemove.style.visibility = "hidden";
friRemove.style.visibility = "hidden";
monRemove.style.border.bottom = "hidden";

function reopen(dayOfTheWeek) {
    switch(dayOfTheWeek) {
        case 1:
            monSelection.innerHTML = "";
            monPlus.style.visibility = "visible";
            monRemove.style.visibility = "hidden";
            break;
        case 2:
            tueSelection.innerHTML = "";
            tuePlus.style.visibility = "visible";
            tueRemove.style.visibility = "hidden";
            break;
        case 3:
            wedSelection.innerHTML = "";
            wedPlus.style.visibility = "visible";
            wedRemove.style.visibility = "hidden";
            break;
        case 4:
            thuSelection.innerHTML = "";
            thuPlus.style.visibility = "visible";
            thuRemove.style.visibility = "hidden";
            break;
        case 5:
            friSelection.innerHTML = "";
            friPlus.style.visibility = "visible";
            friRemove.style.visibility = "hidden";
            break;
    }
}
*/

newEntery(1, "Silent Reading w/ Mr. Hunsberger", "Read silently with Mr. Hunsberger");
newEntery(1, "Test2", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(1, "Test3", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(1, "Test4", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(1, "Test5", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");

newEntery(2, "Silent Reading w/ Mr. Hunsberger", "Read silently with Mr. Hunsberger");
newEntery(2, "Test2", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(2, "Test3", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(2, "Test4", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(2, "Test5", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");

newEntery(3, "Silent Reading w/ Mr. Hunsberger", "Read silently with Mr. Hunsberger");
newEntery(3, "Test2", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(3, "Test3", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(3, "Test4", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(3, "Test5", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");

newEntery(4, "Silent Reading w/ Mr. Hunsberger", "Read silently with Mr. Hunsberger");
newEntery(4, "Test2", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(4, "Test3", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(4, "Test4", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(4, "Test5", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");

newEntery(5, "Silent Reading w/ Mr. Hunsberger", "Read silently with Mr. Hunsberger");
newEntery(5, "Test2", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(5, "Test3", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(5, "Test4", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");
newEntery(5, "Test5", "Test description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur. ");


endAll();
