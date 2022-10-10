// Obtaining data from an API

const getUserData = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const data = await response.json();
  console.log('Body', data);
};

const userId = 2;
getUserData(userId);
