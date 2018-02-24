function manipulateTable(element) {
    element.addClass('table table-hover table-responsive');
    $('.table tr').eq(1).remove();
    $('.table tr').last().remove();
    $('.table td').removeAttr('align');
}

function searchBar(element) {
    element.val(location.hash.substr(1));
    $('.table tr').not(':nth-child(1)').not(':nth-child(2)').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(location.hash.substr(1)) > -1);
    });
    element.on('keyup', function() {
        var searchString = $(this).val().toLowerCase();
        location.hash = searchString;
        $('.table tr').not(':nth-child(1)').not(':nth-child(2)').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(location.hash.substr(1)) > -1);
        });
    });
}

function generateBreadcrumbs(hostname, path, rootDirectory, element) {
    var breadcrumbs = path.split('/').slice(1, -1);
    var concatenateBreadcrumbs = '';
    var rootDirectoryLi = $('<li>');
    var rootDirectoryA = $('<a>').attr('href', hostname).text(rootDirectory);
    element.append(rootDirectoryLi.append(rootDirectoryA));
    $.each(breadcrumbs, function(key, value) {
        var breadcrumb = decodeURIComponent(value);
        concatenateBreadcrumbs += breadcrumb + '/';
        var li = $('<li>');
        var a = $('<a>').attr('href', hostname + '/' + concatenateBreadcrumbs).text(breadcrumb);
        element.append(li.append(a));
    });
    var lastA = $(element).find('li > a').last();
    $(element).find('li').last().text(lastA.text()).addClass('active');
}

function initializeFancybox(element, fileExtensions, options = null) {
    element.fancybox(options);
    $.each(fileExtensions, function(key, fileExtension) {
        if (fileExtension.images) {
            $.each(fileExtension.images, function(key, images) {
                $('.table a:contains(".' + images + '")').each(function() {
                    $(this).attr('data-fancybox', 'fancybox-image').attr('data-caption', this.text);
                });
            });
        }
        if (fileExtension.iframes) {
            $.each(fileExtension.iframes, function(key, iframe) {
                $('.table a:contains(".' + iframe + '")').each(function() {
                    $(this).attr('data-fancybox', 'fancybox-iframe').attr('data-caption', this.text);
                });
            });
        }
    });
}

function footerInformation(element) {
    var date = new Date();
    var title = $('head').find('title').text();
    element.find('small').text(date.getFullYear() + ' | ' + title);
}

var fileExtensions = [{
    'images': [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'bmp',
    'tiff'
    ],
    'iframes': [
    'pdf'
    ]
}];
manipulateTable($('table'));
searchBar($('#search'));
generateBreadcrumbs(location.origin, location.pathname, 'Root', $('#breadcrumbs'));
initializeFancybox($('[data-fancybox]'), fileExtensions);
footerInformation($('footer'));