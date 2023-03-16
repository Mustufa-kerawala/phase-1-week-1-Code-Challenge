const gradeGenerator = () => {
    let grade = prompt('Please enter your grade (0-100): ')
    if (grade >= 79 && grade <= 100) {
        alert('You got an A!')
    }
    else if (grade >= 60 && grade < 79) {
        alert('You got a B!')
    }
    else if(grade >= 49 && grade < 60) {
        alert('You got a C!')
    }
    else if(grade >= 49 && grade < 60) {
        alert('You got a D!')
    }
    else if(grade >= 0 && grade < 49) {
        alert('You got an E!')
    }
    else {
        alert('Please enter a valid grade')
    }

}


gradeGenerator();