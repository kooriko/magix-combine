module.exports = {
    artCommandReg: /\{\{[\s\S]*?\}\}(?!\})/g,//art模板
    microTmplCommand: /<%[\s\S]*?%>/g,
    artCtrlsReg: /<%'\d+\x11(each |for|if|forin|\/each|\/for|\/if|\/forin)[\S\s]*?\x11'%>/g
};