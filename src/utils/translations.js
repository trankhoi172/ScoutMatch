export const translations = {
  en: {
    nav: {
      logo: "ARENA FIT",
      home: "Home",
      about: "About",
      faq: "FAQ",
      settings: "Settings"
    },
    hero: {
      title: "Which Professional Footballer Are You?",
      subtitle: "Answer a few questions and discover the real football player whose playing style, physical profile, and football abilities are most similar to yours.",
      cta: "Start Matching"
    },
    about: {
      title: "Analyze Your Game",
      subtitle: "We use a multi-dimensional matching engine to compare your traits with elite players.",
      card1Title: "Physical Profile",
      card1Desc: "We evaluate your height, speed, endurance, and strength to match you with players of similar physical attributes.",
      card2Title: "Playing Style",
      card2Desc: "Whether you are a deep-lying playmaker, a clinical finisher, or a rock-solid defender, we analyze your tactical footprint.",
      card3Title: "Technical Ability",
      card3Desc: "Dribbling, passing accuracy, defensive awareness, and shooting power are factored into our high-precision matching engine."
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Got questions? We have answers to help you get ready for the match.",
      q1: "How accurate is the matching algorithm?",
      a1: "Our algorithm uses real-world statistics from active professional leagues to compare your attributes and style with hundreds of elite footballers, yielding a high-precision match.",
      q2: "Can I choose multiple positions?",
      a2: "Yes! In the upcoming questionnaire, you will be able to select your preferred positions and specify how you adapt to different roles on the pitch.",
      q3: "Is my personal data saved?",
      a3: "No, we respect your privacy. All your questionnaire inputs are analyzed in real-time, and your results are not stored on our servers.",
      q4: "How long does the assessment take?",
      a4: "It takes about 3-5 minutes. The questions cover your physical traits, preferred actions on the pitch, and mental attributes."
    },
    settings: {
      title: "Settings",
      language: "Language",
      theme: "Theme",
      animations: "Animations",
      sound: "Sound Effects",
      reset: "Reset Defaults",
      dark: "Dark Mode",
      light: "Light Mode",
      on: "ON",
      off: "OFF"
    },
    footer: {
      copyright: "© 2026 Arena Fit. All rights reserved.",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Support"
    },
    loading: {
      text: "Preparing Pitch..."
    },
    questionnaire: {
      recoveryTitle: "Resume Scouting Report?",
      recoveryDesc: "We found an unfinished scouting report from your last session. Would you like to resume it?",
      btnResume: "Resume Draft",
      btnStartFresh: "Start Fresh",
      step: "Step",
      of: "of",
      btnPrev: "Previous",
      btnNext: "Next Step",
      btnSave: "Save & Continue",
      btnSubmit: "Find My Football Twin",
      validationHeader: "Review needed:",
      
      steps: {
        step1: "Basic Information",
        step2: "Physical Attributes",
        step3: "Technical Attributes",
        step4: "Defensive Attributes",
        step5: "Goalkeeper Attributes",
        step6: "Playing Style",
        step7: "Personality & Mentality",
        step8: "Tactical Preferences",
        review: "Review Report"
      },
      
      basic: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        nickname: "Nickname (Optional)",
        nicknamePlaceholder: "e.g., The Magician",
        age: "Age",
        height: "Height (cm)",
        weight: "Weight (kg)",
        foot: "Preferred Foot",
        footLeft: "Left Foot",
        footLeftDesc: "Loves cutting inside or driving crosses on the left flank.",
        footRight: "Right Foot",
        footRightDesc: "Standard dominant foot. Great for classic wing play or shooting.",
        footBoth: "Both Feet",
        footBothDesc: "Rare ability. Highly adaptable, passing/shooting with both feet.",
        position: "Primary Position Selector",
        positionSubtitle: "Select using either the Interactive Pitch or Categories below",
        selectedPositionLabel: "Selected Position",
        validation: {
          name: "Please enter your scouting name.",
          age: "Age must be between 5 and 99.",
          height: "Height must be between 100cm and 250cm.",
          weight: "Weight must be between 30kg and 150kg.",
          position: "Please select a primary position."
        },
        categories: {
          goalkeeper: "Goalkeeper",
          defenders: "Defenders",
          midfielders: "Midfielders",
          forwards: "Forwards"
        },
        positions: {
          GK: {
            name: "Goalkeeper (GK)",
            desc: "Protects the net and directs the defense."
          },
          LB: {
            name: "Left Back (LB)",
            desc: "Defends flanks and supports wing transitions."
          },
          CB: {
            name: "Center Back (CB)",
            desc: "Stops central attackers and clears threats."
          },
          RB: {
            name: "Right Back (RB)",
            desc: "Defends flanks and supports wing transitions."
          },
          LWB: {
            name: "Left Wing Back (LWB)",
            desc: "High-endurance flank defender who overlaps to cross."
          },
          RWB: {
            name: "Right Wing Back (RWB)",
            desc: "High-endurance flank defender who overlaps to cross."
          },
          CDM: {
            name: "Defensive Midfielder (CDM)",
            desc: "Shields backline and disrupts opponent build-up."
          },
          CM: {
            name: "Central Midfielder (CM)",
            desc: "Controls midfield tempo, links defense and attack."
          },
          CAM: {
            name: "Attacking Midfielder (CAM)",
            desc: "Creates scoring chances and exploits spaces."
          },
          LM: {
            name: "Left Midfielder (LM)",
            desc: "Drives flank play, provides width and crosses."
          },
          RM: {
            name: "Right Midfielder (RM)",
            desc: "Drives flank play, provides width and crosses."
          },
          LW: {
            name: "Left Winger (LW)",
            desc: "Pacy flank attacker who cuts inside to shoot."
          },
          RW: {
            name: "Right Winger (RW)",
            desc: "Pacy flank attacker who cuts inside to shoot."
          },
          CF: {
            name: "Center Forward (CF)",
            desc: "Primary target, holds up ball and links attack."
          },
          ST: {
            name: "Striker (ST)",
            desc: "Clinical finisher, aims to convert key chances."
          },
          SS: {
            name: "Second Striker (SS)",
            desc: "Supports striker, floats between lines to link play."
          },
          F9: {
            name: "False 9",
            desc: "Drops deep to drag defenders and create space."
          }
        }
      },
      
      physical: {
        title: "Rate your physical traits (1-100)",
        acceleration: "Acceleration",
        sprintSpeed: "Sprint Speed",
        agility: "Agility",
        balance: "Balance",
        strength: "Strength",
        stamina: "Stamina",
        jumping: "Jumping Reach",
        physicality: "Physicality",
        reactions: "Reactions",
        composure: "Composure",
        endurance: "Endurance"
      },
      
      technical: {
        title: "Rate your technical skills (1-100)",
        ballControl: "Ball Control",
        firstTouch: "First Touch",
        dribbling: "Dribbling",
        closeControl: "Close Control",
        shortPassing: "Short Passing",
        longPassing: "Long Passing",
        vision: "Vision & Awareness",
        crossing: "Crossing",
        curve: "Curve",
        finishing: "Finishing & Shooting",
        shotPower: "Shot Power",
        longShots: "Long Shots",
        volleys: "Volleys",
        heading: "Heading",
        penalty: "Penalties",
        freeKickAccuracy: "Free Kick Accuracy",
        throughBalls: "Through Balls",
        weakFootAbility: "Weak Foot Ability",
        skillMoves: "Skill Moves Level"
      },
      
      defensive: {
        title: "Rate your defensive traits (1-100)",
        defensiveAwareness: "Defensive Awareness",
        interceptions: "Interceptions",
        standingTackle: "Standing Tackle",
        slidingTackle: "Sliding Tackle",
        marking: "Man Marking",
        pressing: "Pressing Intensity",
        aggression: "Aggression",
        aerialAbility: "Aerial Defense"
      },
      
      goalkeeper: {
        title: "Rate your goalkeeper traits (1-100)",
        diving: "Goalkeeper Diving",
        reflexes: "Reflexes",
        handling: "Handling",
        positioning: "Positioning",
        kicking: "Kicking",
        distribution: "Distribution & Passing",
        oneOnOne: "1-v-1 Ability",
        communication: "Box Communication"
      },
      
      style: {
        title: "Select your playing styles (Select multiple)",
        validation: "Choose at least one playing style.",
        opt1: "I like dribbling through defenders",
        opt2: "I like short, quick passing combinations",
        opt3: "I like switching play with long passes",
        opt4: "I like whipping crosses into the box",
        opt5: "I like shooting from long range",
        opt6: "I like attacking aerial duels & headers",
        opt7: "I like blocking shots & sliding tackles",
        opt8: "I like pressing opponents high up the pitch",
        opt9: "I like threading through-balls to wingers",
        opt10: "I like clinical link-up play & scoring goals",
        opt11: "I like dictating the pace & keeping possession",
        opt12: "I like launching quick counter-attacks",
        opt13: "I like teasing defenders with skill moves",
        opt14: "I like making overlapping runs into space",
        opt15: "I like dropping deep to control the tempo",
        opt16: "I like playing physically to protect the ball",
        opt17: "I like taking risks in final third plays"
      },
      
      personality: {
        title: "Select your mental traits (Select multiple)",
        validation: "Choose at least one personality trait.",
        calm: "Calm & Collected",
        aggressive: "Aggressive & Relentless",
        creative: "Creative & Unpredictable",
        leader: "Vocal Leader",
        hardWorker: "Hard Worker / Workhorse",
        teamPlayer: "Team-First Mentality",
        selfless: "Selfless / Helper",
        confident: "Highly Confident",
        clinical: "Clinical & Cold",
        intelligent: "Tactically Intelligent",
        disciplined: "Disciplined / Structured",
        passionate: "Passionate / Energetic",
        competitive: "Ultra Competitive",
        riskTaker: "Risk Taker",
        composedUnderPressure: "Composed Under Pressure"
      },
      
      tactics: {
        title: "Choose your tactical profile",
        system: "Preferred System",
        role: "Preferred Role",
        validationSystem: "Please select a tactical system.",
        validationRole: "Please select a tactical role.",
        systems: {
          possession: "Possession Football (Tiki-Taka)",
          counter: "Counter Attack (Direct build-up)",
          highPress: "High Press (Gegenpressing)",
          balanced: "Balanced (Adaptable structure)",
          longBall: "Long Ball (Direct Targetplay)",
          direct: "Direct Attack (Fast transition)",
          wingPlay: "Wing Play (Overlap & cross)",
          defensive: "Defensive Football (Low block)"
        },
        roles: {
          playmaker: "Playmaker (Orchestrates transitions)",
          boxToBox: "Box-to-Box (Covers both ends of pitch)",
          deepPlaymaker: "Deep-Lying Playmaker (Quarterback)",
          ballWinning: "Ball Winning Midfielder (Destroyer)",
          insideForward: "Inside Forward (Cuts inside to shoot)",
          poacher: "Poacher (Clinical penalty box threat)",
          targetMan: "Target Man (Hold up play & headers)",
          false9: "False 9 (Drops deep to link play)",
          advancedForward: "Advanced Forward (Stretches backline)",
          completeForward: "Complete Forward (All-round attacker)",
          traditionalWinger: "Traditional Winger (Hugs line & crosses)",
          sweeperKeeper: "Sweeper Keeper (Acts as extra defender)"
        }
      },
      
      review: {
        title: "Review Scouting Report",
        subtitle: "Please double check all statistics and profiles before submitting your dossier.",
        edit: "Edit Section",
        basicInfo: "Profile Overview",
        physicalInfo: "Physical Dossier",
        technicalInfo: "Technical Skills",
        defensiveInfo: "Defensive Prowess",
        gkInfo: "Goalkeeper Record",
        stylesInfo: "Selected Action Habits",
        mentalInfo: "Mentality Traits",
        tacticalInfo: "Tactical Blueprint"
      }
    },
    phase3: {
      title: "Scouting Analysis Complete!",
      subtitle: "The Similarity Engine has matched your profile against 1,200+ professional players.",
      infoText: "Below is the matching engine verification dashboard showing your top matches, category breakdowns, and performance profiling.",
      btnRestart: "Evaluate Another Player",
      dataSummary: "Scouted Profile Dossier"
    }
  },
  vi: {
    nav: {
      logo: "ARENA FIT",
      home: "Trang chủ",
      about: "Giới thiệu",
      faq: "Hỏi đáp",
      settings: "Cài đặt"
    },
    hero: {
      title: "Bạn Giống Cầu Thủ Bóng Đá Chuyên Nghiệp Nào?",
      subtitle: "Trả lời một vài câu hỏi và khám phá cầu thủ bóng đá thực sự có phong cách thi đấu, thể hình và khả năng tương đồng nhất với bạn.",
      cta: "Bắt đầu so khớp"
    },
    about: {
      title: "Phân Tích Trận Đấu Của Bạn",
      subtitle: "Chúng tôi sử dụng công cụ so khớp đa chiều để so sánh các đặc điểm của bạn với những cầu thủ hàng đầu.",
      card1Title: "Thể hình & Thể lực",
      card1Desc: "Chúng tôi đánh giá chiều cao, tốc độ, sức bền và sức mạnh của bạn để kết hợp với các cầu thủ có thể trạng tương tự.",
      card2Title: "Phong cách thi đấu",
      card2Desc: "Cho dù bạn là một tiền vệ kiến thiết lùi sâu, một sát thủ vòng cấm hay một trung vệ thép, chúng tôi đều phân tích dấu chân chiến thuật của bạn.",
      card3Title: "Khả năng kỹ thuật",
      card3Desc: "Khả năng rê bóng, chuyền bóng chính xác, nhận thức phòng ngự và lực sút đều được đưa vào công cụ so khớp độ chính xác cao."
    },
    faq: {
      title: "Các Câu Hỏi Thường Gặp",
      subtitle: "Bạn có thắc mắc? Chúng tôi có câu trả lời để giúp bạn sẵn sàng ra sân.",
      q1: "Thuật toán so khớp chính xác đến mức nào?",
      a1: "Thuật toán của chúng tôi sử dụng số liệu thống kê thực tế từ các giải đấu chuyên nghiệp để so sánh các thuộc tính của bạn với hàng trăm cầu thủ ưu tú, mang lại kết quả có độ chính xác cao.",
      q2: "Tôi có thể chọn nhiều vị trí không?",
      a2: "Có chứ! Trong bảng câu hỏi sắp tới, bạn có thể chọn các vị trí yêu thích và cách bạn thích ứng với các vai trò khác nhau trên sân.",
      q3: "Dữ liệu cá nhân của tôi có được lưu lại không?",
      a3: "Không, chúng tôi tôn trọng quyền riêng tư của bạn. Tất cả các câu trả lời của bạn được phân tích theo thời gian thực và kết quả không được lưu trữ trên máy chủ.",
      q4: "Bài đánh giá mất bao lâu?",
      a4: "Chỉ mất khoảng 3 đến 5 phút. Các câu hỏi sẽ bao gồm các đặc điểm thể chất, hành vi trên sân đấu và tinh thần của bạn."
    },
    settings: {
      title: "Cài đặt",
      language: "Ngôn ngữ",
      theme: "Giao diện",
      animations: "Hiệu ứng",
      sound: "Âm thanh",
      reset: "Thiết lập lại",
      dark: "Chế độ tối",
      light: "Chế độ sáng",
      on: "BẬT",
      off: "TẮT"
    },
    footer: {
      copyright: "© 2026 Arena Fit. Bảo lưu mọi quyền.",
      about: "Về chúng tôi",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản dịch vụ",
      contact: "Liên hệ hỗ trợ"
    },
    loading: {
      text: "Đang Chuẩn Bị Sân Đấu..."
    },
    questionnaire: {
      recoveryTitle: "Tiếp tục trinh sát?",
      recoveryDesc: "Chúng tôi tìm thấy một bản nháp báo cáo trinh sát chưa hoàn thành từ phiên trước. Bạn có muốn khôi phục không?",
      btnResume: "Khôi phục nháp",
      btnStartFresh: "Bắt đầu mới",
      step: "Bước",
      of: "trên",
      btnPrev: "Quay lại",
      btnNext: "Tiếp theo",
      btnSave: "Lưu & Tiếp tục",
      btnSubmit: "Tìm bản sao bóng đá",
      validationHeader: "Cần kiểm tra lại:",
      
      steps: {
        step1: "Thông tin cơ bản",
        step2: "Chỉ số thể chất",
        step3: "Chỉ số kỹ thuật",
        step4: "Chỉ số phòng ngự",
        step5: "Chỉ số thủ môn",
        step6: "Phong cách chơi",
        step7: "Tính cách & Tinh thần",
        step8: "Sở thích chiến thuật",
        review: "Xem lại báo cáo"
      },
      
      basic: {
        name: "Họ và tên",
        namePlaceholder: "Nhập họ và tên trinh sát",
        nickname: "Biệt danh (Tùy chọn)",
        nicknamePlaceholder: "Ví dụ: Ảo thuật gia",
        age: "Tuổi",
        height: "Chiều cao (cm)",
        weight: "Cân nặng (kg)",
        foot: "Chân thuận",
        footLeft: "Chân trái",
        footLeftDesc: "Thích cắt bóng vào trung lộ hoặc tạt bóng xoáy từ biên trái.",
        footRight: "Chân phải",
        footRightDesc: "Chân thuận tiêu chuẩn. Tuyệt vời cho các pha bám biên hoặc dứt điểm.",
        footBoth: "Cả hai chân",
        footBothDesc: "Phẩm chất hiếm có. Rất linh hoạt, kiến tạo hoặc sút bằng cả hai chân.",
        position: "Bộ chọn vị trí thi đấu chính",
        positionSubtitle: "Chọn bằng Sơ đồ Sân đấu Tương tác hoặc Danh mục bên dưới",
        selectedPositionLabel: "Vị trí đã chọn",
        validation: {
          name: "Vui lòng nhập họ và tên của bạn.",
          age: "Tuổi phải nằm trong khoảng từ 5 đến 99.",
          height: "Chiều cao phải từ 100cm đến 250cm.",
          weight: "Cân nặng phải từ 30kg đến 150kg.",
          position: "Vui lòng chọn vị trí thi đấu chính."
        },
        categories: {
          goalkeeper: "Thủ môn",
          defenders: "Hậu vệ",
          midfielders: "Tiền vệ",
          forwards: "Tiền đạo"
        },
        positions: {
          GK: {
            name: "Thủ môn (GK)",
            desc: "Bảo vệ khung thành và chỉ huy hàng phòng ngự."
          },
          LB: {
            name: "Hậu vệ trái (LB)",
            desc: "Phòng ngự hành lang trái và hỗ trợ lên bóng biên."
          },
          CB: {
            name: "Trung vệ (CB)",
            desc: "Ngăn chặn các đợt tấn công trung lộ và giải nguy."
          },
          RB: {
            name: "Hậu vệ phải (RB)",
            desc: "Phòng ngự hành lang phải và hỗ trợ lên bóng biên."
          },
          LWB: {
            name: "Hậu vệ cánh trái (LWB)",
            desc: "Hậu vệ biên tấn công bền bỉ, dâng cao chồng biên tạt bóng."
          },
          RWB: {
            name: "Hậu vệ cánh phải (RWB)",
            desc: "Hậu vệ biên tấn công bền bỉ, dâng cao chồng biên tạt bóng."
          },
          CDM: {
            name: "Tiền vệ phòng ngự (CDM)",
            desc: "Đánh chặn trước hàng thủ và thu hồi bóng."
          },
          CM: {
            name: "Tiền vệ trung tâm (CM)",
            desc: "Kiểm soát nhịp độ tuyến giữa, liên kết phòng ngự và tấn công."
          },
          CAM: {
            name: "Tiền vệ tấn công (CAM)",
            desc: "Kiến tạo cơ hội ghi bàn và khai thác khoảng trống."
          },
          LM: {
            name: "Tiền vệ trái (LM)",
            desc: "Dẫn dắt các pha tấn công cánh trái, tạo độ rộng đội hình."
          },
          RM: {
            name: "Tiền vệ phải (RM)",
            desc: "Dẫn dắt các pha tấn công cánh phải, tạo độ rộng đội hình."
          },
          LW: {
            name: "Tiền đạo cánh trái (LW)",
            desc: "Tiền đạo cánh tốc độ cao, rê dắt bó vào trung lộ dứt điểm."
          },
          RW: {
            name: "Tiền đạo cánh phải (RW)",
            desc: "Tiền đạo cánh tốc độ cao, rê dắt bó vào trung lộ dứt điểm."
          },
          CF: {
            name: "Trung phong (CF)",
            desc: "Điểm đến của các đợt tấn công, làm tường kết nối lối chơi."
          },
          ST: {
            name: "Tiền đạo cắm (ST)",
            desc: "Sát thủ dứt điểm lạnh lùng, tận dụng tối đa cơ hội ghi bàn."
          },
          SS: {
            name: "Hộ công (SS)",
            desc: "Hỗ trợ tiền đạo cắm, hoạt động tự do giữa các tuyến."
          },
          F9: {
            name: "Số 9 ảo",
            desc: "Lùi sâu kéo dãn trung vệ đối phương tạo khoảng trống tuyến hai."
          }
        }
      },
      
      physical: {
        title: "Đánh giá các chỉ số thể chất (1-100)",
        acceleration: "Tăng tốc",
        sprintSpeed: "Tốc độ nước rút",
        agility: "Khéo léo",
        balance: "Thăng bằng",
        strength: "Sức mạnh",
        stamina: "Thể lực",
        jumping: "Nhảy cao",
        physicality: "Tranh chấp",
        reactions: "Phản ứng",
        composure: "Bình tĩnh",
        endurance: "Sức chịu đựng"
      },
      
      technical: {
        title: "Đánh giá các chỉ số kỹ thuật (1-100)",
        ballControl: "Kiểm soát bóng",
        firstTouch: "Chạm bóng bước một",
        dribbling: "Rê bóng",
        closeControl: "Giữ bóng chặt",
        shortPassing: "Chuyền ngắn",
        longPassing: "Chuyền dài",
        vision: "Tầm nhìn chiến thuật",
        crossing: "Tạt bóng",
        curve: "Độ xoáy",
        finishing: "Dứt điểm",
        shotPower: "Lực sút",
        longShots: "Sút xa",
        volleys: "Vô lê",
        heading: "Đánh đầu",
        penalty: "Đá phạt đền",
        freeKickAccuracy: "Đá phạt trực tiếp",
        throughBalls: "Chọc khe",
        weakFootAbility: "Chân không thuận",
        skillMoves: "Kỹ thuật cá nhân"
      },
      
      defensive: {
        title: "Đánh giá các chỉ số phòng ngự (1-100)",
        defensiveAwareness: "Nhận thức phòng ngự",
        interceptions: "Cắt bóng",
        standingTackle: "Tackle bóng đứng",
        slidingTackle: "Xoạc bóng",
        marking: "Kèm người",
        pressing: "Cường độ áp sát",
        aggression: "Quyết đoán",
        aerialAbility: "Không chiến phòng thủ"
      },
      
      goalkeeper: {
        title: "Đánh giá các chỉ số thủ môn (1-100)",
        diving: "Bay người cản phá",
        reflexes: "Phản xạ",
        handling: "Bắt bóng",
        positioning: "Chọn vị trí",
        kicking: "Phát bóng bằng chân",
        distribution: "Phân phối bóng",
        oneOnOne: "Đối mặt 1v1",
        communication: "Chỉ huy vòng cấm"
      },
      
      style: {
        title: "Chọn thói quen thi đấu của bạn (Chọn nhiều mục)",
        validation: "Vui lòng chọn ít nhất một phong cách chơi.",
        opt1: "Tôi thích đi bóng qua hậu vệ đối phương",
        opt2: "Tôi thích các pha đập nhả ngắn, nhanh",
        opt3: "Tôi thích mở bóng dài sang cánh",
        opt4: "Tôi thích tạt bóng chuẩn xác vào vòng cấm",
        opt5: "Tôi thích tung ra các cú sút xa",
        opt6: "Tôi thích tranh chấp trên không & đánh đầu",
        opt7: "Tôi thích cản cú sút & xoạc bóng",
        opt8: "Tôi thích áp sát tầm cao phá lối chơi",
        opt9: "Tôi thích chọc khe cho cầu thủ chạy cánh",
        opt10: "Tôi thích kết nối lối chơi & ghi bàn",
        opt11: "Tôi thích giữ nhịp & kiểm soát bóng",
        opt12: "Tôi thích thực hiện các pha phản công nhanh",
        opt13: "Tôi thích sử dụng các kỹ thuật qua người",
        opt14: "Tôi thích di chuyển không bóng đón đường chuyền",
        opt15: "Tôi thích lùi sâu điều tiết nhịp độ",
        opt16: "Tôi thích dùng thể hình bảo vệ bóng",
        opt17: "Tôi thích mạo hiểm kiến tạo ở 1/3 sân đối phương"
      },
      
      personality: {
        title: "Chọn đặc điểm tinh thần của bạn (Chọn nhiều mục)",
        validation: "Vui lòng chọn ít nhất một đặc điểm tinh thần.",
        calm: "Điềm tĩnh",
        aggressive: "Máu lửa & Quyết liệt",
        creative: "Sáng tạo & Đột phá",
        leader: "Thủ lĩnh chỉ huy",
        hardWorker: "Chăm chỉ / Hoạt động rộng",
        teamPlayer: "Vì tập thể",
        selfless: "Vị tha / Hỗ trợ đồng đội",
        confident: "Tự tin cao",
        clinical: "Sát thủ / Lạnh lùng",
        intelligent: "Thông minh chiến thuật",
        disciplined: "Kỷ luật / Đúng vị trí",
        passionate: "Nhiệt huyết / Tràn đầy năng lượng",
        competitive: "Khát khao chiến thắng",
        riskTaker: "Thích mạo hiểm",
        composedUnderPressure: "Bản lĩnh dưới áp lực"
      },
      
      tactics: {
        title: "Chọn hồ sơ chiến thuật của bạn",
        system: "Hệ thống ưa thích",
        role: "Vai trò ưa thích",
        validationSystem: "Vui lòng chọn một hệ thống chiến thuật.",
        validationRole: "Vui lòng chọn một vai trò chiến thuật.",
        systems: {
          possession: "Kiểm soát bóng (Tiki-Taka)",
          counter: "Phản công nhanh (Trực diện)",
          highPress: "Gegenpressing (Áp sát tầm cao)",
          balanced: "Cân bằng (Linh hoạt chiến thuật)",
          longBall: "Bóng dài (Tận dụng Targetman)",
          direct: "Tấn công nhanh (Chuyển đổi trạng thái)",
          wingPlay: "Tấn công biên (Tạt cánh đánh đầu)",
          defensive: "Phòng ngự chặt (Low block)"
        },
        roles: {
          playmaker: "Kiến thiết lối chơi (Dẫn dắt tấn công)",
          boxToBox: "Tiền vệ con thoi (Bao sân)",
          deepPlaymaker: "Kiến thiết lùi sâu (Phát động tấn công)",
          ballWinning: "Tiền vệ đánh chặn (Máy quét)",
          insideForward: "Tiền đạo cánh bó trong (Cắt vào dứt điểm)",
          poacher: "Kẻ săn bàn (Nhạy bén trong vòng cấm)",
          targetMan: "Tiền đạo mục tiêu (Tì đè & làm tường)",
          false9: "Số 9 ảo (Lùi sâu kết nối lối chơi)",
          advancedForward: "Tiền đạo di chuyển rộng (Phá bẫy việt vị)",
          completeForward: "Tiền đạo toàn diện (Mọi kỹ năng)",
          traditionalWinger: "Cầu thủ chạy cánh thuần túy (Bám biên & tạt)",
          sweeperKeeper: "Thủ môn quét (Bọc lót hậu vệ)"
        }
      },
      
      review: {
        title: "Xem lại báo cáo trinh sát",
        subtitle: "Vui lòng kiểm tra lại tất cả các thông tin và thông số trước khi lưu hồ sơ của bạn.",
        edit: "Chỉnh sửa",
        basicInfo: "Hồ sơ cá nhân",
        physicalInfo: "Chỉ số thể trạng",
        technicalInfo: "Kỹ năng kỹ thuật",
        defensiveInfo: "Khả năng phòng ngự",
        gkInfo: "Kỹ năng thủ môn",
        stylesInfo: "Phong cách thi đấu",
        mentalInfo: "Phẩm chất tinh thần",
        tacticalInfo: "Chiến thuật & Vai trò"
      }
    },
    phase3: {
      title: "Phân Tích Trình Sát Hoàn Tất!",
      subtitle: "Công cụ so khớp đã đối chiếu hồ sơ của bạn với 1.200+ cầu thủ chuyên nghiệp.",
      infoText: "Dưới đây là bảng điều khiển xác minh công cụ so khớp hiển thị các cầu thủ tương đồng nhất, chi tiết chỉ số và thời gian xử lý.",
      btnRestart: "Trinh sát cầu thủ khác",
      dataSummary: "Hồ sơ cầu thủ đã trinh sát"
    }
  }
};
