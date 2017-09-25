var ds = new App.DataStore();

ds.add('m@bond.com', 'tea');

ds.add('james@bond.com', 'espressho');

ds.getAll();

ds.remove('james@bond.com');

ds.getAll();

ds.get('m@bond.com');

ds.get('james@bond.com');
