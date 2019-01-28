(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ths = factory());
}(this, function () { 'use strict';

  /*!

  For personal projects, academic journals and non-profit organizations:

                     GNU LESSER GENERAL PUBLIC LICENSE
                         Version 3, 29 June 2007

   Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
   Everyone is permitted to copy and distribute verbatim copies
   of this license document, but changing it is not allowed.


    This version of the GNU Lesser General Public License incorporates
  the terms and conditions of version 3 of the GNU General Public
  License, supplemented by the additional permissions listed below.

    0. Additional Definitions.

    As used herein, "this License" refers to version 3 of the GNU Lesser
  General Public License, and the "GNU GPL" refers to version 3 of the GNU
  General Public License.

    "The Library" refers to a covered work governed by this License,
  other than an Application or a Combined Work as defined below.

    An "Application" is any work that makes use of an interface provided
  by the Library, but which is not otherwise based on the Library.
  Defining a subclass of a class defined by the Library is deemed a mode
  of using an interface provided by the Library.

    A "Combined Work" is a work produced by combining or linking an
  Application with the Library.  The particular version of the Library
  with which the Combined Work was made is also called the "Linked
  Version".

    The "Minimal Corresponding Source" for a Combined Work means the
  Corresponding Source for the Combined Work, excluding any source code
  for portions of the Combined Work that, considered in isolation, are
  based on the Application, and not on the Linked Version.

    The "Corresponding Application Code" for a Combined Work means the
  object code and/or source code for the Application, including any data
  and utility programs needed for reproducing the Combined Work from the
  Application, but excluding the System Libraries of the Combined Work.

    1. Exception to Section 3 of the GNU GPL.

    You may convey a covered work under sections 3 and 4 of this License
  without being bound by section 3 of the GNU GPL.

    2. Conveying Modified Versions.

    If you modify a copy of the Library, and, in your modifications, a
  facility refers to a function or data to be supplied by an Application
  that uses the facility (other than as an argument passed when the
  facility is invoked), then you may convey a copy of the modified
  version:

     a) under this License, provided that you make a good faith effort to
     ensure that, in the event an Application does not supply the
     function or data, the facility still operates, and performs
     whatever part of its purpose remains meaningful, or

     b) under the GNU GPL, with none of the additional permissions of
     this License applicable to that copy.

    3. Object Code Incorporating Material from Library Header Files.

    The object code form of an Application may incorporate material from
  a header file that is part of the Library.  You may convey such object
  code under terms of your choice, provided that, if the incorporated
  material is not limited to numerical parameters, data structure
  layouts and accessors, or small macros, inline functions and templates
  (ten or fewer lines in length), you do both of the following:

     a) Give prominent notice with each copy of the object code that the
     Library is used in it and that the Library and its use are
     covered by this License.

     b) Accompany the object code with a copy of the GNU GPL and this license
     document.

    4. Combined Works.

    You may convey a Combined Work under terms of your choice that,
  taken together, effectively do not restrict modification of the
  portions of the Library contained in the Combined Work and reverse
  engineering for debugging such modifications, if you also do each of
  the following:

     a) Give prominent notice with each copy of the Combined Work that
     the Library is used in it and that the Library and its use are
     covered by this License.

     b) Accompany the Combined Work with a copy of the GNU GPL and this license
     document.

     c) For a Combined Work that displays copyright notices during
     execution, include the copyright notice for the Library among
     these notices, as well as a reference directing the user to the
     copies of the GNU GPL and this license document.

     d) Do one of the following:

         0) Convey the Minimal Corresponding Source under the terms of this
         License, and the Corresponding Application Code in a form
         suitable for, and under terms that permit, the user to
         recombine or relink the Application with a modified version of
         the Linked Version to produce a modified Combined Work, in the
         manner specified by section 6 of the GNU GPL for conveying
         Corresponding Source.

         1) Use a suitable shared library mechanism for linking with the
         Library.  A suitable mechanism is one that (a) uses at run time
         a copy of the Library already present on the user's computer
         system, and (b) will operate properly with a modified version
         of the Library that is interface-compatible with the Linked
         Version.

     e) Provide Installation Information, but only if you would otherwise
     be required to provide such information under section 6 of the
     GNU GPL, and only to the extent that such information is
     necessary to install and execute a modified version of the
     Combined Work produced by recombining or relinking the
     Application with a modified version of the Linked Version. (If
     you use option 4d0, the Installation Information must accompany
     the Minimal Corresponding Source and Corresponding Application
     Code. If you use option 4d1, you must provide the Installation
     Information in the manner specified by section 6 of the GNU GPL
     for conveying Corresponding Source.)

    5. Combined Libraries.

    You may place library facilities that are a work based on the
  Library side by side in a single library together with other library
  facilities that are not Applications and are not covered by this
  License, and convey such a combined library under terms of your
  choice, if you do both of the following:

     a) Accompany the combined library with a copy of the same work based
     on the Library, uncombined with any other library facilities,
     conveyed under the terms of this License.

     b) Give prominent notice with the combined library that part of it
     is a work based on the Library, and explaining where to find the
     accompanying uncombined form of the same work.

    6. Revised Versions of the GNU Lesser General Public License.

    The Free Software Foundation may publish revised and/or new versions
  of the GNU Lesser General Public License from time to time. Such new
  versions will be similar in spirit to the present version, but may
  differ in detail to address new problems or concerns.

    Each version is given a distinguishing version number. If the
  Library as you received it specifies that a certain numbered version
  of the GNU Lesser General Public License "or any later version"
  applies to it, you have the option of following the terms and
  conditions either of that published version or of any later version
  published by the Free Software Foundation. If the Library as you
  received it does not specify a version number of the GNU Lesser
  General Public License, you may choose any version of the GNU Lesser
  General Public License ever published by the Free Software Foundation.

    If the Library as you received it specifies that a proxy can decide
  whether future versions of the GNU Lesser General Public License shall
  apply, that proxy's public statement of acceptance of any version is
  permanent authorization for you to choose that version for the
  Library.

  */

  /*!

  URL: https://github.com/julianshapiro/blast

  The MIT License (MIT)

  Copyright (c) 2014 Julian Shapiro

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


  */

  /*!

  URL: https://github.com/Tessmore/sbd

  The MIT License (MIT)

  Copyright (c) 2012 Fabiën Tesselaar

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  */

  /*!

  URL: https://github.com/padolsey/findAndReplaceDOMText

  This is free and unencumbered software released into the public domain.

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to <http://unlicense.org/>

  */

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

  // For a given (s,v), DetermineSpread returns the spread coefficient
  // required for the bell curve.
  function DetermineSpread(s, v) {
    if (s <= 0) {
      throw "marker.s must be > 0";
    }

    if (v >= 1 || v <= 0) {
      throw "marker.spread.v must be between 0 and 1";
    }

    return -s * s / Math.log(v);
  }

  function Distribution(s, sentencePos, spread) {
    return Math.exp(-Math.pow(s - sentencePos, 2) / spread);
  } // CumulativeDistribution returns the max value for a given s
  // produced by all marker's distributions


  function CumulativeDistribution(s, markers) {
    var maxShade = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var m = _step.value;
        var shade = m.distribution(s);

        if (shade > maxShade) {
          maxShade = shade;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return maxShade;
  } // CalculateFractionalS returns a (potentially fractional) s value for currentY
  // which using the same proportion compared in y-space.


  function CalculateFractionalS(leftS, leftY, rightS, rightY, currentY, resolution) {
    if (currentY < leftY || currentY - 0.5 * resolution > rightY) {
      throw "currentY out of bounds";
    }

    if (currentY === leftY) {
      return leftS;
    }

    if (currentY === rightY) {
      return rightS;
    } // current Y is in between left Y and right Y


    var frac = (currentY - leftY) / (rightY - leftY);
    return frac * (rightS - leftS) + leftS;
  }

  var Gutter =
  /*#__PURE__*/
  function () {
    function Gutter(dataset) {
      _classCallCheck(this, Gutter);

      if (dataset.debug === 'true') {
        this.debug = true;
      } else {
        this.debug = false;
      }

      if (dataset.resolution === undefined) {
        this.resolution = 1.0;
      } else {
        this.resolution = parseFloat(dataset.resolution);

        if (this.resolution < 1) {
          throw "resolution must be greater than 1";
        }
      }

      if (dataset.merge === 'true') {
        this.merge = true;
      } else {
        this.merge = false;
      }

      if (dataset.width === undefined) {
        this.width = 2.5;
      } else {
        this.width = parseFloat(dataset.width);
      }

      if (dataset.gap === undefined) {
        this.gap = 0.0;
      } else {
        this.gap = parseFloat(dataset.gap);
      }

      if (dataset.margin === undefined) {
        this.margin = 0.0;
      } else {
        this.margin = parseFloat(dataset.margin);
      }

      if (dataset.padding === undefined) {
        this.padding = 0.0;
      } else {
        this.padding = parseFloat(dataset.padding);
      }

      if (dataset.placement === undefined) {
        this.placement = 'left';
      } else {
        this.placement = dataset.placement;

        if (this.placement !== 'left' && this.placement !== 'right') {
          throw "resolution must be 'left' or 'right";
        }
      }

      if (dataset.tags !== undefined) {
        this.tags = dataset.tags.split(',');
      }

      if (dataset.labels !== undefined) {
        this.labels = dataset.labels.split(','); // TODO: Implement rotated text on top of canvas
      }

      if (dataset.baseline === undefined) {
        this.baseline = Array(this.tags.length).fill(0.0);
      } else {
        this.baseline = [];
        var splits = dataset.baseline.split(',');

        if (splits.length !== this.tags.length) {
          throw "number of baseline values must match number of tags";
        }

        for (var sp = 0; sp < splits.length; sp++) {
          var val = splits[sp].endsWith('%') ? parseFloat(splits[sp]) / 100.0 : parseFloat(splits[sp]);

          if (isNaN(val)) {
            this.baseline.push(0.0);
          } else {
            if (val >= 1.0) {
              throw "baseline value must not exceed 1.0 or 100%";
            }

            this.baseline.push(val);
          }
        }
      }

      this.sentences = [];
      this.markers = {}; // key:tag, value: array of markers

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var t = _step.value;
          this.markers[t] = [];
        } // Colors

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (dataset.color === undefined) {
        this.color = Array(this.tags.length).fill('black');
      } else {
        var colors = dataset.color.split(',');

        if (colors.length === 1) {
          if (colors[0] === '') {
            colors[0] = 'black';
          }

          this.color = Array(this.tags.length).fill(colors[0]);
        } else {
          if (colors.length !== this.tags.length) {
            throw "number of color values must match number of tags";
          }

          this.color = colors;
        }
      }
    } // order returns the index of a particular tag.


    _createClass(Gutter, [{
      key: "order",
      value: function order(tag) {
        for (var i = 0; i < this.tags.length; i++) {
          if (this.tags[i] === tag) {
            return i;
          }
        }

        return null;
      } // addSentence will append a sentence object to the gutter.
      // It will return the index in the array.

    }, {
      key: "addSentence",
      value: function addSentence(top, bottom, offset) {
        return this.sentences.push(new Sentence(top + offset, bottom + offset)) - 1;
      } // closestSentence will return the sentence index that is closest to a particular y-value.
      // If multiple sentences are equal, then return the largest the sentence with largest shade value.

    }, {
      key: "closestSentence",
      value: function closestSentence(tag, yPos) {
        var closestIndex = null;
        var closestDistance = null;
        var highestShade = null;

        for (var s = 0; s < this.sentences.length; s++) {
          var sentence = this.sentences[s];
          var distance = Math.abs(sentence.middle - yPos);

          if (closestIndex === null) {
            closestIndex = s;
            closestDistance = distance;
            highestShade = sentence.shadeValue(tag);
            continue;
          }

          if (distance > closestDistance) {
            return closestIndex; // Increasing sentence made distance further
          }

          var shadeValue = sentence.shadeValue(tag);

          if (distance < closestDistance || distance === closestDistance && shadeValue > highestShade) {
            closestIndex = s;
            closestDistance = distance;
            highestShade = shadeValue;
          }
        }

        return closestIndex;
      }
    }, {
      key: "addMarker",
      value: function addMarker(marker) {
        var tag = marker.tag;

        if (this.markers.hasOwnProperty(tag)) {
          this.markers[tag].push(marker);
        }
      }
    }, {
      key: "averageGap",
      value: function averageGap() {
        if (this.sentences.length < 2) {
          return 0;
        }
      }
    }]);

    return Gutter;
  }();

  var Sentence =
  /*#__PURE__*/
  function () {
    function Sentence(top, bottom) {
      _classCallCheck(this, Sentence);

      this.top = top;
      this.bottom = bottom;
      this.middle = 0.5 * (this.top + this.bottom);
      this.shadeValues = {}; // key:tag, value: shade value
    }

    _createClass(Sentence, [{
      key: "top",
      value: function top() {
        return this.top;
      }
    }, {
      key: "middle",
      value: function middle() {
        return this.middle;
      }
    }, {
      key: "bottom",
      value: function bottom() {
        return this.bottom;
      } // addShadeValue stores the sentences's shade value for a given tag.

    }, {
      key: "addShadeValue",
      value: function addShadeValue(tag, shadeValue) {
        this.shadeValues[tag] = shadeValue;
      } // shadeValue returns the sentence's shade value for a given tag.

    }, {
      key: "shadeValue",
      value: function shadeValue(tag) {
        if (this.shadeValues.hasOwnProperty(tag)) {
          return this.shadeValues[tag];
        }

        return null;
      }
    }]);

    return Sentence;
  }();

  var Marker =
  /*#__PURE__*/
  function () {
    function Marker(sentenceNo, dataset) {
      _classCallCheck(this, Marker);

      // data-tag means this span is related to a particular vertical strip as defined by the parent div's data-order.
      // data-max = maximum darkness. 90=90%
      // data-limit=3s means that the particular marker's gradient only spans +/- 3 sentences from position of marker
      // However the gutter must not exceed top and bottom of parent div/p, so the gradient must get cropped earlier than +/- 3 sentences.
      // data-spread is α in the equation on middle of page 2.
      if (dataset.tag === undefined) {
        // Required
        throw "tag required for marker";
      } else {
        this.tag = dataset.tag;
      }

      if (dataset.max === undefined) {
        this.max = 1.0;
      } else {
        this.max = dataset.max.endsWith('%') ? parseFloat(dataset.max) / 100.0 : parseFloat(dataset.max);

        if (this.max > 1.0) {
          throw "marker.max must not exceed 1.0 or 100%";
        }
      }

      if (dataset.limit === undefined) {
        this.limit = null;
      } else {
        this.limit = dataset.limit.endsWith('s') ? parseInt(dataset.limit) : parseInt(dataset.limit);

        if (this.limit === 0) ;
      }

      if (dataset.spread === undefined) {
        this.spread = null;
      } else {
        var parts = dataset.spread.split(",");
        var s = parseFloat(parts[0]);
        var val = parts[1].endsWith('%') ? parseFloat(parts[1]) / 100.0 : parseFloat(parts[1]);
        this.spread = DetermineSpread(s, val);
      }

      this.sentenceNo = sentenceNo; // Which sentence "owns" this marker
    } // distribution returns a "shade" value ranging from [0,1] for a give sentence no.


    _createClass(Marker, [{
      key: "distribution",
      value: function distribution(s) {
        if (this.limit !== null) {
          var lowerLimit = this.sentenceNo - this.limit;
          var upperLimit = this.sentenceNo + this.limit;

          if (lowerLimit < 0) {
            lowerLimit = 0;
          } // if (upperLimit > 0) {
          // 	upperLimit = 0
          // }


          lowerLimit = lowerLimit - 0.5;
          upperLimit = upperLimit + 0.5; // Enforce limits by clamping shade to 0

          if (s < lowerLimit || s > upperLimit) {
            return 0;
          }
        }

        if (this.spread === null) {
          // No spread value is specified
          if (this.sentenceNo - 0.5 < s && s < this.sentenceNo + 0.5) {
            return this.max;
          } else {
            return 0;
          }
        }

        var shade = Distribution(s, this.sentenceNo, this.spread);
        return this.max * shade;
      }
    }]);

    return Marker;
  }();

  var C = {
    GUTTER_CLASS: 'ths-gutter',
    MARKER_CLASS: 'ths-marker',
    SENTENCE_CLASS: 'ths-sentence',
    SENTENCE_START: 'ths-sentence-start',
    SENTENCE_END: 'ths-sentence-end',
    CANVAS_CLASS: 'ths-canvas'
  };

  // It deletes out the artificial spans that were created to detect the positon of the sentences.

  function RemoveSpan(node) {
    for (var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      classNames[_key - 1] = arguments[_key];
    }

    for (var _i = 0; _i < classNames.length; _i++) {
      var className = classNames[_i];
      var potentialSpan = node.getElementsByClassName(className);

      for (var i = potentialSpan.length - 1; i >= 0; i--) {
        var ps = potentialSpan[i];

        if (ps.tagName === 'SPAN') {
          // Remove span See: https://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
          var parent = ps.parentNode;

          while (ps.firstChild) {
            parent.insertBefore(ps.firstChild, ps);
          }

          parent.removeChild(ps);
        }
      }
    }

    node.normalize();
  }

  function RemoveCanvas() {
    var canvases = document.body.getElementsByClassName(C.CANVAS_CLASS);

    for (var i = canvases.length - 1; i >= 0; i--) {
      var c = canvases[i];
      var parent = c.parentNode;
      parent.removeChild(c);
    }
  }

  function ResetPadding(node, placement, gutterWidth) {
    if (placement === 'left') {
      var paddingLeft = parseFloat(window.getComputedStyle(node).paddingLeft);
      node.style.paddingLeft = paddingLeft - gutterWidth + 'px';
    } else {
      var paddingRight = parseFloat(window.getComputedStyle(node).paddingRight);
      node.style.paddingRight = paddingRight - gutterWidth + 'px';
    }
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var findAndReplaceDOMText = createCommonjsModule(function (module) {
  /**
   * findAndReplaceDOMText v 0.4.6
   * @author James Padolsey http://james.padolsey.com
   * @license http://unlicense.org/UNLICENSE
   *
   * Matches the text of a DOM node against a regular expression
   * and replaces each match (or node-separated portions of the match)
   * in the specified element.
   */
   (function (root, factory) {
       if (module.exports) {
           // Node/CommonJS
           module.exports = factory();
       } else {
           // Browser globals
           root.findAndReplaceDOMText = factory();
       }
   }(commonjsGlobal, function factory() {

  	var PORTION_MODE_RETAIN = 'retain';
  	var PORTION_MODE_FIRST = 'first';

  	var doc = document;
  	var hasOwn = {}.hasOwnProperty;

  	function escapeRegExp(s) {
  		return String(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  	}

  	function exposed() {
  		// Try deprecated arg signature first:
  		return deprecated.apply(null, arguments) || findAndReplaceDOMText.apply(null, arguments);
  	}

  	function deprecated(regex, node, replacement, captureGroup, elFilter) {
  		if ((node && !node.nodeType) && arguments.length <= 2) {
  			return false;
  		}
  		var isReplacementFunction = typeof replacement == 'function';

  		if (isReplacementFunction) {
  			replacement = (function(original) {
  				return function(portion, match) {
  					return original(portion.text, match.startIndex);
  				};
  			}(replacement));
  		}

  		// Awkward support for deprecated argument signature (<0.4.0)
  		var instance = findAndReplaceDOMText(node, {

  			find: regex,

  			wrap: isReplacementFunction ? null : replacement,
  			replace: isReplacementFunction ? replacement : '$' + (captureGroup || '&'),

  			prepMatch: function(m, mi) {

  				// Support captureGroup (a deprecated feature)

  				if (!m[0]) throw 'findAndReplaceDOMText cannot handle zero-length matches';

  				if (captureGroup > 0) {
  					var cg = m[captureGroup];
  					m.index += m[0].indexOf(cg);
  					m[0] = cg;
  				}

  				m.endIndex = m.index + m[0].length;
  				m.startIndex = m.index;
  				m.index = mi;

  				return m;
  			},
  			filterElements: elFilter
  		});

  		exposed.revert = function() {
  			return instance.revert();
  		};

  		return true;
  	}

  	/**
  	 * findAndReplaceDOMText
  	 *
  	 * Locates matches and replaces with replacementNode
  	 *
  	 * @param {Node} node Element or Text node to search within
  	 * @param {RegExp} options.find The regular expression to match
  	 * @param {String|Element} [options.wrap] A NodeName, or a Node to clone
  	 * @param {String} [options.wrapClass] A classname to append to the wrapping element
  	 * @param {String|Function} [options.replace='$&'] What to replace each match with
  	 * @param {Function} [options.filterElements] A Function to be called to check whether to
  	 *	process an element. (returning true = process element,
  	 *	returning false = avoid element)
  	 */
  	function findAndReplaceDOMText(node, options) {
  		return new Finder(node, options);
  	}

  	exposed.NON_PROSE_ELEMENTS = {
  		br:1, hr:1,
  		// Media / Source elements:
  		script:1, style:1, img:1, video:1, audio:1, canvas:1, svg:1, map:1, object:1,
  		// Input elements
  		input:1, textarea:1, select:1, option:1, optgroup: 1, button:1
  	};

  	exposed.NON_CONTIGUOUS_PROSE_ELEMENTS = {

  		// Elements that will not contain prose or block elements where we don't
  		// want prose to be matches across element borders:

  		// Block Elements
  		address:1, article:1, aside:1, blockquote:1, dd:1, div:1,
  		dl:1, fieldset:1, figcaption:1, figure:1, footer:1, form:1, h1:1, h2:1, h3:1,
  		h4:1, h5:1, h6:1, header:1, hgroup:1, hr:1, main:1, nav:1, noscript:1, ol:1,
  		output:1, p:1, pre:1, section:1, ul:1,
  		// Other misc. elements that are not part of continuous inline prose:
  		br:1, li: 1, summary: 1, dt:1, details:1, rp:1, rt:1, rtc:1,
  		// Media / Source elements:
  		script:1, style:1, img:1, video:1, audio:1, canvas:1, svg:1, map:1, object:1,
  		// Input elements
  		input:1, textarea:1, select:1, option:1, optgroup:1, button:1,
  		// Table related elements:
  		table:1, tbody:1, thead:1, th:1, tr:1, td:1, caption:1, col:1, tfoot:1, colgroup:1

  	};

  	exposed.NON_INLINE_PROSE = function(el) {
  		return hasOwn.call(exposed.NON_CONTIGUOUS_PROSE_ELEMENTS, el.nodeName.toLowerCase());
  	};

  	// Presets accessed via `options.preset` when calling findAndReplaceDOMText():
  	exposed.PRESETS = {
  		prose: {
  			forceContext: exposed.NON_INLINE_PROSE,
  			filterElements: function(el) {
  				return !hasOwn.call(exposed.NON_PROSE_ELEMENTS, el.nodeName.toLowerCase());
  			}
  		}
  	};

  	exposed.Finder = Finder;

  	/**
  	 * Finder -- encapsulates logic to find and replace.
  	 */
  	function Finder(node, options) {

  		var preset = options.preset && exposed.PRESETS[options.preset];

  		options.portionMode = options.portionMode || PORTION_MODE_RETAIN;

  		if (preset) {
  			for (var i in preset) {
  				if (hasOwn.call(preset, i) && !hasOwn.call(options, i)) {
  					options[i] = preset[i];
  				}
  			}
  		}

  		this.node = node;
  		this.options = options;

  		// Enable match-preparation method to be passed as option:
  		this.prepMatch = options.prepMatch || this.prepMatch;

  		this.reverts = [];

  		this.matches = this.search();

  		if (this.matches.length) {
  			this.processMatches();
  		}

  	}

  	Finder.prototype = {

  		/**
  		 * Searches for all matches that comply with the instance's 'match' option
  		 */
  		search: function() {

  			var match;
  			var matchIndex = 0;
  			var offset = 0;
  			var regex = this.options.find;
  			var textAggregation = this.getAggregateText();
  			var matches = [];
  			var self = this;

  			regex = typeof regex === 'string' ? RegExp(escapeRegExp(regex), 'g') : regex;

  			matchAggregation(textAggregation);

  			function matchAggregation(textAggregation) {
  				for (var i = 0, l = textAggregation.length; i < l; ++i) {

  					var text = textAggregation[i];

  					if (typeof text !== 'string') {
  						// Deal with nested contexts: (recursive)
  						matchAggregation(text);
  						continue;
  					}

  					if (regex.global) {
  						while (match = regex.exec(text)) {
  							matches.push(self.prepMatch(match, matchIndex++, offset));
  						}
  					} else {
  						if (match = text.match(regex)) {
  							matches.push(self.prepMatch(match, 0, offset));
  						}
  					}

  					offset += text.length;
  				}
  			}

  			return matches;

  		},

  		/**
  		 * Prepares a single match with useful meta info:
  		 */
  		prepMatch: function(match, matchIndex, characterOffset) {

  			if (!match[0]) {
  				throw new Error('findAndReplaceDOMText cannot handle zero-length matches');
  			}

  			match.endIndex = characterOffset + match.index + match[0].length;
  			match.startIndex = characterOffset + match.index;
  			match.index = matchIndex;

  			return match;
  		},

  		/**
  		 * Gets aggregate text within subject node
  		 */
  		getAggregateText: function() {

  			var elementFilter = this.options.filterElements;
  			var forceContext = this.options.forceContext;

  			return getText(this.node);

  			/**
  			 * Gets aggregate text of a node without resorting
  			 * to broken innerText/textContent
  			 */
  			function getText(node) {

  				if (node.nodeType === Node.TEXT_NODE) {
  					return [node.data];
  				}

  				if (elementFilter && !elementFilter(node)) {
  					return [];
  				}

  				var txt = [''];
  				var i = 0;

  				if (node = node.firstChild) do {

  					if (node.nodeType === Node.TEXT_NODE) {
  						txt[i] += node.data;
  						continue;
  					}

  					var innerText = getText(node);

  					if (
  						forceContext &&
  						node.nodeType === Node.ELEMENT_NODE &&
  						(forceContext === true || forceContext(node))
  					) {
  						txt[++i] = innerText;
  						txt[++i] = '';
  					} else {
  						if (typeof innerText[0] === 'string') {
  							// Bridge nested text-node data so that they're
  							// not considered their own contexts:
  							// I.e. ['some', ['thing']] -> ['something']
  							txt[i] += innerText.shift();
  						}
  						if (innerText.length) {
  							txt[++i] = innerText;
  							txt[++i] = '';
  						}
  					}
  				} while (node = node.nextSibling);

  				return txt;

  			}

  		},

  		/**
  		 * Steps through the target node, looking for matches, and
  		 * calling replaceFn when a match is found.
  		 */
  		processMatches: function() {

  			var matches = this.matches;
  			var node = this.node;
  			var elementFilter = this.options.filterElements;

  			var startPortion,
  				endPortion,
  				innerPortions = [],
  				curNode = node,
  				match = matches.shift(),
  				atIndex = 0, // i.e. nodeAtIndex
  				portionIndex = 0,
  				doAvoidNode,
  				nodeStack = [node];

  			out: while (true) {

  				if (curNode.nodeType === Node.TEXT_NODE) {

  					if (!endPortion && curNode.length + atIndex >= match.endIndex) {
  						// We've found the ending
  						// (Note that, in the case of a single portion, it'll be an
  						// endPortion, not a startPortion.)
  						endPortion = {
  							node: curNode,
  							index: portionIndex++,
  							text: curNode.data.substring(match.startIndex - atIndex, match.endIndex - atIndex),

  							// If it's the first match (atIndex==0) we should just return 0
  							indexInMatch: atIndex === 0 ? 0 : atIndex - match.startIndex,

  							indexInNode: match.startIndex - atIndex,
  							endIndexInNode: match.endIndex - atIndex,
  							isEnd: true
  						};

  					} else if (startPortion) {
  						// Intersecting node
  						innerPortions.push({
  							node: curNode,
  							index: portionIndex++,
  							text: curNode.data,
  							indexInMatch: atIndex - match.startIndex,
  							indexInNode: 0 // always zero for inner-portions
  						});
  					}

  					if (!startPortion && curNode.length + atIndex > match.startIndex) {
  						// We've found the match start
  						startPortion = {
  							node: curNode,
  							index: portionIndex++,
  							indexInMatch: 0,
  							indexInNode: match.startIndex - atIndex,
  							endIndexInNode: match.endIndex - atIndex,
  							text: curNode.data.substring(match.startIndex - atIndex, match.endIndex - atIndex)
  						};
  					}

  					atIndex += curNode.data.length;

  				}

  				doAvoidNode = curNode.nodeType === Node.ELEMENT_NODE && elementFilter && !elementFilter(curNode);

  				if (startPortion && endPortion) {

  					curNode = this.replaceMatch(match, startPortion, innerPortions, endPortion);

  					// processMatches has to return the node that replaced the endNode
  					// and then we step back so we can continue from the end of the
  					// match:

  					atIndex -= (endPortion.node.data.length - endPortion.endIndexInNode);

  					startPortion = null;
  					endPortion = null;
  					innerPortions = [];
  					match = matches.shift();
  					portionIndex = 0;

  					if (!match) {
  						break; // no more matches
  					}

  				} else if (
  					!doAvoidNode &&
  					(curNode.firstChild || curNode.nextSibling)
  				) {
  					// Move down or forward:
  					if (curNode.firstChild) {
  						nodeStack.push(curNode);
  						curNode = curNode.firstChild;
  					} else {
  						curNode = curNode.nextSibling;
  					}
  					continue;
  				}

  				// Move forward or up:
  				while (true) {
  					if (curNode.nextSibling) {
  						curNode = curNode.nextSibling;
  						break;
  					}
  					curNode = nodeStack.pop();
  					if (curNode === node) {
  						break out;
  					}
  				}

  			}

  		},

  		/**
  		 * Reverts ... TODO
  		 */
  		revert: function() {
  			// Reversion occurs backwards so as to avoid nodes subsequently
  			// replaced during the matching phase (a forward process):
  			for (var l = this.reverts.length; l--;) {
  				this.reverts[l]();
  			}
  			this.reverts = [];
  		},

  		prepareReplacementString: function(string, portion, match) {
  			var portionMode = this.options.portionMode;
  			if (
  				portionMode === PORTION_MODE_FIRST &&
  				portion.indexInMatch > 0
  			) {
  				return '';
  			}
  			string = string.replace(/\$(\d+|&|`|')/g, function($0, t) {
  				var replacement;
  				switch(t) {
  					case '&':
  						replacement = match[0];
  						break;
  					case '`':
  						replacement = match.input.substring(0, match.startIndex);
  						break;
  					case '\'':
  						replacement = match.input.substring(match.endIndex);
  						break;
  					default:
  						replacement = match[+t] || '';
  				}
  				return replacement;
  			});

  			if (portionMode === PORTION_MODE_FIRST) {
  				return string;
  			}

  			if (portion.isEnd) {
  				return string.substring(portion.indexInMatch);
  			}

  			return string.substring(portion.indexInMatch, portion.indexInMatch + portion.text.length);
  		},

  		getPortionReplacementNode: function(portion, match) {

  			var replacement = this.options.replace || '$&';
  			var wrapper = this.options.wrap;
  			var wrapperClass = this.options.wrapClass;

  			if (wrapper && wrapper.nodeType) {
  				// Wrapper has been provided as a stencil-node for us to clone:
  				var clone = doc.createElement('div');
  				clone.innerHTML = wrapper.outerHTML || new XMLSerializer().serializeToString(wrapper);
  				wrapper = clone.firstChild;
  			}

  			if (typeof replacement == 'function') {
  				replacement = replacement(portion, match);
  				if (replacement && replacement.nodeType) {
  					return replacement;
  				}
  				return doc.createTextNode(String(replacement));
  			}

  			var el = typeof wrapper == 'string' ? doc.createElement(wrapper) : wrapper;

   			if (el && wrapperClass) {
  				el.className = wrapperClass;
  			}

  			replacement = doc.createTextNode(
  				this.prepareReplacementString(
  					replacement, portion, match
  				)
  			);

  			if (!replacement.data) {
  				return replacement;
  			}

  			if (!el) {
  				return replacement;
  			}

  			el.appendChild(replacement);

  			return el;
  		},

  		replaceMatch: function(match, startPortion, innerPortions, endPortion) {

  			var matchStartNode = startPortion.node;
  			var matchEndNode = endPortion.node;

  			var precedingTextNode;
  			var followingTextNode;

  			if (matchStartNode === matchEndNode) {

  				var node = matchStartNode;

  				if (startPortion.indexInNode > 0) {
  					// Add `before` text node (before the match)
  					precedingTextNode = doc.createTextNode(node.data.substring(0, startPortion.indexInNode));
  					node.parentNode.insertBefore(precedingTextNode, node);
  				}

  				// Create the replacement node:
  				var newNode = this.getPortionReplacementNode(
  					endPortion,
  					match
  				);

  				node.parentNode.insertBefore(newNode, node);

  				if (endPortion.endIndexInNode < node.length) { // ?????
  					// Add `after` text node (after the match)
  					followingTextNode = doc.createTextNode(node.data.substring(endPortion.endIndexInNode));
  					node.parentNode.insertBefore(followingTextNode, node);
  				}

  				node.parentNode.removeChild(node);

  				this.reverts.push(function() {
  					if (precedingTextNode === newNode.previousSibling) {
  						precedingTextNode.parentNode.removeChild(precedingTextNode);
  					}
  					if (followingTextNode === newNode.nextSibling) {
  						followingTextNode.parentNode.removeChild(followingTextNode);
  					}
  					newNode.parentNode.replaceChild(node, newNode);
  				});

  				return newNode;

  			} else {
  				// Replace matchStartNode -> [innerMatchNodes...] -> matchEndNode (in that order)


  				precedingTextNode = doc.createTextNode(
  					matchStartNode.data.substring(0, startPortion.indexInNode)
  				);

  				followingTextNode = doc.createTextNode(
  					matchEndNode.data.substring(endPortion.endIndexInNode)
  				);

  				var firstNode = this.getPortionReplacementNode(
  					startPortion,
  					match
  				);

  				var innerNodes = [];

  				for (var i = 0, l = innerPortions.length; i < l; ++i) {
  					var portion = innerPortions[i];
  					var innerNode = this.getPortionReplacementNode(
  						portion,
  						match
  					);
  					portion.node.parentNode.replaceChild(innerNode, portion.node);
  					this.reverts.push((function(portion, innerNode) {
  						return function() {
  							innerNode.parentNode.replaceChild(portion.node, innerNode);
  						};
  					}(portion, innerNode)));
  					innerNodes.push(innerNode);
  				}

  				var lastNode = this.getPortionReplacementNode(
  					endPortion,
  					match
  				);

  				matchStartNode.parentNode.insertBefore(precedingTextNode, matchStartNode);
  				matchStartNode.parentNode.insertBefore(firstNode, matchStartNode);
  				matchStartNode.parentNode.removeChild(matchStartNode);

  				matchEndNode.parentNode.insertBefore(lastNode, matchEndNode);
  				matchEndNode.parentNode.insertBefore(followingTextNode, matchEndNode);
  				matchEndNode.parentNode.removeChild(matchEndNode);

  				this.reverts.push(function() {
  					precedingTextNode.parentNode.removeChild(precedingTextNode);
  					firstNode.parentNode.replaceChild(matchStartNode, firstNode);
  					followingTextNode.parentNode.removeChild(followingTextNode);
  					lastNode.parentNode.replaceChild(matchEndNode, lastNode);
  				});

  				return lastNode;
  			}
  		}

  	};

  	return exposed;

  }));
  });

  var characterRanges = {
    latinPunctuation: "–—′’'“″„\"(«.…¡¿′’'”″“\")».…!?",
    latinLetters: "\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"
  };
  var englishAbbreviations = ["al", "adj", "assn", "Ave", "BSc", "MSc", "Cell", "Ch", "Co", "cc", "Corp", "Dem", "Dept", "ed", "eg", "Eq", "Eqs", "est", "est", "etc", "Ex", "ext", // + number?
  "Fig", "fig", "Figs", "figs", "i.e", "ie", "Inc", "I.Q", // Added by me
  "inc", "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Sept", "Oct", "Nov", "Dec", "jr", "mi", "Miss", "Mrs", "Mr", "Ms", "Mol", "mt", "mts", "no", "Nos", "PhD", "MD", "BA", "MA", "MM", "pl", "pop", "pp", "Prof", "Dr", "pt", "Ref", "Refs", "Rep", "repr", "rev", "Sec", "Secs", "Sgt", "Col", "Gen", "Rep", "Sen", 'Gov', "Lt", "Maj", "Capt", "St", "Sr", "sr", "Jr", "jr", "Rev", "Sun", "Mon", "Tu", "Tue", "Tues", "Wed", "Th", "Thu", "Thur", "Thurs", "Fri", "Sat", "trans", "Univ", "Viz", "Vol", "vs", "v"];
  var Reg = {
    abbreviations: new RegExp(),
    innerWordPeriod: new RegExp("[" + characterRanges.latinLetters + "]\\.[" + characterRanges.latinLetters + "]", "ig")
  }; // Autogenerate regexp for common abbreviations. Once calculated, it doesn't need to
  // be calculated again.

  (function () {
    var regex1 = englishAbbreviations.map(function (abbr) {
      abbr = abbr.toLowerCase().replace('.', '\\.') + '\\.'; // Escape the periods

      return '(' + abbr + ')';
    }).join('|');
    Reg.abbreviations = new RegExp("[^" + characterRanges.latinLetters + ']' + regex1 + '[^' + characterRanges.latinLetters + "]", "ig");
  })();

  // character.

  function FindSentences(node, gutter) {
    var markerPos = transformMarkerNodes(node);
    encodePunctuation(node);
    findAndReplaceDOMText(node, {
      find: /(?=\S)(([.]{2,})?[^!?]+?([.。…!?]+|(?=\s+$)|$)(\s*[′’'”″“")»]+)*)/g,
      wrap: 'span',
      wrapClass: C.SENTENCE_CLASS,
      preset: 'prose'
    }); // Add the markers back after having removed them

    transformMarkerNodesBack(node, markerPos);
    decodePunctuation(node); // Create a span for the start and end character

    wrapOuterSentence(node);
    storeSentencePositions(node, gutter);
  } // storeSentencePositions will calculate the positions of each sentence node.
  // See: https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag


  function storeSentencePositions(node, gutter) {
    var yOffset = window.pageYOffset; // - el.ownerDocument.documentElement.clientTop

    var allSentenceNodes = node.getElementsByClassName(C.SENTENCE_CLASS);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = allSentenceNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var snode = _step.value;
        var starts = snode.getElementsByClassName(C.SENTENCE_START);
        var ends = snode.getElementsByClassName(C.SENTENCE_END);

        if (starts.length === 0 && ends.length === 0) {
          // Ignore this sentence. Pretend it doesn't exist
          continue;
        }

        if (starts.length === 0) {
          if (ends.length !== 0) {
            // Only end exists
            var e = ends[0].getBoundingClientRect();
            var sentenceNo = gutter.addSentence(e.top, e.bottom, yOffset);
            var markers = snode.getElementsByClassName(C.MARKER_CLASS);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = markers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var m = _step2.value;
                var mm = new Marker(sentenceNo, m.dataset);
                gutter.addMarker(mm);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } else {
          if (ends.length === 0) {
            // Only start exists
            var s = starts[0].getBoundingClientRect();

            var _sentenceNo = gutter.addSentence(s.top, s.bottom, yOffset);

            var _markers = snode.getElementsByClassName(C.MARKER_CLASS);

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _markers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _m = _step3.value;

                var _mm = new Marker(_sentenceNo, _m.dataset);

                gutter.addMarker(_mm);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          } else {
            // Both start and end exists
            var _s = starts[0].getBoundingClientRect();

            var _e = ends[0].getBoundingClientRect();

            var _sentenceNo2 = gutter.addSentence(_s.top, _e.bottom, yOffset);

            var _markers2 = snode.getElementsByClassName(C.MARKER_CLASS);

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = _markers2[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _m2 = _step4.value;

                var _mm2 = new Marker(_sentenceNo2, _m2.dataset);

                gutter.addMarker(_mm2);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } // transformMarkerNodes will remove marker nodes and replace them with some random text in their position.
  // Later, we will search for the text and replace them back with the marker node (after the
  // sentence detection is performed)


  function transformMarkerNodes(node) {
    var idToMarker = new Map();
    var markers = node.getElementsByClassName(C.MARKER_CLASS);

    for (var i = markers.length - 1; i >= 0; i--) {
      var m = markers[i];
      var randStr = '{{{' + (Math.random().toString(36) + '00000000000000000').slice(2, 16 + 2) + '}}}';
      var replacedNode = m.parentNode.replaceChild(document.createTextNode(randStr), m);
      idToMarker.set(randStr, replacedNode);
    }

    node.normalize();
    return idToMarker;
  } // transformMarkerNodesBack will undo the operation in transformMarkerNodes.
  // It will replace the text identifiers with the marker we had previously removed.


  function transformMarkerNodesBack(node, map) {
    findAndReplaceDOMText(node, {
      find: /{{{([\w\d]{16,}?)}}}/g,
      replace: function replace(match) {
        var replacement = map.get(match.text);

        if (replacement === undefined) {
          return '';
        }

        return replacement;
      }
    });
    node.normalize();
  }

  function encodePunctuation(node) {
    // WARNING: findAndReplaceDOMText seems to weirdly modify the text in the node, and not just
    // replace the periods with {{46}}!. This effects the sentence detection at the later step.
    // We must call normalize(): https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
    // Escape dots in abbreviations 
    findAndReplaceDOMText(node, {
      find: Reg.abbreviations,
      replace: function replace(match) {
        return match.text.replace(/\./g, "{{46}}");
      }
    }); // Escape words with dots in the inside

    findAndReplaceDOMText(node, {
      find: Reg.innerWordPeriod,
      replace: function replace(match) {
        return match.text.replace(/\./g, "{{46}}");
      }
    });
    node.normalize();
  }

  function decodePunctuation(node) {
    // Convert {{46}} back to '.'
    findAndReplaceDOMText(node, {
      find: /{{(\d{1,3})}}/g,
      replace: function replace(match) {
        return '.';
      }
    });
    node.normalize();
  } // wrapOuterSentence is used to wrap first and last character in a <span> to mark 
  // the start and end of a sentence.


  function wrapOuterSentence(node) {
    var sentences = node.getElementsByClassName(C.SENTENCE_CLASS);
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = sentences[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var s = _step5.value;
        // If the sentence is just a period, this process seems to fail.
        // It seems to nest the `end` inside the `start`.
        findAndReplaceDOMText(s, {
          find: /^(.?)/i,
          wrap: 'span',
          wrapClass: C.SENTENCE_START
        });
        findAndReplaceDOMText(s, {
          find: /(.?)$/i,
          wrap: 'span',
          wrapClass: C.SENTENCE_END
        });
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  }

  // The canvas can contain multiple strips.

  function CreateCanvas(node, top, width, height, placement, margin) {
    var viewportPos = node.getBoundingClientRect();
    var canv = document.createElement('canvas');
    canv.height = height;
    canv.width = width;
    canv.classList.add(C.CANVAS_CLASS);
    canv.style.position = 'absolute';
    canv.style.top = top + 'px';

    if (placement === 'left') {
      canv.style.left = viewportPos.left + window.pageXOffset + 'px';
      canv.style.marginLeft = margin + 'px';
    } else {
      canv.style.left = viewportPos.right + window.pageXOffset - canv.width + 'px';
      canv.style.marginRight = margin + 'px';
    } // We have to place the canvas on the document because with absolute positioning, the 'top'
    // value is based on the nearest positioned ancestor. This could mean document.body instead of
    // the node that contains the 'ths-gutter' class.
    // See: https://www.w3schools.com/css/css_positioning.asp


    document.body.appendChild(canv);
    return canv;
  }

  function AddGradient(canvas, shadeValues, resolution, tagIdx, width, gap, color, baseline, merge) {
    // Convert color to rgb format
    // See: https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes
    var d = document.createElement("zzz");
    d.style.color = color;
    document.body.appendChild(d);
    var components = window.getComputedStyle(d).color.slice(0, -1).slice(4).split(',');
    document.body.removeChild(d);

    var colorConv = function colorConv(alpha) {
      return 'rgba(' + components.join(',') + ',' + alpha + ')';
    };

    for (var j = 0; j < shadeValues.length; j++) {
      var shadeVal = shadeValues[j];
      shadeVal = Math.max(shadeVal - baseline, 0);
      var ctx = canvas.getContext("2d");
      ctx.lineWidth = 0;
      ctx.fillStyle = colorConv(shadeVal);
      var y = j * resolution;
      var x = 0.0;

      if (merge === false) {
        x = width * tagIdx + gap * tagIdx;
      }

      ctx.fillRect(x, y, width, resolution);
    }
  }

  function ShiftPadding(node, placement, gutterWidth) {
    if (placement === 'left') {
      var paddingLeft = parseFloat(window.getComputedStyle(node).paddingLeft);
      node.style.paddingLeft = paddingLeft + gutterWidth + 'px';
    } else {
      var paddingRight = parseFloat(window.getComputedStyle(node).paddingRight);
      node.style.paddingRight = paddingRight + gutterWidth + 'px';
    }
  }

  var refs = [];

  function Render(gutterNodes) {
    RemoveCanvas();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = gutterNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var gNode = _step.value;
        var gutter = new Gutter(gNode.dataset); // Clean up existing spans used to identify sentences (for resizing)

        RemoveSpan(gNode, C.SENTENCE_CLASS, C.SENTENCE_END, C.SENTENCE_START); // Calculate the gutter width

        var gutterWidth = 0.0;

        if (gutter.merge) {
          gutterWidth = gutter.width;
        } else {
          gutterWidth = gutter.tags.length * gutter.width + (gutter.tags.length - 1) * gutter.gap;
        }

        if (refs.indexOf(gutterNodes) !== -1) {
          ResetPadding(gNode, gutter.placement, gutterWidth + gutter.padding);
        } // Shift text in node by adding padding


        ShiftPadding(gNode, gutter.placement, gutterWidth + gutter.padding); // Find sentences

        FindSentences(gNode, gutter); // Create canvas for gutter

        var canvas = void 0;

        if (gutter.sentences.length !== 0) {
          var height = gutter.sentences[gutter.sentences.length - 1].bottom - gutter.sentences[0].top;
          canvas = CreateCanvas(gNode, gutter.sentences[0].top, gutterWidth, height, gutter.placement, gutter.margin);
        } else {
          // No sentences. Draw empty canvas?
          RemoveSpan(gNode, C.SENTENCE_CLASS, C.SENTENCE_END, C.SENTENCE_START);
          continue;
        } // Calculate shade distribution for each tag


        for (var tagIdx = 0; tagIdx < gutter.tags.length; tagIdx++) {
          var tag = gutter.tags[tagIdx];
          var stripMarkers = gutter.markers[tag]; // Calculate for each sentence, the shade value

          for (var s = 0; s < gutter.sentences.length; s++) {
            var sentence = gutter.sentences[s];
            sentence.addShadeValue(tag, CumulativeDistribution(s, stripMarkers));
          } // Range from min to max in y-axis


          var minY = gutter.sentences[0].top;
          var maxY = gutter.sentences[gutter.sentences.length - 1].bottom;
          var yRange = [];
          var currentY = minY;

          do {
            // Find closest sentence (s index) for current y-axis value
            var sIdx = gutter.closestSentence(tag, currentY + 0.5 * gutter.resolution);
            yRange.push(sIdx);
            currentY += gutter.resolution;
          } while (currentY <= maxY); // NB: It is possible for mid-point to exceed maxY
          // Perhaps add last value to the end if not equal to maxY
          // Obtain the y-axis position for 


          var sentenceIdxToY = {};
          var yToSentenceIdx = {};

          for (var y = 0; y < yRange.length; y++) {
            var sentenceIdx = yRange[y];
            var _sentence = gutter.sentences[sentenceIdx];
            sentenceIdxToY[sentenceIdx] = _sentence.middle;
            yToSentenceIdx[_sentence.middle] = sentenceIdx;
          }

          var midYValues = Object.values(sentenceIdxToY).sort(function (a, b) {
            return a - b;
          }); // Calculate shade values for each y value ranging from minY to maxY

          var shadeValues = [];
          currentY = minY;

          do {
            var yVal = currentY + 0.5 * gutter.resolution; // These are the y-axis values we are drawing rectangles for

            var _sentenceIdx = yToSentenceIdx[yVal];

            if (_sentenceIdx !== undefined) {
              shadeValues.push(CumulativeDistribution(_sentenceIdx, stripMarkers));
            } else {
              // Find the two s values that are on either side of yVal
              for (var j = 0; j < midYValues.length; j++) {
                var leftY = midYValues[j];
                var rightY = midYValues[j + 1];
                var leftS = yToSentenceIdx[leftY];
                var rightS = yToSentenceIdx[rightY];

                if (yVal < leftY) {
                  // Before first sentence
                  var sFrac = CalculateFractionalS(leftS - 0.5, currentY, leftS, leftY, yVal, gutter.resolution);
                  shadeValues.push(CumulativeDistribution(sFrac, stripMarkers));
                  break;
                }

                if (rightY === undefined && yVal > leftY) {
                  // After last sentence	
                  var _sFrac = CalculateFractionalS(leftS, leftY, leftS + 0.5, maxY, yVal, gutter.resolution);

                  shadeValues.push(CumulativeDistribution(_sFrac, stripMarkers));
                  break;
                } else if (yVal > leftY && yVal < rightY) {
                  var _sFrac2 = CalculateFractionalS(leftS, leftY, rightS, rightY, yVal, gutter.resolution);

                  shadeValues.push(CumulativeDistribution(_sFrac2, stripMarkers));
                  break;
                }
              }
            }

            currentY += gutter.resolution;
          } while (currentY <= maxY); // Draw gradient


          AddGradient(canvas, shadeValues, gutter.resolution, tagIdx, gutter.width, gutter.gap, gutter.merge ? gutter.color[0] : gutter.color[tagIdx], gutter.baseline[tagIdx], gutter.merge);
        }

        if (!gutter.debug) {
          RemoveSpan(gNode, C.SENTENCE_CLASS, C.SENTENCE_END, C.SENTENCE_START);
        } else {
          console.log(gutter);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (refs.indexOf(gutterNodes) === -1) {
      refs.push(gutterNodes);
    }
  } ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  // Automatically Execute


  document.addEventListener('DOMContentLoaded', function () {
    Render(document.getElementsByClassName("ths-gutter")); // Render 500ms after DOM is ready

    setTimeout(function () {
      Render(document.getElementsByClassName("ths-gutter"));
    }, 500); // Rerender after each image finishes loading

    var images = document.images;

    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("load", function () {
        Render(document.getElementsByClassName("ths-gutter"));
      });
    } // Render after a fixed time as a last resort (after 5 seconds)


    setTimeout(function () {
      Render(document.getElementsByClassName("ths-gutter"));
    }, 5000);
  });
  var onresizeTimer;

  window.onresize = function () {
    // Since we are placing the canvas in document.body, when you resize the window, it leaves the
    // canvas at the prior location until Render() is run. This has a bad effect so we Remove it.
    RemoveCanvas();

    if (onresizeTimer !== undefined) {
      clearTimeout(onresizeTimer);
    }

    onresizeTimer = setTimeout(function () {
      Render(document.getElementsByClassName("ths-gutter"));
      onresizeTimer = undefined;
    }, 50);
  };

  var main = {
    Render: Render
  };

  return main;

}));
