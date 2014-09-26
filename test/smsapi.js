'use strict';
var request = require("request");
var error = "", response = "", body = "";
var reg = /^\d{21}$/; // to get int exact 21 digits // transaction code

describe('SMS API', function () {
	
	// describe('Basic URL', function(){
		
	// 	this.timeout(5000);
		
	// 	it('Check the response time', function(done){
	// 		request("http://promotexter.com/index.php/api/send_sms", function(e, r, b){
	// 			error = e;
	// 			response = r;
	// 			body = b;
	// 			done();
	// 		});
	// 	});

	// 	it('should have a body equal to -1', function(){
	// 		body.should.equal("-1");
	// 	});

	// 	it('should have a status code equal to 200', function(){
	// 		response.statusCode.should.equal(200);
	// 	});
	// });


// describe('Insufficient Credit Balance', function(){
		
// 		this.timeout(5000);

// 		before(function(done){
// 			request("http://promotexter.com/index.php/api/clear_balance", function(){
// 				setTimeout(function(){
// 					done();
// 				}, 5000);
// 			});

// 		});

// 		it('Check the response time', function(done){
// 			request("http://promotexter.com/index.php/api/send_sms?clientid=10001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
// 				error = e;
// 				response = r;
// 				body = b;
// 				done();
// 			});
// 		});

// 		it('Should have a body equal to -1', function(){
// 			body.should.equal("-1");
// 		});
// 	});

	describe('Valid Client ID', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Must be able to Display 21-Digits Unique Transaction ID', function(){
			reg.test(body).should.equal(true);
		});
	});


	describe('Invalid Client ID', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=10001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Blank Client ID', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});


	describe('Valid Passkey', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Must be able to Display 21-Digits Unique Transaction ID', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('Invalid Passkey', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12000&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});


	describe('Blank Passkey', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});	

	describe('Valid Mobile Number', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Must be able to Display 21-Digits Unique Transaction ID', function(){
			reg.test(body).should.equal(true);
		});
	});


	describe('Invalid Mobile Number', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=63917&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});


	describe('Blank Mobile Number', function(){
		
		this.timeout(10000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});

	describe('Has a message content', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Must be able to Display 21-Digits Unique Transaction ID', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('No Message content', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});


	describe('2-Parts Message ', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=VGhpcyBpcyBhIHRlc3QgbWVzc2FnZSBUaGlzIGlzIGEgdGVzdCBtZXNzYWdlIFRoaXMgaXMgYSB0ZXN0IG1lc3NhZ2UgVGhpcyBpcyBhIHRlc3QgbWVzc2FnZSBUaGlzIGlzIGEgdGVzdCBtZXNzYWdlIFRoaXMgaXMgYSB0ZXN0IG1lc3NhZ2UgVGhpcyBpcyBhIHRlc3QgbWVzc2FnZSBUaGlzIGlzIGEgdGVzdCBtZXNzYWdlIFRoaXMgaXMgYSB0ZXN0IG1lc3NhZ2UgVGhpcyBpcyBhIHRlc3QgbWVzc2FnZSA=", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Must be able to Display 21-Digits Unique Transaction ID', function(){
			reg.test(body).should.equal(true);
		});
	});


	describe('Has a Sender ID', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=dustin&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Must be able to Display 21-Digits Unique Transaction ID', function(){
			reg.test(body).should.equal(true);
		});
	});

	describe('Blank Sender ID', function(){
		
		this.timeout(5000);
		
		it('Check the response time', function(done){
			request("http://promotexter.com/index.php/api/send_sms?clientid=1000001&passkey=770AB3AEA2C5D4B6E80CE32C29A12ED9&senderid=&msisdn=639178248545&message=bWVzc2FnZSB0ZXN0", function(e, r, b){
				error = e;
				response = r;
				body = b;
				done();
			});
		});

		it('Should have a body equal to -1', function(){
			body.should.equal("-1");
		});
	});




});