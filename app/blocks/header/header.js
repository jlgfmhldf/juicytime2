import $ from 'jquery';

import '../../../node_modules/semantic-ui/dist/components/visibility';
import '../../../node_modules/semantic-ui/dist/components/dropdown';
import '../../../node_modules/semantic-ui/dist/components/transition';

$(()=>{
	$('.main.menu').visibility({
		type: 'fixed'
	});

	$('.main.menu  .ui.dropdown').dropdown({
		on: 'hover'
	});
});
