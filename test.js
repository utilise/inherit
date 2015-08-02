var expect = require('chai').expect
  , key = require('utilise.key')
  , inherit = require('./')

describe('inherit', function() {
  it('should create single-valued array with parent data', function() {
    expect(inherit({ foo:'bar' }, 1)).to.eql([{ foo:'bar' }])
  })

  it('should default to single-valued array with parent data', function() {
    expect(inherit()({ foo:'bar' }, 1)).to.eql([{ foo:'bar' }])
  })

  it('should create multi-valued array with parent data', function() {
    expect(inherit(2)({ foo:'bar' }, 1)).to.eql([{ foo:'bar' }, { foo:'bar' }])
  })

  it('should create single-valued array with transformed parent data', function() {
    expect(inherit(key('foo'))({ foo: 'bar' }, 1)).to.eql(['bar'])
  })
})