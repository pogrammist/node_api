const applet = require('../../config/applet');

const getStart = (req, res) => res.send(applet.message);

module.exports = { getStart };