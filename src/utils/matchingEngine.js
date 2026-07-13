import { playerDatabase } from './playerDatabase';

// Position compatibility grouping
const POSITION_COMPATIBILITY = {
  GK: ["GK"],
  CB: ["CB", "LB", "RB", "CDM"],
  LB: ["LB", "LWB", "LM", "CB"],
  RB: ["RB", "RWB", "RM", "CB"],
  LWB: ["LWB", "LB", "LM", "LW"],
  RWB: ["RWB", "RB", "RM", "RW"],
  CDM: ["CDM", "CM", "CB"],
  CM: ["CM", "CDM", "CAM"],
  CAM: ["CAM", "CM", "SS", "LM", "RM"],
  LM: ["LM", "LW", "LWB", "CM", "RM"],
  RM: ["RM", "RW", "RWB", "CM", "LM"],
  LW: ["LW", "RW", "LM", "CF", "ST"],
  RW: ["RW", "LW", "RM", "CF", "ST"],
  CF: ["CF", "ST", "SS", "F9", "LW", "RW"],
  ST: ["ST", "CF", "SS", "F9"],
  SS: ["SS", "CF", "CAM", "F9"],
  F9: ["F9", "CF", "SS", "ST"]
};

// General classes for broad category matching
const POSITION_CLASSES = {
  GK: ["GK"],
  DEF: ["CB", "LB", "RB", "LWB", "RWB"],
  MID: ["CDM", "CM", "CAM", "LM", "RM"],
  FWD: ["LW", "RW", "CF", "ST", "SS", "F9"]
};

// Map user selected style option keys to playing style tags stored in player database
const USER_STYLE_TO_PLAYER_STYLE = {
  opt1: "Dribbler",
  opt2: "Possession",
  opt3: "Long Pass Specialist",
  opt4: "Crossing Specialist",
  opt5: "Clinical Finisher",
  opt6: "Physical",
  opt7: "Defensive Leader",
  opt8: "High Press",
  opt9: "Playmaker",
  opt10: "Clinical Finisher",
  opt11: "Possession",
  opt12: "Counter Attack",
  opt13: "Dribbler",
  opt14: "Fast Runner",
  opt15: "Playmaker",
  opt16: "Physical",
  opt17: "Creative"
};

// Map tactical system keys to player style tags
const SYSTEM_KEYS_TO_PLAYER_STYLE = {
  possession: "Possession",
  counter: "Counter Attack",
  highPress: "High Press",
  direct: "Direct Football",
  wingPlay: "Crossing Specialist",
  defensive: "Defensive Leader"
};

// Helper to check position class
const getPositionClass = (pos) => {
  if (POSITION_CLASSES.GK.includes(pos)) return "GK";
  if (POSITION_CLASSES.DEF.includes(pos)) return "DEF";
  if (POSITION_CLASSES.MID.includes(pos)) return "MID";
  if (POSITION_CLASSES.FWD.includes(pos)) return "FWD";
  return "MID";
};

// Calculate compatibility between user and player positions
const getPositionCompatibilityScore = (userPos, playerPos, playerSecondaries = []) => {
  if (userPos === playerPos) return 100;
  if (playerSecondaries.includes(userPos)) return 92;
  
  // Check compatibility lists
  const compatList = POSITION_COMPATIBILITY[userPos] || [];
  if (compatList.includes(playerPos)) return 75;
  
  // Check if user pos is compatible with player secondaries
  const anySecondaryCompat = playerSecondaries.some(sec => compatList.includes(sec));
  if (anySecondaryCompat) return 65;

  // Check if same general class
  if (getPositionClass(userPos) === getPositionClass(playerPos)) return 40;

  return 15;
};

// Helper to compute Euclidean similarity for attribute groups
const calculateAttributeGroupSimilarity = (userGroup, playerGroup) => {
  const keys = Object.keys(userGroup);
  if (keys.length === 0) return 0;
  
  let sumSqDiff = 0;
  keys.forEach(key => {
    const userVal = Number(userGroup[key]) || 50;
    const playerVal = Number(playerGroup[key]) || 50;
    sumSqDiff += Math.pow(userVal - playerVal, 2);
  });
  
  const avgDiff = Math.sqrt(sumSqDiff / keys.length);
  return Math.max(0, 100 - avgDiff);
};

// Calculate playing styles similarity (Jaccard Overlap)
const calculateStyleSimilarity = (userSelectedStyles = [], playerStyleTags = []) => {
  if (userSelectedStyles.length === 0) return 100;
  
  // Map user selections to database style tags
  const mappedUserStyles = userSelectedStyles.map(key => USER_STYLE_TO_PLAYER_STYLE[key]).filter(Boolean);
  if (mappedUserStyles.length === 0) return 100;

  let intersectionCount = 0;
  mappedUserStyles.forEach(style => {
    if (playerStyleTags.includes(style)) {
      intersectionCount++;
    }
  });

  // Calculate percentage overlap relative to what the user selected
  return (intersectionCount / mappedUserStyles.length) * 100;
};

// Calculate tactical similarity based on system and role match
const calculateTacticalSimilarity = (userTactics, playerTacticalRoles = [], playerStyleTags = []) => {
  const targetSystemTag = SYSTEM_KEYS_TO_PLAYER_STYLE[userTactics.system];
  const targetRole = userTactics.role; // e.g. playmaker, poacher

  // System Score (100 if matching tag found, 30 default)
  const systemScore = playerStyleTags.includes(targetSystemTag) ? 100 : 30;

  // Role Score (100 if in player roles, 70 if in style tags, 20 default)
  let roleScore = 20;
  if (playerTacticalRoles.includes(targetRole)) {
    roleScore = 100;
  } else {
    // Map roles to corresponding style tags if helpful (e.g. playmaker -> Playmaker)
    const roleTag = targetRole.charAt(0).toUpperCase() + targetRole.slice(1);
    if (playerStyleTags.includes(roleTag)) {
      roleScore = 70;
    }
  }

  // Tactical profile is 40% system match, 60% role match
  return (systemScore * 0.4) + (roleScore * 0.6);
};

// Calculate preferred foot similarity
const calculateFootSimilarity = (userFoot, playerFoot) => {
  if (userFoot === playerFoot) return 100;
  if (userFoot === "both" || playerFoot === "both") return 85;
  return 25; // Incompatible preferred foot
};

// Dynamic match explanation generator
export const generateMatchExplanation = (user, player, categories, lang = 'en') => {
  const strengths = [];
  const addStrength = (userVal, playerVal, labelEn, labelVi) => {
    if (Number(userVal) >= 70 && Number(playerVal) >= 70) {
      strengths.push({ en: labelEn, vi: labelVi });
    }
  };

  if (player.isGK) {
    addStrength(user.goalkeeper.diving, player.goalkeeper.diving, "shot-stopping diving", "khả năng bay người cản phá");
    addStrength(user.goalkeeper.reflexes, player.goalkeeper.reflexes, "reflexes", "phản xạ nhanh nhẹn");
    addStrength(user.goalkeeper.handling, player.goalkeeper.handling, "ball handling security", "bắt bóng dính");
    addStrength(user.goalkeeper.positioning, player.goalkeeper.positioning, "positioning", "chọn vị trí tối ưu");
    addStrength(user.goalkeeper.distribution, player.goalkeeper.distribution, "distribution & kicking", "phát bóng tấn công");
  } else {
    // Technical
    addStrength(user.technical.shortPassing, player.technical.shortPassing, "short passing", "chuyền ngắn");
    addStrength(user.technical.longPassing, player.technical.longPassing, "long passing range", "chuyền dài");
    addStrength(user.technical.vision, player.technical.vision, "vision & creativity", "nhãn quan chiến thuật");
    addStrength(user.technical.dribbling, player.technical.dribbling, "dribbling ability", "rê bóng khéo léo");
    addStrength(user.technical.ballControl, player.technical.ballControl, "close ball control", "khả năng giữ bóng");
    addStrength(user.technical.finishing, player.technical.finishing, "clinical finishing", "dứt điểm sắc bén");
    addStrength(user.technical.crossing, player.technical.crossing, "crossing accuracy", "tạt bóng chuẩn xác");
    addStrength(user.technical.heading, player.technical.heading, "aerial headers", "đánh đầu");
    
    // Physical
    addStrength(user.physical.acceleration, player.physical.acceleration, "acceleration", "bứt tốc nhanh");
    addStrength(user.physical.sprintSpeed, player.physical.sprintSpeed, "sprint speed", "tốc độ bứt phá");
    addStrength(user.physical.stamina, player.physical.stamina, "high stamina", "thể lực bền bỉ");
    addStrength(user.physical.strength, player.physical.strength, "strength & physicality", "tì đè tranh chấp");
    
    // Defensive
    addStrength(user.defensive.standingTackle, player.defensive.standingTackle, "tackling prowess", "tranh cướp bóng");
    addStrength(user.defensive.defensiveAwareness, player.defensive.defensiveAwareness, "defensive awareness", "đọc tình huống phòng ngự");
    addStrength(user.defensive.interceptions, player.defensive.interceptions, "interceptions", "cắt đường chuyền");
  }

  // Fallback strengths if list is empty
  if (strengths.length === 0) {
    if (player.isGK) {
      strengths.push({ en: "goalkeeping stability", vi: "sự ổn định khung gỗ" });
      strengths.push({ en: "positional awareness", vi: "nhạy bén vị trí" });
    } else if (player.primaryPosition === "CB") {
      strengths.push({ en: "defensive solidity", vi: "sự vững chãi phòng thủ" });
      strengths.push({ en: "physical presence", vi: "thể hình tranh chấp" });
    } else if (["CM", "CDM", "CAM"].includes(player.primaryPosition)) {
      strengths.push({ en: "tactical discipline", vi: "kỷ luật chiến thuật" });
      strengths.push({ en: "passing link-up", vi: "kết nối lối chơi" });
    } else {
      strengths.push({ en: "attacking threat", vi: "khả năng uy hiếp tấn công" });
      strengths.push({ en: "pace & movement", vi: "tốc độ di chuyển" });
    }
  }

  const maxStrengthsToShow = strengths.slice(0, 3);
  const strengthsEnText = maxStrengthsToShow.map(s => s.en).join(", ");
  const strengthsViText = maxStrengthsToShow.map(s => s.vi).join(", ");

  // Physical differences text
  const physDiff = Math.abs(categories.physical - 100);
  let physTextEn = "show minor differences";
  let physTextVi = "có sự tương đồng cao";
  if (physDiff > 25) {
    physTextEn = "show moderate differences";
    physTextVi = "có sự khác biệt vừa phải";
  } else if (physDiff > 45) {
    physTextEn = "show significant physical divergence";
    physTextVi = "khác biệt rõ rệt về thể trạng";
  }

  // Technical differences text
  const techDiff = categories.technical;
  let techTextEn = "extremely similar";
  let techTextVi = "rất tương đồng";
  if (techDiff < 75) {
    techTextEn = "moderately aligned";
    techTextVi = "gần giống nhau";
  } else if (techDiff < 60) {
    techTextEn = "have visible technical gaps";
    techTextVi = "có một vài khác biệt kỹ thuật";
  }

  if (lang === 'en') {
    return `You were matched with ${player.name} because both of you excel in ${strengthsEnText}. Your technical profile is ${techTextEn}, while your physical attributes ${physTextEn}.`;
  } else {
    return `Bạn được so khớp với ${player.name} vì cả hai đều nổi bật ở ${strengthsViText}. Chỉ số kỹ thuật của bạn và cầu thủ này ${techTextVi}, trong khi các thông số thể trạng ${physTextVi}.`;
  }
};

// Matching Engine Core function
export const matchUserProfile = (userProfile) => {
  const startTime = performance.now();
  
  // Pull all players from DB (which initializes the procedural pool automatically)
  const allPlayers = playerDatabase.getAllPlayers();
  
  const userIsGK = userProfile.basic.primaryPosition === 'GK';
  const matches = [];

  for (const player of allPlayers) {
    // Goalkeepers only compared to goalkeepers, outfielders to outfielders
    if (userIsGK !== player.isGK) continue;

    // 1. Position Compatibility
    const posCompatibility = getPositionCompatibilityScore(
      userProfile.basic.primaryPosition, 
      player.primaryPosition, 
      player.secondaryPositions
    );

    // 2. Physical Attributes similarity
    const physicalSim = calculateAttributeGroupSimilarity(userProfile.physical, player.physical);

    // 3. Technical Attributes similarity
    const technicalSim = calculateAttributeGroupSimilarity(userProfile.technical, player.technical);

    // 4. Defensive Attributes similarity
    const defensiveSim = calculateAttributeGroupSimilarity(userProfile.defensive, player.defensive);

    // 5. Goalkeeper Attributes similarity
    const goalkeeperSim = userIsGK 
      ? calculateAttributeGroupSimilarity(userProfile.goalkeeper, player.goalkeeper)
      : 0;

    // 6. Tactical Profile similarity
    const tacticalSim = calculateTacticalSimilarity(userProfile.tactics, player.tacticalProfile, player.playingStyle);

    // 7. Playing Style similarity
    const styleSim = calculateStyleSimilarity(userProfile.styles, player.playingStyle);

    // 8. Foot Similarity
    const footSim = calculateFootSimilarity(userProfile.basic.preferredFoot, player.preferredFoot);

    // 9. Demographic parameters
    const heightDiff = Math.abs(Number(userProfile.basic.height) - player.height);
    const heightSim = Math.max(0, 100 - heightDiff * 4);

    const weightDiff = Math.abs(Number(userProfile.basic.weight) - player.weight);
    const weightSim = Math.max(0, 100 - weightDiff * 3.33);

    const ageDiff = Math.abs(Number(userProfile.basic.age) - player.age);
    const ageSim = Math.max(0, 100 - ageDiff * 3);

    // Categories structure for detailed score returns
    const categories = {
      physical: Math.round(physicalSim),
      technical: Math.round(technicalSim),
      defensive: Math.round(defensiveSim),
      tactical: Math.round(tacticalSim),
      styles: Math.round(styleSim),
      demographics: Math.round((heightSim * 0.6) + (weightSim * 0.4)),
      position: Math.round(posCompatibility),
      foot: Math.round(footSim)
    };

    if (userIsGK) {
      categories.goalkeeping = Math.round(goalkeeperSim);
    }

    // Weighted average score calculation
    let weights = {};
    if (userIsGK) {
      weights = {
        goalkeeper: 1.0,
        technical: 0.3,
        physical: 0.5,
        defensive: 0.1,
        tactical: 0.6,
        styles: 0.6,
        foot: 0.4,
        demographics: 0.15,
        age: 0.02,
        position: 0.7
      };
    } else {
      weights = {
        technical: 1.0,
        physical: 0.8,
        defensive: 0.5,
        tactical: 0.8,
        styles: 0.8,
        foot: 0.4,
        demographics: 0.15,
        age: 0.02,
        position: 0.7
      };
    }

    let weightedSum = 0;
    let weightSum = 0;

    const addWeight = (score, weight) => {
      weightedSum += score * weight;
      weightSum += weight;
    };

    if (userIsGK) {
      addWeight(goalkeeperSim, weights.goalkeeper);
      addWeight(technicalSim, weights.technical);
      addWeight(physicalSim, weights.physical);
      addWeight(defensiveSim, weights.defensive);
    } else {
      addWeight(technicalSim, weights.technical);
      addWeight(physicalSim, weights.physical);
      addWeight(defensiveSim, weights.defensive);
    }

    addWeight(tacticalSim, weights.tactical);
    addWeight(styleSim, weights.styles);
    addWeight(footSim, weights.foot);
    addWeight((heightSim * 0.6) + (weightSim * 0.4), weights.demographics);
    addWeight(ageSim, weights.age);
    addWeight(posCompatibility, weights.position);

    const overallScore = Number((weightedSum / weightSum).toFixed(1));

    const explanationEn = generateMatchExplanation(userProfile, player, categories, 'en');
    const explanationVi = generateMatchExplanation(userProfile, player, categories, 'vi');

    matches.push({
      player,
      overallScore,
      categories,
      explanationEn,
      explanationVi
    });
  }

  // Sort matches in descending order of compatibility score
  matches.sort((a, b) => b.overallScore - a.overallScore);

  const duration = performance.now() - startTime;
  console.log(`Matched profile in ${duration.toFixed(2)}ms against ${allPlayers.length} players.`);

  return {
    matches,
    durationMs: duration
  };
};
