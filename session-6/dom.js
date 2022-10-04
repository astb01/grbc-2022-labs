console.dir(document);

const title = document.getElementById('title');
console.log('Title', title);

const messageField = document.getElementById('messageId');

// messageField.value

// event handlers

const printInput = (e) => {
  console.log(e);

  const { value } = e.target;
};

messageField.addEventListener('change', printInput);

const btn = document.getElementById('clickBtn');
btn.addEventListener('click', () => {
  alert('Boo');
});

const listItems = document.getElementsByClassName('listItem');
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  const li = listItems[i];
  li.addEventListener('click', (e) => {
    // console.log(e);
    const { innerText } = e.target;

    e.target.innerText = innerText + `-9999`;
  });
}

const famousPeople = [
  {
    id: 1,
    name: 'David Beckham',
  },
];

console.log(famousPeople);
console.log(JSON.stringify(famousPeople));

// storage
window.localStorage.setItem('famousPeople', JSON.stringify(famousPeople));

// session storage
if (window) {
  window.sessionStorage.setItem('famousPeople', JSON.stringify(famousPeople));
}

// extract values from storage
const famousePeopleAsStr = window.localStorage.getItem('famousPeople');
const famousPeopleAsObj = JSON.parse(famousePeopleAsStr);

console.log('Famous People back as an object', famousPeopleAsObj);

const computerChoice = document.createElement('img');
computerChoice.src = 'rock.png';
computerChoice.id = 'rock';

const computerChoiceDiv = document.getElementById('computerChoiceDiv');
computerChoiceDiv.innerHTML = computerChoice;
