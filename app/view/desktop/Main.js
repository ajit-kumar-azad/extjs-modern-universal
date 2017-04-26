/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('EMU.view.desktop.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-desktop-main',

    requires: [
        'Ext.MessageBox',

        'EMU.view.main.MainController',
        'EMU.view.main.MainModel',
        'EMU.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'top',

    items: [
        {
            title: 'Home',
            layout: 'fit',
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Groups',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Settings',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
