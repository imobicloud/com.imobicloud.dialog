var args = $.args;
var body;

init();
function init() {
    var exclude = [
		'id', 'children',
        'tapOutsideToHideDialog', 'url', 'data'
	];
	$.win.applyProperties(_.omit(args, exclude));

    body = Alloy.createController(args.url, args.data);
    body.on('done', hideDialog);
    $.win.add( body.getView() );
    args.data = null;
    
    if (OS_ANDROID) {
        if (parseInt(Titanium.version, 10) >= 6) {
            $.win.onBack = androidback;
        } else {
            $.win.addEventListener('androidback', androidback);
        }
    }
}

function androidback(e) {
    return;
}

exports.show = function() {
    $.win.open({ animated: false });
};

function winOpen(e) {
    $.win.animate({ opacity: 1, duration: 400 }, function() {
        body && body.load && body.load();
    });
}

function winClose() {
    if (body) {
        body.unload && body.unload();
        body = null;
    }
}

function hideDialog(e) {
    if (e._hideDialog !== false) {
        if (OS_IOS) {
            $.win.animate({ opacity: 0, duration: 400 }, function() {
                $.win.close({ animated: false });
            });
        } else {
            $.win.close({ 
                activityEnterAnimation: Ti.Android.R.anim.dofreeze,
                activityExitAnimation: Ti.Android.R.anim.dohide
            });
        }
        delete e._hideDialog;
    }
    $.trigger('done', e);
}
