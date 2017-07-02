function myMenuPage() {
	document.getElementById("idactive").className="notactive";
	document.getElementById("idactive2").className="active";
	document.getElementById("idactive3").className="notactive";
	document.getElementById("idactive4").className="notactive";

	var bgDrink = document.createElement("DIV");
	bgDrink.className = "background-drinks";
		var h1OM = document.createElement("H1");
			var h1OMC = document.createTextNode("OUR MENU");
		var divRowMenu = document.createElement("DIV");
		divRowMenu.className = "row menu";
		divRowMenu.id = "id-drinks";
			var divPG = document.createElement("DIV");
				var h2W = document.createElement("H2");
					var h2WC = document.createTextNode("DRINKS");
				var divMenuCol = document.createElement("DIV");
				divMenuCol.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","0");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/latte.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Cappucino");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("Dark and Rich expresso with clense and milky foam. Topped with sweetened whipped cream");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("90.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol.appendChild(divMenuPanel);


				var divMenuCol2 = document.createElement("DIV");
				divMenuCol2.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","1");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/frozen-caramel-latte.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Frozen Caramel Latte");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("Latte Frappe topped with sweet caramel sauce and sweetened cream. Perfect for beating the heat!");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("65.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol2.appendChild(divMenuPanel);


				var divMenuCol3 = document.createElement("DIV");
				divMenuCol3.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","2");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/chocolate-milkshake.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Chocolate Milkshake");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("This chocolate and milky frozen drink will surely bring the boys (or girls) to your yard");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("90.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol3.appendChild(divMenuPanel);

				var divMenuCol4 = document.createElement("DIV");
				divMenuCol4.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","1");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/vanilla-cappucino-frappe.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Vanilla Cappucino Frappe");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("Rich Cappucino frappe with clense and delicious vanilla foam. topped with sweetened whipped cream");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("70.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol4.appendChild(divMenuPanel);

				var collapse = document.createElement("DIV");
				collapse.id = "demo";
				collapse.className = "collapse";

					var divMenuCol5 = document.createElement("DIV");
					divMenuCol5.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","4");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/coffee.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Coffee");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("brewed drink prepared from roasted coffee beans");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("65.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol5.appendChild(divMenuPanel);


					var divMenuCol6 = document.createElement("DIV");
					divMenuCol6.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","5");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/chocolate-malt.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Chocolate Malt");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("This chocolate and milky frozen drink will surely bring the boys (or girls) to your yard");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("80.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol6.appendChild(divMenuPanel);


					var divMenuCol7 = document.createElement("DIV");
					divMenuCol7.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","6");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/milkshake.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Milk Shake");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("This chocolate and milky frozen drink will surely bring the boys (or girls) to your yard");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("80.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol7.appendChild(divMenuPanel);

					var divMenuCol8 = document.createElement("DIV");
					divMenuCol8.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","7");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/coffee-cream.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Coffe with Cream");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("brewed drink prepared from roasted coffee beans with cream");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("100.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol8.appendChild(divMenuPanel);

				collapse.appendChild(divMenuCol5);
				collapse.appendChild(divMenuCol6);
				collapse.appendChild(divMenuCol7);
				collapse.appendChild(divMenuCol8);	

				h2W.appendChild(h2WC);
			divPG.appendChild(h2W);
			divPG.appendChild(divMenuCol);
			divPG.appendChild(divMenuCol2);
			divPG.appendChild(divMenuCol3);
			divPG.appendChild(divMenuCol4);
			divPG.appendChild(collapse);

		var aShowDrink = document.createElement("A");
		aShowDrink.setAttribute("href","#id-drinks");
		aShowDrink.setAttribute("ref","more");
		aShowDrink.className = "HSshowit btn btn-info";
		aShowDrink.setAttribute("role","button");
		aShowDrink.setAttribute("data-toggle","collapse");
		aShowDrink.setAttribute("data-target","#demo");
			var aShowDrinkC = document.createTextNode("Show More")
			aShowDrink.appendChild(aShowDrinkC);
				

			
		h1OM.appendChild(h1OMC);
		divRowMenu.appendChild(divPG);
		divRowMenu.appendChild(aShowDrink);
	bgDrink.appendChild(h1OM);
	bgDrink.appendChild(divRowMenu);
	
	var bgWaffle = document.createElement("DIV");
	bgWaffle.className = "background-waffle";

		
		var divRowMenu = document.createElement("DIV");
		divRowMenu.className = "row menu";
		divRowMenu.id = "id-drinks";
			var divPG = document.createElement("DIV");
				var h2W = document.createElement("H2");
					var h2WC = document.createTextNode("DRINKS");
				var divMenuCol = document.createElement("DIV");
				divMenuCol.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","0");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/latte.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Cappucino");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("Dark and Rich expresso with clense and milky foam. Topped with sweetened whipped cream");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("90.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol.appendChild(divMenuPanel);


				var divMenuCol2 = document.createElement("DIV");
				divMenuCol2.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","1");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/frozen-caramel-latte.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Frozen Caramel Latte");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("Latte Frappe topped with sweet caramel sauce and sweetened cream. Perfect for beating the heat!");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("65.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol2.appendChild(divMenuPanel);


				var divMenuCol3 = document.createElement("DIV");
				divMenuCol3.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","2");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/chocolate-milkshake.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Chocolate Milkshake");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("This chocolate and milky frozen drink will surely bring the boys (or girls) to your yard");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("90.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol3.appendChild(divMenuPanel);

				var divMenuCol4 = document.createElement("DIV");
				divMenuCol4.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
					var divMenuPanel = document.createElement("DIV");
					divMenuPanel.className = "panel-default menu-panel";
						var divPB = document.createElement("DIV");
						divPB.className = "panel-body";
							var figureD = document.createElement("FIGURE");
								var liD = document.createElement("LI");
								liD.setAttribute("data-toggle","modal");
								liD.setAttribute("data-target","#myDrinkModal");
									var aD = document.createElement("A");
									aD.setAttribute("href","#drink-gallery");
									aD.setAttribute("data-slide","1");
										var imgD = document.createElement("IMG");
										imgD.className = "img-thumbnail";
										imgD.setAttribute("src","images/drinks/vanilla-cappucino-frappe.jpg");
						var h4T = document.createElement("H4");
						var h4TC = document.createTextNode("Vanilla Cappucino Frappe");
						var figT = document.createElement("FIGCAPTION");
						var figTC = document.createTextNode("Rich Cappucino frappe with clense and delicious vanilla foam. topped with sweetened whipped cream");
						var spanPrice = document.createElement("SPAN");
						var spanPriceC = document.createTextNode("70.00 (8oz)")

						h4T.appendChild(h4TC);
						figT.appendChild(figTC);
						spanPrice.appendChild(spanPriceC);
									aD.appendChild(imgD);
								liD.appendChild(aD);
							figureD.appendChild(liD);			
						divPB.appendChild(figureD);
						divPB.appendChild(h4T);
						divPB.appendChild(figT);
						divPB.appendChild(spanPrice);
					divMenuPanel.appendChild(divPB);
				divMenuCol4.appendChild(divMenuPanel);

				var collapse = document.createElement("DIV");
				collapse.id = "demo";
				collapse.className = "collapse";

					var divMenuCol5 = document.createElement("DIV");
					divMenuCol5.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","4");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/coffee.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Coffee");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("brewed drink prepared from roasted coffee beans");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("65.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol5.appendChild(divMenuPanel);


					var divMenuCol6 = document.createElement("DIV");
					divMenuCol6.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","5");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/chocolate-malt.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Chocolate Malt");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("This chocolate and milky frozen drink will surely bring the boys (or girls) to your yard");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("80.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol6.appendChild(divMenuPanel);


					var divMenuCol7 = document.createElement("DIV");
					divMenuCol7.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","6");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/milkshake.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Milk Shake");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("This chocolate and milky frozen drink will surely bring the boys (or girls) to your yard");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("80.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol7.appendChild(divMenuPanel);

					var divMenuCol8 = document.createElement("DIV");
					divMenuCol8.className = "col-sm-6 col-md-3 col-lg-3 menu-col";
						var divMenuPanel = document.createElement("DIV");
						divMenuPanel.className = "panel-default menu-panel";
							var divPB = document.createElement("DIV");
							divPB.className = "panel-body";
								var figureD = document.createElement("FIGURE");
									var liD = document.createElement("LI");
									liD.setAttribute("data-toggle","modal");
									liD.setAttribute("data-target","#myDrinkModal");
										var aD = document.createElement("A");
										aD.setAttribute("href","#drink-gallery");
										aD.setAttribute("data-slide","7");
											var imgD = document.createElement("IMG");
											imgD.className = "img-thumbnail";
											imgD.setAttribute("src","images/drinks/coffee-cream.jpg");
							var h4T = document.createElement("H4");
							var h4TC = document.createTextNode("Coffe with Cream");
							var figT = document.createElement("FIGCAPTION");
							var figTC = document.createTextNode("brewed drink prepared from roasted coffee beans with cream");
							var spanPrice = document.createElement("SPAN");
							var spanPriceC = document.createTextNode("100.00 (8oz)")

							h4T.appendChild(h4TC);
							figT.appendChild(figTC);
							spanPrice.appendChild(spanPriceC);
										aD.appendChild(imgD);
									liD.appendChild(aD);
								figureD.appendChild(liD);			
							divPB.appendChild(figureD);
							divPB.appendChild(h4T);
							divPB.appendChild(figT);
							divPB.appendChild(spanPrice);
						divMenuPanel.appendChild(divPB);
					divMenuCol8.appendChild(divMenuPanel);

				collapse.appendChild(divMenuCol5);
				collapse.appendChild(divMenuCol6);
				collapse.appendChild(divMenuCol7);
				collapse.appendChild(divMenuCol8);	

				h2W.appendChild(h2WC);
			divPG.appendChild(h2W);
			divPG.appendChild(divMenuCol);
			divPG.appendChild(divMenuCol2);
			divPG.appendChild(divMenuCol3);
			divPG.appendChild(divMenuCol4);
			divPG.appendChild(collapse);

		var aShowDrink = document.createElement("A");
		aShowDrink.setAttribute("href","#id-drinks");
		aShowDrink.setAttribute("ref","more");
		aShowDrink.className = "HSshowit btn btn-info";
		aShowDrink.setAttribute("role","button");
		aShowDrink.setAttribute("data-toggle","collapse");
		aShowDrink.setAttribute("data-target","#demo");
			var aShowDrinkC = document.createTextNode("Show More")
			aShowDrink.appendChild(aShowDrinkC);
				

			
		
		divRowMenu.appendChild(divPG);
		divRowMenu.appendChild(aShowDrink);
	
	bgWaffle.appendChild(divRowMenu);
	var bgSandwich = document.createElement("DIV");
	bgSandwich.className = "background-sandwich";

	document.body.appendChild(bgDrink);
	document.body.appendChild(bgWaffle);
	document.body.appendChild(bgSandwich);
}