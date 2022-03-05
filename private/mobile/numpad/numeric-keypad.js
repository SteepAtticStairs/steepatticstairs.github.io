var numPad = (function(){
	var self;

	var inputEl;
	var numPadEl;

	var keys = [7,8,9,4,5,6,1,2,3,0,'.','Del','Ok','Cancel'];

	var initialValue;

	function init() {
		self = this;

		createKeyPad();

		bindEvents();
	}

	function createKeyPad() {
		numPadEl = document.createElement('ul');
		numPadEl.setAttribute('id', 'numeric-keypad');
		numPadEl.className = 'numeric-keypad';

		for (var i=0; i<keys.length;i++) {
			var numPadKeyEl = document.createElement('li');
			numPadKeyEl.className = 'numeric-keypad__key';

			if (keys[i] == 'Ok') {
				numPadKeyEl.classList.add('numeric-keypad__key--double');
			}

			var numPadButtonEl = document.createElement('button');
			numPadButtonEl.setAttribute('data-key', keys[i]);
			numPadButtonEl.className = 'numeric-keypad__button';

			numPadButtonEl.innerHTML = keys[i];

			numPadKeyEl.appendChild(numPadButtonEl);
			numPadEl.appendChild(numPadKeyEl);
		}

		console.log(numPadEl);

		document.body.appendChild(numPadEl);
	}

	function bindEvents() {
		var inputEls = document.querySelectorAll('[data-num-pad]');

		for (var i=0;i<inputEls.length;i++) {
			inputEls[i].addEventListener('focus', showNumPad, false);
		}

		var keys = numPadEl.querySelectorAll('[data-key]');

		for (var i=0; i<keys.length;i++) {
			keys[i].addEventListener('click', keyPress, false);
		}

		var confirm = numPadEl.querySelectorAll('[data-key="Ok"]');

		confirm[0].addEventListener('click', confirmValue, false);

		var cancel = numPadEl.querySelectorAll('[data-key="Cancel"]');

		cancel[0].addEventListener('click', cancelValue, false);
	}

	function showNumPad() {
		inputEl = this;

		initialValue = inputEl.value;

		numPadEl.style.top = (this.offsetTop + this.offsetHeight) + 'px';

		numPadEl.classList.add('numeric-keypad--show');
	}

	function hideNumPad() {
		numPadEl.classList.remove('numeric-keypad--show');
	}

	function keyPress(e) {
		e.preventDefault();

		var key = this.getAttribute('data-key');

		var currentInput = inputEl.value;

		if (key == '.') {
			if (currentInput.indexOf('.') !== -1) {

				return;
			}
		}

		if (key == 'Del') {
			if (inputEl.value.length) {
				inputEl.value = inputEl.value.substr(0,inputEl.value.length-1);
			}

			return;
		}

		var inputValue = currentInput+key;

		inputEl.value = inputValue;

		

        function stringToHash(string) {

            var hash = 0;

            if (string.length == 0) return hash;

            for (i = 0; i < string.length; i++) {
                char = string.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }

            return hash;
        }

		function SHA1(msg) {
            function rotate_left(n, s) { var t4 = (n << s) | (n >>> (32 - s)); return t4; }; function lsb_hex(val) {
                var str = ''; var i; var vh; var vl; for (i = 0; i <= 6; i += 2) { vh = (val >>> (i * 4 + 4)) & 0x0f; vl = (val >>> (i * 4)) & 0x0f; str += vh.toString(16) + vl.toString(16); }
                return str;
            }; function cvt_hex(val) {
                var str = ''; var i; var v; for (i = 7; i >= 0; i--) { v = (val >>> (i * 4)) & 0x0f; str += v.toString(16); }
                return str;
            }; function Utf8Encode(string) {
                string = string.replace(/\r\n/g, '\n'); var utftext = ''; for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n); if (c < 128) { utftext += String.fromCharCode(c); }
                    else if ((c > 127) && (c < 2048)) { utftext += String.fromCharCode((c >> 6) | 192); utftext += String.fromCharCode((c & 63) | 128); }
                    else { utftext += String.fromCharCode((c >> 12) | 224); utftext += String.fromCharCode(((c >> 6) & 63) | 128); utftext += String.fromCharCode((c & 63) | 128); }
                }
                return utftext;
            }; var blockstart; var i, j; var W = new Array(80); var H0 = 0x67452301; var H1 = 0xEFCDAB89; var H2 = 0x98BADCFE; var H3 = 0x10325476; var H4 = 0xC3D2E1F0; var A, B, C, D, E; var temp; msg = Utf8Encode(msg); var msg_len = msg.length; var word_array = new Array(); for (i = 0; i < msg_len - 3; i += 4) { j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3); word_array.push(j); }
            switch (msg_len % 4) { case 0: i = 0x080000000; break; case 1: i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000; break; case 2: i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000; break; case 3: i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80; break; }
            word_array.push(i); while ((word_array.length % 16) != 14) word_array.push(0); word_array.push(msg_len >>> 29); word_array.push((msg_len << 3) & 0x0ffffffff); for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
                for (i = 0; i < 16; i++)W[i] = word_array[blockstart + i]; for (i = 16; i <= 79; i++)W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1); A = H0; B = H1; C = H2; D = H3; E = H4; for (i = 0; i <= 19; i++) { temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
                for (i = 20; i <= 39; i++) { temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
                for (i = 40; i <= 59; i++) { temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
                for (i = 60; i <= 79; i++) { temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
                H0 = (H0 + A) & 0x0ffffffff; H1 = (H1 + B) & 0x0ffffffff; H2 = (H2 + C) & 0x0ffffffff; H3 = (H3 + D) & 0x0ffffffff; H4 = (H4 + E) & 0x0ffffffff;
            }
            var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4); return temp.toLowerCase();
        }

        if (key == 'Ok') {
			// removes the "Ok" from the end of the password
			var betterInputValue = inputValue.slice(0, -2);
			console.log(betterInputValue);

			// hashes the output from the keypad
            var keypadPassHash = SHA1(betterInputValue);
            console.log(keypadPassHash);

            if (keypadPassHash == "61c37bca5b6af92ed5f07558c75d9325ecbc65e2") {
                window.location.href = '/private/private-home.html';
            } else {
                window.location.href = '/private/mobile/password-wrong.html';
            }

        }

		return;
	}

	function confirmValue(e) {
		e.preventDefault();

		hideNumPad();

		confirmValueCallback(inputEl);
	}

	function confirmValueCallback(el) {
		console.log('default confirm value callback');
	}

	function cancelValue(e) {
		e.preventDefault();

		hideNumPad();

		inputEl.value = initialValue;

		cancelValueCallback(inputEl);
	}

	function cancelValueCallback(e) {
		console.log('default cancel value callback');
	}

	return {
		init: init
	}
}());