loadContent(arguments[0] || {});

exports.show = function(callback) {
	var dialog = $.getView();
	dialog.visible = true;
	dialog.animate({ opacity : 1 }, callback || function() {});
};

function hideDialog(e) {
	$.getView().animate({ opacity : 0 }, function() { 
		$.getView().visible = false;
		$.trigger('hide'); 
	});
}

exports.hide = hideDialog;

/*
 args = {
 	persistent: 'false'
 }
 * */
function loadContent(args) {
	var dialog = $.getView();
	
	var exclude = ['id', 'persistent', 'children'];
	dialog.applyProperties( _.omit(args, exclude) );
	
	if (args.persistent != 'true') {
		$.overlay.addEventListener('click', hideDialog);
	}
	
	if (args.children) {
		_.each(args.children, function(child) {
			dialog.add(child);
		});
		delete args.id;
		delete args.children;
	}
}