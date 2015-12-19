jQuery Checkboxrange
===============
Version 1.1.2

Copyright &copy; 2013-2015 Martijn van der Lee.
MIT Open Source license applies.

Based on work by Chris Coyier (http://css-tricks.com/indeterminate-checkboxes/)

jQuery checkboxrange (indeterminate) checkbox with pseudo selectors and optional
value modification and .val() overwrite.

Features
--------
-	Simple syntax: `.checkboxrange()`
-	Options to set alternative values for true, false and null state.
-	Access using `val()` (when alternative values specified).
-	Set state using widget-like syntax `.checkboxrange('state', true/false/null)`;
-	`:checkboxrange`, `:indeterminate` and `:determinate` pseudo selectors included.
-	Indeterminate state can be set using `indeterminate="indeterminate"`
	attribute.
-	Alternative values can be set using `checkedvalue`, `uncheckedvalue` and
	`indeterminatevalue` attributes or options.
-	HTML attributes modified by the plugin.
-	Should support every major browser, including IE6.

Changelog
-----------
Version v1.1

-	Fixed memory leak on DOM node removal.
-	Fixed bug with click fall-through.
-	Adapted to jQueryUI widget.
-	Improvements to Unittest for FireFox.

Download
--------
jQuery v1.6.2 or higher required. (Will not work with v1.6.1 or before).

jQueryUI v1.8.0 or higher required.

Current version: https://github.com/vanderlee/checkboxrange/archive/master.zip

Sourcecode on Github: https://github.com/vanderlee/checkboxrange

Browser support
---------------
Tested with v1.0.5

-	Chrome 31
-	FireFox 25
-	Opera 17
-	Internet Explorer 10

Quick start
-----------
The following code quickly shows you how to use the checkboxrange plugins.

There are multiple ways to use checkboxrange, you should look at the included
examples to learn the way you prefer.

	<input type="checkbox" class="checkboxrange"/>
	<input type="checkbox" class="checkboxrange" checked="checked"/>
	<input type="checkbox" class="checkboxrange" indeterminate="1"/>

	<script>
		$(function() {
			$('.checkboxrange').checkboxrange({
				change: function(state, value) {
					console.log('Input:', this);
					console.log('Unknown?', state === null);
					console.log('Known?', state !== null);
					console.log('Checked?', state === true);
					console.log('Unhecked?', state === false);
				}
			});
		});
	</script>

Usage Notes
-----------
-	To set and read the state easily, `null` is used as the value for
	indeterminate checkboxrange inputs in various options, names and functions.

-	The `:checked` pseudo selector works on checkboxrange inputs.

	The indeterminate is treated as unchecked, so will return a `false` result
	when using the `:checked` pseudo selector.
	state is

Documentation
=============
`.checkboxrange(options)`
--------------------
Turn a normal `checkbox` input into a checkboxrange input.

### Options

-	`state`

>	`true` for checked, `false` for unchecked or `null` for undeterminate.

-	`value`

>	Set the value in order to set the state. Only works if values are specified
	for `checked`, `unchecked` and/or `indeterminate`.

-	`checked`

>	The value to return for checked state. If not specified, the value in the
	`value` attribute is returned.

-	`unchecked`

>	The value to return for unchecked state. If not specified, the value in the
	`value` attribute is returned.

-	`indeterminate`

>	The value to return for indeterminate state. If not specified, the value in
	the	`value` attribute is returned.


### Events

-	`init(state, value)`

>	Triggered upon initialization.
	State can be `true`, `false` or `null`. Value is the value as it would be
	returned from `.val()`.

-	`change(state, value)`

>	Triggered whenever the state changes.
	State can be `true`, `false` or `null`. Value is the value as it would be
	returned from `.val()`.


###	Methods

-	`state`

>	Either get or set the state of the checkbox. Uses `true` for checked,
	`false` for unchecked or `null` for indeterminate state.

-	`value`

>	Get the current value or set the state by specifying the value.
	Setting the value only works if you have specified values (either using
	expando attributes or options) for the different states.

`.val()`
--------
Overwrites the normal `val()` method for checkboxrange controls. Returns the value
or the value connected to the state if specified.
Behaviour for controls other that checkboxrange controls is unmodified.

`:checkboxrange` pseudo selector
---------------------------
Selects only checkboxrange inputs

`:determinate` pseudo selector
------------------------------
Selects only those checkboxrange inputs with a determinate (either checked or
unchecked) state.

`:indeterminate` pseudo selector
--------------------------------
Selects only those checkboxrange inputs with an indeterminate (neither checked
nor unchecked) state.

HTML attributes
---------------
You can control the behaviour of the checkboxrange input using HTML expando (non-
standard) attributes. Any current browser will handle these perfectly well.

	<input type="checkbox" indeterminate="indeterminate"
							checkedvalue="Yes"
							uncheckedvalue="No"
							indeterminatevalue="Maybe"/>

### `indeterminate="indeterminate"`
>	You can use a `indeterminate` attribute to specify the default state as such.

>	The plugin itself may set and remove this attribute as the state changes.

### `checkedvalue`
>	Sets the value returned if checked.

### `uncheckedvalue`
>	Sets the value returned if unchecked.

### `indeterminatevalue`
>	Sets the value returned if indeterminate.