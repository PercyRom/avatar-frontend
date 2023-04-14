/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('demo.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {},
    items: [
        {
            title: 'Home',
            layout: 'hbox',
            items: [
                {
                    xtype: 'mainlist',
                    flex: 1,
                },
                {
                    xtype: 'formpanel',
                    reference: 'frmPokemon',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Pokemon Detalle',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    defaults: {
                                        userCls: 's-general-display',
                                        xtype: 'displayfield',
                                    },
                                    items: [
                                        {
                                            label: 'Nombre',
                                            value: '',
                                            name: 'name',
                                            width: 250
                                        },
                                        {
                                            margin: '0 0 0 15',
                                            label: 'Grupos',
                                            name: 'grupos',
                                            value: '',
                                            width: 250
                                        },
                                        {
                                            margin: '0 0 0 15',
                                            label: 'Color',
                                            labelWidth: 175,
                                            name: 'color',
                                            value: '',
                                            width: 350
                                        }
                                    ]
                                },
                                {
                                    margin: '5 0 0 0',
                                    xtype: 'container',
                                    layout: 'hbox',
                                    defaults: {
                                        userCls: 's-general-display',
                                        xtype: 'displayfield',
                                    },
                                    items: [
                                        {
                                            label: 'Felicidad Base',
                                            name: 'base_happiness',
                                            value: '',
                                            width: 250
                                        },
                                        {
                                            margin: '0 0 0 15',
                                            label: 'Tasa de captura',
                                            name: 'capture_rate',
                                            value: '',
                                            width: 250
                                        },
                                        {
                                            margin: '0 0 0 15',
                                            label: 'Tiene diferencias por genero',
                                            labelWidth: 175,
                                            name: 'has_gender_differences',
                                            value: '',
                                            width: 350
                                        }
                                    ]
                                },
                                {
                                    margin: '5 0 0 0',
                                    xtype: 'container',
                                    layout: 'hbox',
                                    defaults: {
                                        userCls: 's-general-display',
                                        xtype: 'displayfield',
                                    },
                                    items: [
                                        {
                                            label: 'Es bebe',
                                            name: 'is_baby',
                                            value: '',
                                            width: 250
                                        },
                                        {
                                            margin: '0 0 0 15',
                                            label: 'Es legendario',
                                            name: 'is_legendary',
                                            value: '',
                                            width: 250
                                        },
                                        {
                                            margin: '0 0 0 15',
                                            label: 'Es mitico',
                                            labelWidth: 175,
                                            name: 'is_mythical',
                                            value: '',
                                            width: 350
                                        }
                                    ]
                                },
                                {
                                    margin: '15 0 0 0',
                                    xtype: 'container',
                                    items: [
                                        {
                                            internalUrl: '',
                                            reference: 'btnEvoChain',
                                            xtype: 'button',
                                            text: 'Consultar Cadena de Evolución',
                                            handler: 'onBtnEvoChainHandler'
                                        }
                                    ]
                                },
                                {
                                    margin: '5 0 0 0',
                                    xtype: 'container',
                                    layout: 'hbox',
                                    defaults: {
                                        userCls: 's-general-display',
                                        xtype: 'displayfield',
                                    },
                                    items: [
                                        {
                                            reference: 'displayEvoChain',
                                            label: 'Cadena de Evolución',
                                            labelWidth: 150,
                                            value: '',
                                            width: 750
                                        },
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});
