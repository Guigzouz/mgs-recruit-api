// helpers/new-recruit-randomizer.js

function generateRandomRecruit(motherbase_id) {
  const adjectives = [
    "Silent",
    "Revolver",
    "Liquid",
    "Solid",
    "Venom",
    "Thunder",
    "Shadow",
    "Burning",
    "Phantom",
    "Dark",
  ];
  const nouns = [
    "Wolf",
    "Viper",
    "Ocelot",
    "Hawk",
    "Fox",
    "Tiger",
    "Falcon",
    "Raven",
    "Panther",
    "Eagle",
  ];

  const randomFirstName =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomLastName = nouns[Math.floor(Math.random() * nouns.length)];
  const randomAge = Math.floor(Math.random() * (50 - 18 + 1)) + 18; // Age between 18 and 50
  const randomGender = Math.random() > 0.5 ? "M" : "F"; // Randomly assigns "M" or "F"
  const randomRecruitmentDate = new Date(
    Date.now() - Math.floor(Math.random() * 315360000000)
  ); // Random date within ~10 years
  const generateRandomPoints = () => Math.floor(Math.random() * 101); // Points between 0 and 100

  return {
    first_name: randomFirstName,
    last_name: randomLastName,
    age: randomAge,
    gender: randomGender,
    recruitment_date: randomRecruitmentDate,
    combat_unit_points: generateRandomPoints(),
    research_and_development_points: generateRandomPoints(),
    mess_hall_points: generateRandomPoints(),
    medical_points: generateRandomPoints(),
    intelligence_points: generateRandomPoints(),
    motherbase_id: motherbase_id,
  };
}

function generateRandomCodename() {
  const userAdjectives = [
    "Stealth",
    "Crimson",
    "Silent",
    "Noble",
    "Savage",
    "Lone",
    "Eagle",
    "Revolver",
    "Shotgun",
    "Fierce",
  ];
  const userNouns = [
    "Ghost",
    "Specter",
    "Snake",
    "Phoenix",
    "Lion",
    "Assassin",
    "Hunter",
    "Sniper",
    "Shark",
    "Knight",
  ];

  const randomFirstName =
    userAdjectives[Math.floor(Math.random() * userAdjectives.length)];
  const randomLastName =
    userNouns[Math.floor(Math.random() * userNouns.length)];

  return `${randomFirstName} ${randomLastName}`;
}

module.exports = { generateRandomRecruit, generateRandomCodename };
