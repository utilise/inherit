var expect = require('chai').expect
  , inherit = require('./')

describe('inherit', function() {
  it('should single-valued array with parent data', function() {
    expect(inherit({ foo:'bar' }, 1)).to.eql([{ foo:'bar' }])
  })

  it('should default single-valued array with parent data', function() {
    expect(inherit()({ foo:'bar' }, 1)).to.eql([{ foo:'bar' }])
  })

  it('should multi-valued array with parent data', function() {
    expect(inherit(2)({ foo:'bar' }, 1)).to.eql([{ foo:'bar' }, { foo:'bar' }])
  })
})