/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('demo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {},
    stores: {
        stPokemon: {
            pageSize: 20,
            autoLoad: true,
            proxy: {
                pageParam: '',
                type: 'ajax',
                url: 'http://localhost:8080/pokemon/lista',
                reader: {
                    type: 'json',
                    rootProperty: 'results',
                    totalProperty: 'count'
                }
            },
            fields: [
                { name: 'name' },
                { name: 'url' }
            ]
        }
    }
});
