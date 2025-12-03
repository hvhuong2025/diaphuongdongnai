import { Chapter } from '../types';

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Chủ đề 1: Lịch sử Bình Phước (TK XVII - Đầu TK XX)",
    shortTitle: "Lịch sử Khẩn Hoang",
    icon: "scroll",
    color: "bg-amber-600",
    badgeName: "Nhà Sử Học",
    summary: [
      "Quá trình khẩn hoang vùng đất Bình Phước từ thế kỉ XVII đến thế kỉ XVIII.",
      "Cuộc đấu tranh chống thực dân Pháp từ cuối thế kỉ XIX đến đầu thế kỉ XX.",
      "Những đóng góp của Nguyễn Hữu Cảnh với vùng đất Đông Nam Bộ."
    ],
    details: [
      {
        heading: "Quá trình khai phá",
        content: "Cuối thế kỉ XVI, vùng đất Bình Phước còn hoang vu. Đến năm 1698, Nguyễn Hữu Cảnh cho đặt huyện Phước Long, thuộc dinh Trấn Biên. Người Việt cùng các dân tộc S'tiêng, Khmer đã cùng nhau khai phá, lập làng."
      },
      {
        heading: "Thời kỳ Pháp thuộc",
        content: "Từ năm 1862, Pháp bắt đầu thiết lập bộ máy cai trị. Họ xây dựng hệ thống giao thông (đường 13, 14) và lập các đồn điền cao su lớn (Quản Lợi, Lộc Ninh). Đời sống nhân dân vô cùng cực khổ."
      },
      {
        heading: "Phong trào đấu tranh",
        content: "Nhiều cuộc khởi nghĩa đã nổ ra, tiêu biểu là cuộc nổi dậy của đồng bào S'tiêng do Điểu Dố lãnh đạo (1908) và phong trào của N'Trang Lơng (1912-1935)."
      }
    ],
    questions: [
      {
        id: 101,
        question: "Ai là người có công lớn trong việc xác lập chủ quyền vùng đất Đông Nam Bộ (trong đó có Bình Phước) vào năm 1698?",
        options: ["Lê Quý Đôn", "Nguyễn Hữu Cảnh", "Trịnh Hoài Đức", "Mạc Cửu"],
        correctAnswer: 1,
        explanation: "Năm 1698, Nguyễn Hữu Cảnh kinh lý miền Nam, đặt dinh Trấn Biên và Phiên Trấn, xác lập bộ máy hành chính."
      },
      {
        id: 102,
        question: "Cây trồng công nghiệp nào được thực dân Pháp chú trọng phát triển nhất tại Bình Phước?",
        options: ["Cà phê", "Lúa nước", "Cao su", "Tiêu"],
        correctAnswer: 2,
        explanation: "Bình Phước nổi tiếng với đất đỏ bazan, nơi Pháp đã lập nên những đồn điền cao su bạt ngàn như Phú Riềng, Lộc Ninh."
      }
    ]
  },
  {
    id: 2,
    title: "Chủ đề 2: Thổ nhưỡng và Sinh vật",
    shortTitle: "Đất và Rừng",
    icon: "tree",
    color: "bg-emerald-600",
    badgeName: "Nhà Sinh Học",
    summary: [
      "Đặc điểm các nhóm đất chính: Đất đỏ badan (feralit), đất xám.",
      "Sự đa dạng sinh học và các vườn quốc gia.",
      "Vấn đề bảo vệ môi trường và chống thoái hóa đất."
    ],
    details: [
      {
        heading: "Thổ nhưỡng",
        content: "Bình Phước có diện tích lớn đất đỏ badan (đất feralit nâu đỏ) rất màu mỡ, thích hợp trồng cây công nghiệp như cao su, điều, tiêu. Ngoài ra còn có đất xám bạc màu."
      },
      {
        heading: "Sinh vật",
        content: "Hệ thực vật và động vật rất phong phú. Nổi bật là Vườn quốc gia Bù Gia Mập với nhiều loài quý hiếm như bò tót, voi, gấu ngựa và các loại gỗ quý như cẩm lai, gõ đỏ."
      }
    ],
    questions: [
      {
        id: 201,
        question: "Loại đất nào chiếm diện tích lớn nhất và có giá trị kinh tế cao nhất tại Bình Phước?",
        options: ["Đất phù sa", "Đất phèn", "Đất đỏ badan (Feralit)", "Đất cát"],
        correctAnswer: 2,
        explanation: "Đất đỏ badan màu mỡ là 'vàng nâu' của Bình Phước, tạo điều kiện cho thủ phủ điều và cao su phát triển."
      },
      {
        id: 202,
        question: "Vườn quốc gia nào là khu bảo tồn thiên nhiên nổi tiếng tại Bình Phước?",
        options: ["Cát Tiên", "Bù Gia Mập", "Yok Đôn", "Cúc Phương"],
        correctAnswer: 1,
        explanation: "Vườn quốc gia Bù Gia Mập nằm tại huyện Bù Gia Mập, là nơi bảo tồn nguồn gen động thực vật quý hiếm."
      }
    ]
  },
  {
    id: 3,
    title: "Chủ đề 3: Quê hương Bình Phước trong thơ",
    shortTitle: "Văn Học",
    icon: "pen",
    color: "bg-rose-500",
    badgeName: "Thi Sĩ",
    summary: [
      "Hình ảnh quê hương Bình Phước qua các tác phẩm thơ ca.",
      "Vẻ đẹp thiên nhiên và con người lao động cần cù.",
      "Lịch sử hào hùng qua những vần thơ."
    ],
    details: [
      {
        heading: "Hình ảnh thiên nhiên",
        content: "Thơ ca Bình Phước thường nhắc đến 'Rừng cao su bát ngát', 'Dòng Sông Bé oai hùng', 'Thác Mơ', và đất đỏ miền Đông."
      },
      {
        heading: "Địa danh lịch sử",
        content: "Các địa danh như Phú Riềng Đỏ, sóc Bom Bo, Tà Thiết thường xuất hiện trong thơ như biểu tượng của lòng yêu nước và tinh thần cách mạng."
      }
    ],
    questions: [
      {
        id: 301,
        question: "Địa danh nào thường được nhắc đến trong thơ ca Bình Phước gắn liền với tiếng chày giã gạo nuôi quân?",
        options: ["Sóc Bom Bo", "Đồng Xoài", "Phước Long", "Lộc Ninh"],
        correctAnswer: 0,
        explanation: "Sóc Bom Bo nổi tiếng với bài hát và thơ ca về 'Tiếng chày trên sóc Bom Bo' trong kháng chiến."
      },
      {
        id: 302,
        question: "Hình ảnh cây trồng nào xuất hiện nhiều nhất và đặc trưng cho Bình Phước trong thơ ca?",
        options: ["Cây lúa", "Cây cao su", "Cây sen", "Cây dừa"],
        correctAnswer: 1,
        explanation: "Rừng cao su bạt ngàn là hình ảnh đặc trưng nhất của vùng đất đỏ Bình Phước."
      }
    ]
  },
  {
    id: 4,
    title: "Chủ đề 4: Tập quán các dân tộc",
    shortTitle: "Văn Hóa",
    icon: "users",
    color: "bg-orange-500",
    badgeName: "Nhà Văn Hóa",
    summary: [
      "Tập quán tốt đẹp của các dân tộc: Kinh, S'tiêng, Khmer, Mnông...",
      "Tín ngưỡng thờ cúng tổ tiên, thờ thần lúa.",
      "Lễ hội cộng đồng."
    ],
    details: [
      {
        heading: "Tín ngưỡng",
        content: "Người S'tiêng và Mnông coi trọng các vị thần tự nhiên (thần rừng, thần lúa). Người Kinh giữ gìn tục thờ cúng tổ tiên và các lễ hội đình làng (Lễ hội Cầu bông)."
      },
      {
        heading: "Đời sống cộng đồng",
        content: "Tính cộng đồng thể hiện rõ qua các lễ hội, việc cưới xin, ma chay và sự đoàn kết giúp đỡ nhau trong buôn làng."
      }
    ],
    questions: [
      {
        id: 401,
        question: "Lễ hội nào là lễ hội truyền thống cầu mưa thuận gió hòa của người Kinh ở Bình Phước (như tại đình thần Hưng Long)?",
        options: ["Lễ hội Đâm trâu", "Lễ hội Cầu bông", "Lễ hội Katê", "Lễ hội Ok Om Bok"],
        correctAnswer: 1,
        explanation: "Lễ hội Cầu bông là lễ hội truyền thống của cư dân nông nghiệp người Kinh để cầu mong mùa màng bội thu."
      },
      {
        id: 402,
        question: "Người S'tiêng thường tổ chức các lễ hội gắn liền với chu kỳ của cây gì?",
        options: ["Cây lúa", "Cây ngô", "Cây điều", "Cây sắn"],
        correctAnswer: 0,
        explanation: "Các lễ hội lớn của người S'tiêng như Lễ mừng lúa mới đều xoay quanh chu kỳ canh tác cây lúa rẫy."
      }
    ]
  },
  {
    id: 5,
    title: "Chủ đề 5: Âm nhạc và múa Lễ hội S'tiêng",
    shortTitle: "Nghệ Thuật",
    icon: "music",
    color: "bg-purple-600",
    badgeName: "Nghệ Sĩ",
    summary: [
      "Cồng chiêng trong đời sống tinh thần người S'tiêng.",
      "Các nhạc cụ truyền thống: Kèn K'buot, Sáo pi.",
      "Vũ điệu dân gian trong lễ hội."
    ],
    details: [
      {
        heading: "Cồng chiêng",
        content: "Là nhạc cụ thiêng liêng nhất, được coi là ngôn ngữ giao tiếp với thần linh. Bộ cồng (có núm) và chiêng (bằng) thường được diễn tấu tập thể."
      },
      {
        heading: "Múa dân gian",
        content: "Các điệu múa mô phỏng động tác lao động, săn bắn hoặc mô phỏng động tác của các loài vật, thể hiện sự hòa hợp với thiên nhiên."
      }
    ],
    questions: [
      {
        id: 501,
        question: "Nhạc cụ nào được xem là vật thiêng, biểu tượng sức mạnh và sự giàu có của người S'tiêng?",
        options: ["Đàn đá", "Cồng chiêng", "Sáo trúc", "Đàn T'rưng"],
        correctAnswer: 1,
        explanation: "Cồng chiêng không chỉ là nhạc cụ mà còn là tài sản quý giá, vật thiêng trong nhà người S'tiêng."
      },
      {
        id: 502,
        question: "Kèn K'buot của người S'tiêng có đặc điểm gì độc đáo?",
        options: ["Làm bằng sừng trâu", "Có bầu cộng hưởng bằng vỏ bầu khô", "Làm bằng kim loại", "Chỉ có 1 dây"],
        correctAnswer: 1,
        explanation: "Kèn K'buot độc đáo nhờ phần bầu cộng hưởng làm từ vỏ quả bầu nậm khô gắn với các ống nứa."
      }
    ]
  },
  {
    id: 6,
    title: "Chủ đề 6: Trang trí hoa văn thổ cẩm",
    shortTitle: "Thổ Cẩm",
    icon: "palette",
    color: "bg-pink-600",
    badgeName: "Nghệ Nhân",
    summary: [
      "Nghệ thuật dệt thổ cẩm của người S'tiêng, Khmer, Mnông.",
      "Ý nghĩa của màu sắc và hoa văn trang trí.",
      "Kỹ thuật tạo hình."
    ],
    details: [
      {
        heading: "Màu sắc",
        content: "Màu chủ đạo thường là Đỏ (máu, lửa, sức sống) và Đen (đất đai, sự nghiêm trang). Màu sắc được nhuộm từ các nguyên liệu tự nhiên như vỏ cây, lá cây."
      },
      {
        heading: "Hoa văn",
        content: "Hoa văn thường là các hình học (tam giác, thoi) hoặc cách điệu từ thiên nhiên (ngọn rau dớn, con chim, hạt lúa), bố cục đối xứng chặt chẽ."
      }
    ],
    questions: [
      {
        id: 601,
        question: "Trên thổ cẩm của người S'tiêng, màu đỏ thường tượng trưng cho điều gì?",
        options: ["Sự buồn bã", "Máu, lửa và sức sống", "Nước và biển", "Bầu trời"],
        correctAnswer: 1,
        explanation: "Màu đỏ là màu chủ đạo, thể hiện khát vọng sống mãnh liệt và sức mạnh của thiên nhiên."
      },
      {
        id: 602,
        question: "Hoa văn trên thổ cẩm thường mô phỏng điều gì?",
        options: ["Nhà cao tầng", "Máy móc hiện đại", "Thiên nhiên, hoa lá, động vật", "Chữ viết"],
        correctAnswer: 2,
        explanation: "Người dân tộc lấy cảm hứng trực tiếp từ môi trường sống: hoa lá, chim muông, mặt trời để đưa vào trang phục."
      }
    ]
  },
  {
    id: 7,
    title: "Chủ đề 7: Bảo vệ môi trường & Tài nguyên",
    shortTitle: "Môi Trường",
    icon: "leaf",
    color: "bg-teal-600",
    badgeName: "Hiệp Sĩ Xanh",
    summary: [
      "Thực trạng tài nguyên thiên nhiên tại Bình Phước.",
      "Các vấn đề môi trường cấp bách.",
      "Hành động của học sinh để bảo vệ môi trường."
    ],
    details: [
      {
        heading: "Thực trạng",
        content: "Tài nguyên rừng đang bị suy giảm, đất đai có nguy cơ thoái hóa, ô nhiễm nguồn nước do sản xuất nông nghiệp và công nghiệp."
      },
      {
        heading: "Hành động",
        content: "Cần trồng cây gây rừng, bỏ rác đúng nơi quy định, hạn chế rác thải nhựa và tuyên truyền bảo vệ động vật hoang dã."
      }
    ],
    questions: [
      {
        id: 701,
        question: "Hành động nào sau đây GÓP PHẦN bảo vệ môi trường tại Bình Phước?",
        options: ["Săn bắt động vật hoang dã", "Đốt rừng làm nương rẫy", "Trồng cây xanh và phân loại rác", "Xả nước thải chưa xử lý ra sông"],
        correctAnswer: 2,
        explanation: "Trồng cây và xử lý rác thải là những hành động thiết thực nhất để bảo vệ môi trường xanh sạch đẹp."
      },
      {
        id: 702,
        question: "Nguyên nhân chính gây thoái hóa đất ở Bình Phước là gì?",
        options: ["Mưa quá ít", "Lạm dụng phân bón hóa học và xói mòn", "Trồng quá nhiều cây xanh", "Không có nguyên nhân nào"],
        correctAnswer: 1,
        explanation: "Việc canh tác không bền vững, mưa lớn gây rửa trôi và lạm dụng hóa chất là nguyên nhân chính gây bạc màu đất."
      }
    ]
  }
];
