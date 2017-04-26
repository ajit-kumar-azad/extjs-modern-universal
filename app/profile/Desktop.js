Ext.define('EMU.profile.Desktop', {
    extend: 'Ext.app.Profile',

    mainView: 'EMU.view.desktop.Main',

    views: {
        main: 'EMU.view.desktop.Main'
    },

    isActive: function () {
        console.log('Desktop: ', Ext.platformTags.desktop);
        return Ext.platformTags.desktop;
    }
});