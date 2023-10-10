// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const showAnsBtn = document.getElementById('show-ans-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const roundList = document.getElementById('round-list');
const copyrightSymbol = document.getElementById("copyright-symbol");
const modal = document.getElementById("copyright-modal");
const closeModal = document.getElementById("close-modal");


const sidebarRounds = ['default','elimination', 'passing', 'group', 'pictureA','pictureB','pictureC','pictureD','pictureE', 'videoA','videoB','videoC','videoD','videoE', 'audioA','audioB','audioC','audioD','audioE', 'fastest', 'box','patianceA','patianceB','patianceC','patianceD','patianceE','khelA','khelB','khelC','khelD','khelE','rajnitiiA','rajnitiiB','rajnitiiC','rajnitiiD','rajnitiiE'];

// Modify questions array to include 'round' property for each question
const questions = [
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

    //sanskriti questions start from here
    { round: 'khelA', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'khelB', format: 'text',  question: 'Q2 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'khelC', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'khelD', format: 'text',  question: 'Q4 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'khelE', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    //Rajniti Questions start from here
    { round: 'rajnitiiA', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitiiB', format: 'text',  question: 'Q2 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitiiC', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitiiD', format: 'text',  question: 'Q4 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitiiE', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },

    //Images Round start from here
    { round: 'pictureA', format: 'image',  question: 'images/1.jpg', answer: 'Radha' },
    { round: 'pictureB', format: 'image',  question: 'images/2.jpg', answer: 'Radha' },
    { round: 'pictureC', format: 'image',  question: 'images/1.jpg', answer: 'Radha' },
    { round: 'pictureD', format: 'image',  question: 'images/2.jpg', answer: 'Radha' },
    { round: 'pictureE', format: 'image',  question: 'images/1.jpg', answer: 'Radha' },

    //Audio Round Start from here
    { round: 'audioA', format: 'audio',  question: 'audios/1.mp3', answer: 'Radha' },
    { round: 'audioB', format: 'audio',  question: 'audios/2.mp3', answer: 'Radha' },
    { round: 'audioC', format: 'audio',  question: 'audios/3.mp3', answer: 'Radha' },
    { round: 'audioD', format: 'audio',  question: 'audios/1.mp3', answer: 'Radha' },
    { round: 'audioE', format: 'audio',  question: 'audios/2.mp3', answer: 'Radha' },

    //Video Round starts from here
    { round: 'videoA', format: 'video',  question: 'videos/1.mp4', answer: 'Radha' },
    { round: 'videoB', format: 'video',  question: 'videos/2.mp4', answer: 'Radha' },
    { round: 'videoC', format: 'video',  question: 'videos/3.mp4', answer: 'Radha' },
    { round: 'videoD', format: 'video',  question: 'videos/4.mp4', answer: 'Radha' },
    { round: 'videoE', format: 'video',  question: 'videos/1.mp4', answer: 'Radha'},
    //Fastest fastest from here
    { round: 'fastest', format: 'text',  question: 'Q1 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q3 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q6 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q7 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q8 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q9 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q11 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q12 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q13 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q14 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q15 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q16 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q17 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q18 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q19 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q20 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q21 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q22 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q23 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q24 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q25 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q26 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q27 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q28 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q29 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q30 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q31 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q32 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q33 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q34 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q35 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q36 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q37 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q38 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q39 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q40 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q41 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q42 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q43 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q44 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q45 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q46 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q47 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q48 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q49 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q50 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q51 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q52 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q53 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q54 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q55 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q56 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q57 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q58 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q59 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q60 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q61 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q62 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q63 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q64 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q65 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q66 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q67 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q68 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q69 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q70 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q71 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q72 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q73 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q74 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q75 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q76 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q77 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q78 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q79 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q80 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q81 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q82 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q83 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q84 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q85 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q86 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q87 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q88 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q89 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q90 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q91 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q92 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q93 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q94 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q95 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q96 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q97 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q98 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q99 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q100 Krishna', answer: 'Radha' },
    // ... othfastests ...
    // ... quefastestother rounds ...
];

let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let currentRoundId = sidebarRounds[0];

// Show questions for the selected round
function showRoundQuestions(roundId) {
    currentQuestionIndex = 0;
    currentRoundQuestions = questions.filter(q => q.round === roundId);
    if (currentRoundQuestions.length > 0) {
        showQuestion(currentQuestionIndex);
        showAnsBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'block';
        
    } else {
        questionText.textContent = 'This round has been completed.';
        answerText.textContent = '';
        showAnsBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'none';
        
    }
}

// Show a specific question and its answer
function showQuestion(index) {
    

    const currentQuestion = currentRoundQuestions[index];
    questionText.textContent = currentQuestion.question;

    if (currentQuestion.format === 'image') {
        questionText.innerHTML = `<img src="${currentQuestion.question}" alt="Question Image">`;
    } else if (currentQuestion.format === 'audio') {
        questionText.innerHTML = `<audio controls><source src="${currentQuestion.question}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
    } else if (currentQuestion.format === 'video') {
        questionText.innerHTML = `<video controls><source src="${currentQuestion.question}" type="video/mp4">Your browser does not support the video element.</video>`;
    }

    answerText.textContent = currentQuestion.answer;
    answerText.classList.add('hidden');
    showAnsBtn.textContent = 'Show Answer';
    
}

// Toggle answer visibility
function showAnswer() {
    answerText.classList.toggle('hidden');
    showAnsBtn.textContent = answerText.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}

// Event listener for showing answer
showAnsBtn.addEventListener('click', showAnswer);

// Event listener for moving to the next question
nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentRoundQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        questionText.textContent = 'This round has been completed .';
        answerText.textContent = '';
        showAnsBtn.textContent = 'Show Answer';
        answerText.classList.add('hidden');
    }
});

// Event listener for round selection in the sidebar
roundList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
        const roundId = target.getAttribute('href').substring(1);
        if (sidebarRounds.includes(roundId)) {
            currentRoundId = roundId;
            showRoundQuestions(currentRoundId);
            event.preventDefault();
        }
    }
});

// Initialize default round and questions
showRoundQuestions(currentRoundId);

document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  });
// Show the modal when the copyright symbol is clicked
copyrightSymbol.addEventListener("click", function() {
    // modal.style.display = "block";
    modal.classList.add("active");
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function() {
    // modal.style.display = "none";
    modal.classList.remove("active");
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.classList.remove("active");
    }
});


