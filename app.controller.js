angular.module('felipe')
  .controller("resumoCtrl", ['$scope','$rootScope',function($scope, $rootScope) {

    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
        $scope.path = current.originalPath ==  '/';
    });


    $(function() {
      let sectionHeader = $('.sectionHeader');
      let picture = $('.picture');
      let description = $('.description');
      let descriptionH3 = $('.description > h3');
      let social = $('.social');

      $(window).scroll(function() {
        let larguraDaTela = $(this).width();
        let scrollTop = $(this).scrollTop();

        if (scrollTop > 264 - 50) {
          sectionHeader.css({
            'position': 'fixed',
            'max-height': '50px',
            'text-align': 'center',
            'float': 'none'
          })

          picture.css({
            'width': '52.5px',
            'height': '52.5px',
            'position': 'relative',
            'right': '41%'
          })
          
          description.css({
            'position': 'fixed',
            'top': '-1.71px',
            'left': '0%',
            'right': '0%',
            'opacity': '1'
          })
          
          descriptionH3.css({
            'opacity': '0'
          })

          // Aqui estão os casos com medidas pré-definidas para 
          // diferentes tamanhos de telas.
          if (larguraDaTela > 640) {
            social.css({
              'left': '41%',
              'position': 'relative',
              'top': '-40.04px',
              'right': '0%'
            })
          } else if (larguraDaTela > 500) {
              social.css({
                'left': '36.5%',
                'position': 'relative',
                'top': '-40.04px',
                'right': '0%'
              })
          } else if (larguraDaTela > 240) {
            social.css({
              'left': '29.5%',
              'position': 'relative',
              'top': '-40.04px',
              'right': '0%'
            })
            description.css({
              'opacity': '0'
            })
          } else {
            social.css({
              'left': '18%',
              'position': 'relative',
              'top': '-40.04px',
              'right': '0%'
            })
            description.css({
              'opacity': '0'
            })
          }
        } else {
          let percentOfSectionScrolled = parseInt(((264 - scrollTop)*100)/264);
          let lateralDistance = 50 - (percentOfSectionScrolled/2);

          if (lateralDistance < 50) {
            picture.css({
              'position': 'relative',
              'right': lateralDistance + '%'
            })

            if (larguraDaTela > 640) {
              social.css({
                'left': lateralDistance + '%'
              })
            } else if (larguraDaTela > 500) {
              if (lateralDistance < 37) {
                social.css({
                  'left': lateralDistance + '%'
                })
              }
            } else {
              if (lateralDistance < 30) {
                social.css({
                  'left': lateralDistance + '%'
                })
                description.css({
                  'opacity': 1-((lateralDistance/100)*4)
                })
              }
            }
          }
          
          if (lateralDistance < 30) {
            picture.css({
              'width': 125 - (125*((100-percentOfSectionScrolled)/100)) + 'px',
              'height': 125 - (125*((100-percentOfSectionScrolled)/100)) + 'px'
            })
          }

          $('section').css({
            'padding-top': (264 - scrollTop/100) + 'px'
          })
          
          social.css({
            'position': 'relative',
            'top': 182 - (182*((140-percentOfSectionScrolled)/100))+'px',
            'right': '0%'
          })
          
          if ((100-percentOfSectionScrolled) < 200) {
            description.css({
              'position': 'fixed',
              'top': 171 - (171*((119-percentOfSectionScrolled)/100))+'px',
              'left': '0%',
              'right': '0%'
            })
          }
          
          descriptionH3.css({
            'opacity': 1-((lateralDistance/100)*3)
          })
          
          sectionHeader.css({
            'position': 'fixed',
            'max-height': (264 - scrollTop) + 'px',
            'text-align': 'center',
            'float': 'none'
          });
        }

      });
    });

    


}])
  .controller("consultaUpCtrl", ["$scope", function($scope) {
    console.log("fui iniciadp");
    $(window).on('resize', () => {
      if ($(window).width() <= 640) {
        $('.downloadLink').html("Download");
      }
    });
    $(function() {
      console.log($(window).width());
      if ($(window).width() <= 640) {
        $('.downloadLink').html("Download");
      }
    });

  }])
  .controller("mainCtrl", ['$scope','$rootScope',function($scope, $rootScope) {
    function setCorrectTitle(current) {
      if (current.originalPath == '/ConsultaUP') {
        $scope.title = "Consulta UP (CDE)"
      } else {
        $scope.title = "Felipe Marinho";
      }
    }


    $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
      $scope.path = current.originalPath ==  '/';
      setCorrectTitle(current);
    });
  }])
;
