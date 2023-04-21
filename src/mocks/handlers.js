import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => {
    return res(
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
    )
  }
  ),
]