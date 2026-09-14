// 1990s-inspired TBS Superstation catalog.
// Live entries are full episodes, full-episode compilations, marathons, or full movies.
window.TBS_PROGRAMS = {
  tom28:{id:"TBS-TJ28",title:"Tom & Jerry — Mega Compilation Vol. 28",year:2026,collection:"Classic Hanna-Barbera/MGM Animation · Full Episodes",runtimeSeconds:1800,videoId:"u3ElS1Z_7Q4",cleared:true},
  tom29:{id:"TBS-TJ29",title:"Tom & Jerry — Mega Compilation Vol. 29",year:2026,collection:"Classic Hanna-Barbera/MGM Animation · Full Episodes",runtimeSeconds:1800,videoId:"G1nPAY7FQb8",cleared:true},
  tom30:{id:"TBS-TJ30",title:"Tom & Jerry — Mega Compilation Vol. 30",year:2026,collection:"Classic Hanna-Barbera/MGM Animation · Full Episodes",runtimeSeconds:1800,videoId:"4CU8h5f8TYY",cleared:true},
  tom31:{id:"TBS-TJ31",title:"Tom & Jerry — Mega Compilation Vol. 31",year:2026,collection:"Classic Hanna-Barbera/MGM Animation · Full Episodes",runtimeSeconds:1800,videoId:"mkPLXTXY2WY",cleared:true},
  looneyA:{id:"TBS-LT-A",title:"Looney Tunes — Legendary Characters",year:2026,collection:"Classic Warner Animation · Full-Episode Compilation",runtimeSeconds:1800,videoId:"N3JYlyt4hiA",cleared:true},
  looneyB:{id:"TBS-LT-B",title:"Looney Tunes — Bugs Bunny Full Episode Compilation",year:2026,collection:"Classic Warner Animation · Full Episodes",runtimeSeconds:1800,videoId:"equDXjlJZd0",cleared:true},
  planetA:{id:"TBS-CP-A",title:"Captain Planet — Earth Day Compilation",year:2025,collection:"1990s Cartoon Block · Full Episodes",runtimeSeconds:3600,videoId:"ZlpOdiAj71I",cleared:true},
  planetB:{id:"TBS-CP-B",title:"Captain Planet — Marathon",year:2026,collection:"1990s Cartoon Block · Full Episodes",runtimeSeconds:3600,videoId:"2tR4w8-O8g0",cleared:true},

  bossA:{id:"TBS-WTB-A",title:"Who's the Boss? — Full Episodes",year:1984,collection:"TBS Sitcom Block · Full Episodes",runtimeSeconds:3600,videoId:"TIeN4mKN240",cleared:true},
  bossB:{id:"TBS-WTB-B",title:"Who's the Boss? — Back-to-Back Episodes",year:1984,collection:"TBS Sitcom Block · Full Episodes",runtimeSeconds:3600,videoId:"WauU4ZgI1io",cleared:true},
  dickVanDyke:{id:"TBS-DVD",title:"The Dick Van Dyke Show — The Sick Boy and the Sitter",year:1961,collection:"Classic Comedy · Full Episode",runtimeSeconds:1560,videoId:"XHXG25zKhCI",cleared:true},
  addamsSchool:{id:"TBS-ADD-1",title:"The Addams Family — Goes to School",year:1964,collection:"Classic Comedy · Full Episode",runtimeSeconds:1500,videoId:"HQlB4jSy-3Q",cleared:true},
  addamsVIP:{id:"TBS-ADD-2",title:"The Addams Family — Meet the VIPs",year:1964,collection:"Classic Comedy · Full Episode",runtimeSeconds:1500,videoId:"TEaT0z5kUo4",cleared:true},
  addamsTree:{id:"TBS-ADD-3",title:"The Addams Family — Family Tree",year:1964,collection:"Classic Comedy · Full Episode",runtimeSeconds:1500,videoId:"8jf3NUmvOfw",cleared:true},
  addamsHalloween:{id:"TBS-ADD-4",title:"The Addams Family — Halloween",year:1964,collection:"Classic Comedy · Full Episode",runtimeSeconds:1500,videoId:"LavY2K3-Vhs",cleared:true},
  addamsNeighbors:{id:"TBS-ADD-5",title:"The Addams Family — New Neighbors",year:1964,collection:"Classic Comedy · Full Episode",runtimeSeconds:1500,videoId:"NCeu5Wy-oVI",cleared:true},
  dannyThomas:{id:"TBS-DANNY",title:"The Danny Thomas Show — Danny and the Actor's School",year:1960,collection:"Classic Comedy · Full Episode",runtimeSeconds:1560,videoId:"KAAUP2X2aIo",cleared:true},

  movieJustice:{id:"TBS-MOV-1",title:"Color of Justice",year:1997,collection:"Superstation Movie · Full Movie",runtimeSeconds:5700,videoId:"JJdB9gp4pnA",cleared:true},
  movieVanished:{id:"TBS-MOV-2",title:"Vanished Without a Trace",year:1993,collection:"Superstation Movie · Full Movie",runtimeSeconds:5340,videoId:"6R_kihZCChM",cleared:true},
  movieTrial:{id:"TBS-MOV-3",title:"The Trial",year:2010,collection:"Superstation Movie · Full Movie",runtimeSeconds:6048,videoId:"KSoHhMbdppw",cleared:true},
  movieBride:{id:"TBS-MOV-4",title:"Children of the Bride",year:1990,collection:"Superstation Family Movie · Full Movie",runtimeSeconds:5700,videoId:"AVPLmB3PVbg",cleared:true},
  movieFamilyMess:{id:"TBS-MOV-5",title:"The Family Mess",year:1990,collection:"Superstation Comedy · Full Movie",runtimeSeconds:5700,videoId:"f58_dv6uGjM",cleared:true},
  movieButler:{id:"TBS-MOV-6",title:"Bob the Butler",year:2005,collection:"Superstation Family Comedy · Full Movie",runtimeSeconds:5400,videoId:"vLRK63m0m7Y",cleared:true},
  movieMarching:{id:"TBS-MOV-7",title:"Marching Out of Time",year:1993,collection:"Superstation Comedy · Full Movie",runtimeSeconds:5700,videoId:"6lJ7IW2gVps",cleared:true}
};

const cartoons=["tom28","tom29","tom30","tom31","looneyA","looneyB","planetA","planetB"];
const sitcom30=["dickVanDyke","addamsSchool","addamsVIP","addamsTree","addamsHalloween","addamsNeighbors","dannyThomas"];
const sitcom60=["bossA","bossB"];
const movies=["movieJustice","movieVanished","movieTrial","movieBride","movieFamilyMess","movieButler","movieMarching"];

window.TBS_DAY_TEMPLATE = [
  {minute:0,duration:120,choices:movies},{minute:120,duration:120,choices:["movieVanished","movieTrial","movieJustice"]},
  {minute:240,duration:60,choices:sitcom60},

  {minute:300,duration:30,choices:cartoons},{minute:330,duration:30,choices:cartoons},{minute:360,duration:30,choices:cartoons},
  {minute:390,duration:30,choices:cartoons},{minute:420,duration:30,choices:cartoons},{minute:450,duration:30,choices:cartoons},

  {minute:480,duration:60,choices:sitcom60},{minute:540,duration:60,choices:["bossB","bossA"]},
  {minute:600,duration:30,choices:sitcom30},{minute:630,duration:30,choices:sitcom30},
  {minute:660,duration:30,choices:sitcom30},{minute:690,duration:30,choices:sitcom30},

  {minute:720,duration:120,choices:["movieTrial","movieJustice","movieVanished"]},

  {minute:840,duration:30,choices:cartoons},{minute:870,duration:30,choices:cartoons},{minute:900,duration:30,choices:cartoons},
  {minute:930,duration:30,choices:cartoons},{minute:960,duration:30,choices:cartoons},{minute:990,duration:30,choices:cartoons},

  {minute:1020,duration:30,choices:sitcom30},{minute:1050,duration:30,choices:sitcom30},
  {minute:1080,duration:120,choices:movies},{minute:1200,duration:120,choices:["movieVanished","movieTrial","movieJustice"]},
  {minute:1320,duration:120,choices:["movieTrial","movieJustice","movieVanished"]}
];

window.INFINITY_CHANNEL={
  id:"TBS",era:"1990s Superstation",reset:"12:00 AM viewer local time",broadcastTimeZone:"viewer local",
  movieTimes:["6:00 PM","8:00 PM","10:00 PM"],
  sourcePolicy:"Only full episodes, full-episode compilations, marathons and full movies are eligible for live playback. Preview clips are not scheduled."
};
