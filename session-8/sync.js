// synchronisation

// setTimeout

const timeOutTimer = setTimeout(() => {
  console.log('Hello');
}, 2000);

clearTimeout(timeOutTimer);

const getFlightDetails = () => {
  return {
    flights: [
      {
        id: 1,
        airline: 'British Airways',
        aircraft: '737',
      },
      {
        id: 2,
        airline: 'Emirates',
        aircraft: '888',
      },
    ],
  };
};

const timer = setInterval(() => {
  console.log(getFlightDetails());
}, 3000);

clearInterval(timer);

// =============================

// Promises

function nuisanceFunction() {
  setTimeout(() => {
    console.log('We are in a function');
  }, 3000);
}

console.log('Start');

nuisanceFunction();

console.log('Stop');

// Netflix

console.log('Start');

const loginUser = (username, password, callback) => {
  setTimeout(() => {
    console.log('We have a valid user');
    callback({ account: username });
  }, 3000);
};

const retrieveUserLikedProgrammes = (username, callback) => {
  // simulating the retrieval of liked programmes using setTimeout:
  setTimeout(() => {
    callback(['Breaking Bad', '24', 'Friends']);
  }, 1000);
};

const retrieveProgrammeDetail = (programmeName, callback) => {
  //another callback
  // simulating the retrieval of programme details using setTimeout:
  setTimeout(() => {
    callback({
      programmeName,
      duration: '180m',
      supportedLanguages: ['en', 'fr'],
    });
  }, 2000);
};

loginUser('foo@bar.com', 12314, (loggedInUser) => {
  console.log('Logged in user', loggedInUser);

  retrieveUserLikedProgrammes(loggedInUser, (likedProgrammmes) => {
    console.log('Liked programmes', likedProgrammmes);

    retrieveProgrammeDetail(likedProgrammmes[0], (detailsOfProgramme) => {
      console.log('Details', detailsOfProgramme);
    });
  });
});

console.log('Finish');
