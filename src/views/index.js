module.exports=function (templateParams) {
  var cssList=['vendor'];
  var _files = templateParams.htmlWebpackPlugin.files;
  console.log('文件', _files);
  var _regChunk = templateParams.htmlWebpackPlugin.options.chunks;
  console.log('_regChunk', _regChunk)
  var _regCss = cssList;
  var _scripts = "";
  var _styles = "";
  for (var i = 0; i < _regChunk.length; i++) {
    console.log()
    _scripts += "<script type='text/javascript'  src='" + _files.chunks[_regChunk[i]]['entry'] + "'></script>";
  }
  for (var k = 0; k < _regCss.length; k++) {
    var _cssitem = _regCss[k],
      _cssitems = new RegExp("^" + _cssitem),
      _cssiteme = new RegExp(".css$");
    (_files.css).map(function(filename) {
      var _filearr = filename.split('/'),
        filrdata = _filearr[_filearr.length - 1];
      if (_cssitems.test(filrdata) && _cssiteme.test(filrdata)) {
        _styles += '<link rel="stylesheet" type="text/css" href="' + filename + '"/>';
      }
    });
  }
  var webAssetsHelp = {
    scripts: _scripts,
    styles: _styles
  }
  var _html="{% extends './layout.html' %}"+
    "{% block title %}My Page{% endblock %}"+
    "{% block styles %}"+
    webAssetsHelp.styles+
    "{% endblock %}"+
    "{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
    "{% block script %}"+
    webAssetsHelp.scripts+
    "{% endblock %}";

  return _html;
}