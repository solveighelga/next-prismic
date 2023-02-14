// This is the config file for my prisic client, connects to my repository to fetch my content

import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'
//import { createClient } from '../prismiscio'
 
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)
 
// Here I am telling Prismic how my next.js app is.
export function linkResolver(doc) {
    switch (doc.type) {
        case 'homepage':
          return '/'
        case 'page':
          return `/${doc.uid}`
        case 'blog':
          return `/blog/${doc.uid}`
        default:
          return null

  }
}

// Create client function = creates Prismic Client with an endpoint that is specified in sm.json
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)
 
  prismicNext.enableAutoPreviews({ // I can preview my content before publising
    client,
    previewData: config.previewData, 
    req: config.req
  })
 
  return client
}