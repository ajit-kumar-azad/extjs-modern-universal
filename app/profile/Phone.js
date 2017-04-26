Ext.define('EMU.profile.Phone', {
    extend: 'Ext.app.Profile',

    mainView: 'EMU.view.phone.Main',

    views: {
        main: 'EMU.view.phone.Main',
        mainlist: 'EMU.view.phone.List'
    },

    isActive: function () {
        console.log('Phone: ', Ext.platformTags.phone);
        return Ext.platformTags.phone;
    }
});