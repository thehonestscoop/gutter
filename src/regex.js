


let characterRanges = {
	latinPunctuation: "–—′’'“″„\"(«.…¡¿′’'”″“\")».…!?",
	latinLetters: "\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"
}

let englishAbbreviations = [
    "al",
    "adj",
    "assn",
    "Ave",
    "BSc", "MSc",
    "Cell",
    "Ch",
    "Co",
    "cc",
    "Corp",
    "Dem",
    "Dept",
    "ed",
    "eg",
    "Eq",
    "Eqs",
    "est",
    "est",
    "etc",
    "Ex",
    "ext", // + number?
    "Fig",
    "fig",
    "Figs",
    "figs",
    "i.e",
    "ie",
    "Inc",
    "inc",
    "Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Sept","Oct","Nov","Dec",
    "jr",
    "mi",
    "Miss", "Mrs", "Mr", "Ms",
    "Mol",
    "mt",
    "mts",
    "no",
    "Nos",
    "PhD", "MD", "BA", "MA", "MM",
    "pl",
    "pop",
    "pp",
    "Prof", "Dr",
    "pt",
    "Ref",
    "Refs",
    "Rep",
    "repr",
    "rev",
    "Sec",
    "Secs",
    "Sgt", "Col", "Gen", "Rep", "Sen",'Gov', "Lt", "Maj", "Capt","St",
    "Sr", "sr", "Jr", "jr", "Rev",
    "Sun","Mon","Tu","Tue","Tues","Wed","Th","Thu","Thur","Thurs","Fri","Sat",
    "trans",
    "Univ",
    "Viz",
    "Vol",
    "vs",
    "v",
];


let Reg = {
    abbreviations: new RegExp(),
    innerWordPeriod: new RegExp("[" + characterRanges.latinLetters + "]\\.[" + characterRanges.latinLetters + "]", "ig"),
};

// Autogenerate regexp for common abbreviations. Once calculated, it doesn't need to
// be calculated again.
(function(){
	var regex1 = englishAbbreviations.map(function (abbr) {
  		abbr = abbr.toLowerCase().replace('.', '\\.') + '\\.' // Escape the periods
  		return '('+abbr+')'
	}).join('|');
	Reg.abbreviations = new RegExp("[^" + characterRanges.latinLetters + ']' + regex1 + '[^' + characterRanges.latinLetters + "]", "ig")
})()


export default Reg