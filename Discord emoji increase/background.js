chrome.browserAction.onClicked.addListener(setInterval(function() {
    chrome.tabs.executeScript({
        code:  `var emoji = document.getElementsByClassName("emoji jumboable");
                var myLength = emoji.length;
                for(let i=0; i<=myLength-1; i++)
                {
                    emoji[i].style.width = "9rem";
                    emoji[i].style.height = "9rem";
                }`
    })
}),1000)