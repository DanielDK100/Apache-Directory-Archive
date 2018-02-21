function manipulateTable(element) {
	element.addClass('table table-hover table-responsive');
	$('.table tr').eq(1).remove();
	$('.table tr').last().remove();
	$('.table td').removeAttr('align');
}

function generateBreadcrumbs(hostname, path, rootDirectory, element) {
	var breadcrumbs = path.split('/').slice(1, -1);
	var concatenateBreadcrumbs = '';
	if (breadcrumbs == 0) {
		var rootDirectoryLi = $('<li>').text(rootDirectory);
	}
	else {
		var rootDirectoryLi = $('<li>');
		var rootDirectoryA = $('<a>').attr('href', hostname).text(rootDirectory);
	}
	element.append(rootDirectoryLi.append(rootDirectoryA));
	$.each(breadcrumbs, function(key, value) {
		var breadcrumb = decodeURIComponent(value);
		var isLastBreadcrumb = key == breadcrumbs.length -1;
		concatenateBreadcrumbs += breadcrumb + '/';
		if (isLastBreadcrumb) {
			var li = $('<li>').text(breadcrumb);
			element.append(li);
		}
		else {
			var li = $('<li>');
			var a = $('<a>').attr('href', hostname + '/' + concatenateBreadcrumbs).text(breadcrumb);
			element.append(li.append(a));
		}
	});
	$(element).find('li').last().addClass('active');
}

function search(element) {
	element.on('keyup', function() {
		var value = $(this).val().toLowerCase();
		$('.table tr').not(':nth-child(1)').not(':nth-child(2)').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
}

function initializeFancybox(element, options = null) {
	element.fancybox(options);
	var table = '.table ';
	$(table + 'a:contains(".jpg"),' + table + 'a:contains(".jpeg"),' + table + 'a:contains(".png"),' + table + 'a:contains(".gif")' + table + 'a:contains(".bmp")' + table + 'a:contains(".tiff")').each(function() {
		$(this).attr('data-fancybox', 'image').attr('data-caption', this.text);
	});
	$(table + 'a:contains(".pdf")').each(function() {
		$(this).attr('data-fancybox', 'pdf').attr('data-caption', this.text);
	});
}

function footerInformation(element, date) {
	element.text(date.getFullYear());	
}

manipulateTable($('table'));
generateBreadcrumbs(location.origin, location.pathname, 'Root', $('#breadcrumbs'));
search($('#search'));
initializeFancybox($('[data-fancybox]'));
footerInformation($('#date'), new Date());