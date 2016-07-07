PhonesIndex = new EasySearch.Index({
	collection: Phones,
	fields: ['name', 'model'],
	engine: new EasySearch.Minimongo()
});