import { SectionData, QuestionMCQ, QuestionOpen } from '../types';

export const articleSections: SectionData[] = [
  {
    title: { en: "Background", cn: "背景" },
    content: [
      {
        en: "This is my annual report on the Fox brothers.",
        cn: "這是關於 Fox 兄弟的年度報告。"
      },
      {
        en: "The boys are part of a twenty-year study at Queens University to find out more about quadruplets.",
        cn: "這些男孩是皇后大學一項為期二十年的研究對象，旨在更深入了解四胞胎。"
      },
      {
        en: "The four Fox brothers, Alan, Ben, Calvin and Dan, are celebrating their ninth birthdays this week.",
        cn: "Fox 家的四兄弟，Alan、Ben、Calvin 和 Dan，本週將慶祝他們的九歲生日。"
      }
    ]
  },
  {
    title: { en: "Height & Weight", cn: "身高與體重" },
    content: [
      {
        en: "Alan, the oldest, is the tallest.",
        cn: "老大 Alan 是最高的。"
      },
      {
        en: "He is 140 cm tall, two centimetres taller than Ben and Calvin.",
        cn: "他身高 140 公分，比 Ben 和 Calvin 高兩公分。"
      },
      {
        en: "He weighs 35 kg.",
        cn: "他重 35 公斤。"
      },
      {
        en: "Calvin is 5 kg lighter than Ben.",
        cn: "Calvin 比 Ben 輕 5 公斤。"
      },
      {
        en: "Alan weighs 32 kg.",
        cn: "Alan 重 32 公斤。"
      },
      {
        en: "Dan is the lightest.",
        cn: "Dan 是最輕的。"
      },
      {
        en: "He weighs 27 kg.",
        cn: "他重 27 公斤。"
      },
      {
        en: "He is thin.",
        cn: "他很瘦。"
      }
    ]
  },
  {
    title: { en: "Interests", cn: "興趣" },
    content: [
      {
        en: "The boys have different hobbies.",
        cn: "男孩們有不同的愛好。"
      },
      {
        en: "Ben likes sleeping and eating in his spare time.",
        cn: "Ben 喜歡在空閒時間睡覺和吃東西。"
      },
      {
        en: "Alan enjoys playing basketball and swimming.",
        cn: "Alan 喜歡打籃球和游泳。"
      },
      {
        en: "He is a member of the school basketball team.",
        cn: "他是學校籃球隊的成員。"
      },
      {
        en: "Calvin likes doing magic.",
        cn: "Calvin 喜歡變魔術。"
      },
      {
        en: "He wants to be a magician when he grows up.",
        cn: "他長大後想成為一名魔術師。"
      },
      {
        en: "Dan, the youngest, enjoys music.",
        cn: "最小的 Dan 喜歡音樂。"
      },
      {
        en: "He wants to be a pop star and play in a band.",
        cn: "他想成為流行歌星並在樂隊演奏。"
      },
      {
        en: "He enjoys playing the guitar.",
        cn: "他喜歡彈吉他。"
      },
      {
        en: "He has the shortest hair and the loudest voice!",
        cn: "他頭髮最短，聲音最大！"
      }
    ]
  },
  {
    title: { en: "Education", cn: "學業" },
    content: [
      {
        en: "All four boys enjoy school.",
        cn: "四個男孩都喜歡上學。"
      },
      {
        en: "They all did well in their exams but Calvin is the cleverest.",
        cn: "他們在考試中都表現出色，但 Calvin 是最聰明的。"
      },
      {
        en: "Their class teacher says that the boys are polite, kind and helpful.",
        cn: "他們的班主任說這些男孩有禮貌、善良且樂於助人。"
      },
      {
        en: "All four boys are funny.",
        cn: "四個男孩都很風趣。"
      },
      {
        en: "Everyone likes them.",
        cn: "大家都喜歡他們。"
      },
      {
        en: "They have different friends at school but they also enjoy spending time together.",
        cn: "他們在學校有不同的朋友，但也喜歡在一起共度時光。"
      }
    ]
  }
];

export const mcqQuestions: QuestionMCQ[] = [
  {
    id: 1,
    question: {
      en: "The report doesn’t tell us about the Fox brothers’ ___.",
      cn: "報告中沒有告訴我們關於 Fox 兄弟的 ___。"
    },
    options: [
      { id: 'A', text: { en: "parents", cn: "父母" }, isCorrect: true },
      { id: 'B', text: { en: "size", cn: "體型 (The section Height & Weight)" }, isCorrect: false },
      { id: 'C', text: { en: "age", cn: "年齡 (The section Background)" }, isCorrect: false },
      { id: 'D', text: { en: "free time activities", cn: "課餘活動 (The section Interests)" }, isCorrect: false },
    ]
  },
  {
    id: 2,
    question: {
      en: "Which sentence is NOT true?",
      cn: "哪一句是不正確的？"
    },
    options: [
      { id: 'A', text: { en: "Ben likes staying indoors. (line 15)", cn: "Ben 喜歡待在室內。" }, isCorrect: false },
      { id: 'B', text: { en: "Ben and Calvin are the same height. (lines 7–8)", cn: "Ben 和 Calvin 一樣高。" }, isCorrect: false },
      { id: 'C', text: { en: "Alan is lighter than Calvin. (lines 9–10)", cn: "Alan 比 Calvin 輕。" }, isCorrect: true, hint: "Check the weights again carefully!" },
      { id: 'D', text: { en: "Dan likes music. (line 15)", cn: "Dan 喜歡音樂。" }, isCorrect: false },
    ]
  }
];

export const openQuestions: QuestionOpen[] = [
  {
    id: 1,
    question: { en: "Who is the thinnest?", cn: "誰是最瘦的？" },
    answer: { en: "Dan is the thinnest.", cn: "Dan 是最瘦的。" }
  },
  {
    id: 2,
    question: { en: "How tall is Dan?", cn: "Dan 有多高？" },
    answer: { en: "Dan is 136 cm tall.", cn: "Dan 身高 136 公分。" },
    hint: { en: "140 cm (Alan’s height) – 4 cm = 136 cm", cn: "(140減去4)" }
  },
  {
    id: 3,
    question: { en: "Who likes doing sports?", cn: "誰喜歡做運動？" },
    answer: { en: "Alan likes doing sports.", cn: "Alan 喜歡做運動。" }
  },
  {
    id: 4,
    question: { en: "Who do you think did best in the exams? Why?", cn: "你認為誰在考試中表現最好？為什麼？" },
    answer: { en: "I think Calvin did best because he is the cleverest.", cn: "我認為 Calvin 表現最好，因為他是最聰明的。" }
  },
  {
    id: 5,
    question: { en: "Are the boys in the same class?", cn: "男孩們在同一班嗎？" },
    answer: { en: "Yes, they are in the same class.", cn: "是的，他們在同一班。" },
    hint: { en: "Look for 'Their class teacher'...", cn: "找找看 'Their class teacher' 這句..." }
  }
];