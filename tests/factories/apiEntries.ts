import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

const factoryPodcastEntry = Factory.define(({ sequence }) => ({
  id: {
    attributes: { 'im:id': sequence.toString() },
  },
  'im:artist': {
    label: faker.person.fullName(),
  },
  'im:image': [
    { label: faker.image.url({ height: 55, width: 55 }) },
    { label: faker.image.url({ height: 60, width: 60 }) },
    { label: faker.image.url({ height: 170, width: 170 }) },
  ],
  'im:name': { label: faker.lorem.paragraph({ min: 3, max: 5 }) },
  summary: { label: faker.lorem.paragraph({ min: 10, max: 15 }) },
}))

export const generatePodcastApiEntryList = (min = 0, max = 10) => {
  const length = Math.floor(Math.random() * (max - min) + min)
  return {
    feed: {
      entry: factoryPodcastEntry.buildList(length),
    },
  }
}

const factoryEpisodeEntry = Factory.define(({ transientParams, sequence }) => {
  return {
    collectionId: faker.number.int(),
    trackId: sequence,
    trackName: faker.lorem.words({ min: 8, max: 12 }),
    releaseDate: faker.date.past(),
    trackTimeMillis: faker.number.int({ min: 1200000, max: 3000000 }),
    episodeUrl: faker.internet.url(),
    description: faker.lorem.paragraph({ min: 15, max: 30 }),
    ...transientParams,
  }
})

export const generateEpisodeApiEntryList = (
  collectionId: string,
  min = 0,
  max = 10
) => {
  const length = Math.floor(Math.random() * (max - min) + min)
  return {
    results: factoryEpisodeEntry.buildList(length, { collectionId }),
  }
}
