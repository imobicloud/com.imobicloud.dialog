# Titanium UI - Dialog

![Dialog example](http://i.imgur.com/DtQCVIA.png)

xml
	
	<Widget id="dialog" src="com.imobicloud.dialog" persistent="false" class="dialog-container">
		<View class="dialog"></View>
	</Widget>

tss

	// app.tss
	".imc-dialog": { visible: false, opacity: 0, zIndex: 1 }
		".imc-dialog-overlay": { backgroundColor: '#80000000' }
	
	// custom style	
	".dialog-container": { visible: true, opacity: 1, zIndex: 5 } // auto show on load
		".dialog": { width: 300, height: 300, backgroundColor: '#fff' }
	
js
	
	// show dialog
	$.dialog.show();
	
	// show dialog with callback
	$.dialog.show(function(){
		// do something
	});
	
	// hide dialog
	$.dialog.hide();
	
Changes log:
- Remove visible parameter
- Support tss class for widget