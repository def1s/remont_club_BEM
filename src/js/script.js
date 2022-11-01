window.addEventListener('DOMContentLoaded', () => {



	const tabs = document.querySelectorAll('.tabcontent'),
		  headersContainer = document.querySelector('.tabheaders'),
		  headers = document.querySelectorAll('.tabheader');
	

	function hideTabs() {
		tabs.forEach(item => {
			item.style.display = 'none';
		});
		
		headers.forEach(item => {
			item.classList.remove('tabheader_active');
		});
	}

	function ShowTabs(i = 0) {
		tabs[i].style.display = 'block';
		headers[i].classList.add('tabheader_active');
	}

	hideTabs();
	ShowTabs();

	headersContainer.addEventListener('click', event => {
		const target = event.target;

		if (target && target.classList.contains('tabheader')) {
			headers.forEach((item, i) => {
				if (target == item) {
					hideTabs();
					ShowTabs(i);
				}
			});
		}
	});


});
