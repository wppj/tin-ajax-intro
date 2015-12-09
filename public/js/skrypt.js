$(function () {
	console.log('Gotowy do działania!');
	$('#tekst').focus();
	$('#guzik').click(function () {
		$.ajax({
			url: '/api/item',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({
				value: $('#tekst').val()
			}),
			success: function (json) {
				console.dir(json);
				$('body').append('<h1>OK</h1>');
			},
			error: function (xhr, status, error) {
				console.dir(xhr);
				console.log('status=' + status);
				console.log('error=' + error);
			},
			complete: function (xhr, status) {
				console.log('Koniec obsługi Ajax-a');
				$('#tekst').val('').focus();
			}
		});
	});
});