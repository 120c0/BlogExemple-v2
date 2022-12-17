class MainMenu {
	constructor(options) {
		this.options = options
	}

	apply_on(element) {
		this.options.map((option) => {
			$(element).append(`
				<ul><li><a href="${option.post_link}">${option.title}</a></li></ul>
			`)
		})
	}
}


let main_menu = new MainMenu(
	[
		{post_link: '#', title: 'Sobre'},
		{post_link: '#', title: 'Contato'},
		{post_link: '#', title: 'Produtos'},
		{post_link: '#', title: 'Notícias'}
	]
)
main_menu.apply_on('.main-menu')

console.log($('.main-menu ul').html())
