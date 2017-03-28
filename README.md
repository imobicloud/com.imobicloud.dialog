# Titanium UI - Dialog

![Dialog example](http://i.imgur.com/DtQCVIA.png)

android theme

	clone [https://github.com/ptquang86/theme/tree/master/anim] to [app/platform/android/res/anim/]

tss

	// app.tss
	".theme-dialog": { backgroundColor: '#90ffffff' }

js

	var dialog = Alloy.createWidget('com.imobicloud.dialog', {
		url: 'dialog/block_user',
		data: {}
	});
	dialog.on('done', function(e) {
		if (e.value) {
			alert('TODO');
		}
	});
	dialog.show();

Changes log:

- 28/03/2017
	+ support android animation
- 13/12/2016
    + add theme-dialog style
    + add tapOutsideToHideDialog: default false
        If true: Tap on the overlay will hide this dialog
    + dialog is now a window, use createWidget to open dialog, with 2 params: url and data
        * url: the path to the dialog content
        * data: data will be passed to dialog content
    + add event 'done'
        Pass _hideDialog: true to hide this dialog from content inside
- Remove visible parameter
- Support tss class for widget
