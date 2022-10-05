console.log('Start');

const loginUser = async (username, password) => {
  setTimeout(() => {
    console.log('We have a valid user');
    return { account: username };
  }, 3000);
};

const retrieveUserLikedProgrammes = async (username) => {
  // simulating the retrieval of liked programmes using setTimeout:
  setTimeout(() => {
    return ['Breaking Bad', '24', 'Friends'];
  }, 1000);
};

const retrieveProgrammeDetail = async (programmeName) => {
  //another callback
  // simulating the retrieval of programme details using setTimeout:
  setTimeout(() => {
    return {
      programmeName,
      duration: '180m',
      supportedLanguages: ['en', 'fr'],
    };
  }, 2000);
};

try {
  const loggedInUser = await loginUser('foo@bar.com', 12312);
  try {
    const likedProgrammes = await retrieveUserLikedProgrammes(loggedInUser);
  } catch (e) {
    // tell user they are not valid ....
  }
  const programmeDetail = await retrieveProgrammeDetail(likedProgrammes[0]);
} catch (e) {}
