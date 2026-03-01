// Add an image property to each person. Update these paths when you have the real images!
const imams = [
    {
        name: "Prophet Muhammad (PBUH)",
        // ADD THIS LINE: point to the new banner image
        image: "assets/images/prophet-banner.jpg", 
        start: 570,
        end: 632,
        events: [
            { year: 570, name: "Birth", type: "birth", importance: 3, description: "Born in Mecca in the Year of the Elephant. Orphaned early, he was raised by his grandfather Abdul Muttalib and uncle Abu Talib. Known as Al-Amin (The Trustworthy).", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/birth-holy-prophet" },
            { year: 595, name: "Marriage to Khadijah", type: "marriage", importance: 3, description: "Married Lady Khadijah (SA), who was the first to believe in his message and supported Islam with her wealth and love.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/marriage-khadijah" },
            { year: 610, name: "First Revelation (Mab'ath)", type: "revelation", importance: 3, description: "Received the first revelation of the Quran in the Cave of Hira at age 40. Archangel Gabriel brought the command 'Read', marking the beginning of his Prophethood.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/person/prophet-muhammad" },
            { year: 615, name: "Birth of Sayyida Fatima (SA)", type: "birth", importance: 2, description: "Birth of his beloved daughter Fatima (SA), the Lady of Light. The Prophet said, 'Fatima is a part of me'.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/fatima-zahra-noble-quran-naser-makarem-shirazi" },
            { year: 621, name: "Isra and Mi'raj", type: "revelation", importance: 3, description: "The miraculous Night Journey from Mecca to Jerusalem and then the Ascension to the Heavens, where he met previous Prophets and received the command for daily prayers.", source: "Quran 17:1", sourceUrl: "https://www.al-islam.org/al-miraj-night-ascension-mullah-faiz-ullah-sharifi" },
            { year: 622, name: "Hijra", type: "migration", importance: 3, description: "Migration from Mecca to Medina to escape assassination plots. This pivotal event marks the beginning of the Islamic calendar and the establishment of the first Islamic state.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/articles/hijrah-migration-prophet-muhammad-mecca-medina" },
            { year: 624, name: "Battle of Badr", type: "battle", importance: 2, description: "The first major battle between Muslims and the Quraish. Despite being outnumbered, the Muslims achieved a decisive victory with divine help.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-badr" },
            { year: 625, name: "Battle of Uhud", type: "battle", importance: 2, description: "A challenging battle where the Prophet's uncle Hamza (AS) was martyred. Imam Ali (AS) defended the Prophet steadfastly.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-uhud" },
            { year: 628, name: "Treaty of Hudaybiyyah", type: "treaty", importance: 2, description: "A strategic peace treaty with the Quraish that paved the way for the peaceful conquest of Mecca and the spread of Islam.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/treaty-hudaybiyya" },
            { year: 630, name: "Conquest of Mecca", type: "conquest", importance: 3, description: "The peaceful liberation of Mecca. The Prophet cleared the Kaaba of idols and granted a general amnesty to his former enemies.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/conquest-mecca" },
            { year: 615, name: "Crying Palm Trunk", type: "miracle", importance: 2, description: "The palm trunk the Prophet used to lean on cried like a child when he moved to a new pulpit.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/miracles-holy-prophet" },
            { year: 616, name: "Moving Tree", type: "miracle", importance: 2, description: "A tree uprooted itself and moved towards the Prophet upon his command to prove his prophethood to the Quraysh.", source: "Nahj al-Balagha", sourceUrl: "https://www.al-islam.org/nahjul-balagha-part-1-sermons/sermon-192-praise-be-allah-who-wears-apparel-honour" },
            { year: 617, name: "Splitting of the Moon", type: "miracle", importance: 3, description: "The moon split into two halves at the Prophet's command to prove his prophethood to the Quraysh.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/miracles-holy-prophet" },
            { year: 618, name: "Pebbles Glorifying God", type: "miracle", importance: 2, description: "Pebbles in the Prophet's hand were heard glorifying Allah by everyone present.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/miracles-holy-prophet" },
            { year: 622, name: "Spider Web at Cave", type: "miracle", importance: 2, description: "A spider spun a web and a dove laid eggs at the entrance of the Cave of Thawr to hide the Prophet from pursuers.", source: "Tarikh al-Tabari", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/hijra-migration" },
            { year: 624, name: "Rain Prayer", type: "miracle", importance: 2, description: "The Prophet prayed for rain during a severe drought in Medina, and clouds immediately gathered and poured rain.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/miracles-holy-prophet" },
            { year: 627, name: "Feeding the Multitude", type: "miracle", importance: 2, description: "Fed a large army with a small amount of food during the Battle of the Trench.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/miracles-holy-prophet" },
            { year: 628, name: "Prophecy of Ammar", type: "revelation", importance: 2, description: "Prophesied that Ammar ibn Yasir would be killed by a 'rebellious group', which confirmed the status of Muawiya's army at Siffin.", source: "Sahih Bukhari", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-siffin" },
            { year: 632, name: "Event of Ghadir Khumm", type: "appointment", importance: 3, description: "Following the Farewell Pilgrimage, the Prophet appointed Imam Ali (AS) as his successor, declaring: 'Of whom I am the Master, Ali is his Master'.", source: "Al-Ghadir", sourceUrl: "https://www.al-islam.org/ghadir/incident.htm" },
            { year: 632, name: "Martyrdom", type: "death", importance: 3, description: "The Holy Prophet passed away in Medina at the age of 63, leaving behind the Quran and his Ahlulbayt as guidance for the Ummah.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-muhammad-prophet-sayyid-saeed-akhtar-rizvi/death-holy-prophet" }
        ]
    },
    {
        name: "Sayyida Fatima (SA)",
        image: "assets/images/fatima.jpg",
        start: 615,
        end: 632,
        events: [
            { year: 615, name: "Birth", type: "birth", importance: 3, description: "Born in Mecca to the Prophet and Khadijah. She is known as the Leader of the Women of the Worlds.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/fatima-gracious-abu-muhammad-ordoni/chapter-4-birth-lady-fatima" },
            { year: 624, name: "Marriage to Imam Ali (AS)", type: "marriage", importance: 3, description: "A divine union celebrated in the heavens before the earth. Their marriage is the model of simplicity and love.", source: "Man La Yahduruhu al-Faqih", sourceUrl: "https://www.al-islam.org/fatima-gracious-abu-muhammad-ordoni/chapter-16-marriage" },
            { year: 632, name: "Sermon of Fadak", type: "speech", importance: 3, description: "A powerful sermon delivered in the Prophet's Mosque defending her rights and the right of Imam Ali (AS) to the Caliphate.", source: "Kitab Sulaym ibn Qays", sourceUrl: "https://www.al-islam.org/fatima-gracious-abu-muhammad-ordoni/chapter-53-martyrdom" },
            { year: 632, name: "Protection from Fire", type: "miracle", importance: 2, description: "A goldsmith's son was miraculously protected from a blazing furnace after his mother invoked Lady Fatima's name.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/fatima-zahra-noble-quran-naser-makarem-shirazi" },
            { year: 632, name: "Clothes from Heaven", type: "miracle", importance: 2, description: "Archangel Gabriel brought new clothes from heaven for Imam Hasan and Husayn for Eid, as Lady Fatima had none to give them.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/fatima-zahra-noble-quran-naser-makarem-shirazi" },
            { year: 632, name: "Martyrdom", type: "death", importance: 3, description: "She was martyred shortly after the Prophet's death while defending the Imamate. She is buried in a secret location in Medina.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/fatima-gracious-abu-muhammad-ordoni/chapter-53-martyrdom" }
        ]
    },
    {
        name: "Imam Ali (AS)",
        image: "assets/images/imam-ali.jpg",
        start: 600,
        end: 661,
        events: [
            { year: 600, name: "Birth in Kaaba", type: "birth", importance: 3, description: "The only person ever born inside the Holy Kaaba. He was the cousin and son-in-law of the Prophet.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/story-holy-kaaba-and-its-people-smr-shabbar/first-imam-ali-ibn-abu-talib" },
            { year: 622, name: "Laylat al-Mabit", type: "battle", importance: 3, description: "Slept in the Prophet's bed on the night of Hijra to protect him from assassination, displaying ultimate self-sacrifice.", source: "Quran 2:207", sourceUrl: "https://www.al-islam.org/articles/laylat-al-mabit-night-sacrifice" },
            { year: 656, name: "Battle of Jamal", type: "battle", importance: 2, description: "The Battle of the Camel, fought near Basra against those who broke their allegiance to the Imam.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-basra-jamal" },
            { year: 657, name: "Battle of Siffin", type: "battle", importance: 2, description: "A prolonged conflict against Muawiya's forces. It ended with a deceptive arbitration proposal.", source: "Waq'at Siffin", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-siffin" },
            { year: 628, name: "Conquest of Khaybar", type: "miracle", importance: 3, description: "Miraculously lifted the heavy gate of Khaybar, which 40 men could not move, and used it as a shield.", source: "Tarikh al-Tabari", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/conquest-khaybar" },
            { year: 630, name: "Battle of the Jinn", type: "miracle", importance: 2, description: "Sent by the Prophet to fight rebellious Jinn in the Valley of Jinn, defeating them with divine power.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/articles/battle-jinn" },
            { year: 657, name: "Spring from Rock", type: "miracle", importance: 2, description: "On the way to Siffin, he removed a massive rock to reveal a hidden spring of water for his thirsty army.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-commander-faithful-ali-ibn-abu-talib-shaykh-mufid" },
            { year: 658, name: "Snake in Pulpit", type: "miracle", importance: 2, description: "A Jinn appeared as a snake during his sermon to ask a question; the Imam answered him calmly, showing his authority over Jinn.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/articles/battle-jinn" },
            { year: 658, name: "Speaking to the Dead", type: "miracle", importance: 2, description: "Spoke to the dead in the graveyard of Kufa, and they replied to him, confirming the reality of the afterlife.", source: "Nahj al-Balagha", sourceUrl: "https://www.al-islam.org/nahjul-balagha-part-2-letters-and-sayings/letter-31-advice-one-his-sons-after-returning-battle" },
            { year: 658, name: "Prophecy of Mitham", type: "revelation", importance: 2, description: "Foretold the exact details of how his companion Mitham al-Tammar would be martyred, which happened years later.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/articles/mitham-al-tammar" },
            { year: 658, name: "Battle of Nahrawan", type: "battle", importance: 2, description: "Fought against the Kharijites who had seceded from the Imam's army after Siffin.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-nahrawan" },
            { year: 660, name: "Radd al-Shams", type: "miracle", importance: 3, description: "The sun was miraculously brought back to allow the Imam to pray Asr prayer on time.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/articles/radd-al-shams-return-sun" },
            { year: 661, name: "Martyrdom", type: "death", importance: 3, description: "Struck by a poisoned sword while praying in the Mosque of Kufa on the 19th of Ramadan. He was martyred on the 21st.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-commander-faithful-ali-ibn-abu-talib-shaykh-mufid/death-commander-faithful" }
        ]
    },
    {
        name: "Imam Hasan (AS)",
        image: "assets/images/imam-hasan.jpg",
        start: 625,
        end: 670,
        events: [
            { year: 625, name: "Birth", type: "birth", importance: 3, description: "The first grandson of the Prophet, born in Medina. The Prophet named him Hasan (The Good).", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/person/imam-al-hasan" },
            { year: 661, name: "Sermon after Martyrdom", type: "speech", importance: 2, description: "Delivered a sermon assuming the Caliphate after his father's martyrdom, emphasizing unity and adherence to the Quran.", source: "Sulh al-Hasan", sourceUrl: "https://www.al-islam.org/sulh-al-hasan-sheikh-radi-aal-yasin/chapter-4-imams-sermon-upon-assuming-caliphate" },
            { year: 661, name: "Peace Treaty", type: "treaty", importance: 3, description: "Signed a treaty with Muawiya to prevent bloodshed and expose the Umayyad's true nature, safeguarding the future of Islam.", source: "Sulh al-Hasan", sourceUrl: "https://www.al-islam.org/sulh-al-hasan-sheikh-radi-aal-yasin" },
            { year: 661, name: "Attack at Sabat", type: "battle", importance: 2, description: "The Imam was attacked and wounded by a Kharijite while trying to mobilize his army, leading to the necessity of the treaty.", source: "Sulh al-Hasan", sourceUrl: "https://www.al-islam.org/sulh-al-hasan-sheikh-radi-aal-yasin/chapter-13-sabat" },
            { year: 665, name: "Fruiting of Dry Tree", type: "miracle", importance: 2, description: "A dry date palm instantly bore fresh fruit after the Imam prayed for it.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/person/imam-al-hasan" },
            { year: 670, name: "Martyrdom", type: "death", importance: 3, description: "Martyred by poison administered by his wife Ju'da, instigated by Muawiya. Buried in Jannat al-Baqi.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/person/imam-al-hasan" }
        ]
    },
    {
        name: "Imam Husayn (AS)",
        image: "assets/images/imam-husayn.jpg",
        start: 626,
        end: 680,
        events: [
            { year: 626, name: "Birth", type: "birth", importance: 3, description: "The second grandson of the Prophet, born in Medina. The Prophet said, 'Husayn is from me and I am from Husayn'.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-husayn-research-and-analysis-baqir-shareef-al-qurashi/birth" },
            { year: 680, name: "Refusal of Allegiance", type: "speech", importance: 3, description: "Refused to pledge allegiance to Yazid, declaring 'A person like me can never pledge allegiance to a person like him'.", source: "Maqtal al-Husayn", sourceUrl: "https://www.al-islam.org/event/karbala" },
            { year: 680, name: "Prophecy of Soil", type: "miracle", importance: 2, description: "The soil given to Umm Salama by the Prophet turned to blood, signifying Imam Husayn's martyrdom.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/event/karbala" },
            { year: 680, name: "Event of Karbala (Ashura)", type: "battle", importance: 3, description: "The ultimate sacrifice. Imam Husayn and 72 companions were martyred by Yazid's army, refusing to pledge allegiance to tyranny.", source: "Maqtal al-Husayn", sourceUrl: "https://www.al-islam.org/event/karbala" }
        ]
    },
    {
        name: "Imam Sajjad (AS)",
        image: "assets/images/imam-sajjad.jpg",
        start: 659,
        end: 713,
        events: [
            { year: 659, name: "Birth", type: "birth", importance: 3, description: "Born in Medina. Known as Zain al-Abidin (Adornment of the Worshippers) for his excessive prayers.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-zayn-al-abidin-baqir-shareef-al-qurashi/his-birth" },
            { year: 680, name: "Presence at Karbala", type: "battle", importance: 3, description: "He was present at Karbala but too ill to fight, preserving the lineage of the Imams. He witnessed the tragedy unfold.", source: "Maqtal al-Husayn", sourceUrl: "https://www.al-islam.org/event/karbala" },
            { year: 680, name: "Sermon in Damascus", type: "speech", importance: 3, description: "Delivered a fearless sermon in Yazid's court while in chains, exposing the crimes of the Umayyads and introducing the true status of the Ahlulbayt.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/articles/sermon-imam-sajjad-damascus" },
            { year: 700, name: "Sahifa Sajjadiya", type: "revelation", importance: 2, description: "Compiled the 'Psalms of Islam', a collection of supplications that taught the community how to pray and spiritual knowledge under oppression.", source: "Sahifa Sajjadiya", sourceUrl: "https://www.al-islam.org/sahifa-al-kamilah-al-sajjadiyya-imam-zain-ul-abideen" },
            { year: 705, name: "Speaking to Gazelle", type: "miracle", importance: 2, description: "Communicated with a gazelle in the desert, demonstrating his authority over nature.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-zayn-al-abidin-baqir-shareef-al-qurashi" },
            { year: 713, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by the Umayyad ruler Walid ibn Abd al-Malik. Buried in Jannat al-Baqi.", source: "Manaqib Al Abi Talib", sourceUrl: "https://www.al-islam.org/life-imam-zayn-al-abidin-baqir-shareef-al-qurashi/his-martyrdom" }
        ]
    },
    {
        name: "Imam Baqir (AS)",
        image: "assets/images/imam-baqir.jpg",
        start: 676,
        end: 733,
        events: [
            { year: 676, name: "Birth", type: "birth", importance: 3, description: "Born in Medina. He was the first Imam descended from both Imam Hasan and Imam Husayn.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-baqir-baqir-shareef-al-qurashi/his-birth" },
            { year: 680, name: "Witnessed Karbala", type: "battle", importance: 2, description: "As a 4-year-old child, he witnessed the events of Ashura and the subsequent captivity.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-baqir-baqir-shareef-al-qurashi/his-life" },
            { year: 713, name: "Scientific Movement", type: "appointment", importance: 3, description: "Initiated a massive scientific movement, establishing the foundations of Shia jurisprudence and theology.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-baqir-baqir-shareef-al-qurashi/his-scientific-activities" },
            { year: 720, name: "Spring from Stone", type: "miracle", importance: 2, description: "Produced a spring of water from beneath a stone in the desert for his companions.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-baqir-baqir-shareef-al-qurashi" },
            { year: 733, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by the Umayyad Caliph Hisham. Buried in Jannat al-Baqi.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-baqir-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Imam Sadiq (AS)",
        image: "assets/images/imam-sadiq.jpg",
        start: 702,
        end: 765,
        events: [
            { year: 702, name: "Birth", type: "birth", importance: 3, description: "Born in Medina. His life spanned the transition from the Umayyad to the Abbasid dynasty.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-jafar-al-sadiq-ansariyan-publications/birth-imam-sadiq" },
            { year: 740, name: "Ja'fari School", type: "appointment", importance: 3, description: "Formalized the Shia school of law (Fiqh). He taught over 4,000 students, including the founders of Sunni schools.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-jafar-al-sadiq-ansariyan-publications/imam-sadiq-and-four-schools-thought" },
            { year: 748, name: "Debate with Atheist", type: "speech", importance: 2, description: "Famous debates with atheists like Ibn Abi al-Awja, proving the existence of God through the wonders of creation (Tawhid Mufaddal).", source: "Tawhid Mufaddal", sourceUrl: "https://www.al-islam.org/tradition-mufaddal-bringer-truth-mufaddal-ibn-umar" },
            { year: 750, name: "Reviving the Dead", type: "miracle", importance: 2, description: "Revived a dead bird to life by the permission of Allah.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-jafar-al-sadiq-ansariyan-publications" },
            { year: 765, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by the Abbasid Caliph Mansur al-Dawaniqi. Buried in Jannat al-Baqi.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-jafar-al-sadiq-ansariyan-publications/martyrdom-imam" }
        ]
    },
    {
        name: "Imam Kazim (AS)",
        image: "assets/images/imam-kazim.jpg",
        start: 745,
        end: 799,
        events: [
            { year: 745, name: "Birth", type: "birth", importance: 3, description: "Born in Abwa. Known as Al-Kazim (The One who Swallows Anger) for his patience.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-musa-bin-jafar-al-kazim-baqir-shareef-al-qurashi/his-birth" },
            { year: 795, name: "Imprisonment", type: "occultation", importance: 3, description: "Spent many years in the prisons of Harun al-Rashid, moving from Basra to Baghdad.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-musa-bin-jafar-al-kazim-baqir-shareef-al-qurashi/his-imprisonment" },
            { year: 790, name: "Bishr al-Hafi", type: "speech", importance: 2, description: "The incident where the Imam's words caused Bishr to repent and become a great ascetic.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/articles/bishr-hafi-barefooted-repentance" },
            { year: 795, name: "Speaking as Infant", type: "miracle", importance: 2, description: "Spoke eloquently while still in the cradle, demonstrating divine knowledge.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-musa-bin-jafar-al-kazim-baqir-shareef-al-qurashi" },
            { year: 799, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned in the prison of Baghdad. His funeral was held on the bridge of Baghdad.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-musa-bin-jafar-al-kazim-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Imam Reza (AS)",
        image: "assets/images/imam-reza.jpg",
        start: 765,
        end: 818,
        events: [
            { year: 765, name: "Birth", type: "birth", importance: 3, description: "Born in Medina.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-ali-bin-musa-al-rida-baqir-shareef-al-qurashi/his-birth" },
            { year: 816, name: "Journey to Khorasan", type: "migration", importance: 3, description: "Forced migration from Medina to Marw by Mamun. On the way, he narrated the famous Hadith of the Golden Chain in Nishapur.", source: "Uyun Akhbar al-Reza", sourceUrl: "https://www.al-islam.org/story-sun-look-imam-al-reza-life-works/hadith-al-silsilah-al-dhahab" },
            { year: 817, name: "Heir Apparent", type: "appointment", importance: 3, description: "Forced to accept the position of Crown Prince by Mamun, which he used to debate scholars and spread truth.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/person/imam-ali-al-rida" },
            { year: 817, name: "Debates in Court", type: "speech", importance: 3, description: "Debated leaders of Christianity, Judaism, and Zoroastrianism in Mamun's court, proving the truth of Islam from their own scriptures.", source: "Uyun Akhbar al-Reza", sourceUrl: "https://www.al-islam.org/life-imam-ali-bin-musa-al-rida-baqir-shareef-al-qurashi/debates" },
            { year: 817, name: "Golden Brick", type: "miracle", importance: 2, description: "Transformed earth into a golden brick to help a debtor.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-ali-bin-musa-al-rida-baqir-shareef-al-qurashi" },
            { year: 818, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by Mamun in Tus. Buried in Mashhad, which became a major pilgrimage site.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-ali-bin-musa-al-rida-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Imam Jawad (AS)",
        image: "assets/images/imam-jawad.jpg",
        start: 811,
        end: 835,
        events: [
            { year: 811, name: "Birth", type: "birth", importance: 3, description: "Born in Medina. The youngest Imam to assume the office.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-jawad-baqir-shareef-al-qurashi/his-birth" },
            { year: 830, name: "Debates in Baghdad", type: "speech", importance: 3, description: "Engaged in high-level theological debates in the Abbasid court, proving his divine knowledge despite his youth.", source: "Al-Ihtijaj", sourceUrl: "https://www.al-islam.org/person/imam-muhammad-al-jawad" },
            { year: 830, name: "Marriage to Umm al-Fadl", type: "marriage", importance: 2, description: "Married the daughter of Mamun, a political union that eventually led to his martyrdom.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-jawad-baqir-shareef-al-qurashi/his-marriage" },
            { year: 830, name: "Tay al-Arz", type: "miracle", importance: 2, description: "Miraculously traveled from Syria to Mecca and back in a single moment.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-jawad-baqir-shareef-al-qurashi" },
            { year: 835, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by his wife at the instigation of Mu'tasim. Buried in Kadhimiya.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-muhammad-ibn-ali-al-jawad-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Imam Hadi (AS)",
        image: "assets/images/imam-hadi.jpg",
        start: 828,
        end: 868,
        events: [
            { year: 828, name: "Birth", type: "birth", importance: 3, description: "Born in Medina.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/life-imam-ali-al-hadi-study-and-analysis-baqir-shareef-al-qurashi/his-birth" },
            { year: 848, name: "Exile to Samarra", type: "migration", importance: 3, description: "Summoned by Mutawakkil to Samarra and placed under house arrest for the rest of his life.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-ali-al-hadi-study-and-analysis-baqir-shareef-al-qurashi/his-travel-samarra" },
            { year: 850, name: "Ziyarat al-Jami'a", type: "revelation", importance: 3, description: "Taught the comprehensive Ziyarat that describes the true status of the Infallibles.", source: "Man La Yahduruhu al-Faqih", sourceUrl: "https://www.al-islam.org/ziyarat-al-jamiah-al-kabirah-hadi" },
            { year: 855, name: "Knowledge of Unseen", type: "miracle", importance: 2, description: "Demonstrated knowledge of future events and hidden matters to his companions.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-ali-al-hadi-study-and-analysis-baqir-shareef-al-qurashi" },
            { year: 868, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by the Abbasid Caliph. Buried in Samarra.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-ali-al-hadi-study-and-analysis-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Imam Askari (AS)",
        image: "assets/images/imam-askari.jpg",
        start: 846,
        end: 874,
        events: [
            { year: 846, name: "Birth", type: "birth", importance: 3, description: "Born in Medina.", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/person/imam-hasan-al-askari" },
            { year: 869, name: "Birth of Imam Mahdi", type: "birth", importance: 3, description: "The secret birth of the 12th Imam, kept hidden from the Abbasids who sought to kill him.", source: "Kamal al-Din", sourceUrl: "https://www.al-islam.org/person/imam-al-mahdi" },
            { year: 870, name: "Curing Blindness", type: "miracle", importance: 2, description: "Miraculously cured a blind boy by touching his eyes.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/life-imam-hasan-al-askari-study-and-analysis-baqir-shareef-al-qurashi" },
            { year: 874, name: "Martyrdom", type: "death", importance: 3, description: "Poisoned by Mu'tamid at a young age. Buried in Samarra.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-hasan-al-askari-study-and-analysis-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Imam Mahdi (AS)",
        image: "assets/images/imam-mahdi.jpg",
        start: 869,
        end: 2025,
        events: [
            { year: 869, name: "Birth", type: "birth", importance: 3, description: "Born in Samarra on 15th Shaban.", source: "Kamal al-Din", sourceUrl: "https://www.al-islam.org/person/imam-al-mahdi" },
            { year: 874, name: "Minor Occultation", type: "occultation", importance: 3, description: "Start of Ghaybat al-Sughra, communicating via 4 deputies.", source: "Kitab al-Ghayba", sourceUrl: "https://www.al-islam.org/person/imam-al-mahdi" },
            { year: 874, name: "The Four Deputies", type: "appointment", importance: 2, description: "During the Minor Occultation, four specific deputies (Uthman b. Sa'id, Muhammad b. Uthman, Husayn b. Ruh, Ali b. Muhammad) served as intermediaries.", source: "Kitab al-Ghayba", sourceUrl: "https://www.al-islam.org/person/imam-al-mahdi" },
            { year: 941, name: "Major Occultation", type: "occultation", importance: 3, description: "Start of Ghaybat al-Kubra. The Imam remains hidden until his reappearance.", source: "Kamal al-Din", sourceUrl: "https://www.al-islam.org/person/imam-al-mahdi" },
            { year: 950, name: "Healing of Believers", type: "miracle", importance: 2, description: "Numerous accounts of the Imam healing the sick and guiding the lost during the Major Occultation.", source: "Bihar al-Anwar", sourceUrl: "https://www.al-islam.org/person/imam-al-mahdi" }
        ]
    },
    {
        name: "Muawiya ibn Abi Sufyan (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 605,
        end: 680,
        events: [
            { year: 657, name: "Battle of Siffin", type: "battle", importance: 3, description: "Waged war against the rightful Caliph, Imam Ali (AS), causing the death of thousands of Muslims.", source: "Waq'at Siffin", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-siffin" },
            { year: 660, name: "Cursing of Ali", type: "crime", importance: 3, description: "Instituted the practice of cursing Imam Ali (AS) from the pulpits during Friday prayers, which lasted for 60 years.", source: "Sahih Muslim", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/battle-siffin" },
            { year: 666, name: "Killing of Hujr ibn Adi", type: "crime", importance: 2, description: "Executed the pious companion Hujr ibn Adi and his followers for refusing to curse Imam Ali (AS).", source: "Tarikh al-Tabari", sourceUrl: "https://www.al-islam.org/articles/martyrdom-hujr-ibn-adi" },
            { year: 670, name: "Poisoning Imam Hasan", type: "crime", importance: 3, description: "Instigated the poisoning of Imam Hasan (AS) through his wife Ju'da.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/person/imam-al-hasan" }
        ]
    },
    {
        name: "Yazid ibn Muawiya (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 646,
        end: 683,
        events: [
            { year: 680, name: "Tragedy of Karbala", type: "crime", importance: 3, description: "Ordered the killing of Imam Husayn (AS) and his companions, and the captivity of his family.", source: "Maqtal al-Husayn", sourceUrl: "https://www.al-islam.org/event/karbala" },
            { year: 683, name: "Event of Harra", type: "crime", importance: 3, description: "Attacked Medina, killing thousands of companions and allowing his army to rape and plunder the city for three days.", source: "Tarikh al-Tabari", sourceUrl: "https://www.al-islam.org/articles/tragedy-harra" },
            { year: 683, name: "Burning of Kaaba", type: "crime", importance: 3, description: "Besieged Mecca and bombarded the Holy Kaaba with catapults, setting it on fire.", source: "Tarikh al-Yaqubi", sourceUrl: "https://www.al-islam.org/articles/yazid-ibn-muawiyah-and-burning-kaaba" }
        ]
    },
    {
        name: "Harun al-Rashid (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 763,
        end: 809,
        events: [
            { year: 795, name: "Imprisonment of Imam Kazim", type: "crime", importance: 3, description: "Imprisoned Imam Musa al-Kazim (AS) for years in dark dungeons to suppress his influence.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-musa-bin-jafar-al-kazim-baqir-shareef-al-qurashi/his-imprisonment" },
            { year: 799, name: "Murder of Imam Kazim", type: "crime", importance: 3, description: "Ordered the poisoning of Imam Kazim (AS) in the prison of Sindi ibn Shahik.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-musa-bin-jafar-al-kazim-baqir-shareef-al-qurashi/his-death" }
        ]
    },
    {
        name: "Al-Mutawakkil (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 822,
        end: 861,
        events: [
            { year: 850, name: "Destruction of Karbala", type: "crime", importance: 3, description: "Ordered the destruction of Imam Husayn's (AS) shrine and ploughed the land to erase his memory.", source: "Maqtal al-Husayn", sourceUrl: "https://www.al-islam.org/event/karbala" },
            { year: 848, name: "House Arrest of Imam Hadi", type: "crime", importance: 3, description: "Forced Imam Hadi (AS) to move to Samarra and kept him under strict surveillance.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/life-imam-ali-al-hadi-study-and-analysis-baqir-shareef-al-qurashi/his-travel-samarra" }
        ]
    },
    {
        name: "Abu Bakr (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 573,
        end: 634,
        events: [
            { year: 632, name: "Saqifa", type: "crime", importance: 3, description: "Seized the Caliphate at Saqifa Bani Sa'ida immediately after the Prophet's death, ignoring the appointment of Imam Ali (AS) at Ghadir.", source: "Kitab al-Irshad", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/saqifa-bani-saida" },
            { year: 632, name: "Attack on Fatima's House", type: "crime", importance: 3, description: "Ordered the attack on the house of Lady Fatima (SA) to force Imam Ali (AS) to pledge allegiance, leading to her injury and martyrdom.", source: "Kitab Sulaym ibn Qays", sourceUrl: "https://www.al-islam.org/fatima-gracious-abu-muhammad-ordoni/chapter-53-martyrdom" },
            { year: 632, name: "Confiscation of Fadak", type: "crime", importance: 3, description: "Usurped the land of Fadak from Lady Fatima (SA), denying her inheritance and financial independence.", source: "Fadak in History", sourceUrl: "https://www.al-islam.org/fadak-history-sayyid-muhammad-baqir-al-sadr" }
        ]
    },
    {
        name: "Umar ibn al-Khattab (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 584,
        end: 644,
        events: [
            { year: 632, name: "Thursday Calamity", type: "crime", importance: 3, description: "Prevented the Prophet (PBUH) from writing his final will, claiming 'The Book of Allah is sufficient for us'.", source: "Sahih Bukhari", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/tragedy-thursday" },
            { year: 632, name: "Attack on Fatima's House", type: "crime", importance: 3, description: "Led the mob to burn the door of Lady Fatima's (SA) house, causing the miscarriage of Muhsin (AS).", source: "Kitab Sulaym ibn Qays", sourceUrl: "https://www.al-islam.org/fatima-gracious-abu-muhammad-ordoni/chapter-53-martyrdom" },
            { year: 636, name: "Innovation of Tarawih", type: "crime", importance: 2, description: "Introduced the congregational Tarawih prayers, which the Prophet had forbidden as a bid'ah (innovation).", source: "Al-Kafi", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/umar-bin-al-khattab-second-khalifa-muslims" }
        ]
    },
    {
        name: "Uthman ibn Affan (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 576,
        end: 656,
        events: [
            { year: 650, name: "Exile of Abu Dharr", type: "crime", importance: 3, description: "Exiled the great companion Abu Dharr al-Ghifari to the desert of Rabadha for criticizing corruption.", source: "History of Ya'qubi", sourceUrl: "https://www.al-islam.org/life-imam-ali-bin-musa-al-rida-baqir-shareef-al-qurashi/his-birth" },
            { year: 650, name: "Corruption and Nepotism", type: "crime", importance: 2, description: "Appointed his Umayyad relatives to key positions, allowing them to amass wealth and oppress the people.", source: "Nahj al-Balagha", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/uthman-bin-affan-third-khalifa-muslims" }
        ]
    },
    {
        name: "Khalid ibn Walid (LA)",
        image: "assets/images/villain.jpg",
        role: "villain",
        start: 592,
        end: 642,
        events: [
            { year: 632, name: "Murder of Malik ibn Nuwayra", type: "crime", importance: 3, description: "Killed the companion Malik ibn Nuwayra and married his wife the same night, a major crime ignored by the Caliph.", source: "Tarikh al-Tabari", sourceUrl: "https://www.al-islam.org/restatement-history-islam-and-muslims-sayyid-ali-asghar-razwy/khalid-bin-walid" }
        ]
    }
];

const START_YEAR = 550;
const END_YEAR = 2025;
let pixelsPerYear = 5;
let currentZoom = 1;

const timelineChart = document.getElementById('timeline-chart');
const yearMarkers = document.getElementById('year-markers');
const checkboxesContainer = document.getElementById('imam-checkboxes');
const villainCheckboxesContainer = document.getElementById('villain-checkboxes');
const selectAllBtn = document.getElementById('select-all-btn');
const deselectAllBtn = document.getElementById('deselect-all-btn');
const starsContainer = document.getElementById('stars-container');
const eventFiltersContainer = document.getElementById('event-filters');
const timelineContainer = document.querySelector('.timeline-container');

const modalOverlay = document.getElementById('event-modal');
const modalCloseBtn = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalDescription = document.getElementById('modal-description');
const modalSourceText = document.getElementById('modal-source-text');

let selectedImams = new Set(imams.map(i => i.name));
let selectedEventTypes = new Set(['birth', 'death', 'battle', 'revelation', 'appointment', 'treaty', 'occultation', 'marriage', 'speech', 'migration', 'conquest', 'crime', 'miracle']);

function init() {
    imams.sort((a, b) => a.start - b.start);
    createStars();
    createCheckboxes();
    createEventFilters();
    renderTimeline();
    setupEventListeners();
}

function createStars() {
    if (!starsContainer) return;
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        starsContainer.appendChild(star);
    }
}

function createEventFilters() {
    if (!eventFiltersContainer) return;
    const types = ['birth', 'death', 'battle', 'revelation', 'appointment', 'treaty', 'occultation', 'crime', 'miracle'];

    types.forEach(type => {
        const label = document.createElement('label');
        label.className = 'checkbox-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.value = type;
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedEventTypes.add(type);
            } else {
                selectedEventTypes.delete(type);
            }
            renderTimeline();
        });

        label.appendChild(checkbox);
        const typeName = type.charAt(0).toUpperCase() + type.slice(1);
        label.appendChild(document.createTextNode(` ${typeName}`));
        eventFiltersContainer.appendChild(label);
    });
}

function createCheckboxes() {
    if (!checkboxesContainer) return;
    
    while (checkboxesContainer && checkboxesContainer.firstChild) checkboxesContainer.removeChild(checkboxesContainer.firstChild);
    if (villainCheckboxesContainer) while (villainCheckboxesContainer.firstChild) villainCheckboxesContainer.removeChild(villainCheckboxesContainer.firstChild);

    imams.forEach(imam => {
        const label = document.createElement('label');
        label.className = 'checkbox-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = imam.name;
        checkbox.checked = selectedImams.has(imam.name);

        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedImams.add(imam.name);
            } else {
                selectedImams.delete(imam.name);
            }
            renderTimeline();
        });

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${imam.name}`));

        if (imam.role === 'villain') {
            label.classList.add('villain-checkbox');
            if (villainCheckboxesContainer) {
                villainCheckboxesContainer.appendChild(label);
            } else {
                checkboxesContainer.appendChild(label);
            }
        } else {
            checkboxesContainer.appendChild(label);
        }
    });
}

function setupEventListeners() {
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', () => {
            selectedImams = new Set(imams.map(i => i.name));
            document.querySelectorAll('.checkbox-item input').forEach(cb => cb.checked = true);
            renderTimeline();
        });
    }

    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', () => {
            selectedImams.clear();
            document.querySelectorAll('.checkbox-item input').forEach(cb => cb.checked = false);
            renderTimeline();
        });
    }

    const zoomSlider = document.getElementById('zoom-slider');
    const fitViewBtn = document.getElementById('fit-view-btn');

    if (zoomSlider) {
        zoomSlider.addEventListener('input', (e) => {
            currentZoom = parseFloat(e.target.value);
            pixelsPerYear = 5 * currentZoom;
            renderTimeline();
        });
    }

    if (fitViewBtn) {
        fitViewBtn.addEventListener('click', () => {
            const containerWidth = timelineContainer.clientWidth - 300; 
            const totalYears = END_YEAR - START_YEAR;
            const optimalPixelsPerYear = containerWidth / totalYears;
            let optimalZoom = optimalPixelsPerYear / 5;
            optimalZoom = Math.max(0.1, Math.min(4, optimalZoom));
            
            currentZoom = optimalZoom;
            pixelsPerYear = 5 * currentZoom;
            if (zoomSlider) zoomSlider.value = currentZoom;
            renderTimeline();
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(event) {
    if (!modalOverlay) return;

    modalTitle.textContent = event.name;
    modalDate.textContent = `Year: ${event.year} CE`;
    modalDescription.textContent = event.description;

    if (event.sourceUrl) {
        const link = document.createElement('a');
        const isValidUrl = (url) => {
            try {
                const parsed = new URL(url, window.location.origin);
                return ['http:', 'https:'].includes(parsed.protocol);
            } catch (e) {
                return false;
            }
        };

        if (isValidUrl(event.sourceUrl)) {
            link.href = event.sourceUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer'; 
            link.className = 'modal-source-link';
            link.textContent = event.source || "Source";
            modalSourceText.textContent = ''; 
            modalSourceText.appendChild(link);
        } else {
            modalSourceText.textContent = event.source || "Source not specified (unsafe URL)";
        }
    } else {
        modalSourceText.textContent = event.source || "Source not specified";
    }

    modalOverlay.classList.add('active');
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
    }
}

function renderTimeline() {
    if (!timelineChart || !yearMarkers) return;

    // Clear old renders
    while (timelineChart.firstChild) timelineChart.removeChild(timelineChart.firstChild);
    while (yearMarkers.firstChild) yearMarkers.removeChild(yearMarkers.firstChild);

    const totalYears = END_YEAR - START_YEAR;
    const chartWidth = totalYears * pixelsPerYear;

    timelineChart.style.width = `${chartWidth}px`;
    yearMarkers.style.width = `${chartWidth}px`;

    const markerInterval = currentZoom > 2 ? 10 : (currentZoom > 1 ? 25 : 50);

    for (let year = START_YEAR; year <= END_YEAR; year += markerInterval) {
        const left = (year - START_YEAR) * pixelsPerYear;
        const marker = document.createElement('div');
        marker.className = 'year-marker';
        marker.style.left = `${left}px`;
        marker.textContent = year;
        yearMarkers.appendChild(marker);
    }

    imams.forEach((imam, index) => {
        if (!selectedImams.has(imam.name)) return;

        const row = document.createElement('div');
        row.className = 'timeline-row';
        timelineChart.appendChild(row);

        // --- Create Left-Side Label Area ---
        const labelContainer = document.createElement('div');
        labelContainer.className = 'timeline-label';
        
        // Circular Profile Image (if provided)
        if (imam.image) {
            const imgElement = document.createElement('img');
            imgElement.src = imam.image;
            imgElement.alt = imam.name;
            imgElement.className = 'timeline-person-image';
            
            // Fallback user icon if image is not found
            imgElement.onerror = function() {
                this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="%23d4af37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"%3E%3C/path%3E%3Ccircle cx="12" cy="7" r="4"%3E%3C/circle%3E%3C/svg%3E';
            };
            labelContainer.appendChild(imgElement);
        }

        const nameText = document.createElement('span');
        nameText.textContent = imam.name;
        labelContainer.appendChild(nameText);

        if (imam.role === 'villain') {
            labelContainer.classList.add('villain-label');
        }
        
        row.appendChild(labelContainer);

        // --- Create Timeline Bar Area ---
        const barContainer = document.createElement('div');
        barContainer.className = 'timeline-bar-container';

        const startOffset = (imam.start - START_YEAR) * pixelsPerYear;
        const duration = imam.end - imam.start;
        const width = duration * pixelsPerYear;

        // The background connector line
        const connector = document.createElement('div');
        connector.className = 'connector-line';
        connector.style.left = `${startOffset}px`;
        const rowHeight = 130; // Reduced height because gaps are smaller
        const heightToTop = (index * rowHeight) + 20;
        connector.style.height = `${heightToTop}px`;
        connector.style.top = `-${heightToTop}px`;
        barContainer.appendChild(connector);

        // The main interactive bar
// 1. Create the main timeline bar container
        const bar = document.createElement('div');
        bar.className = 'timeline-bar';
        
        // Add fallback color classes just in case
        if (imam.name.includes("Prophet")) bar.classList.add('role-prophet');
        else if (imam.name.includes("Fatima")) bar.classList.add('role-fatima');
        else if (imam.role === 'villain') bar.classList.add('role-villain');
        else bar.classList.add('role-imam');

        bar.style.left = `${startOffset}px`;
        bar.style.width = `${width}px`;
        bar.title = `${imam.name}\n${imam.start} - ${imam.end} CE`;

        // 2. NEW: Inject the wide background image strip inside the timeline bar
        if (imam.image) {
            const bgImage = document.createElement('img');
            bgImage.src = imam.image;
            bgImage.className = 'timeline-bar-bg';
            // Hide image element entirely if the file isn't found, so fallback colors show
            bgImage.onerror = function() {
                this.style.display = 'none';
            };
            bar.appendChild(bgImage);
        }
        barContainer.appendChild(bar);

        // --- Create Event Star Markers ---
        if (imam.events) {
            const sortedEvents = [...imam.events].sort((a, b) => a.year - b.year);

            sortedEvents.forEach(event => {
                const allowedFallbackTypes = ['marriage', 'speech', 'migration', 'conquest', 'crime', 'miracle'];
                if (!selectedEventTypes.has(event.type) && !allowedFallbackTypes.includes(event.type)) return;

                const minImportance = currentZoom < 1.5 ? 3 : (currentZoom < 2.5 ? 2 : 1);

                if (event.importance >= minImportance) {
                    const eventMarker = document.createElement('div');
                    const ALLOWED_EVENT_TYPES = ['birth','death','battle','revelation','appointment','treaty','occultation','marriage','speech','migration','conquest','crime','miracle'];
                    const safeType = ALLOWED_EVENT_TYPES.includes(event.type) ? event.type : 'other';
                    
                    eventMarker.classList.add('event-marker');
                    eventMarker.classList.add(`event-${safeType}`);
                    
                    // Place the star on the horizontal timeline
                    const eventOffset = (event.year - START_YEAR) * pixelsPerYear;
                    eventMarker.style.left = `${eventOffset}px`;

                    // Create the hidden hover label
                    const eventLabel = document.createElement('span');
                    eventLabel.className = 'event-label';
                    eventLabel.textContent = event.name;

                    eventMarker.appendChild(eventLabel);

                    // Open full details on click
                    eventMarker.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openModal(event);
                    });

                    barContainer.appendChild(eventMarker);
                }
            });
        }

        row.appendChild(barContainer);
    });
}

// Boot up the application
init();