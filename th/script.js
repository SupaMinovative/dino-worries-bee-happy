"use strict";

// day night bg
const cloud = document.getElementById("cloud");
const moon = document.getElementById("moon");
moon.classList.remove("moon-container");

/* This function checks time and adjusts background based on day/night.
Currently disabled for future implementation.

function handleCheckTime() {

  const hour = new Date().getHours();

  if (hour >= 18 || hour < 6) {

    if (window.matchMedia("(max-width: 768px)").matches) {

      moon.classList.add("moon-container");
      moon.classList.remove("hidden");
      cloud.classList.remove("cloud-container");
      cloud.classList.add("hidden");
      document.body.style.backgroundImage = "url('night-mobile.png')";

    } else {
      moon.classList.add("moon-container");
      moon.classList.remove("hidden");
      cloud.classList.remove("cloud-container");
      cloud.classList.add("hidden");
      document.body.style.backgroundImage = "url('night-bg.png')";
    }

  } else {

    if (window.matchMedia("(max-width: 768px)").matches) {
      cloud.classList.remove("hidden");
      cloud.classList.add("cloud-container");
      moon.classList.add("hidden");
      document.body.style.backgroundImage = "url('background-mobile-2.png')";
    
      } else {
      cloud.classList.remove("hidden");
      cloud.classList.add("cloud-container");
      moon.classList.add("hidden");
      document.body.style.backgroundImage = "url('background-vent-flower.png')";
    }
  }
}
handleCheckTime();*/

cloud.addEventListener("animationend", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    moon.classList.add("moon-container");
    showElement(moon);
    cloud.classList.remove("cloud-container");
    hideElement(cloud);
    document.body.style.backgroundImage = "url('night-mobile.png')";
  } else {
    moon.classList.add("moon-container");
    showElement(moon);
    cloud.classList.remove("cloud-container");
    hideElement(cloud);
    document.body.style.backgroundImage = "url('night-bg.png')";
  }
});

moon.addEventListener("animationend", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    showElement(cloud);
    cloud.classList.add("cloud-container");
    hideElement(moon);
    document.body.style.backgroundImage = "url('background-mobile-2.png')";
  } else {
    showElement(cloud);
    cloud.classList.add("cloud-container");
    hideElement(moon);
    document.body.style.backgroundImage = "url('background-vent-flower.png')";
  }
});

const textElement = document.getElementById("typing-text");
const finalTextEl = document.getElementById("final-text");
const negativeTextEl = document.getElementById("negative-answer");
const fadeIn = document.getElementById("fade-in-text");
const dinoText = document.getElementById("text-1");
const beeText = document.getElementById("text-2");
const cloverText = document.getElementById("text-3");
const cloverEndText = document.getElementById("clover-end-text");
let userName = "";
const overlay = document.querySelector(".overlay");
const texts = [
  "ใช่! ฉันหมายถึงเธอนั่นแหละ",
  "วันนี้เป็นยังไงบ้าง " + userName + " ?",
  "มานี่สิ \n ฉันมีอะไรจะให้!",
];

const dinoWalk = document.getElementById("dino-movement");
const bee = document.getElementById("bee");
const feelings00 = document.getElementById("option-00");
const feelings01 = document.getElementById("option-01");
const feelings02 = document.getElementById("option-02");
const feelings03 = document.getElementById("option-03"); // disappointed
const feelings04 = document.getElementById("option-04"); // laugh
const blueFlower = document.getElementById("blue-flower"); //feeling sad
const yellowFlower = document.getElementById("yellow-flower"); //given up
const whiteFlower = document.getElementById("white-flower"); // tired
const pinkFlower = document.getElementById("pink-flower");
const honeyJar = document.getElementById("honey-jar");
const cardDisplay = document.querySelector(".card-display");
const btnCloseCard = document.querySelector(".close-card");

const positiveSpeechBubble = document.getElementById("positive-bubble");
const blueClover = document.getElementById("blue-clover"); //feeling sad
const yellowClover = document.getElementById("yellow-clover"); //given up
const greenClover = document.getElementById("green-clover"); // tired
const yesAnswer = document.getElementById("option-yes");
const honeyJarYes = document.getElementById("option-honeyJar");
const noAnswer = document.getElementById("option-no");
const homeBtn = document.getElementById("home-btn");

const cards = {
  cloverMessage: {
    message: [
      "ไปเดินเล่นท่ามกลางธรรมชาติ 🌳☀️",
      "ลองนั่งสมาธิสัก 10 นาทีดูสิ 🧘✨",
      "โทรหาเพื่อน หรือครอบครัว 👨‍👩‍👧‍👦📞",
      "อ่านหนังสือดีๆสักเล่ม ✨📗",
      "ลองฝึกโยคะ✨🧘‍♀️",
      "ทำอาหารที่มีประโยชน์ 🥗🥦",
      "ฟังเพลงที่ช่วยให้อารมณ์ดี 🎼🎧",
      "เต้นเหมือนกับว่าไม่มีใครกำลังมองอยู่💃🕺",
      "ดูหนัง หรือรายการตลก 📺🤣",
      "ทำสวน ปลูกต้นไม้ 🌱👩‍🌾",
      "ออกกำลังกายอย่างสม่ำเสมอ 🤾‍♀️🏃‍♀️",
      "ฝึกจังหวะการหายใจ 🧘✨",
      "ทำความสะอาดห้อง 🧹✨",
      "อาบน้ำให้ผ่อนคลาย 🛀🚿",
      "วาดรูป หรือระบายสี 🎨🖼️",
      "ลิสต์สิ่งที่รู้สึกขอบคุณ 🖋️📒",
      "ลองทำสูตรอาหาร หรือเมนูใหม่ๆ 🍳✨",
      "ใช้เวลากับสัตว์เลี้ยง 🐶💞",
      "ไปปั่นจักรยานเล่น 🚵🏔️",
      "ไปเที่ยวชมเมืองใหม่ๆ 🗼🚉",
      "ไปดูดาว 🌠💫",
      "ไปปิกนิกที่สวน 🧺☀️",
      "ไปเที่ยวสวนสัตว์ หรืออควาเรียม 🦁🦓",
      "ไปว่ายน้ำ 🏊🏞️",
      "ลองพักผ่อนบนชายหาดดูสักครั้ง 🏖️🩴",
      "อบคุ้กกี้ แล้วลองแบ่งให้คนรอบตัวดู 🍪🧁",
      "ลองทำโปรเจค DIY  🎨🪅",
      "ไปเดินเขา 🚶‍♂️⛰️",
      "ไปชมสวนดอกไม้ 🦋🌷🌻🌼",
      "ลองกีฬาใหม่ๆดู 🤾‍♀️🏃‍♀️🏊",
      "เล่นเกมปริศนา หรือลองต่อจิ๊กซอว์ดู 🧩💡",
      "ดูพระอาทิตย์ขึ้น หรือพระอาทิตย์ตก ☀️🌄",
      "ไปดูคอนเสิร์ตหรือการแสดงสด🎙️🎻",
      "ลองฝึกคิดบวก 💚🌻 \n เช่น.... ฉันสามารถที่จะประสบความสำเร็จได้ และสมควรได้รับความสำเร็จที่จะเข้ามาหาฉัน \n ใช่ ฉันก็เชื่อว่าเธอสมควรได้รับมันเช่นกัน💚😉",
      "ลองการท่องเที่ยวเชิงประวัติศาสตร์ 🏰",
      "เข้าร่วมฟิตเนสคลาสต่างๆ 🧘🤾‍♂️🤸",
      "ลองใช้เวลาโดยไม่มีมือถือดู 📱📵",
      "ไปเยี่ยมเพื่อน หรือใครบางคนที่ไม่ได้เจอมานาน 👨‍👩‍👧‍👦",
      "ไปเที่ยวงานแฟร์ หรือเทศกาลต่างๆ 🎆🎏",
      "ลองเที่ยวแบบโรดทริปดู 🚙🏔️",
      "ลองทำลิสต์เป้าหมายในชีวิต 🖋️📒",
      "ลองพายเรือคายัค 🛶🏖️",
      "ลองไปร้านอาหาร หรือคาเฟ่ใหม่ๆ 🍵🍰",
      "เรียนรู้วัฒนธรรมใหม่ๆ 🎎🎃",
      "ไปเที่ยวชายหาดใกล้ๆ 🏔️🏖️",
      "บางครั้งร่างกายก็ต้องการการนวดสักครั้ง 💆✨",
      "เขียนโน๊ตขอบคุณถึงใครบางคน 🙏😊",
      "ดูหนังแบมาราธอนสักครั้ง 🍿🎞️",
      "ลองเริ่มสะสมคอลเล็คชันอะไรสักอย่างดู 🐚📷",
      "สร้างอัลบัมรูปภาพที่มีความหมาย 📷🎞️",
      "ไปเมี่ยวสวนสนุก 🎡🛝",
      "ไปเที่ยวท้องฟ้าจำลอง 💫🔭",
      "ลองไปตั้งแคมป์ 🏕️💫",
      "ลองนึกถึงความสำเร็จที่ได้รับ และตั้งเป้าหมายใหม่ ⭐💚",
    ],
  },
  yellowCard: {
    message: [
      "ชีวิตอาจเป็นเรื่องยาก แต่คุณก็เข้มแข็งเช่นกัน ทุกวันเป็นโอกาสใหม่ในการสร้างสิ่งที่พิเศษ และเธอก็มีพลังที่จะทำให้มันเกิดขึ้น เชื่อในตัวเองและความสามารถอันไม่มีที่สิ้นสุดของเธอ เธอเป็นที่รัก เธอมีความสำคัญ สู้ต่อไปนะ เธอทำได้ดีมากแล้ว 🌻💪",
      "นี่ เธอ! ก็แค่อยากเตือนว่า เธอน่ะพิเศษ และเก่งขนาดไหน โลกใบนี้สดใสขึ้น เมื่อมีเธออยู่ในนั้น และรอยยิ้มของเธอทำให้แม้แต่วันที่เมฆหม่นๆสดใสขึ้น สู้ต่อไปนะ เพราะเธอทำดีแล้ว! 🌟🌼",
      "พระอาทิตย์ที่ขึ้นในทุกๆเช้าย่อมนำโอกาสใหม่ๆเข้ามา ทุกๆรอยยิ้มช่วยทำให้โลกใบนี้อบอุ่นขึ้น ทุกๆการเต้นของหัวใจ ช่วยย้ำเตือนเราว่า ชึวิตนี้ยังมีสิ่งสวยงามที่รอให้เราค้นพบ ถึงแม้วันนี้จะไม่ใช่วันที่สดใสที่สุด แต่วันที่ดีกว่าคงรออยู่ไม่ไกล",
      "นี่ ไอ้เจ้านักรบแห่งชีวิต! ความท้าทายของชีวิตเป็นเพียงการก้าวไปสู่ความยิ่งใหญ่ ความพ่ายแพ้ทุกครั้งก็คือการเตรียมการสำหรับการกลับมาที่ยิ่งใหญ่กว่าเดิม จำไว้ว่าเรื่องราวที่ดีที่สุดมาจากการต่อสู้ที่ยากที่สุด และเธอคือฮีโร่ของเรื่องราวมหากาพย์ของเธอเอง เชิดหน้าขึ้น ทำหัวใจของเธอแข็งแกร่ง เธอทำมันได้! 🛡️🔥",
      "นี่ คนเก่ง เมื่อรู้สึกว่าชีวิตมันหนักจนเกินไป จำไว้ว่าเธอไม่จำเป็นที่จะต้องแบกทุกๆอย่างภายในครั้งเดียว มันไม่เป็นไรจริงๆ ถ้าหากเธอจะหยุดพักและดูแลตัวเองบ้าง ทุกๆวันนั้นคือโอกาสที่จะหาความสุขจากสิ่งเล็กๆในชีวิต เชื่อในตัวเธอเองสิ เพราะฉันก็เชื่อว่าเธอสามารถทำมันได้ ไม่ว่าจะเป็นสิ่งใดที่เธอตั้งใจ เดินหน้าต่อไปนะ แม้จะเป็นก้าวเล็กๆก็ตาม",
      "นี่ ไอ้เจ้านักรบแห่งชีวิต! แม้แต่ค่ำคืนที่มืดที่สุดยังจบลงด้วยเช้าอันสว่าง เมื่อเธอผ่านอุปสรรคมาแล้ว ครั้งนี้ก็เป็นแค่บทๆหนึ่งในการเดินทางของชีวิตเธอแค่นั้น หายใจเข้าลึกๆ เชื่อในตัวเอง และรู้ไว้ว่าวันที่สดใสและดีกว่ายังรออยู่ข้างหน้า เธอเข้มแข็งมากกว่าที่เธอคิดนะ เธอทำมันได้อยู่แล้ว 💪🌅",
      "เข้มแข็งไว้นะ แล้วเชื่อมั่นในตัวเอง เธอทำมันได้แน่นอน ทุกสิ่งที่เธอตั้งใจ",
      "นี่ เธอ! ถ้าหากเธอรู้สึกยอมแพ้ อยากให้นึกถึงว่า ทำไมเธอถึงได้เริ่มต้นตั้งแต่แรก ความพ่ายแพ้ทุกครั้งก็คือการเตรียมการสำหรับการกลับมาที่ยิ่งใหญ่กว่าเดิม หากเหนื่อยนักก็พักดูสักพัก แล้วก็ก้าวเดินต่อไปข้างหน้า เธอสามารถทำอะไรได้หลายๆอย่าง เชื่อในตัวเองสิ บางทีเธออาจเข้าใกล้จุดหมายมากกว่าที่เธอคิดก็ได้ 🌟💪",
      "นี่ เธอน่ะเก่งและเข้มแข็งกว่าที่คิดนะรู้ไหม หายใจเข้าลึกๆ แล้วลองเดินหน้าดูอีกที อาจยังมีสิ่งที่ดีกว่ากำลังรอคอยอยู่ข้างหน้า เธอทำได้! 💫💪",
      "นี่ ถึงแม้ในวันที่หนักหน่วง แต่เธอก็ผ่านวันที่แย่ที่สุดมาได้ 100% จนถึงวันนี้ เธอมันเก่งและพลิกวิกฤตให้เป็นโอกาสได้ หายใจเข้าลึกๆ และเชื่อมั่นในตัวเอง เดินต่อไปข้างหน้า แม้มันจะไม่ง่าย แต่เธอทำมันได้แน่นอน 💫💪",
      "นี่ เธอ! ถ้าหากกำลังรู้สึกว่ายอมแพ้ จำไว้ว่าเดี๋ยวท้ายที่สุดแล้วพายุก็จะผ่านพ้นไป เธอผ่านช่วงเวลาที่ยากลำบากมาก่อน และเธอก็จะผ่านมันไปได้อีก เธอเข้มแข็งขึ้นเพราะมัน ใช้เวลาเพื่อพักสักหน่อย รวบรวมความเข้มแข็ง และก้าวต่อไปข้างหน้า เธอมีความพยายาม และสามารถที่จะผ่านอุปสรรคต่างๆไปได้ สักวันหนึ่งความพยายามของเธอจะส่งผลให้เห็นอย่างแน่นอน 💫💪",
      "นี่ อดทนอีกนิดนะ ช่วงเวลาที่หนักหน่วงไม่ได้คงอยู่ตลอดไป แต่คนที่หนักแน่นสิจะคงอยู่ได้ เธอทำมันได้! ⭐💪",
      "นี่ อย่าพึ่งยอมแพ้ตอนนี้นะ เธอน่ะเข้มแข็งและเก่งกว่าที่เธอคิด! และช่วงเวลานี้ก็เป็นแค่ความท้าทายก่อนการไปถึงจุดหมายที่หวัง สู้ต่อไป เธอทำมันได้อยู่แล้ว ⭐💪",
      "นี่ เธอ เช่นเดียวกันกับที่ฤดูหนาวที่จะนำความอบอุ่นของฤดูใบไม้ผลิมาในภายหลัง ความท้าทายและอุปสรรคในวันนี้ของเธอ ก็จะปูทางไปสู่วันที่สดใสกว่าข้างหน้าเช่นกัน ยอมรับการเติบโตและความยากลำบากนี้ โดยรู้ว่าทุกช่วงเวลาที่หนาวเย็นจะนำเธอเข้าใกล้ความอบอุ่นของความสำเร็จและความสุข เดินหน้าต่อไป ฤดูใบไม้ผลิของเธอใกล้จะมาถึงแล้ว! 🌻🌱",
      "นี่ ถึงแม้ในหน้าหนาวที่หนาวที่สุด จำไว้ว่าในแต่ละวันจะนำพาเราเข้าใกล้ฤดูใบไม้ผลิอันอบอุ่น ความพยายามของเธอก็เหมือนกับคำสัญญาของดอกไม้ ที่ว่าจะออกดอกหลังจากฤดูหนาวอันยาวนาน ทำตามความฝันของเธอ อดทน และเข้มแข็งไว้ - อีกไม่นาน พระอาทิตย์จะส่องแสงเจิดจ้าบนทางเดินของเธอ ส่องสว่างทุกสิ่งที่เธอพยายามทำมา 🌻❄️",
      "นี่เธอ อดทนหน่อยนะ ช่วงเวลาที่ยากลำบากเดี๋ยวก็ผ่านไป แต่ความอดทนของเธอจะยังคงอยู่กับเธอเสมอ ลองพักดูบ้าง เพื่อให้มีพลังสู้ต่อไป และก็ก้าวต่อไปข้างหน้าอีกครั้งด้วยความมุ่งมั่น เธอพยายามมาขนาดนี้แล้ว วันที่ดีกว่ารออยู่อีกไม่ไกลข้างหน้าแน่นอน",
      "เธอคนเก่ง อย่าให้ก้อนเมฆมาบดบังแสงของเธอ ทุกๆความท้าทายก็แค่เพิ่มสีสันให้กับการเดินทางของชีวิต สู้ต่อไปสิ เธอทำมันได้แน่ๆ ⭐✨",
      "นี่ เธอ! รู้สึกว่าอยากจะยอมแพ้ไปดื้อๆหรือเปล่า ไม่ได้สิ! ก็มาไกลขนาดนี้แล้วนะ ลองพักดูบ้าง แล้วสู้ต่อไปอีกครั้ง เธอสามารถที่จะเอาชนะทุกๆอุปสรรคที่เข้ามาขวางทางได้อยู่แล้ว เพราะเธอมันเก่ง 💚⭐",
      "นี่ เธอ! อย่าปล่อยให้สิ่งกีดขวางบนถนนทำให้เธอช้าลงาิ! เธอเป็นเหมือนซูเปอร์ฮีโร่ที่หลบสิ่งกีดขวาง ใช้เวลาสักพักเพื่อชาร์จพลังของเธอ แล้วก็พุ่งไปข้างหน้าด้วยรอยยิ้ม และความแข็งแกร่งที่เพิ่มขึ้น เธอทำได้!",
      "นี่ เธอ รู้สึกกดดันอยู่หรือเปล่า? ก็แค่ชีวิตทดสอบพลังวิเศษของเธออยู่น่ะ หายใจเข้าลึกๆ แล้วแสดงให้โลกเห็นไปเลย ว่าเธอน่ะเก่ง และสามารถทำมันได้อยู่แล้ว",
      "ชีวิตก็เหมือนการเดินป่าผ่านถนนและภูเขาที่ขรุขระ ท้าทาย แต่ทิวทัศน์ด้านบนก็คุ้มค่า  ถ้าหากเหนื่อย ก็พักหายใจ และเพลิดเพลินกับทิวทัศน์ตรงนั้น แล้วค่อยเดินต่อไปด้วยความมุ่งมั่น เธอกำลังอยู่ในการเดินทางที่เต็มไปด้วยการหักมุม และทุกย่างก้าวจะทำให้เธอเข้าใกล้จุดสูงสุดมากขึ้น 🏔️🌄",
      "การเดินทางของชีวิตก็เหมือนกับการล่องเรือผ่านทะเลที่เปลี่ยนแปลงไป บางครั้งสงบ บางครั้งก็มีพายุ ใช้เวลาสักครู่เพื่อปรับใบเรือ ยอมรับสายลมแห่งการเปลี่ยนแปลง และนำทางผ่านความท้าทายด้วยความมั่นใจ เธอกำลังกำหนดเส้นทางไปสู่ขอบฟ้าที่สดใสยิ่งขึ้น และแต่ละคลื่นที่เธอพิชิตได้จะเสริมความแข็งแกร่งให้กับความอดทนของเธอ ⛵☀️",
      "ลองจินตนาการถึงชีวิตให้เป็นนวนิยายผจญภัยมหากาพย์ที่มีโครงเรื่องหักมุมและความท้าทายต่างๆ เมื่อเธอต้องเจอกับพล็อตเรื่องที่หักมุมและพลิกผัน ให้หยุดพักครู่หนึ่ง พลิกไปยังบทถัดไป และยอมรับความตื่นเต้นของการเอาชนะอุปสรรคนี้ เรื่องราวของเธอจะจบลงอย่างสวยงาม — เพราะเธอคือตัวเอกผู้กล้าหาญที่ถูกกำหนดให้ไปสู่ชัยชนะ!",
    ],
  },
  blueCard: {
    message: [
      "นี่ ไม่เป็นไรเลยที่จะรู้สึกแบบนี้ในบางครั้ง จำไว้ว่าเมื่อเมฆฝนผ่านไป ดวงอาทิตย์ก็จะกลับมาเสมอ เธอแข็งแกร่งกว่าที่คิด และวันที่สดใสยังรออยู่ข้างหน้า ค่อยๆก้าวไปทีละก้าว และรู้ไว้ว่าเธอ... ไม่ใช่คนเดียวในการเดินทางครั้งนี้ เธอมีเข้มแข็งที่จะเอาชนะช่วงเวลานี้ อดทนอีกนิดนะ — เธอสามารถทำมันได้! ☀️🌱",
      "ไม่เป็นไรเลยถ้าหากว่าเธอร้องไห้และระบายออกมา มันเป็นการแสดงออกของความเข้มแข็ง ที่เธออาจจะอดทนมาจนมากพอ ไม่ใช่ความอ่อนแอ ให้พื้นที่ และเวลาตัวเองได้รู้สึก และปลดปล่อยอารมณ์เหล่านั้น โอบกอดตัวเองไว้ มันเป็นวิธีเยียวยาที่จะช่วยให้เธอรู้สึกดีขึ้น เพื่อที่ก้าวไปข้างหน้าอีกครั้งได้อย่างแข็งแกร่งและสดใสกว่าเดิม เธอทำดีแล้ว และเธอไม่ได้ตัวคนเดียว ฉันอยู่ที่นี่เพื่อโอบกอดเธอ 🌻🤗",
      "นี่เธอ บางครั้งการที่จะรู้สึกแย่ก็ไม่เป็นไรหรอกนะ ชีวิตมีขึ้นมีลง และในช่วงเวลาเหล่านี้เราเรียนรู้และเติบโตมากที่สุด หายใจเข้าลึกๆ และจดจ่อกับสิ่งเล็กๆ น้อยๆ ที่ทำให้เธอมีความสุข ไม่ว่าจะเป็นการดื่มกาแฟสักแก้ว ทานของที่อร่อย ฟังเพลงโปรด หรือการกอดปลอบโยนจากคนที่รัก ช่วงเวลานี้จะไม่คงอยู่ตลอดไป และเธอมีความเข้มแข็งที่จะผ่านมันไปได้ เดินหน้าต่อไปเมื่อพร้อม วันที่สดใสกว่ารออยู่ไม่ไกล ☀️🌻",
      "ฉันเข้าใจว่าสิ่งต่างๆ อาจรู้สึกหนักหน่วงเกินไปในตอนนี้ แต่จำไว้ว่าพายุไม่ได้คงอยู่ตลอดไป ใช้เวลาสักพักเพื่อหยุดพัก และเติมพลังให้กับตัวเองจากสิ่งที่ทำแล้วมีความสุข — การเดินเล่นในธรรมชาติ หนังสือดีๆสักเล่ม เพลงโปรด หรือแม้แต่อาหารจานโปรด ให้เชื่อมั่นว่าช่วงเวลานี้เป็นเพียงบทหนึ่งในการเดินทางของชีวิตเธอ ไม่ใช่เรื่องราวทั้งหมด เธอเคยเอาชนะความยากลำบากมาก่อน และเธอก็มีความเข้มแข็งที่จะเอาชนะมันครั้งนี้เช่นกัน อดทนไว้นะ มีความหวัง และรู้ไว้ว่าเธออยู่บนเส้นทางที่จะก้าวไปสู่วันข้างหน้าที่สดใสกว่า ☀️💚",
      "ฉันรู้ว่าตอนนี้มันยาก ใช้เวลาสักครู่เพื่อนึกถึงสิ่งที่เธอรู้สึกขอบคุณ ไม่ว่าจะเล็กหรือใหญ่ ไม่ว่าจะเป็นวันที่อากาศแจ่มใส ท่าทางใจดีจากเพื่อน หรือช่วงเวลาอันเงียบสงบ และวันหยุดพักผ่อนที่ได้รับ สิ่งเล็กๆน้อยๆเหล่านี้อาจสามารถช่วยให้วันของเธอสดใสขึ้นได้ และช่วงเวลาแห่งความยากลำบากนี้คือโอกาสสำหรับการเติบโตและความเข้มแข็งของเธอ มองไปข้างหน้าด้วยความหวัง เพราะวันเวลาที่ดีกว่ากำลังรออยู่ และใกล้เข้ามาแล้ว 🌻✨",
      "นี่ ฉันแค่อยากให้เธอรู้ว่าบางครั้งมันก็ไม่เป็นไรที่จะรู้สึกแบบนี้ ชีวิตก็มีหุบเขาและยอดเขานะ และตอนนี้เธอก็แค่อยู่ในหุบเขา แต่หุบเขาคือที่ที่ดอกไม้สวยงามที่สุดบานสะพรั่ง ใช้เวลาสักครู่เพื่อพักหายใจ จงย้อนนึกถึงการเดินทางของเธอมาจนถึงตอนนี้ และความแข็งแกร่งที่เธอได้แสดงให้เห็นในการเอาชนะอุปสรรคต่างๆ และจำไว้ว่าแม้ในช่วงเวลาที่มืดมนที่สุด ก็ยังมีความหวังริบหรี่คอยนำทางเธอไปข้างหน้าเสมอ วันข้างหน้าต้องดีขึ้นแน่นอน 🌻🌄",
      "นี่ ฉันรู้ว่าสิ่งต่างๆในตอนนี้รู้สึกหนักหน่วงเหลือเกิน แต่เธอแข็งแกร่งกว่าที่เธอคิด หายใจเข้าลึกๆ และจดจ่ออยู่กับช่วงเวลาปัจจุบัน ปล่อยให้ตัวเองปล่อยวางสิ่งที่ควบคุมไม่ได้ และยอมรับสิ่งที่ทำให้เธอสบายใจ — กาแฟอุ่นๆ หนังสือดีๆสักเล่ม หรือคนที่ใกล้ชิด ช่วงเวลาแห่งความยากลำบากนี้เป็นเพียงสิ่งชั่วคราว และเธอมีความเข้มแข็งที่จะเอาชนะมันได้ เชื่อมั่นในความสามารถของเธอที่จะฝ่าฟันพายุลูกนี้ และรู้ว่าท้องฟ้าที่สดใสนั้นอยู่เหนือพายุนั้น ก้าวต่อไปด้วยความเชื่อมั่นในตัวเอง และเส้นทางการเดินทางข้างหน้า 🌄🌻",
      "ฉันขอโทษที่เธอรู้สึกแย่ จำไว้ว่าพายุไม่ได้คงอยู่ตลอดไป" +
        "เธอแข็งแกร่งกว่าที่เธอรู้ และวันที่สดใสยังรออยู่ข้างหน้า ค่อยๆก้าวทีละก้าว แล้วในอีกไม่นาน เธอจะเจอวันที่สดใสอีกครั้ง",
      "เมื่อความโศกเศร้าปกคลุมท้องฟ้าของเธอ จำไว้ว่าอีกไม่นานพายุก็จะผ่านไป และดวงอาทิตย์จะส่องแสงอีกครั้งเสมอ" +
        "ความแข็งแกร่งของเธอยิ่งใหญ่กว่าความรู้สึกชั่วขณะนี้ โอบกอดความสุขเล็กๆน้อยๆเอาไว้ เพราะมันเป็นก้าวไปสู่วันที่สดใสกว่า เธอแข็งแกร่ง" +
        "และความอุปสรรคแต่ละอย่างที่เธอเอาชนะได้ จะทำให้เธอเข้มแข็งขึ้น เชื่อในความหวังเล็กๆ และก้าวต่อไปข้างหน้า เธอจะสามารถเปลี่ยนความศร้าเป็นความเข้มแข็ง และมีความสุขได้อีกครั้ง",
      "จำไว้ว่า ทุกอุปสรรค และความผิดหวังที่เธอเจอเป็นเพียงการก้าวย่างไปสู่การแข็งแกร่งขึ้น ชีวิตคือการเดินทาง และทุกอุปสรรคจะทำให้เธอเข้าใกล้ในการค้นพบว่าเธอนั่นเก่งและแข็งแกร่งขนาดไหน วันที่สวยงามยังรออยู่ข้างหน้านะ รีบๆลุกกลับขึ้นมาเดินต่อไปล่ะ 🌈✨",
    ],
  },
  whiteCard: {
    message: [
      'นี่ เธอ! จำไว้นะ ว่าคำว่าเหนื่อย (tired) ภาษาอังกฤษสะกดกลับหลังได้เป็น "derit" ซึ่งมันก็ไม่ได้มีความหมายหรอก 😁 ก็เหมือนกันกับความรู้สึกเหนื่อยนั่นแหละ ที่บางครั้งก็รู้สึกว่ามีหลายอย่างที่จะต้องทำจนเกินไป ยังกับว่าเราจะไปต้องกู้โลก แต่นี่ ขนาดซุปเปอร์ฮีโร่ยังต้องพักบ้างเลย เพราะงั้นเธอก็ควรพักบ้างนะ ชาร์จพลังงานใหม่ แล้วก็เตรียมพร้อมออกไปกู้โลกอีกครั้ง เธอทำมันได้ ฉันเชื่อแบบนั้น! 💤💪',
      "ถ้าหากเธอรู้สึกเหนื่อยกับทุกๆสิ่ง นั่นอาจจะเป็นสัญญาณว่าเธอพยายามที่จะเข้มแข็งมานานเกินไปแล้วนะ ลองพักดูบ้างสักพัก แต่อย่าลืมไปว่าเธอน่ะเข้มแข็งแค่ไหน ความเหนื่อยล้า และท้อแท้นี้ก็แค่ชั่วคราวเท่านั้นแหละ มันก็เป็นแค่ส่วนหนึ่งของการเดินทางอันยิ่งใหญ่ของเธอ ลองสู้ใหม่อีกครั้ง และเดินหน้าต่อไปเมื่อเธอหายเหนื่อย บางทีเธออาจจะเข้าใกล้จุดหมายมากกว่าที่เธอคิดก็ได้นะ",
      "ถ้าหากเธอรู้สึกว่าทุกอย่างมันช่างหนักหน่วงไปหมด และหมดแรงที่จะทำอะไร จำไว้ว่า แม้แต่ในค่ำคืนที่มืดมนที่สุด ท้ายที่สุดแสงสว่างตอนเช้าของอีกวันก็จะมาถึง หายใจเข้าลึกๆ รวบรวมความแข็งแกร่ง และก้าวต่อไปข้างหน้า ทุกๆก้าว ไม่ว่าจะเล็กขนาดไหน สุดท้ายก็ย่อมพาเธอเข้าใกล้ และไปถึงวันที่ดีกว่าข้างหน้า หากเธอเดินมาไกลขนาดนี้แล้ว เธอก็จะสู้ไปจนถึงจุดหมายได้อย่างแน่นอน",
      "นี่เธอ รู้สึกเหนื่อยจนแทบจะยืนไม่ไหวหรือเปล่า? ไม่เป็นไรนะ ขนาดโทรศัพท์ก็ยังจำเป็นต้องชาร์จแบต ลองพักดูบ้าง จิบกาแฟ (หรือชาเย็น แล้วแต่ชอบ) และจำไว้นะ เธอไม่ได้ขี้เกียจ แต่แค่กำลังอยู่ในโหมดประหยัดพลังงาน อีกไม่นาน เธอก็จะกลับมาเป็นเธอคนเก่งคนเดิม จนถึงตอนนั้น ก็เอนจอยกับการงีบ และพักผ่อนให้พอนะ! 🤗🍵",
      "นี่! กำลังรู้สึกเหมือนเช้าวันจันทร์ ในบ่ายของวันอังคารอยู่หรือเปล่า แล้วเมื่อไหร่จะถึงวันศุกร์สักทีนะ? ไม่เป็นไรเลยถ้าหากเธอรู้สึกแบบนั้น หรือรู้สึกหมดไฟ แม้แต่จรวตยังต้องเติมเชื้อเพลิงเพื่อให้เดินทางได้เลย เพราะฉะนั้น ลองจินตนาการว่าตัวเองเป็นสลอธดูสิ ค่อยๆก้าวต่อไปในชีวิตอย่างช้าๆ ตามจังหวะของตัวเองแทนการวิ่งตามจังหวะของชีวิตคนอื่นดูสิ 🦥💚",
      "นี่ เธอ! รู้สึกเหมือนนั่งอยู่บนรถที่ติดบนทางด่วนของชีวิตอยู่หรือเปล่า ? ไม่เป็นไรนะ ขนาดในท้ายที่สุดแล้ว เต่ายังวิ่งเข้าเส้นชัยได้เลย หายใจเข้าลึกๆ แล้วพักดูบ้าง ก็ถ้าหากโลกเหวี่ยงมะนาวมาให้ ก็บีบใส่ชาเย็น แล้วจิบให้ชื่นใจไปซะเลยสิ บางครั้งทุกสิ่งที่หวังก็อาจจะไม่ได้ดั่งใจ ยอมรับความวุ่นวายต่างๆแล้วยิ้มให้มัน ท้ายที่สุดแล้ว เธอก็เป็นคนเขียนบทชีวิตของตัวเอง ทำใจให้สบาย แล้วเดินหน้าต่อไปนะ",
      "นี่ เธอ! รู้สึกเหมือนช่วงชีวิตกำลังติดอยู่ในเครื่องซักผ้าที่กำลังหมุนอยู่หรือเปล่า เมื่อไหร่จะเสร็จสักทีนะ... แต่อดทนไว้นะ ขนาดถุงเท้ายังหาคู่ของมันเจอเลย ท้ายที่สุดแล้วเธอก็จะหาจุดหมายของเธอเจอเช่นกัน",
      "นี่ เธอ! รู้สึกเหมือนนั่งอยู่บนรถที่ติดบนทางด่วนของชีวิตอยู่หรือเปล่า ? ไม่เป็นไรหรอกนะ ขนาด GPS ยังพาไปผิดทางบางครั้ง",
    ],
  },
  pinkCard: {
    message: [
      "ในบทเพลงแห่งชีวิต โน้ตทุกตัวมีความสำคัญ แม้แต่โน้ตที่ฟังดูผิดจังหวะ ความผิดหวังเปรียบเสมือนส่วนในดนตรีที่ไม่คาดคิด มันทำให้เราหยุดชั่วคราวเพื่อไตร่ตรอง ปรับเปลี่ยน และหาโน๊ตของอนาคตที่ใช่มากขึ้น ยอมรับช่วงเวลาเหล่านี้ เพื่อเป็นโอกาสในการปรับแต่งความอดทนและความคิดสร้างสรรค์ของเธอ เพื่อหาโน๊ตตัวที่ถูกจังหวะให้เจอ จำไว้ว่า ทำนองของการเดินทางของเธอไม่ได้ถูกกำหนดโดยความล้มเหลวเพียงครั้งเดียว แต่โดยความกล้าหาญและความสง่างามที่เธอยังคงเล่นต่อไป เปิดใจรับจังหวะของโอกาสใหม่ๆ และปล่อยให้บทเพลงที่มีเอกลักษณ์ของเธอถูกสร้างขึ้นมาด้วยทุกก้าวที่ก้าวไปข้างหน้า",
      "เมื่อชีวิตทำให้เธอผิดหวัง จงเปลี่ยนมันให้เป็นการค้นพบ ความท้าทายแต่ละครั้งคือโอกาสที่จะค้นพบจุดแข็งของเธอที่ซ่อนอยู่และคาดไม่ถึง เช่นเดียวกับคืนที่มืดมนที่สุดเผยให้เห็นดวงดาวที่สว่างที่สุด ความพ่ายแพ้ของเธอก็สามารถส่องสว่างเส้นทางใหม่ไปข้างหน้าได้เช่นกัน โอบกอดช่วงเวลานี้ไว้เป็นส่วนหนึ่งของการเดินทางของชีวิต โดยรู้ว่าทุกย่างก้าว แม้แต่ก้าวที่ดูเหมือนจะถอยหลัง กำลังทำให้เธอเป็นคนที่ตั้งใจจะเป็น บทที่ดีที่สุดของเรื่องราวของเธอยังคงรอให้ถูกค้นพบอยู่",
    ],
  },
  honeyJar: {
    message: [
      "อะไรเอ่ย บินได้แต่ไม่มีปีก?\n ว่าว!",
      "อะไรเอ่ย มีฟันแต่ไม่เคยแปรงฟัน?\n หวี!",
      "อะไรเอ่ย บินได้แต่ไม่มีปีก?\n ว่าว!",
      "อะไรเอ่ย มีหัวแต่ไม่มีสมอง?\n กระเทียม!",
      "อะไรเอ่ย เดินไปเรื่อยๆ ไม่เคยหยุด?\n นาฬิกา!",
      "อะไรเอ่ย มีขาเดียวแต่เดินไม่ได้?\n โต๊ะ!",
      "อะไรเอ่ย ตื่นมาเจอหน้าแล้วต้องไปทำงาน? \nนาฬิกาปลุก!",
      "อะไรเอ่ย ขึ้นไปข้างบนแล้วต้องลงมา?\n บันได!",
      "อะไรเอ่ย มีฟันแต่ไม่เคยกินข้าว?\n หวี!",
      "อะไรเอ่ย มีหูแต่ไม่ฟัง?\n หม้อ!",
      "อะไรเอ่ย ใหญ่แต่เบา?\n ลูกโป่ง",
      "อะไรเอ่ย ขึ้นไปแล้วไม่ลง?\n อายุ!",
      "อะไรเอ่ย อยู่บนต้นไม้แต่ไม่ใช่ใบไม้?\n มด!",
      "อะไรเอ่ย อยู่ในน้ำแต่ไม่ใช่ปลา?\n เรือ!",
      'ทำไมคอมพิวเตอร์ถึงไม่เคยเป็นหวัด? เพราะมันมี\n "แอนตี้ไวรัส!"',
      'ทำไมนกกระเรียนถึงขาว? เพราะมัน "สะอาด!"',
      "ทำไมหนังสือพิมพ์ถึงชอบขำ?\n เพราะมันมี “หัว” ข้อข่าวเยอะ!",
    ],
  },
};

document.addEventListener("dragstart", function (event) {
  event.preventDefault();
});

// show and hide class list
function showElement(elName) {
  elName.classList.remove("hidden");
}

function hideElement(elName) {
  elName.classList.add("hidden");
}

// username window
const modal = document.getElementById("nameModal");
const submitBtn = document.getElementById("submitBtn");

function getUserName() {
  function openModal() {
    modal.style.display = "block";
    hideElement(textElement);
  }

  function closeModal() {
    if (userName) {
      closeBtn.style.display = "block";
      modal.style.display = "none";
      showElement(textElement);
    } else handleSubmit();
  }

  function handleSubmit() {
    modal.style.display = "none";
    showElement(textElement);
    userName = document.getElementById("userName").value;

    if (userName) {
      textElement.innerText = texts[1] + " " + userName;
    } else {
      alert("กรุณาใส่ชื่อ");
      openModal();
    }
  }

  submitBtn.addEventListener("click", handleSubmit);
  openModal();
}

function hideModal() {
  modal.style.display = "none";
}

if (texts[0]) {
  showElement(dinoWalk);
  dinoWalk.classList.remove("dino");
}

// change dino pic
function replaceDino(src) {
  dinoWalk.src = src;
}

function replaceBee(src) {
  bee.src = src;
}

function handleDinoMovement() {
  textElement.addEventListener(
    "click",
    () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        dinoWalk.style.left = "40%";
      } else {
        dinoWalk.style.left = "145%";
      }
    },
    { once: true }
  );
}

//feeling options
function hideFeeling() {
  hideElement(feelings00);
  hideElement(feelings01);
  hideElement(feelings02);
  hideElement(feelings03);
  hideElement(feelings04);
}

function showFeeling() {
  showElement(feelings00);
  showElement(feelings01);
  showElement(feelings02);
  showElement(feelings03);
  showElement(feelings04);
  handleFeelingClick();
}
function handleInnerFeeling(flowerType) {
  hideFeeling();
  showElement(textElement);
  textElement.innerText = texts[2];

  textElement.addEventListener(
    "click",
    () => {
      positiveSpeechBubble.style.display = "none";
      showElement(overlay);
      hideFeeling();
      hideFinalOption();
      hideElement(textElement);
      showElement(flowerType);
    },
    { once: true }
  );
}

// remove all flower from showing
function removeFlower() {
  hideElement(yellowFlower);
  hideElement(blueFlower);
  hideElement(pinkFlower);
  hideElement(whiteFlower);
  hideElement(honeyJar);
}

function showFinalOption() {
  showElement(yesAnswer);
  showElement(noAnswer);
}

function hideFinalOption() {
  hideElement(yesAnswer);
  hideElement(noAnswer);
  hideElement(honeyJarYes);
}

// change initial text
let currentIndex = 0;

function handleChangeText() {
  if (currentIndex < texts.length) {
    textElement.innerText = texts[currentIndex++];
  }

  if (currentIndex === 1) {
    replaceDino("dino-run.gif");
    handleDinoMovement();
    dinoWalk.classList.add("dino");
    showElement(dinoWalk);
    textElement.addEventListener("click", getUserName, { once: true });
  } else if (currentIndex === texts.length) {
    hideElement(textElement);
    showFeeling();
  }
}

textElement.addEventListener("click", handleChangeText);

//create random generate card when the flower is clicked
function getRandomMessage(cardType) {
  const messages = cards[cardType].message;
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// feeling tired
function handleFeelingClick() {
  feelings00.addEventListener("click", () => {
    replaceDino("dino-sleep.gif");
    handleInnerFeeling(whiteFlower);

    whiteFlower.addEventListener("click", handleWhiteFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
  });

  //feeling sad
  feelings01.addEventListener("click", () => {
    handleInnerFeeling(blueFlower);
    replaceDino("dino-sad.gif");

    blueFlower.addEventListener("click", handleBlueFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
  });

  feelings02.addEventListener("click", () => {
    replaceDino("dino-sad.gif");
    handleInnerFeeling(yellowFlower);

    yellowFlower.addEventListener("click", handleYellowFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
  });

  // pink flower
  feelings03.addEventListener("click", () => {
    replaceDino("dino-sad.gif");
    handleInnerFeeling(pinkFlower);

    pinkFlower.addEventListener("click", handlePinkFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
    hideElement(finalTextEl);
  });

  // honey jar
  feelings04.addEventListener("click", () => {
    replaceDino("dino-laugh.gif");
    handleInnerFeeling(honeyJar);

    honeyJar.addEventListener("click", handleHoneyJar);
    btnCloseCard.addEventListener("click", handleHoneyJarClose, { once: true });
  });
}

//show clover flower
positiveSpeechBubble.addEventListener("click", displayCloverCard);

function displayCloverCard() {
  hideElement(negativeTextEl);
  hideFinalOption();
  positiveSpeechBubble.style.display = "none";
  removeFlower();
  modal.style.display = "none";
  hideElement(finalTextEl);
  hideFeeling();
  hideElement(textElement);
  showElement(overlay);
  showElement(cloverText);

  cloverText.addEventListener("animationend", () => {
    hideElement(cloverText);
    showElement(blueClover);
    showElement(yellowClover);
    showElement(greenClover);
    handleCloverClose();
  });
}

function handleCloverClose() {
  blueClover.addEventListener("click", () => {
    handleFinalQuestion();
    handleCloverClick();
  });

  yellowClover.addEventListener("click", () => {
    handleFinalQuestion();
    handleCloverClick();
  });

  greenClover.addEventListener("click", () => {
    handleFinalQuestion();
    handleCloverClick();
  });

  btnCloseCard.addEventListener("click", () => {
    removeFlower();
    replaceDino("dino-jump.gif");
    hideElement(blueClover);
    hideElement(yellowClover);
    hideElement(greenClover);
    hideElement(overlay);
    hideElement(textElement);
    showElement(cloverEndText);
    cloverEndText.textContent = "อย่าลืมลองทำตามดูนะ! 😉";

    cloverEndText.addEventListener("animationend", () => {
      showElement(overlay);
      showElement(homeBtn);
    });
  });
}

function handleCloverClick() {
  showElement(cardDisplay);
  cardDisplay.querySelector("p").innerText = getRandomMessage("cloverMessage");
}

// yellow card message given up
function handleYellowFlower() {
  showElement(cardDisplay);
  cardDisplay.querySelector("p").innerText = getRandomMessage("yellowCard");
}

// blue card message sad
function handleBlueFlower() {
  showElement(cardDisplay);
  cardDisplay.querySelector("p").innerText = getRandomMessage("blueCard");
}

// white card message tired
function handleWhiteFlower() {
  showElement(cardDisplay);
  cardDisplay.querySelector("p").innerText = getRandomMessage("whiteCard");
}

// pink card message tired
function handlePinkFlower() {
  showElement(cardDisplay);
  cardDisplay.querySelector("p").innerText = getRandomMessage("pinkCard");
}
function handleHoneyJar() {
  showElement(cardDisplay);
  cardDisplay.querySelector("p").innerText = getRandomMessage("honeyJar");
  hideElement(finalTextEl);
  hideElement(honeyJarYes);
  hideElement(noAnswer);
  handleHoneyJarClose();
}

//close card
const closeCard = function () {
  hideElement(cardDisplay);
};

btnCloseCard.addEventListener("click", closeCard);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !cardDisplay.classList.contains("hidden")) {
    closeCard();
  }
});

function handleAfterFlowerQuestion() {
  hideElement(overlay);
  removeFlower();
  hideElement(textElement);
  finalTextEl.textContent = "เธอชอบดอกไม้ของฉันไหม?" + " " + userName + " 😊";
  showElement(finalTextEl);

  finalTextEl.addEventListener(
    "click",
    () => {
      hideElement(finalTextEl);
      handleFinalQuestion(); // remove flower bubble speech
      showFinalOption(); // show yes no question
      handleFlowerYesAnswer(); // handle yes no answer
      handleFlowerNoAnswer();
    },
    { once: true }
  );
}

function handleFlowerYesAnswer() {
  yesAnswer.addEventListener(
    "click",
    () => {
      hideElement(finalTextEl);
      hideFinalOption();
      removeFlower();
      replaceDino("dino-jump.gif");
      changeText();
    },
    { once: true }
  );

  const finalTexts = [
    "ฉันดีใจมากเลยที่เธอชอบมัน",
    "เข้ามาใกล้ๆสิ",
    `เธอรู้อะไรไหม ${userName} เธอเป็นคนที่เก่งมากๆ และพิเศษที่สุดในโลกเลย`,
    "ขอกอดหน่อยจิ",
    "ฉันรักเธอนะ",
    "ฉันรักเธอนะ",
  ];

  let finalCurrentIndex = 0;

  function changeText() {
    showElement(finalTextEl);

    if (finalCurrentIndex < finalTexts.length) {
      finalTextEl.innerText = finalTexts[finalCurrentIndex++];
    }

    if (finalCurrentIndex === 4) {
      replaceBee("bee-hug.gif");
    } else if (finalCurrentIndex === finalTexts.length) {
      textDisplay();
    }

    finalTextEl.addEventListener("click", changeText, { once: true });
  }
}

function handleFlowerNoAnswer() {
  noAnswer.addEventListener(
    "click",
    () => {
      positiveSpeechBubble.style.display = "block";
      hideFeeling();
      removeFlower();
      hideFinalOption();
      handleNegativeAnswerText();
    },
    { once: true }
  );

  const negativeAnswerText = [
    "ฉันขอโทษ... 🙁 \n เธออยากเลือกมันใหม่หรือเปล่า?",
    "ตอนนี้เธอรู้สึกยังไงหรอ " + userName + " ?",
  ];

  let negativeTextCurrentIndex = 0;

  function handleNegativeAnswerText() {
    showElement(negativeTextEl);
    hideFeeling();

    if (negativeTextCurrentIndex < negativeAnswerText.length) {
      negativeTextEl.innerText = negativeAnswerText[negativeTextCurrentIndex++];
    } else if (negativeTextCurrentIndex === negativeAnswerText.length) {
      showFeeling();
      handleFinalQuestion();
      hideFinalOption();
      handleFeelingClick();
    }

    negativeTextEl.addEventListener("click", handleNegativeAnswerText, {
      once: true,
    });
  }
}

function handleHoneyJarClose() {
  removeFlower();
  showElement(textElement);
  hideElement(finalTextEl);
  textElement.innerText = "ชอบมุขฉันไหม?" + " " + userName + " 😊";

  textElement.addEventListener("click", () => {
    hideFeeling();
    showElement(noAnswer);
    showElement(honeyJarYes);
    honeyJarYes.textContent = "ชอบๆ เอาอีก!";
    handleFinalQuestion();
  });

  btnCloseCard.addEventListener("click", () => {
    honeyJarYes.addEventListener(
      "click",
      () => {
        hideElement(textElement);
        handleHoneyJar(); // show card from honey jar
      },
      { once: true }
    );

    noAnswer.addEventListener(
      "click",
      () => {
        handleFlowerNoAnswer();
      },
      { once: true }
    );
  });
}

//remove message and flower
function handleFinalQuestion() {
  hideElement(textElement); // hide text
  hideElement(finalTextEl);
  removeFlower(); // hide flower
  hideElement(negativeTextEl); // hide text
}

function textDisplay() {
  showElement(overlay);
  hideElement(finalTextEl);

  let dinoEndText = "DO NOT WORRY ";

  dinoText.textContent = dinoEndText + userName;
  showElement(dinoText);

  dinoText.addEventListener(
    "animationend",
    () => {
      showElement(beeText);

      beeText.addEventListener(
        "animationend",
        () => {
          hideElement(beeText);
          hideElement(dinoText);
          showElement(homeBtn);
        },
        { once: true }
      );
    },
    { once: true }
  );
}
