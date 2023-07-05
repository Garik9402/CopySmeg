$(function () {
   $.youcityWindows = '1';
   $.youcitySearchUrl = '/youcitySearch/';
   $.youcityPluginUrl = '/youcityGet/';
});

if (typeof (window.jQuery.cookie) == 'undefined') { document.write(unescape('%3Cscript js/src="/wa-content/js/jquery-plugins/jquery.cookie.js"%3E%3C/script%3E')) }

$(function () { var $cookiecompliance = $('<div></div>').css({ 'position': 'fixed', 'bottom': '0px', 'width': '100%', 'line-height': '1.5', 'text-align': 'center', 'background-color': '#eeeeee', 'color': '#262626', 'font-size': '12px', 'z-index': 2 }).addClass('cookiecompliance'); var $cookiecompliance_wrap = $('<div></div>').css({ 'margin': '0 auto', 'position': 'relative', 'max-width': '1120px', 'padding': '10px 30px 10px 10px' }).addClass('cookiecompliance__wrap'); var $close = $('<a href="#" ></a>').css({ color: '#000', 'font-family': 'Arial', 'font-weight': 'normal', 'font-size': '24px', 'position': 'absolute', 'right': '5px', 'top': '10px' }).text('×').on('click', function (e) { e.preventDefault(); $.cookie('cookiecompliance', 1, { expires: 1, path: '/' }); $(this).closest('.cookiecompliance').fadeOut(); $('.up').removeClass('upper'); }); var $link = $('<a href="#" ></a>').css({ 'text-decoration': 'underline', 'color': '#080808' }).text('Подробнее').attr('href', 'https://smeg-store.ru/customers_guide/privat-policy/'); var $text = $('<span></span>').text('Для работы сайта smeg-store.ru используются файлы cookie. Продолжение использования сайта без изменения настроек файлов cookie расценивается как ваше согласие на их использование. '); $('body').append($cookiecompliance); $cookiecompliance.prepend($cookiecompliance_wrap); $cookiecompliance_wrap.prepend($close).prepend($link).prepend($text); $('.up').addClass('upper'); });

$(function () { $.flexdiscountFrontend = new FlexdiscountPluginFrontend({ urls: { couponAddUrl: '/flexdiscount/couponAdd/', updateDiscountUrl: '/flexdiscount/update/', refreshCartUrl: '/flexdiscount/cartUpdate/', deleteUrl: '/flexdiscount/couponDelete/', cartSaveUrl: { shop: '/cart/save/', plugin: '/my/' }, cartDeleteUrl: { shop: '/cart/delete/', plugin: '/my/' }, cartAddUrl: { shop: '/cart/add/', plugin: '/my/' } }, updateInfoblocks: 1, hideDefaultAffiliateBlock: '', ss8forceUpdate: '0', addAffiliateBlock: 0, loaderType: 'loader1', locale: 'ru_RU', settings: { "enable_frontend_cart_hook": 0 }, ss8UpdateAfterPayment: 0, shopVersion: '8.9.0.30' }); });

(function ($) { $(function () { var $w = $('#showno5'); $w.find('.cloc').click(function () { var expires; $w.fadeOut(function () { $(this).remove(); });/*expires = new Date();expires.setHours(today.getHours() + 3);/*/expires = 1; /* days */$.cookie("showno5", 1, { expires: expires, path: '/' }); }); $w.find('a').click(function (e) { e.stopPropagation(); }); }); })(jQuery);

(function ($) {
   var create_field = function (field) {
      new field('searchpro-field-wrapper-64a54d9e54ea1', { "dropdown_status": true, "category_status": false, "dropdown_min_length": 3, "history_cookie_key": "shop_searchpro_search_history", "popular_status": false, "popular_max_count": 5, "history_status": true, "history_search_status": true, "history_max_count": 3, "clear_button_status": true, "helper_dropdown": { "current": "", "template": "<div class=\"searchpro__dropdown\">\r\n\t<div class=\"searchpro__dropdown-group searchpro__dropdown-group-history\">\r\n\t\t\t\t<div class=\"js-searchpro__dropdown-history\">\r\n\t\t\t\t\t\t\t<div class=\"searchpro__dropdown-group-title\">\r\n\t\t\t\t\t\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"searchpro__dropdown-group-entities js-searchpro__dropdown-entities\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"searchpro__dropdown-entity js-searchpro__dropdown-entity\"\r\n\t\t\t\t\t\t   data-action=\"value:data-value\" data-value=\"\" href=\"\/search\/%QUERY%\/\">\r\n\t\t\t\t\t<span class=\"js-searchpro__dropdown-entity_query\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"searchpro__dropdown-entity_delete-button js-searchpro__dropdown-entity_delete-button\">\r\n\t\t\t\t\t\t\t\t\t\u0423\u0434\u0430\u043b\u0438\u0442\u044c\r\n\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/a>\r\n\t\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n" } });
   };

   if (window.shop_searchpro_field) {
      create_field(window.shop_searchpro_field);
      return;
   }

   $(document).on('shop-searchpro-field-loaded', function (e, field) {
      create_field(field);
   });
})(jQuery);

(function () { window.shop_searchpro.loader.loadJs('/wa-js/apps/shop/plugins/searchpro/js/frontend.field.js?v1.11.0', 'field', null); window.shop_searchpro.loader.loadCss('https://smeg-store.ru/wa-apps/shop/plugins/searchpro/css/frontend.fonts.css?v1.11.0'); window.shop_searchpro.loader.loadCss('https://smeg-store.ru/wa-apps/shop/plugins/searchpro/css/frontend.field.css?v1.11.0'); window.shop_searchpro.loader.loadCss('https://smeg-store.ru/wa-data/public/shop/plugins/searchpro/stylesheet/smeg2/field.css?1683213686'); })();

$(document).on('ready', function () { $('.icon-active-search').on('click', function () { $('.search-pro--box').addClass('-show'); $('.search-pro--box .searchpro__field-input').focus(); }); $(document).mouseup(function (e) { var container = $(".search-pro--box"); if (!container.is(e.target) && container.has(e.target).length === 0) { container.removeClass("-show"); } }); });

(function ($) {
   var create_field = function (field) {
      new field('searchpro-field-wrapper-64a54d9e578ac', { "dropdown_status": true, "category_status": false, "dropdown_min_length": 3, "history_cookie_key": "shop_searchpro_search_history", "popular_status": false, "popular_max_count": 5, "history_status": true, "history_search_status": true, "history_max_count": 3, "clear_button_status": true, "helper_dropdown": { "current": "", "template": "<div class=\"searchpro__dropdown\">\r\n\t<div class=\"searchpro__dropdown-group searchpro__dropdown-group-history\">\r\n\t\t\t\t<div class=\"js-searchpro__dropdown-history\">\r\n\t\t\t\t\t\t\t<div class=\"searchpro__dropdown-group-title\">\r\n\t\t\t\t\t\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432\r\n\t\t\t\t<\/div>\r\n\t\t\t\t<div class=\"searchpro__dropdown-group-entities js-searchpro__dropdown-entities\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"searchpro__dropdown-entity js-searchpro__dropdown-entity\"\r\n\t\t\t\t\t\t   data-action=\"value:data-value\" data-value=\"\" href=\"\/search\/%QUERY%\/\">\r\n\t\t\t\t\t<span class=\"js-searchpro__dropdown-entity_query\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<\/span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"searchpro__dropdown-entity_delete-button js-searchpro__dropdown-entity_delete-button\">\r\n\t\t\t\t\t\t\t\t\t\u0423\u0434\u0430\u043b\u0438\u0442\u044c\r\n\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<\/a>\r\n\t\t\t\t\t\t\t\t\t<\/div>\r\n\t\t\t\t\t<\/div>\r\n\t<\/div>\r\n<\/div>\r\n" } });
   };

   if (window.shop_searchpro_field) {
      create_field(window.shop_searchpro_field);
      return;
   }

   $(document).on('shop-searchpro-field-loaded', function (e, field) {
      create_field(field);
   });
})(jQuery);

(function () { window.shop_searchpro.loader.loadJs('/wa-js/apps/shop/plugins/searchpro/js/frontend.field.js?v1.11.0', 'field', null); window.shop_searchpro.loader.loadCss('https://smeg-store.ru/wa-apps/shop/plugins/searchpro/css/frontend.fonts.css?v1.11.0'); window.shop_searchpro.loader.loadCss('https://smeg-store.ru/wa-apps/shop/plugins/searchpro/css/frontend.field.css?v1.11.0'); window.shop_searchpro.loader.loadCss('https://smeg-store.ru/wa-data/public/shop/plugins/searchpro/stylesheet/smeg2/field.css?1683213686'); })();

$('.s-header-mobile').on('click', function () {
   $('[data-role="search"]').find('.searchpro__field-input').focus();
});

(function ($) { if ($(window).width() > 767) { $.getScript("/wa-js/data/public/shop/themes/smeg2/js/bxslider/jquery.bxslider.min.js", function () { $('.home-slider ul').bxSlider({ mode: 'fade', controls: false, auto: false, pause: 6000 }); }); } })(jQuery);

(function ($) {
   $(function () {
      $.multiformFrontend.init({
         url: "https://smeg-store.ru/multiform/handler/",
         appUrl: "https://smeg-store.ru/wa-apps/multiform/",
         locale: "ru_RU",
         frontendLocaleStrings: { "": "project-id-version: multiform\npot-creation-date: 2019-08-29T11:29:26.306Z\nlast-translator: multiform\nlanguage-team: multiform\nmime-version: 1.0\ncontent-type: text/plain; charset=utf-8\ncontent-transfer-encoding: 8bit\nplural-forms: nplurals=3; plural=((((n%10)==1)&&((n%100)!=11))?(0):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(1):2));\n", "Close": "Закрыть", "Fill in the required fields": "Заполните обязательные поля формы", "Added files are not valid": "Добавленные файлы содержат ошибки", "Fix the errors above": "Исправьте ошибки, допущенные в форме", "Please, wait, while data is saving": "Пожалуйста, подождите, идет сохранение данных", "Files uploading": "Загрузка файлов", "Saving": "Сохранение", "Something wrong. Please, reload the page": "Произошла ошибка. Перезагрузите страницу", "Data saved with errors": "Данные сохранены с ошибками", "Wait, please. Redirecting": "Идет перенаправление", "Loading": "Идет загрузка", "Field is required": "Обязательное поле", "Value must be more than ": "Значение должно быть больше, чем ", "Value must be less than ": "Значение должно быть меньше, чем ", "Value must be a multiple of ": "Значение должно кратно ", "For example": "Например", "You have to select at least %d checkboxes": "", "Checkboxes cannot exceed %d selected values": "", "You have to select at least 1 checkbox": ["Вам необходимо выбрать хотя бы 1 вариант", "Вам необходимо выбрать хотя бы {n} варианта", "Вам необходимо выбрать хотя бы {n} вариантов"], "Checkboxes cannot exceed 1 selected value": ["Выбранных значений не может быть больше 1", "Выбранных значений не может быть больше {n}", "Выбранных значений не может быть больше {n}"] }

      });
   });
})(jQuery);

(function ($) { $(function () { setTimeout(function () { $(".multiform-wrap[data-uid='7-1']").trigger("multiform-loaded").trigger("multiform-loaded-7-1"); }) }, 1000) })(jQuery);