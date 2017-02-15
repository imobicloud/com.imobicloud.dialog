$.index.open();

function showDialog(e) {
    var dialog = Alloy.createWidget('com.imobicloud.dialog', {
        url: 'dialog/block_user',
        data: {}
    });
    dialog.on('done', function(e) {
        if (e.value) {
            alert('TODO: Block user');
        }
    });
    dialog.show();
}
