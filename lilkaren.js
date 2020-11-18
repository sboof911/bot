
var request = require('request');
const fetch = require('node-fetch');

// Options for fetching 
const options = {
  url: "https://reservation.42network.org/api/me/events",
	method: 'GET',
  json: true,
  headers: {
    Host: "reservation.42network.org",
	Connection: "close",
	"Content-Length": 0,
	Accept: "application/json, text/plain, */*",
	'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
	Origin: "https://reservation.42network.org",
	"Sec-Fetch-Site": "same-origin",
	"Sec-Fetch-Mode": "cors",
	"Sec-Fetch-Dest": "empty",
	Referer: "https://reservation.42network.org/static/",
	"Accept-Encoding": "gzip, deflate",
	"Accept-Language": "en-US,en;q=0.9",
	Cookie: "reservation_system=MTYwNDI4NTM3NXxEdi1CQkFFQ180SUFBUkFCRUFBQV80N19nZ0FCQm5OMGNtbHVad3dhQUJoelpYTnphVzl1WDJSaGRHRmZjMlZ6YzJsdmJsOXJaWGthS21Gd2FXbHVkSEpoYjJGMWRHZ3VVMlZ6YzJsdmJrUmhkR0hfZ3dNQkFRdFRaWE56YVc5dVJHRjBZUUhfaEFBQkJBRUdWWE5sY2tsRUFRUUFBUWhEWVcxd2RYTkpSQUVFQUFFSFNYTlRkR0ZtWmdFQ0FBRUpUbVY0ZEVOb1pXTnJBZi1HQUFBQUVQLUZCUUVCQkZScGJXVUJfNFlBQUFBY180UVpBZjBCNlRvQktnSVBBUUFBQUE3WE1YalBPSTMyRkFBQUFBPT18f95OaZTQ9IEXBrHQZz_-3Wd4YPZASGX2VUEy5DUZFsg=",
	b : null
  }
}

const option = {
  url: "https://reservation.42network.org/api/me/events/",
  method: 'POST',
  json: true,
  headers: {
    Host: "reservation.42network.org",
	Connection: "close",
	"Content-Length": 0,
	Accept: "application/json, text/plain, */*",
	'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
	Origin: "https://reservation.42network.org",
	"Sec-Fetch-Site": "same-origin",
	"Sec-Fetch-Mode": "cors",
	"Sec-Fetch-Dest": "empty",
	Referer: "https://reservation.42network.org/static/",
	"Accept-Encoding": "gzip, deflate",
	"Accept-Language": "en-US,en;q=0.9",
	Cookie: "reservation_system=MTYwNDI4NTM3NXxEdi1CQkFFQ180SUFBUkFCRUFBQV80N19nZ0FCQm5OMGNtbHVad3dhQUJoelpYTnphVzl1WDJSaGRHRmZjMlZ6YzJsdmJsOXJaWGthS21Gd2FXbHVkSEpoYjJGMWRHZ3VVMlZ6YzJsdmJrUmhkR0hfZ3dNQkFRdFRaWE56YVc5dVJHRjBZUUhfaEFBQkJBRUdWWE5sY2tsRUFRUUFBUWhEWVcxd2RYTkpSQUVFQUFFSFNYTlRkR0ZtWmdFQ0FBRUpUbVY0ZEVOb1pXTnJBZi1HQUFBQUVQLUZCUUVCQkZScGJXVUJfNFlBQUFBY180UVpBZjBCNlRvQktnSVBBUUFBQUE3WE1YalBPSTMyRkFBQUFBPT18f95OaZTQ9IEXBrHQZz_-3Wd4YPZASGX2VUEy5DUZFsg="

  }
}
global.b = [];
fetch(options.url, options)
	.then(res => res.text())
	.then((text) => {
		var a = JSON.parse(text);
		var j = 0;
		var date = ' ' + Date();
		console.log(date[9] + date[10]);
		for (var i = 0; i < a.length; i++) {
			if (a[i].Event.zone_id == 48) {
				if ((a[i].Event.begin_at[11] + a[i].Event.begin_at[12]) == '07') {
					b[j++] = a[i].Event.event_id;
				}
				else if ((a[i].Event.begin_at[11] + a[i].Event.begin_at[12]) == '15') {
					b[j++] = a[i].Event.event_id;
				}

			}
		}
		for (var i = 0; i < b.length; i++){
			option.url = "https://reservation.42network.org/api/me/events/" + b[i];
			request(option, function (error, response, body){
	    		console.log('OK');
			});
		}
	})








