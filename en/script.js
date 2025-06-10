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
      document.body.style.backgroundImage = "url('src/night-mobile.png')";
    
      } else {

      moon.classList.add("moon-container");
      moon.classList.remove("hidden");
      cloud.classList.remove("cloud-container");
      cloud.classList.add("hidden");
      document.body.style.backgroundImage = "url('src/night-bg.png')";
    }

  } else {

    if (window.matchMedia("(max-width: 768px)").matches) {

      cloud.classList.remove("hidden");
      cloud.classList.add("cloud-container");
      moon.classList.add("hidden");
      document.body.style.backgroundImage = "url('src/background-mobile-2.png')";
    
      } else {

      cloud.classList.remove("hidden");
      cloud.classList.add("cloud-container");
      moon.classList.add("hidden");
      document.body.style.backgroundImage = "url('src/background-vent-flower.png')";
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
    document.body.style.backgroundImage = "url('src/night-mobile.png')";
  } else {
    moon.classList.add("moon-container");
    showElement(moon);
    cloud.classList.remove("cloud-container");
    hideElement(cloud);
    document.body.style.backgroundImage = "url('src/night-bg.png')";
  }
});

moon.addEventListener("animationend", () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    showElement(cloud);
    cloud.classList.add("cloud-container");
    hideElement(moon);
    document.body.style.backgroundImage = "url('src/background-mobile-2.png')";
  } else {
    showElement(cloud);
    cloud.classList.add("cloud-container");
    hideElement(moon);
    document.body.style.backgroundImage =
      "url('src/background-vent-flower.png')";
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
  "Yes! I mean you.",
  "How are you doing today " + userName + " ?",
  "Come here, \n I have something for you!",
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
      "Take a walk in nature. 🌳☀️",
      "Meditate for 10 minutes. 🧘✨",
      "Call a friend or family member. 👨‍👩‍👧‍👦📞",
      "Read a good book. ✨📗",
      "Practice yoga. ✨🧘‍♀️",
      "Cook a healthy meal. 🥗🥦",
      "Listen to uplifting music. 🎼🎧",
      "Dance like no one is watching. 💃🕺",
      "Watch a funny movie or show. 📺🤣",
      "Plant a garden. 🌱👩‍🌾",
      "Exercise regularly. 🤾‍♀️🏃‍♀️",
      "Practice deep breathing exercises. 🧘✨",
      "Organize your living space. 🧹✨",
      "Take a relaxing bath. 🛀🚿",
      "Paint or draw something creative. 🎨🖼️",
      "Make a gratitude list. 🖋️📒",
      "Try a new recipe. 🍳✨",
      "Spend time with pets. 🐶💞",
      "Go for a bike ride. 🚵🏔️",
      "Visit a new city or town. 🗼🚉",
      "Go stargazing. 🌠💫",
      "Do a random act of kindness. 😇✨",
      "Have a picnic in the park. 🧺☀️",
      "Visit a zoo or aquarium. 🦁🦓",
      "Go for a swim. 🏊🏞️",
      "Relax on a beach. 🏖️🩴",
      "Bake cookies and share them. 🍪🧁",
      "Start a DIY project. 🎨🪅",
      "Go hiking. (even just a short one) 🚶‍♂️⛰️",
      "Visit a botanical garden. 🦋🌷🌻🌼",
      "Try out a new sport. 🤾‍♀️🏃‍♀️🏊",
      "Do a puzzle. 🧩💡",
      "Watch the sunrise or sunset. ☀️🌄",
      "Go to a concert or live performance. 🎙️🎻",
      "Practice positive affirmations. 💚🌻 \n like.... I am capable of achieving great things and deserve all the success that comes my way. \n Yes! I believe you do. 💚😉",
      "Visit a historical site. 🏰",
      "Try meditation with a guided app. (Or even by yourself when you are a pro already 😉🧘) ",
      "Join a fitness class. 🧘🤾‍♂️🤸",
      "Spend a day without digital devices. 📱📵",
      "Visit a friend or relative you haven't seen in a while. 👨‍👩‍👧‍👦",
      "Attend a local fair or festival. 🎆🎏",
      "Go on a road trip. 🚙🏔️",
      "Create a list of life goals. 🖋️📒",
      "Go kayaking or canoeing. 🛶🏖️ \n Trust me. It's a lot of fun!",
      "Host a game night. 🎯🎮",
      "Visit a new restaurant or café. 🍵🍰",
      "Learn about a different culture. 🎎🎃",
      "Take a scenic drive. 🚙🏔️",
      "Visit a nearby beach or lake. 🏔️🏖️",
      "Go to a comedy show. 📺😂",
      "Try aromatherapy. 💆✨",
      "Write a thank you note to someone. 🙏😊",
      "Try a new workout routine. 🤾‍♂️🤸",
      "Have a movie marathon. 🍿🎞️",
      "Start a new collection. 🐚📷",
      "Create a photo album. 📷🎞️",
      "Visit an amusement park. 🎡🛝",
      "Host a barbecue. 🍖🍗",
      "Visit a planetarium. 💫🔭",
      "Go camping. 🏕️💫",
      "Reflect on your achievements and set new goals. ⭐💚",
    ],
  },
  yellowCard: {
    message: [
      "Hey, there! Feeling like you're trying to solve a Rubik's cube blindfolded? You're tackling life's puzzles like a pro! Take a breather, grab a snack (preferably one that doesn't require an instruction manual), and remember, even the best adventurers take a wrong turn now and then. Embrace the challenge with a grin and a wink—you're crafting your own epic saga, filled with twists and turns that make for the best stories. Keep pushing forward with your unique flair. You've got this! 🎲😄",
      "Hey there! Just wanted to remind you how amazing you are. The world is " +
        "a brighter place with you in it, and your smile has the power to light " +
        "up even the cloudiest day. Keep shining, because you're doing great! 🌟🌼",
      "Every sunrise brings new possibilities, every smile spreads warmth, and every heartbeat reminds us that life is a beautiful journey waiting to be embraced.",
      "Hey, warrior! Life's challenges are just stepping stones to greatness. Every setback is a setup for an even greater comeback. Remember, the best stories come from the toughest battles, and you're the hero of your own epic tale. Keep your chin up, your heart strong, and your spirit unbreakable. You've got this! 🛡️🔥",
      "Hey, incredible person! When life feels heavy, remember that you don't have to carry it all at once. It's okay to pause and take care of yourself. You've got an amazing heart and a spirit that's unbreakable. Each day is a new opportunity to find joy in the little things. Believe in yourself, because you're capable of wonderful things. Keep moving forward, one small step at a time. 🌟💖",
      "Hey there, warrior! Remember, even the darkest nights end with a sunrise. You've overcome challenges before, and this is just another chapter in your incredible journey. Take a deep breath, believe in yourself, and know that brighter days are ahead. You're stronger than you think. Keep going—you've got this! 💪🌅",
      "Stay strong and keep believing in yourself!",
      "Hey,  tough cookie! When you feel like giving up, remember why you started. Every setback is a setup for a comeback. Take a moment to recharge, then keep moving forward. You're capable of amazing things. Believe in yourself—you're closer to success than you think! 🌟💪",
      "Hey, unstoppable! You're stronger than you know. Take a deep breath, dust yourself off, and keep going. The best is yet to come. You've got this! 💫💪",
      "Hey, superstar! Even on tough days, remember: you've survived 100% of your worst days so far. You're resilient and capable of turning things around. Take a deep breath, believe in yourself, and keep moving forward. You've got this! 💫💪",
      "Hey there, warrior! When you feel like giving up, remember that every storm eventually passes. You've weathered tough times before, and you're stronger because of it. Take a moment to breathe, gather your courage, and take another step forward. You have the resilience and determination to overcome any challenge. Keep pushing forward—your perseverance will pay off! 💫💪",
      "Hey, hang in there! Tough times don't last, but tough people do. You've got this!",
      "Hey, don't give up now. You're stronger than you think, and this moment is just a stepping stone to your success. Keep going—you've got the power to overcome this!",
      "Hey there! Just like how winter gives way to the warmth of spring, your current challenges will pave the way for brighter days ahead. Embrace this season of growth and resilience, knowing that every cold moment is leading you closer to the warmth of success and happiness. Keep pushing forward—your springtime is just around the corner!",
      "Hey, even in the coldest of winters, remember that each day brings us closer to the warmth of spring. Your perseverance now is like the promise of budding flowers after a long frost. Keep nurturing your dreams and staying strong—soon enough, the sun will shine brightly on your path, illuminating all that you've worked for. 🌻❄️",
      "Hey there, hang in there! Tough moments pass, but your resilience lasts forever. Take a moment to recharge, then keep pushing forward with strength and determination. You've come so far, and brighter days are just around the corner!",
      "Hey, incredible person! Don't let those clouds dim your shine. Every challenge you conquer adds another sparkle to your journey. Keep rocking those challenges like a boss—you've got this! ⭐✨",
      "Hey, tough cookie! Feeling like throwing in the towel? Nah, you've come too far for that! Take a breather, refuel your spirit, and get back in there. You've got the grit and determination to overcome anything that comes your way! 💚🍪",
      "Hey there, don't let the bumps in the road slow you down! You're like a superhero dodging obstacles. Take a moment to recharge your powers, then zoom ahead with renewed strength and a smile. You've got what it takes to conquer anything!",
      "Hey, tough stuff! Feeling the pressure? That's just life testing your superhero powers. Take a deep breath, put on your cape, and show those challenges who's boss. You're unstoppable!",
      "Hey, stranger! Life's a bit like cooking—sometimes you hit a snag, but that's how you whip up the best flavors. Take a moment to spice things up, gather your ingredients, and keep stirring up your dreams. You've got the recipe for success, and each challenge is just another chance to craft something extraordinary! 🍽️🍳",
      "Hey, adventurer! Life's like a hike through rough terrain—challenging, but the view at the top is worth it. Take a breather, enjoy the scenery, and keep trekking with determination. You're on a journey filled with twists and turns, and every step forward brings you closer to your peak. 🏔️🌄",
      "Hey, navigator! Life's journey is like sailing through changing seas—sometimes calm, sometimes stormy. Take a moment to adjust your sails, embrace the winds of change, and navigate through challenges with confidence. You're charting a course towards brighter horizons, and each wave you conquer strengthens your resilience.",
      "Hey there, life explorer! Imagine life as an epic adventure novel with plot twists and daring challenges. When you face a plot twist, pause for a moment, flip to the next chapter, and embrace the thrill of overcoming obstacles. Your story is unfolding beautifully—you're the fearless protagonist destined for triumph!",
      "Hey, life adventurer! Imagine navigating through life's maze, where every twist and turn presents a new challenge to overcome. Pause to appreciate the scenery, gather your courage, and continue exploring with determination. Each hurdle you clear adds depth to your journey and strength to your spirit. Keep exploring, because the treasures of success await at the end of your path! You are a wonderful soul.",
    ],
  },
  blueCard: {
    message: [
      "Hey there, it's okay to feel this way sometimes. Remember, clouds pass and the sun always returns. You're stronger than you think, and brighter days are ahead. Take it one step at a time, and know that you're not alone in this journey. You've got the resilience to overcome this moment. Keep holding on—you're capable of amazing things!",
      "It's absolutely okay to cry and let it out. Emotions are a natural part of being human, and expressing them is a sign of strength, not weakness. Allow yourself the space to feel and release those emotions. It's a healing process that helps you to move forward stronger and more resilient than before. You're doing great, and you are not in this alone, I'm here to support you.",
      "Hey there, it's okay to feel down sometimes. Life has its ups and downs, and it's during these moments that we learn and grow the most. Take a deep breath and focus on the small things that bring you joy—whether it's a warm cup of tea, a favorite song, or a comforting hug from a loved one. This phase won't last forever, and you have the strength within you to rise above it. You're resilient, capable, and surrounded by support. Keep moving forward; brighter days are just around the corner. ☀️🌻",
      "Hey, I understand things might feel heavy right now, but remember, storms don't last forever. Take a moment to pause and recharge with something that brings you peace—a walk in nature, a good book, or even just a deep breath of fresh air. Trust that this moment is just a chapter in your journey, not the whole story. You've overcome challenges before, and you have the strength to overcome this one too. Keep your chin up, stay hopeful, and know that you're on the path to brighter days ahead.☀️💚",
      "Hey, I know it's tough right now, but remember, every cloud has a silver lining. Take a moment to focus on what you're grateful for—big or small. Whether it's a sunny day, a kind gesture from a friend, or a peaceful moment of solitude, these little sparks of positivity can help brighten your day. You're stronger than you realize, and this moment of challenge is an opportunity for growth and resilience. Keep looking forward with hope, because better days are waiting just around the corner. 🌻✨",
      "Hey, I want you to know that it's okay to feel this way sometimes. Life has its valleys and peaks, and right now, you're in a valley. But valleys are where the most beautiful flowers bloom. Take a moment to breathe deeply and embrace the stillness. Reflect on your journey so far and the strength you've shown in overcoming challenges. Each step forward, no matter how small, is a testament to your resilience and inner power. Keep your head up, keep going, and remember that even in the darkest moments, there's always a glimmer of hope waiting to guide you forward. 🌻🌄",
      "Hey there, I know things feel overwhelming, but you're stronger than you realize. Take a deep breath and focus on the present moment. Allow yourself to let go of what you can't control and embrace what brings you comfort—a warm cup of tea, a good book, or the company of a loved one. This moment of difficulty is temporary, and you have the resilience to overcome it. Trust in your ability to weather this storm and know that brighter skies are just beyond the horizon. Keep pushing forward with faith in yourself and the journey ahead. 🌄🌻",
      "I'm sorry you're feeling down. Remember, storms don't last forever. " +
        "You're stronger than you know, and brighter days are ahead. Take one small step at a time, and soon you'll be walking in sunshine again.",
      "When sadness clouds your skies, remember that storms pass and the sun always shines again. " +
        "Your strength is greater than this momentary feeling. Embrace small joys, for they are the stepping stones to brighter days. You are resilient, " +
        "and each challenge you overcome adds to your inner strength. Hold onto hope and keep moving forward—you are capable of turning sadness into strength and finding happiness once more.",
      "Hey, wonderful soul! Remember, every challenge you face is just a stepping stone to a stronger, wiser you. Life's a journey, and every twist and turn brings you closer to discovering just how incredible you truly are. Keep your head up and your heart open—beautiful days are ahead! 🌈✨",
      "Hello, beautiful spirit! Life can be tough, but so are you. Every day is a new opportunity to create something amazing, and you have the power to make it happen. Believe in yourself and your endless potential. You are loved, you are important, and you are capable of incredible things. Keep going, you're doing great! 🌻💪",
      "Life's a wild ride, and you're the one steering. Sure, there are bumps and detours, but that's what makes the journey exciting. Embrace the chaos, dance in the rain, and laugh at the little things. You've got the spark to turn any moment into an adventure. Keep being awesome and let your inner light guide you through! 🚀🌟",
      "Hey there, amazing soul! It's okay to feel down sometimes. Remember, every storm runs out of rain. Your feelings are valid, but they don't define you. You have the power to rise above any challenge. Take a deep breath, and know that brighter days are ahead. You are loved, you are valued, and you are stronger than you think. One step at a time, you'll get through this. 🌈💖",
      "Hey, beautiful soul! It's okay to have bad days; they make the good ones even sweeter. Remember, you've faced tough times before and come out stronger each time. You are resilient, brave, and capable of overcoming anything life throws your way. Take it one day at a time, and don't forget to be kind to yourself. You matter, and your happiness is important. 🌸💫",
      "Hey, incredible person! When life feels heavy, remember that you don't have to carry it all at once. It's okay to pause and take care of yourself. You've got an amazing heart and a spirit that's unbreakable. Each day is a new opportunity to find joy in the little things. Believe in yourself, because you're capable of wonderful things. Keep moving forward, one small step at a time. 🌟💖",
      "Hey, wonderful heart! Life's toughest moments often lead to the most beautiful transformations. Remember, even in your darkest times, you are growing and evolving into an even stronger version of yourself. Surround yourself with love and positivity, and let hope be your guiding light. You have an inner strength that can conquer anything. Keep your head up and your heart open—better days are on their way. 🌷✨",
      "Hey, radiant soul! When life feels like a rollercoaster, remember you're the fearless rider steering through twists and turns. Every dip is a chance to rise higher. Embrace each moment as a lesson in resilience and growth. You're not just surviving—you're thriving. Keep your spirit light, your heart open, and let each challenge sculpt you into the amazing person you're becoming. The world is brighter with your unique spark! 🎢✨",
    ],
  },
  whiteCard: {
    message: [
      'Hey there, tired soul! Remember, tired spelled backward is "derit," which makes no sense, just like being tired when there\'s so much world to conquer! But hey, even superheroes need a nap sometimes. Rest up, recharge those superpowers, and get ready to tackle the world again. You got this, you sleepy legend! 💤💪',
      "When you're tired of everything, it's a sign you've been strong for too long. " +
        "Take a moment to rest, but don't lose sight of your strength. This weariness is temporary; it's part of your journey toward greater resilience and wisdom. Keep going—you're closer to clarity and renewal than you realize.",
      "When everything feels overwhelming and you're exhausted, remember that even the darkest nights eventually give way to dawn. Take a deep breath, gather your strength, and keep moving forward. Each step, no matter how small, brings you closer to brighter days ahead." +
        "You've come this far you have the resilience to conquer this too.",
      "Hey you, tired champ! Feeling like a panda who just can't bear another minute? Don't worry, even the Energizer Bunny needs to recharge its batteries. Take a break, sip some coffee (or tea if you're fancy), and remember, you're not lazy, you're just on energy-saving mode. Soon enough, you'll be back to being your awesome, lively self. Until then, embrace the nap life like a pro! 😄💤",
      "Hey, exhausted superstar! Feeling like a Monday morning on a Tuesday afternoon? It's okay to feel like you're running on fumes; even rocket fuel needs a refill now and then! Take a moment to imagine yourself as a majestic sloth, gracefully moving through life at your own pace. Embrace the chaos with a side of laughter and remember, even your tired moments are legendary tales in the making. You've got this—keep rocking on! 🚀😄",
      "Hey there, weary traveler! Feeling like you've been stuck in the slow lane of life's autobahn? Don't worry, even turtles eventually reach their destination. Take a breather, sip on some \"liquid optimism\" (coffee, obviously), and remember, even if life gives you lemons, you can always make a lemon-scented bubble bath. Embrace the chaos with a wink and a grin—after all, you're the master of your own sitcom, and this episode just needs a quirky plot twist. Keep calm and carry on, you magnificent human! 🐢☕️😄",
      "Hey, worn-out wanderer! Feeling like you're stuck in the spin cycle of life's laundry day? Hang in there, even socks find their match eventually! Take a breather, treat yourself to a spontaneous dance party in your living room (who cares if the cat judges?), and remember, even Picasso had days when his paintings looked like potato faces. Embrace the chaos with a wink and a smile—you're the star of your own improv comedy, and this scene just needs a goofy punchline. Keep rocking those tired vibes like a boss! 🧦🕺😄",
      "Hey there, weary soul! Feeling like you've been stuck in a traffic jam on the highway of life? Don't worry, even GPS gets confused sometimes. Take a pit stop, grab a snack (preferably one that requires minimal effort to open), and remember, even superheroes have days when they forget their capes. Embrace the chaos with a shrug and a chuckle— Keep calm and laugh on, you fabulous soul! 🚗🍿😄",
    ],
  },
  pinkCard: {
    message: [
      "In the symphony of life, every note matters, even the ones that sound off-key. Disappointments are like unexpected rests in music—they give us pause to reflect, adjust, and compose a more harmonious future. Embrace these moments as opportunities to fine-tune your resilience and creativity. Remember, the melody of your journey isn't defined by a single setback but by the courage and grace with which you continue to play on. Keep your heart open to the rhythm of possibilities, and let your unique song unfold with each step forward.",
      "When life gives you disappointments, turn them into discoveries. Each challenge is a chance to uncover hidden strengths and unexpected opportunities. Just as the darkest nights reveal the brightest stars, your setbacks can illuminate new paths forward. Embrace this moment as part of your journey, knowing that every step, even the ones that seem backward, is shaping you into the person you are meant to become. Keep your spirit resilient, your mind open, and your heart hopeful. The best chapters of your story are still waiting to be written.",
      "When disappointment knocks on your door, greet it with a smile and a firm resolve. It's not the end of your journey but a detour leading you to unexpected blessings. Like a gardener tending to soil before a bountiful harvest, use this time to nurture your dreams and cultivate patience. Trust that every setback is a setup for a comeback. You have the strength, wisdom, and resilience to rise above any challenge. Keep moving forward with unwavering faith in your journey and the beauty of what lies ahead.",
      "When disappointment knocks you down, let resilience lift you up. Think of setbacks as chapters that build the strength of your story. Each obstacle is a chance to rewrite the narrative with courage and determination. Embrace the journey, knowing that every twist and turn is shaping you into a more resilient and compassionate person. You are capable of overcoming anything that comes your way. Keep your faith strong, your heart open to possibilities, and your spirit unbreakable. Your journey is unique, and every step forward is a testament to your inner strength and perseverance.",
      "Life's setbacks are like waves in the ocean—temporary and part of the journey. Ride them with resilience, knowing that calmer waters and brighter horizons await. Your strength and perseverance will guide you through, turning obstacles into stepping stones toward your dreams.",
      "When disappointment weighs heavy on your heart, remember that it's just a temporary pause in your journey, not the end of the road. Use this moment to gather your strength and courage. Like a river carving through stone, let setbacks shape you into a stronger, more resilient version of yourself. Embrace the lessons learned and keep moving forward with unwavering determination. Your dreams are within reach, and with each step forward, you're closer to realizing them. Trust in your resilience and believe in the power of perseverance. You have the strength to overcome any challenge that comes your way.",
      "When disappointment knocks you down, let it be a reminder that you have the strength to rise again, even stronger than before. Like a seed planted in adversity, you have the potential to grow and bloom into something remarkable. Embrace setbacks as opportunities for personal growth and transformation. Keep your faith alive and your spirit resilient. Believe in your ability to navigate through challenges and emerge victorious. Your journey is a testament to your courage and perseverance. Trust in the process, stay positive, and keep striving toward your dreams. You are capable of achieving greatness.",
      "Dear soul, when disappointment knocks, let it be a gentle reminder of your unwavering strength. Like the sun behind the clouds, your resilience shines brightest in moments of adversity. Embrace setbacks as opportunities for growth and renewal. With each challenge overcome, you're sculpting a path toward a brighter tomorrow. Keep your faith steadfast, your spirit unyielding, and your heart open to new possibilities. Believe in the power of your dreams, for they are the compass guiding you toward limitless potential. Your journey is a testament to courage and perseverance—embrace it with grace, for greatness awaits.",
      "When disappointment fills your heart, remember that it's just a chapter in your story, not the conclusion. Embrace it as a turning point, where resilience and determination are forged. Like a river carving through stone, let setbacks shape your path to greater strength and clarity. Trust in your ability to navigate challenges, for each hurdle conquered brings you closer to the fulfillment of your dreams. Keep moving forward with unwavering faith in yourself and the journey ahead. Your resilience knows no bounds, and your potential is limitless.",
      "Hey, when life throws you a plot twist, grab some popcorn and enjoy the show! Think of challenges as surprise adventures that test your creativity and grit. Like a savvy explorer, every twist and turn uncovers new paths to conquer. Embrace the journey with curiosity and a sense of humor, knowing that each twist adds a chapter to your epic tale. Keep exploring, keep learning, and keep writing your story with courage and enthusiasm—you're the star of a blockbuster in the making!",
      "Hey you! When life plays a wild card, shuffle the deck and deal yourself a winning hand! Think of challenges as thrilling puzzles that sharpen your problem-solving skills. Like a master gamer, every level-up brings you closer to unlocking new achievements. Embrace the game with a grin and a wink, knowing that each challenge is a chance to flex your resilience muscles. Keep strategizing, keep aiming for that high score, because you've got all the power-ups you need to conquer any level!",
      "Hey sunshine! When life sprinkles a little challenge your way, grab an umbrella and dance in the rain! Think of obstacles as playful hurdles in your epic obstacle course. Like a fearless adventurer, each leap forward brings you closer to conquering new heights. Embrace the journey with a skip and a hop, knowing that every twist and turn is a chance to showcase your resilience and grace. Keep shining bright and keep savoring the adventure—you've got all the zest and spirit to turn any gloomy day into a sunny delight!",
      "Hey there! When life serves you lemons, squeeze them into a refreshing glass of resilience! Think of challenges as spicy ingredients in the recipe of your life's journey. Like a skilled chef, each unexpected twist adds flavor and depth to your story. Embrace the kitchen of life with creativity and a pinch of laughter, knowing that every hurdle is a chance to whip up something amazing. Keep stirring, keep tasting, because you've got the recipe for success right in your hands!",
      "Hey there! When life hands you puzzles, get excited—it's time to flex your problem-solving muscles! Think of challenges as thrilling adventures in the game of life. Like a cunning player, every twist and turn unlocks new levels of skill and strategy. Embrace the challenge with a playful spirit and a determination to win, knowing that each hurdle conquered adds another victory to your scorecard. Keep playing your best game and keep aiming high—you've got all the moves to beat any challenge that comes your way!",
      "Hey there! When life's game gets a bit tricky, remember, you've got all the cheat codes hidden within you! Think of challenges as bonus levels that test your skills and unlock new achievements. Like a savvy gamer, every hurdle is a chance to level up and conquer the next big boss. Embrace the adventure with a grin and a playful spirit, knowing that every challenge mastered brings you closer to winning the ultimate prize—your dreams! Keep playing with determination and joy—you're the champion of your own story, and victory is just around the corner!",
      "Hey adventurer! When life presents a curveball, grab your map and see it as a new path to explore! Think of challenges as thrilling quests that unveil hidden treasures of resilience and growth. Like an intrepid explorer, each obstacle is an opportunity to discover new strengths and insights. Embrace the journey with a sense of curiosity and determination, knowing that every challenge conquered adds to the richness of your adventure. Keep navigating with courage and optimism—you're on an epic quest toward greatness, and the thrill of discovery awaits around every corner!",
      "Hey there! When life throws you a surprise party, grab your dancing shoes and join the celebration! Think of challenges as unexpected guests who bring gifts of resilience and growth. Like a spontaneous dancer, each twist and turn becomes a chance to groove to the rhythm of life's beat. Embrace the party with a smile and a spirit of adventure, knowing that every setback is just a prelude to the next joyful moment. Keep dancing through life with joy and positivity—you've got the moves to turn any setback into a fantastic dance floor!",
    ],
  },
  honeyJar: {
    message: [
      "Why did the chicken join a band? \n Because it had the drumsticks.",
      "What do you call cheese that isn't yours? \n Nacho cheese.",
      "What do you call an alligator in a vest?\n An investigator.",
      "Why was the belt arrested? \n For holding up the pants.",
      "Why did the scarecrow win an award? \n Because he was outstanding in his field!",
      "Why did the golfer bring two pairs of pants?\n In case he got a hole in one!",
      "Why don't oysters donate to charity?\n Because they are shellfish!",
      "Why don't skeletons fight each other?\n They don't have the guts!",
      "Why did the bicycle fall over?\n Because it was two-tired!",
      "Why did the tomato turn red?\n Because it saw the salad dressing!",
      "Why don't some couples go to the gym? \n Because some relationships don't work out!",
      "Why did the coffee file a police report?\n It got mugged!",
      "I'm reading a book on anti-gravity. It's impossible to put down!",
      "I'm on a seafood diet. I see food and I eat it.",
      "What did one ocean say to the other ocean? Nothing, they just waved.",
      "What did one hat say to the other hat? You stay here, I'll go on ahead!",
      "What do you call a bear with no ears? B!",
      'What did the janitor say when he jumped out of the closet? "Supplies!"',
      "How do you make holy water? You boil the hell out of it!",
      "What do you call a pile of cats? A meow-tain!",
      "How does a scientist freshen their breath? With experi-mints!",
      "Did you hear about the kidnapping at the park? They woke up!",
      "What do you get when you cross a snowman and a vampire? Frostbite!",
      "How do you catch a squirrel? \n Climb a tree and act like a nut!",
      "Life is too short to be serious all the time. So, if you can't laugh at yourself, call me—I'll laugh at you!",
      "I'm trying to organize a space party, but it's been a real challenge. I can't even find a good atmosphere.",
      "I tried to make a belt out of watches, but it was a waist of time.",
      "I'm so good at sleeping that I can do it with my eyes closed.",
      "I would tell you a joke about an elevator, but it's an uplifting experience.",
      "I'm trying to lose weight, but it keeps finding me.",
      "I started a band called 999 Megabytes — we haven't gotten a gig yet.",
      "I tried to catch some fog yesterday, but I mist.",
      "Why don’t seagulls fly over the bay? \n Because then they’d be bagels.",
      "What's orange and sounds like a parrot? \n A carrot.",
      "Why did the banana go to the doctor?\n Because it wasn't peeling well.",
      "What do you call a bear with no teeth?\n A gummy bear.",
      'What did one wall say to the other wall? \n "I\'ll meet you at the corner."',
      "What kind of shoes do ninjas wear?\n Sneakers!",
      "Why was the stadium so cold?\n Because there were a lot of fans!",
      'What did the big flower say to the little flower?\n "What\'s up, bud?"',
      "Why was the broom late?\n It swept in.",
      "Why couldn't the bicycle stand up by itself?\n It was two-tired.",
      'What did one eye say to the other eye?\n "Between you and me, something smells."',
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

function displayCard() {
  showElement(cardDisplay);
  cardDisplay.style.display = "flex";
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
      alert("Please enter your name");
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
    replaceDino("src/dino-run.gif");
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
    replaceDino("src/dino-sleep.gif");
    handleInnerFeeling(whiteFlower);
    whiteFlower.addEventListener("click", handleWhiteFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
  });

  //feeling sad
  feelings01.addEventListener("click", () => {
    handleInnerFeeling(blueFlower);
    replaceDino("src/dino-sad.gif");
    blueFlower.addEventListener("click", handleBlueFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
  });

  feelings02.addEventListener("click", () => {
    replaceDino("src/dino-sad.gif");
    handleInnerFeeling(yellowFlower);
    yellowFlower.addEventListener("click", handleYellowFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
  });

  // pink flower
  feelings03.addEventListener("click", () => {
    replaceDino("src/dino-sad.gif");
    handleInnerFeeling(pinkFlower);
    pinkFlower.addEventListener("click", handlePinkFlower);
    btnCloseCard.addEventListener("click", handleAfterFlowerQuestion, {
      once: true,
    });
    hideElement(finalTextEl);
  });

  // honey jar
  feelings04.addEventListener("click", () => {
    replaceDino("src/dino-laugh.gif");
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
    replaceDino("src/dino-jump.gif");
    hideElement(blueClover);
    hideElement(yellowClover);
    hideElement(greenClover);
    hideElement(overlay);
    hideElement(textElement);
    showElement(cloverEndText);
    cloverEndText.textContent = "Don't forget to try that out! 😉";

    cloverEndText.addEventListener("animationend", () => {
      showElement(overlay);
      showElement(homeBtn);
    });
  });
}

function handleCloverClick() {
  displayCard();
  cardDisplay.querySelector("p").innerText = getRandomMessage("cloverMessage");
}

// yellow card message given up
function handleYellowFlower() {
  displayCard();
  cardDisplay.querySelector("p").innerText = getRandomMessage("yellowCard");
}

// blue card message sad
function handleBlueFlower() {
  displayCard();
  cardDisplay.querySelector("p").innerText = getRandomMessage("blueCard");
}

// white card message tired
function handleWhiteFlower() {
  displayCard();
  cardDisplay.querySelector("p").innerText = getRandomMessage("whiteCard");
}

// pink card message tired
function handlePinkFlower() {
  displayCard();
  cardDisplay.querySelector("p").innerText = getRandomMessage("pinkCard");
}
function handleHoneyJar() {
  displayCard();
  cardDisplay.querySelector("p").innerText = getRandomMessage("honeyJar");
  hideElement(finalTextEl);
  hideElement(honeyJarYes);
  hideElement(noAnswer);
  handleHoneyJarClose();
}

//close card
const closeCard = function () {
  cardDisplay.style.display = "none";
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
  finalTextEl.textContent = "Did you like my flower?" + " " + userName + " 😊";
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
      replaceDino("src/dino-jump.gif");
      changeText();
    },
    { once: true }
  );

  const finalTexts = [
    "I'm soooooo happy to hear that.",
    "Come closer to me.",
    `You know what, ${userName} you are the most wonderful thing in the world`,
    "Let me hug you.",
    "I love you",
    "I love you",
  ];

  let finalCurrentIndex = 0;

  function changeText() {
    showElement(finalTextEl);

    if (finalCurrentIndex < finalTexts.length) {
      finalTextEl.innerText = finalTexts[finalCurrentIndex++];
    }

    if (finalCurrentIndex === 4) {
      replaceBee("src/bee-hug.gif");
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
    "I'm sorry to hear that. 🙁 \n Would you like some more of them anyway?",
    "How are you feeling right now " + userName + " ?",
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
  textElement.innerText = "Did I make you laugh?" + " " + userName + " 😊";

  textElement.addEventListener("click", () => {
    hideFeeling();
    showElement(noAnswer);
    showElement(honeyJarYes);
    honeyJarYes.textContent = "Yes and I want more!";
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
