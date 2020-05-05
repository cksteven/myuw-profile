(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var template = "<style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #myuw-profile-login {\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    text-transform: uppercase;\n    text-decoration: none;\n    color: var( --myuw-profile-login-color, var(--myuw-primary-color, white) );\n    padding: 10px 13px;\n    font-weight: var(--myuw-profile-font-weight, 600);\n    letter-spacing: 0px;\n    font-size: 14px;\n    position: relative;\n    display: inline-block;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n  }\n\n  #myuw-profile-circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    align-self: center;\n    border-radius: 50%;\n    height: 42px;\n    width: 42px;\n    min-width: initial;\n    text-transform: uppercase;\n    text-align: center;\n    background: transparent;\n    border-color: transparent;\n    transition: background .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n  }\n\n  #myuw-profile-circle:hover,\n  #myuw-profile-login:hover {\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.12);\n  }\n\n  #myuw-profile-circle:focus,\n  #myuw-profile-nav a:focus,\n  #myuw-profile-nav p:focus {\n    outline: -webkit-focus-ring-color auto 5px;\n  }\n\n  #myuw-profile-circle-initial {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    align-self: center;\n    padding: 0;\n    margin: 0;\n    font-weight: var(--myuw-profile-font-weight, 300);\n    font-size: 18px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Roboto', Arial, sans-serif) );\n    background-color: var( --myuw-profile-background-color, #fb686d);\n    user-select: none;\n    color: white;\n    text-transform: capitalize;\n    border-radius: 50%;\n    margin: 0;\n    overflow: hidden;\n    position: relative;\n    height: 34px;\n    width: 34px;\n    min-width: 34px;\n    font-size: 18px;\n  }\n\n  #myuw-profile-wrapper {\n    position: relative;\n    display: inline-block;\n    margin: 0 6px;\n  }\n\n  #myuw-profile-nav {\n    position: absolute;\n    top: 45px;\n    right: 0;\n    min-width: 320px;\n    color: black;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    z-index: 101;\n    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    -moz-box-shadow:    0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    box-shadow:         0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n\n  #myuw-profile-nav[hidden] {\n    display: unset !important;\n    transform-origin: top right;\n    transform: scale(0);\n    opacity: 0;\n    visibility: hidden;\n    transition: visibility 0s, opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1), transform .25s cubic-bezier(0.0, 0.0, 0.2, 1);\n  }\n\n  #myuw-profile-nav p {\n    padding: 0;\n    margin: 0;\n  }\n\n  ::slotted(a),\n  ::slotted(p) {\n    transition: all .3s ease;\n    position: relative;\n    font-size: 15px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    padding: 3px 16px;\n    color: var(--myuw-menu-color, rgba(0,0,0,0.87));\n    text-decoration: none;\n    background-color: #f5f5f5;\n    border-bottom: 1px solid #e5e5e5;\n    user-select: none;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: 48px;\n    height: 48px;\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  /*\n     Styles need to be duplicated separate from ::slotted in order for\n     Firefox to do it's job\n   */\n  #myuw-profile-nav a,\n  #myuw-profile-nav p {\n    transition: all .3s ease;\n    position: relative;\n    font-size: 15px;\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    padding: 3px 16px;\n    color: var(--myuw-menu-color, rgba(0,0,0,0.87));\n    text-decoration: none;\n    background-color: #f5f5f5;\n    border-bottom: 1px solid #e5e5e5;\n    user-select: none;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: 48px;\n    height: 48px;\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  #myuw-profile-nav #myuw-profile-nav-user {\n    font-weight: 600;\n    text-transform: capitalize;\n    background-color: rgb(255,255,255);\n    border-bottom: none;\n  }\n\n  #myuw-profile-nav #myuw-profile-nav-user:hover {\n    background-color: rgb(255,255,255);\n  }\n\n  ::slotted(a:hover),\n  ::slotted(a:focus),\n  ::slotted(p:hover),\n  ::slotted(p:focus)  {\n    background-color: #ececec;\n  }\n\n  ::slotted(a:focus),\n  ::slotted(p:focus) {\n    outline: -webkit-focus-ring-color auto 5px;\n    z-index: 1;\n  }\n\n  #myuw-profile-nav a:hover,\n  #myuw-profile-nav a:focus,\n  #myuw-profile-nav p:hover,\n  #myuw-profile-nav p:focus {\n    background-color: #ececec;\n  }\n\n  #myuw-profile-backdrop {\n    display: block;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 99;\n  }\n\n  /* Don't let `display` styles override hidden attribute */\n  [hidden] {\n    display: none !important;\n  }\n\n  @media only screen and (max-width: 410px) {\n    #myuw-profile-nav {\n      min-width: 230px;\n    }\n  } </style> <a href=\"#\" id=\"myuw-profile-login\" hidden>Login</a> <div id=\"myuw-profile-backdrop\" hidden></div> <div id=\"myuw-profile-wrapper\" hidden> <button id=\"myuw-profile-circle\" aria-label=\"Profile menu\" aria-haspopup=\"true\" aria-controls=\"myuw-profile-nav\" aria-expanded=\"false\"> <p id=\"myuw-profile-circle-initial\"><i class=\"material-icons\">person</i></p> </button> <ul id=\"myuw-profile-nav\" role=\"menu\" tabindex=\"-1\" aria-labelledby=\"myuw-profile-circle\" hidden> <p id=\"myuw-profile-nav-user\"></p> <li role=\"menuitem\"> <slot name=\"nav-item\"></slot> </li> <li> <a id=\"myuw-profile-logout\" href=\"#\" role=\"menuitem\">Logout</a> </li> </ul> </div> ";

  var MyUWProfile =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWProfile, _HTMLElement);

    _createClass(MyUWProfile, null, [{
      key: "elementName",
      get: function get() {
        return 'myuw-profile';
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        return ['login-url', 'logout-url', 'background-color'];
      }
    }, {
      key: "template",
      get: function get() {
        if (this._template === undefined) {
          this._template = document.createElement('template');
          this._template.innerHTML = template;
        }

        return this._template;
      }
    }]);

    function MyUWProfile() {
      var _this;

      _classCallCheck(this, MyUWProfile);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWProfile).call(this));

      _this.attachShadow({
        mode: 'open'
      });

      _this.shadowRoot.appendChild(_this.constructor.template.content.cloneNode(true));

      _this.$login = _this.shadowRoot.getElementById('myuw-profile-login');
      _this.$logout = _this.shadowRoot.getElementById('myuw-profile-logout');
      _this.$backdrop = _this.shadowRoot.getElementById('myuw-profile-backdrop');
      _this.$button = _this.shadowRoot.getElementById('myuw-profile-circle');
      _this.$circle = _this.shadowRoot.getElementById('myuw-profile-circle-initial');
      _this.$nav = _this.shadowRoot.getElementById('myuw-profile-nav');
      _this.$displayName = _this.shadowRoot.getElementById('myuw-profile-nav-user');
      _this.$wrapper = _this.shadowRoot.getElementById('myuw-profile-wrapper');
      _this.contentSlotElement = _this.shadowRoot.querySelector('slot[name=nav-item]');
      _this.eventListeners = [{
        target: document,
        type: 'myuw-login',
        handler: function handler(event) {
          return _this.handleLogin(event);
        }
      }, {
        target: _this.$button,
        type: 'click',
        handler: function handler(event) {
          return _this.handleButtonClick(event);
        }
      }, {
        target: _this.$nav,
        type: 'click',
        handler: function handler(event) {
          return _this.handleNavClick(event);
        }
      }, {
        target: _assertThisInitialized(_this),
        type: 'keydown',
        handler: function handler(event) {
          return _this.handleKeydown(event);
        }
      }, {
        target: window,
        type: 'click',
        handler: function handler(event) {
          return _this.handleWindowClick(event);
        }
      }];

      _this.getFocusableElements();

      return _this;
    }
    /**
     * Build an array of the focusable elements within the profile menu, with the Logout link and profile button.
     *
     * @returns {Array<Element>}
     */


    _createClass(MyUWProfile, [{
      key: "getFocusableElements",
      value: function getFocusableElements() {
        var selector = "a[href]";
        var focusableElements = this.contentSlotElement.assignedElements({
          flatten: true
        }).reduce(function (agg, node) {
          node.setAttribute("role", "menuitem");

          if (node.matches(selector)) {
            agg.push(node);
          } else {
            node.querySelectorAll(selector).forEach(function (each) {
              return agg.push(each);
            });
          }

          return agg;
        }, []);
        focusableElements.push.apply(focusableElements, [this.$logout, this.$button]);
        return focusableElements;
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case 'login-url':
            this.$login.setAttribute('href', newValue);
            break;

          case 'logout-url':
            this.$logout.setAttribute('href', newValue);
            break;

          case 'background-color':
            this.$circle.style.backgroundColor = newValue;
            break;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.eventListeners.forEach(function (_ref) {
          var target = _ref.target,
              type = _ref.type,
              handler = _ref.handler;
          return target.addEventListener(type, handler);
        });
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.eventListeners.forEach(function (_ref2) {
          var target = _ref2.target,
              type = _ref2.type,
              handler = _ref2.handler;
          return target.removeEventListener(type, handler);
        });
      }
      /**
       * Add an on click event to profile bubble
       * We need to make sure that we stop propagation on
       * this event or else the window on click will always fire
       * and the menu will never open.
       */

    }, {
      key: "handleButtonClick",
      value: function handleButtonClick(event) {
        event.stopPropagation();
        this.toggleMenu();
      }
    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        switch (event.key) {
          default:
            return;
          // let unhandled keys propogate

          case 'Escape':
            this.closeMenu();
            break;

          case 'Tab':
            this.closeMenu();
            break;

          case 'ArrowDown':
            this.focusNext();
            break;

          case 'ArrowUp':
            this.focusPrevious();
            break;
        }

        event.stopPropagation();
      }
      /**
       * Focus the next item in menu, cycling around to the first
       */

    }, {
      key: "focusNext",
      value: function focusNext() {
        var focusableElements = this.getFocusableElements();
        var focusedElement = this.isSameNode(document.activeElement) ? this.shadowRoot.activeElement : document.activeElement;
        var focusedIndex = focusableElements.indexOf(focusedElement);

        if (focusedIndex === focusableElements.length - 1 || focusedIndex === -1) {
          focusableElements[0].focus();
        } else {
          focusableElements[focusedIndex + 1].focus();
        }
      }
      /**
       * Focus the previous item in menu, cycling around to the last
       */

    }, {
      key: "focusPrevious",
      value: function focusPrevious() {
        var focusableElements = this.getFocusableElements();
        var focusedElement = this.isSameNode(document.activeElement) ? this.shadowRoot.activeElement : document.activeElement;
        var focusedIndex = focusableElements.indexOf(focusedElement);

        if (focusedIndex === 0 || focusedIndex === -1) {
          focusableElements[focusableElements.length - 1].focus();
        } else {
          focusableElements[focusedIndex - 1].focus();
        }
      }
    }, {
      key: "handleLogin",
      value: function handleLogin(event) {
        if (!event || !event.detail || !event.detail.person) {
          this.showLoginButton();
          return;
        }

        var person = event.detail.person;

        if (!person.firstName) {
          this.$displayName.hidden = true;
          this.$circle.innerHTML = '<i class="material-icons">person</i>';
          this.showProfileBubble();
          return;
        }

        this.$displayName.textContent = person.firstName;
        this.$displayName.hidden = false;
        this.$circle.textContent = person.firstName.substring(0, 1);
        this.showProfileBubble();
      }
      /**
       * Add an on click event to the profile nav menu.
       * We need to do this in order to stop the propagation
       * of click events on the menu specifically.
       * If a user clicks on the nav menu, the window on click
       * event will not fire, and it will not close the nav menu
       */

    }, {
      key: "handleNavClick",
      value: function handleNavClick(event) {
        event.stopPropagation();
      }
      /**
       * Handle click at the window scope
       * This allows us to close the menu if the user clicks anywhere but on the menu.
       */

    }, {
      key: "handleWindowClick",
      value: function handleWindowClick(event) {
        this.closeMenu();
      }
    }, {
      key: "openMenu",
      value: function openMenu() {
        this.$nav.hidden = false;
        this.$backdrop.hidden = false;
        this.$nav.focus();
        this.$button.setAttribute('aria-expanded', 'true');
      }
    }, {
      key: "closeMenu",
      value: function closeMenu() {
        this.$nav.hidden = true;
        this.$backdrop.hidden = true;
        this.$nav.blur();
        this.$button.setAttribute('aria-expanded', 'false');
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu() {
        if (this.$nav.hidden) {
          this.openMenu();
        } else {
          this.closeMenu();
        }
      }
    }, {
      key: "showLoginButton",
      value: function showLoginButton() {
        // Show Login Button
        this.$login.hidden = false; // Hide profile Circle

        this.$wrapper.hidden = true;
      }
    }, {
      key: "showProfileBubble",
      value: function showProfileBubble() {
        // Hide login button
        this.$login.hidden = true; // Show Profile circle

        this.$wrapper.hidden = false;
      }
    }]);

    return MyUWProfile;
  }(_wrapNativeSuper(HTMLElement));

  if (customElements.get(MyUWProfile.elementName) === undefined) {
    customElements.define(MyUWProfile.elementName, MyUWProfile);
  }

}());