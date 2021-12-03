import ghpages from 'gh-pages';

ghpages.publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/tonyketcham/tonyketcham.git',
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
