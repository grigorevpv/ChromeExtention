System.register("WordChecker", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WordChecker;
    return {
        setters: [],
        execute: function () {
            WordChecker = (function () {
                function WordChecker() {
                }
                WordChecker.Check = function (word) {
                    return true;
                };
                return WordChecker;
            }());
            exports_1("WordChecker", WordChecker);
        }
    };
});
System.register("TranslateService", ["WordChecker"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var WordChecker_1, TranslateService;
    return {
        setters: [
            function (WordChecker_1_1) {
                WordChecker_1 = WordChecker_1_1;
            }
        ],
        execute: function () {
            TranslateService = (function () {
                function TranslateService(nativeLang, foreignLang) {
                    this._nativeLang = 'ru';
                    this._foreignLang = 'en';
                    this._nativeLang = nativeLang;
                    this._foreignLang = foreignLang;
                }
                TranslateService.prototype.Translate = function (selectedWord) {
                    if (WordChecker_1.WordChecker.Check(selectedWord)) {
                        return 'a';
                    }
                };
                return TranslateService;
            }());
            exports_2("TranslateService", TranslateService);
        }
    };
});
System.register("TranslateServiceFactory", ["TranslateService"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var TranslateService_1, TranslateServiceFactory;
    return {
        setters: [
            function (TranslateService_1_1) {
                TranslateService_1 = TranslateService_1_1;
            }
        ],
        execute: function () {
            TranslateServiceFactory = (function () {
                function TranslateServiceFactory() {
                }
                TranslateServiceFactory.CreateTranslater = function (nativeLang, foreignLang) {
                    return new TranslateService_1.TranslateService(nativeLang, foreignLang);
                };
                return TranslateServiceFactory;
            }());
            exports_3("TranslateServiceFactory", TranslateServiceFactory);
        }
    };
});
//# sourceMappingURL=tsc.js.map