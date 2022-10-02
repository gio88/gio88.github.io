// #### Snippet to load Boxever JS library ####

// Define the Boxever queue 
var _boxeverq = _boxeverq || [];

// Define the Boxever settings 
var _boxever_settings = {
	client_key: 'psfu6uh05hsr9c34rptlr06dn864cqrx', // Replace with your client key
	target: 'https://api.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region
	cookie_domain: '.github.io', // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
	javascriptLibraryVersion: '{{javascriptLibraryVersion}}', // Replace with the latest Boxever JavaScript Library version"
	pointOfSale: '{{pointOfSale}}', // Replace with the same point of sale configured in system settings"
	web_flow_target: 'https://d35vb5cccm4xzp.cloudfront.net', // Replace with path for the Amazon CloudFront CDN for Sitecore Personalize"
	web_flow_config: { async: false, defer: false } // Customize the async and defer script loading attributes
};
// Import the Boxever JavaScript Library asynchronously 
(function() {
	 var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
	 s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.9.min.js';
	 var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();


// #### VIEW EVENT ####

// Place an anonymous function in the Boxever queue 
_boxeverq.push(function() { 
    var searchEvent = {
	  "type": "VIEW",
	  "browser_id": Boxever.getID(),
	  "channel": "WEB",
	  "pos": "gm_pos_test_italy",
	  "language": "EN",
	  "currency": "EUR",
	  "page": "home page",
	  "ext": {
		"tileRef": 17
	  }
	};
    // Invoke event create 
    // (<event msg>, <callback function>, <format>)
    Boxever.eventCreate(searchEvent, function(data){}, 'json');
});


// #### IDENTITY EVENT ####

function login(email) {
	
	_boxeverq.push(function() { 
		var identityEvent = {
		  "type": "IDENTITY",
		  "browser_id": Boxever.getID(),
		  "channel": "WEB",
		  "pos": "gm_pos_test_italy",
		  "language": "EN",
		  "currency": "EUR",
		  "page": "home page",
		  "email": email
		};
		// Invoke event create 
		// (<event msg>, <callback function>, <format>)
		Boxever.eventCreate(identityEvent, function(data){}, 'json');
	});
	
}

// #### ADD EVENT ####

function sendAddEvent(productType, itemID, productName, productPrice, productID, productCurrency) {
	
	_boxeverq.push(function() { 
		var addEvent = {
		  "type": "ADD",
		  "browser_id": Boxever.getID(),
		  "channel": "WEB",
		  "pos": "gm_pos_test_italy",
		  "language": "EN",
		  "currency": "EUR",
		  "page": "home page",
		  "product":{
			  "type": productType,
			  "item_id": itemID,
			  "name": productName,
			  "orderedAt": new Date().toISOString(),
			  "quantity":1,
			  "price": productPrice,
			  "productId": productID,
			  "currency": productCurrency
		   }
		};
		// Invoke event create 
		// (<event msg>, <callback function>, <format>)
		Boxever.eventCreate(addEvent, function(data){}, 'json');
	});
	
}


function sendConfirmEvent(confirmedProducts) {
	
	_boxeverq.push(function() { 
		var confirmEvent = {
		  "type": "CONFIRM",
		  "browser_id": Boxever.getID(),
		  "channel": "WEB",
		  "pos": "gm_pos_test_italy",
		  "language": "EN",
		  "currency": "EUR",
		  "page": "home page",
		  "product": confirmedProducts
		};
		// Invoke event create 
		// (<event msg>, <callback function>, <format>)
		Boxever.eventCreate(confirmEvent, function(data){}, 'json');
	});
	
}

function sendCheckoutEvent() {
	
	_boxeverq.push(function() { 
		var checkoutEvent = {
		  "type": "CHECKOUT",
		  "browser_id": Boxever.getID(),
		  "channel": "WEB",
		  "pos": "gm_pos_test_italy",
		  "language": "EN",
		  "currency": "EUR",
		  "page": "home page",
		  "reference_id": "ORDER_111",
		  "status": "PURCHASED"
		};
		// Invoke event create 
		// (<event msg>, <callback function>, <format>)
		Boxever.eventCreate(checkoutEvent, function(data){}, 'json');
	});
	
}