/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'demo.Application',

    name: 'demo',

    requires: [
        'Ext.Anim',
        'Ext.Dialog',
        'Ext.Responsive',
        'Ext.Toast',
        'Ext.grid.locked.Grid',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.PagingToolbar',
        'Ext.grid.plugin.RowExpander',
        'Ext.grid.plugin.SummaryRow',
        'Ext.grid.rowedit.Plugin',
        'Ext.data.summary.Sum',
        'Ext.data.validator.*',
        'Ext.form.FieldSet',
        'Ext.field.*',
        // This will automatically load all classes in the demo namespace
        // so that application classes do not need to require each other.
        'demo.*'
    ],

    // The name of the initial view to create.
    mainView: 'demo.view.main.Main'
});
