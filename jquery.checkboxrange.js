/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals jQuery */

/*!
 * CheckboxRange
 *
 * Copyright (c) 2015 Martijn W. van der Lee
 * Licensed under the MIT.
 */
/*
 * Use shift key on a range of checkboxes
 */

;(function($, undefined) {
	var pluginName = 'checkboxrange',
		defaults = {};

    function Plugin(checkboxes, options) {
        this.checkboxes = checkboxes;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend(Plugin.prototype, {
        _checkboxes: function() {
            return this.checkboxes.filter(':checkbox').add($(':checkbox', this.checkboxes));
        },

        init: function () {
            var self = this,
                lastIndex = null;

            self._checkboxes().on('click', function(e) {
                var checkboxes = self._checkboxes(),
                    index = checkboxes.index(this);

                if (lastIndex !== null && e.shiftKey) {
                    checkboxes
                        .slice(Math.min(lastIndex, index), Math.max(lastIndex, index) + 1)
                        .prop('checked', $(this).is(':checked'));
                } else if (lastIndex !== null && e.altKey) {
                    checkboxes
                        .slice(Math.min(lastIndex, index), Math.max(lastIndex, index))
                        .each(function() {
                            $(this).prop('checked', !$(this).is(':checked'));
                        });
                } else {
                    lastIndex = index;
                }
            });
        }
    });

	$.fn[pluginName] = function (options) {
        var checkboxes = $(this).filter(':checkbox').add($(':checkbox', this));
        if (!$.data(checkboxes, "plugin_" + pluginName)) {
            $.data(checkboxes, "plugin_" + pluginName, new Plugin(checkboxes, options));
        }

		return this;
	};
})(jQuery);