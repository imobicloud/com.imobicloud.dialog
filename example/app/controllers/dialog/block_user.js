var args = $.args;

function doCancel() {
    $.trigger('done', { _hideDialog: true, value: false });
}

function doSubmit() {
    $.trigger('done', { _hideDialog: true, value: true });
}
