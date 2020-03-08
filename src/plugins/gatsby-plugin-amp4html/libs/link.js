/* const URL = require('url').URL

const replaceOriginal = ($, elems, url) => {
  elems.each((index, org) => {
    const $org = $(org)
    if ($org.attr('href').startsWith('http')) return
    if ($org.attr('href').startsWith('//')) return
    const clone = $org.clone()
    clone.attr('href', new URL(clone.attr('href'), url).href)
    $org.replaceWith(clone)
  })
}

const link = ($) => {
  const canonicalUrl = $('link[rel=canonical]').attr('href')
  if (!canonicalUrl) return $
  replaceOriginal($, $('a[href]'), canonicalUrl)
  return $
} */

const link = ($) => {
  const cannonical = '<link rel="canonical" href="/article.html">'
  $("head").append(cannonical)
  return $

}

module.exports = link
