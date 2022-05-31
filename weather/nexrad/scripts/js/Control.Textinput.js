/* @preserve
 * Leaflet Control Textinput 1.0.0
 * https://github.com/perliedman/leaflet-control-textinput
 *
 * Copyright (c) 2012 sa3m (https://github.com/sa3m)
 * Copyright (c) 2018 Per Liedman
 * Copyright (c) 2020 Andeas Schrell
 * All rights reserved.
 */

this.L = this.L || {};
this.L.Control = this.L.Control || {};
this.L.Control.Textinput = (function (L) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var L__default = /*#__PURE__*/_interopDefaultLegacy(L);

  var Textinput = L__default['default'].Control.extend({
    options: {
      collapsed: true,
      expand: 'touch', // options: touch, click, anythingelse
      position: 'topright',
      placeholder: 'Eingabe',
      iconLabel: 'Eingabe beginnen...'
    },

    includes: L__default['default'].Evented.prototype || L__default['default'].Mixin.Events,

    initialize: function(options) {
      L__default['default'].Util.setOptions(this, options);
    },

    onAdd: function(map) {
      var className = 'leaflet-control-textinput',
        // div
        container = L__default['default'].DomUtil.create('a', className + ' leaflet-bar'),
        // button
        icon = L__default['default'].DomUtil.create('a', className + '-icon', container),
        form = (this._form = L__default['default'].DomUtil.create('div', className + '-form', container)),
        input;

      this._map = map;
      this._container = container;

      icon.innerHTML = '&nbsp;';
      icon.type = 'button';
      icon.setAttribute('aria-label', this.options.iconLabel);

      input = this._input = L__default['default'].DomUtil.create('input', '', form);
      input.type = 'text';
      input.value = this.options.query || '';
      input.placeholder = this.options.placeholder;
      L__default['default'].DomEvent.disableClickPropagation(input);

      L__default['default'].DomEvent.addListener(input, 'keydown', this._keydown, this);
      L__default['default'].DomEvent.addListener(
        input,
        'blur',
        function() {
          if (this.options.collapsed && !this._preventBlurCollapse) {
            this._collapse();
          }
          this._preventBlurCollapse = false;
        },
        this
      );

      if (this.options.collapsed) {
        if (this.options.expand === 'click') {
          L__default['default'].DomEvent.addListener(
            container,
            'click',
            function(e) {
              if (e.button === 0 && e.detail !== 2) {
                this._toggle();
              }
            },
            this
          );
        } else if (this.options.expand === 'touch') {
          L__default['default'].DomEvent.addListener(
            container,
            L__default['default'].Browser.touch ? 'touchstart mousedown' : 'mousedown',
            function(e) {
              this._toggle();
              e.preventDefault(); // mobile: clicking focuses the icon, so UI expands and immediately collapses
              e.stopPropagation();
            },
            this
          );
        } else {
          L__default['default'].DomEvent.addListener(container, 'mouseover', this._expand, this);
          L__default['default'].DomEvent.addListener(container, 'mouseout', this._collapse, this);
          this._map.on('movestart', this._collapse, this);
        }
      } else {
        this._expand();
        if (L__default['default'].Browser.touch) {
          L__default['default'].DomEvent.addListener(
            container,
            'touchstart',
            function() {
              this._textinput();
            },
            this
          );
        } else {
          L__default['default'].DomEvent.addListener(
            container,
            'click',
            function() {
              this._textinput();
            },
            this
          );
        }
      }

      L__default['default'].DomEvent.disableClickPropagation(container);

      return container;
    },

    setText: function(string) {
      this._input.value = string;
      return this;
    },

    _textinput: function() {
      this.fire('textinput', { text: this._input.value });
    },

    _toggle: function() {
      if (L__default['default'].DomUtil.hasClass(this._container, 'leaflet-control-textinput-expanded')) {
        //this._collapse();
        this._textinput();
      } else {
        this._expand();
      }
    },

    _expand: function() {
      L__default['default'].DomUtil.addClass(this._container, 'leaflet-control-textinput-expanded');
      this._input.select();
      this.fire('expand');
    },

    _collapse: function() {
      L__default['default'].DomUtil.removeClass(this._container, 'leaflet-control-textinput-expanded');
      L__default['default'].DomUtil.removeClass(this._container, 'leaflet-control-textinput-options-open');
      this._input.blur(); // mobile: keyboard shouldn't stay expanded
      this.fire('collapse');
    },

    _keydown: function(e) {

      switch (e.keyCode) {
        // Escape
        case 27:
          if (this.options.collapsed) {
            this._collapse();
          } else {
            this._clearResults();
          }
          break;
        // Enter
        case 13:
          this._textinput();
          break;
        default:
          return;
      }

      L__default['default'].DomEvent.preventDefault(e);
    }

  });

  function textinput(options) {
    return new Textinput(options);
  }

  L__default['default'].Util.extend(Textinput);

  L__default['default'].Util.extend(L__default['default'].Control, {
    Textinput: Textinput,
    textinput: textinput
  });

  return Textinput;

}(L));
//# sourceMappingURL=Control.Textinput.js.map
