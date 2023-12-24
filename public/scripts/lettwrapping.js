var paragraphs = document.getElementsByClassName('postPara');

// Loop through each paragraph with the class 'postPara'
for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    
    // Trim the text content of the current paragraph
    var originalText = paragraph.textContent.trim();
    console.log(originalText)
    var wordLimit = 15; // Change this to your desired word limit
    
    // Split the text into words
    var words = originalText.split(' ');

    // Check if the number of words exceeds the limit
    if (words.length > wordLimit) {
        // Slice the array to get the limited words
        var limitedWords = words.slice(0, wordLimit);

        // Join the limited words and add ellipsis
        var limitedText = limitedWords.join(' ') + '...';

        // Update the paragraph content
        paragraph.textContent = limitedText;
    }
}
