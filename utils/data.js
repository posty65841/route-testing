const users = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  
];

const thoughts = [
  "Go to bed, you'll feel better in the morning is the human version of Did you turn it off and turn it back on again?",
  'Maybe plants are really farming us, giving us oxygen until we eventually expire and turn into mulch which they can consume',
  "Theme parks can snap a crystal clear picture of you on a roller coaster at 70 mph, but bank cameras can't get a clear shot of a robber standing still.",
  "Lawyers hope you get sued, doctors hope you get sick, cops hope you're criminal, mechanics hope you have car trouble, but only a thief wishes prosperity for you.",
  
];

/// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomReactions };
