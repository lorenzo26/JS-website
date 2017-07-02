function myContactPage() {
	document.getElementById("idactive").className="notactive";
	document.getElementById("idactive2").className="notactive";
	document.getElementById("idactive3").className="notactive";
	document.getElementById("idactive4").className="active";

	var container = document.createElement("DIV");
	container.className="container contact-content";
		var h1Stop = document.createElement("H1");
			var h1StopC = document.createTextNode("Stop by or get in touch");
		var pBC = document.createElement("P");
			var pBCC = document.createTextNode("BENz CAFE");
		var pVU = document.createElement("P");
			var pVUC = document.createTextNode("Victory U-Belt, España Blvd corner Padre Campa St, Sampaloc, Manila, Metro Manila");
		var pOM = document.createElement("P");
			var pOMC = document.createTextNode("Open Monday-Saturday:9am-5pm, Sunday: 9am-6pm");
		var row = document.createElement("DIV");
		row.className = "row";
			var col = document.createElement("DIV");
				var h1CU = document.createElement("H1");
					var h1CUC = document.createTextNode("Contact Us");
				var form = document.createElement("FORM")
					var name = document.createElement("INPUT");
					name.setAttribute("type","text");
					name.setAttribute("name","name");
					name.setAttribute("placeholder","Your Name*");
					name.setAttribute("aria-required","true");

					var address = document.createElement("INPUT");
					address.setAttribute("type","text");
					address.setAttribute("name","name");
					address.setAttribute("placeholder","Address*");
					address.setAttribute("aria-required","true");

					var email = document.createElement("INPUT");
					email.setAttribute("type","text");
					email.setAttribute("name","name");
					email.setAttribute("placeholder","Email*");
					email.setAttribute("aria-required","true");

					var message = document.createElement("TEXTAREA");
					message.setAttribute("name","message")
					message.setAttribute("row","5");
					message.setAttribute("cols","70");
					message.setAttribute("placeholder","write a comment*");
					message.setAttribute("maxlength","300");
					message.style.resize = "none";

					var submit = document.createElement("BUTTON");
					var submitC = document.createTextNode("SEND");

					submit.appendChild(submitC);
				
				h1CU.appendChild(h1CUC);
				form.appendChild(name);
				form.appendChild(address);
				form.appendChild(email);
				form.appendChild(message);
				form.appendChild(submit);

			col.appendChild(h1CU);
			col.appendChild(form);

		h1Stop.appendChild(h1StopC);
		pBC.appendChild(pBCC);	
		pVU.appendChild(pVUC);
		pOM.appendChild(pOMC);
		row.appendChild(col);
	container.appendChild(h1Stop);
	container.appendChild(pBC);
	container.appendChild(pVU);
	container.appendChild(pOM);
	container.appendChild(row)
	document.body.appendChild(container);

}