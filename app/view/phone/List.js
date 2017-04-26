/**
 * This view is an example list of people.
 */
Ext.define('EMU.view.phone.List', {
    extend: 'Ext.dataview.List',
    xtype: 'phone-mainlist',

    requires: [
        'EMU.store.Personnel'
    ],

    title: 'Personnel',

    itemTpl:'<h3>{name}</h3>' +
            '<p class="listitem-line2">{email}</p>',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', width: 100 },
        { text: 'Email', dataIndex: 'email', width: 230 },
        { text: 'Phone', dataIndex: 'phone', width: 150 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
