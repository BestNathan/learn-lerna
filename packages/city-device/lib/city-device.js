'use strict';
const _ = require('lodash');
const __ = require('@sensoro/city-i18n');

module.exports = cityDevice;

function cityDevice() {
    console.log(_.capitalize(__()));
    console.log('changed')
    console.log('changed')
    console.log('changed')
}

cityDevice()