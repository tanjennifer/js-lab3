"use strict";


// 1. Declare a variable named submissions that is initialized to an array; made objects inside array
const submissions = [
    {
      name: "Jane",
      score: 95,
      passed: true
    },
    {
      name: "Joe",
      score: 77,
      passed: true
    },
    {
      name: "Jack",
      score: 59,
      passed: false
    },
    {
      name: "Jill",
      score: 88,
      passed: true
    }
  ];

  
console.log(submissions);


// 2. Declare the function with its parameter. 
// // Construct a new object named Submission, pushed to array w/ push()
// // call function??
const addSubmission = (array, newName, newScore)=> {
    const passedProperty = newScore >= 60;
  
    const Submission = {
      name: newName,
      score: newScore,
      passed: passedProperty,
    };
    array.push(Submission);
  }
  console.log(submissions);

  addSubmission(submissions, "Bill", 100);

  //called ^ addSubmission, added new string and number


// 3. declared a function, inside function with their two parameter. used splice() to remove
// // index 1 (joe) from the object's array
const deleteSubmissionByIndex = (array, index) => { array.splice(index, 1) };
   
   deleteSubmissionByIndex(submissions, 1); 
   console.log(submissions);



// 4. Declare a function named deleteSubmissionByName
// // used findIndex(); execute fn for ea array.
// // set a variable, included itemName element; in return the obj name will go thro the names?
// // splice () used to remove array elememt, called deleteSubmissionByName, removed Jill
const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex((itemName) => {
        return itemName.name === name;

    });
    array.splice(index, 1);
};



console.log(submissions);
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);


// 5. Declare a function named editSubmission
//To do 1: update an object’s score in the array at the specified index. 
// // array[index] - targeted the score and that = score
//To do 2. Use conditional statements to set the value for the passed property to true 
// if the score is greater than or equal to 60 and false otherwise. No array method necessary.

const editSubmission = (array, index, score) => {
    //update objs score at specified index
    array[index].score = score;
if (score >= 60) {
    array[index].passed = true;
} else {
    array[index].passed = false;
}
console.log(array[index]);
};


editSubmission(submissions, 1, 82);
console.log(submissions);

//called editSubmission, editted whatever index and their score


// 6. find (); return one of those submissions, find out which subm has the name property
// // similar to findIndex()?
// // the element list for name that goes thro ea line for name?
const findSubmissionByName = (array, name) => {

    const subObj = array.find(
        
        (arrayItem) => {
        return arrayItem.name === name;


    });

   return subObj;

};

const result = findSubmissionByName(submissions, "Bill");
console.log(result);




// 7. Declare a function named findLowestScore
// Functionality: return the object in the array that has the lowest score. 
// // made a for loop to go through the list of array; submissions loops thro every score to find the lowest
// // set a lowestScore variable that = first array obj??
// // whatever 'submissions' score = lowestScore; return

const findLowestScore = (array) => {

    let lowestScore = array[0]; 
  
    for (let i = 0; i < submissions.length; i++ ) {
      if (submissions[i] < lowestScore.score) {
        lowestScore = submissions[i];
      }
    }
  
    return lowestScore;
  };



// 8.



// 9. Declare a function named filterPassing
// Functionality: return a new array using the filter method. 
//The filter method should find objects in the array that have passing scores. 

const filterPassing = (array) => {
    return array.filter(
        (arrayItem) => {
            return arrayItem.passed;
        }
    )
};

console.log(filterPassing(submissions));



// 10. Declare a function named filter90AndAbove...Parameter(s): array
// Functionality: return a new array using the filter method. 
// The filter method should find objects in the array that have scores greater than or equal to 90.
// // set arrat.score > 90; only those 90 <= should show on console

const filter90AndAbove = (array) => {
    return array.filter(
        (arrayItem) => {
            return arrayItem.score > 90;
        }
    )
};

console.log(filter90AndAbove(submissions));