document.addEventListener('DOMContentLoaded', function() {

    // Get answers worth no points
    let zeros = document.querySelectorAll('.zeros');

    // Add event listeners
    for (let i = 0; i < zeros.length; i++) {
        zeros[i].addEventListener('click', function() {

            // Set background color to green
            zeros[i].style.backgroundColor = 'Green';
            zeros[i].parentElement.querySelector('.feedback').innerHTML = 'This answer is worth 0 points.';
        });
    }

    // Get answers worth one point
    let ones = document.querySelectorAll('.ones');

    // Add event listeners
    for (let i = 0; i < ones.length; i++) {
        ones[i].addEventListener('click', function() {

            // Set background color to green
            ones[i].style.backgroundColor = 'Green';
            ones[i].parentElement.querySelector('.feedback').innerHTML = 'This answer is worth 1 point!';
        });
    }

    
    // Get answers worth two points
    let twos = document.querySelectorAll('.twos');

    // Add event listeners
    for (let i = 0; i < twos.length; i++) {
        twos[i].addEventListener('click', function() {

            // Set background color to green and display points
            twos[i].style.backgroundColor = 'Green';
            twos[i].parentElement.querySelector('.feedback').innerHTML = 'This answer is worth 2 points!';
        });
    }

    // Get answers worth three points
    let threes = document.querySelectorAll('.threes');

    // Add event listeners
    for (let i = 0; i < threes.length; i++) {
        threes[i].addEventListener('click', function() {

            // Set background color to green and display points
            threes[i].style.backgroundColor = 'Green';
            threes[i].parentElement.querySelector('.feedback').innerHTML = 'This answer is worth 3 points!';
        });
    }

    // Get answers worth four points
    let fours = document.querySelectorAll('.fours');

    // Add event listeners
    for (let i = 0; i < fours.length; i++) {
        fours[i].addEventListener('click', function() {

            // Set background color to green and display points
            fours[i].style.backgroundColor = 'Green';
            fours[i].parentElement.querySelector('.feedback').innerHTML = 'This answer is worth 4 points!';
        });
    }

    // Get answers worth five points
    let fives = document.querySelectorAll('.fives');

    // Add event listeners
    for (let i = 0; i < fives.length; i++) {
        fives[i].addEventListener('click', function() {

            // Set background color to green and display points
            fives[i].style.backgroundColor = 'Green';
            fives[i].parentElement.querySelector('.feedback').innerHTML = 'This answer is worth 5 points!';
        });
    }    

    // Change incorrect answer to red
    let incorrects = document.querySelectorAll(".incorrect");
    for (let i = 0; i < incorrects.length; i++) {
        incorrects[i].addEventListener('click', function() {
            incorrects[i].style.backgroundColor = 'Red';
            incorrects[i].parentElement.querySelector('.feedback').innerHTML = 'Incorrect';
        });
    }

    // Check free response submission
    document.querySelector('#check').addEventListener('click', function() {
        let input = document.querySelector('input');
        if (input.value === '2') {z
            input.style.backgroundColor = 'green';
            input.parentElement.querySelector('.feedback').innerHTML = 'Correct!';
        }
        else {
            input.style.backgroundColor = 'red';
            input.parentElement.querySelector('.feedback').innerHTML = 'Incorrect';
        }
    });
});


/*    for (let i = 0; i < corrects.length; i++) {
    corrects[i].addEventListener('click', function() {

        // Set background color to green
        corrects[i].style.backgroundColor = 'Green';
        corrects[i].parentElement.querySelector('.feedback').innerHTML = 'Correct!';
    });
}
*/