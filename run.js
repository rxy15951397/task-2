app.run(function ($uibModal, $ocLazyLoad, $rootScope) {
    //配置本地存储
    $rootScope.deskGame = localStorage.deskGame;
    if ($rootScope.deskGame) {
        $rootScope.deskGame = JSON.parse($rootScope.deskGame);
    } else {
        $rootScope.deskGame = {
            preGame: {
                uiSref: '',
                name: '还没有开始过游戏哦！'
            },//上次游戏
            //游戏历史记录，包括数据，必须与preGame ui-sref一致
            histroyGame: {},
        };
    }
    $rootScope.saveDeskGame = function () {
        //需要localstorage saveDeskGame的地方调用
        localStorage.deskGame = JSON.stringify($rootScope.deskGame);
    }
    //模态框
    window.alert = function (content) {
        var instance = $uibModal.open({
            keyboard: true,
            backdrop: 'static',
            animation: true,
            size: 'md',
            templateUrl: 'uibModal/views/alertModal.html',
            controller: 'alertModal',
            resolve: {
                lazyLoad: $ocLazyLoad.load({files: ['uibModal/controller/alertModal.js']}),
                params: {
                    content: content,
                }
            }
        });
        var promise = instance.result;
        return promise;
    }
    window.confirm = function () {
        var content = [].slice.call(arguments);//传入的参数
        var instance = $uibModal.open({
            keyboard: true,
            animation: true,
            size: 'md',
            backdrop: 'static',
            templateUrl: 'uibModal/views/confirmModal.html',
            controller: 'confirmModal',
            resolve:
                {
                    lazyLoad: $ocLazyLoad.load({files: ['uibModal/controller/confirmModal.js']}),
                    params: {
                        content: content,
                    },
                },
        })
        var promise = instance.result;
        return promise;
    };
})