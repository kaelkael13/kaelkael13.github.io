(function () {
	var square = document.getElementById('2')

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
	var square = document.getElementById('12')

	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
			}

			if (entry.isIntersecting) {
				entry.target.classList.add('fadeIn');
			}
		});
	});

	observer.observe(square);

})();

