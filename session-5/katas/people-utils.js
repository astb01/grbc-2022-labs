export const findMales = (people) => findByGender(people, 'Male');

export const findFemales = (people) => findByGender(people, 'Female');

const findByGender = (people, gender) => {
  checkPeopleExist(people);

  return people.filter((person) => person.gender === gender).map(formatName);
};

export const findPeopleUnder40 = (people) =>
  people.filter((person) => person.age <= 40).map(formatName);

const formatName = ({ first_name, last_name }) => `${first_name} ${last_name}`;

export const getAbbreviatedNames = (people) =>
  people.map(
    (person) =>
      `${
        person.gender === 'Male' ? 'Mr' : 'Ms'
      } ${person.first_name[0].toUpperCase()}. ${person.last_name}`,
  );

export const findAverageAge = (people) => {
  checkPeopleExist(people);

  const total = people.reduce((total, acc) => acc.age + total, 0);
  return total / people.length;
};

const checkPeopleExist = (people) => {
  if (!people) {
    throw new Error('No people provided');
  }
};

export const findFinnishPeople = (people) => findBySubject(people, 'Finnish');

export const findPolishPeople = (people) => findBySubject(people, 'Polish');

const findBySubject = (people, subject) => {
  checkPeopleExist(people);

  return people
    .filter((person) => person.subject.toUpperCase() === subject.toUpperCase())
    .map(formatName);
};

export const findPeopleBySurnamePrefix = (people, surnameLetterPrefix) =>
  people
    .filter(
      (person) =>
        person.last_name[0].toUpperCase() === surnameLetterPrefix.toUpperCase(),
    )
    .map(formatName);

// export const getPeopleGroupedBySubjectUsingReducer = (people) =>
//   people.reduce((peopleByGroup, person) => {
//     const { subject } = person;
//     let subjectPeople = [];

//     if (subject in peopleByGroup) {
//       let currentSubjectPeople = peopleByGroup[subject];
//       subjectPeople = [...currentSubjectPeople];
//       subjectPeople.push(formatName(person)); // all people in subject + new entry
//     } else {
//       subjectPeople.push(formatName(person)); // new entry
//     }

//     peopleByGroup[subject] = subjectPeople;

//     return peopleByGroup;
//   }, {});

export const getPeopleGroupedBySubject = (people) => {
  const subjectObj = {};

  people.forEach((person) => {
    const { subject } = person;
    let subjectPeople = [];

    if (subject in subjectObj) {
      let currentSubjectPeople = subjectObj[subject];
      subjectPeople = [...currentSubjectPeople];
      subjectPeople.push(formatName(person)); // all people in subject + new entry
    } else {
      subjectPeople.push(formatName(person)); // new entry
    }

    // { 'subject': 'French', 'people': ['boo', 'foo'] }

    subjectObj[subject] = subjectPeople; // overriding the key/value or setting as new entry
  });

  return subjectObj;
};

// export const getPeopleGroupedBySubjectAsMap = (people) => {
//   //create temp map
//   const subjectMap = new Map();
//   people.forEach((person) => {
//     const { subject } = person;
//     let tempSubjects = [];

//     if (subjectMap.has(subject)) {
//       // subject exists:
//       let peopleForSubject = subjectMap.get(subject);
//       tempSubjects = [...peopleForSubject];
//       tempSubjects.push(formatName(person));
//     } else {
//       tempSubjects.push(formatName(person));
//     }

//     subjectMap.set(subject, tempSubjects);
//   });

//   return subjectMap;
//   //
// };
