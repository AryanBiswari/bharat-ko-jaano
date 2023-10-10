// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const showAnsBtn = document.getElementById("show-ans-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const roundList = document.getElementById("round-list");
const copyrightSymbol = document.getElementById("copyright-symbol");
const modal = document.getElementById("copyright-modal");
const closeModal = document.getElementById("close-modal");

const sidebarRounds = [
  "default",
  "elimination",
  "passing",
  "group",
  "pictureA",
  "pictureB",
  "pictureC",
  "pictureD",
  "pictureE",
  "pictureF",
  "videoA",
  "videoB",
  "videoC",
  "videoD",
  "videoE",
  "videoF",
  "audioA",
  "audioB",
  "audioC",
  "audioD",
  "audioE",
  "audioF",
  "fastest",
  "box",
  "patianceA",
  "patianceB",
  "patianceC",
  "patianceD",
  "patianceE",
  "patianceF",
  "khelA",
  "khelB",
  "khelC",
  "khelD",
  "khelE",
  "khelF",
  "rajnitiiA",
  "rajnitiiB",
  "rajnitiiC",
  "rajnitiiD",
  "rajnitiiE",
  "rajnitiiF",
];

// Modify questions array to include 'round' property for each question
const questions = [
<<<<<<< HEAD
  { round: "default", format: "text", question: "आपका स्वागत है", answer: "" },
  {
    round: "elimination",
    format: "text",
    question: "1. भारत का सर्वाधिक जनसंख्‍या वाला राज्‍य कौन सा है ?",
    answer: "उत्‍तरप्रदेश",
  },
  {
    round: "elimination",
    format: "text",
    question: "2. सबसे कम साक्षरता वाला राज्‍य कौन सा है ? ",
    answer: " बिहार ",
  },
=======
    { round: 'default', format: 'text',  question: 'आपका स्वागत है', answer: '' },
{round: 'elimination', format: 'text', question: '1. भारत का सर्वाधिक जनसंख्‍या वाला राज्‍य कौन सा है ?', answer: 'उत्‍तरप्रदेश'}, 
{round: 'elimination', format: 'text', question: '2. सबसे कम साक्षरता वाला राज्‍य कौन सा है ? ', answer: ' बिहार '},

{round: 'elimination', format: 'text', question: '3. भारत का सबसे लम्‍बा समुद्र तट कौन सा है ? ', answer: ' मरीना बीच, चेन्‍नई'},
 
{round: 'elimination', format: 'text', question: '4. भारत का राष्‍ट्रीय ध्‍येय वाक्‍य क्‍या है ? ', answer: ' सत्‍य मेव जयते '},
 
{round: 'elimination', format: 'text', question: '5. भारत के प्रथम शिक्षा मंत्री कौन थे ? ', answer: ' अबुल कलाम आजाद '},

 
{round: 'elimination', format: 'text', question: '6. भारत के प्रथम उपराष्‍ट्रपति कौन थे ? ', answer: ' डॉ. एस. राधाकृष्‍णन'},
 
{round: 'elimination', format: 'text', question: '7. भारत के प्रथम विधिमंत्री कौन थे ? ', answer: ' डॉ. अम्‍बेडकर '},
 
{round: 'elimination', format: 'text', question: '8. नोबेल पुरस्‍कार प्रापत करने वाले प्रथम भारतीय वैज्ञानिक कौन थे ? ', answer: ' सी. व्‍ही. रमन '},
 
{round: 'elimination', format: 'text', question: '9. भारतीय मूल की प्रथम महिला अंतरिक्षत यात्री कौन थी ? ', answer: ' कल्‍पना चावला'},
 
{round: 'elimination', format: 'text', question: '10. भारत में प्रथम महिला राज्‍यपाल कौन थी ? ', answer: ' सरोजनी नायडू '},
  
{round: 'elimination', format: 'text', question: '11. भारत रत्‍न से सम्‍मानित प्रथम महिला कौन थी ? ', answer: ' इंदिरा गांधी'},
  
{round: 'elimination', format: 'text', question: '12. भारत रत्‍न से सम्‍मानित प्रथम विदेशी व्‍यक्ति कौन थे ? ', answer: ' खान अब्‍दुल गफ्फार खान '},
  
{round: 'elimination', format: 'text', question: '13. चुनाव में प्रथम बार इलेक्‍ट्रोनिक मशीन का प्रयोग कब हुआ था ? ', answer: ' 1982 केरल उपचुनाव'},
  
{round: 'elimination', format: 'text', question: '14. संस्‍कृत भाषा में बनी पहली फिल्‍म कौन सी थी ? ', answer: ' शंकराचार्य'},
  
{round: 'elimination', format: 'text', question: '15. भारत में प्रथम मेट्रो रेल कहां चलाई गई थी ? ', answer: ' कोलकाता '},
  
{round: 'elimination', format: 'text', question: '16. सबसे अधिक व्‍यस्‍त पुल कौन सा है ? ', answer: ' हावड़ा ब्रिज कोलकाता '},
  
{round: 'elimination', format: 'text', question: '17. भारत में सबसे ऊंचाई पर स्थित हवाई अड्डा कहां पर है ? ', answer: ' लेह'},
  
{round: 'elimination', format: 'text', question: '18. भारत का सबसे लम्‍बा बांध कौन सा है ? ', answer: ' हीरा कुण्‍ड '},
  
{round: 'elimination', format: 'text', question: '19. भारत का सबसे बड़ा मठ कौन सा है ? ', answer: ' तवांग (अरुणाचल प्रदेश)'},
  
{round: 'elimination', format: 'text', question: '20. भारत में कौन सा प्रतिजैविक प्रथम बार प्रयोग हुआ ? ', answer: ' पेनिसिलिन '},
  
{round: 'elimination', format: 'text', question: '21. भारत का सबसे पुराना ताप बिजली घर ? ', answer: ' दुर्गापुर '},
  
{round: 'elimination', format: 'text', question: '22. भारत की प्रथम टायर कंपनी ? ', answer: ' उनलप '},
  
{round: 'elimination', format: 'text', question: '23. मौर्य वंश का अंतिम सम्राट कौन था ? ', answer: ' बृहद्रथ'},
  
{round: 'elimination', format: 'text', question: '24. बुद्ध के उपदेशों का प्रथम संदर्भ ग्रंथ कौन सा है ? ', answer: ' त्रिपिटक'},
  
{round: 'elimination', format: 'text', question: '25. कवि कालीदास किस राजा के शासन काल में थे ? ', answer: ' विक्रमादित्‍य '},
  
{round: 'elimination', format: 'text', question: '26. असम का सबसे पुराना नाम क्‍या है ? ', answer: ' प्रागज्‍योतिष '},
  
{round: 'elimination', format: 'text', question: '27. पल्‍लव वंश का अं‍त किसने किया था ? ', answer: ' चोल शासक अपराजित'},
  
{round: 'elimination', format: 'text', question: '28. इब्‍नबतूता किसके शासन काल में आया था ? ', answer: ' मुहम्‍मद बिन तुगलक'},
  
{round: 'elimination', format: 'text', question: '29. विजय नगर साम्राज्‍य के प्रसिद्ध राजा का नाम ? ', answer: ' कृष्‍ण देवराय '},
  
{round: 'elimination', format: 'text', question: '30. मेवाड़ के प्रथम राणा का नाम क्‍या था ? ', answer: ' गुहिल '},
  
{round: 'elimination', format: 'text', question: '31. मीरा बाई के पिता का नाम क्‍या था ? ', answer: ' रत्‍न सिंह '},
  
{round: 'elimination', format: 'text', question: '32. शिवाजी का राज्‍य रोहण का वर्ष कौन सा था ? ', answer: ' 1674'},
  
{round: 'elimination', format: 'text', question: '33. अंग्रेजी राज्‍य की पहली राजधानी कौन सी थी ? ', answer: ' कोलकाता '},
  
{round: 'elimination', format: 'text', question: '34. डांडी मार्च किस आन्‍दोलन का हिस्‍सा था ? ', answer: ' सविनय अवज्ञा'},
  
{round: 'elimination', format: 'text', question: '35. आजाद हिन्‍द फौज मुकदमा किस स्‍थान पर चला था ? ', answer: ' लाल किला दिल्‍ली'},
  
{round: 'elimination', format: 'text', question: '36. संदेह स्‍वर्ग में जाने की इच्‍छा रखने वाला राजा कौन था ? ', answer: ' त्रिशंकु '},
  
{round: 'elimination', format: 'text', question: '37. किस राजा के नाम पर धरती का नाम प्रथ्‍वी हुआ था ? ', answer: ' पृथु '},
  
{round: 'elimination', format: 'text', question: '38. राजा जनक का वास्‍तविक नाम क्‍या था ? ', answer: ' सीरध्‍वज '},
  
{round: 'elimination', format: 'text', question: '39. परीक्षित ने श्रीमद भागवत कथा किससे सुनी थी ? ', answer: ' शुकदेव'},
  
{round: 'elimination', format: 'text', question: '40. महात्‍मा बुद्ध के पिता का नाम क्‍या था ? ', answer: ' शुद्धोधन '},
  
{round: 'elimination', format: 'text', question: '41. सम्राट अशोक व चंद्रगुप्‍त में क्‍या संबंध था ? ', answer: ' दादा-पोते'},
  
{round: 'elimination', format: 'text', question: '42. भारत का नेपोलियन कहा जाता था ? ', answer: ' समुद्रगुप्‍त '},
  
{round: 'elimination', format: 'text', question: '43. तराइन का प्रथम युद्ध किसके बीच हुआ था ? ', answer: ' पृथ्‍वीराज और मोहम्‍मद गौरी'},
  
{round: 'elimination', format: 'text', question: '44. महाराणा प्रताप के पुत्र का नाम क्‍या था ? ', answer: ' अमर सिंह '},
  
{round: 'elimination', format: 'text', question: '45. कबीरदास जी के गुरु का नाम क्‍या था ? ', answer: ' रामानन्‍द '},
  
{round: 'elimination', format: 'text', question: '46. कम्‍ब के किस भाशा में रामायण लिखी ? ', answer: ' तमिल '},
  
{round: 'elimination', format: 'text', question: '47. संविधान सभा के प्रथम अध्‍यक्ष कौन थे ? ', answer: ' सच्चिदानन्‍द सिन्‍हा'},
  
{round: 'elimination', format: 'text', question: '48. लाल बहादुर शास्‍त्री प्रधानमंत्री कब बने थे ? ', answer: ' 1964 '},
  
{round: 'elimination', format: 'text', question: '49. गोवा का भारत में विलय कब हुआ था ? ', answer: ' 9 दिसम्‍बर 1961 '},
  
{round: 'elimination', format: 'text', question: '50. 81 वर्ष की आयु में भारत के प्रधानमंत्री बनने वाले नेता कौन थे ? ', answer: ' मोरारजी देसाई '},
  
{round: 'elimination', format: 'text', question: '51. लता मंगेशकर को भारत रत्‍न किस सन में दिया गया था ? ', answer: ' 2001'},
  
{round: 'elimination', format: 'text', question: '52. राष्‍ट्रपति ज्ञानी जैलसिंह का कार्यकाल क‍ब से कब तक रहा ? ', answer: '87'},
  
{round: 'elimination', format: 'text', question: '53. भारत में सर्वप्रथम स्‍थापित गोल्‍फ क्‍लब का नाम क्‍या था ? ', answer: ' रॉयल गोल्‍फ क्‍लब '},
  
{round: 'elimination', format: 'text', question: '54. भारत की तरफ से टेस्‍ट क्रिकेट में पहला विकेट किसने लिया था ? ', answer: ' मोहम्‍मद नासिर '},
  
{round: 'elimination', format: 'text', question: '55. प्रथम भारतीय बैडमिन्‍टन खिलाड़ी जिसने विश्‍वकप जीता था ? ', answer: ' प्रकाश पादुकोण '},
  
{round: 'elimination', format: 'text', question: '56. कुश्‍ती में पहला ओलम्पिक पदक जीतने वाला खिलाड़ी कौन था ? ', answer: ' के. डी. जाधव'},
  
{round: 'elimination', format: 'text', question: '57. किसने कहा कि तृष्‍णा ही सब दुखों का मूल है ? ', answer: ' महात्‍मा बुद्ध'},
  
{round: 'elimination', format: 'text', question: '58. किसने कहा कि वेदों की ओर लौटो ? ', answer: ' स्‍वामी दयानंद '},
  
{round: 'elimination', format: 'text', question: '59. वनवास जाते समय राम की आयु क्‍या थी ? ', answer: ' 27 वर्ष'},
  
{round: 'elimination', format: 'text', question: '60. सबसे बड़ा गुम्‍बद कहां स्थित है ? ', answer: ' गोल गुम्‍बद बीजापुर'},
  
{round: 'elimination', format: 'text', question: '61. प्राचीन राज्‍य अवंती की राजधानी का नाम क्‍या था ? ', answer: ' उज्‍जैन'},
  
{round: 'elimination', format: 'text', question: '62. सातवाहन कहां के शासक थे ? ', answer: ' आंध्रप्रदेश व महाराष्‍ट्र '},
  
{round: 'elimination', format: 'text', question: '63. कनिष्‍क के राजवंश का नाम क्‍या था ? ', answer: ' कुषाण वंश '},
  
{round: 'elimination', format: 'text', question: '64. गुलामवंश किसने स्‍थापित किया था ? ', answer: ' कुतुबुद्दीन ऐबक'},
  
{round: 'elimination', format: 'text', question: '65. चित्‍तौड़ का प्रथम शासक किसने कहते हैं ? ', answer: ' पद्मिनी द्वारा जौहर को'},
  
{round: 'elimination', format: 'text', question: '66. हिन्‍दुओं का जजिया कर किसने समाप्‍त किया था ? ', answer: ' अकबर '},
  
{round: 'elimination', format: 'text', question: '67. मेवाड़ के किस राणा ने इब्राहिम लोदी को हराया था ? ', answer: ' राणा सांगा'},
  
{round: 'elimination', format: 'text', question: '68. चित्‍तौड़ का विजय स्‍तंभ किसने बनवाया था ? ', answer: ' राणा कुम्‍भा '},
  
{round: 'elimination', format: 'text', question: '69. चांदबीबी किस नगर के शासक की पुत्री थी ? ', answer: ' अहमद नगर'},
  
{round: 'elimination', format: 'text', question: '70. अकबर के नवरत्‍नों में से ब्रहम्‍दास कौन था ? ', answer: ' बीरवल '},
  
{round: 'elimination', format: 'text', question: '71. राणा उदय सिंह की प्राण रक्षा किसने की थी ? ', answer: ' धायमों पन्‍ना ने'},
  
{round: 'elimination', format: 'text', question: '72. चित्‍तौड़ का तीसरा शाका किसने किया था ? ', answer: ' फूल कुंवर ने '},
  
{round: 'elimination', format: 'text', question: '73. उदय सिंह की मृत्‍यु के दिन कौन सा त्‍यौहार था  ? ', answer: ' होली'},
  
{round: 'elimination', format: 'text', question: '74. मेवाड़ में हिन्‍दू सुरताणा (हिन्‍दुओं का बादशाह) किसे कहा गया है ? ', answer: ' महाराणा कुम्‍भा '},
  
{round: 'elimination', format: 'text', question: '75. महाराणा प्रताप ने सर्वप्रथम किस स्‍थान को अपनी राजधानी बनाया था ? ', answer: ' कुम्‍भलगढ़ '},
  
{round: 'elimination', format: 'text', question: '76. मीराबाई के पति का नाम क्‍या था ? ', answer: ' भोजराम'},
  
{round: 'elimination', format: 'text', question: '77. राणा प्रताप किस सन में मेवाड़ के शासक बने थे ? ', answer: ' 1572 में '},
  
{round: 'elimination', format: 'text', question: '78. नागालैण्‍ड भारत का प्रदेश कब बना था ? ', answer: ' 1 दिसम्‍बर 1963 '},
  
{round: 'elimination', format: 'text', question: '79. जनजातीय नेता सीदू और कान्‍हू किस आन्‍दोलन से संबंधित है ? ', answer: ' संथाल आन्‍दोलन '},
  
{round: 'elimination', format: 'text', question: '80. सर्वेन्‍ट ऑफ इण्डिया सोसायटी के संस्‍थापक कौन थे ? ', answer: ' गोपाल कृष्‍ण गोखले'},
  
{round: 'elimination', format: 'text', question: '81. ‘एक मूसलमानों को भी फांसी चढ़ जाने दो’ कहने वाले क्रांतिकारी कौन थे ? ', answer: ' अशफाक उल्‍ला खां'},
  
{round: 'elimination', format: 'text', question: '82. स्‍वदेशी आन्‍दोलन की शुरुआत किस आन्‍दोलन से हुई थी ? ', answer: ' बंगाल विभाजन'},
  
{round: 'elimination', format: 'text', question: '83. अपनी सत्‍यवादिता के लिए प्रख्‍यात अयोध्‍या के राजा कौन थे ? ', answer: ' हरीशचन्‍द्र '},
  
{round: 'elimination', format: 'text', question: '84. राजा दशरथ के पिता कौन थे ? ', answer: ' अज'},
  
{round: 'elimination', format: 'text', question: '85. राजा नहु‍ष का पुत्र कौन था ? ', answer: ' ययाति'},
  
{round: 'elimination', format: 'text', question: '86. राजा दुष्‍यंत के पिता का नाम क्‍या था ? ', answer: ' रैम्‍य'},
  
{round: 'elimination', format: 'text', question: '87. राजा दिलीप के पिता का नाम क्‍या था ? ', answer: ' अंशुमन '},
  
{round: 'elimination', format: 'text', question: '88. चन्‍द्रगुप्‍त प्रथम ने किस सन् में अपना राज्‍य स्‍थापित किया था ? ', answer: ' 320 में '},
  
{round: 'elimination', format: 'text', question: '89. पुन: चालुक्‍य वंश किसने स्‍थापित किया था ? ', answer: ' विक्रमादित्‍य प्रथम'},
  
{round: 'elimination', format: 'text', question: '90. मिहिर भोज किस वंश के शासक थे ? ', answer: ' प्रतिहार वंश '},
  
{round: 'elimination', format: 'text', question: '91. सन् 750 के लगभग पाल साम्राज्‍य के संस्‍थापक ? ', answer: ' गोपाल'},
  
{round: 'elimination', format: 'text', question: '92. किस सन् में पृथ्‍वीराज चौहान ने तराइन में मोहम्‍मद गौरी को हराया था ?', answer: '1191 '},
  
{round: 'elimination', format: 'text', question: '93. राजा काल भोज किस नाम से प्रसिद्ध हैं ? ', answer: ' बप्‍पारावल'},
  
{round: 'elimination', format: 'text', question: '94. चित्‍तौड़ के किस शासक ने मुहम्‍मद तुगलक को तीन माह कैद रखा था ? ', answer: ' हम्‍मीर '},
  
{round: 'elimination', format: 'text', question: '95. मालवा के परमार वंश का प्रतापी राजा 1018 से 1060 तक शासन ? ', answer: ' भोज परम'},
  
{round: 'elimination', format: 'text', question: '96. वैष्‍णव संत जिन के काव्‍य पद अभंग नाम से प्रसिद्ध हैं ? ', answer: ' तुकाराम '},
  
{round: 'elimination', format: 'text', question: '97. 1971 युद्ध के समय रक्षामंत्री कौन थे ? ', answer: ' बाबू जगजीवन राम '},
  
{round: 'elimination', format: 'text', question: '98. भारतीय संविधान में पहला संशोधन कब पारित हुआ था ? ', answer: ' 1951 '},
  
{round: 'elimination', format: 'text', question: '99. जीवन बीमा का राष्‍ट्रीयकरण कब हुआ था ? ', answer: ' 1956 '},
 
{round: 'elimination', format: 'text', question: '100. इन्दिरा गांधी पहली बार कांग्रेस अध्‍यक्ष कब बनी थीं ? ', answer: ' 1960'},
    // { round: 'elimination', format: 'image',  question: 'image.jpg', answer: 'Sita' },
    // ... other questions ...
    //Passing Questions start from here
    { round: 'passing', format: 'text',  question: 'Q1 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q3 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q6 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q7 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q8 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q9 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q11 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q12 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q13 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q14 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q15 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q16 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q17 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q18 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q19 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q20 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q21 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q22 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q23 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q24 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q25 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    // { round: 'passing', format: 'audio', question: 'Allah-Duhai-Hai(PagalWorld).mp3', answer: 'Laxmi' },
    // { round: 'passing', format: 'video', question: 'video.mp4', answer: 'Parvati' },
    //patiance questions start from here
    { round: 'patianceA', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patianceB', format: 'text',  question: 'Q2 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patianceC', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patianceD', format: 'text',  question: 'Q4 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patianceE', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
>>>>>>> 59d1d46f8a236832e416a36c971030850f8d0221

  {
    round: "elimination",
    format: "text",
    question: "3. भारत का सबसे लम्‍बा समुद्र तट कौन सा है ? ",
    answer: " मरीना बीच, चेन्‍नई",
  },

  {
    round: "elimination",
    format: "text",
    question: "4. भारत का राष्‍ट्रीय ध्‍येय वाक्‍य क्‍या है ? ",
    answer: " सत्‍य मेव जयते ",
  },

  {
    round: "elimination",
    format: "text",
    question: "5. भारत के प्रथम शिक्षा मंत्री कौन थे ? ",
    answer: " अबुल कलाम आजाद ",
  },

  {
    round: "elimination",
    format: "text",
    question: "6. भारत के प्रथम उपराष्‍ट्रपति कौन थे ? ",
    answer: " डॉ. एस. राधाकृष्‍णन",
  },

  {
    round: "elimination",
    format: "text",
    question: "7. भारत के प्रथम विधिमंत्री कौन थे ? ",
    answer: " डॉ. अम्‍बेडकर ",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "8. नोबेल पुरस्‍कार प्रापत करने वाले प्रथम भारतीय वैज्ञानिक कौन थे ? ",
    answer: " सी. व्‍ही. रमन ",
  },

  {
    round: "elimination",
    format: "text",
    question: "9. भारतीय मूल की प्रथम महिला अंतरिक्षत यात्री कौन थी ? ",
    answer: " कल्‍पना चावला",
  },

  {
    round: "elimination",
    format: "text",
    question: "10. भारत में प्रथम महिला राज्‍यपाल कौन थी ? ",
    answer: " सरोजनी नायडू ",
  },

  {
    round: "elimination",
    format: "text",
    question: "11. भारत रत्‍न से सम्‍मानित प्रथम महिला कौन थी ? ",
    answer: " इंदिरा गांधी",
  },

  {
    round: "elimination",
    format: "text",
    question: "12. भारत रत्‍न से सम्‍मानित प्रथम विदेशी व्‍यक्ति कौन थे ? ",
    answer: " खान अब्‍दुल गफ्फार खान ",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "13. चुनाव में प्रथम बार इलेक्‍ट्रोनिक मशीन का प्रयोग कब हुआ था ? ",
    answer: " 1982 केरल उपचुनाव",
  },

  {
    round: "elimination",
    format: "text",
    question: "14. संस्‍कृत भाषा में बनी पहली फिल्‍म कौन सी थी ? ",
    answer: " शंकराचार्य",
  },

  {
    round: "elimination",
    format: "text",
    question: "15. भारत में प्रथम मेट्रो रेल कहां चलाई गई थी ? ",
    answer: " कोलकाता ",
  },

  {
    round: "elimination",
    format: "text",
    question: "16. सबसे अधिक व्‍यस्‍त पुल कौन सा है ? ",
    answer: " हावड़ा ब्रिज कोलकाता ",
  },

  {
    round: "elimination",
    format: "text",
    question: "17. भारत में सबसे ऊंचाई पर स्थित हवाई अड्डा कहां पर है ? ",
    answer: " लेह",
  },

  {
    round: "elimination",
    format: "text",
    question: "18. भारत का सबसे लम्‍बा बांध कौन सा है ? ",
    answer: " हीरा कुण्‍ड ",
  },

  {
    round: "elimination",
    format: "text",
    question: "19. भारत का सबसे बड़ा मठ कौन सा है ? ",
    answer: " तवांग (अरुणाचल प्रदेश)",
  },

  {
    round: "elimination",
    format: "text",
    question: "20. भारत में कौन सा प्रतिजैविक प्रथम बार प्रयोग हुआ ? ",
    answer: " पेनिसिलिन ",
  },

  {
    round: "elimination",
    format: "text",
    question: "21. भारत का सबसे पुराना ताप बिजली घर ? ",
    answer: " दुर्गापुर ",
  },

  {
    round: "elimination",
    format: "text",
    question: "22. भारत की प्रथम टायर कंपनी ? ",
    answer: " उनलप ",
  },

  {
    round: "elimination",
    format: "text",
    question: "23. मौर्य वंश का अंतिम सम्राट कौन था ? ",
    answer: " बृहद्रथ",
  },

  {
    round: "elimination",
    format: "text",
    question: "24. बुद्ध के उपदेशों का प्रथम संदर्भ ग्रंथ कौन सा है ? ",
    answer: " त्रिपिटक",
  },

  {
    round: "elimination",
    format: "text",
    question: "25. कवि कालीदास किस राजा के शासन काल में थे ? ",
    answer: " विक्रमादित्‍य ",
  },

  {
    round: "elimination",
    format: "text",
    question: "26. असम का सबसे पुराना नाम क्‍या है ? ",
    answer: " प्रागज्‍योतिष ",
  },

  {
    round: "elimination",
    format: "text",
    question: "27. पल्‍लव वंश का अं‍त किसने किया था ? ",
    answer: " चोल शासक अपराजित",
  },

  {
    round: "elimination",
    format: "text",
    question: "28. इब्‍नबतूता किसके शासन काल में आया था ? ",
    answer: " मुहम्‍मद बिन तुगलक",
  },

  {
    round: "elimination",
    format: "text",
    question: "29. विजय नगर साम्राज्‍य के प्रसिद्ध राजा का नाम ? ",
    answer: " कृष्‍ण देवराय ",
  },

  {
    round: "elimination",
    format: "text",
    question: "30. मेवाड़ के प्रथम राणा का नाम क्‍या था ? ",
    answer: " गुहिल ",
  },

  {
    round: "elimination",
    format: "text",
    question: "31. मीरा बाई के पिता का नाम क्‍या था ? ",
    answer: " रत्‍न सिंह ",
  },

  {
    round: "elimination",
    format: "text",
    question: "32. शिवाजी का राज्‍य रोहण का वर्ष कौन सा था ? ",
    answer: " 1674",
  },

  {
    round: "elimination",
    format: "text",
    question: "33. अंग्रेजी राज्‍य की पहली राजधानी कौन सी थी ? ",
    answer: " कोलकाता ",
  },

  {
    round: "elimination",
    format: "text",
    question: "34. डांडी मार्च किस आन्‍दोलन का हिस्‍सा था ? ",
    answer: " सविनय अवज्ञा",
  },

  {
    round: "elimination",
    format: "text",
    question: "35. आजाद हिन्‍द फौज मुकदमा किस स्‍थान पर चला था ? ",
    answer: " लाल किला दिल्‍ली",
  },

  {
    round: "elimination",
    format: "text",
    question: "36. संदेह स्‍वर्ग में जाने की इच्‍छा रखने वाला राजा कौन था ? ",
    answer: " त्रिशंकु ",
  },

  {
    round: "elimination",
    format: "text",
    question: "37. किस राजा के नाम पर धरती का नाम प्रथ्‍वी हुआ था ? ",
    answer: " पृथु ",
  },

  {
    round: "elimination",
    format: "text",
    question: "38. राजा जनक का वास्‍तविक नाम क्‍या था ? ",
    answer: " सीरध्‍वज ",
  },

  {
    round: "elimination",
    format: "text",
    question: "39. परीक्षित ने श्रीमद भागवत कथा किससे सुनी थी ? ",
    answer: " शुकदेव",
  },

  {
    round: "elimination",
    format: "text",
    question: "40. महात्‍मा बुद्ध के पिता का नाम क्‍या था ? ",
    answer: " शुद्धोधन ",
  },

  {
    round: "elimination",
    format: "text",
    question: "41. सम्राट अशोक व चंद्रगुप्‍त में क्‍या संबंध था ? ",
    answer: " दादा-पोते",
  },

  {
    round: "elimination",
    format: "text",
    question: "42. भारत का नेपोलियन कहा जाता था ? ",
    answer: " समुद्रगुप्‍त ",
  },

  {
    round: "elimination",
    format: "text",
    question: "43. तराइन का प्रथम युद्ध किसके बीच हुआ था ? ",
    answer: " पृथ्‍वीराज और मोहम्‍मद गौरी",
  },

  {
    round: "elimination",
    format: "text",
    question: "44. महाराणा प्रताप के पुत्र का नाम क्‍या था ? ",
    answer: " अमर सिंह ",
  },

  {
    round: "elimination",
    format: "text",
    question: "45. कबीरदास जी के गुरु का नाम क्‍या था ? ",
    answer: " रामानन्‍द ",
  },

  {
    round: "elimination",
    format: "text",
    question: "46. कम्‍ब के किस भाशा में रामायण लिखी ? ",
    answer: " तमिल ",
  },

  {
    round: "elimination",
    format: "text",
    question: "47. संविधान सभा के प्रथम अध्‍यक्ष कौन थे ? ",
    answer: " सच्चिदानन्‍द सिन्‍हा",
  },

  {
    round: "elimination",
    format: "text",
    question: "48. लाल बहादुर शास्‍त्री प्रधानमंत्री कब बने थे ? ",
    answer: " 1964 ",
  },

  {
    round: "elimination",
    format: "text",
    question: "49. गोवा का भारत में विलय कब हुआ था ? ",
    answer: " 9 दिसम्‍बर 1961 ",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "50. 81 वर्ष की आयु में भारत के प्रधानमंत्री बनने वाले नेता कौन थे ? ",
    answer: " मोरारजी देसाई ",
  },

  {
    round: "elimination",
    format: "text",
    question: "51. लता मंगेशकर को भारत रत्‍न किस सन में दिया गया था ? ",
    answer: " 2001",
  },

  {
    round: "elimination",
    format: "text",
    question: "52. राष्‍ट्रपति ज्ञानी जैलसिंह का कार्यकाल क‍ब से कब तक रहा ? ",
    answer: "87",
  },

  {
    round: "elimination",
    format: "text",
    question: "53. भारत में सर्वप्रथम स्‍थापित गोल्‍फ क्‍लब का नाम क्‍या था ? ",
    answer: " रॉयल गोल्‍फ क्‍लब ",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "54. भारत की तरफ से टेस्‍ट क्रिकेट में पहला विकेट किसने लिया था ? ",
    answer: " मोहम्‍मद नासिर ",
  },

  {
    round: "elimination",
    format: "text",
    question: "55. प्रथम भारतीय बैडमिन्‍टन खिलाड़ी जिसने विश्‍वकप जीता था ? ",
    answer: " प्रकाश पादुकोण ",
  },

  {
    round: "elimination",
    format: "text",
    question: "56. कुश्‍ती में पहला ओलम्पिक पदक जीतने वाला खिलाड़ी कौन था ? ",
    answer: " के. डी. जाधव",
  },

  {
    round: "elimination",
    format: "text",
    question: "57. किसने कहा कि तृष्‍णा ही सब दुखों का मूल है ? ",
    answer: " महात्‍मा बुद्ध",
  },

  {
    round: "elimination",
    format: "text",
    question: "58. किसने कहा कि वेदों की ओर लौटो ? ",
    answer: " स्‍वामी दयानंद ",
  },

  {
    round: "elimination",
    format: "text",
    question: "59. वनवास जाते समय राम की आयु क्‍या थी ? ",
    answer: " 27 वर्ष",
  },

  {
    round: "elimination",
    format: "text",
    question: "60. सबसे बड़ा गुम्‍बद कहां स्थित है ? ",
    answer: " गोल गुम्‍बद बीजापुर",
  },

  {
    round: "elimination",
    format: "text",
    question: "61. प्राचीन राज्‍य अवंती की राजधानी का नाम क्‍या था ? ",
    answer: " उज्‍जैन",
  },

  {
    round: "elimination",
    format: "text",
    question: "62. सातवाहन कहां के शासक थे ? ",
    answer: " आंध्रप्रदेश व महाराष्‍ट्र ",
  },

  {
    round: "elimination",
    format: "text",
    question: "63. कनिष्‍क के राजवंश का नाम क्‍या था ? ",
    answer: " कुषाण वंश ",
  },

  {
    round: "elimination",
    format: "text",
    question: "64. गुलामवंश किसने स्‍थापित किया था ? ",
    answer: " कुतुबुद्दीन ऐबक",
  },

  {
    round: "elimination",
    format: "text",
    question: "65. चित्‍तौड़ का प्रथम शासक किसने कहते हैं ? ",
    answer: " पद्मिनी द्वारा जौहर को",
  },

  {
    round: "elimination",
    format: "text",
    question: "66. हिन्‍दुओं का जजिया कर किसने समाप्‍त किया था ? ",
    answer: " अकबर ",
  },

  {
    round: "elimination",
    format: "text",
    question: "67. मेवाड़ के किस राणा ने इब्राहिम लोदी को हराया था ? ",
    answer: " राणा सांगा",
  },

  {
    round: "elimination",
    format: "text",
    question: "68. चित्‍तौड़ का विजय स्‍तंभ किसने बनवाया था ? ",
    answer: " राणा कुम्‍भा ",
  },

  {
    round: "elimination",
    format: "text",
    question: "69. चांदबीबी किस नगर के शासक की पुत्री थी ? ",
    answer: " अहमद नगर",
  },

  {
    round: "elimination",
    format: "text",
    question: "70. अकबर के नवरत्‍नों में से ब्रहम्‍दास कौन था ? ",
    answer: " बीरवल ",
  },

  {
    round: "elimination",
    format: "text",
    question: "71. राणा उदय सिंह की प्राण रक्षा किसने की थी ? ",
    answer: " धायमों पन्‍ना ने",
  },

  {
    round: "elimination",
    format: "text",
    question: "72. चित्‍तौड़ का तीसरा शाका किसने किया था ? ",
    answer: " फूल कुंवर ने ",
  },

  {
    round: "elimination",
    format: "text",
    question: "73. उदय सिंह की मृत्‍यु के दिन कौन सा त्‍यौहार था  ? ",
    answer: " होली",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "74. मेवाड़ में हिन्‍दू सुरताणा (हिन्‍दुओं का बादशाह) किसे कहा गया है ? ",
    answer: " महाराणा कुम्‍भा ",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "75. महाराणा प्रताप ने सर्वप्रथम किस स्‍थान को अपनी राजधानी बनाया था ? ",
    answer: " कुम्‍भलगढ़ ",
  },

  {
    round: "elimination",
    format: "text",
    question: "76. मीराबाई के पति का नाम क्‍या था ? ",
    answer: " भोजराम",
  },

  {
    round: "elimination",
    format: "text",
    question: "77. राणा प्रताप किस सन में मेवाड़ के शासक बने थे ? ",
    answer: " 1572 में ",
  },

  {
    round: "elimination",
    format: "text",
    question: "78. नागालैण्‍ड भारत का प्रदेश कब बना था ? ",
    answer: " 1 दिसम्‍बर 1963 ",
  },

  {
    round: "elimination",
    format: "text",
    question: "79. जनजातीय नेता सीदू और कान्‍हू किस आन्‍दोलन से संबंधित है ? ",
    answer: " संथाल आन्‍दोलन ",
  },

  {
    round: "elimination",
    format: "text",
    question: "80. सर्वेन्‍ट ऑफ इण्डिया सोसायटी के संस्‍थापक कौन थे ? ",
    answer: " गोपाल कृष्‍ण गोखले",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "81. ‘एक मूसलमानों को भी फांसी चढ़ जाने दो’ कहने वाले क्रांतिकारी कौन थे ? ",
    answer: " अशफाक उल्‍ला खां",
  },

  {
    round: "elimination",
    format: "text",
    question: "82. स्‍वदेशी आन्‍दोलन की शुरुआत किस आन्‍दोलन से हुई थी ? ",
    answer: " बंगाल विभाजन",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "83. अपनी सत्‍यवादिता के लिए प्रख्‍यात अयोध्‍या के राजा कौन थे ? ",
    answer: " हरीशचन्‍द्र ",
  },

  {
    round: "elimination",
    format: "text",
    question: "84. राजा दशरथ के पिता कौन थे ? ",
    answer: " अज",
  },

  {
    round: "elimination",
    format: "text",
    question: "85. राजा नहु‍ष का पुत्र कौन था ? ",
    answer: " ययाति",
  },

  {
    round: "elimination",
    format: "text",
    question: "86. राजा दुष्‍यंत के पिता का नाम क्‍या था ? ",
    answer: " रैम्‍य",
  },

  {
    round: "elimination",
    format: "text",
    question: "87. राजा दिलीप के पिता का नाम क्‍या था ? ",
    answer: " अंशुमन ",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "88. चन्‍द्रगुप्‍त प्रथम ने किस सन् में अपना राज्‍य स्‍थापित किया था ? ",
    answer: " 320 में ",
  },

  {
    round: "elimination",
    format: "text",
    question: "89. पुन: चालुक्‍य वंश किसने स्‍थापित किया था ? ",
    answer: " विक्रमादित्‍य प्रथम",
  },

  {
    round: "elimination",
    format: "text",
    question: "90. मिहिर भोज किस वंश के शासक थे ? ",
    answer: " प्रतिहार वंश ",
  },

  {
    round: "elimination",
    format: "text",
    question: "91. सन् 750 के लगभग पाल साम्राज्‍य के संस्‍थापक ? ",
    answer: " गोपाल",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "92. किस सन् में पृथ्‍वीराज चौहान ने तराइन में मोहम्‍मद गौरी को हराया था ?",
    answer: "1191 ",
  },

  {
    round: "elimination",
    format: "text",
    question: "93. राजा काल भोज किस नाम से प्रसिद्ध हैं ? ",
    answer: " बप्‍पारावल",
  },

  {
    round: "elimination",
    format: "text",
    question:
      "94. चित्‍तौड़ के किस शासक ने मुहम्‍मद तुगलक को तीन माह कैद रखा था ? ",
    answer: " हम्‍मीर ",
  },

  {
    round: "elimination",
    format: "text",
    question: "95. मालवा के परमार वंश का प्रतापी राजा 1018 से 1060 तक शासन ? ",
    answer: " भोज परम",
  },

  {
    round: "elimination",
    format: "text",
    question: "96. वैष्‍णव संत जिन के काव्‍य पद अभंग नाम से प्रसिद्ध हैं ? ",
    answer: " तुकाराम ",
  },

  {
    round: "elimination",
    format: "text",
    question: "97. 1971 युद्ध के समय रक्षामंत्री कौन थे ? ",
    answer: " बाबू जगजीवन राम ",
  },

  {
    round: "elimination",
    format: "text",
    question: "98. भारतीय संविधान में पहला संशोधन कब पारित हुआ था ? ",
    answer: " 1951 ",
  },

  {
    round: "elimination",
    format: "text",
    question: "99. जीवन बीमा का राष्‍ट्रीयकरण कब हुआ था ? ",
    answer: " 1956 ",
  },

  {
    round: "elimination",
    format: "text",
    question: "100. इन्दिरा गांधी पहली बार कांग्रेस अध्‍यक्ष कब बनी थीं ? ",
    answer: " 1960",
  },
  // { round: 'elimination', format: 'image',  question: 'image.jpg', answer: 'Sita' },
  // ... other questions ...
  //Passing Questions start from here
//   { round: "passing", format: "text", question: "Q1 Krishna", answer: "Radha" },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है",
//     answer: "राष्ट्रपति भवन",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q3 भारत के प्रथम वित्त मंत्री कौन थे",
//     answer: "आर के शनमुखम चेट्टी",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है",
//     answer: "सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q5 गुप्त साम्राज्य का विनाश किसने किया",
//     answer: "हूणों ने",
//   },
//   { round: "passing", format: "text", question: "Q6 Krishna", answer: "Radha" },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q7 भारत की सबसे बड़ी आवासीय इमारत कौन सी है",
//     answer: "राष्ट्रपति भवन",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q8 भारत के प्रथम वित्त मंत्री कौन थे",
//     answer: "आर के शनमुखम चेट्टी",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q9 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है",
//     answer: "सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q10 गुप्त साम्राज्य का विनाश किसने किया",
//     answer: "हूणों ने",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q11 Krishna",
//     answer: "Radha",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q12 भारत की सबसे बड़ी आवासीय इमारत कौन सी है",
//     answer: "राष्ट्रपति भवन",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q13 भारत के प्रथम वित्त मंत्री कौन थे",
//     answer: "आर के शनमुखम चेट्टी",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q14 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है",
//     answer: "सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q15 गुप्त साम्राज्य का विनाश किसने किया",
//     answer: "हूणों ने",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q16 Krishna",
//     answer: "Radha",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q17 भारत की सबसे बड़ी आवासीय इमारत कौन सी है",
//     answer: "राष्ट्रपति भवन",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q18 भारत के प्रथम वित्त मंत्री कौन थे",
//     answer: "आर के शनमुखम चेट्टी",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q19 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है",
//     answer: "सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q20 गुप्त साम्राज्य का विनाश किसने किया",
//     answer: "हूणों ने",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q21 Krishna",
//     answer: "Radha",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q22 भारत की सबसे बड़ी आवासीय इमारत कौन सी है",
//     answer: "राष्ट्रपति भवन",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q23 भारत के प्रथम वित्त मंत्री कौन थे",
//     answer: "आर के शनमुखम चेट्टी",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q24 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है",
//     answer: "सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड",
//   },
//   {
//     round: "passing",
//     format: "text",
//     question: "Q25 गुप्त साम्राज्य का विनाश किसने किया",
//     answer: "हूणों ने",
//   },

{
    round: "passing",
    format: "text",
    question: "भारतीय मूल की प्रथम महिला अंतरिक्ष यात्री ",
    answer: " कल्‍पना चावला ",
  },
  {
    round: "passing",
    format: "text",
    question: "सबसे बड़ा प्रदर्शन स्‍थल  ? ",
    answer: " प्रगति मैदान दिल्‍ली ",
  },
  {
    round: "passing",
    format: "text",
    question: "मोहद जोदड़ो कहां स्थित है ? ",
    answer: " लरकाना (सिंध पाकिस्‍तान) ",
  },
  {
    round: "passing",
    format: "text",
    question: "वन्‍दे मातरम् व कर्मयोगी अखबारों का प्रकाशन किसने किया ? ",
    answer: " महर्षि अरविन्‍द घोष ",
  },
  {
    round: "passing",
    format: "text",
    question: "भारत छोड़ो आन्‍दोलन कहां से प्रारंभ हुआ ? ",
    answer: " बम्‍बई ",
  },
  {
    round: "passing",
    format: "text",
    question: "महाराणा प्रताप के पुत्र का नाम जिन्‍होंने मुगलों से संधी की ? ",
    answer: " अमर सिंह ",
  },
  {
    round: "passing",
    format: "text",
    question:
      "14 वीं शताब्‍दी में रामानंद के शिष्‍य निर्गुण ब्रम्‍ह के उपासक ? ",
    answer: " कबीर ",
  },
  {
    round: "passing",
    format: "text",
    question: "भारतीय संविधान के कुल कितने भाग हैं ? ",
    answer: " 22 ",
  },
  {
    round: "passing",
    format: "text",
    question: "पूर्व का द्वार किस प्रदेश को कहा जाता है ? ",
    answer: " असम ",
  },
  {
    round: "passing",
    format: "text",
    question: "मिजोरम में सबसे ऊंची चोटी का क्‍या नाम है ? ",
    answer: " फानपुई (नीला पर्वत) ",
  },
  {
    round: "passing",
    format: "text",
    question: "भारत का मानक समय ग्रीनविच समय से कितना आगे है ? ",
    answer: " 5 घण्‍टे 30 मिनट ",
  },
  {
    round: "passing",
    format: "text",
    question: "सबसे अधिक जनजाती किस राज्‍य में है ? ",
    answer: " मध्‍यप्रदेश ",
  },
  {
    round: "passing",
    format: "text",
    question: "उज्‍जैन किस नदी के तट पर है ? ",
    answer: " शिप्रा ",
  },
  {
    round: "passing",
    format: "text",
    question: "सूरत किस नदी के किनारे स्थित है ? ",
    answer: " ताप्‍ती ",
  },
  {
    round: "passing",
    format: "text",
    question: "एल्‍यूमीनियम अयस्‍क बॉक्‍साइट का उत्‍पादक राज्‍य ? ",
    answer: " आंध्रप्रदेश, ओड़ीसा ",
  },
  {
    round: "passing",
    format: "text",
    question: "भाषा एटोमिक रिसर्च सेंटर कहां स्थित है ? ",
    answer: " ट्राम्‍बे (महाराष्‍ट्र) ",
  },
  {
    round: "passing",
    format: "text",
    question: "फरक्‍का परियोजना किस नदी पर संचालित है ? ",
    answer: " गंगा नदी ",
  },
  {
    round: "passing",
    format: "text",
    question: "माला प्रभा परियोजना किस प्रदेश में संचालित है ? ",
    answer: " कर्नाटक ",
  },
  {
    round: "passing",
    format: "text",
    question: "भारत में संपूर्ण स्‍वदेशी बैंक कब स्‍थापित हुआ ? ",
    answer: " 1894 ",
  },
  {
    round: "passing",
    format: "text",
    question: "कौन सी पंचवर्षीय योजना में विकास दर सर्वाधिक रही ? ",
    answer: " 11 वीं ",
  },
  {
    round: "passing",
    format: "text",
    question:
      "भारत में 1 जुलाई 2017 से प्रारंभ किए जाने वाले अप्रत्‍यक्ष कर का नाम ? ",
    answer: " जी. एस. टी. ",
  },
  {
    round: "passing",
    format: "text",
    question: "नारियल उत्‍पादन में भारत का कौन सा स्‍थान है ? ",
    answer: " प्रथम ",
  },
  {
    round: "passing",
    format: "text",
    question: "शल्‍व सूत्र के प्रारंभिक रचियता कौन थे ? ",
    answer: " बौद्धायन ",
  },
  {
    round: "passing",
    format: "text",
    question:
      "धरती के गोल होने के व घूमने की बात किस भारतीय वैज्ञानिक ने की ? ",
    answer: " आर्यभट्ट ",
  },
  {
    round: "passing",
    format: "text",
    question: "रोहिणी RS ",
    answer: " 1 कब प्रक्षिपित किया गया ? ",
    answer: " 18 जुलाई 1981 ",
  },
  {
    round: "passing",
    format: "text",
    question: "भगवान विष्‍णु के कुल कितने अवतार माने गए हैं ? ",
    answer: " 24 ",
  },
  {
    round: "passing",
    format: "text",
    question: "सूर्य से उत्‍पन्‍न देवताओं के वैद्य कौन हैं ? ",
    answer: " अश्विनी कुमार ",
  },
  {
    round: "passing",
    format: "text",
    question:
      "नवरात्रों में छठवें दिन किस माता के किस रूप की पूजा की जाती है ? ",
    answer: " कात्‍यायनी ",
  },
  {
    round: "passing",
    format: "text",
    question: "शंकराचार्य का स्‍वर्गवास किस आयु में हुआ ? ",
    answer: " 32 वर्ष ",
  },
  {
    round: "passing",
    format: "text",
    question: "अकाल तख्‍त का निर्माण किसने करवाया था ? ",
    answer: " गुरु गोविंद ",
  },
  {
    round: "passing",
    format: "text",
    question: "सगर के पुत्रों का उद्धार कैसे हुआ ? ",
    answer: " स्‍वर्ग से गंगा लाकर उसके जल से ",
  },
  {
    round: "passing",
    format: "text",
    question: "कैकेमी के पिता का नाम ? ",
    answer: " अश्‍वपति ",
  },
  {
    round: "passing",
    format: "text",
    question: "सुग्रीव व राम की भेंट सर्वप्रथम कहां हुई ? ",
    answer: " ऋष्‍यमूक पर्वत ",
  },
  {
    round: "passing",
    format: "text",
    question: "कुबेर के पुत्र का नाम ? ",
    answer: " नल कुबेर ",
  },
  {
    round: "passing",
    format: "text",
    question: "विदुर नीति का वर्णन किस पर्व में है ? ",
    answer: " उद्योग पर्व में ",
  },
  {
    round: "passing",
    format: "text",
    question: "भगवत गीता किस ग्रन्‍थ का भाग है ? ",
    answer: " महाभारत ",
  },
  // { round: 'passing', format: 'audio', question: 'Allah-Duhai-Hai(PagalWorld).mp3', answer: 'Laxmi' },
  // { round: 'passing', format: 'video', question: 'video.mp4', answer: 'Parvati' },
  //patiance questions start from here
  {
    round: "patianceA",
    format: "text",
    question: "1. महात्‍मा बुद्ध ने निर्वाण कहां प्राप्‍त किया था ? ",
    answer: "कुशीनगर",
  },
  {
    round: "patianceB",
    format: "text",
    question: "2. त्रिपिटक किस धर्म से संबंधित ग्रन्‍थ है ? ",
    answer: "बौद्ध धर्म",
  },
  {
    round: "patianceC",
    format: "text",
    question: "3. महात्‍मा बुद्ध की माता का नाम क्‍या था ? ",
    answer: "महामाया",
  },
  {
    round: "patianceD",
    format: "text",
    question:
      "4. बद्रीनाथ की  मूर्तियों को सर्दी के मौसम में कहां लाया जाता है ? ",
    answer: "जोशीमठ",
  },
  {
    round: "patianceE",
    format: "text",
    question: "5. महावीर स्‍वामी को किस नदी के तट पर ज्ञान प्राप्‍त हुआ था ? ",
    answer: "ऋजुपालिका",
  },
  {
    round: "patianceF",
    format: "text",
    question: "6. माघवाचार्य का जन्‍म कहां हुआ था ?",
    answer: "उड़ूपी में",
  },

  //sanskriti questions start from here
  {
    round: "khelA",
    format: "text",
    question:
      "1. निशाने बाजी में ओलम्पिक में भारत ने अब तक कुल कितने पदक जीते हैा ?",
    answer: "1 स्‍वर्ण, 2 रजत, 1 कांस्‍य",
  },
  {
    round: "khelB",
    format: "text",
    question: "2. लिएंडर पेस ने किस ओलम्पिक में भारत के लिए पदक जीता ?",
    answer: "1996",
  },
  {
    round: "khelC",
    format: "text",
    question:
      "3. ओलम्पिक में बेडमिंटन में रजत पदक प्राप्‍त करने वाली पहली महिला खिलाड़ी ?",
    answer: "पी. व्‍ही. सिंधु",
  },
  {
    round: "khelD",
    format: "text",
    question:
      "4. कपिल देव ने टेस्‍ट क्रिकेट में कितने विकेट प्राप्‍त किए हैं ?",
    answer: "434",
  },
  {
    round: "khelE",
    format: "text",
    question: "5. वनडे क्रिकेट में सर्वप्रथम दोहरा शतक लगाने वाला खिलाड़ी ?",
    answer: "सचिन तेंदुलकर",
  },
  {
    round: "khelF",
    format: "text",
    question: "6. 2021 ओलम्पिक में मीरा बाई चानू ने किस खेल में रजत पदक जीता ?",
    answer: "भारत्‍तोलन",
  },
  //Rajniti Questions start from here
  {
    round: "rajnitiiA",
    format: "text",
    question:
      "1. 1939 में गांधी जी से मतभेद के कारण किसने अखिल भारतीय कांग्रेस के अध्‍यक्ष पद से त्‍यागपत्र दे दिया था",
    answer: "सुभाष चंद्र बोस",
  },
  {
    round: "rajnitiiB",
    format: "text",
    question:
      "2. किस घटना से दुखी होकर गांधी जी ने केसरे-ए-हिन्‍द की उपाधि ठुकरा दी थी",
    answer: "जलियांवाला बाग हत्‍याकाण्‍ड",
  },
  {
    round: "rajnitiiC",
    format: "text",
    question:
      "3. संविधान में गणराज्‍य अवधारणा किस देश के संविधान से प्रेरित है",
    answer: "फ्रांस",
  },
  {
    round: "rajnitiiD",
    format: "text",
    question: "4. 1977 के चुनाव में इन्दिरा गांधी को किसने पराजित किया था",
    answer: "राजनारायण",
  },
  {
    round: "rajnitiiE",
    format: "text",
    question: "5. प्रथम राज्‍यसभा का गठन किस तारीख को किया गया था",
    answer: "3 अप्रैल 1952",
  },
  {
    round: "rajnitiiF",
    format: "text",
    question: "6. भारतीय कम्‍युनिष्‍ट पार्टी का विभाजन कब हुआ था",
    answer: "1964",
  },

  //Images Round start from here
  {
    round: "pictureA",
    format: "image",
    question: "images/1.jpeg",
    answer: "वीर बैरागी बंदा बहादुर",
  },
  {
    round: "pictureB",
    format: "image",
    question: "images/2.jpeg",
    answer: "अल इदरीसी",
  },
  {
    round: "pictureC",
    format: "image",
    question: "images/4.jpeg",
    answer: "सचिन तेंदुलकर",
  },
  {
    round: "pictureD",
    format: "image",
    question: "images/5.jpeg",
    answer: "कोणार्क",
  },
  {
    round: "pictureE",
    format: "image",
    question: "images/6.jpeg",
    answer: "डॉ होमी जहांगीर भाभा",
  },
  {
    round: "pictureF",
    format: "image",
    question: "images/7.jpeg",
    answer: "डॉ विक्रम साराभाई",
  },

  //Audio Round Start from here
  {
    round: "audioA",
    format: "audio",
    question: "audios/1.mpeg",
    answer: "ए.पी.जे.अब्दुल कलाम",
  },
  {
    round: "audioB",
    format: "audio",
    question: "audios/2.mp3",
    answer: "Radha",
  },
  {
    round: "audioC",
    format: "audio",
    question: "audios/3.mp3",
    answer: "Radha",
  },
  {
    round: "audioD",
    format: "audio",
    question: "audios/1.mp3",
    answer: "Radha",
  },
  {
    round: "audioE",
    format: "audio",
    question: "audios/2.mp3",
    answer: "Radha",
  },

  //Video Round starts from here
  {
    round: "videoA",
    format: "video",
    question: "videos/1.mp4",
    answer: "टीना डाबी",
  },
  {
    round: "videoB",
    format: "video",
    question: "videos/3.mp4",
    answer: "राजा हरिश्चंद्र",
  },
  {
    round: "videoC",
    format: "video",
    question: "videos/2.mp4",
    answer: "उस्ताद बिस्मिल्लाह खान",
  },
  {
    round: "videoD",
    format: "video",
    question: "videos/4.mp4",
    answer: "लाल बहादुर शास्त्री",
  },
  {
    round: "videoE",
    format: "video",
    question: "videos/5.mp4",
    answer: "Radha",
  },
  {
    round: "videoF",
    format: "video",
    question: "videos/1.mp4",
    answer: "Radha",
  },
  //Fastest fastest from here
  {
    round: "fastest",
    format: "text",
    question: "भारत का केन्‍द्र बिन्‍दु ?",
    answer: "एम. पी. के कटनी जिले का करौदी गांव",
  },
  {
    round: "fastest",
    format: "text",
    question: "भारत की सबसे लम्‍बी सड़क सुरंग ? ",
    answer: " अटल सुरंग ",
  },
  {
    round: "fastest",
    format: "text",
    question: "एवरेस्‍ट पर चढ़ने वाली प्रथम भारतीय महिला ? ",
    answer: " बछेन्‍द्री पाल ",
  },
  {
    round: "fastest",
    format: "text",
    question: "मेग्‍सेसे पुरस्‍कार प्राप्‍त प्रथम भारतीय कौन थे ? ",
    answer: " विनाबा भावे ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सिक्‍खों के दसवें गुरु का नाम क्‍या था  ? ",
    answer: " गुरु गोविंद सिंह ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सबसे बड़ा प्रायवेट अस्‍पताल का नाम बताओ ? ",
    answer: " अमृता अस्‍पताल ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सबसे ऊंचा दरवाजा का नाम क्‍या है ? ",
    answer: " बुलंद दरवाजा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सिन्‍धु घाटी सभ्‍यता की खोज कब हुई थी ? ",
    answer: " 1922-23 ",
  },
  {
    round: "fastest",
    format: "text",
    question: "मौर्य वंश के राज्‍य को किसने समाप्‍त किया था ? ",
    answer: " पुष्‍यमित्र शुंग ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सैयद वंश के संस्‍थापक का नाम ? ",
    answer: " खिज्र खां ",
  },
  {
    round: "fastest",
    format: "text",
    question: "कौन सी सामाजिक ",
    answer: " धार्मिक आंदोलन ने नारा दिया भारत भारतियों के लिए ? ",
    answer: " आर्य समाज ",
  },
  {
    round: "fastest",
    format: "text",
    question: "उत्‍तानपाद एवं ध्रुव के वंशज ? ",
    answer: " राजा पृथु ",
  },
  {
    round: "fastest",
    format: "text",
    question: "चंद्रगुप्‍त मौर्य का पुत्र कौन था ? ",
    answer: " बिन्‍दुसार ",
  },
  {
    round: "fastest",
    format: "text",
    question: "जैन धर्म के 24 वें व अंतिम तीर्थकर कौन थे ? ",
    answer: " महावीर स्‍वामी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "81 वर्ष की आयु में भारत के प्रधानमंत्री बनने वाले राजनेता ? ",
    answer: " मोरारजी देसाई ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सर्वाधिक समय तक लोक सभा स्‍पीकर रहने वाले ? ",
    answer: " बलराम जाखड़ ",
  },
  {
    round: "fastest",
    format: "text",
    question: "प्रथम महिला मेयर कौन थी ? ",
    answer: " सुलोचना मोदी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सबसे कम आयु के मेयर कौन थे ? ",
    answer: " संजीव नायक ",
  },
  {
    round: "fastest",
    format: "text",
    question: "किसी राज्‍य में राज्‍यपाल की नियुक्ति कौन करता है ? ",
    answer: " राष्‍ट्रपति ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सबसे अधिक वर्षा वाला स्‍थान ? ",
    answer: " मानिसराम ",
  },
  {
    round: "fastest",
    format: "text",
    question: "किस भारतीय प्रदेश में सबसे कम वन स्थित है ? ",
    answer: " हरियाणा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सिन्‍धु नदी की सहायक नदी जो केवल भारत में बहती है ? ",
    answer: " व्‍यास ",
  },
  {
    round: "fastest",
    format: "text",
    question: "दमन और दीव को कौन विभाजित करता है ? ",
    answer: " खम्‍भात की खाड़ी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "लूनी नदी कहां समाप्‍त होती है ? ",
    answer: " कच्‍छ के रण में ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सड़क विस्‍तार में भारत का कौन सा स्‍थान है ? ",
    answer: " दूसरा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "लक्षद्वीप समूह का सबसे छोटा द्वीप कौन सा है ? ",
    answer: " बितरा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "गुवाहाटी किस नदी के किनारे स्थित है ? ",
    answer: " ब्रहम्‍पुत्र ",
  },
  {
    round: "fastest",
    format: "text",
    question: "कटक किस नदी के किनारे स्थित है ? ",
    answer: " महानदी ",
  },
  {
    round: "fastest",
    format: "text",
    question:
      "झारखण्‍ड, ओड़ीसा, नागालैण्‍ड में कौन सा मुख्‍य खनिज पाया जाता है ? ",
    answer: " कोबाल्‍ट ",
  },
  {
    round: "fastest",
    format: "text",
    question: "किस खनिज उत्‍पादन में भारत का प्रथम स्‍थान है ? ",
    answer: " अभ्रक ",
  },
  {
    round: "fastest",
    format: "text",
    question: "फॉरेस्‍ट रिसर्च इंस्‍टीट्यूट कहां स्थित है ? ",
    answer: " देहरादून ",
  },
  {
    round: "fastest",
    format: "text",
    question: "नेशनल इंस्‍टीट्यूट ऑफ स्‍पोर्ट्स कहां है ? ",
    answer: " पटियाला ",
  },
  {
    round: "fastest",
    format: "text",
    question: "नेशनल केमिकल लेबोरेटरी कहां है ? ",
    answer: " पुणे ",
  },
  {
    round: "fastest",
    format: "text",
    question: "इंग्लिश एण्‍ड फारेन लैंग्‍वेज यूनिवर्सिटी कहां है ? ",
    answer: " हैदराबाद ",
  },
  {
    round: "fastest",
    format: "text",
    question: "गिलगित किस क्षेत्र से संबंधित है ? ",
    answer: " लद्दाख ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भद्रा नदी परियोजना किस राज्‍य से संबंधित है ? ",
    answer: " कर्नाटक ",
  },
  {
    round: "fastest",
    format: "text",
    question: "हसदेव बांगो परियोजना किस प्रदेश से संबंधित है ? ",
    answer: " मध्‍यप्रदेश ",
  },
  {
    round: "fastest",
    format: "text",
    question: "पंजाब में व्‍यास नदी पर जलविद्युत परियोजना किस बांध पर ह ? ",
    answer: " पोंगाबांध ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सलाल परियोजना किस राज्‍य से संबंधित है ? ",
    answer: " जम्‍मू-कश्‍मीर ",
  },
  {
    round: "fastest",
    format: "text",
    question: "टिहरी बांध किस नदी पर स्थित है ? ",
    answer: " भागीरथी नदी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "मध्‍यप्रदेश में चीनी मिट्टी उद्योग किस शहर में है ? ",
    answer: " ग्‍वालियर ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भारतीय नियोजित अर्थव्‍यवस्‍था का आधार क्‍या है ? ",
    answer: " समाजवाद ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भारत का केन्‍द्रीय बैंक कौनसा है ? ",
    answer: " भारतीय रिजर्व बैंक ",
  },
  {
    round: "fastest",
    format: "text",
    question:
      "केन्‍द्र सरकार को किस कर से सर्वाधिक राजस्‍व प्राप्‍त होता है ? ",
    answer: " निगम कर ",
  },
  {
    round: "fastest",
    format: "text",
    question: "आयुष्‍मान भारत योजना में कितनी राशि का बीमा होता है ? ",
    answer: " 5 लाख ",
  },
  {
    round: "fastest",
    format: "text",
    question: "क्षेत्रिय ग्रामीण बैंको की स्‍थापना किस वर्ष की गई थी ? ",
    answer: " 1975 ",
  },
  {
    round: "fastest",
    format: "text",
    question: "विश्‍व की सबसे प्राचीन चिकित्‍सा प्रणाली कौन सी है ? ",
    answer: " आुयर्वेद ",
  },
  {
    round: "fastest",
    format: "text",
    question: "आर्यभट्ट की अंतरिक्ष विज्ञज्ञन पद्धति का नाम क्‍या है ? ",
    answer: " औदआयका पद्धति ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भारतीय पुनर्जागरण संस्‍थान कहां स्थित है ? ",
    answer: " देहरादून ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भारत के प्रथम परमाणु संयंत्र का नाम ? ",
    answer: " अप्‍सरा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "INSET-30 के प्रक्षेपणयान का नाम ? ",
    answer: " एरियन-5 ",
  },
  {
    round: "fastest",
    format: "text",
    question: "नवरात्रा में आठवे दिन दुर्गा के किस रूप की पूजा की जाती है ? ",
    answer: " महागौरी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "श्रीमदभागवत में कुल कितने अध्‍याय हैं ? ",
    answer: " 335 ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सिक्‍खों के प्रथम गुरु कौन थे ? ",
    answer: " श्री गुरुनानक ",
  },
  {
    round: "fastest",
    format: "text",
    question: "गुरु गोविंद सिंह जी का जन्‍म स्‍थान कहां है ? ",
    answer: " पटना साहिब ",
  },
  {
    round: "fastest",
    format: "text",
    question: "गीता में धर्म क्षेत्र किस स्‍थान को कहते हैं ? ",
    answer: " कुरुक्षेत्र ",
  },
  {
    round: "fastest",
    format: "text",
    question: "नरसी मेहता का जन्‍म कहां हुआ था ? ",
    answer: " जूनागढ़ ",
  },
  {
    round: "fastest",
    format: "text",
    question: "रामायण का दूसरा नाम ? ",
    answer: " दशानन वध ",
  },
  {
    round: "fastest",
    format: "text",
    question: "जाहन्‍वी किस नदी का नाम है ? ",
    answer: " गंगा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "परशुराम जी के माता-पिता का नाम ? ",
    answer: " रेणुका-जमदग्नि ",
  },
  {
    round: "fastest",
    format: "text",
    question: "महर्षि गौतम की पत्‍नी का नाम ? ",
    answer: " अहिल्‍या ",
  },
  {
    round: "fastest",
    format: "text",
    question: "चित्रकूट के बाद राम किस वन गए ? ",
    answer: " दण्‍डकारण्‍य ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सुग्रीव की पत्‍नी का नाम क्‍या था ? ",
    answer: " रूमा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "समुद्र पर वानरों द्वारा बने पुल को क्‍या नाम दिया ? ",
    answer: " नलसेतु ",
  },
  {
    round: "fastest",
    format: "text",
    question: "रावण की लंका किस पर्वत पर थी ? ",
    answer: " त्रिकुट पर्वत ",
  },
  {
    round: "fastest",
    format: "text",
    question: "रामलक्ष्‍मण को नाग पाश से किसने मुक्‍त किया ? ",
    answer: " गरुड़़ ",
  },
  {
    round: "fastest",
    format: "text",
    question: "राज दशरथ की किस रानी के दो पुत्र थे ? ",
    answer: " सुमित्रा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भरत के मामा का नाम ? ",
    answer: " युधाजित ",
  },
  {
    round: "fastest",
    format: "text",
    question: "निषादराज गुह कहां के राजा थे ? ",
    answer: " श्रृंगवेरपुर ",
  },
  {
    round: "fastest",
    format: "text",
    question: "इन्‍द्र के पुत्र का नाम क्‍या था ? ",
    answer: " जयन्‍त ",
  },
  {
    round: "fastest",
    format: "text",
    question: "कौन ऋषि जन्‍मेजय को महाभारत कथा सुनाते हैं ? ",
    answer: " वैशम्‍पायन ",
  },
  {
    round: "fastest",
    format: "text",
    question: "कीचक वध किस पर्व में है ? ",
    answer: " विराट पर्व में ",
  },
  {
    round: "fastest",
    format: "text",
    question: "राजा नल किस प्रदेश के राजा थे ? ",
    answer: " निषध देश के ",
  },
  {
    round: "fastest",
    format: "text",
    question: "माद्री किस प्रदेश की राजकुमारी थी ? ",
    answer: " मद्रदेश की ",
  },
  {
    round: "fastest",
    format: "text",
    question: "अभिमन्‍यु की माता का नाम ? ",
    answer: " सुभद्रा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "वनवास के समय पाण्‍डवों को अक्षय पात्र किसने दिया ? ",
    answer: " सूर्यदेव ",
  },
  {
    round: "fastest",
    format: "text",
    question: "राजसूय यक्ष में भोजन व्‍यवस्‍था की देखरेख किसने की ? ",
    answer: " दु:शासन ",
  },
  {
    round: "fastest",
    format: "text",
    question: "जरासंध का वध किसने किया ? ",
    answer: " भीम ने ",
  },
  {
    round: "fastest",
    format: "text",
    question: "शल्‍य का वध किसके हाथों हुआ ? ",
    answer: " युधिष्ठिर ",
  },
  {
    round: "fastest",
    format: "text",
    question: "कण के बचपन का नाम ? ",
    answer: " वसुषेण ",
  },
  {
    round: "fastest",
    format: "text",
    question: "शिशुपाल किस प्रदेश का राजा था ? ",
    answer: " चेदिराज्‍य का ",
  },
  {
    round: "fastest",
    format: "text",
    question: "वैष्‍णोदेवी श्री मंदिर किस प्रदेश में है ? ",
    answer: " जम्‍मू कश्‍मीर ",
  },
  {
    round: "fastest",
    format: "text",
    question: "रमन महर्षिका आश्रम कहां स्थित है ? ",
    answer: " तिरुवानामले ",
  },
  {
    round: "fastest",
    format: "text",
    question: "नवग्रह मंदिर किस पहाड़ी पर स्थित है ? ",
    answer: " चित्रकला ",
  },
  {
    round: "fastest",
    format: "text",
    question: "खासी जनजाती में किस पक्षी का अत्‍यधिक महत्‍व है ? ",
    answer: " मुर्गा ",
  },
  {
    round: "fastest",
    format: "text",
    question: "कौनसी नृत्‍यशैली राज दरबार में विकसित हुई ? ",
    answer: " कत्‍थक ",
  },
  {
    round: "fastest",
    format: "text",
    question: "सिद्ध किस प्रदेश का नृत्‍य है ? ",
    answer: " पंजाब ",
  },
  {
    round: "fastest",
    format: "text",
    question: "अन्‍नपूर्णा देवी किस वाद्ययंत्र से जुड़ी है ? ",
    answer: " सुरबहार ",
  },
  {
    round: "fastest",
    format: "text",
    question: "राग तोड़ी व ललित दिन के किस प्रहार के राग है ? ",
    answer: " प्रात:कालीन ",
  },
  {
    round: "fastest",
    format: "text",
    question: "मजीरा किस प्रकार का वाद्ययंत्र है ? ",
    answer: " घन ",
  },
  {
    round: "fastest",
    format: "text",
    question: "श्री कृष्‍ण के गुरु का नाम क्‍या था  ? ",
    answer: " संदीपन मुनि ",
  },
  {
    round: "fastest",
    format: "text",
    question: "तुलसीदास के गुरु का नाम क्‍या था ? ",
    answer: " नरहरि दास ",
  },
  {
    round: "fastest",
    format: "text",
    question: "पुस्‍तक अश्‍वघोष किसके चरित्र पर आधारित है ? ",
    answer: " ध्रुव ",
  },
  {
    round: "fastest",
    format: "text",
    question: "बादलों के घेरे, तीन पहाड़ पुस्‍तकों के ले‍खक ? ",
    answer: " कृष्‍ण सोबती ",
  },
  {
    round: "fastest",
    format: "text",
    question: "पृथ्‍वीराज रासो के लेखक कौन थे? ",
    answer: " चंदबरदाई ",
  },
  {
    round: "fastest",
    format: "text",
    question: "किसने कहा मन चंगा तो कठौती में गंगा ? ",
    answer: " रैदास ",
  },
  {
    round: "fastest",
    format: "text",
    question: "भय की भांति साहस भी संक्रामक होता है, किसने कहा था ? ",
    answer: " प्रेमचंद ",
  },
  {
    round: "fastest",
    format: "text",
    question: "मेरी अहिंसा कायरता नहीं सिखाती, किसने कहा था ? ",
    answer: " महात्‍मा गांधी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "दया करना सबसे बड़ा धर्म है ? ",
    answer: " बाल्मिकी ",
  },
  {
    round: "fastest",
    format: "text",
    question: "ओलम्पिक हॉकी में भारत ने कितने पदक प्राप्‍त किए ? ",
    answer: " 12 ",
  },
];

let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let currentRoundId = sidebarRounds[0];

// Show questions for the selected round
function showRoundQuestions(roundId) {
  currentQuestionIndex = 0;
  currentRoundQuestions = questions.filter((q) => q.round === roundId);
  if (currentRoundQuestions.length > 0) {
    showQuestion(currentQuestionIndex);
    showAnsBtn.style.display = "block";
    nextQuestionBtn.style.display = "block";
  } else {
    questionText.textContent = "This round has been completed.";
    answerText.textContent = "";
    showAnsBtn.style.display = "none";
    nextQuestionBtn.style.display = "none";
  }
}

// Show a specific question and its answer
function showQuestion(index) {
  const currentQuestion = currentRoundQuestions[index];
  questionText.textContent = currentQuestion.question;

  if (currentQuestion.format === "image") {
    questionText.innerHTML = `<img src="${currentQuestion.question}" alt="Question Image">`;
  } else if (currentQuestion.format === "audio") {
    questionText.innerHTML = `<audio controls><source src="${currentQuestion.question}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
  } else if (currentQuestion.format === "video") {
    questionText.innerHTML = `<video controls><source src="${currentQuestion.question}" type="video/mp4">Your browser does not support the video element.</video>`;
  }

  answerText.textContent = currentQuestion.answer;
  answerText.classList.add("hidden");
  showAnsBtn.textContent = "Show Answer";
}

// Toggle answer visibility
function showAnswer() {
  answerText.classList.toggle("hidden");
  showAnsBtn.textContent = answerText.classList.contains("hidden")
    ? "Show Answer"
    : "Hide Answer";
}

// Event listener for showing answer
showAnsBtn.addEventListener("click", showAnswer);

// Event listener for moving to the next question
nextQuestionBtn.addEventListener("click", () => {
  if (currentQuestionIndex < currentRoundQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    questionText.textContent = "This round has been completed .";
    answerText.textContent = "";
    showAnsBtn.textContent = "Show Answer";
    answerText.classList.add("hidden");
  }
});

// Event listener for round selection in the sidebar
roundList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "A") {
    const roundId = target.getAttribute("href").substring(1);
    if (sidebarRounds.includes(roundId)) {
      currentRoundId = roundId;
      showRoundQuestions(currentRoundId);
      event.preventDefault();
    }
  }
});

// Initialize default round and questions
showRoundQuestions(currentRoundId);

document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});
// Show the modal when the copyright symbol is clicked
copyrightSymbol.addEventListener("click", function () {
  // modal.style.display = "block";
  modal.classList.add("active");
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function () {
  // modal.style.display = "none";
  modal.classList.remove("active");
});

// Close the modal when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    // modal.style.display = "none";
    modal.classList.remove("active");
  }
});
