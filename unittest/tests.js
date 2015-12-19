/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals $, qunit, module, test, ok, equal, expect, start */

qunit.jqui.module("Checkboxrange");

qunit.jqui.tests({
	"Pseudo selectors": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		equal(cb.is(':checkboxrange'),		false,	"It's not a checkboxrange");

		cb.checkboxrange();

		equal(cb.is(':checkboxrange'),		true,	"It's a checkboxrange");

		equal(cb.is(':checked'),		false,	"Initial, Not checked");
		equal(cb.is(':determinate'),	true,	"Initial, Determinate");
		equal(cb.is(':indeterminate'),	false,	"Initial, Not indeterminate");

		cb.get(0).click();
		equal(cb.is(':checked'),		true,	"1st click, Checked");
		equal(cb.is(':determinate'),	true,	"1st click, Determinate");
		equal(cb.is(':indeterminate'),	false,	"1st click, Not indeterminate");

		cb.click();
		equal(cb.is(':checked'),		false,	"2nd click, Not checked");
		equal(cb.is(':determinate'),	false,	"2nd click, Not determinate");
		equal(cb.is(':indeterminate'),	true,	"2nd click, Indeterminate");

		cb.click();
		equal(cb.is(':checked'),		false,	"3rd click, Not checked");
		equal(cb.is(':determinate'),	true,	"3rd click, Determinate");
		equal(cb.is(':indeterminate'),	false,	"3rd click, Not indeterminate");

	},
			
	"Expando values": function() {
		'use strict';

		var cb = $('<input type="checkbox" value="1" checkedvalue="C" uncheckedvalue="U" indeterminatevalue="I"/>').appendTo('body');
		cb.checkboxrange();

		equal(cb.val(),		'U',	"Unchecked value");

		cb.click();
		equal(cb.val(),		'C',	"Checked value");

		cb.click();
		equal(cb.val(),		'I',	"Indeterminate value");
	},

	"Option values": function() {
		'use strict';

		var cb = $('<input type="checkbox" value="1"/>').appendTo('body');
		cb.checkboxrange({
			checked:		'C',
			unchecked:		'U',
			indeterminate:	'I'
		});

		equal(cb.val(),		'U',	"Unchecked value");

		cb.click();
		equal(cb.val(),		'C',	"Checked value");

		cb.click();
		equal(cb.val(),		'I',	"Indeterminate value");
	},

	"Checked attribute": function() {
		'use strict';

		var cb = $('<input type="checkbox" checked="checked"/>').appendTo('body');
		cb.checkboxrange();

		equal(cb.is(':checked'),		true,	"Checked");
		equal(cb.is(':determinate'),	true,	"Determinate");
		equal(cb.is(':indeterminate'),	false,	"Indeterminate");
	},

	"Indeterminate expando attribute": function() {
		'use strict';

		var cb = $('<input type="checkbox" indeterminate="indeterminate"/>').appendTo('body');
		cb.checkboxrange();

		equal(cb.is(':checked'),		false,	"Checked");
		equal(cb.is(':determinate'),	false,	"Determinate");
		equal(cb.is(':indeterminate'),	true,	"Indeterminate");
	},

	"State option true (checked)": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			state: true
		});

		equal(cb.is(':checked'),		true,	"Checked");
		equal(cb.is(':determinate'),	true,	"Determinate");
		equal(cb.is(':indeterminate'),	false,	"Indeterminate");
	},

	"State option false (unchecked)": function() {
		'use strict';

		var cb = $('<input type="checkbox" checked="checked"/>').appendTo('body');
		cb.checkboxrange({
			state: false
		});

		equal(cb.is(':checked'),		false,	"Checked");
		equal(cb.is(':determinate'),	true,	"Determinate");
		equal(cb.is(':indeterminate'),	false,	"Indeterminate");
	},

	"State option null (indeterminate)": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			state: null
		});

		equal(cb.is(':checked'),		false,	"Checked");
		equal(cb.is(':determinate'),	false,	"Determinate");
		equal(cb.is(':indeterminate'),	true,	"Indeterminate");
	},

	"Value option checked": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			value:			'C',
			checked:		'C',
			unchecked:		'U',
			indeterminate:	'I'
		});

		equal(cb.is(':checked'),		true,	"Checked");
		equal(cb.is(':determinate'),	true,	"Determinate");
		equal(cb.is(':indeterminate'),	false,	"Indeterminate");
	},

	"Value option unchecked": function() {
		'use strict';

		var cb = $('<input type="checkbox" checked="checked"/>').appendTo('body');
		cb.checkboxrange({
			value:			'U',
			checked:		'C',
			unchecked:		'U',
			indeterminate:	'I'
		});
		
		equal(cb.is(':checked'),		false,	"Checked");
		equal(cb.is(':determinate'),	true,	"Determinate");
		equal(cb.is(':indeterminate'),	false,	"Indeterminate");
	},

	"Value option indeterminate": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			value:			'I',
			checked:		'C',
			unchecked:		'U',
			indeterminate:	'I'
		});

		equal(cb.is(':checked'),		false,	"Checked");
		equal(cb.is(':determinate'),	false,	"Determinate");
		equal(cb.is(':indeterminate'),	true,	"Indeterminate");
	},

	"Public method 'state' - get": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange();

		equal(cb.checkboxrange('state'),		false,	"Unchecked");

		cb.click();
		equal(cb.checkboxrange('state'),		true,	"Checked");

		cb.click();
		equal(cb.checkboxrange('state'),		null,	"Indeterminate");

		cb.click();
		equal(cb.checkboxrange('state'),		false,	"Unchecked");
	},

	"Public method 'state' - set": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange();

		equal(cb.checkboxrange('state'),		false,	"Unchecked");

		cb.checkboxrange('state', true);
		equal(cb.checkboxrange('state'),		true,	"Checked");

		cb.checkboxrange('state', null);
		equal(cb.checkboxrange('state'),		null,	"Indeterminate");

		cb.checkboxrange('state', false);
		equal(cb.checkboxrange('state'),		false,	"Unchecked");

		cb.checkboxrange('state', '?');
		equal(cb.checkboxrange('state'),		false,	"Unchecked");
	},

	"Public method 'value' - get": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			checked:		'C',
			unchecked:		'U',
			indeterminate:	'I'
		});

		equal(cb.checkboxrange('value'),		'U',	"Unchecked");

		cb.click();
		equal(cb.checkboxrange('value'),		'C',	"Checked");

		cb.click();
		equal(cb.checkboxrange('value'),		'I',	"Indeterminate");

		cb.click();
		equal(cb.checkboxrange('value'),		'U',	"Unchecked");
	},

	"Public method 'value' - set": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			checked:		'C',
			unchecked:		'U',
			indeterminate:	'I'
		});

		equal(cb.checkboxrange('value'),		'U',	"Unchecked");

		cb.checkboxrange('value', 'C');
		equal(cb.checkboxrange('value'),		'C',	"Checked");
		equal(cb.checkboxrange('state'),		true,	"Checked");

		cb.checkboxrange('value', 'I');
		equal(cb.checkboxrange('value'),		'I',	"Indeterminate");
		equal(cb.checkboxrange('state'),		null,	"Indeterminate");

		cb.checkboxrange('value', 'U');
		equal(cb.checkboxrange('value'),		'U',	"Unchecked");
		equal(cb.checkboxrange('state'),		false,	"Unchecked");

		cb.checkboxrange('value', '?');
		equal(cb.checkboxrange('value'),		'U',	"Unchecked");
		equal(cb.checkboxrange('state'),		false,	"Unchecked");
	},

	"Public method 'value' - set 0/empty": function() {
		'use strict';

		var cb = $('<input type="checkbox"/>').appendTo('body');
		cb.checkboxrange({
			checked:		'',
			unchecked:		0,
			indeterminate:	false
		});

		equal(cb.checkboxrange('state'),		false,	"Unchecked");

		cb.checkboxrange('value', '');
		equal(cb.checkboxrange('state'),		true,	"Checked");

		cb.checkboxrange('value', false);
		equal(cb.checkboxrange('state'),		null,	"Indeterminate");

		cb.checkboxrange('value', 0);
		equal(cb.checkboxrange('state'),		false,	"Unchecked");

		cb.checkboxrange('value', '?');
		equal(cb.checkboxrange('state'),		false,	"Unchanged");
	},

	"Events": {
		type:	'async',
		test:	function() {
			'use strict';
			
			expect(8);

			var cb = $('<input type="checkbox" value="13"/>').appendTo('body');
			cb.checkboxrange({
				state:		true,
				checked:	7,
				init:		function(state, value) {
								equal(state, true, "State checked");
								equal(value, 7, "Value checked");
								equal(this[0], cb[0], "Same object");
							},
				change:		function(state, value) {
								equal(state, null, "State indeterminate");
								equal(value, 13, "Value default");
								equal(this[0], cb[0], "Same object");
								
								start();
							}
			});

			equal(cb.val(), 7, "Before click");

			cb.click();
			
			equal(cb.val(), 13, "After click");
		}
	},
	
	"Form onchange": function() {
		'use strict';

		var form = $('<form/>').appendTo('body');

		var cb = $('<input type="checkbox"/>').appendTo(form);
		cb.checkboxrange({
			state:		true
		});

		var checked = cb.is(':checked'),
			determinate = cb.is(':determinate'),
			indeterminate = cb.is(':indeterminate');

		form.change(function() {
			checked = cb.is(':checked');
			determinate = cb.is(':determinate');
			indeterminate = cb.is(':indeterminate');
		});

		equal(true, checked, 'Initially checked')
		equal(true, determinate, 'Initially determinate')
		equal(false, indeterminate, 'Initially not indeterminate')

		cb.click();			

		equal(false, checked, 'After click, in form.onchange: not checked')
		equal(false, determinate, 'After click, in form.onchange: not determinate')
		equal(true, indeterminate, 'After click, in form.onchange: indeterminate')

		equal(false, cb.is(':checked'), 'After click, in form.onchange: same checked state as current')
		equal(false, cb.is(':determinate'), 'After click, in form.onchange: same determinate state as current')
		equal(true, cb.is(':indeterminate'), 'After click, in form.onchange: same indeterminate state as current')
	}
});