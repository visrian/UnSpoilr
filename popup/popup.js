	$(function () {
		$('#toAvoid').keypress(function (e) {
	        if (e.which === 13) {
	            var inp = $(this).val();
	            console.log(inp); 
	            chrome.storage.sync.get('input', function (awe) {
	                console.log("before adding");
	                console.log(awe['input']);
	                var arrOfStrings = awe['input'].slice();
	                arrOfStrings.push(inp.toLowerCase());
	                chrome.storage.sync.set({'input' : arrOfStrings});
	            });
	            chrome.storage.sync.get('input', function (awe) {
                    console.log("after adding");
	            	console.log(awe['input']);
	            });         
	        }       
	    });
	    $('#notToAvoid').keypress(function (e) {
	        if (e.which === 13) {
	            var inp = $(this).val();
	            chrome.storage.sync.get('input', function (awe) {
	                var arrOfStrings = awe['input'].slice();
	                var index = arrOfStrings.indexof(inp.toLowerCase());
                    if (index != -1) {
                        chrome.storage.sync.set({ 'input': arrOfStrings.splice(index, 1) });
                    }
                });

                chrome.storage.sync.get('input', function (awe) {
                	console.log("after deleting");
                	console.log(awe['input']);
                });
	        }
	    });
	});

                
	        
