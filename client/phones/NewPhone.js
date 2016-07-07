Template.NewPhone.events({
	'click .fa-close': function() {
		Session.set('newPhone', false);
	}
});