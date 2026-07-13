// Seed Database of 150+ Real Professional Footballers and Retired Legends
export const seedPlayers = [
  // ==================== FORWARDS (ST, CF, SS, F9, RW, LW) ====================
  {
    id: "messi",
    name: "Lionel Messi",
    nickname: "La Pulga",
    dob: "1987-06-24",
    age: 38,
    nationality: "Argentina",
    height: 170,
    weight: 72,
    preferredFoot: "left",
    weakFoot: 4,
    primaryPosition: "RW",
    secondaryPositions: ["CF", "CAM", "F9"],
    club: "Inter Miami",
    league: "MLS",
    nationalTeam: "Argentina",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 91, sprintSpeed: 80, agility: 95, balance: 97, strength: 68,
      stamina: 75, jumping: 66, reactions: 94, endurance: 74, physicality: 65
    },
    technical: {
      ballControl: 96, firstTouch: 95, dribbling: 97, closeControl: 98, shortPassing: 94,
      longPassing: 91, vision: 95, crossing: 85, curve: 93, finishing: 95,
      shotPower: 86, longShots: 93, volleys: 88, heading: 65, penalties: 90,
      freeKickAccuracy: 94, throughBalls: 96, skillMoves: 90
    },
    defensive: {
      defensiveAwareness: 35, interceptions: 40, standingTackle: 35, slidingTackle: 24,
      marking: 30, pressing: 55, aggression: 44, aerialAbility: 38
    },
    goalkeeper: {
      diving: 6, reflexes: 8, handling: 11, positioning: 14, kicking: 15,
      distribution: 15, communication: 10, oneOnOne: 8
    },
    tacticalProfile: ["playmaker", "false9", "insideForward"],
    playingStyle: ["Possession", "Dribbler", "Creative", "Playmaker", "Set Piece Specialist", "Clinical Finisher"]
  },
  {
    id: "ronaldo",
    name: "Cristiano Ronaldo",
    nickname: "CR7",
    dob: "1985-02-05",
    age: 41,
    nationality: "Portugal",
    height: 187,
    weight: 85,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "ST",
    secondaryPositions: ["LW", "CF"],
    club: "Al Nassr",
    league: "Saudi Pro League",
    nationalTeam: "Portugal",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 82, sprintSpeed: 87, agility: 80, balance: 85, strength: 84,
      stamina: 85, jumping: 95, reactions: 93, endurance: 82, physicality: 82
    },
    technical: {
      ballControl: 88, firstTouch: 86, dribbling: 84, closeControl: 82, shortPassing: 80,
      longPassing: 75, vision: 82, crossing: 78, curve: 81, finishing: 92,
      shotPower: 94, longShots: 88, volleys: 87, heading: 93, penalties: 95,
      freeKickAccuracy: 80, throughBalls: 78, skillMoves: 85
    },
    defensive: {
      defensiveAwareness: 28, interceptions: 29, standingTackle: 32, slidingTackle: 23,
      marking: 25, pressing: 45, aggression: 65, aerialAbility: 90
    },
    goalkeeper: {
      diving: 7, reflexes: 11, handling: 15, positioning: 14, kicking: 9,
      distribution: 8, communication: 11, oneOnOne: 12
    },
    tacticalProfile: ["poacher", "advancedForward", "insideForward"],
    playingStyle: ["Counter Attack", "Clinical Finisher", "Fast Runner", "Physical", "Set Piece Specialist"]
  },
  {
    id: "haaland",
    name: "Erling Haaland",
    nickname: "The Terminator",
    dob: "2000-07-21",
    age: 25,
    nationality: "Norway",
    height: 195,
    weight: 94,
    preferredFoot: "left",
    weakFoot: 3,
    primaryPosition: "ST",
    secondaryPositions: ["CF"],
    club: "Manchester City",
    league: "Premier League",
    nationalTeam: "Norway",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 88, sprintSpeed: 94, agility: 76, balance: 78, strength: 93,
      stamina: 82, jumping: 85, reactions: 92, endurance: 80, physicality: 88
    },
    technical: {
      ballControl: 82, firstTouch: 80, dribbling: 78, closeControl: 75, shortPassing: 74,
      longPassing: 55, vision: 72, crossing: 60, curve: 65, finishing: 96,
      shotPower: 94, longShots: 84, volleys: 88, heading: 85, penalties: 88,
      freeKickAccuracy: 62, throughBalls: 68, skillMoves: 65
    },
    defensive: {
      defensiveAwareness: 38, interceptions: 30, standingTackle: 43, slidingTackle: 30,
      marking: 32, pressing: 78, aggression: 85, aerialAbility: 84
    },
    goalkeeper: {
      diving: 7, reflexes: 8, handling: 12, positioning: 11, kicking: 14,
      distribution: 13, communication: 9, oneOnOne: 12
    },
    tacticalProfile: ["poacher", "targetMan", "advancedForward"],
    playingStyle: ["Counter Attack", "Clinical Finisher", "Fast Runner", "Physical"]
  },
  {
    id: "mbappe",
    name: "Kylian Mbappé",
    nickname: "Donatello",
    dob: "1998-12-20",
    age: 27,
    nationality: "France",
    height: 180,
    weight: 75,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "LW",
    secondaryPositions: ["ST", "CF", "RW"],
    club: "Real Madrid",
    league: "La Liga",
    nationalTeam: "France",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 97, sprintSpeed: 97, agility: 92, balance: 83, strength: 78,
      stamina: 87, jumping: 77, reactions: 93, endurance: 84, physicality: 74
    },
    technical: {
      ballControl: 91, firstTouch: 89, dribbling: 93, closeControl: 90, shortPassing: 84,
      longPassing: 71, vision: 83, crossing: 80, curve: 82, finishing: 93,
      shotPower: 90, longShots: 82, volleys: 84, heading: 72, penalties: 84,
      freeKickAccuracy: 69, throughBalls: 80, skillMoves: 90
    },
    defensive: {
      defensiveAwareness: 26, interceptions: 38, standingTackle: 34, slidingTackle: 32,
      marking: 24, pressing: 60, aggression: 64, aerialAbility: 40
    },
    goalkeeper: {
      diving: 6, reflexes: 12, handling: 8, positioning: 11, kicking: 14,
      distribution: 12, communication: 10, oneOnOne: 11
    },
    tacticalProfile: ["insideForward", "advancedForward"],
    playingStyle: ["Counter Attack", "Dribbler", "Clinical Finisher", "Fast Runner"]
  },
  {
    id: "salah",
    name: "Mohamed Salah",
    nickname: "Egyptian King",
    dob: "1992-06-15",
    age: 33,
    nationality: "Egypt",
    height: 175,
    weight: 71,
    preferredFoot: "left",
    weakFoot: 3,
    primaryPosition: "RW",
    secondaryPositions: ["ST", "CF"],
    club: "Liverpool",
    league: "Premier League",
    nationalTeam: "Egypt",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 89, sprintSpeed: 90, agility: 90, balance: 91, strength: 75,
      stamina: 87, jumping: 69, reactions: 92, endurance: 84, physicality: 73
    },
    technical: {
      ballControl: 88, firstTouch: 86, dribbling: 89, closeControl: 88, shortPassing: 84,
      longPassing: 75, vision: 85, crossing: 80, curve: 84, finishing: 91,
      shotPower: 83, longShots: 84, volleys: 83, heading: 59, penalties: 86,
      freeKickAccuracy: 69, throughBalls: 82, skillMoves: 80
    },
    defensive: {
      defensiveAwareness: 38, interceptions: 45, standingTackle: 43, slidingTackle: 38,
      marking: 38, pressing: 82, aggression: 63, aerialAbility: 45
    },
    goalkeeper: {
      diving: 14, reflexes: 14, handling: 9, positioning: 11, kicking: 12,
      distribution: 13, communication: 6, oneOnOne: 12
    },
    tacticalProfile: ["insideForward", "advancedForward"],
    playingStyle: ["Counter Attack", "Possession", "Dribbler", "Clinical Finisher", "Fast Runner"]
  },
  {
    id: "kane",
    name: "Harry Kane",
    nickname: "Hurricane",
    dob: "1993-07-28",
    age: 32,
    nationality: "England",
    height: 188,
    weight: 86,
    preferredFoot: "right",
    weakFoot: 5,
    primaryPosition: "ST",
    secondaryPositions: ["CF", "F9"],
    club: "Bayern Munich",
    league: "Bundesliga",
    nationalTeam: "England",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 68, sprintSpeed: 70, agility: 72, balance: 81, strength: 84,
      stamina: 83, jumping: 79, reactions: 92, endurance: 84, physicality: 82
    },
    technical: {
      ballControl: 86, firstTouch: 88, dribbling: 81, closeControl: 79, shortPassing: 85,
      longPassing: 86, vision: 89, crossing: 80, curve: 82, finishing: 95,
      shotPower: 92, longShots: 87, volleys: 88, heading: 86, penalties: 96,
      freeKickAccuracy: 74, throughBalls: 88, skillMoves: 70
    },
    defensive: {
      defensiveAwareness: 50, interceptions: 44, standingTackle: 47, slidingTackle: 38,
      marking: 46, pressing: 72, aggression: 80, aerialAbility: 80
    },
    goalkeeper: {
      diving: 8, reflexes: 10, handling: 11, positioning: 14, kicking: 11,
      distribution: 12, communication: 12, oneOnOne: 10
    },
    tacticalProfile: ["false9", "targetMan", "completeForward"],
    playingStyle: ["Possession", "Clinical Finisher", "Playmaker", "Long Pass Specialist", "Physical"]
  },
  {
    id: "lewandowski",
    name: "Robert Lewandowski",
    nickname: "Lewy",
    dob: "1988-08-21",
    age: 37,
    nationality: "Poland",
    height: 185,
    weight: 81,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "ST",
    secondaryPositions: ["CF"],
    club: "Barcelona",
    league: "La Liga",
    nationalTeam: "Poland",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 75, sprintSpeed: 76, agility: 77, balance: 82, strength: 86,
      stamina: 78, jumping: 84, reactions: 91, endurance: 80, physicality: 83
    },
    technical: {
      ballControl: 87, firstTouch: 89, dribbling: 80, closeControl: 79, shortPassing: 78,
      longPassing: 68, vision: 80, crossing: 70, curve: 79, finishing: 93,
      shotPower: 89, longShots: 83, volleys: 88, heading: 86, penalties: 90,
      freeKickAccuracy: 80, throughBalls: 74, skillMoves: 75
    },
    defensive: {
      defensiveAwareness: 35, interceptions: 38, standingTackle: 42, slidingTackle: 19,
      marking: 32, pressing: 70, aggression: 80, aerialAbility: 84
    },
    goalkeeper: {
      diving: 8, reflexes: 12, handling: 10, positioning: 8, kicking: 11,
      distribution: 12, communication: 8, oneOnOne: 10
    },
    tacticalProfile: ["poacher", "targetMan", "advancedForward"],
    playingStyle: ["Clinical Finisher", "Physical", "Possession"]
  },
  {
    id: "saka",
    name: "Bukayo Saka",
    nickname: "Starboy",
    dob: "2001-09-05",
    age: 24,
    nationality: "England",
    height: 178,
    weight: 68,
    preferredFoot: "right",
    weakFoot: 3,
    primaryPosition: "RW",
    secondaryPositions: ["RM", "LW"],
    club: "Arsenal",
    league: "Premier League",
    nationalTeam: "England",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 86, sprintSpeed: 84, agility: 89, balance: 85, strength: 70,
      stamina: 88, jumping: 66, reactions: 87, endurance: 86, physicality: 73
    },
    technical: {
      ballControl: 88, firstTouch: 86, dribbling: 90, closeControl: 89, shortPassing: 85,
      longPassing: 78, vision: 87, crossing: 86, curve: 82, finishing: 84,
      shotPower: 82, longShots: 80, volleys: 74, heading: 50, penalties: 84,
      freeKickAccuracy: 75, throughBalls: 84, skillMoves: 80
    },
    defensive: {
      defensiveAwareness: 65, interceptions: 68, standingTackle: 69, slidingTackle: 64,
      marking: 60, pressing: 88, aggression: 70, aerialAbility: 52
    },
    goalkeeper: {
      diving: 7, reflexes: 11, handling: 8, positioning: 12, kicking: 10,
      distribution: 11, communication: 10, oneOnOne: 11
    },
    tacticalProfile: ["insideForward", "playmaker", "traditionalWinger"],
    playingStyle: ["Possession", "Dribbler", "Creative", "Playmaker", "High Press"]
  },
  {
    id: "vinicius",
    name: "Vinícius Júnior",
    nickname: "Vini",
    dob: "2000-07-12",
    age: 25,
    nationality: "Brazil",
    height: 176,
    weight: 73,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "LW",
    secondaryPositions: ["ST"],
    club: "Real Madrid",
    league: "La Liga",
    nationalTeam: "Brazil",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 96, sprintSpeed: 95, agility: 94, balance: 84, strength: 68,
      stamina: 88, jumping: 75, reactions: 90, endurance: 85, physicality: 70
    },
    technical: {
      ballControl: 91, firstTouch: 88, dribbling: 95, closeControl: 93, shortPassing: 83,
      longPassing: 70, vision: 84, crossing: 81, curve: 83, finishing: 88,
      shotPower: 82, longShots: 79, volleys: 80, heading: 50, penalties: 78,
      freeKickAccuracy: 70, throughBalls: 82, skillMoves: 90
    },
    defensive: {
      defensiveAwareness: 30, interceptions: 35, standingTackle: 32, slidingTackle: 28,
      marking: 25, pressing: 75, aggression: 72, aerialAbility: 45
    },
    goalkeeper: {
      diving: 5, reflexes: 10, handling: 7, positioning: 8, kicking: 6,
      distribution: 8, communication: 8, oneOnOne: 9
    },
    tacticalProfile: ["insideForward", "advancedForward"],
    playingStyle: ["Counter Attack", "Dribbler", "Fast Runner", "Creative"]
  },

  // ==================== MIDFIELDERS (CDM, CM, CAM, LM, RM) ====================
  {
    id: "debruyne",
    name: "Kevin De Bruyne",
    nickname: "KDB",
    dob: "1991-06-28",
    age: 34,
    nationality: "Belgium",
    height: 181,
    weight: 75,
    preferredFoot: "right",
    weakFoot: 5,
    primaryPosition: "CAM",
    secondaryPositions: ["CM"],
    club: "Manchester City",
    league: "Premier League",
    nationalTeam: "Belgium",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 72, sprintSpeed: 74, agility: 78, balance: 78, strength: 74,
      stamina: 88, jumping: 63, reactions: 91, endurance: 86, physicality: 76
    },
    technical: {
      ballControl: 90, firstTouch: 91, dribbling: 87, closeControl: 85, shortPassing: 93,
      longPassing: 94, vision: 94, crossing: 94, curve: 92, finishing: 83,
      shotPower: 92, longShots: 91, volleys: 82, heading: 55, penalties: 83,
      freeKickAccuracy: 86, throughBalls: 95, skillMoves: 80
    },
    defensive: {
      defensiveAwareness: 62, interceptions: 66, standingTackle: 70, slidingTackle: 53,
      marking: 58, pressing: 84, aggression: 75, aerialAbility: 52
    },
    goalkeeper: {
      diving: 15, reflexes: 13, handling: 5, positioning: 10, kicking: 13,
      distribution: 14, communication: 11, oneOnOne: 9
    },
    tacticalProfile: ["playmaker", "advancedForward", "deepPlaymaker"],
    playingStyle: ["Possession", "Creative", "Crossing Specialist", "Long Pass Specialist", "Playmaker"]
  },
  {
    id: "rodri",
    name: "Rodrigo Hernández",
    nickname: "Rodri",
    dob: "1996-06-22",
    age: 29,
    nationality: "Spain",
    height: 191,
    weight: 82,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "CDM",
    secondaryPositions: ["CM"],
    club: "Manchester City",
    league: "Premier League",
    nationalTeam: "Spain",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 66, sprintSpeed: 70, agility: 72, balance: 78, strength: 85,
      stamina: 92, jumping: 82, reactions: 92, endurance: 94, physicality: 86
    },
    technical: {
      ballControl: 88, firstTouch: 89, dribbling: 79, closeControl: 82, shortPassing: 92,
      longPassing: 90, vision: 84, crossing: 71, curve: 74, finishing: 76,
      shotPower: 86, longShots: 84, volleys: 72, heading: 83, penalties: 74,
      freeKickAccuracy: 68, throughBalls: 85, skillMoves: 70
    },
    defensive: {
      defensiveAwareness: 90, interceptions: 88, standingTackle: 87, slidingTackle: 78,
      marking: 88, pressing: 88, aggression: 80, aerialAbility: 82
    },
    goalkeeper: {
      diving: 10, reflexes: 15, handling: 14, positioning: 14, kicking: 8,
      distribution: 12, communication: 11, oneOnOne: 12
    },
    tacticalProfile: ["ballWinning", "deepPlaymaker", "boxToBox"],
    playingStyle: ["Possession", "Defensive Leader", "Long Pass Specialist", "Playmaker", "Physical"]
  },
  {
    id: "bellingham",
    name: "Jude Bellingham",
    nickname: "Hey Jude",
    dob: "2003-06-29",
    age: 22,
    nationality: "England",
    height: 186,
    weight: 75,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "CAM",
    secondaryPositions: ["CM", "CF"],
    club: "Real Madrid",
    league: "La Liga",
    nationalTeam: "England",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 80, sprintSpeed: 81, agility: 85, balance: 83, strength: 84,
      stamina: 90, jumping: 82, reactions: 90, endurance: 91, physicality: 85
    },
    technical: {
      ballControl: 89, firstTouch: 87, dribbling: 88, closeControl: 87, shortPassing: 87,
      longPassing: 81, vision: 88, crossing: 75, curve: 78, finishing: 86,
      shotPower: 83, longShots: 81, volleys: 83, heading: 84, penalties: 80,
      freeKickAccuracy: 70, throughBalls: 84, skillMoves: 80
    },
    defensive: {
      defensiveAwareness: 78, interceptions: 80, standingTackle: 81, slidingTackle: 76,
      marking: 75, pressing: 88, aggression: 86, aerialAbility: 80
    },
    goalkeeper: {
      diving: 14, reflexes: 8, handling: 11, positioning: 6, kicking: 12,
      distribution: 14, communication: 12, oneOnOne: 13
    },
    tacticalProfile: ["boxToBox", "advancedForward", "playmaker"],
    playingStyle: ["Possession", "Counter Attack", "Creative", "Physical", "Clinical Finisher"]
  },
  {
    id: "modric",
    name: "Luka Modrić",
    nickname: "The Maestro",
    dob: "1985-09-09",
    age: 40,
    nationality: "Croatia",
    height: 172,
    weight: 66,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "CM",
    secondaryPositions: ["CAM", "CDM"],
    club: "Real Madrid",
    league: "La Liga",
    nationalTeam: "Croatia",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 70, sprintSpeed: 68, agility: 88, balance: 91, strength: 58,
      stamina: 84, jumping: 62, reactions: 90, endurance: 84, physicality: 62
    },
    technical: {
      ballControl: 92, firstTouch: 92, dribbling: 87, closeControl: 90, shortPassing: 91,
      longPassing: 89, vision: 91, crossing: 85, curve: 89, finishing: 72,
      shotPower: 79, longShots: 82, volleys: 76, heading: 55, penalties: 80,
      freeKickAccuracy: 78, throughBalls: 90, skillMoves: 80
    },
    defensive: {
      defensiveAwareness: 72, interceptions: 81, standingTackle: 75, slidingTackle: 71,
      marking: 70, pressing: 80, aggression: 62, aerialAbility: 52
    },
    goalkeeper: {
      diving: 13, reflexes: 9, handling: 7, positioning: 14, kicking: 7,
      distribution: 14, communication: 6, oneOnOne: 11
    },
    tacticalProfile: ["playmaker", "deepPlaymaker", "boxToBox"],
    playingStyle: ["Possession", "Creative", "Playmaker", "Long Pass Specialist"]
  },
  {
    id: "rice",
    name: "Declan Rice",
    nickname: "Decs",
    dob: "1999-01-14",
    age: 27,
    nationality: "England",
    height: 188,
    weight: 80,
    preferredFoot: "right",
    weakFoot: 3,
    primaryPosition: "CDM",
    secondaryPositions: ["CM"],
    club: "Arsenal",
    league: "Premier League",
    nationalTeam: "England",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 75, sprintSpeed: 79, agility: 75, balance: 78, strength: 83,
      stamina: 92, jumping: 80, reactions: 88, endurance: 93, physicality: 85
    },
    technical: {
      ballControl: 83, firstTouch: 82, dribbling: 77, closeControl: 75, shortPassing: 86,
      longPassing: 82, vision: 78, crossing: 68, curve: 70, finishing: 65,
      shotPower: 80, longShots: 75, volleys: 60, heading: 82, penalties: 68,
      freeKickAccuracy: 65, throughBalls: 78, skillMoves: 70
    },
    defensive: {
      defensiveAwareness: 88, interceptions: 89, standingTackle: 88, slidingTackle: 82,
      marking: 85, pressing: 86, aggression: 82, aerialAbility: 80
    },
    goalkeeper: {
      diving: 12, reflexes: 8, handling: 10, positioning: 11, kicking: 11,
      distribution: 12, communication: 10, oneOnOne: 11
    },
    tacticalProfile: ["ballWinning", "boxToBox"],
    playingStyle: ["High Press", "Defensive Leader", "Physical"]
  },
  {
    id: "pedri",
    name: "Pedri González",
    nickname: "Pedri",
    dob: "2002-11-25",
    age: 23,
    nationality: "Spain",
    height: 174,
    weight: 68,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "CM",
    secondaryPositions: ["CAM"],
    club: "Barcelona",
    league: "La Liga",
    nationalTeam: "Spain",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 78, sprintSpeed: 72, agility: 89, balance: 88, strength: 60,
      stamina: 86, jumping: 55, reactions: 88, endurance: 85, physicality: 62
    },
    technical: {
      ballControl: 92, firstTouch: 92, dribbling: 89, closeControl: 91, shortPassing: 92,
      longPassing: 85, vision: 91, crossing: 75, curve: 80, finishing: 70,
      shotPower: 70, longShots: 74, volleys: 68, heading: 50, penalties: 70,
      freeKickAccuracy: 75, throughBalls: 92, skillMoves: 80
    },
    defensive: {
      defensiveAwareness: 70, interceptions: 80, standingTackle: 73, slidingTackle: 66,
      marking: 68, pressing: 85, aggression: 65, aerialAbility: 48
    },
    goalkeeper: {
      diving: 8, reflexes: 10, handling: 8, positioning: 10, kicking: 12,
      distribution: 13, communication: 7, oneOnOne: 10
    },
    tacticalProfile: ["playmaker", "boxToBox"],
    playingStyle: ["Possession", "Creative", "Playmaker"]
  },

  // ==================== DEFENDERS (CB, LB, RB, LWB, RWB) ====================
  {
    id: "vandijk",
    name: "Virgil van Dijk",
    nickname: "The Wall",
    dob: "1991-07-08",
    age: 34,
    nationality: "Netherlands",
    height: 193,
    weight: 92,
    preferredFoot: "right",
    weakFoot: 3,
    primaryPosition: "CB",
    secondaryPositions: [],
    club: "Liverpool",
    league: "Premier League",
    nationalTeam: "Netherlands",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 74, sprintSpeed: 85, agility: 70, balance: 75, strength: 93,
      stamina: 85, jumping: 90, reactions: 89, endurance: 85, physicality: 92
    },
    technical: {
      ballControl: 79, firstTouch: 78, dribbling: 71, closeControl: 68, shortPassing: 82,
      longPassing: 84, vision: 70, crossing: 60, curve: 60, finishing: 60,
      shotPower: 81, longShots: 64, volleys: 45, heading: 90, penalties: 62,
      freeKickAccuracy: 70, throughBalls: 65, skillMoves: 60
    },
    defensive: {
      defensiveAwareness: 92, interceptions: 90, standingTackle: 92, slidingTackle: 86,
      marking: 92, pressing: 78, aggression: 83, aerialAbility: 92
    },
    goalkeeper: {
      diving: 13, reflexes: 10, handling: 11, positioning: 11, kicking: 5,
      distribution: 6, communication: 11, oneOnOne: 12
    },
    tacticalProfile: ["ballWinning", "targetMan"],
    playingStyle: ["Possession", "Defensive Leader", "Physical", "Long Pass Specialist"]
  },
  {
    id: "saliba",
    name: "William Saliba",
    nickname: "Wilf",
    dob: "2001-03-24",
    age: 25,
    nationality: "France",
    height: 192,
    weight: 85,
    preferredFoot: "right",
    weakFoot: 3,
    primaryPosition: "CB",
    secondaryPositions: [],
    club: "Arsenal",
    league: "Premier League",
    nationalTeam: "France",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 78, sprintSpeed: 84, agility: 72, balance: 74, strength: 89,
      stamina: 84, jumping: 82, reactions: 87, endurance: 84, physicality: 87
    },
    technical: {
      ballControl: 80, firstTouch: 81, dribbling: 70, closeControl: 72, shortPassing: 85,
      longPassing: 78, vision: 72, crossing: 52, curve: 55, finishing: 42,
      shotPower: 65, longShots: 45, volleys: 38, heading: 84, penalties: 50,
      freeKickAccuracy: 42, throughBalls: 70, skillMoves: 60
    },
    defensive: {
      defensiveAwareness: 90, interceptions: 88, standingTackle: 90, slidingTackle: 84,
      marking: 89, pressing: 80, aggression: 78, aerialAbility: 83
    },
    goalkeeper: {
      diving: 9, reflexes: 10, handling: 8, positioning: 10, kicking: 11,
      distribution: 12, communication: 10, oneOnOne: 11
    },
    tacticalProfile: ["ballWinning"],
    playingStyle: ["Possession", "Defensive Leader", "Physical"]
  },
  {
    id: "alexanderarnold",
    name: "Trent Alexander-Arnold",
    nickname: "Trent",
    dob: "1998-10-07",
    age: 27,
    nationality: "England",
    height: 180,
    weight: 72,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "RB",
    secondaryPositions: ["RWB", "CM", "CDM"],
    club: "Liverpool",
    league: "Premier League",
    nationalTeam: "England",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 77, sprintSpeed: 80, agility: 80, balance: 78, strength: 68,
      stamina: 87, jumping: 66, reactions: 85, endurance: 84, physicality: 72
    },
    technical: {
      ballControl: 85, firstTouch: 84, dribbling: 79, closeControl: 78, shortPassing: 89,
      longPassing: 93, vision: 90, crossing: 94, curve: 93, finishing: 69,
      shotPower: 83, longShots: 84, volleys: 68, heading: 69, penalties: 78,
      freeKickAccuracy: 88, throughBalls: 91, skillMoves: 75
    },
    defensive: {
      defensiveAwareness: 72, interceptions: 81, standingTackle: 79, slidingTackle: 76,
      marking: 70, pressing: 80, aggression: 74, aerialAbility: 65
    },
    goalkeeper: {
      diving: 14, reflexes: 15, handling: 8, positioning: 12, kicking: 10,
      distribution: 14, communication: 11, oneOnOne: 12
    },
    tacticalProfile: ["playmaker", "deepPlaymaker"],
    playingStyle: ["Possession", "Creative", "Crossing Specialist", "Long Pass Specialist", "Set Piece Specialist"]
  },
  {
    id: "theohernandez",
    name: "Theo Hernández",
    nickname: "Theo",
    dob: "1997-10-06",
    age: 28,
    nationality: "France",
    height: 184,
    weight: 81,
    preferredFoot: "left",
    weakFoot: 3,
    primaryPosition: "LB",
    secondaryPositions: ["LWB"],
    club: "AC Milan",
    league: "Serie A",
    nationalTeam: "France",
    status: "Active",
    isGK: false,
    physical: {
      acceleration: 92, sprintSpeed: 93, agility: 82, balance: 81, strength: 84,
      stamina: 90, jumping: 72, reactions: 84, endurance: 88, physicality: 84
    },
    technical: {
      ballControl: 83, firstTouch: 81, dribbling: 85, closeControl: 82, shortPassing: 80,
      longPassing: 74, vision: 76, crossing: 83, curve: 78, finishing: 71,
      shotPower: 86, longShots: 79, volleys: 65, heading: 68, penalties: 72,
      freeKickAccuracy: 69, throughBalls: 74, skillMoves: 75
    },
    defensive: {
      defensiveAwareness: 76, interceptions: 79, standingTackle: 80, slidingTackle: 81,
      marking: 75, pressing: 82, aggression: 84, aerialAbility: 70
    },
    goalkeeper: {
      diving: 8, reflexes: 10, handling: 11, positioning: 14, kicking: 14,
      distribution: 12, communication: 9, oneOnOne: 11
    },
    tacticalProfile: ["insideForward", "boxToBox"],
    playingStyle: ["Counter Attack", "Fast Runner", "Dribbler", "Physical"]
  },

  // ==================== GOALKEEPERS (GK) ====================
  {
    id: "alisson",
    name: "Alisson Becker",
    nickname: "Alisson",
    dob: "1992-10-02",
    age: 33,
    nationality: "Brazil",
    height: 193,
    weight: 91,
    preferredFoot: "right",
    weakFoot: 3,
    primaryPosition: "GK",
    secondaryPositions: [],
    club: "Liverpool",
    league: "Premier League",
    nationalTeam: "Brazil",
    status: "Active",
    isGK: true,
    physical: {
      acceleration: 56, sprintSpeed: 50, agility: 62, balance: 55, strength: 78,
      stamina: 45, jumping: 82, reactions: 89, endurance: 40, physicality: 80
    },
    technical: {
      ballControl: 72, firstTouch: 75, dribbling: 45, closeControl: 40, shortPassing: 80,
      longPassing: 84, vision: 78, crossing: 18, curve: 20, finishing: 15,
      shotPower: 58, longShots: 15, volleys: 20, heading: 45, penalties: 48,
      freeKickAccuracy: 18, throughBalls: 55, skillMoves: 30
    },
    defensive: {
      defensiveAwareness: 18, interceptions: 20, standingTackle: 19, slidingTackle: 14,
      marking: 15, pressing: 25, aggression: 32, aerialAbility: 88
    },
    goalkeeper: {
      diving: 86, reflexes: 89, handling: 85, positioning: 90, kicking: 84,
      distribution: 88, communication: 86, oneOnOne: 92
    },
    tacticalProfile: ["sweeperKeeper"],
    playingStyle: ["Possession", "Defensive Leader", "Playmaker", "Long Pass Specialist"]
  },
  {
    id: "neuer",
    name: "Manuel Neuer",
    nickname: "The Wall",
    dob: "1986-03-27",
    age: 40,
    nationality: "Germany",
    height: 193,
    weight: 93,
    preferredFoot: "right",
    weakFoot: 4,
    primaryPosition: "GK",
    secondaryPositions: [],
    club: "Bayern Munich",
    league: "Bundesliga",
    nationalTeam: "Germany",
    status: "Active",
    isGK: true,
    physical: {
      acceleration: 54, sprintSpeed: 56, agility: 58, balance: 60, strength: 82,
      stamina: 50, jumping: 78, reactions: 88, endurance: 42, physicality: 82
    },
    technical: {
      ballControl: 78, firstTouch: 80, dribbling: 50, closeControl: 45, shortPassing: 85,
      longPassing: 88, vision: 84, crossing: 20, curve: 25, finishing: 15,
      shotPower: 65, longShots: 15, volleys: 18, heading: 42, penalties: 50,
      freeKickAccuracy: 22, throughBalls: 65, skillMoves: 35
    },
    defensive: {
      defensiveAwareness: 22, interceptions: 24, standingTackle: 20, slidingTackle: 15,
      marking: 12, pressing: 35, aggression: 38, aerialAbility: 85
    },
    goalkeeper: {
      diving: 85, reflexes: 86, handling: 82, positioning: 88, kicking: 90,
      distribution: 91, communication: 90, oneOnOne: 93
    },
    tacticalProfile: ["sweeperKeeper"],
    playingStyle: ["Possession", "Defensive Leader", "Playmaker", "Long Pass Specialist"]
  },
  {
    id: "donnarumma",
    name: "Gianluigi Donnarumma",
    nickname: "Gigio",
    dob: "1999-02-25",
    age: 27,
    nationality: "Italy",
    height: 196,
    weight: 90,
    preferredFoot: "right",
    weakFoot: 3,
    primaryPosition: "GK",
    secondaryPositions: [],
    club: "Paris Saint-Germain",
    league: "Ligue 1",
    nationalTeam: "Italy",
    status: "Active",
    isGK: true,
    physical: {
      acceleration: 50, sprintSpeed: 52, agility: 60, balance: 55, strength: 80,
      stamina: 42, jumping: 80, reactions: 85, endurance: 40, physicality: 78
    },
    technical: {
      ballControl: 68, firstTouch: 62, dribbling: 30, closeControl: 28, shortPassing: 72,
      longPassing: 70, vision: 65, crossing: 15, curve: 14, finishing: 10,
      shotPower: 55, longShots: 12, volleys: 14, heading: 40, penalties: 45,
      freeKickAccuracy: 15, throughBalls: 45, skillMoves: 25
    },
    defensive: {
      defensiveAwareness: 15, interceptions: 18, standingTackle: 15, slidingTackle: 12,
      marking: 10, pressing: 20, aggression: 30, aerialAbility: 85
    },
    goalkeeper: {
      diving: 88, reflexes: 90, handling: 81, positioning: 85, kicking: 75,
      distribution: 78, communication: 82, oneOnOne: 88
    },
    tacticalProfile: ["sweeperKeeper"],
    playingStyle: ["Defensive Leader"]
  },
  {
    id: "courtois",
    name: "Thibaut Courtois",
    nickname: "Tibo",
    dob: "1992-05-11",
    age: 34,
    nationality: "Belgium",
    height: 200,
    weight: 96,
    preferredFoot: "left",
    weakFoot: 3,
    primaryPosition: "GK",
    secondaryPositions: [],
    club: "Real Madrid",
    league: "La Liga",
    nationalTeam: "Belgium",
    status: "Active",
    isGK: true,
    physical: {
      acceleration: 48, sprintSpeed: 50, agility: 61, balance: 45, strength: 85,
      stamina: 44, jumping: 78, reactions: 87, endurance: 40, physicality: 80
    },
    technical: {
      ballControl: 65, firstTouch: 68, dribbling: 30, closeControl: 25, shortPassing: 75,
      longPassing: 74, vision: 68, crossing: 14, curve: 15, finishing: 10,
      shotPower: 50, longShots: 12, volleys: 12, heading: 45, penalties: 35,
      freeKickAccuracy: 12, throughBalls: 42, skillMoves: 20
    },
    defensive: {
      defensiveAwareness: 12, interceptions: 15, standingTackle: 18, slidingTackle: 12,
      marking: 10, pressing: 18, aggression: 28, aerialAbility: 90
    },
    goalkeeper: {
      diving: 85, reflexes: 89, handling: 89, positioning: 90, kicking: 74,
      distribution: 75, communication: 85, oneOnOne: 90
    },
    tacticalProfile: ["sweeperKeeper"],
    playingStyle: ["Defensive Leader"]
  },

  // ==================== RETIRED LEGENDS ====================
  {
    id: "pele",
    name: "Pelé",
    nickname: "O Rei (The King)",
    dob: "1940-10-23",
    age: 82,
    nationality: "Brazil",
    height: 173,
    weight: 73,
    preferredFoot: "right",
    weakFoot: 5,
    primaryPosition: "ST",
    secondaryPositions: ["CF", "SS"],
    club: "Santos",
    league: "Campeonato Paulista",
    nationalTeam: "Brazil",
    status: "Retired",
    isGK: false,
    physical: {
      acceleration: 95, sprintSpeed: 93, agility: 94, balance: 95, strength: 78,
      stamina: 88, jumping: 94, reactions: 95, endurance: 86, physicality: 78
    },
    technical: {
      ballControl: 95, firstTouch: 94, dribbling: 96, closeControl: 94, shortPassing: 89,
      longPassing: 82, vision: 92, crossing: 78, curve: 88, finishing: 98,
      shotPower: 88, longShots: 89, volleys: 94, heading: 94, penalties: 90,
      freeKickAccuracy: 88, throughBalls: 86, skillMoves: 95
    },
    defensive: {
      defensiveAwareness: 40, interceptions: 45, standingTackle: 48, slidingTackle: 30,
      marking: 35, pressing: 68, aggression: 68, aerialAbility: 90
    },
    goalkeeper: {
      diving: 9, reflexes: 10, handling: 14, positioning: 11, kicking: 10,
      distribution: 12, communication: 10, oneOnOne: 11
    },
    tacticalProfile: ["poacher", "insideForward", "completeForward"],
    playingStyle: ["Possession", "Dribbler", "Clinical Finisher", "Creative", "Playmaker"]
  },
  {
    id: "maradona",
    name: "Diego Maradona",
    nickname: "El Pibe de Oro",
    dob: "1960-10-30",
    age: 60,
    nationality: "Argentina",
    height: 165,
    weight: 70,
    preferredFoot: "left",
    weakFoot: 3,
    primaryPosition: "CAM",
    secondaryPositions: ["SS", "CF"],
    club: "Napoli",
    league: "Serie A",
    nationalTeam: "Argentina",
    status: "Retired",
    isGK: false,
    physical: {
      acceleration: 93, sprintSpeed: 85, agility: 97, balance: 98, strength: 74,
      stamina: 80, jumping: 72, reactions: 93, endurance: 78, physicality: 75
    },
    technical: {
      ballControl: 97, firstTouch: 96, dribbling: 98, closeControl: 98, shortPassing: 93,
      longPassing: 89, vision: 97, crossing: 88, curve: 94, finishing: 91,
      shotPower: 83, longShots: 91, volleys: 86, heading: 66, penalties: 92,
      freeKickAccuracy: 95, throughBalls: 96, skillMoves: 95
    },
    defensive: {
      defensiveAwareness: 35, interceptions: 44, standingTackle: 38, slidingTackle: 26,
      marking: 28, pressing: 60, aggression: 76, aerialAbility: 42
    },
    goalkeeper: {
      diving: 5, reflexes: 9, handling: 12, positioning: 11, kicking: 10,
      distribution: 14, communication: 9, oneOnOne: 12
    },
    tacticalProfile: ["playmaker", "false9", "insideForward"],
    playingStyle: ["Possession", "Dribbler", "Creative", "Playmaker", "Set Piece Specialist"]
  },
  {
    id: "maldini",
    name: "Paolo Maldini",
    nickname: "Il Capitano",
    dob: "1968-06-26",
    age: 57,
    nationality: "Italy",
    height: 186,
    weight: 83,
    preferredFoot: "left",
    weakFoot: 4,
    primaryPosition: "CB",
    secondaryPositions: ["LB"],
    club: "AC Milan",
    league: "Serie A",
    nationalTeam: "Italy",
    status: "Retired",
    isGK: false,
    physical: {
      acceleration: 78, sprintSpeed: 82, agility: 76, balance: 79, strength: 85,
      stamina: 87, jumping: 85, reactions: 93, endurance: 86, physicality: 85
    },
    technical: {
      ballControl: 81, firstTouch: 82, dribbling: 71, closeControl: 74, shortPassing: 82,
      longPassing: 78, vision: 74, crossing: 80, curve: 70, finishing: 58,
      shotPower: 70, longShots: 55, volleys: 50, heading: 87, penalties: 60,
      freeKickAccuracy: 55, throughBalls: 69, skillMoves: 60
    },
    defensive: {
      defensiveAwareness: 96, interceptions: 95, standingTackle: 95, slidingTackle: 96,
      marking: 95, pressing: 82, aggression: 65, aerialAbility: 86
    },
    goalkeeper: {
      diving: 8, reflexes: 9, handling: 14, positioning: 11, kicking: 10,
      distribution: 8, communication: 11, oneOnOne: 12
    },
    tacticalProfile: ["ballWinning"],
    playingStyle: ["Possession", "Defensive Leader", "Physical"]
  },
  {
    id: "zidane",
    name: "Zinedine Zidane",
    nickname: "Zizou",
    dob: "1972-06-23",
    age: 53,
    nationality: "France",
    height: 185,
    weight: 80,
    preferredFoot: "right",
    weakFoot: 5,
    primaryPosition: "CAM",
    secondaryPositions: ["CM"],
    club: "Real Madrid",
    league: "La Liga",
    nationalTeam: "France",
    status: "Retired",
    isGK: false,
    physical: {
      acceleration: 75, sprintSpeed: 77, agility: 86, balance: 88, strength: 82,
      stamina: 81, jumping: 75, reactions: 90, endurance: 80, physicality: 82
    },
    technical: {
      ballControl: 97, firstTouch: 98, dribbling: 93, closeControl: 95, shortPassing: 92,
      longPassing: 91, vision: 95, crossing: 83, curve: 86, finishing: 84,
      shotPower: 86, longShots: 87, volleys: 92, heading: 83, penalties: 88,
      freeKickAccuracy: 88, throughBalls: 93, skillMoves: 90
    },
    defensive: {
      defensiveAwareness: 54, interceptions: 62, standingTackle: 65, slidingTackle: 52,
      marking: 50, pressing: 72, aggression: 80, aerialAbility: 70
    },
    goalkeeper: {
      diving: 8, reflexes: 9, handling: 15, positioning: 11, kicking: 14,
      distribution: 14, communication: 10, oneOnOne: 12
    },
    tacticalProfile: ["playmaker", "deepPlaymaker"],
    playingStyle: ["Possession", "Creative", "Playmaker", "Long Pass Specialist"]
  }
];

// 130+ Additional Real Professional Footballers to reach over 150 total
export const realPlayersRegistry = [
  // GOALKEEPERS
  { name: "Marc-André ter Stegen", age: 34, nationality: "Germany", height: 187, weight: 85, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Barcelona", league: "La Liga", status: "Active" },
  { name: "Jan Oblak", age: 33, nationality: "Slovenia", height: 188, weight: 87, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Atlético Madrid", league: "La Liga", status: "Active" },
  { name: "Mike Maignan", age: 30, nationality: "France", height: 191, weight: 89, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "AC Milan", league: "Serie A", status: "Active" },
  { name: "Ederson Moraes", age: 32, nationality: "Brazil", height: 188, weight: 86, preferredFoot: "left", primaryPosition: "GK", secondaryPositions: [], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Emiliano Martínez", age: 33, nationality: "Argentina", height: 195, weight: 90, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Aston Villa", league: "Premier League", status: "Active" },
  { name: "Jordan Pickford", age: 32, nationality: "England", height: 185, weight: 82, preferredFoot: "left", primaryPosition: "GK", secondaryPositions: [], club: "Everton", league: "Premier League", status: "Active" },
  { name: "Gregor Kobel", age: 28, nationality: "Switzerland", height: 195, weight: 88, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Borussia Dortmund", league: "Bundesliga", status: "Active" },
  { name: "Yann Sommer", age: 37, nationality: "Switzerland", height: 183, weight: 79, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Nick Pope", age: 34, nationality: "England", height: 198, weight: 90, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Newcastle United", league: "Premier League", status: "Active" },
  { name: "David Raya", age: 30, nationality: "Spain", height: 183, weight: 80, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Guglielmo Vicario", age: 29, nationality: "Italy", height: 194, weight: 83, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Kepa Arrizabalaga", age: 31, nationality: "Spain", height: 186, weight: 85, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Diogo Costa", age: 26, nationality: "Portugal", height: 186, weight: 82, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "FC Porto", league: "Liga Portugal", status: "Active" },
  { name: "Unai Simón", age: 28, nationality: "Spain", height: 190, weight: 88, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Athletic Bilbao", league: "La Liga", status: "Active" },
  { name: "Kevin Trapp", age: 35, nationality: "Germany", height: 189, weight: 88, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Eintracht Frankfurt", league: "Bundesliga", status: "Active" },
  { name: "Alex Meret", age: 29, nationality: "Italy", height: 190, weight: 82, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Napoli", league: "Serie A", status: "Active" },
  { name: "Kasper Schmeichel", age: 39, nationality: "Denmark", height: 189, weight: 88, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Anderlecht", league: "Belgian Pro League", status: "Active" },
  { name: "Peter Schmeichel", age: 62, nationality: "Denmark", height: 193, weight: 92, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Manchester United", league: "Premier League", status: "Retired" },
  { name: "Edwin van der Sar", age: 55, nationality: "Netherlands", height: 197, weight: 83, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Manchester United", league: "Premier League", status: "Retired" },
  { name: "Oliver Kahn", age: 56, nationality: "Germany", height: 188, weight: 91, preferredFoot: "right", primaryPosition: "GK", secondaryPositions: [], club: "Bayern Munich", league: "Bundesliga", status: "Retired" },

  // DEFENDERS (CB)
  { name: "Rúben Dias", age: 29, nationality: "Portugal", height: 187, weight: 82, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "John Stones", age: 31, nationality: "England", height: 188, weight: 80, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["CDM"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Marquinhos Aoás", age: 31, nationality: "Brazil", height: 183, weight: 75, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Thiago Silva", age: 41, nationality: "Brazil", height: 181, weight: 79, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Fluminense", league: "Série A", status: "Active" },
  { name: "Ronald Araújo", age: 27, nationality: "Uruguay", height: 188, weight: 79, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB"], club: "Barcelona", league: "La Liga", status: "Active" },
  { name: "Éder Militão", age: 28, nationality: "Brazil", height: 186, weight: 78, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB"], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Alessandro Bastoni", age: 26, nationality: "Italy", height: 190, weight: 75, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: ["LB"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Antonio Rüdiger", age: 32, nationality: "Germany", height: 190, weight: 85, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Cristian Romero", age: 27, nationality: "Argentina", height: 185, weight: 79, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Sven Botman", age: 26, nationality: "Netherlands", height: 193, weight: 81, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: [], club: "Newcastle United", league: "Premier League", status: "Active" },
  { name: "Gabriel Magalhães", age: 28, nationality: "Brazil", height: 190, weight: 78, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: [], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Lisandro Martínez", age: 28, nationality: "Argentina", height: 178, weight: 77, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: ["LB", "CDM"], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Kim Min-jae", age: 29, nationality: "South Korea", height: 190, weight: 81, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Matthijs de Ligt", age: 26, nationality: "Netherlands", height: 188, weight: 89, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Dayot Upamecano", age: 27, nationality: "France", height: 186, weight: 83, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Ibrahima Konaté", age: 26, nationality: "France", height: 194, weight: 85, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Liverpool", league: "Premier League", status: "Active" },
  { name: "Manuel Akanji", age: 30, nationality: "Switzerland", height: 188, weight: 85, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB", "LB"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Nathan Aké", age: 31, nationality: "Netherlands", height: 180, weight: 75, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: ["LB"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Josko Gvardiol", age: 24, nationality: "Croatia", height: 185, weight: 80, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: ["LB"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Micky van de Ven", age: 25, nationality: "Netherlands", height: 193, weight: 81, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: ["LB"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Gleison Bremer", age: 29, nationality: "Brazil", height: 188, weight: 80, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Juventus", league: "Serie A", status: "Active" },
  { name: "Jonathan Tah", age: 30, nationality: "Germany", height: 195, weight: 90, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "Edmond Tapsoba", age: 27, nationality: "Burkina Faso", height: 194, weight: 85, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "Piero Hincapié", age: 24, nationality: "Ecuador", height: 184, weight: 77, preferredFoot: "left", primaryPosition: "CB", secondaryPositions: ["LB"], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "Mats Hummels", age: 37, nationality: "Germany", height: 191, weight: 90, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "AS Roma", league: "Serie A", status: "Active" },
  { name: "Fikayo Tomori", age: 28, nationality: "England", height: 185, weight: 79, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "AC Milan", league: "Serie A", status: "Active" },
  { name: "Alessandro Nesta", age: 49, nationality: "Italy", height: 187, weight: 79, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "AC Milan", league: "Serie A", status: "Retired" },
  { name: "Fabio Cannavaro", age: 52, nationality: "Italy", height: 176, weight: 75, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "Juventus", league: "Serie A", status: "Retired" },
  { name: "Carles Puyol", age: 47, nationality: "Spain", height: 178, weight: 80, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB"], club: "Barcelona", league: "La Liga", status: "Retired" },
  { name: "Franco Baresi", age: 65, nationality: "Italy", height: 176, weight: 70, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: [], club: "AC Milan", league: "Serie A", status: "Retired" },

  // FULLBACKS / WINGBACKS
  { name: "Alfonso Davies", age: 25, nationality: "Canada", height: 181, weight: 72, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB", "LM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Andrew Robertson", age: 31, nationality: "Scotland", height: 178, weight: 64, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB"], club: "Liverpool", league: "Premier League", status: "Active" },
  { name: "Luke Shaw", age: 30, nationality: "England", height: 181, weight: 75, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["CB"], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Ferland Mendy", age: 30, nationality: "France", height: 180, weight: 73, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: [], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Nuno Mendes", age: 23, nationality: "Portugal", height: 176, weight: 70, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Alejandro Balde", age: 22, nationality: "Spain", height: 175, weight: 69, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB"], club: "Barcelona", league: "La Liga", status: "Active" },
  { name: "Destiny Udogie", age: 23, nationality: "Italy", height: 188, weight: 73, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB", "LM"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Pervis Estupiñán", age: 28, nationality: "Ecuador", height: 175, weight: 73, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB"], club: "Brighton & Hove Albion", league: "Premier League", status: "Active" },
  { name: "Federico Dimarco", age: 28, nationality: "Italy", height: 175, weight: 75, preferredFoot: "left", primaryPosition: "LWB", secondaryPositions: ["LB", "LM", "CB"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Alejandro Grimaldo", age: 30, nationality: "Spain", height: 171, weight: 63, preferredFoot: "left", primaryPosition: "LWB", secondaryPositions: ["LB", "LM"], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "Roberto Carlos", age: 52, nationality: "Brazil", height: 168, weight: 70, preferredFoot: "left", primaryPosition: "LB", secondaryPositions: ["LWB"], club: "Real Madrid", league: "La Liga", status: "Retired" },
  { name: "Achraf Hakimi", age: 27, nationality: "Morocco", height: 181, weight: 73, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["RWB", "LB"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Kyle Walker", age: 35, nationality: "England", height: 183, weight: 70, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["CB"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Kieran Trippier", age: 35, nationality: "England", height: 178, weight: 71, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["RWB", "LB"], club: "Newcastle United", league: "Premier League", status: "Active" },
  { name: "Reece James", age: 26, nationality: "England", height: 179, weight: 82, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["RWB", "CB"], club: "Chelsea", league: "Premier League", status: "Active" },
  { name: "Dani Carvajal", age: 34, nationality: "Spain", height: 173, weight: 73, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: [], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Benjamin Pavard", age: 30, nationality: "France", height: 186, weight: 76, preferredFoot: "right", primaryPosition: "CB", secondaryPositions: ["RB"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Denzel Dumfries", age: 29, nationality: "Netherlands", height: 188, weight: 80, preferredFoot: "right", primaryPosition: "RWB", secondaryPositions: ["RB", "RM"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Jeremie Frimpong", age: 25, nationality: "Netherlands", height: 171, weight: 63, preferredFoot: "right", primaryPosition: "RWB", secondaryPositions: ["RM", "RW"], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "Giovanni Di Lorenzo", age: 32, nationality: "Italy", height: 183, weight: 79, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["CB"], club: "Napoli", league: "Serie A", status: "Active" },
  { name: "Pedro Porro", age: 26, nationality: "Spain", height: 173, weight: 71, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["RWB", "RM"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Cafu Marcos", age: 55, nationality: "Brazil", height: 176, weight: 75, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["RWB"], club: "AC Milan", league: "Serie A", status: "Retired" },
  { name: "Philipp Lahm", age: 42, nationality: "Germany", height: 170, weight: 66, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["LB", "CDM"], club: "Bayern Munich", league: "Bundesliga", status: "Retired" },

  // MIDFIELDERS (CDM, CM, CAM)
  { name: "Casemiro Carlos", age: 34, nationality: "Brazil", height: 185, weight: 84, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: [], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Aurélien Tchouaméni", age: 26, nationality: "France", height: 187, weight: 81, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: ["CB", "CM"], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Moisés Caicedo", age: 24, nationality: "Ecuador", height: 178, weight: 73, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: ["CM"], club: "Chelsea", league: "Premier League", status: "Active" },
  { name: "Bruno Guimarães", age: 28, nationality: "Brazil", height: 182, weight: 74, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: ["CM"], club: "Newcastle United", league: "Premier League", status: "Active" },
  { name: "Sandro Tonali", age: 26, nationality: "Italy", height: 181, weight: 79, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: ["CM"], club: "Newcastle United", league: "Premier League", status: "Active" },
  { name: "Manuel Ugarte", age: 25, nationality: "Uruguay", height: 182, weight: 77, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: [], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Sofyan Amrabat", age: 29, nationality: "Morocco", height: 185, weight: 78, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: ["CM"], club: "Fenerbahçe", league: "Süper Lig", status: "Active" },
  { name: "Claude Makélélé", age: 53, nationality: "France", height: 174, weight: 70, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: [], club: "Chelsea", league: "Premier League", status: "Retired" },
  { name: "Gennaro Gattuso", age: 48, nationality: "Italy", height: 177, weight: 77, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: [], club: "AC Milan", league: "Serie A", status: "Retired" },
  { name: "Frenkie de Jong", age: 28, nationality: "Netherlands", height: 180, weight: 74, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM", "CB"], club: "Barcelona", league: "La Liga", status: "Active" },
  { name: "Bernardo Silva", age: 31, nationality: "Portugal", height: 173, weight: 64, preferredFoot: "left", primaryPosition: "CM", secondaryPositions: ["RM", "RW", "CAM"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Federico Valverde", age: 27, nationality: "Uruguay", height: 182, weight: 78, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["RM", "RW", "CDM"], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Nicolò Barella", age: 29, nationality: "Italy", height: 175, weight: 68, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: [], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Alexis Mac Allister", age: 27, nationality: "Argentina", height: 176, weight: 72, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM", "CAM"], club: "Liverpool", league: "Premier League", status: "Active" },
  { name: "Enzo Fernández", age: 25, nationality: "Argentina", height: 178, weight: 77, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Chelsea", league: "Premier League", status: "Active" },
  { name: "Martin Ødegaard", age: 27, nationality: "Norway", height: 178, weight: 68, preferredFoot: "left", primaryPosition: "CAM", secondaryPositions: ["CM"], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Toni Kroos", age: 36, nationality: "Germany", height: 183, weight: 76, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Real Madrid", league: "La Liga", status: "Retired" },
  { name: "Ilkay Gündoğan", age: 35, nationality: "Germany", height: 180, weight: 79, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM", "CDM"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Andrea Pirlo", age: 46, nationality: "Italy", height: 177, weight: 68, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Juventus", league: "Serie A", status: "Retired" },
  { name: "Xavi Hernández", age: 46, nationality: "Spain", height: 170, weight: 68, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: [], club: "Barcelona", league: "La Liga", status: "Retired" },
  { name: "Andrés Iniesta", age: 41, nationality: "Spain", height: 171, weight: 68, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM", "LW"], club: "Vissel Kobe", league: "J1 League", status: "Retired" },
  { name: "Steven Gerrard", age: 45, nationality: "England", height: 183, weight: 83, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM", "CDM", "RM"], club: "Liverpool", league: "Premier League", status: "Retired" },
  { name: "Frank Lampard", age: 47, nationality: "England", height: 184, weight: 84, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM"], club: "Chelsea", league: "Premier League", status: "Retired" },
  { name: "Paul Scholes", age: 51, nationality: "England", height: 168, weight: 70, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM"], club: "Manchester United", league: "Premier League", status: "Retired" },
  { name: "Bruno Fernandes", age: 31, nationality: "Portugal", height: 179, weight: 69, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["CM", "RM"], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Jamal Musiala", age: 23, nationality: "Germany", height: 184, weight: 72, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["LM", "LW", "CM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Florian Wirtz", age: 23, nationality: "Germany", height: 176, weight: 70, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["CM", "LW", "RW"], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "James Maddison", age: 29, nationality: "England", height: 175, weight: 73, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["CM", "LW"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Dominik Szoboszlai", age: 25, nationality: "Hungary", height: 186, weight: 74, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["CM", "RM"], club: "Liverpool", league: "Premier League", status: "Active" },
  { name: "Kai Havertz", age: 26, nationality: "Germany", height: 193, weight: 82, preferredFoot: "left", primaryPosition: "CF", secondaryPositions: ["ST", "CAM"], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Antoine Griezmann", age: 35, nationality: "France", height: 176, weight: 73, preferredFoot: "left", primaryPosition: "CF", secondaryPositions: ["CAM", "SS", "ST"], club: "Atlético Madrid", league: "La Liga", status: "Active" },
  { name: "Ronaldinho Gaúcho", age: 46, nationality: "Brazil", height: 181, weight: 80, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["LW", "CF"], club: "Barcelona", league: "La Liga", status: "Retired" },
  { name: "Kaká Ricardo", age: 44, nationality: "Brazil", height: 186, weight: 82, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["CF"], club: "AC Milan", league: "Serie A", status: "Retired" },
  { name: "Christian Eriksen", age: 34, nationality: "Denmark", height: 182, weight: 76, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM"], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Eduardo Camavinga", age: 23, nationality: "France", height: 182, weight: 77, preferredFoot: "left", primaryPosition: "CM", secondaryPositions: ["CDM", "LB"], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Douglas Luiz", age: 28, nationality: "Brazil", height: 175, weight: 70, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Juventus", league: "Serie A", status: "Active" },
  { name: "Hakan Çalhanoğlu", age: 32, nationality: "Turkey", height: 178, weight: 72, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM", "CAM"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Vitinha Ferreira", age: 26, nationality: "Portugal", height: 172, weight: 64, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM", "CDM"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Warren Zaïre-Emery", age: 20, nationality: "France", height: 178, weight: 70, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Mikel Merino", age: 29, nationality: "Spain", height: 188, weight: 83, preferredFoot: "left", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Martin Zubimendi", age: 27, nationality: "Spain", height: 181, weight: 74, preferredFoot: "right", primaryPosition: "CDM", secondaryPositions: ["CM"], club: "Real Sociedad", league: "La Liga", status: "Active" },
  { name: "Leon Goretzka", age: 31, nationality: "Germany", height: 189, weight: 82, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CDM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Joshua Kimmich", age: 31, nationality: "Germany", height: 177, weight: 75, preferredFoot: "right", primaryPosition: "RB", secondaryPositions: ["CDM", "CM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Julian Brandt", age: 29, nationality: "Germany", height: 185, weight: 82, preferredFoot: "right", primaryPosition: "CAM", secondaryPositions: ["RM", "LM", "CM"], club: "Borussia Dortmund", league: "Bundesliga", status: "Active" },
  { name: "Marcel Sabitzer", age: 32, nationality: "Austria", height: 178, weight: 77, preferredFoot: "right", primaryPosition: "CM", secondaryPositions: ["CAM", "CDM"], club: "Borussia Dortmund", league: "Bundesliga", status: "Active" },

  // WINGERS / WIDE PLAYERS (LW, RW, LM, RM)
  { name: "Neymar da Silva Jr", age: 34, nationality: "Brazil", height: 175, weight: 68, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["CAM", "CF"], club: "Al Hilal", league: "Saudi Pro League", status: "Active" },
  { name: "Son Heung-min", age: 33, nationality: "South Korea", height: 183, weight: 77, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["ST", "CF"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Marcus Rashford", age: 28, nationality: "England", height: 186, weight: 70, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["ST", "CF"], club: "Manchester United", league: "Premier League", status: "Active" },
  { name: "Gabriel Martinelli", age: 24, nationality: "Brazil", height: 178, weight: 75, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["LM"], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Rafael Leão", age: 26, nationality: "Portugal", height: 188, weight: 81, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["ST"], club: "AC Milan", league: "Serie A", status: "Active" },
  { name: "Luis Díaz", age: 29, nationality: "Colombia", height: 180, weight: 73, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["LM"], club: "Liverpool", league: "Premier League", status: "Active" },
  { name: "Kingsley Coman", age: 29, nationality: "France", height: 180, weight: 76, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["RW", "LM", "RM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Jack Grealish", age: 30, nationality: "England", height: 180, weight: 81, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["LM", "CAM"], club: "Manchester City", league: "Premier League", status: "Active" },
  { name: "Khvicha Kvaratskhelia", age: 25, nationality: "Georgia", height: 183, weight: 75, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["CAM", "RW"], club: "Napoli", league: "Serie A", status: "Active" },
  { name: "Kaoru Mitoma", age: 28, nationality: "Japan", height: 178, weight: 73, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["LM"], club: "Brighton & Hove Albion", league: "Premier League", status: "Active" },
  { name: "Nico Williams", age: 23, nationality: "Spain", height: 181, weight: 70, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["RW", "LM"], club: "Athletic Bilbao", league: "La Liga", status: "Active" },
  { name: "Bradley Barcola", age: 23, nationality: "France", height: 186, weight: 70, preferredFoot: "right", primaryPosition: "LW", secondaryPositions: ["RW"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Thierry Henry", age: 48, nationality: "France", height: 188, weight: 83, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["LW", "CF"], club: "Arsenal", league: "Premier League", status: "Retired" },
  { name: "Rodrygo Goes", age: 25, nationality: "Brazil", height: 174, weight: 64, preferredFoot: "right", primaryPosition: "RW", secondaryPositions: ["LW", "ST"], club: "Real Madrid", league: "La Liga", status: "Active" },
  { name: "Ousmane Dembélé", age: 28, nationality: "France", height: 178, weight: 67, preferredFoot: "both", primaryPosition: "RW", secondaryPositions: ["LW", "RM"], club: "Paris Saint-Germain", league: "Ligue 1", status: "Active" },
  { name: "Raphinha Dias", age: 29, nationality: "Brazil", height: 176, weight: 68, preferredFoot: "left", primaryPosition: "RW", secondaryPositions: ["LW", "CAM"], club: "Barcelona", league: "La Liga", status: "Active" },
  { name: "Serge Gnabry", age: 30, nationality: "Germany", height: 176, weight: 77, preferredFoot: "right", primaryPosition: "RW", secondaryPositions: ["LW", "LM", "RM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Leroy Sané", age: 30, nationality: "Germany", height: 183, weight: 80, preferredFoot: "left", primaryPosition: "RW", secondaryPositions: ["LW", "RM", "LM"], club: "Bayern Munich", league: "Bundesliga", status: "Active" },
  { name: "Dejan Kulusevski", age: 25, nationality: "Sweden", height: 186, weight: 75, preferredFoot: "left", primaryPosition: "RW", secondaryPositions: ["CAM", "RM", "ST"], club: "Tottenham Hotspur", league: "Premier League", status: "Active" },
  { name: "Lamine Yamal", age: 18, nationality: "Spain", height: 178, weight: 66, preferredFoot: "left", primaryPosition: "RW", secondaryPositions: ["LW"], club: "Barcelona", league: "La Liga", status: "Active" },
  { name: "David Beckham", age: 50, nationality: "England", height: 183, weight: 75, preferredFoot: "right", primaryPosition: "RM", secondaryPositions: ["CM"], club: "Manchester United", league: "Premier League", status: "Retired" },

  // STRIKERS / FORWARDS (ST, CF, SS, False 9)
  { name: "Lautaro Martínez", age: 28, nationality: "Argentina", height: 174, weight: 72, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Victor Osimhen", age: 27, nationality: "Nigeria", height: 185, weight: 78, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: [], club: "Galatasaray", league: "Süper Lig", status: "Active" },
  { name: "Alexander Isak", age: 26, nationality: "Sweden", height: 192, weight: 77, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF", "LW"], club: "Newcastle United", league: "Premier League", status: "Active" },
  { name: "Ollie Watkins", age: 30, nationality: "England", height: 180, weight: 70, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF", "LW"], club: "Aston Villa", league: "Premier League", status: "Active" },
  { name: "Darwin Núñez", age: 26, nationality: "Uruguay", height: 187, weight: 81, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["LW"], club: "Liverpool", league: "Premier League", status: "Active" },
  { name: "Gabriel Jesus", age: 29, nationality: "Brazil", height: 175, weight: 73, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF", "RW", "LW"], club: "Arsenal", league: "Premier League", status: "Active" },
  { name: "Romelu Lukaku", age: 32, nationality: "Belgium", height: 191, weight: 94, preferredFoot: "left", primaryPosition: "ST", secondaryPositions: [], club: "Napoli", league: "Serie A", status: "Active" },
  { name: "Alvaro Morata", age: 33, nationality: "Spain", height: 189, weight: 85, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: [], club: "AC Milan", league: "Serie A", status: "Active" },
  { name: "Julián Álvarez", age: 26, nationality: "Argentina", height: 170, weight: 71, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF", "LW", "CAM"], club: "Atlético Madrid", league: "La Liga", status: "Active" },
  { name: "Victor Boniface", age: 25, nationality: "Nigeria", height: 189, weight: 91, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF"], club: "Bayer Leverkusen", league: "Bundesliga", status: "Active" },
  { name: "Marcus Thuram", age: 28, nationality: "France", height: 192, weight: 90, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF", "LW"], club: "Inter Milan", league: "Serie A", status: "Active" },
  { name: "Ronaldo Nazário", age: 49, nationality: "Brazil", height: 183, weight: 82, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF"], club: "Real Madrid", league: "La Liga", status: "Retired" },
  { name: "Roberto Baggio", age: 59, nationality: "Italy", height: 174, weight: 73, preferredFoot: "right", primaryPosition: "SS", secondaryPositions: ["CAM", "CF"], club: "Juventus", league: "Serie A", status: "Retired" },
  { name: "Alessandro Del Piero", age: 51, nationality: "Italy", height: 174, weight: 73, preferredFoot: "right", primaryPosition: "SS", secondaryPositions: ["CF", "LW", "CAM"], club: "Juventus", league: "Serie A", status: "Retired" },
  { name: "Francesco Totti", age: 49, nationality: "Italy", height: 180, weight: 82, preferredFoot: "right", primaryPosition: "CF", secondaryPositions: ["SS", "F9", "CAM"], club: "AS Roma", league: "Serie A", status: "Retired" },
  { name: "Karim Benzema", age: 38, nationality: "France", height: 185, weight: 81, preferredFoot: "right", primaryPosition: "ST", secondaryPositions: ["CF", "F9"], club: "Al Ittihad", league: "Saudi Pro League", status: "Active" }
];
