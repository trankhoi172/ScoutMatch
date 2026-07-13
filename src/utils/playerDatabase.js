import { seedPlayers, realPlayersRegistry } from '../data/players';

const FIFA_IDS = {
  lionelmessi: "158023",
  cristianoronaldo: "20801",
  erlinghaaland: "239085",
  kylianmbappe: "231747",
  mohamedsalah: "209331",
  kevindebruyne: "192985",
  virgilvandijk: "203376",
  alissonbecker: "212831",
  pele: "243458",
  diegomaradona: "190042",
  harrykane: "202126",
  robertlewandowski: "188545",
  judebellingham: "252371",
  bukayosaka: "246781",
  viniciusjunior: "238794",
  lukamodric: "177003",
  declanrice: "234396",
  pedri: "251852",
  williamsaliba: "243630",
  trentalexanderarnold: "231226",
  theohernandez: "232656",
  manuelneuer: "167495",
  gianluigidonnarumma: "230621",
  thibautcourtois: "192119",
  paolomaldini: "250005",
  zinedinezidane: "250006",
  francescototti: "250010",
  sofyanamrabat: "234905",
  francobaresi: "250008",
  jonathantah: "212626",
  carlespuyol: "250007",
  gennarogattuso: "250009",
  victorboniface: "263595",
  ronaldonazario: "243459"
};

const getPlayerSlug = (name) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
};

const injectPlayerImages = (player) => {
  const slug = getPlayerSlug(player.name);
  const fifaId = FIFA_IDS[slug];
  
  if (fifaId) {
    player.imageUrl = `https://ratings-c-prod.ea.com/ratings/25/player-portraits/${fifaId}.png`;
    player.imageFallbackUrls = [
      `https://ratings-c-prod.ea.com/ratings/24/player-portraits/${fifaId}.png`,
      `https://cdn.futbin.com/content/fifa24/img/players/${fifaId}.png`,
      `https://cdn.sofifa.net/players/180/165/${fifaId}.png`
    ];
  } else {
    player.imageUrl = null;
    player.imageFallbackUrls = [];
  }
  return player;
};

const PLAYING_STYLES_POOL = ["High Press", "Counter Attack", "Possession", "Direct Football", "Dribbler", "Creative", "Clinical Finisher", "Fast Runner", "Crossing Specialist", "Long Pass Specialist", "Playmaker", "Physical", "Defensive Leader", "Set Piece Specialist"];

// Helper to get random item from array
const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper to get random number in range
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Procedural attribute generator for a real player profile
const generateAttributesForRealPlayer = (p, index) => {
  const primaryPosition = p.primaryPosition;
  const isGK = primaryPosition === "GK";

  const preferredFoot = p.preferredFoot;
  const weakFoot = preferredFoot === "both" ? 5 : randomRange(3, 4);

  // Bracket generator function
  const getStat = (bracket) => {
    if (bracket === "high") return randomRange(76, 90);
    if (bracket === "medium") return randomRange(60, 75);
    return randomRange(30, 59); // low
  };

  // Profile brackets based on positions
  let physicalBracket = "medium";
  let technicalBracket = "medium";
  let defensiveBracket = "medium";
  
  if (["CB", "CDM"].includes(primaryPosition)) {
    physicalBracket = Math.random() < 0.6 ? "high" : "medium";
    defensiveBracket = "high";
    technicalBracket = "low";
  } else if (["LW", "RW", "CAM"].includes(primaryPosition)) {
    physicalBracket = "high"; // Pace / agility
    technicalBracket = "high";
    defensiveBracket = "low";
  } else if (["ST", "CF"].includes(primaryPosition)) {
    physicalBracket = "medium";
    technicalBracket = "high"; // Shooting / finishing
    defensiveBracket = "low";
  } else if (["CM", "LM", "RM"].includes(primaryPosition)) {
    physicalBracket = "medium";
    technicalBracket = "high"; // Passing / vision
    defensiveBracket = "medium";
  } else if (["LB", "RB", "LWB", "RWB"].includes(primaryPosition)) {
    physicalBracket = "high"; // Pace / Stamina
    technicalBracket = "medium";
    defensiveBracket = "medium";
  }

  const physical = {};
  const technical = {};
  const defensive = {};
  const goalkeeper = {};

  if (isGK) {
    // Physical stats for GK
    physical.acceleration = randomRange(45, 62);
    physical.sprintSpeed = randomRange(45, 62);
    physical.agility = randomRange(58, 80);
    physical.balance = randomRange(50, 72);
    physical.strength = randomRange(70, 88);
    physical.stamina = randomRange(40, 65);
    physical.jumping = randomRange(75, 90);
    physical.reactions = randomRange(75, 90);
    physical.endurance = randomRange(45, 68);
    physical.physicality = randomRange(70, 85);

    // Technical stats for GK (low except distribution/kicking/ball control)
    technical.ballControl = randomRange(55, 78);
    technical.firstTouch = randomRange(55, 78);
    technical.dribbling = randomRange(25, 50);
    technical.closeControl = randomRange(25, 48);
    technical.shortPassing = randomRange(60, 82);
    technical.longPassing = randomRange(60, 85);
    technical.vision = randomRange(55, 80);
    technical.crossing = randomRange(10, 25);
    technical.curve = randomRange(12, 35);
    technical.finishing = randomRange(8, 25);
    technical.shotPower = randomRange(40, 70);
    technical.longShots = randomRange(8, 25);
    technical.volleys = randomRange(8, 25);
    technical.heading = randomRange(35, 55);
    technical.penalties = randomRange(30, 60);
    technical.freeKickAccuracy = randomRange(10, 35);
    technical.throughBalls = randomRange(40, 70);
    technical.skillMoves = randomRange(20, 45);

    // Defensive stats for GK
    defensive.defensiveAwareness = randomRange(10, 30);
    defensive.interceptions = randomRange(10, 30);
    defensive.standingTackle = randomRange(10, 25);
    defensive.slidingTackle = randomRange(8, 20);
    defensive.marking = randomRange(8, 22);
    defensive.pressing = randomRange(15, 38);
    defensive.aggression = randomRange(25, 55);
    defensive.aerialAbility = randomRange(75, 90);

    // GK Specific stats
    goalkeeper.diving = randomRange(72, 88);
    goalkeeper.reflexes = randomRange(74, 91);
    goalkeeper.handling = randomRange(70, 86);
    goalkeeper.positioning = randomRange(72, 88);
    goalkeeper.kicking = randomRange(65, 85);
    goalkeeper.distribution = randomRange(68, 86);
    goalkeeper.communication = randomRange(70, 88);
    goalkeeper.oneOnOne = randomRange(72, 90);

  } else {
    // OUTFIELD PLAYER STATS
    // Physical
    physical.acceleration = getStat(physicalBracket === "high" ? "high" : "medium");
    physical.sprintSpeed = getStat(physicalBracket === "high" ? "high" : "medium");
    physical.agility = getStat(physicalBracket === "high" ? "high" : "medium");
    physical.balance = getStat("medium");
    physical.strength = getStat(primaryPosition === "CB" || primaryPosition === "ST" ? "high" : "medium");
    physical.stamina = getStat(primaryPosition === "CDM" || ["LB", "RB", "LWB", "RWB"].includes(primaryPosition) ? "high" : "medium");
    physical.jumping = getStat(primaryPosition === "CB" || primaryPosition === "ST" ? "high" : "medium");
    physical.reactions = getStat("medium");
    physical.endurance = physical.stamina - randomRange(0, 5);
    physical.physicality = Math.round((physical.strength + physical.stamina + physical.jumping) / 3);

    // Technical
    technical.ballControl = getStat(technicalBracket);
    technical.firstTouch = getStat(technicalBracket);
    technical.dribbling = getStat(["LW", "RW", "CAM", "SS"].includes(primaryPosition) ? "high" : technicalBracket);
    technical.closeControl = technical.dribbling - randomRange(0, 4);
    technical.shortPassing = getStat(["CM", "CAM", "CDM", "F9"].includes(primaryPosition) ? "high" : "medium");
    technical.longPassing = getStat(["CM", "CAM", "CDM"].includes(primaryPosition) ? "high" : "medium");
    technical.vision = getStat(["CAM", "CM", "F9"].includes(primaryPosition) ? "high" : "medium");
    technical.crossing = getStat(["LB", "RB", "LWB", "RWB", "LM", "RM", "LW", "RW"].includes(primaryPosition) ? "high" : "low");
    technical.curve = getStat("medium");
    technical.finishing = getStat(["ST", "CF", "SS", "F9"].includes(primaryPosition) ? "high" : (["LW", "RW", "CAM"].includes(primaryPosition) ? "medium" : "low"));
    technical.shotPower = getStat(["ST", "CF", "CAM"].includes(primaryPosition) ? "high" : "medium");
    technical.longShots = getStat(["CAM", "CM", "LW", "RW", "ST"].includes(primaryPosition) ? "high" : "medium");
    technical.volleys = getStat("medium");
    technical.heading = getStat(["CB", "ST", "CF"].includes(primaryPosition) ? "high" : "low");
    technical.penalties = getStat("medium");
    technical.freeKickAccuracy = getStat("medium");
    technical.throughBalls = technical.shortPassing - randomRange(2, 6);
    technical.skillMoves = getStat(["LW", "RW", "CAM", "SS"].includes(primaryPosition) ? "high" : "medium");

    // Defensive
    defensive.defensiveAwareness = getStat(defensiveBracket);
    defensive.interceptions = getStat(defensiveBracket);
    defensive.standingTackle = getStat(defensiveBracket);
    defensive.slidingTackle = defensive.standingTackle - randomRange(2, 8);
    defensive.marking = getStat(defensiveBracket);
    defensive.pressing = getStat(["CB", "CDM", "CM", "LB", "RB"].includes(primaryPosition) ? "high" : "medium");
    defensive.aggression = getStat(primaryPosition === "CB" || primaryPosition === "CDM" ? "high" : "medium");
    defensive.aerialAbility = getStat(primaryPosition === "CB" ? "high" : "medium");

    // GK Attributes default to low for outfield players
    goalkeeper.diving = randomRange(5, 15);
    goalkeeper.reflexes = randomRange(5, 15);
    goalkeeper.handling = randomRange(5, 15);
    goalkeeper.positioning = randomRange(5, 15);
    goalkeeper.kicking = randomRange(5, 15);
    goalkeeper.distribution = randomRange(5, 15);
    goalkeeper.communication = randomRange(5, 15);
    goalkeeper.oneOnOne = randomRange(5, 15);
  }

  // Tactical profile selection
  const tacticalProfile = [];
  if (isGK) {
    tacticalProfile.push("sweeperKeeper");
  } else {
    const roleOptions = {
      CB: ["ballWinning"],
      LB: ["insideForward", "boxToBox", "traditionalWinger"],
      RB: ["insideForward", "boxToBox", "traditionalWinger"],
      LWB: ["traditionalWinger", "boxToBox", "insideForward"],
      RWB: ["traditionalWinger", "boxToBox", "insideForward"],
      CDM: ["ballWinning", "deepPlaymaker"],
      CM: ["boxToBox", "playmaker", "deepPlaymaker"],
      CAM: ["playmaker", "insideForward"],
      LM: ["traditionalWinger", "insideForward", "playmaker"],
      RM: ["traditionalWinger", "insideForward", "playmaker"],
      LW: ["insideForward", "traditionalWinger", "advancedForward"],
      RW: ["insideForward", "traditionalWinger", "advancedForward"],
      CF: ["false9", "poacher", "advancedForward", "targetMan"],
      ST: ["poacher", "targetMan", "advancedForward", "completeForward"],
      SS: ["false9", "playmaker", "poacher"],
      F9: ["false9", "playmaker"]
    };
    const options = roleOptions[primaryPosition] || ["boxToBox"];
    tacticalProfile.push(randomChoice(options));
    if (Math.random() < 0.4 && options.length > 1) {
      const secondOption = options.find(opt => opt !== tacticalProfile[0]);
      if (secondOption) tacticalProfile.push(secondOption);
    }
  }

  // Playing style selection
  const playingStyle = [];
  if (isGK) {
    playingStyle.push("Possession", "Defensive Leader");
  } else {
    const styleOptions = {
      defensive: ["High Press", "Physical", "Defensive Leader"],
      midfield: ["Possession", "Creative", "Playmaker", "Long Pass Specialist"],
      winger: ["Counter Attack", "Dribbler", "Fast Runner", "Crossing Specialist"],
      forward: ["Clinical Finisher", "Physical", "Counter Attack"]
    };

    let cat = "midfield";
    if (["CB", "CDM"].includes(primaryPosition)) cat = "defensive";
    else if (["LB", "RB", "LWB", "RWB", "LW", "RW", "LM", "RM"].includes(primaryPosition)) cat = "winger";
    else if (["ST", "CF", "SS", "F9"].includes(primaryPosition)) cat = "forward";

    playingStyle.push(randomChoice(styleOptions[cat]));
    playingStyle.push(randomChoice(PLAYING_STYLES_POOL.filter(style => !playingStyle.includes(style))));
    if (Math.random() < 0.5) {
      playingStyle.push(randomChoice(PLAYING_STYLES_POOL.filter(style => !playingStyle.includes(style))));
    }
  }

  const cleanId = `real_${p.name.toLowerCase().replace(/[^a-z]/g, '')}_${index}`;

  return {
    id: cleanId,
    name: p.name,
    nickname: "",
    dob: `${new Date().getFullYear() - p.age}-01-01`,
    age: p.age,
    nationality: p.nationality,
    height: p.height,
    weight: p.weight,
    preferredFoot: p.preferredFoot,
    weakFoot,
    primaryPosition: p.primaryPosition,
    secondaryPositions: p.secondaryPositions,
    club: p.club,
    league: p.league,
    nationalTeam: p.nationality,
    status: p.status,
    isGK,
    physical,
    technical,
    defensive,
    goalkeeper,
    tacticalProfile,
    playingStyle
  };
};

class PlayerDatabaseManager {
  constructor() {
    this.players = [];
    this.initialized = false;
  }

  initialize() {
    if (this.initialized) return;

    // 1. Add hand-crafted stars (always pre-defined, exact ratings)
    this.players = [...seedPlayers];

    // 2. Add real players from the registry, generating their ratings positionally
    realPlayersRegistry.forEach((p, idx) => {
      // Avoid duplicate registrations
      const normalizedName = p.name.toLowerCase();
      const alreadyExists = this.players.some(sp => sp.name.toLowerCase() === normalizedName);
      if (!alreadyExists) {
        this.players.push(generateAttributesForRealPlayer(p, idx));
      }
    });

    // 3. Inject image URLs to decouple from UI
    this.players = this.players.map(p => injectPlayerImages(p));

    this.initialized = true;
    console.log(`Real Footballer Database Initialized. Total Real Verified Players: ${this.players.length}`);
  }

  getAllPlayers() {
    this.initialize();
    return this.players;
  }

  getPlayersByPosition(position) {
    this.initialize();
    return this.players.filter(p => p.primaryPosition === position || p.secondaryPositions.includes(position));
  }

  addCustomPlayer(playerData) {
    this.initialize();
    this.players.push(playerData);
  }
}

export const playerDatabase = new PlayerDatabaseManager();
