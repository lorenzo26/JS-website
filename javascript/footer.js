function myFooter() {
	var footer = document.createElement("DIV");
	footer.className="footer-content";
		var fpara = document.createElement("P");
		var fcontent = document.createTextNode("Copyright 2017 Benz CAFE")
		fpara.appendChild(fcontent);

		var fig =document.createElement("FIGCAPTION");
		var figcontent = document.createTextNode("Victory U-Belt, España Blvd corner Padre Campa St, Sampaloc, Manila, Metro Manila")

		fig.appendChild(figcontent);

		footer.appendChild(fpara);

		footer.appendChild(fig);

	 document.body.appendChild(footer);
}