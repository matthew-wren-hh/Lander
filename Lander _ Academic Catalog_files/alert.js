$(document).ready(function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
    	if (xhr.status >= 200 && xhr.status < 300) {
    // 		console.log('Success!', xhr);
    		if (xhr.response.length == 0) {
    // 			console.log("No alert found.");
    		} else {
    // 			console.log("Found alert.");
    			var data = JSON.parse(xhr.response);
				// console.log("Found active alert.");
				var now = new Date();
				var starts = new Date(data.starts);
				var ends = new Date(data.ends);
				if( data.starts == data.ends ) {
					ends.setDate( ends.getDate() + 1 );
				}
				// console.log(starts);
				if (now.getTime() >= starts.getTime() && (!data.ends || now.getTime() <= ends.getTime())) {
				// 	console.log("Alert is within start/end time.");
				    var alertParent = document.getElementById("global-alert");
					var header = data.header;
					var message = data.message;
					var elem = document.createElement('textarea');
                    elem.innerHTML = message;
                    var message = elem.value;
					var amPM = starts.getHours() >= 12 ? 'PM' : 'AM';
					var hours = ((starts.getHours() + 11) % 12 + 1 );
		            var table = '<table class="SmartBoard_Table"><tbody><tr class="SmartBoard_Row"><td class="SmartBoard_Subject">' + header + '</td><td class="SmartBoard_DateTime">' + (starts.getMonth() + 1) + '/' + starts.getDate() + '/' + starts.getFullYear() + ' ' + hours + ':' + starts.getMinutes() + ' ' + amPM + '</td></tr><tr class="SmartBoard_Row"><td class="SmartBoard_Message" colspan="2">' + message + '</td></tr></tbody></table><div class="alert_close"></div>';
                    alertParent.innerHTML = table;
                    //document.getElementsByClassName("omnilert_wrapper")[0].style.display = "block";
                    //$(".omnilert_wrapper").removeAttr("style");
                    $(".omnilert_wrapper").attr('style', 'display: block !important');
				} else {
				// 	console.log("Alert is not within start/end time.");
				}
    		}
    	} else {
    // 		console.log('Failure!');
    	}
    // 	console.log('This always runs...');
    };
    
    xhr.open('GET', '/alert-data.json');
    xhr.send();
})