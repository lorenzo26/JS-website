function myHomeContent() {

	var content =document.createElement("DIV");
    content.className="content";

        var intro =document.createElement("DIV");
        intro.className="intro";

            var introh2 = document.createElement("H2")
            var h2welcome =document.createTextNode("~Welcome to BENz CAFE~");

            var introP  =document.createElement("P");
            var Pwelcome =document.createTextNode("Centrally located in Metro Manila, The Benz Cafe offers a comfortable environment for everyone. Come and enjoy our selection of homemade sandwiches and waffles. Whether you're looking to relax over a cup of coffee or grab a quick bite to go, the BENz Cafe is for you.");
            introh2.appendChild(h2welcome);
            introP.appendChild(Pwelcome);

        intro.appendChild(introh2);
        intro.appendChild(introP);

    content.appendChild(intro)

    var bckgrndslctn=document.createElement("DIV");
    bckgrndslctn.className="backrond-selection";
        var rowhome =document.createElement("DIV");
        rowhome.className="row home";
        rowhome.id="id-home";
            var panelgroup =document.createElement("DIV");
            panelgroup.className="panel-group";
                var h2menu =document.createElement("H2");

                    var h2content = document.createTextNode("Menu");

                    var homecol = document.createElement("DIV");
                    homecol.className="col-md-4 col-lg-4 home-col";

                        var paneldef = document.createElement("DIV");
                        paneldef.className="panel-default home-panel";

                            var panelbody = document.createElement("DIV");
                            panelbody.className="panel-body";

                                var fig =document.createElement("FIGURE");

                                    var adrinks = document.createElement("A");
                                    adrinks.setAttribute("href","#");

                                        var imgdrinks = document.createElement("IMG");
                                        imgdrinks.setAttribute("src","images/drinks/latte.jpg")

                                        var h3drinks =document.createElement("H3");

                                    var h3dcontent = document.createTextNode("DRINKS");
                                    h3drinks.appendChild(h3dcontent);

                                    adrinks.appendChild(imgdrinks);

                                fig.appendChild(adrinks);

                                fig.appendChild(h3drinks);  

                            panelbody.appendChild(fig);

                        paneldef.appendChild(panelbody)

                    homecol.appendChild(paneldef);

                    var homecol2 = document.createElement("DIV");
                    homecol2.className="col-md-4 col-lg-4 home-col";

                        var paneldef2 = document.createElement("DIV");
                        paneldef2.className="panel-default home-panel";

                            var panelbody2 = document.createElement("DIV");
                            panelbody2.className="panel-body";

                                var fig2 =document.createElement("FIGURE");

                                    var awaffle = document.createElement("A");
                                    awaffle.setAttribute("href","#");

                                        var imgwaffle = document.createElement("IMG");
                                        imgwaffle.setAttribute("src","images/waffles/strawberry-waffle.jpg")

                                        var h3waffle =document.createElement("H3");

                                    var h3wcontent = document.createTextNode("WAFFLES");
                                    h3waffle.appendChild(h3wcontent);

                                    awaffle.appendChild(imgwaffle);

                                fig2.appendChild(awaffle);
                                
                                fig2.appendChild(h3waffle);  

                            panelbody2.appendChild(fig2);

                        paneldef2.appendChild(panelbody2)

                    homecol2.appendChild(paneldef2);

                    var homecol3 = document.createElement("DIV");
                    homecol3.className="col-md-4 col-lg-4 home-col";

                        var paneldef3 = document.createElement("DIV");
                        paneldef3.className="panel-default home-panel";

                            var panelbody3 = document.createElement("DIV");
                            panelbody3.className="panel-body";

                                var fig3 =document.createElement("FIGURE");

                                    var asand = document.createElement("A");
                                    asand.setAttribute("href","#");

                                        var imgsand = document.createElement("IMG");
                                        imgsand.setAttribute("src","images/waffles/strawberry-waffle.jpg")

                                        var h3sand =document.createElement("H3");

                                    var h3scontent = document.createTextNode("SANDWICHES");
                                    h3sand.appendChild(h3scontent);

                                    asand.appendChild(imgsand);

                                fig3.appendChild(asand);
                                
                                fig3.appendChild(h3sand);  

                            panelbody3.appendChild(fig3);

                        paneldef3.appendChild(panelbody3)

                    homecol3.appendChild(paneldef3);

                h2menu.appendChild(h2content);

            panelgroup.appendChild(h2menu);

            panelgroup.appendChild(homecol);

            panelgroup.appendChild(homecol2);

            panelgroup.appendChild(homecol3)      

        rowhome.appendChild(panelgroup);

    bckgrndslctn.appendChild(rowhome);  

    content.appendChild(bckgrndslctn); 

    document.body.appendChild(content);

     var intro =document.createElement("DIV");
        intro.className="intro";
        var about = document.createElement("H2");
        var aboutcontent = document.createTextNode("ABOUT US");
        

        var h3about = document.createElement("H3");
        var h3abtcontent = document.createTextNode("We envision ourselves as a cafe that:");
        
        var ulabout =document.createElement("UL");
            var liabt= document.createElement("LI");
            var liabtcntnt=document.createTextNode("Imbues customers to appreciate happiness from small things. ");
                liabt.appendChild(liabtcntnt);

            var liabt2= document.createElement("LI");
            var liabtcntnt2=document.createTextNode("Reaches people in their convenient location at their convenient times.");
                liabt2.appendChild(liabtcntnt2);

            var liabt3= document.createElement("LI");
            var liabtcntnt3=document.createTextNode("Values customer happiness more than our own. ");
                liabt3.appendChild(liabtcntnt3);   

        

            ulabout.appendChild(liabt);
            ulabout.appendChild(liabt2);
            ulabout.appendChild(liabt3);



           

        h3about.appendChild(h3abtcontent);
        about.appendChild(aboutcontent);  

        var h3about0 = document.createElement("H3");
        var h3abtcontent0 = document.createTextNode("We strive to be a cafe that:");
      
       var ulabout0 =document.createElement("UL");
            var liabt0= document.createElement("LI");
            var liabtcntnt0=document.createTextNode("Prioritizes customer satisfaction with speedy preparation and courteous service.");
                liabt0.appendChild(liabtcntnt0);

            var liabt02= document.createElement("LI");
            var liabtcntnt02=document.createTextNode("Exercises fidelity in following set schedules and rules to earn customer trust.");
                liabt02.appendChild(liabtcntnt02);

            var liabt03= document.createElement("LI");
            var liabtcntnt03=document.createTextNode("Honors complaints and treats them as a chance to improve. ");
                liabt03.appendChild(liabtcntnt03);   

            var liabt04= document.createElement("LI");
            var liabtcntnt04=document.createTextNode("Graces feedback as advice to refine strategies and confront misgivings.");
                liabt04.appendChild(liabtcntnt04);   

            ulabout0.appendChild(liabt0);
            ulabout0.appendChild(liabt02);
            ulabout0.appendChild(liabt03);
            ulabout0.appendChild(liabt04);

             
        h3about0.appendChild(h3abtcontent0);
        
        var readmore = document.createElement("A");
        readmore.className="btn btn-info btn-home";
        readmore.setAttribute("role","button");
         readmore.setAttribute("href","#");
        var readmorecontent = document.createTextNode("READ MORE");

        readmore.appendChild(readmorecontent);

        intro.appendChild(about);
        intro.appendChild(h3about);
        intro.appendChild(ulabout);
        intro.appendChild(h3about0);
        intro.appendChild(ulabout0);
        intro.appendChild(readmore);
    content.appendChild(intro)


}