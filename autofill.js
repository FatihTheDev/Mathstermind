function fillFunction() {
    var textarea = document.getElementById("user-input");
    var text = textarea.value;

    var keywords = ["round", "max", "min", "gcd", "sin", "cos", "tan","lcm", "combinations", "permutations", "sign", "random", "randomInt", "abs"]; // List of keywords

    var lastKeyword = null; // Track the last keyword entered

    for (var i = 0; i < keywords.length; i++) {
        var keyword = keywords[i];

        // If the keyword is found in the text and it's not followed by "(" or ")"
        if (text.indexOf(keyword) !== -1 && text.indexOf(keyword) + keyword.length === text.length) {
            var lastChar = text[text.length - 1];
            if (lastChar !== "(" && lastChar !== ")") {
                textarea.value = keyword + "()";
                textarea.selectionStart = keyword.length + 1;
                textarea.selectionEnd = keyword.length + 1;
                lastKeyword = keyword;
                return;
            }
        }

        // If the keyword is found in the text and it's followed by "(" but not ")"
        if (text.includes(keyword + "(") && !text.includes(keyword + ")")) {
            lastKeyword = keyword;
            return;
        }
    }



    
    // If "tan" is not followed by "(" or ")" and not part of another word, allow input of "tan"
    if (text.indexOf("tan") !== -1 && !text.includes("(") && !text.includes(")") && text.trim() !== "tan" && !/\w/.test(text[text.indexOf("tan") + 3])) {
        textarea.value = "tan()";
        textarea.selectionStart = 4;
        textarea.selectionEnd = 4;
        return;
    }
    
    if (text.includes("(") && !text.includes(")")) {
        textarea.value = text.slice(0, text.lastIndexOf("("));
        return;
    }

    // If anything other than the keywords or "(" is typed, allow input of "(" and other characters
    if (lastKeyword === null || (text.indexOf(lastKeyword) === -1 && !text.includes("("))) {
        textarea.value = text;
        return;
    }
}
