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
  "Ja! ich meine dich.",
  "Wie geht es dir heute " + userName + " ?",
  "Komm her,\n ich habe etwas für dich!",
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
      "Mache einen Spaziergang in der Natur. 🌳☀️",
      "Meditiere für 10 Minuten. 🧘✨",
      "Rufe einen Freund oder ein Familienmitglied an. 👨‍👩‍👧‍👦📞",
      "Lies ein gutes Buch. ✨📗",
      "Mache Yoga. ✨🧘‍♀️",
      "Koche eine gesunde Mahlzeit. 🥗🥦",
      "Höre aufbauende Musik. 🎼🎧",
      "Tanze, als ob niemand zusieht. 💃🕺",
      "Schaue einen lustigen Film oder eine Show. 📺🤣",
      "Pflanze einen Garten. 🌱👩‍🌾",
      "Trainiere regelmäßig. 🤾‍♀️🏃‍♀️",
      "Übe tiefe Atemübungen. 🧘✨",
      "Organisiere deinen Wohnraum. 🧹✨",
      "Nimm ein entspannendes Bad. 🛀🚿",
      "Male oder zeichne etwas Kreatives. 🎨🖼️",
      "Erstelle eine Dankbarkeitsliste. 🖋️📒",
      "Probiere ein neues Rezept aus. 🍳✨",
      "Verbringe Zeit mit Haustieren. 🐶💞",
      "Mache eine Fahrradtour. 🚵🏔️",
      "Besuche eine neue Stadt oder einen neuen Ort. 🗼🚉",
      "Sterne beobachten. 🌠💫",
      "Tue eine zufällige gute Tat. 😇✨",
      "Mache ein Picknick im Park. 🧺☀️",
      "Besuche einen Zoo oder ein Aquarium. 🦁🦓",
      "Gehe schwimmen. 🏊🏞️",
      "Entspanne dich am Strand. 🏖️🩴",
      "Backe Kekse und teile sie. 🍪🧁",
      "Starte ein DIY-Projekt. 🎨🪅",
      "Wandern gehen. (auch nur eine kurze Strecke) 🚶‍♂️⛰️",
      "Besuche einen botanischen Garten. 🦋🌷🌻🌼",
      "Probiere eine neue Sportart aus. 🤾‍♀️🏃‍♀️🏊",
      "Mache ein Puzzle. 🧩💡",
      "Schaue den Sonnenaufgang oder Sonnenuntergang an. ☀️🌄",
      "Gehe zu einem Konzert oder einer Live-Performance. 🎙️🎻",
      "Übe positive Affirmationen. 💚🌻 \n wie... Ich bin in der Lage, großartige Dinge zu erreichen, und verdiene allen Erfolg, der mir begegnet. \n Ja! Ich glaube, das tust du. 💚😉",
      "Besuche eine historische Stätte. 🏰",
      "Probiere Meditation mit einer geführten App aus. (Oder auch allein, wenn du schon ein Profi bist 😉🧘) ",
      "Nimm an einem Fitnesskurs teil. 🧘🤾‍♂️🤸",
      "Verbringe einen Tag ohne digitale Geräte. 📱📵",
      "Besuche einen Freund oder Verwandten, den du lange nicht gesehen hast. 👨‍👩‍👧‍👦",
      "Nimm an einem lokalen Fest oder Jahrmarkt teil. 🎆🎏",
      "Mache einen Roadtrip. 🚙🏔️",
      "Erstelle eine Liste mit Lebenszielen. 🖋️📒",
      "Gehe Kajak oder Kanu fahren. 🛶🏖️ \n Vertraue mir. Es macht viel Spaß!",
      "Veranstalte einen Spieleabend. 🎯🎮",
      "Besuche ein neues Restaurant oder Café. 🍵🍰",
      "Lerne eine andere Kultur kennen. 🎎🎃",
      "Mache eine landschaftlich schöne Fahrt. 🚙🏔️",
      "Besuche einen nahegelegenen Strand oder See. 🏔️🏖️",
      "Gehe zu einer Comedy-Show. 📺😂",
      "Probiere Aromatherapie aus. 💆✨",
      "Schreibe jemandem eine Dankeskarte. 🙏😊",
      "Probiere eine neue Trainingsroutine aus. 🤾‍♂️🤸",
      "Mache einen Film-Marathon. 🍿🎞️",
      "Beginne eine neue Sammlung. 🐚📷",
      "Erstelle ein Fotoalbum. 📷🎞️",
      "Besuche einen Vergnügungspark. 🎡🛝",
      "Veranstalte ein Barbecue. 🍖🍗",
      "Besuche ein Planetarium. 💫🔭",
      "Gehe campen. 🏕️💫",
      "Denk über deine Erfolge nach und setze dir neue Ziele. ⭐💚",
    ],
  },
  yellowCard: {
    message: [
      "Hey, du! Fühlst du dich, als würdest du versuchen, einen Rubik's Cube blind zu lösen? Du meisterst die Rätsel des Lebens wie ein Profi! Mach eine Pause, schnapp dir einen Snack (am besten einen, der keine Bedienungsanleitung benötigt), und denk daran, auch die besten Abenteurer machen ab und zu einen falschen Schritt. Nimm die Herausforderung mit einem Lächeln und einem Augenzwinkern an – du gestaltest deine eigene epische Saga, voller Wendungen und Überraschungen, die die besten Geschichten ausmachen. Geh mit deinem einzigartigen Stil weiter voran. Du schaffst das! 🎲😄",
      "Hey! Ich wollte dich nur daran erinnern, wie großartig du bist. Die Welt ist schöner mit dir darin, und dein Lächeln hat die Kraft, selbst den bewölktesten Tag zu erhellen. Bleib weiter so strahlend, denn du machst das großartig! 🌟🌼",
      "Jeder Sonnenaufgang bringt neue Möglichkeiten, jedes Lächeln verbreitet Wärme und jeder Herzschlag erinnert uns daran: Das Leben ist eine wunderschöne Reise, die darauf wartet, umarmt zu werden. 🌻☀️",
      "Hey, Krieger! Die Herausforderungen des Lebens sind nur Stufen zum Erfolg. Jeder Rückschlag ist eine Vorbereitung für ein noch größeres Comeback. Denke daran, die besten Geschichten entstehen aus den härtesten Kämpfen, und du bist der Held deines eigenen epischen Abenteuers. Halte den Kopf hoch, dein Herz stark und deinen Geist unerschütterlich. Du schaffst das! 🛡️🔥",
      "Hey, du! Wenn das Leben schwer wird, erinnere dich daran, dass du nicht alles auf einmal tragen musst. Es ist okay, innezuhalten und auf dich selbst aufzupassen. Du hast ein unglaubliches Herz und einen unerschütterlichen Geist. Jeder Tag ist eine neue Möglichkeit, Freude an den kleinen Dingen zu finden. Glaube an dich selbst, denn du bist zu wundervollen Dingen fähig. Gehe weiter voran, einen kleinen Schritt nach dem anderen. 🌟💖",
      "Hey, Krieger! Denke daran, dass selbst die dunkelste Nacht mit einem Sonnenaufgang endet. Du hast schon früher Herausforderungen gemeistert, und dies ist nur ein weiteres Kapitel in deiner unglaublichen Reise. Atme tief durch, glaube an dich selbst und wisse, dass hellere Tage vor dir liegen. Du bist stärker, als du denkst. Bleib dran - du schaffst das! 💪🌅",
      "Bleib stark und glaub weiterhin an dich selbst!",
      "Hey, hartes Kekschen! Wenn du dich fühlen solltest, als ob du aufgeben möchtest, erinnere dich daran, warum du angefangen hast. Jeder Rückschlag ist eine Vorbereitung für ein Comeback. Nimm dir einen Moment zum Auftanken, und dann geh weiter voran. Du bist zu großartigen Dingen fähig. Glaub an dich selbst - du bist näher am Erfolg, als du denkst! 🌟🍪💪",
      "Hey, du! Du bist stärker, als du denkst. Atme tief durch, klopf den Staub ab und mach weiter. Das Beste kommt noch. Du schaffst das! 💫💪",
      "Hey, Krieger! Wenn du das Gefühl hast aufzugeben, denke daran, dass jeder Sturm irgendwann vorübergeht. Du hast schon schwierige Zeiten überstanden und bist deshalb stärker geworden. Nimm dir einen Moment zum Durchatmen, sammle deinen Mut und mache einen weiteren Schritt nach vorne. Du hast die Widerstandsfähigkeit und Entschlossenheit, jede Herausforderung zu überwinden. Halte durch - deine Ausdauer wird sich auszahlen! 💫💪",
      "Hey, du! Auch an schwierigen Tagen, denke daran: Du hast 100% deiner schlimmsten Tage bisher überlebt. Du bist widerstandsfähig und fähig, die Dinge zu wenden. Nimm einen tiefen Atemzug, glaube an dich selbst und mach weiter. Du schaffst das! 💫💪",
      "Hey, halte durch! Schweren Zeiten dauern nicht an, aber starke Menschen schon. Du schaffst das! 💫💪",
      "Hey, gib jetzt nicht auf. Du bist stärker, als du denkst, und dieser Moment ist nur ein Sprungbrett zu deinem Erfolg. Mach weiter - du hast die Kraft, das zu überwinden!",
      "Hey du da! Genau wie der Winter dem warmen Frühling Platz macht, werden deine aktuellen Herausforderungen den Weg zu helleren Tagen ebnen. Umarme diese Zeit des Wachstums und der Widerstandsfähigkeit, in dem Wissen, dass jeder kalte Moment dich näher zur Wärme von Erfolg und Glück führt. Bleib dran - dein Frühling steht kurz bevor! 🌼🍃",
      "Hey, selbst in den kältesten Wintern, denke daran, dass jeder Tag uns dem Wärme des Frühlings näher bringt. Dein Durchhaltevermögen jetzt ist wie die Verheißung von blühenden Blumen nach einem langen Frost. Pflege weiterhin deine Träume und bleibe stark - bald wird die Sonne hell auf deinem Weg scheinen und alles, woran du gearbeitet hast, erleuchten. 🌻❄️",
      "Hey, halt durch! Schwierige Momente vergehen, aber deine Widerstandsfähigkeit bleibt für immer. Nimm dir einen Moment zum Aufladen, dann mach weiter mit Stärke und Entschlossenheit. Du bist schon so weit gekommen, und hellere Tage sind gleich um die Ecke!",
      "Hey,  du! Lass nicht zu, dass diese Wolken deinen Glanz trüben. Jede Herausforderung, die du meisterst, fügt deinem Weg ein weiteres Funkeln hinzu. Rocke diese Herausforderungen wie ein Boss - du schaffst das! ⭐✨",
      "Hey, harter Keks! Fühlst du dich, als würdest du das Handtuch werfen wollen? Nein, dafür bist du schon zu weit gekommen! Mach eine Pause, tanke deinen Geist auf und mach weiter. Du hast den Mut und die Entschlossenheit, alles zu überwinden, was dir in den Weg kommt! 💚🍪",
      "Hey, lass dich von den Unebenheiten auf der Straße nicht aufhalten! Du bist wie ein Superheld, der Hindernissen ausweicht. Nimm dir einen Moment, um deine Kräfte aufzuladen, dann mach weiter mit neuer Stärke und einem Lächeln. Du hast, was es braucht, um alles zu erobern! 🦸⭐",
      "Hey, du! Fühlst du den Druck? Das ist nur das Leben, das deine Superheldenkräfte testet. Nimm einen tiefen Atemzug, zieh deinen Umhang an und zeig diesen Herausforderungen, wer der Boss ist. Du bist unaufhaltsam!",
      "Hey, Fremder! Das Leben ist ein bisschen wie Kochen - manchmal gerät man ins Stocken, aber so entstehen die besten Aromen. Nimm dir einen Moment, um etwas Würze hinzuzufügen, sammle deine Zutaten und rühre weiter an deinen Träumen. Du hast das Rezept für Erfolg, und jede Herausforderung ist nur eine weitere Chance, etwas Außergewöhnliches zu kreieren! 🍽️🍳",
      "Hey, Abenteurer! Das Leben ist wie eine Wanderung durch unwegsames Gelände - herausfordernd, aber die Aussicht an der Spitze ist es wert. Mach eine Pause, genieße die Landschaft und wandere mit Entschlossenheit weiter. Du bist auf einer Reise voller Wendungen, und jeder Schritt nach vorn bringt dich deinem Gipfel näher. 🏔️🌄",
      "Hey, du! Die Lebensreise ist wie das Segeln durch wechselnde Meere - manchmal ruhig, manchmal stürmisch. Nimm dir einen Moment, um deine Segel zu justieren, die Winde des Wandels zu begrüßen und mit Zuversicht durch die Herausforderungen zu navigieren. Du steuerst auf hellere Horizonte zu, und jede Welle, die du überwindest, stärkt deine Widerstandsfähigkeit. ⛵",
      "Hey, du! Stell dir das Leben wie einen epischen Abenteuerroman vor, mit unerwarteten Wendungen und gewagten Herausforderungen. Wenn du auf eine unerwartete Wendung stößt, mach eine Pause, schlag das nächste Kapitel auf und genieße den Nervenkitzel, Hindernisse zu überwinden. Deine Geschichte entfaltet sich wunderbar - du bist der furchtlose Protagonist, der zum Triumph bestimmt ist!",
      "Hey, Lebensabenteurer! Stell dir vor, du navigierst durch das Labyrinth des Lebens, wo jede Wendung eine neue Herausforderung darstellt. Mach eine Pause, um die Landschaft zu schätzen, sammle deinen Mut und erkunde weiter mit Entschlossenheit. Jedes Hindernis, das du überwindest, fügt deiner Reise Tiefe und deinem Geist Stärke hinzu. Erforsche weiter, denn die Schätze des Erfolgs warten am Ende deines Weges! Du bist eine wunderbare Seele.",
    ],
  },
  blueCard: {
    message: [
      "Hey, es ist okay, sich manchmal so zu fühlen. Denke daran, Wolken ziehen vorbei und die Sonne kehrt immer zurück. Du bist stärker als du denkst, und hellere Tage liegen vor dir. Nimm es Schritt für Schritt und wisse, dass du auf dieser Reise nicht allein bist. Du hast die Widerstandsfähigkeit, diesen Moment zu überwinden. Halte durch—du bist zu erstaunlichen Dingen fähig!",
      "Es ist absolut in Ordnung zu weinen und es rauszulassen. Emotionen sind ein natürlicher Teil des Menschseins, und sie auszudrücken ist ein Zeichen von Stärke, nicht von Schwäche. Erlaube dir den Raum, diese Emotionen zu fühlen und loszulassen. Es ist ein Heilungsprozess, der dir hilft, stärker und widerstandsfähiger als zuvor weiterzumachen. Du machst das großartig, und du bist nicht allein dabei, ich bin hier, um dich zu unterstützen.",
      "Hey, es ist okay, sich manchmal niedergeschlagen zu fühlen. Das Leben hat seine Höhen und Tiefen, und in diesen Momenten lernen und wachsen wir am meisten. Nimm einen tiefen Atemzug und konzentriere dich auf die kleinen Dinge, die dir Freude bereiten—sei es eine warme Tasse Tee, ein Lieblingslied oder eine tröstende Umarmung eines geliebten Menschen. Diese Phase wird nicht ewig dauern, und du hast die Kraft in dir, darüber hinauszuwachsen. Du bist widerstandsfähig, fähig und von Unterstützung umgeben. Mach weiter; hellere Tage sind gleich um die Ecke. ☀️🌻",
      "Hey, ich verstehe, dass es sich gerade schwer anfühlt, aber denk daran, Stürme dauern nicht ewig. Nimm dir einen Moment, um innezuhalten und dich mit etwas aufzuladen, das dir Frieden bringt—ein Spaziergang in der Natur, ein gutes Buch oder einfach nur ein tiefer Atemzug frischer Luft. Vertraue darauf, dass dieser Moment nur ein Kapitel in deiner Reise ist, nicht die ganze Geschichte. Du hast schon Herausforderungen gemeistert, und du hast die Kraft, auch diese zu überwinden. Kopf hoch, bleib hoffnungsvoll und wisse, dass du auf dem Weg zu helleren Tagen bist.☀️💚",
      "Hey, ich weiß, es ist gerade schwer, aber denk daran, jede Wolke hat einen Silberstreif. Nimm dir einen Moment, um dich auf das zu konzentrieren, wofür du dankbar bist—groß oder klein. Sei es ein sonniger Tag, eine freundliche Geste eines Freundes oder ein friedlicher Moment der Einsamkeit, diese kleinen Funken der Positivität können deinen Tag erhellen. Du bist stärker, als du denkst, und dieser Moment der Herausforderung ist eine Gelegenheit für Wachstum und Widerstandsfähigkeit. Schau hoffnungsvoll nach vorne, denn bessere Tage warten gleich um die Ecke. 🌻✨",
      "Hey, ich möchte, dass du weißt, dass es okay ist, sich manchmal so zu fühlen. Das Leben hat seine Täler und Gipfel, und im Moment bist du in einem Tal. Aber in Tälern blühen die schönsten Blumen. Nimm dir einen Moment, um tief zu atmen und die Stille zu genießen. Denke über deine Reise nach und die Stärke, die du gezeigt hast, um Herausforderungen zu überwinden. Jeder Schritt nach vorne, egal wie klein, ist ein Zeugnis deiner Widerstandsfähigkeit und inneren Kraft. Kopf hoch, mach weiter und erinnere dich, dass selbst in den dunkelsten Momenten immer ein Hoffnungsstrahl wartet, um dich vorwärts zu führen. 🌻🌄",
      "Hey, ich weiß, dass sich alles überwältigend anfühlt, aber du bist stärker, als du denkst. Nimm einen tiefen Atemzug und konzentriere dich auf den gegenwärtigen Moment. Erlaube dir, loszulassen, was du nicht kontrollieren kannst, und umarme, was dir Trost bringt—eine warme Tasse Tee, ein gutes Buch oder die Gesellschaft eines geliebten Menschen. Dieser Moment der Schwierigkeit ist vorübergehend, und du hast die Widerstandsfähigkeit, ihn zu überwinden. Vertraue auf deine Fähigkeit, diesen Sturm zu überstehen, und wisse, dass hellere Himmel gleich hinter dem Horizont warten. Mach weiter mit Vertrauen in dich selbst und die Reise vor dir. 🌄🌻",
      "Es tut mir leid, dass du dich niedergeschlagen fühlst. Denk daran, Stürme dauern nicht ewig. Du bist stärker, als du weißt, und hellere Tage liegen vor dir. Mach einen kleinen Schritt nach dem anderen, und bald wirst du wieder im Sonnenschein gehen.",
      "Wenn Traurigkeit deine Tage verdunkelt, denke daran, dass Stürme vorübergehen und die Sonne immer wieder scheint. Deine Stärke ist größer als dieses momentane Gefühl. Umarm die kleinen Freuden, denn sie sind die Wegweiser zu helleren Tagen. Du bist widerstandsfähig, und jede überwundene Herausforderung stärkt deine innere Kraft. Halte an der Hoffnung fest und mache weiter—du bist in der Lage, Traurigkeit in Stärke zu verwandeln und erneut Glück zu finden.",
      "Hey, wunderbare Seele! Denke daran, jede Herausforderung, der du begegnest, ist nur ein Schritt zu einem stärkeren, weiseren Du. Das Leben ist eine Reise, und jede Wendung bringt dich näher daran, zu entdecken, wie unglaublich du wirklich bist. Kopf hoch und Herz offen—schöne Tage liegen vor dir! 🌈✨",
      "Hallo, schöne Seele! Das Leben kann hart sein, aber du bist es auch. Jeder Tag ist eine neue Gelegenheit, etwas Erstaunliches zu schaffen, und du hast die Kraft, es möglich zu machen. Glaube an dich und dein unendliches Potenzial. Du bist geliebt, du bist wichtig und du bist zu unglaublichen Dingen fähig. Mach weiter, du machst das großartig! 🌻💪",
      "Das Leben ist eine wilde Fahrt, und du bist derjenige, der steuert. Sicher, es gibt Unebenheiten und Umwege, aber genau das macht die Reise aufregend. Umfange das Chaos, tanze im Regen und lache über die kleinen Dinge. Du hast das Funkeln, jeden Moment in ein Abenteuer zu verwandeln. Bleib großartig und lass dein inneres Licht dich leiten! 🚀🌟",
      "Hey, erstaunliche Seele! Es ist okay, sich manchmal niedergeschlagen zu fühlen. Denke daran, jeder Sturm geht irgendwann vorüber. Deine Gefühle sind gültig, aber sie definieren dich nicht. Du hast die Kraft, jede Herausforderung zu überwinden. Atme tief durch und wisse, dass hellere Tage vor dir liegen. Du bist geliebt, du bist wertvoll und du bist stärker, als du denkst. Schritt für Schritt wirst du das schaffen. 🌈💖",
      "Hey, schöne Seele! Es ist okay, schlechte Tage zu haben; sie machen die guten noch süßer. Denke daran, dass du schon früher schwere Zeiten überstanden hast und jedes Mal stärker daraus hervorgegangen bist. Du bist widerstandsfähig, mutig und fähig, alles zu überwinden, was das Leben dir entgegenwirft. Nimm es einen Tag nach dem anderen und vergiss nicht, freundlich zu dir selbst zu sein. Du bist wichtig und dein Glück ist bedeutend. 🌸💫",
      "Hey, unglaubliche Person! Wenn das Leben schwer erscheint, denke daran, dass du nicht alles auf einmal tragen musst. Es ist okay, eine Pause einzulegen und dich um dich selbst zu kümmern. Du hast ein erstaunliches Herz und einen unzerbrechlichen Geist. Jeder Tag ist eine neue Gelegenheit, Freude in den kleinen Dingen zu finden. Glaube an dich, denn du bist zu wunderbaren Dingen fähig. Mach weiter, Schritt für Schritt. 🌟💖",
      "Hey, wunderbares Herz! Die schwersten Momente im Leben führen oft zu den schönsten Veränderungen. Denke daran, dass du auch in den dunkelsten Zeiten wächst und dich zu einer noch stärkeren Version von dir selbst entwickelst. Umgebe dich mit Liebe und Positivität und lass die Hoffnung dein Leitlicht sein. Du hast eine innere Stärke, die alles überwinden kann. Kopf hoch und Herz offen—bessere Tage sind auf dem Weg. 🌷✨",
      "Hey, strahlende Seele! Wenn das Leben wie eine Achterbahn erscheint, denke daran, dass du der furchtlose Fahrer bist, der durch die Wendungen steuert. Jeder Tiefpunkt ist eine Chance, höher aufzusteigen. Umfange jeden Moment als Lektion in Widerstandsfähigkeit und Wachstum. Du überlebst nicht nur—du gedeihst. Halte deinen Geist leicht, dein Herz offen, und lass jede Herausforderung dich in die erstaunliche Person formen, die du wirst. Die Welt ist heller mit deinem einzigartigen Funken! 🎢✨",
    ],
  },
  whiteCard: {
    message: [
      "Hey du, müde Seele! Denke daran, müde rückwärts buchstabiert ist 'edrüm', was keinen Sinn ergibt, genau wie müde sein, wenn es so viel Welt zu erobern gibt! Aber hey, selbst Superhelden brauchen manchmal ein Nickerchen. Ruh dich aus, lade deine Superkräfte wieder auf und mach dich bereit, die Welt erneut zu erobern. Du schaffst das, du schläfriger Legende! 💤💪",
      "Wenn du von allem müde bist, ist das ein Zeichen, dass du zu lange stark gewesen bist. Nimm dir einen Moment zum Ausruhen, aber verliere deine Stärke nicht aus den Augen. Diese Müdigkeit ist vorübergehend; sie ist Teil deiner Reise zu größerer Widerstandsfähigkeit und Weisheit. Mach weiter—du bist näher an Klarheit und Erneuerung, als du denkst.",
      "Wenn alles überwältigend erscheint und du erschöpft bist, erinnere dich daran, dass selbst die dunkelste Nacht irgendwann dem Morgengrauen weicht. Atme tief durch, sammle deine Kraft und gehe weiter. Jeder Schritt, egal wie klein, bringt dich näher an hellere Tage. Du bist schon so weit gekommen und hast die Widerstandsfähigkeit, auch das zu überwinden.",
      "Hey du, müder Champion! Fühlst du dich wie ein Panda, der keine Minute mehr ertragen kann? Keine Sorge, selbst der Energizer Bunny muss seine Batterien aufladen. Mach eine Pause, trink einen Kaffee (oder Tee, wenn du es lieber magst), und denke daran, du bist nicht faul, du bist nur im Energiesparmodus. Bald wirst du wieder dein großartiges, lebendiges Selbst sein. Bis dahin, genieße das Nickerchen wie ein Profi! 😄💤",
      "Hey, erschöpfter Superstar! Fühlst du dich wie ein Montagmorgen an einem Dienstagnachmittag? Es ist okay, das Gefühl zu haben, als würdest du auf dem letzten Loch pfeifen; selbst Raketentreibstoff braucht ab und zu eine Auffüllung! Stell dir vor, du bist ein majestätisches Faultier, das das Leben in seinem eigenen Tempo genießt. Umfange das Chaos mit einem Lächeln und denke daran, selbst deine müden Momente sind legendäre Geschichten in der Entstehung. Du schaffst das—mach weiter so! 🚀😄",
      "Hey du, müder Reisender! Fühlst du dich, als wärst du in der langsamen Spur auf der Autobahn des Lebens stecken geblieben? Keine Sorge, selbst Schildkröten erreichen irgendwann ihr Ziel. Mach eine Pause, trink ein bisschen 'flüssigen Optimismus' (Kaffee, natürlich), und denke daran, selbst wenn das Leben dir Zitronen gibt, kannst du immer ein zitronenduftendes Schaumbad machen. Umfange das Chaos mit einem Augenzwinkern und einem Lächeln—du bist der Meister deiner eigenen Sitcom, und diese Episode braucht nur eine skurrile Wendung. Bleib ruhig und mach weiter, du großartiger Mensch! 🐢☕️😄",
      "Hey, ausgepowerter Wanderer! Fühlst du dich, als wärst du im Schleudergang des Wäschetags des Lebens stecken geblieben? Halte durch, selbst Socken finden irgendwann ihren Partner! Mach eine Pause, gönn dir eine spontane Tanzparty in deinem Wohnzimmer (wen kümmert's, wenn die Katze dich verurteilt?), und denke daran, selbst Picasso hatte Tage, an denen seine Gemälde wie Kartoffelgesichter aussahen. Umfange das Chaos mit einem Augenzwinkern und einem Lächeln—du bist der Star deiner eigenen Impro-Comedy, und diese Szene braucht nur eine witzige Pointe. Rocke weiter diese müden Vibes wie ein Boss! 🧦🕺😄",
      "Hey du, müde Seele! Fühlst du dich, als wärst du im Stau auf der Autobahn des Lebens stecken geblieben? Keine Sorge, selbst GPS gerät manchmal durcheinander. Mach einen Boxenstopp, schnapp dir einen Snack (am besten einen, der minimalen Aufwand beim Öffnen erfordert), und denke daran, selbst Superhelden haben Tage, an denen sie ihren Umhang vergessen. Umfange das Chaos mit einem Schulterzucken und einem Lachen—bleib ruhig und lach weiter, du fabelhafte Seele! 🚗🍿😄",
    ],
  },
  pinkCard: {
    message: [
      "In der Symphonie des Lebens zählt jede Note, auch die, die schief klingen. Enttäuschungen sind wie unerwartete Pausen in der Musik—sie geben uns Zeit zum Nachdenken, Anpassen und Komponieren einer harmonischeren Zukunft. Umfange diese Momente als Gelegenheiten, deine Resilienz und Kreativität zu verfeinern. Denke daran, die Melodie deiner Reise wird nicht von einem einzigen Rückschlag definiert, sondern von dem Mut und der Anmut, mit denen du weiterspielst. Halte dein Herz offen für den Rhythmus der Möglichkeiten und lass dein einzigartiges Lied mit jedem Schritt vorwärts erklingen.",
      "Wenn dir das Leben Enttäuschungen gibt, verwandle sie in Entdeckungen. Jede Herausforderung ist eine Chance, verborgene Stärken und unerwartete Möglichkeiten zu entdecken. Genauso wie die dunkelsten Nächte die hellsten Sterne enthüllen, können deine Rückschläge neue Wege erleuchten. Umfange diesen Moment als Teil deiner Reise, wissend, dass jeder Schritt, selbst die, die rückwärts erscheinen, dich zu der Person formen, die du werden sollst. Halte deinen Geist widerstandsfähig, deinen Verstand offen und dein Herz hoffnungsvoll. Die besten Kapitel deiner Geschichte warten noch darauf, geschrieben zu werden.",
      "Wenn die Enttäuschung an deine Tür klopft, begrüße sie mit einem Lächeln und festem Entschluss. Es ist nicht das Ende deiner Reise, sondern ein Umweg, der dich zu unerwarteten Segnungen führt. Wie ein Gärtner, der den Boden vor einer reichen Ernte pflegt, nutze diese Zeit, um deine Träume zu nähren und Geduld zu kultivieren. Vertraue darauf, dass jeder Rückschlag eine Vorbereitung auf ein Comeback ist. Du hast die Stärke, Weisheit und Widerstandsfähigkeit, jede Herausforderung zu überstehen. Gehe mit unerschütterlichem Glauben an deine Reise und die Schönheit dessen, was vor dir liegt, weiter.",
      "Wenn dich die Enttäuschung niederdrückt, lass die Resilienz dich wieder aufrichten. Betrachte Rückschläge als Kapitel, die die Stärke deiner Geschichte aufbauen. Jedes Hindernis ist eine Chance, die Erzählung mit Mut und Entschlossenheit neu zu schreiben. Umfange die Reise, wissend, dass jede Wendung dich zu einem widerstandsfähigeren und mitfühlenderen Menschen formt. Du bist in der Lage, alles zu überwinden, was dir in den Weg kommt. Halte deinen Glauben stark, dein Herz offen für Möglichkeiten und deinen Geist unzerbrechlich. Deine Reise ist einzigartig und jeder Schritt vorwärts ein Zeugnis deiner inneren Stärke und Ausdauer.",
      "Rückschläge im Leben sind wie Wellen im Ozean—vorübergehend und Teil der Reise. Reite sie mit Resilienz, wissend, dass ruhigere Gewässer und hellere Horizonte auf dich warten. Deine Stärke und Ausdauer werden dich leiten, Hindernisse in Trittsteine zu deinen Träumen zu verwandeln.",
      "Wenn Enttäuschung schwer auf deinem Herzen lastet, denke daran, dass es nur eine vorübergehende Pause auf deiner Reise ist, nicht das Ende des Weges. Nutze diesen Moment, um deine Stärke und deinen Mut zu sammeln. Wie ein Fluss, der durch Felsen fließt, lass Rückschläge dich zu einer stärkeren, widerstandsfähigeren Version deiner selbst formen. Umfange die gelernten Lektionen und gehe mit unerschütterlicher Entschlossenheit weiter. Deine Träume sind in Reichweite und mit jedem Schritt vorwärts kommst du ihrer Verwirklichung näher. Vertraue auf deine Resilienz und glaube an die Kraft der Ausdauer. Du hast die Stärke, jede Herausforderung zu überwinden, die dir begegnet.",
      "Wenn dich die Enttäuschung niederdrückt, lass es dich daran erinnern, dass du die Kraft hast, wieder aufzustehen, stärker als zuvor. Wie ein Samen, der in der Widrigkeit gepflanzt wird, hast du das Potenzial, zu wachsen und zu erblühen. Betrachte Rückschläge als Gelegenheiten für persönliches Wachstum und Transformation. Halte deinen Glauben lebendig und deinen Geist widerstandsfähig. Glaube an deine Fähigkeit, Herausforderungen zu meistern und siegreich daraus hervorzugehen. Deine Reise ist ein Zeugnis deines Mutes und deiner Ausdauer. Vertraue auf den Prozess, bleib positiv und strebe weiterhin nach deinen Träumen. Du bist fähig, Großes zu erreichen.",
      "Liebe Seele, wenn Enttäuschung klopft, lass es eine sanfte Erinnerung an deine unerschütterliche Stärke sein. Wie die Sonne hinter den Wolken leuchtet deine Resilienz am hellsten in Momenten der Widrigkeit. Umfange Rückschläge als Gelegenheiten für Wachstum und Erneuerung. Mit jeder überwundenen Herausforderung gestaltest du einen Weg zu einer helleren Zukunft. Halte deinen Glauben fest, deinen Geist unnachgiebig und dein Herz offen für neue Möglichkeiten. Glaube an die Kraft deiner Träume, denn sie sind der Kompass, der dich zu grenzenlosem Potenzial führt. Deine Reise ist ein Zeugnis von Mut und Ausdauer—umfange sie mit Anmut, denn Großartiges wartet auf dich.",
      "Wenn die Enttäuschung dein Herz füllt, denke daran, dass es nur ein Kapitel in deiner Geschichte ist, nicht das Ende. Umfange es als Wendepunkt, an dem Resilienz und Entschlossenheit geschmiedet werden. Wie ein Fluss, der durch Felsen schneidet, lass Rückschläge deinen Weg zu größerer Stärke und Klarheit formen. Vertraue auf deine Fähigkeit, Herausforderungen zu meistern, denn jedes überwundene Hindernis bringt dich der Erfüllung deiner Träume näher. Gehe mit unerschütterlichem Glauben an dich selbst und die Reise, die vor dir liegt, weiter. Deine Resilienz kennt keine Grenzen und dein Potenzial ist grenzenlos.",
      "Hey, wenn das Leben dir eine Wendung gibt, schnapp dir Popcorn und genieße die Show! Betrachte Herausforderungen als überraschende Abenteuer, die deine Kreativität und Ausdauer testen. Wie ein kluger Entdecker enthüllt jede Wendung neue Wege, die es zu erobern gilt. Umfange die Reise mit Neugier und einem Sinn für Humor, wissend, dass jede Wendung ein Kapitel in deiner epischen Geschichte hinzufügt. Erforsche weiter, lerne weiter und schreibe deine Geschichte mit Mut und Begeisterung—du bist der Star eines Blockbusters in der Entstehung!",
      "Hey du! Wenn das Leben eine wilde Karte spielt, mische das Deck und gib dir selbst eine Gewinnhand! Betrachte Herausforderungen als spannende Rätsel, die deine Problemlösungsfähigkeiten schärfen. Wie ein Meisterspieler bringt dich jedes Level-Up näher an neue Erfolge. Umfange das Spiel mit einem Grinsen und einem Augenzwinkern, wissend, dass jede Herausforderung eine Chance ist, deine Resilienzmuskeln zu flexen. Plane weiter, ziele weiter auf den Highscore, denn du hast alle Power-Ups, die du brauchst, um jedes Level zu meistern!",
      "Hey Sonnenschein! Wenn das Leben dir eine kleine Herausforderung schickt, schnapp dir einen Regenschirm und tanze im Regen! Betrachte Hindernisse als spielerische Hürden in deinem epischen Hindernisparcours. Wie ein furchtloser Abenteurer bringt dich jeder Sprung nach vorne näher daran, neue Höhen zu erklimmen. Umfange die Reise mit einem Hüpfer und einem Sprung, wissend, dass jede Wendung eine Chance ist, deine Resilienz und Anmut zu zeigen. Strahle weiter hell und genieße das Abenteuer—du hast den Schwung und den Geist, um jeden trüben Tag in einen sonnigen Genuss zu verwandeln!",
      "Hey du! Wenn dir das Leben Zitronen gibt, presse sie zu einem erfrischenden Glas Resilienz! Betrachte Herausforderungen als würzige Zutaten im Rezept deiner Lebensreise. Wie ein geschickter Koch fügt jede unerwartete Wendung deinem Leben Geschmack und Tiefe hinzu. Umfange die Küche des Lebens mit Kreativität und einer Prise Lachen, wissend, dass jedes Hindernis eine Chance ist, etwas Großartiges zu zaubern. Rühre weiter, koste weiter, denn du hast das Rezept für Erfolg direkt in deinen Händen!",
      "Hey du! Wenn dir das Leben Rätsel aufgibt, freue dich—es ist Zeit, deine Problemlösungsfähigkeiten zu flexen! Betrachte Herausforderungen als spannende Abenteuer im Spiel des Lebens. Wie ein gerissener Spieler schließt jede Wendung und Kurve neue Ebenen von Fähigkeiten und Strategien auf. Umfange die Herausforderung mit einem spielerischen Geist und dem Willen zu gewinnen, wissend, dass jedes überwundene Hindernis einen weiteren Sieg zu deinem Punktekonto hinzufügt. Spiele weiter dein bestes Spiel und ziele hoch—du hast alle Züge, um jede Herausforderung zu meistern, die auf dich zukommt!",
      "Hey du! Wenn das Spiel des Lebens etwas knifflig wird, denke daran, du hast alle Cheat-Codes in dir versteckt! Betrachte Herausforderungen als Bonuslevel, die deine Fähigkeiten testen und neue Erfolge freischalten. Wie ein erfahrener Gamer ist jedes Hindernis eine Chance, aufzuleveln und den nächsten großen Boss zu besiegen. Umfange das Abenteuer mit einem Grinsen",
    ],
  },
  honeyJar: {
    message: [
      "Warum können Geister so schlecht lügen? \n Weil man durch sie hindurchsehen kann! 😄",
      "Warum können Mathematiker keine Witze erzählen?\n Weil sie immer Probleme haben, den richtigen Winkel zu finden!",
      "Was ist orange und läuft durch den Wald?\n Eine Wanderine!",
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
      alert("Gibt deinen Name ein");
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
  hideElement(finalTextEl);
  hideFinalOption();
  positiveSpeechBubble.style.display = "none";
  modal.style.display = "none";
  removeFlower();
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
    cloverEndText.textContent = "Probiere das mal aus! 😉";

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
  showElement(finalTextEl);
  finalTextEl.textContent = "Hat dir meine Blume gefallen? " + userName + " 😊";

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
    "Ich bin soooooo glücklich, das zu hören! 😄",
    "Komm zu mir.",
    `Weißt du was, ${userName}  du bist das Wundervollste auf der Welt.`,
    "Lass mich dich umarmen.",
    "Ich liebe dich. 😁",
    "Ich liebe dich. 😁",
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
    "Das tut mir leid. 🙁 \n Möchtest du noch mehr davon?",
    "Wie fühlst du dich gerade " + userName + " ?",
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
  textElement.innerText = "Hast du gelacht?" + " " + userName + " 😊";

  textElement.addEventListener("click", () => {
    hideFeeling();
    showElement(noAnswer);
    showElement(honeyJarYes);
    honeyJarYes.textContent = "Ja und ich will mehr!";
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
