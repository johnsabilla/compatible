/**
 * need to wrap redirects to only be in the client because
 * login hook is part of the meteor core code but logout is
 * only available through package. Made both redirects client
 * side for consistency.
 */
if(Meteor.isClient) {
	/**
	 * If user logs in successfully, redirect to recipe-book
	 */
	Accounts.onLogin(function(){
		FlowRouter.go('phones');
	});

	/**
	 * If user logs out, redirect to home
	 */
	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

/**
 * Default home page route
 */
FlowRouter.route('/', {
	name: 'home',
	action() {
		// if(Meteor.userId()){
		// 	FlowRouter.go('recipe-book');
		// }
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout', {
			header: 'Header',
			footer: 'Footer'
		});
	}
});

FlowRouter.route('/phones', {
	name: 'phones',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {
			header: 'Header',
			main: 'Phones',
			footer: 'Footer'
		});
	}
});