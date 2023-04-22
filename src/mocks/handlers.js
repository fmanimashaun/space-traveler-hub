import { rest } from 'msw';

const handlers = [
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        manufacturers: ['Manufacturer 1'],
        payload_ids: ['Payload 1'],
        wikipedia: 'https://en.wikipedia.org/wiki/Mission_1',
        website: 'https://www.mission1.com/',
        twitter: 'https://twitter.com/mission1',
        description: 'Mission 1 description',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        manufacturers: ['Manufacturer 2'],
        payload_ids: ['Payload 2'],
        wikipedia: 'https://en.wikipedia.org/wiki/Mission_2',
        website: 'https://www.mission2.com/',
        twitter: 'https://twitter.com/mission2',
        description: 'Mission 2 description',
        reserved: false,
      },
    ]),
  )),
  rest.get('https://api.spacexdata.com/v4/rockets', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      {
        id: '5e9d0d96eda699382d09d1ee',
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch vehicle privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        flickr_images: [
          'https://www.spacex.com/static/images/falcon1/falcon1_1.jpg',
          'https://www.spacex.com/static/images/falcon1/falcon1_2.jpg',
          'https://www.spacex.com/static/images/falcon1/falcon1_3.jpg',
          'https://www.spacex.com/static/images/falcon1/falcon1_4.jpg',
        ],
      },
      {
        id: '5e9d0d95eda69973a809d1ec',
        name: 'Falcon 9',
        description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        flickr_images: [
          'https://live.staticflickr.com/65535/48954138962_ee814ca4b5_o.jpg',
          'https://live.staticflickr.com/65535/48953946917_43cddf7b42_o.jpg',
          'https://live.staticflickr.com/65535/48953946922_9c421900ef_o.jpg',
          'https://live.staticflickr.com/65535/48954138932_0c34fe5c6c_o.jpg',
        ],
      },
      {
        id: '5e9d0d95eda69974db09d1eb',
        name: 'Falcon Heavy',
        description: 'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage, and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        flickr_images: [
          'https://live.staticflickr.com/7914/47412926422_3e38a6bdee_o.jpg',
          'https://live.staticflickr.com/4807/43993981210_3c7b3f9d1e_o.jpg',
          'https://live.staticflickr.com/65535/46927225345_9ae92e76b5_o.jpg',
          'https://live.staticflickr.com/65535/46927225505_244567b25b_o.jpg',
        ],
      },
    ]),
  )),
];

export default handlers;
