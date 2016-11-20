$(document).ready(function(){
	
	var text = document.getElementById('article_text');
	var wordCounter = document.querySelector(".wordCounter");
	var goal = document.querySelector(".goal");

	var attach = function() {
		Countable.live(text, function (counter) {
		  wordCounter.innerHTML = counter.words

		  if (counter.words > 9) {
		  	goal.style.display = "block"
		  	text.style.background = "#d2e8d2"
		  }

		  else {
		  	goal.style.display = "none"
		  	text.style.background = "white"
		  }
		})
	}
	$(document).on('turbolinks:load', attach);
})


