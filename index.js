$(function() {
  var sectionHeader = $('.sectionHeader');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 264 - 50) {
      console.log(sectionHeader.css('height'));
      // $('section').css({
      //   'padding-top': sectionHeader.css('height')
      // })
      // $('.picture').css({
      //   'width': '50px',
      //   'height': '50px'
      // })
      // $('.social').css({
      //   'position': 'absolute',
      //   'top': '10px',
      //   'right': '10px',
      // })
      // $('.description > h3').hide()
      // $('.description').css({
      //   'position': 'absolute',
      //   'top': '0',
      //   'left': '150px'
      // });
      // sectionHeader.css({
      //   'position': 'fixed',
      //   'top': '0px',
      //   'left': '0',
      //   'right': '0',
      //   'height': '60px',
      //   'text-align': 'left',
      //   'float': 'right'
      // });
    } else {
      var percentOfSectionScrolled = parseInt(((264 - $(this).scrollTop())*100)/264);
      var lateralDistance = 50 - (percentOfSectionScrolled/2);
      // console.log(100-percentOfSectionScrolled);
      $('.description > h3').show()
      if (lateralDistance < 50) {
        $('.picture').css({
          'position': 'relative',
          'right': lateralDistance + '%'
        })
        if ($(this).width() > 640) {
          $('.social').css({
            'left': lateralDistance + '%'
          })
        } else if ($(this).width() > 500) {
          if (lateralDistance < 37) {
            $('.social').css({
              'left': lateralDistance + '%'
            })
          }
        } else {
          if (lateralDistance < 30) {
            $('.social').css({
              'left': lateralDistance + '%'
            })
            $('.description').css({
              'opacity': 1-((lateralDistance/100)*4)
            })
          }
        }
//console.log((125*((100-percentOfSectionScrolled)/100)))
        // $('.description').css({
        //   'position': 'relative',
        //   // 'top': (125*((100-percentOfSectionScrolled)/100)) + 'px',
        //
        // });
      }
      if (lateralDistance < 30) {
        $('.picture').css({
          'width': 125 - (125*((100-percentOfSectionScrolled)/100)) + 'px',
          'height': 125 - (125*((100-percentOfSectionScrolled)/100)) + 'px'
        })
      }
      $('section').css({
        'padding-top': (264 - $(this).scrollTop()/100) + 'px'
      })
      $('.social').css({
        'position': 'relative',
        'top': 182 - (182*((140-percentOfSectionScrolled)/100))+'px',
        'right': '0%'
      })
      // console.log(145 - (145*((100-percentOfSectionScrolled)/100))+"px")
      if ((100-percentOfSectionScrolled) < 200) {
        $('.description').css({
          'position': 'fixed',
          'top': 171 - (171*((119-percentOfSectionScrolled)/100))+'px',
          'left': '0%',
          'right': '0%'
        })
      }
      $('.description > h3').css({
        'opacity': 1-((lateralDistance/100)*3)
      })
      sectionHeader.css({
        'position': 'fixed',
        'max-height': (264 - $(this).scrollTop()) + 'px',
        'text-align': 'center',
        'float': 'none'
      });
    }
  });
});
