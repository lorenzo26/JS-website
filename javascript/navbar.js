function myNavBar() {
   
    document.body.style.display="block";
    var buttonUp = document.createElement("BUTTON");
    buttonUp.setAttribute("onclick","topFunction()")
    buttonUp.className="btn btn-info";
    buttonUp.id="myBtn";

    buttonUp.setAttribute("title","Go to top");
    var buttonUpC = document.createTextNode("TOP");
    buttonUp.appendChild(buttonUpC);
    var divContainer = document.createElement("DIV");
    divContainer.className = "container";

        var divNavBar  = document.createElement("NAV");
        divContainer.className = "navbar navbar-default navbar-fixed-top";

            var divContainerFluid = document.createElement("DIV");
            divContainerFluid.className = "container-fluid";

                 var divNavBarHeader = document.createElement("DIV");
                 divNavBarHeader.className = "navbar-header";

                    var buttonCollapse = document.createElement("BUTTON");
                    buttonCollapse.className = "navbar-toggle";
                    buttonCollapse.setAttribute("data-toggle","collapse")
                    buttonCollapse.setAttribute("data-target","#button-collapse")


                        var span = document.createElement("SPAN");
                        span.className = "sr-only";
                        document.getElementsByClassName("span").innerHTML ="Toggle navigation";

                        var span2 = document.createElement("SPAN");
                        span2.className = "icon-bar";

                        var span3 = document.createElement("SPAN");
                        span3.className = "icon-bar";

                        var span4 = document.createElement("SPAN");
                        span4.className = "icon-bar";

                    buttonCollapse.appendChild(span);
                    buttonCollapse.appendChild(span2);
                    buttonCollapse.appendChild(span3);
                    buttonCollapse.appendChild(span4);

                    var aLogo =document.createElement("A");
                    aLogo.className="navbar-brand";
                    aLogo.setAttribute("href","index.html");
                    var imgLogo = document.createElement("IMG");
                        imgLogo.setAttribute("src","images/logo.png");

                    aLogo.appendChild(imgLogo);

                var divButtonCollapse = document.createElement("DIV");
                divButtonCollapse.className = "collapse navbar-collapse";
                divButtonCollapse.id = "button-collapse";

                    var ulNav =document.createElement("ULNav"); 
                    ulNav.id = "myUL";
                    ulNav.className="nav navbar-nav navbar-right";

                            var li = document.createElement("LI")
                            li.className="active";
                            li.id="idactive";
                                var a = document.createElement("A")
                                var home =document.createTextNode("HOME");

                                a.setAttribute("href", "index.html");
                                a.appendChild(home);
                            li.appendChild(a);

                             var li2 = document.createElement("LI")
                             li2.className="notactive";
                             li2.id="idactive2";
                                var a = document.createElement("A")
                                var menu =document.createTextNode("MENU");
                                a.setAttribute("href", "menu.html");
                                a.appendChild(menu);
                            li2.appendChild(a);


                            var li3 = document.createElement("LI")
                            li3.id="idactive3";
                                var a = document.createElement("A")
                                var about =document.createTextNode("ABOUT US");
                                 a.setAttribute("href", "about.html");
                               
                                a.appendChild(about);
                            li3.appendChild(a);


                            var li4 = document.createElement("LI")
                            li4.id="idactive4";
                                var a = document.createElement("A")
                                var contact =document.createTextNode("CONTACT");
                                a.setAttribute("href", "contact.html");
                                a.appendChild(contact);
                            li4.appendChild(a);

                            ulNav.appendChild(li);
                            ulNav.appendChild(li2);
                            ulNav.appendChild(li3);
                            ulNav.appendChild(li4);

                divButtonCollapse.appendChild(ulNav);
                divNavBarHeader.appendChild(aLogo);
                divNavBarHeader.appendChild(buttonCollapse);
                    
            divContainerFluid.appendChild(divNavBarHeader);
            divContainerFluid.appendChild(divButtonCollapse);

        divNavBar.appendChild(divContainerFluid);
        divContainer.appendChild(divNavBar);

    document.body.appendChild(buttonUp);
    document.body.appendChild(divContainer);

    
    
}