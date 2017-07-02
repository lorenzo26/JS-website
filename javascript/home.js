function myHomeContent() {

	var content =document.createElement("DIV");
    content.className="content";
    content.id="idcontent";

        var divBanners = document.createElement("DIV");
        divBanners.className="banner";

            var header = document.createElement("HEADER");
            header.id="mybanner";
            header.className="carousel slide";
            header.setAttribute("data-ride","carousel");

                var divCarouselInner =document.createElement("DIV")
                divCarouselInner.className="carousel-inner";

                    var item =document.createElement("DIV") 
                    item.className="item active";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner.jpg");
                        img.setAttribute("alt","item0"); 
                    item.appendChild(img);

                    var item2 =document.createElement("DIV") 
                    item2.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner2.jpg");
                        img.setAttribute("alt","item1"); 
                    item2.appendChild(img);

                    var item3 =document.createElement("DIV") 
                    item3.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner3.jpg");
                        img.setAttribute("alt","item2"); 
                    item3.appendChild(img);

                    var item4 =document.createElement("DIV") 
                    item4.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner4.jpg");
                        img.setAttribute("alt","item3"); 
                    item4.appendChild(img);

                    var item5 =document.createElement("DIV")
                    item5.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner5.jpg");
                        img.setAttribute("alt","item4");
                    item5.appendChild(img);

                    var item6 =document.createElement("DIV") 
                    item6.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner6.jpg");
                        img.setAttribute("alt","item5");                          
                    item6.appendChild(img);

                    var item7 =document.createElement("DIV") 
                    item7.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner7.jpg");
                        img.setAttribute("alt","item6");    
                    item7.appendChild(img);

                    var item8 =document.createElement("DIV") 
                    item8.className="item";

                        var img=document.createElement("IMG");
                        img.setAttribute("src","images/banner8.jpg");
                        img.setAttribute("alt","item7");    
                    item8.appendChild(img);

                    var left = document.createElement("A");
                    left.className="left carousel-control";
                    left.setAttribute("href","#mybanner");
                    left.setAttribute("data-slide","prev");
                   
                    var spanleft = document.createElement("SPAN");
                    spanleft.className="glyphicon glyphicon-chevron-left";
                    
                    var spanleft2 = document.createElement("SPAN");
                    spanleft2.className="sr-only";
                    left.appendChild(spanleft);
                    left.appendChild(spanleft2);

                    var right = document.createElement("A");
                    right.className="right carousel-control";
                    right.setAttribute("href","#mybanner");
                    right.setAttribute("data-slide","next");
                    
                    var spanright = document.createElement("SPAN");
                    spanright.className="glyphicon glyphicon-chevron-right";
                   
                    var spanright2 = document.createElement("SPAN");
                    spanright2.className="sr-only";
                    right.appendChild(spanright);
                    right.appendChild(spanright2);

                divCarouselInner.appendChild(item);
                divCarouselInner.appendChild(item2);
                divCarouselInner.appendChild(item3);
                divCarouselInner.appendChild(item4);  
                divCarouselInner.appendChild(item5);
                divCarouselInner.appendChild(item6);  
                divCarouselInner.appendChild(item7);
                divCarouselInner.appendChild(item8);
                divCarouselInner.appendChild(left);
                divCarouselInner.appendChild(right);     
            header.appendChild(divCarouselInner);
        divBanners.appendChild(header);    
        var divIntro =document.createElement("DIV");
        divIntro.className="intro";

            var h2Intro = document.createElement("H2")
            var h2Welcome =document.createTextNode("~Welcome to BENz CAFE~");

            var pIntro  =document.createElement("P");
            var pWelcome =document.createTextNode("Centrally located in Metro Manila, The Benz Cafe offers a comfortable environment for everyone. Come and enjoy our selection of homemade sandwiches and waffles. Whether you're looking to relax over a cup of coffee or grab a quick bite to go, the BENz Cafe is for you.");
            h2Intro.appendChild(h2Welcome);
            pIntro.appendChild(pWelcome);

        divIntro.appendChild(h2Intro);
        divIntro.appendChild(pIntro);
    content.appendChild(divBanners);
    content.appendChild(divIntro)

    var divbgSelection=document.createElement("DIV");
    divbgSelection.className="backrond-selection";
        var divRow =document.createElement("DIV");
        divRow.className="row home";
        divRow.id="id-home";
            var divPanelGroup =document.createElement("DIV");
            divPanelGroup.className="panel-group";
                var h2Menu =document.createElement("H2");

                    var h2MenuC = document.createTextNode("Menu");

                    var divCol = document.createElement("DIV");
                    divCol.className="col-md-4 col-lg-4 home-col";

                        var divHomePanel = document.createElement("DIV");
                        divHomePanel.className="panel-default home-panel";

                            var divPanelBody = document.createElement("DIV");
                            divPanelBody.className="panel-body";

                                var fig =document.createElement("FIGURE");

                                    var aDrinks = document.createElement("A");
                                    aDrinks.setAttribute("href","#");

                                        var imgDrinks = document.createElement("IMG");
                                        imgDrinks.setAttribute("src","images/drinks/latte.jpg")

                                        var h3Drinks =document.createElement("H3");

                                    var h3DrinksC = document.createTextNode("DRINKS");
                                    h3Drinks.appendChild(h3DrinksC);

                                    aDrinks.appendChild(imgDrinks);
                                    aDrinks.appendChild(h3Drinks);
                                fig.appendChild(aDrinks);

                                 

                            divPanelBody.appendChild(fig);

                        divHomePanel.appendChild(divPanelBody)

                    divCol.appendChild(divHomePanel);

                    var divCol2 = document.createElement("DIV");
                    divCol2.className="col-md-4 col-lg-4 home-col";

                        var divHomePanel = document.createElement("DIV");
                        divHomePanel.className="panel-default home-panel";

                            var divPanelBody = document.createElement("DIV");
                            divPanelBody.className="panel-body";

                                var fig =document.createElement("FIGURE");

                                    var aWaffle = document.createElement("A");
                                    aWaffle.setAttribute("href","#");

                                        var imgWaffle = document.createElement("IMG");
                                        imgWaffle.setAttribute("src","images/waffles/strawberry-waffle.jpg")

                                        var h3Waffle =document.createElement("H3");

                                    var h3wcontent = document.createTextNode("WAFFLES");
                                    h3Waffle.appendChild(h3wcontent);

                                    aWaffle.appendChild(imgWaffle);
                                    aWaffle.appendChild(h3Waffle);
                                fig.appendChild(aWaffle);
                                
                                  

                            divPanelBody.appendChild(fig);

                        divHomePanel.appendChild(divPanelBody)

                    divCol2.appendChild(divHomePanel);

                    var divCol3 = document.createElement("DIV");
                    divCol3.className="col-md-4 col-lg-4 home-col";

                        var divHomePanel = document.createElement("DIV");
                        divHomePanel.className="panel-default home-panel";

                            var divPanelBody = document.createElement("DIV");
                            divPanelBody.className="panel-body";

                                var fig =document.createElement("FIGURE");

                                    var aSandwich = document.createElement("A");
                                    aSandwich.setAttribute("href","#");

                                        var imgSandwich = document.createElement("IMG");
                                        imgSandwich.setAttribute("src","images/waffles/strawberry-waffle.jpg")

                                        var h3Sandwich =document.createElement("H3");

                                    var h3SandwichC = document.createTextNode("SANDWICHES");
                                    h3Sandwich.appendChild(h3SandwichC);

                                    aSandwich.appendChild(imgSandwich);
                                    aSandwich.appendChild(h3Sandwich);  
                                fig.appendChild(aSandwich);
                                
                                

                            divPanelBody.appendChild(fig);

                        divHomePanel.appendChild(divPanelBody)

                    divCol3.appendChild(divHomePanel);

                h2Menu.appendChild(h2MenuC);

            divPanelGroup.appendChild(h2Menu);

            divPanelGroup.appendChild(divCol);

            divPanelGroup.appendChild(divCol2);

            divPanelGroup.appendChild(divCol3)      

        divRow.appendChild(divPanelGroup);

    divbgSelection.appendChild(divRow);  

    content.appendChild(divbgSelection); 

    document.body.appendChild(content);

     var divIntro =document.createElement("DIV");
        divIntro.className="intro";
        var h2About = document.createElement("H2");
        var h2AboutC = document.createTextNode("h2About US");
        

        var h3About = document.createElement("H3");
        var h3AboutC = document.createTextNode("We envision ourselves as a cafe that:");
        
        var ulAbout =document.createElement("UL");
            var liAbout= document.createElement("LI");
            var liAboutC=document.createTextNode("Imbues customers to appreciate happiness from small things. ");
                liAbout.appendChild(liAboutC);

            var liAbout2= document.createElement("LI");
            var liAboutC2=document.createTextNode("Reaches people in their convenient location at their convenient times.");
                liAbout2.appendChild(liAboutC2);

            var liAbout3= document.createElement("LI");
            var liAboutC3=document.createTextNode("Values customer happiness more than our own. ");
                liAbout3.appendChild(liAboutC3);   

        

            ulAbout.appendChild(liAbout);
            ulAbout.appendChild(liAbout2);
            ulAbout.appendChild(liAbout3);



           

        h3About.appendChild(h3AboutC);
        h2About.appendChild(h2AboutC);  

        var h3About2 = document.createElement("H3");
        var h3AboutC2 = document.createTextNode("We strive to be a cafe that:");
      
       var ulAbout2 =document.createElement("UL");
            var liAbout= document.createElement("LI");
            var liAboutC=document.createTextNode("Prioritizes customer satisfaction with speedy preparation and courteous service.");
                liAbout.appendChild(liAboutC);

            var liAbout2= document.createElement("LI");
            var liAboutC2=document.createTextNode("Exercises fidelity in following set schedules and rules to earn customer trust.");
                liAbout2.appendChild(liAboutC2);

            var liAbout3= document.createElement("LI");
            var liAboutC3=document.createTextNode("Honors complaints and treats them as a chance to improve. ");
                liAbout3.appendChild(liAboutC3);   

            var liAbout4= document.createElement("LI");
            var liAboutC4=document.createTextNode("Graces feedback as advice to refine strategies and confront misgivings.");
                liAbout4.appendChild(liAboutC4);   

            ulAbout2.appendChild(liAbout);
            ulAbout2.appendChild(liAbout2);
            ulAbout2.appendChild(liAbout3);
            ulAbout2.appendChild(liAbout4);

             
        h3About2.appendChild(h3AboutC2);
        
        var aReadMore = document.createElement("A");
        aReadMore.className="btn btn-info btn-home";
        aReadMore.setAttribute("role","button");
         aReadMore.setAttribute("href","about.html");
        var aReadMoreC = document.createTextNode("READ MORE");

        aReadMore.appendChild(aReadMoreC);

        divIntro.appendChild(h2About);
        divIntro.appendChild(h3About);
        divIntro.appendChild(ulAbout);
        divIntro.appendChild(h3About2);
        divIntro.appendChild(ulAbout2);
        divIntro.appendChild(aReadMore);
    
    content.appendChild(divIntro);



}