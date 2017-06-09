function myNavBar() {
   
    document.body.style.display="block";
    var container = document.createElement("DIV");
    container.className = "container";

        var navbar  = document.createElement("NAV");
        container.className = "navbar navbar-default navbar-fixed-top";

            var container2 = document.createElement("DIV");
            container2.className = "container-fluid";

                 var container3 = document.createElement("DIV");
                 container3.className = "navbar-header";

                    var button = document.createElement("BUTTON");
                    button.className = "navbar-toggle";
                    button.setAttribute("data-toggle","collapse")
                    button.setAttribute("data-target","#button-collapse")


                        var span = document.createElement("SPAN");
                        span.className = "sr-only";
                        document.getElementsByClassName("span").innerHTML ="Toggle navigation";

                        var span2 = document.createElement("SPAN");
                        span2.className = "icon-bar";

                        var span3 = document.createElement("SPAN");
                        span3.className = "icon-bar";

                        var span4 = document.createElement("SPAN");
                        span4.className = "icon-bar";

                    button.appendChild(span);
                    button.appendChild(span2);
                    button.appendChild(span3);
                    button.appendChild(span4);

                var container4 = document.createElement("DIV");
                container4.className = "collapse navbar-collapse";
                container4.id = "button-collapse";

                    var ul =document.createElement("UL"); 
                    ul.id = "myUL";
                    ul.className="nav navbar-nav navbar-right";

                            var li = document.createElement("LI")
                                var a = document.createElement("A")
                                var home =document.createTextNode("HOME");
                                a.setAttribute("href", "index.html");
                                a.appendChild(home);
                            li.appendChild(a);

                             var li2 = document.createElement("LI")
                                var a2 = document.createElement("A")
                                var menu =document.createTextNode("MENU");
                                a2.setAttribute("href", "https://www.w3schools.com");
                                a2.appendChild(menu);
                            li2.appendChild(a2);


                            var li3 = document.createElement("LI")
                                var a3 = document.createElement("A")
                                var about =document.createTextNode("MENU");
                                a3.setAttribute("href", "https://www.w3schools.com");
                                a3.appendChild(about);
                            li3.appendChild(a3);

                            var li4 = document.createElement("LI")
                                var a4 = document.createElement("A")
                                var contact =document.createTextNode("CONTACT");
                                a4.setAttribute("href", "https://www.w3schools.com");
                                a4.appendChild(contact);
                            li4.appendChild(a4);

                            ul.appendChild(li);
                            ul.appendChild(li2);
                            ul.appendChild(li3);
                            ul.appendChild(li4);

                container4.appendChild(ul);
                container3.appendChild(button);
                    
            container2.appendChild(container3);
            container2.appendChild(container4);

        navbar.appendChild(container2);
        container.appendChild(navbar);

    document.body.appendChild(container);

    
    
}