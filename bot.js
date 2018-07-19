const botSettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone : true});
bot.on("ready", async () => {
    console.log(`Bot is ready ! ${bot.user.username}`);
    try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    }catch(e) {
        console.log(e.stack);
    }
    
});
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    var tmsg = " "+message.content.toLowerCase()+" ";    
    tmsg = tmsg.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, ' ');
    let bad_words = ["2 girls 1 cup", "2g1c", "4r5e", "5h1t", "5hit", "Breeder",
"Cocklump", "Doublelift", "Dumbcunt", "Fuck off", "Jesus wept",
"Jesus, Mary and Joseph", "Judas Priest", "LEN", "Poopuncher", "Sandler",
"a54", "a55", "a_s_s", "acrotomophilia", "alabama hot pocket",
"alaskan pipeline", "anal", "anilingus", "anus", "apeshit", "ar5e", "arrse",
"arse", "arsehole", "ass", "ass fuck", "ass-fucker", "ass-hat", "ass-jabber",
"ass-pirate", "assbag", "assbandit", "assbanger", "assbite", "assclown",
"asscock", "asscracker", "asses", "assface", "assfaces", "assfuck",
"assfucker", "assfukka", "assgoblin", "asshat", "asshead", "asshole",
"assholes", "asshopper", "assjacker", "asslick", "asslicker", "assmonkey",
"assmucus", "assmunch", "assmuncher", "assnigger", "asspirate", "assshit",
"assshole", "asssucker", "asswad", "asswhole", "asswipe", "auto erotic",
"autoerotic", "axwound", "b!tch", "b00bs", "b17ch", "b1tch", "babeland",
"baby batter", "baby juice", "ball gag", "ball gravy", "ball kicking",
"ball licking", "ball sack", "ball sucking", "ballbag", "balls", "ballsack",
"bampot", "bang (one's) box", "bangbros", "bareback", "barely legal",
"barenaked", "bastard", "bastardo", "bastards", "bastinado", "batty boy",
"bbw", "bdsm", "beaner", "beaners", "beastial", "beastiality", "beaver",
"beaver cleaver", "beaver lips", "beef curtain", "beef curtains", "bellend",
"bender", "bescumber", "bestial", "bestiality", "bi+ch", "biatch", "big black",
"big breasts", "big knockers", "big tits", "bimbos", "bint", "birdlock",
"bitch", "bitch tit", "bitchass", "bitcher", "bitchers", "bitches", "bitchin",
"bitching", "bitchtits", "bitchy", "black cock", "blonde action",
"blonde on blonde action", "bloodclaat", "bloody", "bloody hell", "blow job",
"blow me", "blow mud", "blow your load", "blowjob", "blowjobs", "blue waffle",
"blumpkin", "boiolas", "bollock", "bollocks", "bollok", "bollox", "bondage",
"boner", "boob", "boobs", "boong", "booobs", "boooobs", "booooobs",
"booooooobs", "booty call", "breasts", "brotherfucker", "brown showers",
"brunette action", "buceta", "bugger", "bukkake", "bulldyke", "bullet vibe",
"bullshit", "bum", "bum boy", "bumblefuck", "bumclat", "bummer", "buncombe",
"bung hole", "bunghole", "bunny fucker", "bust a load", "busty", "butt",
"butt fuck", "butt plug", "butt-pirate", "buttcheeks", "buttfucka",
"buttfucker", "butthole", "buttmuch", "buttmunch", "buttplug", "c0ck",
"c0cksucker", "cacafuego", "camel toe", "camgirl", "camslut", "camwhore",
"carpet muncher", "carpetmuncher", "cawk", "chesticle", "chi-chi man",
"chick with a dick", "child-fucker", "chinc", "chink", "chinky", "choad",
"choade", "choc ice", "chocolate rosebuds", "chode", "chota bags", "cipa",
"circlejerk", "cl1t", "cleveland steamer", "clit", "clit licker", "clitface",
"clitfuck", "clitoris", "clits", "clitty litter", "clover clamps", "clunge",
"clusterfuck", "cnut", "coccydynia", "cock", "cock pocket", "cock snot",
"cock-sucker", "cockass", "cockbite", "cockburger", "cockeye", "cockface",
"cockfucker", "cockhead", "cockjockey", "cockknoker", "cockmaster",
"cockmongler", "cockmongruel", "cockmonkey", "cockmunch", "cockmuncher",
"cocknose", "cocknugget", "cocks", "cockshit", "cocksmith", "cocksmoke",
"cocksmoker", "cocksniffer", "cocksuck", "cocksucked", "cocksucker",
"cocksuckers", "cocksucking", "cocksucks", "cocksuka", "cocksukka",
"cockwaffle", "coffin dodger", "cok", "cokmuncher", "coksucka", "coochie",
"coochy", "coon", "coonnass", "coons", "cooter", "cop some wood",
"coprolagnia", "coprophilia", "cornhole", "corp whore", "corpulent", "cox",
"cracker", "crap", "creampie", "cretin", "crikey", "cripple", "crotte", "cum",
"cum chugger", "cum dumpster", "cum freak", "cum guzzler", "cumbubble",
"cumdump", "cumdumpster", "cumguzzler", "cumjockey", "cummer", "cumming",
"cums", "cumshot", "cumslut", "cumtart", "cunilingus", "cunillingus", "cunnie",
"cunnilingus", "cunt", "cunt hair", "cunt-struck", "cuntass", "cuntbag",
"cuntface", "cunthole", "cuntlick", "cuntlicker", "cuntlicking", "cuntrag",
"cunts", "cuntsicle", "cuntslut", "cus", "cut rope", "cyalis", "cyberfuc",
"cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking",
"d1ck", "dago", "damn", "darkie", "darn", "date rape", "daterape",
"deep throat", "deepthroat", "deggo", "dendrophilia", "dick", "dick head",
"dick hole", "dick shy", "dick-sneeze", "dickbag", "dickbeaters", "dickface",
"dickfuck", "dickfucker", "dickhead", "dickheads", "dickhole", "dickjuice",
"dickmilk", "dickmonger", "dicks", "dickslap", "dicksucker", "dicksucking",
"dicktickler", "dickwad", "dickweasel", "dickweed", "dickwod", "dike", "dildo",
"dildos", "dingleberries", "dingleberry", "dink", "dinks", "dipshit", "dirsa",
"dirty Sanchez", "dirty pillows", "dirty sanchez", "div", "dlck", "dog style",
"dog-fucker", "doggie style", "doggiestyle", "doggin", "dogging",
"doggy style", "doggystyle", "dolcett", "domination", "dominatrix", "dommes",
"donkey punch", "donkeypunch", "donkeyribber", "doochbag", "dookie", "doosh",
"double dong", "double penetration", "douche", "douche-fag", "douchebag",
"douchewaffle", "dp action", "dry hump", "duche", "dumass", "dumb ass",
"dumbass", "dumbfuck", "dumbshit", "dumshit", "dvda", "dyke", "eat a dick",
"eat hair pie", "eat my ass", "ecchi", "ejaculate", "ejaculated", "ejaculates",
"ejaculating", "ejaculatings", "ejaculation", "ejakulate", "erotic", "erotism",
"escort", "eunuch", "f u c k", "f u c k e r", "f4nny", "f_u_c_k", "facial",
"fag", "fagbag", "fagfucker", "fagging", "faggit", "faggitt", "faggot",
"faggotcock", "faggots", "faggs", "fagot", "fagots", "fags", "fagtard",
"fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker",
"fcuking", "fecal", "feck", "fecker", "feist", "felch", "felching", "fellate",
"fellatio", "feltch", "female squirting", "femdom", "fenian", "fice",
"figging", "fingerbang", "fingerfuck", "fingerfucked", "fingerfucker",
"fingerfuckers", "fingerfucking", "fingerfucks", "fingering", "fist fuck",
"fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking",
"fistfuckings", "fistfucks", "fisting", "flamer", "flange", "flaps",
"fleshflute", "flog the log", "foah", "fook", "fooker", "foot fetish",
"footjob", "frenchify", "frotting", "fuc", "fuck", "fuck buttons",
"fuck hole", "fuck puppet", "fuck trophy", "fuck yo mama", "fuck you",
"fuck-ass", "fuck-bitch", "fucka", "fuckass", "fuckbag", "fuckboy",
"fuckbrain", "fuckbutt", "fuckbutter", "fucked", "fuckedup", "fucker",
"fuckers", "fuckersucker", "fuckface", "fuckhead", "fuckheads", "fuckhole",
"fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme",
"fuckmeat", "fucknut", "fucknutt", "fuckoff", "fucks", "fuckstick", "fucktard",
"fucktards", "fucktart", "fucktoy", "fucktwat", "fuckup", "fuckwad",
"fuckwhit", "fuckwit", "fuckwitt", "fudge packer", "fudge-packer",
"fudgepacker", "fuk", "fuker", "fukker", "fukkers", "fukkin", "fuks",
"fukwhit", "fukwit", "fuq", "futanari", "fux", "fux0r", "g-spot", "gang bang",
"gang-bang", "gangbang", "gangbanged", "gangbangs", "gash", "gassy ass", "gay",
"gay sex", "gayass", "gaybob", "gaydo", "gayfuck", "gayfuckist", "gaylord",
"gaysex", "gaytard", "gaywad", "gender bender", "genitals", "giant cock",
"ginger", "gippo", "girl on", "girl on top", "girls gone wild", "goatcx",
"goatse", "god damn", "god-dam", "god-damned", "goddamn", "goddamned",
"goddamnit", "godsdamn", "gokkun", "golden shower", "golliwog", "goo girl",
"gooch", "goodpoop", "gook", "goregasm", "gringo", "grope", "group sex",
"guido", "guro", "ham flap", "hand job", "handjob", "hard core", "hard on",
"hardcore", "hardcoresex", "he-she", "heeb", "hell", "hentai", "heshe",
"hircismus", "hoar", "hoare", "hoe", "hoer", "holy shit", "homo",
"homodumbshit", "homoerotic", "honkey", "hooker", "hore", "horniest", "horny",
"hot carl", "hot chick", "hotsex", "how to kill", "how to murdep",
"how to murder", "huge fat", "humping", "iap", "iberian slap", "incest",
"intercourse", "jack off", "jack-off", "jackass", "jackasses", "jackoff",
"jaggi", "jagoff", "jap", "jelly donut", "jerk", "jerk off", "jerk-off",
"jerkass", "jigaboo", "jiggaboo", "jiggerboo", "jism", "jiz", "jizm", "jizz",
"jock", "juggs", "jungle bunny", "junglebunny", "kafir", "kawk", "kike",
"kinbaku", "kinkster", "kinky", "kinky Jesus", "knob", "knob end", "knobbing",
"knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock",
"kondum", "kondums", "kooch", "kootch", "kraut", "kum", "kummer", "kumming",
"kums", "kunilingus", "kunja", "kunt", "kwif", "kyke", "l3i+ch", "l3itch",
"labia", "lameass", "lardass", "leather restraint", "leather straight jacket",
"lemon party", "lesbian", "lesbo", "lezza/lesbo", "lezzie", "lmao", "lmfao",
"lolita", "looney", "lovemaking", "lust", "lusting", "m0f0", "m0fo",
"m45terbate", "ma5terb8", "ma5terbate", "mafugly", "make me come",
"male squirting", "masochist", "master-bate", "masterb8", "masterbat*",
"masterbat3", "masterbate", "masterbation", "masterbations", "masturbate",
"mcfagget", "menage a trois", "mick", "microphallus", "middle finger",
"midget", "milf", "minge", "minger", "missionary position", "mo-fo", "mof0",
"mofo", "moo moo foo foo", "mothafuck", "mothafucka", "mothafuckas",
"mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin",
"mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck",
"motherfucked", "motherfucker", "motherfuckers", "motherfuckin",
"motherfucking", "motherfuckings", "motherfuckka", "motherfucks",
"mound of venus", "mr hands", "muff", "muff diver", "muff puff", "muffdiver",
"muffdiving", "munging", "munter", "mutha", "muthafecker", "muthafuckker",
"muther", "mutherfucker", "n1gga", "n1gger", "nambla", "nawashi", "nazi",
"need the dick", "negro", "neonazi", "nig nog", "nig-nog", "nigaboo", "nigg3r",
"nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "niglet",
"nimphomania", "ninnyhammer", "nipple", "nipples", "nob", "nob jokey",
"nobhead", "nobjocky", "nobjokey", "nonce", "nsfw images", "nude", "nudity",
"numbnuts", "nut butter", "nut sack", "nutsack", "nutter", "nympho",
"nymphomania", "octopussy", "old bag", "omg", "omorashi", "one cup two girls",
"one guy one jar", "orgasim", "orgasims", "orgasm", "orgasms", "orgy", "p0rn",
"paedophile", "paki", "panooch", "pansy", "panties", "panty", "pawn", "pecker",
"peckerhead", "pedobear", "pedophile", "pegging", "penis", "penisbanger",
"penisfucker", "penispuffer", "phone sex", "phonesex", "phuck", "phuk",
"phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "piece of shit",
"pigfucker", "pikey", "pimpis", "piss", "piss off", "piss pig", "pissed",
"pissed off", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing",
"pissoff", "pisspig", "playboy", "pleasure chest", "polack", "pole smoker",
"polesmoker", "pollock", "ponyplay", "poof", "poon", "poonani", "poonany",
"poontang", "poop", "poop chute", "poopchute", "porch monkey", "porchmonkey",
"porn", "porno", "pornography", "pornos", "prick", "pricks", "prickteaser",
"prince albert piercing", "prod", "pron", "psycho", "pthc", "pube", "pubes",
"punani", "punanny", "punany", "punta", "pusse", "pussi", "pussies", "pussy",
"pussy fart", "pussy palace", "pussylicking", "pussys", "pust", "puto",
"queaf", "queef", "queer", "queerbait", "queerhole", "quim", "raghead",
"raging boner", "rape", "rapey", "raping", "rapist", "rectum", "renob",
"retard", "reverse cowgirl", "rimjaw", "rimjob", "rimming", "rosy palm",
"rosy palm and her 5 sisters", "rubbish", "ruski", "rusty trombone", "s hit",
"s&m", "s.o.b.", "s_h_i_t", "sadism", "sadist", "sambo", "sand nigger",
"sandbar", "sandnigger", "sanger", "santorum", "sausage queen", "scat",
"schizo", "schlong", "scissoring", "screwing", "scroat", "scrote", "scrotum",
"seks", "semen", "sex", "sexo", "sexy", "sh!+", "sh!t", "sh1t", "shag",
"shagger", "shaggin", "shagging", "shaved beaver", "shaved pussy", "shemale",
"shi+", "shibari", "shirt lifter", "shit", "shit ass", "shit fucker",
"shitass", "shitbag", "shitbagger", "shitblimp", "shitbrains", "shitbreath",
"shitcanned", "shitcunt", "shitdick", "shite", "shited", "shitey", "shitface",
"shitfaced", "shitfuck", "shitfull", "shithead", "shitheads", "shithole",
"shithouse", "shiting", "shitings", "shits", "shitspitter", "shitstain",
"shitted", "shitter", "shitters", "shittier", "shittiest", "shitting",
"shittings", "shitty", "shiz", "shiznit", "shota", "shrimping", "skank",
"skeet", "skullfuck", "slag", "slanteye", "slope", "slut", "slut bucket",
"slutbag", "sluts", "smartass", "smartasses", "smeg", "smegma", "smut",
"snatch", "snowballing", "sod off", "sodomize", "sodomy", "son of a bitch",
"son of a motherless goat", "son of a whore", "son-of-a-bitch", "spac",
"spade", "spic", "spick", "splooge", "splooge moose", "spooge", "spook",
"spread legs", "spunk", "strap on", "strapon", "strappado", "strip club",
"style doggy", "suck", "suckass", "sucks", "suicide girls", "sultry women",
"swastika", "swear word", "sweet Jesus", "swinger", "t1tt1e5", "t1tties",
"taff", "taig", "tainted love", "taking the piss", "tard", "tart", "taste my",
"tea bagging", "teets", "teez", "testical", "testicle", "threesome",
"throating", "thundercunt", "tied up", "tight white", "tit", "tit wank",
"titfuck", "tities", "tits", "titt", "tittie5", "tittiefucker", "titties",
"titty", "tittyfuck", "tittywank", "titwank", "tongue in a", "topless",
"tosser", "towelhead", "tranny", "tribadism", "trumped", "tub girl", "tubgirl",
"turd", "tushy", "tw4t", "twat", "twathead", "twatlips", "twats", "twatty",
"twatwaffle", "twink", "twinkie", "two fingers", "two fingers with tongue",
"two girls one cup", "twunt", "twunter", "unclefucker", "undressing",
"upskirt", "urethra play", "urophilia", "v14gra", "v1gra", "va-j-j", "vag",
"vagina", "vajayjay", "venus mound", "veqtable", "viagra", "vibrator",
"violet wand", "vjayjay", "vorarephilia", "voyeur", "vulva", "w00se", "wang",
"wank", "wanker", "wankjob", "wanky", "wet dream", "wetback", "white power",
"whoar", "whore", "whorebag", "whoreface", "willies", "willy", "window licker",
"wiseass", "wiseasses", "wog", "wop", "wrapping men", "wrinkled starfish",
"wtf", "xrated", "xx", "xxx", "yaoi", "yellow showers", "yid", "yiffy",
"zibbi", "zoophilia", "zubb",

"buscu", "buồi", "bú buồi", "bú cu", "cak", "chăn rau", "chịch", "coincard",
"cc", "con bà mày", "con bán hoa", "con cak", "con chó chết", "con chó đẻ",
"con cặc", "con mẹ mày", "con đĩ", "cặc", "cứt", "dmm", "dm mày", "dm thằng",
"kệ mẹ mày", "kệ mẹ tao", "kệ mẹ thằng", "lìn", "lồn", "lỗ đít", "muscu",
"mút cu", "mẹ bố mày", "mẹ bố thằng", "mẹ đồ ngu", "mẹ thằng ngu",
"mẹ con ngu", "như con cu", "như bò", "nện nhau", "phịch", "thằng chó chết",
"thằng chó này", "thằng chó đẻ", "vaicalon", "vcl", "vice ca lone",
"vice car lone", "vicecalone", "vicecarlone", "vkl", "vãi cả cứt",
"vãi cả lồn", "vãi cả đái", "vãi cứt", "vãi lồn", "vãi đái", "vú", "vếu",
"ăn cu", "ăn cặc", "ăn cứt", "ăn máu lồn", "đậu má", "đù mía", "đái", "đcm",
"đcmm", "đéo", "đĩ", "đĩ mẹ mày", "địt", "địt bà", "địt bố", "địt cha",
"địt con mẹ mày", "địt con đĩ mẹ mày", "địt cái lồn mẹ mày",
"địt cả lũ nhà mày", "địt cụ", "địt cụ mày", "địt mẹ", "địt mẹ mày",
"địt mẹ nhà mày", "địt", "đm", "đmm", "đéo", "đù", "đù má", "đồ chó chết",
"đồ chó đẻ", "đụ", "đụ má", "đụ má mày", "đụ má mày con chó",
"đụ má mày con đĩ", "đụ mẹ mày"];
    function wrongCmdProfile() {
        let noti = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#3d87ff")
            .addField(`Bạn đang dùng command này sai cách,`, `Hướng dẫn :`)
            .addField("Cách dùng chính xác :", `=)profile để biết thông tin chính mình hoặc =)profile <tag\_một\_người>`)
            .addField("Ví dụ :", `=)profile @Kuroemon#3193`);
        message.channel.sendEmbed(noti);
    }
    for (let i = 0; i< bad_words.length; i++) {
        if (tmsg.includes(' '+bad_words[i]+' ')) {
            //message.channel.sendMessage(`Yêu cầu ban thành viên <@${message.author.id}> vì lý do nói tục !!`);
            let ntfct = new Discord.RichEmbed()
                .setColor("#ff463d")
                .setDescription(`Đề nghị các mod xử lí thành viên <@${message.author.id}> vì lý do nói tục !!`)
                .addField("Bằng chứng : ", `<@${message.author.id}> đã nói : "${message.content}"`)
                .addField("Thời gian : ", `${message.createdAt}`);
            message.channel.sendEmbed(ntfct);
            return;
        }
    }
    if ((args.length===0)&&((tmsg.includes(' dm '))||(tmsg.includes(' đù ')))) {
        let ntfct1 = new Discord.RichEmbed()
            .setColor("#ff463d")
            .setDescription(`Đề nghị các mod xử lí thành viên <@${message.author.id}> vì lý do nói tục !!`)
            .addField("Bằng chứng : ", `<@${message.author.id}> đã nói : "${message.content}"`)
            .addField("Thời gian : ", `${message.createdAt}`);
        message.channel.sendEmbed(ntfct1);
        return;
    }
    if (tmsg.includes('drama'))
        message.channel.sendMessage("Hít hà, hít hà");
    if (!command.startsWith(prefix)) return;
    if (command === `${prefix}profile`) {
        if (args.length>1) {
            wrongCmdProfile();
            return;
        } else if (args.length===0) {
            let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setColor("#3d87ff")
                .addField("Tên người dùng : ", `${message.author.username}#${message.author.discriminator}`)
                .addField("Mã số :", `${message.author.id}`)
                .addField("Tạo tài khoản lúc : ", `${message.author.createdAt}`)
                .addField("Trạng thái : ", `${message.author.presence.status}` );
            message.channel.sendEmbed(embed);
            return;
        }
        let usermention = message.guild.member(message.mentions.users.first());
        if (usermention){
            let embed = new Discord.RichEmbed()
                .setAuthor(usermention.user.username)
                .setColor("#3d87ff")
                .addField("Tên người dùng : ", `${usermention.user.username}#${usermention.user.discriminator}`)
                .addField("Mã số : ", `${usermention.user.id}`)
                .addField("Tạo tài khoản lúc : ", `${usermention.user.createdAt}`)
                .addField("Trạng thái : ", `${usermention.user.presence.status}`);
            message.channel.sendEmbed(embed);
            return;
        } else{
            wrongCmdProfile();
            return;
        }

    } else if (command === `${prefix}prefix`){
        message.channel.sendMessage("My prefix is =)");
    } else if (command === `${prefix}ping`){
        message.channel.sendMessage("Pong !");
    } else if (command === `${prefix}help`){
        let newms = new Discord.RichEmbed()
            .setColor("#3d87ff")
            .addField("myinfo : ", `Hiện thông tin người dùng của bạn`)
            .addField("ping : ", `Chỉ là chơi`)
            .addField("prefix : ", `Cho bạn biết prefix của Conan Bot`)
            .addField("help : ", `Yêu cầu trợ giúp về bot này :grin:` )
            .addField("Một khi bạn nói tục bạn sẽ bị mách với các mod :grin: ", `Hết`);
        
        if (args.length>0){
            newms.addField("Bạn đang dùng command này sai đấy nhé !!");
        }
        message.channel.sendEmbed(newms);
    } else if (command === `${prefix}say`) {
        let says = new Discord.RichEmbed()
            .setColor("#3d87ff")
            .addField(message.author.username,`${tmsg.substring(6)}`);
        message.channel.sendEmbed(says);
    } /*else if (command.startsWith(prefix)) {
        if ((command.charCodeAt(2) <= 47) || 
            (command.charCodeAt(2) >= 123) || 
            ((command.charCodeAt(2)>=58) && (command.charCodeAt(2)<=64)) ||
            ((command.charCodeAt(2)>=91)&&(command.charCodeAt(2)<=96))) return;
        let myerr = new Discord.RichEmbed()
            .setColor("#3d87ff")
            .addField(message.author.username,`${command.substring(2)} không phải là một command của mình.`);
        message.channel.sendEmbed(myerr);
    }*/
});
bot.login(botSettings.token);
