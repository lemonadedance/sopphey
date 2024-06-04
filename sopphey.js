/* * * * * * * * * * * global JS * * * * * * * * * * */

function resetPage(){
    location.reload();
}
/* * * * * * * * * * * breathe.html JS * * * * * * * * * * */

/* * * * * * * * * * * affirmations.html JS * * * * * * * * * * */
const affirmationsList = ["able", "accepting", "accommodating", "accomplished", "accurate", "adaptable", "adept",
    "adequate", "adored", "adoring", "adventurous", "advocate", "affectionate", "affirming", "affluent", "agreeable",
    "alright", "alluring", "altruistic", "amazing", "ambitious", "amiable", "ample", "amusing", "animative",
    "appreciative", "approachable", "articulate", "artistic", "assertive", "assured", "astonishing", "astounding",
    "astute", "attentive", "authentic", "aware", "awesome", "awestruck", "balanced", "beautiful", "beaming", "beloved",
    "benevolent", "bold", "bountiful", "brave", "bright", "brilliant", "calm", "capable", "captivating", "caring",
    "charming", "cheery", "cherished", "clever", "commendable", "communicative", "compatible", "compassionate",
    "competent", "complete", "composed", "confident", "content", "considerate", "consistent", "cool", "cooperative",
    "crucial", "daring", "dashing", "dazzling", "decisive", "dedicated", "delightful", "deserving", "desireable",
    "detailed", "determined", "devoted", "dignified", "direct", "distinguished", "divine", "driven", "dynamic",
    "eclectic", "effective", "electric", "elegant", "empathetic", "energized", "engaging", "engrossing", "enjoyable",
    "enough", "enticing", "equal", "equipped", "esteemed", "excellent", "exceptional", "excited", "extraordinary",
    "equisite", "exuberant", "fabulous", "faithful", "fascinating", "favorable", "fearless", "fine", "fitting",
    "flexible", "flourishing", "focused", "forgiving", "fortuitous", "fortunate", "free", "friendly", "genuine",
    "gentle", "gifted", "giving", "glowing", "gorgeous", "graceful", "great", "handsome", "hardy", "harmonious",
    "healed", "hearty", "helpful", "heroic", "honest", "honorable", "hopeful", "hospitable", "humble", "imaginative",
    "important", "impressive", "inclusive", "incredible", "independent", "indispensable", "influential", "improving",
    "innovative", "inquisitive", "insightful", "intellectual", "intentional", "interesting", "instrumental", "intuitive",
    "inventing", "invigorating", "inviting", "jazzy", "kind", "liberating", "likable", "lively", "logical", "longing",
    "lovable", "lovely", "loving", "loyal", "luminous", "magical", "magnetic", "marvelous", "meaningful", "merry",
    "mesmerizing", "meticulous", "mindful", "modest", "motivating", "moving", "needed", "nice", "noble", "nostalgic",
    "novel", "nourished", "nurturing", "observant", "optimistic", "opulent", "outstanding", "passionate", 
    "peaceful", "persistent", "personable", "phenomenal", "praiseworthy", "playful", "plentiful", "positive", 
    "practical", "precious", "present", "proactive", "profound", "prosperous", "proud", "purposeful", "qualified",
    "radiant", "rare", "rational", "reasonable", "redeemed", "reflective", "refreshing", "relaxed", "reliable", 
    "remarkable", "remembered", "resilient", "resolved", "resourceful", "respectful", "responsible", "revolutionary",
    "robust", "rooted", "safe", "satisfied", "secure", "sensational", "sensible", "serene", "significant", "sincere",
    "skillful", "sociable", "soothing", "soulful", "spectacular", "spirited", "spiritual", "splendid", "spontaneous",
    "steadfast", "stellar", "strong", "stupendous", "stunning", "successful", "succinct", "sufficient", "supportive",
    "surprising", "sustaining", "sweet", "sympathetic", "talented", "teachable", "tenacious", "tender", "terrific",
    "thoughtful", "thriving", "tolerant", "tranquil", "transcendent", "transformative", "trustful", "understanding",
    "unique", "uplifting", "useful", "valiant", "valid", "valued", "versatile", "vested", "vibrant", "a visionary",
    "vital", "vivacious", "wanted", "warm", "welcoming", "whole", "wholesome", "witty", "wonderful", "wondrous",
    "whole", "zenful", "full of zest"];

function loadUp(){
    affirmationNumber = Math.floor(Math.random()*affirmationsList.length)+0;
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p> you are " + affirmationsList[affirmationNumber] +"<p>");
}
/* * * * * * * * * * * feel.html JS * * * * * * * * * * */

const feelingsList = ["abandoned", "achy", "adventerous", "affectionate", "afraid", "agitated", "agony",
    "aggravated", "airy", "alarmed", "alert", "alienated", "aloof", "amazed", "ambivalent", "amused", "angry",
    "anguish", "animosity", "annoyed", "anxious", "apathetic", "appalled", "appreciated", "apprehensive",
    "ardent", "aroused", "ashamed", "astonished", "awful", "bad", "baffled", "beat", "bereaved", "betrayed",
    "bewildered", "bitter", "blessed", "blissful", "blocked", "brave", "breathless", "bruised", "burned out",
    "busy", "calm", "capable", "centered", "chagrined", "cheeky", "clear headed", "clenched", "cold", "compassion",
    "concerned", "confident", "comfortable", "contempt", "confused", "connected", "constricted", "contained",
    "courageous", "creative", "critical", "curious", "daring", "dazed", "dazzeled", "dejected", "delighted",
    "depleted", "depressed", "despair", "despondent", "determined", "detestable", "devastated", "disappointed",
    "disapproving", "dissatisfied", "discombobulated", "disconcerted", "disconnected", "discouraged",
    "disdain", "disgruntled", "disgusted", "disheartened", "dislike", "disillusioned", "dismayed", "dismissive",
    "displeased", "disquieted", "disrespected", "distant", "distracted", "distraught", "distressed", "disturbed",
    "dizzy", "doubt", "drained", "dread", "dull", "eager", "ecstatic", "elated", "electric", "embarrased",
    "empowered", "empty", "enchanted", "encouraged", "energetic", "energized", "engaged", "engrossed", "enlivened", 
    "enraged", "enthralled", "enthusiastic", "envious", "exasperated", "excited", "excluded", "exhausted",
    "exhilarated", "exposed", "fatigue", "fascinated", "fear", "fidgety", "fluid", "flustered", "forlorn",
    "fortunate", "furious", "fragile", "frazzled", "frigthened", "frozen", "frustrated", "gentle", "giddy",
    "glad", "gloomy", "good", "grace", "great", "grief", "grounded", "guarded", "guilty", "happy", "heartbroken",
    "heavy hearted", "helpless", "hesitant", "hollow", "hopeful", "hopeless", "hostile", "horrified", "hot",
    "humbled", "humiliated", "hurt", "icy", "impatient", "impotent", "inadequate", "incapable", "incensed",
    "indifferent", "indignant", "infuriated", "insecure", "insignificant", "inspired", "inquisitive", "interested",
    "intimate", "intrigued", "involved", "irritable", "irked", "isolated", "invigorated","jealous", "jittery",
    "joyful", "jubilant", "judgemental", "jumpy", "knotted", "leery", "let down", "lethargic", "listless", "livid",
    "lonely", "lost", "love", "lively", "lucky", "mad", "melancholic", "mellow", "miserable", "mistrustful",
    "moody", "mortified", "moved", "mystified", "nauseated", "nervous", "nostalgic", "numb", "on edge", 
    "open hearted", "optimistic", "overwhelmed", "out of control", "outraged", "panic", "pained", "passionate", 
    "patient", "peaceful", "patient", "perplexed", "perturbed", "pissed", "playful", "pleased", "powerful", 
    "present", "pressured", "prickly", "provoked", "proud", "pulsing", "puzzled", "questioned", "radiant", 
    "rattled", "relaxed", "relieved", "reflective", "refreshed", "regretful", "rejected", "rejuvenated", 
    "reluctant", "removed", "renewed", "reserved", "resentful", "resistant", "rested", "restless", "restored", 
    "revived", "revolted", "rigid", "rushed", "tired", "sad", "safe", "satisfied", "scared", "skeptical", "secure", 
    "self-conscious", "sensitive", "serene", "settled", "shame", "shaken", "shaky", "shivery", "shocked", 
    "shut down", "sleepy", "slow", "smooth", "soft", "sore", "sorrow", "sorry", "spacious", "spacy", "sparkly", 
    "spellbound", "startled", "stiff", "stimulated", "stressed", "strong", "successful", "surprised", "suspicious", 
    "teary", "tense", "terrified", "thankful", "thrilled", "tickled", "touched", "torn", "tranquil", 
    "uncomfortable", "unfocused", "ungrounded", "uneasy", "unnerved", "unsettled", "unsure", "upset", "useless", 
    "valiant", "valued", "vibrant", "vulnerable", "warm", "weak", "weary", "withdrawn", "wooden", "worn out", 
    "worried", "worthless", "worthy"];

function loadFeeling(){
    feelingsNumber = Math.floor(Math.random()*feelingsList.length)+0;
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p> it's o.k. to feel... " 
        + feelingsList[feelingsNumber] +". your feelings are valid. they come and go. you are important.<p>");
}

/* * * * * * * * * * * care.html JS * * * * * * * * * * */

const careList = ["stretch for fun or fitness", "curl up in a blanket like a burrito", "do affirmations",
    "meditate", "be in the present", "have self-healing time", "play a child's boardgame", "nurture your body", 
    "start a fitness journey", "pray or use mantras and chants", "find nurturing release for your anger", 
    "as they say, stop and smell the flowers", "try something challenging", "feel your feelings", 
    "learn a new skill", "be assertive of your time", "enjoy a bath", "make your bed", 
    "seek healing physical contact", "challenge negative thoughts", 
    "kick fear of missing out goodbye and welcome joy of missing out", "write a letter", 
    "create healing rituals", "hydrate!", "set SMART goals", "choose kindness", "enjoy a mental health day", 
    "explore nature", "sing your favorite song", "set intentions for your day", "spend time with friends",
    "explore patience", "volunteer", "reduce screen time", "dream big", "adopt a plant", "get a scalp massage",
    "nourish your body with fiberous foods", "seek a mentor", "make amends", "get artsy", "explore new hobbies",
    "take a trip", "make new friends", "indulge in a nurturing treat", "reduce, reuse, recycle", "declutter",
    "experience a sunset or sunrise", "find your eight hours of rest", "listen to music"]

function loadCare(){
    careNumber = Math.floor(Math.random()*careList.length)+0;
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p> " 
        + careList[careNumber] +" <p>");
}

/* * * * * * * * * * * survivor.html JS * * * * * * * * * * */

function enterUserAge(){
      
    let years = document.getElementById("userAge").value;
    let months = years * 12;
    let weeks = years * 52;
    let days = years * 365;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;   

    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + seconds + " seconds<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + minutes + " minutes<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + hours + " hours<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + days + " days<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + weeks + " weeks<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + months + " months<p>");
    document.getElementById("indexResponse").insertAdjacentHTML("afterend", "<p>" + years + " years<p>");
}