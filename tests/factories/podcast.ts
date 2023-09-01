import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'
import { Podcast } from 'src/types/podcast'

const factory = Factory.define<Podcast>(({ sequence }) => ({
  id: sequence.toString(),
  author: faker.person.fullName(),
  summary: faker.lorem.paragraph({ min: 10, max: 15 }),
  name: faker.lorem.paragraph({ min: 3, max: 5 }),
  urlImage: faker.image.url({ height: 170, width: 170 }),
}))

export const generatePodcast = () => factory.build()

export const generatePodcastsList = (min = 0, max = 10) => {
  const length = Math.floor(Math.random() * (max - min) + min)
  return factory.buildList(length)
}
