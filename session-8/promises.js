const promise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve({ message: 'Hello' });
    }, 3000);
  } catch (e) {
    reject(e);
  }
});

const loginUser = (username, password) => {
  return new Promise((resolve) => {
    // simulate a server checking the username and password using setTimeout:
    setTimeout(() => {
      console.log('Now we have the data username!');
      resolve({ account: username });
    }, 3000);
  });
};

const retrieveUserLikedProgrammes = (username) => {
  return new Promise((resolve) => {
    // simulating the retrieval of liked programmes using setTimeout:
    setTimeout(() => {
      resolve(['Breaking Bad', '24', 'Friends']);
    }, 1000);
  });
};
const retrieveProgrammeDetail = (programmeName) => {
  return new Promise((resolve) => {
    // simulating the retrieval of programme details using setTimeout:
    setTimeout(() => {
      resolve({
        programmeName,
        duration: '180m',
        supportedLanguages: ['en', 'fr'],
      });
    }, 2000);
  });
};

loginUser('foo@bar.com', 1234)
  .then((loggedInUser) => retrieveUserLikedProgrammes(loggedInUser))
  .then((likedProgrammes) => retrieveProgrammeDetail(likedProgrammes[0]))
  .then((details) => console.log(details));
