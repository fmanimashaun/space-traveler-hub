const mockResponse = {
  data: [
    {
      mission_name: 'FalconSat',
      mission_id: 'F1',
      manufacturers: ['SpaceX'],
      payload_ids: ['FalconSat-2'],
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
      website: null,
      twitter: null,
      description:
        'FalconSat was the first Falcon 1 rocket launched by SpaceX. The primary mission objective was to achieve Earth orbit with a low-cost rocket.',
    },
    {
      mission_name: 'DemoSat',
      mission_id: 'F2',
      manufacturers: ['SpaceX'],
      payload_ids: ['DemoSAT'],
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
      website: null,
      twitter: null,
      description:
        'Demostat was the second Falcon 1 rocket launched by SpaceX, and the first to reach orbit. Its primary mission objective was to deploy a payload mass simulator into orbit.',
    },
    // Additional mission objects would be included here
  ],
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
