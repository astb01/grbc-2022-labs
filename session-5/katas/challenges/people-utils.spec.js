import PeopleData from './people.json';
import {
  findMales,
  findFemales,
  findPeopleUnder40,
  getAbbreviatedNames,
  findAverageAge,
  findFinnishPeople,
  findPolishPeople,
  findPeopleBySurnamePrefix,
  getPeopleGroupedBySubject,
} from './people-utils';

/* People Operations

Given you have been provided a database of users, write functions that:

- Return all males as an  containing their first and last names.
- Return all females as an  containing their first and last names.
- Returns all people under (and including) the age of 40.
- Returns all people with their first name abbreviated to an initial, 
followed by a dot, a space and then their surname. The title should be 
prefixed as Mr or Ms based on gender.

- Return the average age amongst the group of people.
- Returns all people who have 'Finnish' as their subject.
- Return all people who's surname begins with 'M'.
- Group all people by their respective subject.

You are expected to write tests for each of these and use the same test data. */

describe('people operations', () => {
  let people = [
    {
      id: 1,
      first_name: 'Batholomew',
      last_name: 'Bosche',
      gender: 'Male',
      subject: 'Gujarati',
      age: 59,
    },
    {
      id: 2,
      first_name: 'Dorie',
      last_name: 'Caldicot',
      gender: 'Female',
      subject: 'Chinese',
      age: 55,
    },
  ];

  let largePeopleSample = [
    {
      id: 1,
      first_name: 'Batholomew',
      last_name: 'Bosche',
      gender: 'Male',
      subject: 'Gujarati',
      age: 59,
    },
    {
      id: 2,
      first_name: 'Dorie',
      last_name: 'Caldicot',
      gender: 'Female',
      subject: 'Chinese',
      age: 55,
    },
    {
      id: 3,
      first_name: 'Hobard',
      last_name: 'Noads',
      gender: 'Male',
      subject: 'Swahili',
      age: 31,
    },
    {
      id: 4,
      first_name: 'Paxon',
      last_name: 'Gregersen',
      gender: 'Male',
      subject: 'Hiri Motu',
      age: 57,
    },
    {
      id: 5,
      first_name: 'Mamie',
      last_name: 'Grigorio',
      gender: 'Female',
      subject: 'Kyrgyz',
      age: 34,
    },
  ];
  describe('Find males', () => {
    it('should return all males with first and last name', () => {
      expect(findMales(people)).toEqual(['Batholomew Bosche']);
    });

    it('should return all males with first and last name from sample data', () => {
      expect(findMales(largePeopleSample)).toEqual([
        'Batholomew Bosche',
        'Hobard Noads',
        'Paxon Gregersen',
      ]);
    });
    it('should return first and last name of males from example data', () => {
      expect(findMales(PeopleData)).toEqual([
        'Batholomew Bosche',
        'Hobard Noads',
        'Paxon Gregersen',
        'Dorie Ely',
        'Donall Simoni',
        'Hallsy Makiver',
        'Rand MacCarrick',
        'Niles Simko',
        'Kane Petofi',
        'Panchito Blumire',
        'Clim Polak',
        'Grove Boich',
        'Bendick Pollie',
        'Arley Cratere',
        'Shelley Cadore',
        'Reid Dwane',
        'Colin Tattersill',
        'Alfons Ewert',
        'Othello Doey',
        'Ignacio Skin',
      ]);
    });
  });

  describe('Find females', () => {
    it('should return females from small sample', () => {
      expect(findFemales(people)).toEqual(['Dorie Caldicot']);
    });

    it('should return females from other small sample', () => {
      expect(findFemales(largePeopleSample)).toEqual([
        'Dorie Caldicot',
        'Mamie Grigorio',
      ]);
    });

    it('should return females from sample data', () => {
      expect(findFemales(PeopleData)).toEqual([
        'Dorie Caldicot',
        'Mamie Grigorio',
        'Tamera Bullas',
        'Alvera Possek',
        'Ermengarde McKie',
        'Vanny Caulcutt',
        'Candy Bellsham',
        'Evey Leftly',
        'Shana Pease',
        'Heidie Pancost',
        'Jeannine Bowhay',
        'Shantee Strettell',
        'Rhona Hedgeley',
        'Belle Scranedge',
        'Maritsa Ferrarone',
        'Salome Petrasso',
        'Maryjane Buggy',
        'Marie-jeanne Laminman',
        'Nadine Sorel',
        'Bettye Kos',
        'Cesya Hoodless',
        'Leonora Hamson',
        'Eula Trenholm',
        'Margaret Bridgstock',
        'Shelli Naerup',
        'Maggie Durnford',
        'Coralie Combe',
        'Dehlia Lohering',
        'Erena Siderfin',
      ]);
    });
  });

  describe('Find people under and including 40', () => {
    it('should return all people under and including 40 for small dataset', () => {
      expect(findPeopleUnder40(largePeopleSample)).toEqual([
        'Hobard Noads',
        'Mamie Grigorio',
      ]);
    });

    it('should return all people under 40 with large dataset', () => {
      expect(findPeopleUnder40(PeopleData)).toStrictEqual([
        'Hobard Noads',
        'Mamie Grigorio',
        'Dorie Ely',
        'Vanny Caulcutt',
        'Candy Bellsham',
        'Evey Leftly',
        'Heidie Pancost',
        'Shantee Strettell',
        'Belle Scranedge',
        'Grove Boich',
        'Bendick Pollie',
        'Shelley Cadore',
        'Colin Tattersill',
        'Marie-jeanne Laminman',
        'Alfons Ewert',
        'Cesya Hoodless',
        'Othello Doey',
        'Erena Siderfin',
        'Ignacio Skin',
      ]);
    });
  });

  describe('Abbrevited Name', () => {
    it('should return expected abbreviated name', () => {
      expect(getAbbreviatedNames(people)).toEqual([
        'Mr B. Bosche',
        'Ms D. Caldicot',
      ]);
    });
    it('should return abbreviated names', () => {
      expect(getAbbreviatedNames(PeopleData)).toEqual([
        'Mr B. Bosche',
        'Ms D. Caldicot',
        'Mr H. Noads',
        'Mr P. Gregersen',
        'Ms M. Grigorio',
        'Ms T. Bullas',
        'Ms A. Possek',
        'Mr D. Ely',
        'Mr D. Simoni',
        'Mr H. Makiver',
        'Ms E. McKie',
        'Mr R. MacCarrick',
        'Ms V. Caulcutt',
        'Mr N. Simko',
        'Mr K. Petofi',
        'Ms C. Bellsham',
        'Mr P. Blumire',
        'Ms E. Leftly',
        'Ms S. Pease',
        'Ms H. Pancost',
        'Ms J. Bowhay',
        'Ms S. Strettell',
        'Ms R. Hedgeley',
        'Mr C. Polak',
        'Ms B. Scranedge',
        'Mr G. Boich',
        'Mr B. Pollie',
        'Ms M. Ferrarone',
        'Mr A. Cratere',
        'Mr S. Cadore',
        'Ms K. Keher',
        'Ms S. Petrasso',
        'Ms M. Buggy',
        'Mr R. Dwane',
        'Mr C. Tattersill',
        'Ms M. Laminman',
        'Mr A. Ewert',
        'Ms N. Sorel',
        'Ms B. Kos',
        'Ms C. Hoodless',
        'Ms L. Hamson',
        'Mr O. Doey',
        'Ms E. Trenholm',
        'Ms M. Bridgstock',
        'Ms S. Naerup',
        'Ms M. Durnford',
        'Ms C. Combe',
        'Ms D. Lohering',
        'Ms E. Siderfin',
        'Mr I. Skin',
      ]);
    });
  });

  describe('average age', () => {
    it('should return average age for small sample', () => {
      expect(findAverageAge(people)).toBe(57);
    });

    it('should return average age for large sample', () => {
      expect(findAverageAge(PeopleData)).toBeCloseTo(47.52);
    });
  });
  describe('Error handling', () => {
    it('should return an  exception where people are null when finding all Males', () => {
      expect(() => findMales(null)).toThrow('No people provided');
    });
    it('should  return an  exception where people are null', () => {
      expect(() => findFemales(null)).toThrow('No people provided');
      expect(() => findAverageAge(null)).toThrow('No people provided');
      expect(() => findFinnishPeople(null)).toThrow('No people provided');
      expect(() => findPolishPeople(null)).toThrow('No people provided');
    });
  });
  describe('finnish people', () => {
    const people = [
      {
        id: 1,
        first_name: 'Batholomew',
        last_name: 'Bosche',
        gender: 'Male',
        subject: 'Finnish',
        age: 59,
      },
      {
        id: 2,
        first_name: 'Dorie',
        last_name: 'Caldicot',
        gender: 'Female',
        subject: 'Finnish',
        age: 55,
      },
    ];
    it('return finnish people from small Sample', () => {
      expect(findFinnishPeople(people)).toEqual([
        'Batholomew Bosche',
        'Dorie Caldicot',
      ]);
    });

    it('should return a blank  when no Finnish people exist', () => {
      expect(
        findFinnishPeople([
          {
            id: 1,
            first_name: 'Batholomew',
            last_name: 'Bosche',
            gender: 'Male',
            subject: 'Chinese',
            age: 59,
          },
        ]),
      ).toEqual([]);
    });

    it('should return all Finnish people for all sample data', () => {
      expect(findFinnishPeople(PeopleData)).toEqual(['Shelli Naerup']);
    });
  });

  describe('All polish people', () => {
    it('should return all Polish people for small sample data', () => {
      expect(
        findPolishPeople([
          {
            id: 1,
            first_name: 'Batholomew',
            last_name: 'Bosche',
            gender: 'Male',
            subject: 'Polish',
            age: 59,
          },
        ]),
      ).toEqual(['Batholomew Bosche']);
    });
  });
  describe('people with surname starting with Given Letter', () => {
    it('should find people with whose name starts with M ', () => {
      const people = [
        {
          id: 1,
          first_name: 'Matthew',
          last_name: 'Mosche',
          gender: 'Male',
          subject: 'Gujarati',
          age: 59,
        },
        {
          id: 2,
          first_name: 'Dorie',
          last_name: 'Caldicot',
          gender: 'Female',
          subject: 'Chinese',
          age: 55,
        },
      ];
      expect(findPeopleBySurnamePrefix(people, 'M')).toEqual([
        'Matthew Mosche',
      ]);
    });

    it('should return all people whose surnames begin with M', () => {
      expect(findPeopleBySurnamePrefix(PeopleData, 'M')).toEqual([
        'Hallsy Makiver',
        'Ermengarde McKie',
        'Rand MacCarrick',
      ]);
    });

    it('should return all people whose surnames begin with R', () => {
      expect(
        findPeopleBySurnamePrefix(
          [
            {
              id: 2,
              first_name: 'Daisy',
              last_name: 'Rogers',
              gender: 'Female',
              subject: 'Chinese',
              age: 55,
            },
          ],
          'R',
        ),
      ).toEqual(['Daisy Rogers']);
    });
  });

  describe('Group by subject', () => {
    it('should group people from samll sample by subject', () => {
      expect(
        getPeopleGroupedBySubject([
          {
            id: 1,
            first_name: 'Batholomew',
            last_name: 'Bosche',
            gender: 'Male',
            subject: 'Gujarati',
            age: 59,
          },
        ]),
      ).toEqual({ Gujarati: ['Batholomew Bosche'] });
    });

    it('should group people by subject from large sample size', () => {
      expect(getPeopleGroupedBySubject(PeopleData)).toEqual({
        Arabic: ['Bendick Pollie'],
        Belarusian: ['Reid Dwane'],
        Bosnian: ['Shantee Strettell'],
        Bulgarian: ['Grove Boich'],
        Chinese: ['Dorie Caldicot'],
        Croatian: ['Kane Petofi'],
        Fijian: ['Eula Trenholm'],
        Finnish: ['Shelli Naerup'],
        Georgian: ['Belle Scranedge'],
        Gujarati: ['Batholomew Bosche'],
        Hindi: ['Othello Doey'],
        'Hiri Motu': ['Paxon Gregersen'],
        Hungarian: ['Jeannine Bowhay'],
        'Irish Gaelic': ['Maritsa Ferrarone'],
        Kannada: ['Nadine Sorel'],
        Kashmiri: ['Niles Simko', 'Ignacio Skin'],
        Kyrgyz: ['Mamie Grigorio', 'Cesya Hoodless'],
        Lao: ['Maryjane Buggy', 'Leonora Hamson', 'Erena Siderfin'],
        Latvian: ['Rhona Hedgeley', 'Margaret Bridgstock', 'Dehlia Lohering'],
        Malagasy: ['Bettye Kos'],
        Maltese: ['Vanny Caulcutt'],
        Marathi: ['Tamera Bullas'],
        Mongolian: ['Maggie Durnford'],
        Māori: ['Dorie Ely', 'Shelley Cadore'],
        Nepali: ['Arley Cratere'],
        'New Zealand Sign Language': ['Shana Pease'],
        Norwegian: ['Evey Leftly'],
        Pashto: ['Coralie Combe'],
        Polish: ['Rand MacCarrick'],
        Punjabi: ['Panchito Blumire', 'Clim Polak'],
        Quechua: ['Ermengarde McKie'],
        Somali: ['Colin Tattersill'],
        Sotho: ['Alvera Possek', 'Heidie Pancost'],
        Swahili: ['Hobard Noads', 'Hallsy Makiver'],
        Tajik: ['Salome Petrasso', 'Marie-jeanne Laminman'],
        Tamil: ['Donall Simoni'],
        Tetum: ['Alfons Ewert'],
        Tswana: ['Kimball Keher'],
        Zulu: ['Candy Bellsham'],
      });
    });
  });
});
