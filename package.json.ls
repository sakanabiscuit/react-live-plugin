name:          'lsx'
version:       '0.0.6'
description:   'React plugin for LiveScript'
author:        'sakana'
main:          'index.js'
scripts:
    'package': 'lsc -c package.json.ls'
    'test':    'webpack-dev-server --colors --watch && open http://localhost:8080/webpack-dev-server/lab'
    'product': 'webpack --progress --colors'
homepage:      'https://github.com/sakanabiscuit'
license:       'MIT'
readme:        'README.md'
repository:
    type:      'git'
    url:       'git://github.com/sakanabiscuit/lsx.git'
bugs:
    url:       'https://github.com/sakanabiscuit/lsx/issues'
dependencies:
    'react':             '^0.14.x'
    'react-dom':         '^0.14.x'
devDependencies:
    'livescript-loader': 'latest'
    'webpack':           'latest'
