Ext.define('MoodleApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Me',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Moodle Lite'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Everyone',
                iconCls: 'action',

                 styleHtmlContent: true,
	             scrollable: true,

				 items: {
	                    docked: 'top',
	                    xtype: 'titlebar',
	                    title: 'Add Mood'
	                },
	
	             html: [
	                    "Please add your mood:"
	             ].join("")
            }
        ]
    }
});
