!(function() {
    window.particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 170,
                "density": {
                    "enable": true,
                    "value_area": 1499.3805191013182
                }
            },
            "color": {
                "value": "#FFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 10
                },
                "image": {
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.29987610382026364,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 157.82952832645452,
                "color": "#FFF",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 1341.5509907748635,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 80,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    _setCanvasContainer();
    $(window).on('resize', function() {
        _setCanvasContainer();
    });
    $(document).on('click', '#btn-continue', function() {
        var height = _getXY().height;
        window.scrollTo(0, height);
    }).on('click', '.clients .client>li', function() {
        var $this = $(this);
        var index = $this.attr('data-index');
        $this.closest('.items').children('[data-index="' + index + '"]').show().siblings('li').hide();
    }).on('click', '.clients .items .selector .left', function() {
        var $this = $(this),
            $selector = $('.clients .items');
        var index = $this.closest('.items>li').index();
        $selector.children('li').eq(index - 1).show().siblings('li').hide();
    }).on('click', '.clients .items .selector .right', function() {
        var $this = $(this),
            $selector = $('.clients .items'),
            len = $selector.children('li').length;
        var index = $this.closest('.items>li').index();
        $selector.children('li').eq(index + 1 >= len ? index + 1 - len : index + 1).show().siblings('li').hide();
    });
    _setSVGLoading();
    (new TimelineMax()).from('.circleWrap .text .big', 2, {
        autoAlpha: 0,
        y: 30
    }, 0).from('.circleWrap .text .small', 2, {
        autoAlpha: 0,
        y: -30
    }, 0);


    function _getXY() {
        var height = 'innerHeight' in window ? window.innerHeight : document.documentElement.clientHeight;
        var width = document.body.scrollWidth;
        return {
            width: width,
            height: height
        };
    }

    function _setCanvasContainer() {
        $('#particles-js canvas').css({
            width: '100%',
            height: '100%'
        }).attr(_getXY());
    }

    function _setSVGLoading() {
        var circle = $('.circle'),
            rangeValue = 0,
            cc;

        function setCircle() {
            circle.attr('stroke-dashoffset', (255 - rangeValue) + '%');
            rangeValue += 2.5;
            if (rangeValue >= 240) {
                window.clearInterval(cc);
            }
        }

        cc = window.setInterval(function() {
            setCircle();
        }, 1);
    }
}());