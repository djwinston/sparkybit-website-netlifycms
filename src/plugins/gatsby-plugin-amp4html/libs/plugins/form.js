const form = ($) => {
    const script = `<script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>`
    $('head').append(script)
    return $
}

module.exports = form