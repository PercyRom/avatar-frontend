/**
 * This view is an example list of people.
 */
Ext.define('demo.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    userCls: 's-general-grid',
    title: 'Pokemons',
    plugins: {
        gridpagingtoolbar: true
    },
    bind: { 
        store: '{stPokemon}' 
    },
    rowNumbers: {
        text: '#',
        align: 'center',
        width: 50,
        menuDisabled: true,
    },
    columnLines: true,
    columns: [
        {
            text: 'Detalle',
            align: 'center',
            width: 65,
            menuDisabled: true,
            cell: {
                tools: [
                    {
                        iconCls: 'x-fas fa-edit',
                        userCls: 's-embarque-grid-tool-asignar',
                        handler: 'onColVerDetalle',
                        tooltip: 'Consultar Detalle'
                    }
                ]
            }
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            cell: {
                userCls: 'bold'
            }
        }
    ]
});
