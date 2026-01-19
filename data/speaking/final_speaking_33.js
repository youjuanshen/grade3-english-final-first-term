/**
 * 🗣️ Cambridge Pre A1 Starters - Speaking Paper (33分制)
 * 结构: 11题 × 3分 = 33分
 * 知识范围: 闽教版 Unit 1-4
 * 评分: 教师对每题1-3分（3=优秀，2=基本正确，1=部分正确）
 */
window.LOAD_QUIZ({
    title: "🗣️ 期末口语 (Speaking 33)",
    mode: "speaking",
    timeLimit: 420, // 7分钟

    images: {
        'Apple': 'img/u1_apple.png',
        'Cat': 'img/u1_cat.png',
        'Numbers': 'img/u2_number_card.png',
        'Ducks': 'img/u2_pond_ducks.png',
        'RedBag': 'img/u3_red.png',
        'YellowStar': 'img/u3_yellow.png',
        'Father': 'img/u4_father.png',
        'Mother': 'img/u4_mother.png',
        'Grandpa': 'img/u4_grandpa.png',
        'Doctor': 'img/u4_doctor.png'
    },

    questions: [
        // Part 1: Naming familiar things
        { qNum: 1, type: 'speaking', score: 3, text: '【U1L1 | Cambridge:命名熟悉事物】说出图片中的物品。', imageKey: 'Apple', guide: 'Answer: apple / an apple' },
        { qNum: 2, type: 'speaking', score: 3, text: '【U1L2 | Cambridge:命名熟悉事物】说出图片中的动物。', imageKey: 'Cat', guide: 'Answer: cat' },

        // Part 2: Personal questions & numbers
        { qNum: 3, type: 'speaking', score: 3, text: '【U1L2 | Cambridge:回答简单问题】What\'s your name?', guide: 'Answer: My name is ___. / I\'m ___.' },
        { qNum: 4, type: 'speaking', score: 3, text: '【U2L3 | Cambridge:回答年龄问题】How old are you?', guide: 'Answer: I\'m ___ years old.' },
        { qNum: 5, type: 'speaking', score: 3, text: '【U2L1 | Cambridge:数字表达】数一数并说出数字(1-10)。', imageKey: 'Numbers', guide: 'Answer: one...ten' },
        { qNum: 6, type: 'speaking', score: 3, text: '【U2L2 | Cambridge:数量描述】How many ducks?', imageKey: 'Ducks', guide: 'Answer: ___ ducks.' },

        // Part 3: Colors & objects
        { qNum: 7, type: 'speaking', score: 3, text: '【U3L2 | Cambridge:颜色描述】What color is it?', imageKey: 'YellowStar', guide: 'Answer: It\'s yellow.' },
        { qNum: 8, type: 'speaking', score: 3, text: '【U3L3 | Cambridge:理解简单指令】Show me red, please.', imageKey: 'RedBag', guide: 'Answer: (学生指向红色物品并说) Red. / It\'s red.' },

        // Part 4: Family & jobs
        { qNum: 9, type: 'speaking', score: 3, text: '【U4L1 | Cambridge:命名家庭成员】Who is he?', imageKey: 'Father', guide: 'Answer: He is my father.' },
        { qNum: 10, type: 'speaking', score: 3, text: '【U4L1 | Cambridge:命名家庭成员】Who is she?', imageKey: 'Mother', guide: 'Answer: She is my mother.' },
        { qNum: 11, type: 'speaking', score: 3, text: '【U4L3 | Cambridge:命名职业】What is he?', imageKey: 'Doctor', guide: 'Answer: He is a doctor.' }
    ]
});
