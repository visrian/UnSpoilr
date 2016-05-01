var newsFeedStories = ["_5pbx userContent" , /_.*/];
var spoilerTerms = [];
chrome.storage.sync.get('input', function (awe) {
   spoilerTerms = (awe['input']).slice();
});

function removePosts () {
    _.each(newsFeedStories, function (newsFeedStory) {
        var posts = document.getElementsByClassName(newsFeedStory);
        _.each(posts, function (post) {
            removeTerms (post);
        });
    });
}

function removeTerms (item) {
    var paragraphs = item.getElementsByTagName("p");
    _.each(paragraphs, function (paragraph) {
        var content1 = paragraph.textContent.toLowerCase();
        _.each(spoilerTerms, function (term) {
            if (content1.indexOf(term) !== -1) {
                removeItem (item);
            }
        });
    });

    var links = item.getElementsByTagName("a");
    _.each(links, function (link) {
        var text2 = link.textContent.toLowerCase();
        _.each(spoilerTerms, function (term) {
            if (text2.indexOf(term) !== -1) {
                removeItem (item);
            }
        });
    });
}

function removeItem (item) {
    item.style.opacity = "0.0";
    item.style.display = "None";
} 
removePosts(); //when page loads
var notKeepRunning = _.debounce(removePosts, 300);
document.addEventListener("scroll", notKeepRunning);

