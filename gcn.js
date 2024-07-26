var slides = document.querySelector('.tut-slides-controls');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
		setTimeout(() => {
			try {
				document.querySelector('.tut-slides-next').click();
			} catch(e) {
				console.log("No Clicky!")                
			}
            try {
                document.getElementById('answer-A').click()
                document.getElementsByClassName('submit-answer')[0].click();
            } catch(e) {
                console.log('No Question')
            } 
            try {
		const title = document.getElementsByClassName('slide-title').innerText;
		if (title.includes('Scenario')) { 
			// document.getElementsByClassName('reqLink')[Math.floor(Math.random() * 2)].click();
            document.getElementsByClassName('reqLink')[0].click();
            document.querySelector('.tut-slides-next').click();
		}
            } catch(e) {
                console.log('No Scenario')
            }
            try {
                document.getElementsByClassName("complete-tutorial").click();
            } catch(e) {
                console.log("No Submit Button")
            }
		}, 250);
    });
});
var config = { attributes: true, childList: true, characterData: true }
observer.observe(slides, config);
