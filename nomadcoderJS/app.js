function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("injung", 10);


function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a, b) {
    console.log(a / b)
}


plus(8, 60);
divide(98, 20);


const player = {
    name: "injung",
    sayHi: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you")
    },
};

player.sayHi("lynn");
player.sayHi("injung");