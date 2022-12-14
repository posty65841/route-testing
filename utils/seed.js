const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomReactions, getRandomEmail } = require('./data');



const userNames= [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  
];

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 4; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(20);

    const userName= userNames[i]
    // results = results.filter ( result => result )


    const email = getRandomEmail();

    users.push({
      userName,
      email,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add Thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtName: 'UCLA',
    inPerson: false,
    users: users.map(user => user._id),
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
