
let speed = prompt('Please enter your speed in km/h');

const speedDetector = (speed) => {
    let demeritPoints = 0;
    if (speed < 70 && speed > 0) {
        console.log('OK');
    } 
    else if (speed >= 70 && speed <= 70) {
        demeritPoints += 1
        console.log('Speeding');
    } 
    else if (speed >= 75 && speed <= 80) {
        demeritPoints += 2
        console.log('Speeding');
    }
    else if (speed >= 81 && speed <= 85) {
        demeritPoints += 3
        console.log('Speeding');
    }
    else if (speed >= 86 && speed <= 100) {
        demeritPoints += 4
        console.log('Speeding');
    }
    else if (speed >= 101 && speed <= 105) {
        demeritPoints += 5
        console.log('Speeding');
    }
    else if (speed >= 106 && speed <= 110) {
        demeritPoints += 6
        console.log('Speeding');
    }
    else if (speed >= 111 && speed <= 115) {
        demeritPoints += 7
        console.log('Speeding');
    }
    else if (speed >= 116 && speed <= 120) {
        demeritPoints += 8
        console.log('Speeding');
    }
    else if (speed >= 121 && speed <= 125) {
        demeritPoints += 9
        console.log('Speeding');
    }
    else if (speed >= 126 && speed <= 130) {
        demeritPoints += 10
        console.log('Speeding');
    }
    else if (speed >= 131 && speed <= 135) {
        demeritPoints += 11
        console.log('Speeding');
    }
    else if (speed >= 136 && speed <= 140) {
        demeritPoints += 12
        console.log('Speeding and License suspended');
    }
    else if (speed > 141) {
        demeritPoints += 13
        console.log('Speeding and License suspended');
    }
    else {
        console.log('Please enter a valid speed');
    }


    if (demeritPoints > 12) {
        console.log('License suspended');
    }
    console.log(demeritPoints);
}

speedDetector(speed);
