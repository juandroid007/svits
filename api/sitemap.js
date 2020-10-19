import {
  SitemapStream,
  streamToPromise,
} from 'sitemap'

import config from '../svits.config'

// More information here: https://www.npmjs.com/package/sitemap

export default (req, res) => {
  res.setHeader('Content-Type', 'application/xml')

  const sitemap = new SitemapStream({
    hostname: config.hostname,
  })

  urls.forEach((url) => {
    sitemap.write(config.sitemapUrls)
  })

  sitemap.end()

  streamToPromise(sitemap)
    .then((result) => {
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
      res.status(200).send(result)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).end()
    })
}
