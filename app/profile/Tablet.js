Ext.define('EMU.profile.Tablet', {
    extend: 'Ext.app.Profile',

    mainView: 'EMU.view.tablet.Main',

    views: {
        main: 'EMU.view.tablet.Main'
    },

    isActive: function () {
        console.log('Tablet: ', Ext.platformTags.tablet);
        return Ext.platformTags.tablet;
    }
});