'use strict';

var Table = require('./Table');
var Column = require('./Column');
var ColumnGroup = require('./ColumnGroup');

Table.Column = Column;
Table.ColumnGroup = ColumnGroup;

module.exports = Table;