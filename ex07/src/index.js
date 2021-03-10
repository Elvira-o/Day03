function main() {
    var studlyCapVar;
    var poperCamelCase;
    var titleCaseOver;

    studlyCapVar = 10;
    poperCamelCase = "A String";
    titleCaseOver = 9000;

    return {
        studlyCapVar,
        poperCamelCase,
        titleCaseOver
    }
}
console.log(main());
module.exports = main;