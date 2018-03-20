function clicked(){

		var user = document.getElementById("un");
		var pass = document.getElementById("pw");

		var not_contractor = "123";
		var not_contractorpass = "123";
		var contractor = "1234";
		var contractorpass = "1234";
		if(user.value == not_contractor && pass.value == not_contractorpass){
			window.location = "notcontractor.html";
		}
		else if(user.value == contractor && pass.value == contractorpass){
			window.location = "contractor.html";

		}
		else{
            	window.alert("Invalid Username or Password!")
		}
}

function confirmbid() {
    if (confirm("Do you confrim this bid proposal?")) {
        window.location = 'requestpay.html';
    }
}

function confirmreq() {
    if (confirm("Do you confrim this fund request?")) {
        window.location = 'welcome.html';
    }
}

function passfund() {
    if (confirm("Do you confrim this transaction?")) {
        window.location = 'welcome.html';
    }
} 
function gui(){
window.location = 'index.html';
}
