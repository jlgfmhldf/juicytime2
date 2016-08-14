import $ from 'jquery';

import '../../../node_modules/semantic-ui/dist/components/modal';
import '../../../node_modules/semantic-ui/dist/components/dimmer';

$(() => {
	$('.product__open-photo').on('click', () => {
		$('.full-photo').modal('show');
	});
})
