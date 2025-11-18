const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
})
const hiddenLeft = document.querySelectorAll('.hidden-slide-in');
const hiddenUp = document.querySelectorAll('.hidden-slide-up');
hiddenLeft.forEach((e) => observer.observe(e))
hiddenUp.forEach((e) => observer.observe(e))
const selector = document.getElementById("language-select");
selector.addEventListener("change", (event) =>{
    changeLanguage(event.target.value);
});
const translatable = document.querySelectorAll(".translatable");
const changeLanguage = (lang) =>{
    if(lang == "am"){
        translatable.forEach((translate) => {
            const key = translate.id;
            translate.innerText = translations.am[key];
        });
    }
    else if( lang == "or"){
        translatable.forEach((translate) => {
            const key = translate.id;
            translate.innerText = translations.or[key];
        });
    }
    else{
        translatable.forEach((translate) => {
            const key = translate.id;
            translate.innerText = translations.en[key];
        });
    }
}
const translations = {
    "en" : {
        homeBtn : "Home",
        deptBtn : "Department",
        serviceBtn : "Sevices",
        eventBtn : "Events",
        newsBtn : "News",
        vaccancyBtn : "Vaccancies",
        compliantBtn : "Compliants",
        contactBtn : "Contacts",
        aboutusBtn : "About Us",
        moreText : "More",
        publicationsText : "Publication",
        galleryText : "Gallery",
        faqBtn : "Faq",

        lidetaHeader : "Lideta Sub-City Administration Innovation and Technology Development Office",
        officeHead : "Office Head",
        officeHeadName : "Mr.Gemechu Getachew Reba",
        officeHeadMessage : "Innovation and technology are the driving force behind growth. At Lideta Sub-City Innovation and Technology Development Office, we strive to shape the future, solve challenges, and create better solutions for better services. Innovation is more than a concept. it is our commitment.We work to continue digital transformation in our city by using technology to improve services and create more efficient, sustainable, and inclusive solutions. we harness the power of innovation and technology to drive growth, enhance efficiency, and transform ideas into impactful solutions. Together, we strive to transform ideas into reality and provide faster and more efficient services to our sub-city community.",

        coordinatorText : "Coordinator",
        coordinatorName : "Semayehu Webante Zewde",

        teamLeaderText : "Team Leaders",
        name1 : "Getenet Lemma Dadi",
        name2 : "Selam Kiros Tela",
        name3 : "Alem Amare Tessema",
        name4 : "Yodit Birkinah Tegegn",
        position1 : "Training and capacity building team leader",
        position2 : "Data Center And Infrastructure Team Leader",
        position3 : "Maintenance and Renovation Team Leader",
        position4 : "Software Development And Administrator Team Leader",

        latestNews : "Latest News",

        org : "Organizational Framework",
        missionText : "Mission",
        visionText : "Vision",
        valuesText : "Values",
        mission : "By developing research-backed information technology-based solutions, enhancing secure systems, and expanding digital services, we aim to ensure the satisfaction of Addis Ababa's residents and visitors.",
        vision : "In 2022, we are witnessing the emergence of a smart city that leverages critical technologies to provide convenience for its residents and visitors, while also being sustainable and capable of addressing challenges.",
        values : `- Goodwill and integrity
                  - Advanced use of technology
                  - Generating new innovations
                  - Passion and dedication to work
                  - Accountability
                  - Transparency
                  - Working collaboratively
                  - Agile and efficient service`,

        companyHistory : "Lideta Sub-City Innovation and Technology Development Office (ITDO) is a government organization that was originally constituted as an agency in April 2009 GC under proclamation No. 11/2009.",
        linkText : "Links",
        infoText : "Information",
        newsAndUpdatesText : "News & Updates",
        sub : "Subscribe to get the latest news and updates every month.",
        subscribeText : "Subscribe",
    },

    "am" : {

        homeBtn : "መግቢያ",
        deptBtn : "ቡድኖች",
        serviceBtn : "አገልግሎቶች",
        eventBtn : "ሁነቶች",
        newsBtn : "ዜና",
        vaccancyBtn : "ክፍት የስራ ቦታዎች",
        compliantBtn : "ጥቆማ",
        contactBtn : "ያግኙን",
        aboutusBtn : "ስለኛ",
        moreText : "ተጨማሪ",
        publicationsText : "ፅሁፎች",
        galleryText : "ጋሌሪ",
        faqBtn : "ተደጋጋሚ ጥያቄዎች",

        lidetaHeader : "የልደታ ክ/ከተማ ኢኖቬሽን እና ቴክኖሎጂ ልማት ጽ/ቤት",
        officeHead : "የ ጽ/ቤት ኃላፊ",
        officeHeadName : "አቶ ገመቹ ጌታቸው ሬባ",
        officeHeadMessage : "ፈጠራና ቴክኖሎጂ የዕድገት አንቀሳቃሽ ኃይል ናቸው ። በ ልደታ ክፍለ ከተማ ኢኖቬሽንና ቴክኖሎጂ ልማት ፅ/ቤት የወደፊቱን ጊዜ ለመቅረጽ፣ ተግዳሮቶችን ለመፍታት እና የተሻሉ መፍትሄዎችን ለተሻለ አገልግሎት ለመፍጠር እንተጋለን ። ፈጠራ ከፅንሰ-ሃሳብ በላይ ነው - የኛ ቁርጠኝነት ነው። በክ/ከተማችን ቴክኖሎጂን በመጠቀም ዲጂታል ትራንስፎርሜሽን ለማስቀጠል, አገልግሎቶችን ለማሻሻል እና የበለጠ ቀልጣፋ, ዘላቂ እና ሁሉን አቀፍ  መፍትሄዎችን ለመፍጠር እንሰራለን። በልደታ ክፍለ ከተማ የኢኖቬሽንና ቴክኖሎጂ ጽ/ቤት እድገትን ለማራመድ፣ ቅልጥፍናን ለማጎልበት እና ሃሳቦችን ወደ ተጽኖአዊ መፍትሄዎች ለመቀየር የኢኖቬሽን እና የቴክኖሎጂ ሃይል እንጠቀማለን። አንድ ላይ ሆነን ሃሳቦችን ወደ እውነታነት በመለወጥ ለክፍለ ከተማችን ማህበረሰብ አገልገሎቱ ፈጣንና ቀልጣፋ ለማድረግ እንተጋለን።",
    
        coordinatorText : "አስተባባሪ",
        coordinatorName : "ስማየሁ ውብአንተ ዘውዴ",

        teamLeaderText : "ቡድን መሪዎች",
        name1 : "ጌታነት ለማ ዳዲ",
        name2 : "ሰላም ኪሮስ ተላ ",
        name3 : "አለም አማረ ተሠማ",
        name4 : "ዮዲት ብርቅነህ ተገኝ",
        position1 : "የስልጠና እና አቅም ግንባታ ቡድን መሪ",
        position2 : "የዳታ ማዕከል እና ኢንፍራስትራክቸር ቡድን መሪ",
        position3 : "የጥገና እና እድሳት ቡድን መሪ",
        position4 : "የሶፍትዌር ለውጥ እና አስተዳደር ቡድን መሪ",

        latestNews : "የቅርብ ዜናዎች",

        org : "የቋሙ ራዕይ፣ ተልዕኮ፣ ዕሴቶች",
        missionText : "ተልዕኮ",
        visionText : "ራዕይ",
        valuesText : "እሴቶች",
        mission : "በጥናትና ምርምር የተደገፈ የኢንፎርሜሽን ቴክኖሎጂ መሰረተ ልማቶችን በማልማትና ደህንነቱ የተጠበቀ ሲስተሞችን በማበልጸግ እና ዲጂታል አገልግሎት በማስፋፋት የአዲስ አበባን ከተማ ነዋሪዎች እና የጎብኚዎቿን ተጠቃሚነት ማረጋገጥ፡፡",
        vision : "በ2022 ወሳኝ ቴክኖሎጂዎችን ተግባራዊ በማድረግ ለነዋሪዎቿ እና ለጎብኚዎቿ ምቹ የሆነች ፤ ዘላቂ እና ችግሮችን መቋቋም የምትችል ልደታ ክፍለ ከተማን  ማየት፡፡",
        values : `	•	በጎ ሕሊናና ቅን ልቦና
	•	የላቀ የቴክኖሎጂ ተጠቃሚነት
	•	አዳዲስ ፈጠራዎችን ማመንጨት
	•	የስራ ፍቅርና ትጋት
	•	ተጠያቂነት
	•	ግልፅኝነት
	•	በትብብር መስራት
	•	ቀልጣፋና ውጤታማ አግልግሎት`,

        companyHistory : "ልደታ ክ/ከተማ አስተዳደር የኢኖቬሽን እና ቴክኖሎጂ ልማት ጽ/ቤት (ITDO) የመንግስት ድርጅት ሲሆን፣ በመጀመሪያ ደረጃ በኤጀንሲ መልክ በህዳር 2001 ዓ.ም. (April 2009 GC) በሕግ ቁጥር 11/2009 በተደነገገ አዋጅ ተቋቁሟል።",
        linkText : "ሊንኮች",
        infoText : "መረጃ",
        newsAndUpdatesText : "አዲሰ ዜናዎች",
        sub : "ወርሃዊ ዝማሬዎችን እና ዜናዎችን ለመወሰድ ይመዝገቡ።",
        subscribeText : "ይመዝገቡ",
    },

    "or" : {

        homeBtn : "Mana",
        deptBtn : "garee",
        serviceBtn : "tajaajila",
        eventBtn : "taateewwan",
        newsBtn : "Oduu",
        vaccancyBtn : "Gitoota hojii duwwaa",
        compliantBtn : "Komii",
        contactBtn : "nu qunamaa",
        aboutusBtn : "waa'e Keenya",
        moreText : "caalaa",
        publicationsText : "Maxxansaa",
        galleryText : "Gaalerii",
        faqBtn : "Gaaffilee Faakii",

        lidetaHeader : "Waajjira Innooveeshinii fi Teeknooloojii kutaa Magaalaa Lidataa",
        officeHead : "Itti gaafatamaa Waajjira",
        officeHeadName : "Obboo Gammachuu Geetachew Reba",
        officeHeadMessage : "Kalaqaa fi teeknooloojiin guddina biyya safisiisuudhaf humna guddaadha. Waajjira Misooma Kalaqaa fi Teeknooloojii kutaa Magaalaa Lideta keessatti, egeree bocuuf, qormaata furuuf, fi tajaajila fooyya'aa ta'eef furmaata fooyya'aa uumuuf ni carraaqna. Kalaqni yaad-rimee caalaa waan ta'eef.  humna kalaqaa fi teeknooloojii fayyadamnee guddina safisiisu, gahumsa guddisuu, fi yaadota gara furmaata dhiibbaa uumuutti ni jijjiirra. Waliin taanee yaadota gara dhugaatti jijjiiruun hawaasa kutaa magaalaa keenyaaf tajaajila saffisaa fi bu'a qabeessa ta'e kennuudhaaf ni carraaqna.",
    
        coordinatorText : "Qindeessaa hojii waajjira",
        coordinatorName : "Obboo simayew Wubante Zawude",

        teamLeaderText : "Hoggantoota garee",
        name1 : "Geetinat Lamaa Dadhii",
        name2 : "Selaam Kiroos Teelaa",
        name3 : "Alem Amare Tasamaa",
        name4 : "Yoodit Birqineh Tagany",
        position1 : "Hogganaa garee leenjii fi ijaarsa dandeettii",
        position2 : "Hoggantu garee wiirtuu daataa fi bu'uuraalee misoomaa",
        position3 : "Hoggantu garee suphaa fi haaromsaa",
        position4 : "Hoggantu garee jijjiirama sooftiweerii fi bulchiinsa",

        latestNews : "Oduu haaraa",

        org : "Qaama Qindoomina",
        missionText : "Ergama",
        visionText : "Mul'ata",
        valuesText : "Duudhaalee",
        mission : "Bu'uuraalee teeknooloojii odeeffannoo qorannoon deeggaraman misoomsuu fi sirna nageenya qabu guddisuu fi tajaajila dijitaalaa babal'isuun fayyadamummaa jiraattotaa fi daawwattoota kutaa magaalaa lidataa mirkaneessuu.",
        vision : "Bara 2022tti teeknooloojiiwwan murteessoo ta'an hojiirra oolchuudhaan jiraattotaa fi daawwattoota isheetif mijataa kan taate fi kutaa  Magaalaa dhalootaaf itti fufiinsa qabduu fi rakkoolee dandamachuu dandeessu argu.",
        values : ` - Qalbii gaarii fi Onnee qulqulluu
                   - Fayyadama teeknooloojii sadarkaa olaanaatti
                   - Kalaqa haaraa maddisiisuu 
                   - Fedhii hojii fi of kennuu
                   - Itti gaafatamummaa
                   - Iftoomina qabaachuu
                   - Walta'iinsaan hojjechuu
                   - Tajaajila gahumsaa fi bu'a qabeessa ta'e`,

        companyHistory : "Lideta Magaalaa Xixiqqoo Hojii Guddina Teeknooloojii fi Yaada Haaraa (ITDO) Lideta Magaalaa Xixiqqoo Hojii Guddina Teeknooloojii fi Yaada Haaraa (ITDB) dhaabbata mootummaa taee, bara 2009 Amajjii 11/2009 seeraan dhaabbata ta'ee jalqabame.",
        linkText : "Linkiwwan",
        infoText : "Odeeffannoo",
        newsAndUpdatesText : "NOduu fi Meejjii Haaraa",
        sub : "Oduu fi meejiilee haaraa hunda argachuuf guyyaa guyyaa galmeessu.",
        subscribeText : "Galmeessi",
    }
}

const readMoreBtns = document.querySelectorAll(".read-more-button");

readMoreBtns.forEach((readMoreBtn) => readMoreBtn.addEventListener("click", () => {
    let id = readMoreBtn.id
    window.location.href = `http://127.0.0.1:5500/News1/news1.html?newsId=${id}`
}));