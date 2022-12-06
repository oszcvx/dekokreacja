	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');
	const footerYear = document.querySelector('.footer__year')

  
	allNavItems.forEach((item) =>
	  item.addEventListener('click', () => navList.classList.remove('show'))
	)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()