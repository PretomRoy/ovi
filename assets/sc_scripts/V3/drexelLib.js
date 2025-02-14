$(document).ready(function () {
    if ($(".DUVendors.AndLogic").length > 0) {
        $.getScript("/sc_scripts/V2/components/table-sort-and-logic.js");
        $('head').prepend("<link id='table-sort-stylesheet' href='/~/stylesheets/baseVelir/vendorTable' rel='stylesheet'>");
    }
    else if ($(".DUVendors").length > 0) {
        $.getScript("/sc_scripts/V2/components/table-sort.js");
        $('head').prepend("<link id='table-sort-stylesheet' href='/~/stylesheets/baseVelir/vendorTable' rel='stylesheet'>");
    }
    if ($(".ilightbox-photo").length > 0) {
        $('head').prepend("<link id='jquerylightbox' href='/~/stylesheets/baseVelir/iLightbox UI' rel='stylesheet'>");
        $(".ilightbox-photo").attr("data-type", "image");
        $.getScript("/sc_scripts/V2/libs/ilightbox.packed.js", function () {
            $(".ilightbox-photo").each(function (i) {
                $(this).iLightBox();
            });
        });
    }
    if ($("[data-lity]").length > 0) {
        $('head').prepend("<link id='lityLightbox' href='/~/stylesheets/baseVelir/lityLightbox' rel='stylesheet'>");
    }
    if ($(".ilightbox-video").length > 0) {
        $('head').prepend("<link id='jquerylightbox' href='/~/stylesheets/baseVelir/iLightbox UI' rel='stylesheet'>");
        $.getScript("/sc_scripts/V2/libs/ilightbox.packed.js", function () {
            $(".ilightbox-video").each(function (i) {
                $(this).iLightBox();
            });
        });
    }

    if (window.matchMedia("(max-width: 1020px)").matches) {
        $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "-1");
    }

    $("#nav-toggle-btn").on("keydown", function (e) { v3NavToggleKeydown(e); }.bind(this));
    $(".site-search__input, ul.utility-nav__list li a, ul.utility-nav__home li a").on("keydown", function (e) { v3SiteSearchKeydown(e); }.bind(this));
    $("li.primary-nav__item > a").on("keydown", function (e) { v3MenuItemKeydown(e); }.bind(this));
    $("li.primary-nav__subitem > a").on("keydown", function (e) { v3MenuSubItemKeydown(e); }.bind(this));
});

function v3NavToggleKeydown(item) {
    if (event.which == 27) {
        if (window.matchMedia("(max-width: 1020px)").matches) {
            $("#nav-toggle-btn").click();
            $("#nav-toggle-btn").focus();
            $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "-1");
        }
    }

    if (event.which == 13) {
        if (window.matchMedia("(max-width: 1020px)").matches) {
            if ($("#htmlBody").hasClass("is-open")) {
                $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "-1");
            } else {
                $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "0");
            }
        }
    }
}

function v3SiteSearchKeydown(item) {
    if (event.which == 27) {
        if (window.matchMedia("(max-width: 1020px)").matches) {
            $("#nav-toggle-btn").click();
            $("#nav-toggle-btn").focus();
            $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "-1");
        }
    }
}

function v3MenuSubItemKeydown(item) {
    if (event.which == 27 && $(item.target).parent().parent().parent().hasClass("is-open")) {
        $(item.target).parent().parent().prev().click();
        $(item.target).parent().parent().prev().focus();
    }
}

function v3MenuItemKeydown(item) {
    if (event.shiftKey && event.which == 9 && $(item.target).parent().hasClass("is-open")) {
        $(item.target).click();

    } else if (event.which == 27 && $(item.target).parent().hasClass("is-open")) {
        $(item.target).click();
        $(item.target).focus();

    } else if (event.which == 27 && $("#nav-toggle-btn").hasClass(".is-open")) {
        $("#nav-toggle-btn").click();
        $("#nav-toggle-btn").focus();
        $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "-1");

    } else {
        if (event.which == 27 && window.matchMedia("(max-width: 1020px)").matches) {
            $("#nav-toggle-btn").click();
            $("#nav-toggle-btn").focus();
            $("div.utility-nav nav ul li a, li.primary-nav__item > a, .site-search__input").attr("tabindex", "-1");

        } else if (event.which == 27) {
            event.preventDefault();
        }
    }
}

function v3MenuSubItemFocusOut(item) {
    if ($(item).parent().is(":last-child")) {
        $(item).parent().parent().prev().click();
    }
}