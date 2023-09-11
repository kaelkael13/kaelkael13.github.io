(function aaaa() {
	var square = document.getElementById('1')

	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
			}

			if (entry.isIntersecting) {
				entry.target.classList.add('fadeInLeft');
			}
		});
	});

	observer.observe(square);

})();

(function () {
	var square = document.getElementById('11')

	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
			}

			if (entry.isIntersecting) {
				entry.target.classList.add('fadeInRight');
			}
		});
	});

	observer.observe(square);

})();
