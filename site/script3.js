(function () {
	var square = document.getElementById('3')

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
	var square = document.getElementById('13')

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
	var square = document.getElementById('4')

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

