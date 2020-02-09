var Basic = angular.module("Basic", ['Basic']);

angular.module('Basic').controller('ProfileNg', ['$scope', '$compile', '$http', function ($scope, $compile, $http) {
    $http({
        method: 'Get', url: 'Db.EN.json',
    }).then(function (result) {
        $scope.Profile = result.data;
        document.title = result.data.Title;
        var element = $(".element");

        element.typed({
            strings: result.data.DisplayJob,
            typeSpeed: 100,
            loop: true,
        });
        setTimeout(function () {
            var menu = $("#menu");

            menu.slicknav({
                label: '',
            });
            var animation1 = jQuery('.animation');

            animation1.waypoint(function () {
                var animation = $(this.element).attr('data-animation');
                $(this.element).css('opacity', '1');
                $(this.element).addClass("animated " + animation).delay(2000);
            }, {
                    offset: '75%'
                });

        }, 1000);
        //InitMixUp();
        $scope.ShowThumb = false;
    }), function () { StopLoading($event); };
    $scope.ToggleThumb = function ($status) {
        $scope.ShowThumb = $status;
        if ($status) {
            InitMixUp();
        }
    };
    $scope.GetPortfoliosByCategory = function ($Category) {
        var children = [];
        for (var i = 0; i < $scope.Profile.Portfolio.length; i++) {
            if ($scope.Profile.Portfolio[i].Category == $Category.Id) {
                children.push($scope.Profile.Portfolio[i]);
            }
        }
        return children;
    };
}]);
var portfolioContent;
function InitMixUp() {
    setTimeout(function () {
        var portfolioContent = $('.portfolio-content');
        portfolioContent.mixItUp();
    }, 1000);

}