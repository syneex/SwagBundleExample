import './page/swag-bundle-list';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

const { Module } = Shopware;

Module.register('swag-bundle', {
    type: 'plugin',
    name: 'bundle',
    title: 'swag-bundle.general.mainMenuItemGeneral',
    description: 'swag-bundle.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    snippets: {
      'de-DE': deDE,
      'en-GB': enGB
    },

    routes: {
       index: {
           component: 'swag-bundle-list',
           path: 'index'
       }
    },

    navigation: [{
        label: 'swag-bundle.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'swag.bundle.index',
        icon: 'default-shopping-paper-bag-product',
        parent: 'sw-catalogue',
        position: 100
    }]
});