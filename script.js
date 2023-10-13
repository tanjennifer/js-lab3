"use strict";


//1. Declare a variable named submissions that is initialized to an array; made objects inside array
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

//2. 
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

  //called ^ addSubmission


//3. declared a function, inside function with their two parameter. used splice to remove
// // index 1 (joe) from the object's array
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1)
   };
   
   deleteSubmissionByIndex(submissions, 1); 
   console.log(submissions);



//4. Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  
// Incorporate the findIndex method and the splice method.
const deleteSubmissionByName = (array, name) => {
    const index = array.findIndex(
        
        (itemName) => {
        return itemName.name === name;

    });
    array.splice(index, 1);
};



console.log(submissions);
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);




//5. Declare a function named editSubmission
// Parameter(s): array, index, score
//1, Functionality: update an object’s score in the array at the specified 
// index. 
//
//2. Use conditional statements to set the value for the passed property to true 
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


editSubmission(submissions, 1, 80);
// console.log(submissions);




//6. Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. 
//Use FIND method.
const findSubmissionByName = (array, name) => {

    const subObj = array.find(
        
        (arrayItem) => {
        return arrayItem.name === name;


    });

   return subObj;

};

const result = findSubmissionByName(submissions, "Bill");
console.log(result);


// array of obbj = submissions
// want you to return on of those submissions find out which submission has the 
// name property 



// // 7. Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. 

const findLowestScore = (array) => {

    let lowestScore = array[0]; 
  
    for (let i = 0; i < submissions.length; i++ ) {
      if (submissions[i] < lowestScore.score) {
        lowestScore = submissions[i];
      }
    }
  
    return lowestScore;
  };


// const findLowestScore2 = (submissionsArray) => {
//     // superlative to first thing in array 
//     let lowestScore = array[0];

//     // submissions is a group of submission objects; forEach submission in submissionsArray
//     submissionsArray.forEach((submission) => {
//       if (submission.score < lowestScore.score ) {
//         lowestScore = submission;
//       }
//     });

//     return lowestScore;
//   };



