
var Circle = require('./circle')
var Rect = require('./rect')
var Line = require('./line')

module.exports = Group

/**
 * manage a group
 * 
 * @param {Element} el
 * @api public
 */

function Group(el){
  this.el = el
}

Group.prototype.rect = function(width, height, x, y){
  var el = new Rect(this.add('rect'))
  if (arguments.length) el.move(x, y).size(width, height)
  return el
}

Group.prototype.circle = function(r, x, y){
  var el = new Circle(this.add('circle'))
  if (arguments.length) el.radius(r).move(x, y)
  return el
}

Group.prototype.line = function(x1, y1, x2, y2){
  var el = new Line(this.add('line'))
  if (arguments.length) el.from(x1, y1).to(x2, y2)
  return el
}

Group.prototype.add = function(type){
  var el = document.createElementNS('http://www.w3.org/2000/svg', type)
  this.el.appendChild(el)
  return el
}