!(function() {
    var result = [],
        dependency = ['../../js/third-party/zepto.min.js',
                      '../../js/third-party/require.min.js'
                     ];
    for (var i = 0; i < dependency.length; i++) {
        result.push('<script src="' + dependency[i] + '"></script>');
    }
    document.write(result.join(''));
}());