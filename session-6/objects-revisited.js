const singer = {
  name: 'Adele',
  address: {
    street1: null,
    city: 'Landon',
  },
  albums: [
    {
      name: '30',
      label: 'Sony',
      year: 2023,
    },
    {
      name: '25',
      label: 'Def Jams',
      year: 2009,
    },
    {
      name: '29',
      label: 'Def Jams 2',
    },
  ],
};

console.log(singer);

const secondAlbumYear = singer.albums[1].year;
const thirdAlbumYear = singer.albums[2]?.year ?? 9999;

// coalesc / nullish
const street2 = singer.address?.street1 ?? 'no street 2 available';
const street2Alt = singer.address?.flat?.apartment; // 0, undefined, null
