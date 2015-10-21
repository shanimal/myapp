var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});


var chai = require('chai');

var assert = chai.assert;
var foo = 'bar';
var tea = {flavors:['grape','cherry','lime']};
describe('something',function(){
	it('should return -1 when the value is not present', function () {
		assert.typeOf(foo, 'string');
		assert.equal(foo, 'bar');
		assert.lengthOf(foo, 3)
		assert.property(tea, 'flavors');
		assert.lengthOf(tea.flavors, 3);
		
		chai.should();

		foo.should.be.a('string');
		foo.should.equal('bar');
		foo.should.have.length(3);
		tea.should.have.property('flavors')
		  .with.length(3);

		var expect = chai.expect;

		expect(foo).to.be.a('string');
		expect(foo).to.equal('bar');
		expect(foo).to.have.length(3);
		expect(tea).to.have.property('flavors')
		  .with.length(3);
		
	})
});


//ronald.petty@gmail.com



/*
 * Make a TCP connection to the given IPv4 address.  Arguments:
 *
 *    ip4addr        a string representing a valid IPv4 address
 *
 *    tcpPort        a positive integer representing a valid TCP port
 *
 *    timeout        a positive integer denoting the number of milliseconds
 *                   to wait for a response from the remote server before
 *                   considering the connection to have failed.
 *
 *    callback       invoked when the connection succeeds or fails.  Upon
 *                   success, callback is invoked as callback(null, socket),
 *                   where `socket` is a Node net.Socket object.  Upon failure,
 *                   callback is invoked as callback(err) instead.
 *
 * This function may fail for several reasons:
 *
 *    SystemError    For "connection refused" and "host unreachable" and other
 *                   errors returned by the connect(2) system call.  For these
 *                   errors, err.errno will be set to the actual errno symbolic
 *                   name.
 *
 *    TimeoutError   Emitted if "timeout" milliseconds elapse without
 *                   successfully completing the connection.
 *
 * All errors will have the conventional "remoteIp" and "remotePort" properties.
 * After any error, any socket that was created will be closed.
 */
var net = require('net');
function connect(ip4addr, tcpPort, timeout, callback) {
  assert.equal(typeof (ip4addr), 'string',
      "argument 'ip4addr' must be a string");
  assert.ok(net.isIPv4(ip4addr),
      "argument 'ip4addr' must be a valid IPv4 address");
  assert.equal(typeof (tcpPort), 'number',
      "argument 'tcpPort' must be a number");
  assert.ok(!isNaN(tcpPort) && tcpPort > 0 && tcpPort < 65536,
      "argument 'tcpPort' must be a positive integer between 1 and 65535");
  assert.equal(typeof (timeout), 'number',
      "argument 'timeout' must be a number");
  assert.ok(!isNaN(timeout) && timeout > 0,
      "argument 'timeout' must be a positive integer");
  assert.equal(typeof (callback), 'function');

  /* do work */
}
describe('connect',function(){
	it('connect should validate parameters', function () {
		// connect() // argument 'ip4addr' must be a string
		// connect("abc"); // argument 'ip4addr' must be a valid IPv4 address
		// connect('127.0.0.0') // tcpPort' must be a number
		// connect('127.0.0.0','8080') // argument 'tcpPort' must be a number
		// connect('127.0.0.0',8080) // argument 'timeout' must be a number: expected 'undefined' to equal 'number'
		connect('127.0.0.0',8080,500,function(){});
	})
})