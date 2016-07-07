//New mongo collection
Phones = new Mongo.Collection('phones');

//allow signed-in users to insert
Phones.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc){
		return true;
	}
});

BaseFrequency = new SimpleSchema({
	network: {
		type: String,
		label: "Network"
	},
	Frequency: {
		type: String,
		label: "Frequency"
	}
});

PhoneSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	model: {
		type: String,
		label: "Model"
	},
	BaseFrequencies: {
		type: [BaseFrequency]
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});

//Attach the schema
Phones.attachSchema( PhoneSchema );