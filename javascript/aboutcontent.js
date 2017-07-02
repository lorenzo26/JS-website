function myAboutPages() {
	document.getElementById("idactive").className="notactive";
	document.getElementById("idactive2").className="notactive";
	document.getElementById("idactive3").className="active";
	document.getElementById("idactive4").className="notactive";
	var divAbout = document.createElement("DIV")
	divAbout.className="container about-content";
		var divRow=document.createElement("DIV");
		divRow.className="row row-about";
			var divbgCoffee =document.createElement("DIV");
			divbgCoffee.className="col-md-6 col-sm-12 coffee-img";
				var h1 = document.createElement("H1");
				var h1cntnt = document.createTextNode("ABOUT US");
				h1.appendChild(h1cntnt);
				divbgCoffee.appendChild(h1);

			var divDrinkCol = document.createElement("DIV")
			divDrinkCol.className="col-md-6 col-sm-12";
				var h3CWF =document.createElement("H3");
				var h3CWFC = document.createTextNode("Coffee With Friends");
				var hr = document.createElement("HR");
				var pCWF = document.createElement("P");
				var pCWFC = document.createTextNode("Coffee is always better with a friend. Only if that friend is another cup of coffee.");
				pCWF.appendChild(pCWFC);
				h3CWF.appendChild(h3CWFC);
			divDrinkCol.appendChild(h3CWF);	
			divDrinkCol.appendChild(hr);
			divDrinkCol.appendChild(pCWF);

		var divRow2=document.createElement("DIV");
		divRow2.className="row row-about";

			var divwaffleCol = document.createElement("DIV")
			divwaffleCol.className="col-md-6 col-sm-12";
				var h3FI =document.createElement("H3");
				var h3FIC = document.createTextNode("Finest Ingredients");
				var hr2 = document.createElement("HR");
				var pFI = document.createElement("P");
				var pFIC = document.createTextNode("We strive to find the most nourishing, inspiring ingredients including wild crafted and foraged foods from pristine eco-systems, small organic farmers and ethical and local suppliers. Everything on our ever-changing seasonal menu is created to nourish your bodies, hearts and minds in the most delicious, creative and healthy way we can imagine. Vegetarian, vegan, gluten-free, plant-based, raw food, organic, fresh juices.");
				pFI.appendChild(pFIC);
				h3FI.appendChild(h3FIC);
			divwaffleCol.appendChild(h3FI);	
			divwaffleCol.appendChild(hr2);
			divwaffleCol.appendChild(pFI);

			var divbgWaffle =document.createElement("DIV");
			divbgWaffle.className="col-md-6 col-sm-12 waffle-img";	

		var divRow3=document.createElement("DIV");
		divRow3.className="row row-about";
			var divbgSandwich =document.createElement("DIV");
			divbgSandwich.className="col-md-6 col-sm-12 sandwich-img";

			var divH = document.createElement("DIV")
			divH.className="col-md-6 col-sm-12";
				var h3H =document.createElement("H3");
				var h3HC = document.createTextNode("Health");
				var hr3 = document.createElement("HR");
				var pH = document.createElement("P");
				var pHC = document.createTextNode("These starchy foods really don’t deserve so much blame for weight gain; they offer a lot of health benefits. And since combining exercise and healthy eating is the best strategy for losing weight, it’s important to remember how important carbs are for after a workout. Most nutrition experts recommend consuming a ratio of three parts carbs to one part protein to adequately fuel recovery after exercise. This means a tasty sandwich might be the perfect post-workout food.");
				pH.appendChild(pHC);
				h3H.appendChild(h3HC);
			divH.appendChild(h3H);	
			divH.appendChild(hr3);
			divH.appendChild(pH);


			divRow.appendChild(divbgCoffee);
			divRow.appendChild(divDrinkCol);
			divRow2.appendChild(divwaffleCol);
			divRow2.appendChild(divbgWaffle);
			divRow3.appendChild(divbgSandwich);
			divRow3.appendChild(divH);
		divAbout.appendChild(divRow);
		divAbout.appendChild(divRow2);
		divAbout.appendChild(divRow3);
	document.body.appendChild(divAbout);
	
}