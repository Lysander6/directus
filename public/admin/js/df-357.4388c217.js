(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-357","df-0","df-1","df-2","df-3","df-352","df-353","df-354","df-355","df-356"],{"146c":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a={lessThanXSeconds:{standalone:{one:"సెకను కన్నా తక్కువ",other:"{{count}} సెకన్ల కన్నా తక్కువ"},withPreposition:{one:"సెకను",other:"{{count}} సెకన్ల"}},xSeconds:{standalone:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"},withPreposition:{one:"ఒక సెకను",other:"{{count}} సెకన్ల"}},halfAMinute:{standalone:"అర నిమిషం",withPreposition:"అర నిమిషం"},lessThanXMinutes:{standalone:{one:"ఒక నిమిషం కన్నా తక్కువ",other:"{{count}} నిమిషాల కన్నా తక్కువ"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},xMinutes:{standalone:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాలు"},withPreposition:{one:"ఒక నిమిషం",other:"{{count}} నిమిషాల"}},aboutXHours:{standalone:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటలు"},withPreposition:{one:"సుమారు ఒక గంట",other:"సుమారు {{count}} గంటల"}},xHours:{standalone:{one:"ఒక గంట",other:"{{count}} గంటలు"},withPreposition:{one:"ఒక గంట",other:"{{count}} గంటల"}},xDays:{standalone:{one:"ఒక రోజు",other:"{{count}} రోజులు"},withPreposition:{one:"ఒక రోజు",other:"{{count}} రోజుల"}},aboutXWeeks:{standalone:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలు"},withPreposition:{one:"సుమారు ఒక వారం",other:"సుమారు {{count}} వారాలల"}},xWeeks:{standalone:{one:"ఒక వారం",other:"{{count}} వారాలు"},withPreposition:{one:"ఒక వారం",other:"{{count}} వారాలల"}},aboutXMonths:{standalone:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలలు"},withPreposition:{one:"సుమారు ఒక నెల",other:"సుమారు {{count}} నెలల"}},xMonths:{standalone:{one:"ఒక నెల",other:"{{count}} నెలలు"},withPreposition:{one:"ఒక నెల",other:"{{count}} నెలల"}},aboutXYears:{standalone:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాలు"},withPreposition:{one:"సుమారు ఒక సంవత్సరం",other:"సుమారు {{count}} సంవత్సరాల"}},xYears:{standalone:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాలు"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},overXYears:{standalone:{one:"ఒక సంవత్సరం పైగా",other:"{{count}} సంవత్సరాలకు పైగా"},withPreposition:{one:"ఒక సంవత్సరం",other:"{{count}} సంవత్సరాల"}},almostXYears:{standalone:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాలు"},withPreposition:{one:"దాదాపు ఒక సంవత్సరం",other:"దాదాపు {{count}} సంవత్సరాల"}}};function o(t,e,n){n=n||{};var o,i=n.addSuffix?a[t].withPreposition:a[t].standalone;return o="string"===typeof i?i:1===e?i.one:i.other.replace("{{count}}",e),n.addSuffix?n.comparison>0?o+"లో":o+" క్రితం":o}t.exports=e.default},"1f21":function(t,e,n){"use strict";function a(t){return function(e){var n=e||{},a=n.width?String(n.width):t.defaultWidth,o=t.formats[a]||t.formats[t.defaultWidth];return o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},"349d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("9686")),o=i(n("b028"));function i(t){return t&&t.__esModule?t:{default:t}}var r=/^(\d+)(వ)?/i,u=/\d+/i,d={narrow:/^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,abbreviated:/^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,wide:/^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i},l={any:[/^(పూ|శ)/i,/^సా/i]},s={narrow:/^[1234]/i,abbreviated:/^త్రై[1234]/i,wide:/^[1234](వ)? త్రైమాసికం/i},f={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,abbreviated:/^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,wide:/^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i},c={narrow:[/^జ/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూ/i,/^జు/i,/^ఆ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i],any:[/^జన/i,/^ఫి/i,/^మా/i,/^ఏ/i,/^మే/i,/^జూన్/i,/^జులై/i,/^ఆగ/i,/^సె/i,/^అ/i,/^న/i,/^డి/i]},m={narrow:/^(ఆ|సో|మ|బు|గు|శు|శ)/i,short:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,abbreviated:/^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,wide:/^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i},v={narrow:[/^ఆ/i,/^సో/i,/^మ/i,/^బు/i,/^గు/i,/^శు/i,/^శ/i],any:[/^ఆది/i,/^సోమ/i,/^మం/i,/^బుధ/i,/^గురు/i,/^శుక్ర/i,/^శని/i]},p={narrow:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,any:/^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i},w={any:{am:/^పూర్వాహ్నం/i,pm:/^అపరాహ్నం/i,midnight:/^అర్ధ/i,noon:/^మిట్ట/i,morning:/ఉదయం/i,afternoon:/మధ్యాహ్నం/i,evening:/సాయంత్రం/i,night:/రాత్రి/i}},b={ordinalNumber:(0,a.default)({matchPattern:r,parsePattern:u,valueCallback:function(t){return parseInt(t,10)}}),era:(0,o.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,o.default)({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:v,defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:p,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},P=b;e.default=P,t.exports=e.default},"486a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=d(n("146c")),o=d(n("4f5d")),i=d(n("b8f2")),r=d(n("bd84")),u=d(n("349d"));function d(t){return t&&t.__esModule?t:{default:t}}var l={code:"te",formatDistance:a.default,formatLong:o.default,formatRelative:i.default,localize:r.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},s=l;e.default=s,t.exports=e.default},"4f5d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("1f21"));function o(t){return t&&t.__esModule?t:{default:t}}var i={full:"d, MMMM y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd-MM-yy"},r={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},u={full:"{{date}} {{time}}'కి'",long:"{{date}} {{time}}'కి'",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:(0,a.default)({formats:i,defaultWidth:"full"}),time:(0,a.default)({formats:r,defaultWidth:"full"}),dateTime:(0,a.default)({formats:u,defaultWidth:"full"})},l=d;e.default=l,t.exports=e.default},9686:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),o=n||{},i=a.match(t.matchPattern);if(!i)return null;var r=i[0],u=a.match(t.parsePattern);if(!u)return null;var d=t.valueCallback?t.valueCallback(u[0]):u[0];return d=o.valueCallback?o.valueCallback(d):d,{value:d,rest:a.slice(r.length)}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},af03:function(t,e,n){"use strict";function a(t){return function(e,n){var a,o=n||{},i=o.context?String(o.context):"standalone";if("formatting"===i&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,u=o.width?String(o.width):r;a=t.formattingValues[u]||t.formattingValues[r]}else{var d=t.defaultWidth,l=o.width?String(o.width):t.defaultWidth;a=t.values[l]||t.values[d]}var s=t.argumentCallback?t.argumentCallback(e):e;return a[s]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},b028:function(t,e,n){"use strict";function a(t){return function(e,n){var a=String(e),r=n||{},u=r.width,d=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],l=a.match(d);if(!l)return null;var s,f=l[0],h=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(h)?i(h,(function(t){return t.test(f)})):o(h,(function(t){return t.test(f)})),s=t.valueCallback?t.valueCallback(s):s,s=r.valueCallback?r.valueCallback(s):s,{value:s,rest:a.slice(f.length)}}}function o(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function i(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},b8f2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a={lastWeek:"'గత' eeee p",yesterday:"'నిన్న' p",today:"'ఈ రోజు' p",tomorrow:"'రేపు' p",nextWeek:"'తదుపరి' eeee p",other:"P"};function o(t,e,n,o){return a[t]}t.exports=e.default},bd84:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("af03"));function o(t){return t&&t.__esModule?t:{default:t}}var i={narrow:["క్రీ.పూ.","క్రీ.శ."],abbreviated:["క్రీ.పూ.","క్రీ.శ."],wide:["క్రీస్తు పూర్వం","క్రీస్తుశకం"]},r={narrow:["1","2","3","4"],abbreviated:["త్రై1","త్రై2","త్రై3","త్రై4"],wide:["1వ త్రైమాసికం","2వ త్రైమాసికం","3వ త్రైమాసికం","4వ త్రైమాసికం"]},u={narrow:["జ","ఫి","మా","ఏ","మే","జూ","జు","ఆ","సె","అ","న","డి"],abbreviated:["జన","ఫిబ్ర","మార్చి","ఏప్రి","మే","జూన్","జులై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],wide:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జులై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"]},d={narrow:["ఆ","సో","మ","బు","గు","శు","శ"],short:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],abbreviated:["ఆది","సోమ","మంగళ","బుధ","గురు","శుక్ర","శని"],wide:["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]},l={narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}},s={narrow:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},abbreviated:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"},wide:{am:"పూర్వాహ్నం",pm:"అపరాహ్నం",midnight:"అర్ధరాత్రి",noon:"మిట్టమధ్యాహ్నం",morning:"ఉదయం",afternoon:"మధ్యాహ్నం",evening:"సాయంత్రం",night:"రాత్రి"}};function f(t,e){var n=Number(t);return n+"వ"}var h={ordinalNumber:f,era:(0,a.default)({values:i,defaultWidth:"wide"}),quarter:(0,a.default)({values:r,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,a.default)({values:u,defaultWidth:"wide"}),day:(0,a.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:l,defaultWidth:"wide",formattingValues:s,defaultFormattingWidth:"wide"})},c=h;e.default=c,t.exports=e.default}}]);
//# sourceMappingURL=df-357.4388c217.js.map