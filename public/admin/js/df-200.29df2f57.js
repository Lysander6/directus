(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-200","df-2","df-3"],{9686:function(a,t,e){"use strict";function r(a){return function(t,e){var r=String(t),i=e||{},n=r.match(a.matchPattern);if(!n)return null;var u=n[0],d=r.match(a.parsePattern);if(!d)return null;var l=a.valueCallback?a.valueCallback(d[0]):d[0];return l=i.valueCallback?i.valueCallback(l):l,{value:l,rest:r.slice(u.length)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,a.exports=t.default},b028:function(a,t,e){"use strict";function r(a){return function(t,e){var r=String(t),u=e||{},d=u.width,l=d&&a.matchPatterns[d]||a.matchPatterns[a.defaultMatchWidth],f=r.match(l);if(!f)return null;var s,o=f[0],c=d&&a.parsePatterns[d]||a.parsePatterns[a.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?n(c,(function(a){return a.test(o)})):i(c,(function(a){return a.test(o)})),s=a.valueCallback?a.valueCallback(s):s,s=u.valueCallback?u.valueCallback(s):s,{value:s,rest:r.slice(o.length)}}}function i(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function n(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,a.exports=t.default},d104:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(e("9686")),i=n(e("b028"));function n(a){return a&&a.__esModule?a:{default:a}}var u=/^(\d+)(th|st|nd|rd)?/i,d=/\d+/i,l={narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},f={any:[/^(f\.Kr\.|e\.Kr\.)/i]},s={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234] fjórðungur/i},o={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|februar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},m={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},h={narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},v={narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},b={narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},g={any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},p={ordinalNumber:(0,r.default)({matchPattern:u,parsePattern:d,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})},P=p;t.default=P,a.exports=t.default}}]);
//# sourceMappingURL=df-200.29df2f57.js.map