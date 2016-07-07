Template.Phones.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('phones');
	});
});

Template.Phones.helpers({
	phones: ()=> {
		return Phones.find({});
	}
});

Template.Phones.events({
	'click .new-phone': () => {
		Session.set('newPhone', true);
	}
});

Template.Phones.onRendered(function(){
    $('.modal-trigger').leanModal();
});