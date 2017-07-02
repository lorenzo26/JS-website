function myFooter() {
	var footer = document.createElement("DIV");
	footer.className="footer-content";
	footer.id="idfooter";
		var pFooter = document.createElement("P");
		var pFooterC = document.createTextNode("Copyright 2017 Benz CAFE")
		pFooter.appendChild(pFooterC);

		var fig =document.createElement("FIGCAPTION");
		var figC = document.createTextNode("Victory U-Belt, España Blvd corner Padre Campa St, Sampaloc, Manila, Metro Manila")

		fig.appendChild(figC);

		footer.appendChild(pFooter);

		footer.appendChild(figC);

	 document.body.appendChild(footer);
}