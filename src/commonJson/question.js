const QuestionList = [
  {
    name: '求字符串s与字符串t的第二长公共单词，若找到，返回；否则，返会null;如果多个满足，返会第一个',
    tips: '第二长公共单词，我这里暂且理解为公共单词中单词长度为第二的；\n' +
    '这里不考虑多次重复，只找重复单词中长度第二的；\n' +
    '这里单词默认不区分大小写，统一返回小写，如若区分，传入第三个参数。\n' +
    '思路：\n' +
    '* 1、字符串转数组；\n' +
    '* 2、循环一个数组，用第二个数组判断是否includes()第一个数组的值；\n' +
    '* 3、若2为true，把此单个str以及length分别push到两个数组里；\n' +
    '* 4、判断数组的长度，若小于num + 1，return null;\n' +
    '* 5、若4为false, 循环小于num，取最值，依次剔除到想要的那个并return;',
    func: 'function checkTheSecondRepeatStr (str1 = \'\', str2 = \'\', num = 0, bool = false) {\n' +
    '  let arr1 = bool ? str1.split(\' \') : str1.toLowerCase().split(\' \')\n' +
    '  let arr2 = bool ? str2.split(\' \') : str2.toLowerCase().split(\' \')\n' +
    '  let repeatArr = [], repeatArrLength = []\n' +
    '  for (let i = 0; i < arr1.length; i ++ ) {\n' +
    '    if (arr2.includes(arr1[i])) {\n' +
    '      repeatArr.push(arr1[i])\n' +
    '      repeatArrLength.push(arr1[i].length)\n' +
    '    }\n' +
    '  }\n' +
    '  if (repeatArr.length < num + 1) {\n' +
    '    return null\n' +
    '  }\n' +
    '  let maxRepeatStr = \'\'\n' +
    '  let maxRepeatStrIndex = null\n' +
    '  if (num) {\n' +
    '    for (let i = 0; i < num; i++ ) {\n' +
    '      maxRepeatStr = Math.max(...repeatArrLength)\n' +
    '      maxRepeatStrIndex = repeatArrLength.indexOf(maxRepeatStr)\n' +
    '      repeatArr.splice(maxRepeatStrIndex, 1)\n' +
    '      repeatArrLength.splice(maxRepeatStrIndex, 1)\n' +
    '    }\n' +
    '  }\n' +
    '  maxRepeatStr = Math.max(...repeatArrLength)\n' +
    '  maxRepeatStrIndex = repeatArrLength.indexOf(maxRepeatStr)\n' +
    '  return repeatArr[maxRepeatStrIndex]\n' +
    '}',
    use: 'checkTheSecondRepeatStr(s, t, 1)'
  },
  {
    name: '某些正整数....',
    tips: '思路：\n' +
    '* 这就是两次循环枚举了所有的可能，利用等差数列公式（此公式百度了一下，忘了...），循环的时候循环一半以及一半 + 1就行',
    func: 'function decompositionNum (num) {\n' +
    '  let n, m, str = \'\';\n' +
    '  for (n = 1; n < num/2 ; n++ ) {\n' +
    '    for (m = n + 1; m < num/2 + 1; m++ ) {\n' +
    '      if (num === (n + m) * (m - n + 1) / 2) {\n' +
    '        for (let i = n;i <= m; i++) {\n' +
    '         str += `${i}&nbsp;`\n' +
    '        }\n' +
    '        str += \'<br>\'\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '  return str ? str : \'NONE\'\n' +
    '}',
    use: 'decompositionNum(15)'
  }
]

export { QuestionList }