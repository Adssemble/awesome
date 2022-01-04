////////////////////////////////////////////
/////////////// Parallax //////////////////
///////////////////////////////////////////
(function () {
  // for images, icons 
  var parallaxIcons = $('.js-parallax');
  if (parallaxIcons.length) {
    parallaxIcons.each(function () {
      var _this = $(this),
        scale = _this.data('scale'),
        orientation = _this.data('orientation');

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        overflow: true, // <---
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
      });
    });
  }
})();

////////////////////////////////////////////
//////////// Lazyload Videos ///////////////
///////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
            if (video.isIntersecting) {
                for (var source in video.target.children) {
                    var videoSource = video.target.children[source];
                    if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                        videoSource.src = videoSource.dataset.src;
                    }
                }

                video.target.load();
                video.target.classList.remove("lazy");
                lazyVideoObserver.unobserve(video.target);
            }
        });
        });

        lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
        });
    }
});

////////////////////////////////////////////
//////// Lazyload BG Images ///////////////
///////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            if(lazyImage.dataset.srcset) lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to event handlers here
    }
});

$(function (e) {
    ////////////////////////////////////////////
    //////// Smooth Scroll to Anchors //////////
    ///////////////////////////////////////////

    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {

            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
            return false;
            } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
            };
        });
        }
    }
    });

    ////////////////////////////////////////////
    ///////////// Scroll to Top ////////////////
    ///////////////////////////////////////////

    $('.totop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
});

(function () {
    ////////////////////////////////////////////
    ///// Form Input Label as Placeholder //////
    ///////////////////////////////////////////

    var allFormFields = document.querySelectorAll('.hs-form-field');
  
    function domReady(callback) {
      if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
        callback();
      } else {
        document.addEventListener('DOMContentLoaded', callback);
      }
    }
  
    domReady(function () {
      if (!document.body) {
        return;
      } else {
        if(allFormFields.length > 0){
            allFormFields.forEach(function (field) {
                const _label = field.getElementsByTagName('label')[0];
                const _input = field.getElementsByTagName('input')[0];
                const types = ['text', 'email', 'password', 'number', 'search', 'tel', 'url'];

                if(window.getComputedStyle(_label).position === 'absolute' && types.indexOf(_input.getAttribute('type')) > -1){
                    field.querySelector('.hs-input').addEventListener('keyup', function(e){
                        if(_input.value.length > 0){
                            _label.style.opacity = 0;
                        } 
                        else {
                            _label.style.opacity = 1;
                        }
                            
                    });

                    field.querySelector('.hs-input').addEventListener('focus', function(e){
                        if(_input.value.length > 0) _label.style.opacity = 0;
                    });

                    field.querySelector('.hs-input').addEventListener('blur', function(e){
                        if(_input.value.length === 0) _label.style.opacity = 1;
                    });
                }

            });
        }

        ////////////////////////////////////////////
        ///////////// Tables Responsive ///////////////
        ///////////////////////////////////////////
        //get svg element.
        var tables = document.querySelectorAll("table");

        if(tables && tables.length > 0){
            
            tables.forEach(function(table, index){
                    if(!table.classList.contains('no-responsive')){
                        // console.log('table ' + index , table);
                        var trs = table.querySelectorAll('tr');
                        var childTHS = trs[0].querySelectorAll('th');
        
                        trs.forEach(function(child, index){
                            // if not is tr th
                            if(index > 0){
                                var childTDS = child.querySelectorAll('td');
                                // add th as span to the td
                                childTDS.forEach(function(td, i){
                                    var _span = document.createElement('span');
                                    _span.setAttribute('class', 'th-head');
                                    _span.textContent = childTHS[i].innerHTML;
        
                                    // console.log(childTHS[i])
        
                                    td.appendChild(_span);
                                })
                            }
                        })
        
                    }
                })

        }

      }
    });

})();