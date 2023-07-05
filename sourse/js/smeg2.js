// Site :: General Layout
( function($) {

    var bindEvents = function() {

        $(".auth-type-wrapper a").on("click", function() {
            onProviderClick( $(this) );
            return false;
        });

        $("#show-sidebar-link").on("click", function() {
            toggleSidebar();
        });

        $("#s-fixed-header").find(".s-catalog-wrapper").CatalogList();

        $('#s-fixed-header-logo').click(function (e) {
            e.preventDefault();
            $('html,body').animate({ scrollTop : 0}, 500);
        });

        $('.callback_plugin_handler').click(function (e) {
            e.preventDefault();
            $('.multiform-body[data-id="7"] .multiform-popup-link').trigger('click');

            (function(w,c){
                if(w[c]) {w[c].reachGoal('CALLBACK_BUTTON');}
            })(window,'yaCounter21728605');
        });

        $('.s-main-block').on('click', '.filter-toggle', function () {
            $('.s-sidebar-wrapper').toggleClass('is-active');
        });

        menuMobile();
        cartDesktop();

    };

    var cartDesktop = function () {
        $('#cart-sum').click(function (e) {
            var $b = $('#header-cart-wrapper'),
                url = $(this).closest('.s-header-cart').data('url');
            e.preventDefault();

            $b.html('').show().html('<div class="container"><div class="spinner wh"></div></div>').addClass('active');

            $.get(url, function (resp) {
                $b.html('<span class="s-close close"></span>'+resp);
                $b.find('.close').click(function (e) {
                    e.preventDefault();
                    $(this).closest('#header-cart-wrapper').fadeOut().removeClass('active');
                })
            })
        })
    };

    var menuMobile = function () {
        var $hm  = $('.s-header-mobile'),
            closeMenu = function(){
                $('.s-menu-wrapper,.icon-menu', $hm).removeClass('open');
                $('body').removeClass('no-scroll');
            };


        $('.icon-menu:not(.open),.icon', $hm).click(function () {
            var $body = $('body'),
                $that = $(this);
            if($that.hasClass('open')) {
                $('.icon-menu,.s-menu-wrapper', $hm).removeClass('open');
                $body.removeClass('no-scroll');
                return;
            }

            var $w = $('.s-menu-wrapper', $hm),
                $m = $w.find('.s-menu'),
                url = $(this).data('url'),
                $b = $m.find('[data-role="'+url+'"]');

            $('.icon-menu', $hm).addClass('open');
            $w.addClass('open');
            $body.addClass('no-scroll');
            $w.find('.s-menu-title').text($(this).data('title'));

            if($b.length) {
                $b.show().siblings().hide();
            } else {
                $m.find('[data-role]').hide();
                $b = $m.find('[data-role="ajax"]');
                $b.html('<div class="spinner wh"></div>').show();
                $.get(url, function (resp) {
                    $b.html(resp);
                    $b.find('.close').click(function (e) {
                        e.preventDefault();
                        closeMenu();
                    })
                })
            }
        });

        $('.s-menu-wrapper', $hm).on('swiperight', function () {
            closeMenu();
        });

        $('#slidemenu').waSlideMenu({
            onLatestClick : function () {
                location.href = $(this).prop('href');
            },

            backLinkContent: '&larr; назад'
        });
    };

    var onProviderClick = function( $link ) {
        var $li = $link.closest("li"),
            provider = $li.data("provider");

        if (provider != 'guest' && provider != 'signup') {
            var left = (screen.width-600)/ 2,
                top = (screen.height-400)/ 2,
                href = $link.attr("href");

            if ( ( typeof require_authorization !== "undefined" ) && !require_authorization) {
                href = href + "&guest=1";
            }

            openWindow(href, "oauth", "width=600,height=400,left="+left+",top="+top+",status=no,toolbar=no,menubar=no");
        }

    };

    var toggleSidebar = function() {
        var $wrapper = $(".site-wrapper"),
            activeClass = "sidebar-is-shown";

        $wrapper.toggleClass(activeClass);
    };

    var openWindow = function( href, win_name, params) {
        window.open(href, win_name, params);
    };

    $(document).ready( function() {
        bindEvents();
    });

})(jQuery);

// Site :: Fixed Layout
( function($) {
    $(document).ready( function() {
        var fixed_class = "is-fixed";

        // DOM
        var $headerWrapper = $(".s-header-wrapper"),
            $header = $("#s-fixed-header"),
            $ny = $('.b-page_newyear'),
            $window = $(window),
            topth,
            header_top = $header.offset().top;

        console.log(header_top);


        setTimeout(function () {
            // DINAMIC
            header_top = $header.offset().top;
            console.log('header_top', header_top);

            // EVENT
            $window.on("scroll", onScroll);

        }, 50);


        // HANDLER
        function onScroll() {
            var current_scroll = $window.scrollTop();

            if (current_scroll > header_top) {
                setFixed();
            } else {
                unsetFixed();
            }

            clearTimeout(topth);
            topth = setTimeout(function () {
                var a = (current_scroll > 200) ? 'addClass' : 'removeClass';
                $('body>.up')[a]('visible');
            }, 500)
        }

        function setFixed() {
            $headerWrapper.addClass(fixed_class);
            $header.addClass(fixed_class);
        }

        function unsetFixed() {
            $headerWrapper.removeClass(fixed_class);
            $header.removeClass(fixed_class);
            $headerWrapper.removeAttr("style");
        }

        $('body>.up').click(function () {
            $('html,body').animate({scrollTop: 0}, 200, 'swing');
        })
    });
})(jQuery);

// Site :: Min space before footer
( function($) {

    function init() {
        var $window = $(window),
            $main = $("#s-content-block"),
            $footer = $(".s-footer-wrapper");

        setSpace();

        $window.on("resize", setSpace);

        window.addEventListener("orientationchange", setSpace);

        function setSpace() {
            var display_height = $window.height(),
                main_height = $main.closest(".s-content-wrapper").height(),
                footer_top = $footer.offset().top,
                footer_height = $footer.outerHeight(true);

            var delta = ( display_height - (footer_top + footer_height) );

            if ( delta > 0 ) {
                $main.css({
                    "min-height": main_height + delta + "px"
                });
            } else {
                $main.removeAttr("style");
            }
        }
    }

    $(document).ready( function () {
        init();
    });

})(jQuery);

// Site :: Profile :: Edit
var renderProfilePage = function(options) {

    var storage = {
        hiddenClass: "is-hidden",
        changeLink: false,          // Dynamic var
        deletePhotoLink: false,     // Dynamic var
        getWrapper: function () {
            return $("#wa-my-info-wrapper");
        },
        getForm: function () {
            return $("#wa-my-info-edit-wrapper");
        },
        getInfoBlock: function () {
            return $("#wa-my-info-read-wrapper");
        },
        getPassword: function () {
            return this.getWrapper().find(".wa-field-password");
        },
        getPhoto: function () {
            return this.getWrapper().find(".wa-field-photo");
        }
    };

    var initialize = function () {
        var $password = storage.getPassword(),
            $photo = storage.getPhoto();

        if ($password.length) {
            renderChangePasswordLink();
        }

        if ($photo.length) {
            renderPhoto();
        }

        // initialize bindEvents after Render
        bindEvents();
    };

    var bindEvents = function () {

        // show Edit Form
        $("#wa-my-info-edit").on("click", function () {
            showEditForm();
            return false;
        });

        // hide edit Form
        $("#wa-my-info-cancel").on("click", function () {
            hideEditForm();
            return false;
        });

        var $change_link = storage.changeLink;
        if ($change_link.length) {
            $change_link.on("click", function () {
                onChangePasswordClick( $(this) );
                return false;
            });
        }

        var $delete_photo_link = storage.deletePhotoLink;
        if ($delete_photo_link.length) {
            $delete_photo_link.on("click", function () {
                onDeletePhotoClick($(this));
                return false;
            });
        }
    };

    var renderPhoto = function () {
        var $photo = storage.getPhoto(),
            $delete_photo_link = $("<a class=\"general-button\" href=\"javascript:void(0);\">" + options["deletePhotoText"] + "</a>"),
            $user_photo = $photo.find('img:first'),
            $default_photo = $photo.find('img:last');

        if ($user_photo[0] != $default_photo[0]) {
            //
            $default_photo.hide();

            //
            $default_photo.after($delete_photo_link);

            // Save to storage
            storage.deletePhotoLink = $delete_photo_link;

        } else {
            $default_photo.show();
        }
    };

    var renderChangePasswordLink = function () {
        var $change_link = $("<a class=\"general-button\" href=\"javascript:void(0);\">" + options["changePasswordText"] + "</a>"),
            $password = storage.getPassword();

        // Hide Password Fields
        $password.find("p").addClass(storage.hiddenClass);

        // Render
        $password.find('.wa-value').prepend($change_link);

        // Save to storage
        storage.changeLink = $change_link;
    };

    var showEditForm = function () {
        var $form = storage.getForm(),
            $info = storage.getInfoBlock();

        $form.removeClass(storage.hiddenClass);
        $info.addClass(storage.hiddenClass);
    };

    var hideEditForm = function () {
        var $form = storage.getForm(),
            $info = storage.getInfoBlock();

        $form.addClass(storage.hiddenClass);
        $info.removeClass(storage.hiddenClass);
    };

    var onDeletePhotoClick = function ($delete_photo_link) {
        var $photo = storage.getPhoto(),
            $photo_input = $photo.find('[name="profile[photo]"]'),
            $user_photo = $photo.find('img:first'),
            $default_photo = $photo.find('img:last');

        // Show default photo
        $default_photo.show();

        // Show user photo
        $user_photo.hide();

        // Hide delete link
        $delete_photo_link.hide();

        // Clear input value
        $photo_input.val('');
    };

    var onChangePasswordClick = function($change_link) {
        // hide link
        $change_link.hide();

        // Show fields
        storage.getPassword().find("p").removeClass(storage.hiddenClass);
    };

    $(document).ready(function () {
        initialize();
    });
};

// Shop :: Header Catalog List
(function($) {

    $.fn.CatalogList = $.fn.CatalogList || function(options) {
        var _opts = $.extend(options, {
                open_class : "is-opened",
                button_class : 's-catalog-button'
            });


        this.each(function (i, v) {
            var that = $(v);

            // DYNAMIC VARS
            that.data('is_opened', false);
            that.data('is_mobile', false);

            // INIT
            initClass(that);
        });



        function initClass(that) {
            var button = that.find('.'+_opts.button_class);

            if(button.length < 1) {
                return;
            }

            button.on("mouseenter", onMouseEnter);
            that.on("mouseleave", onMouseLeave);

            button.on("touchstart", function () {
                if (!that.data('is_mobile')) {
                    button.off("mouseenter", onMouseEnter);
                    that.off("mouseleave", onMouseLeave);
                    that.data('is_mobile', true);
                }
                toggleView(that);
            });

            function onMouseEnter() {
                toggleView(that, "show");
            }

            function onMouseLeave() {
                toggleView(that, "hide");
            }
        }

        function toggleView( that, show ) {
            var show_list;

            if (show) {
                if (show == "show") {
                    show_list = true;
                } else if (show == "hide") {
                    show_list = false;
                }
            } else {
                show_list = !that.data('is_opened');
            }

            if (show_list) {
                that.addClass(_opts.open_class);
                that.data('is_opened', true);
            } else {
                that.removeClass(_opts.open_class);
                that.data('is_opened', false);
            }
        }
    };

})(jQuery);

var openHeaderCart = ( function($) {
    openHeaderCart = function() {
        $('html,body').animate({ scrollTop : 0}, 500);
        if($(window).width() > 1200) {
            $('#cart-sum').click();
        } else {
            $('.s-header-mobile').find('.icon.cart').click();
        }
    };
    return openHeaderCart;
})(jQuery);



$(() => {
    const input = $('.s-static-header .s-text-input');
    input.on('click', function(e) {
        e.stopPropagation();
        $(this).addClass('focus');
    });
    $(document).on('click', () => input.removeClass('focus'));
});