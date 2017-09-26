app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', 'home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                playViews: {
                    controller: 'home',
                    controllerAs: 'vm',
                    templateUrl: 'game/public/home.html'
                }
            },
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['game/public/controller/home.js', 'css/home.css']});
                }],
            },
        })
        .state('easyKillGame', {
            url: '/easyKillGame',
            views: {
                playViews: {
                    controller: 'easyKillGame',
                    controllerAs: 'vm',
                    templateUrl: 'game/easyKillGame/easyKillGame.html'
                }
            },
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['game/easyKillGame/easyKillGame.js', 'css/easyKillGame.css']});
                }],
            },
        })
        .state('checkSelf', {
            //这是一个公共页面,根据传入的数据渲染
            url: '/checkSelf',
            views: {
                playViews: {
                    controller: 'checkSelf',
                    controllerAs: 'vm',
                    templateUrl: 'game/public/checkSelf.html'
                }
            },
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['game/public/controller/checkSelf.js', 'css/checkSelf.css']});
                }],
            },
        })
        .state('checkAll', {
            url: '/checkAll',
            views: {
                playViews: {
                    controller: 'checkAll',
                    controllerAs: 'vm',
                    templateUrl: 'game/public/checkAll.html'
                }
            },
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['game/public/controller/checkAll.js', 'css/checkAll.css']});
                }],
            },
        })
        .state('easyKillGamePlay', {
            url: '/easyKillGamePlay',
            views: {
                playViews: {
                    controller: 'easyKillGamePlay',
                    controllerAs: 'vm',
                    templateUrl: 'game/public/playPage.html'
                }
            },
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['game/easyKillGame/easyKillGamePlay.js', 'css/checkAll.css', 'css/playPage.css']});
                }],
            },
        })
        .state('easyKillGameLog', {
            url: '/easyKillGameLog',
            views: {
                playViews: {
                    controller: 'easyKillGameLog',
                    controllerAs: 'vm',
                    templateUrl: 'game/easyKillGame/easyKillGameLog.html'
                }
            },
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({files: ['game/easyKillGame/easyKillGameLog.js', 'css/gameLog.css']});
                }],
            },
        })
})