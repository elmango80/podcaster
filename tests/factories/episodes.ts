import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'
import { Episode } from 'src/types/podcast'

const factory = Factory.define<Episode>(({ transientParams, sequence }) => ({
  id: sequence.toString(),
  title: faker.lorem.words({ min: 8, max: 12 }),
  date: faker.date.past().toString(),
  duration: faker.number.int({ min: 1200000, max: 3000000 }).toString(),
  urlTrack: faker.internet.url(),
  summary: faker.lorem.paragraph({ min: 15, max: 30 }),
  podcastId: faker.number.int().toString(),
  ...transientParams,
}))

export const generateEpisodesList = (podcastId: string, min = 0, max = 10) => {
  const length = Math.floor(Math.random() * (max - min) + min)
  return factory.buildList(length, { podcastId })
}
