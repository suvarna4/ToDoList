webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 150;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timer_timer_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(cdRef) {
        this.cdRef = cdRef;
        this.title = 'app';
        this.tasks = [];
        this.selectedTask = this.tasks[0];
        this.render = true;
    }
    AppComponent.prototype.submitTask = function (input) {
        var _this = this;
        if (this.selectedTask) {
            var index = this.tasks.findIndex(function (task) { return task.name == _this.selectedTask; });
            this.tasks.splice(index + 1, 0, {
                name: input,
                ticks: 0
            });
            return;
        }
        this.tasks = this.tasks.concat([
            {
                name: input,
                ticks: 0
            }
        ]);
    };
    AppComponent.prototype.ticks = function () { return 0; };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(function () { return _this.ticks = function () { return _this.timerComponent.ticks; }; }, 0);
    };
    AppComponent.prototype.beRender = function () {
        var _this = this;
        if (this.timerComponent) {
            this.timerComponent.pauseTimer();
        }
        setTimeout(function () { return _this.reRender(); }, 10);
    };
    AppComponent.prototype.reRender = function () {
        var _this = this;
        this.prevTask = this.selectedTask;
        this.tasks.map(function (task) {
            if (_this.selectedTask == task.name) {
                _this.currentTask = task;
            }
        });
        console.log(this.currentTask);
        this.render = false;
        this.cdRef.detectChanges();
        this.render = true;
    };
    AppComponent.prototype.changeTicks = function (event) {
        var _this = this;
        console.log(event);
        this.tasks = this.tasks.map(function (task) {
            if (task.name == _this.prevTask) {
                console.log("hello");
                task.ticks = event;
            }
            return task;
        });
        console.log(this.tasks);
    };
    AppComponent.prototype.downloadFile = function () {
        var text = "";
        for (var i = 0; i < this.tasks.length; i++) {
            text += this.tasks[i].name + "|" + this.tasks[i].ticks;
            if (i != this.tasks.length - 1) {
                text += "\n";
            }
        }
        var file = new Blob([text], { type: 'text/plain' });
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](file, "todo.txt");
    };
    AppComponent.prototype.openFile = function (event) {
        var _this = this;
        var input = event.target;
        var text = "";
        var _loop_1 = function () {
            var reader = new FileReader();
            reader.onload = function () {
                // this 'text' is the content of the file
                text = reader.result;
                console.log(text);
                _this.tasks = [];
                var pos = -1;
                var arr = text.split('\n');
                console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    var t = arr[i].split('|');
                    console.log(t);
                    _this.tasks = _this.tasks.concat([
                        {
                            name: t[0],
                            ticks: Number(t[1])
                        }
                    ]);
                    console.log(_this.tasks);
                    if (Number(t[1]) == 0 && pos == -1) {
                        pos = i;
                        _this.selectedTask = t[0];
                    }
                    if ((pos == -1) && i == arr.length - 1) {
                        _this.selectedTask = t[0];
                    }
                }
                _this.reRender();
            };
            reader.readAsText(input.files[index]);
        };
        for (var index = 0; index < input.files.length; index++) {
            _loop_1();
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__timer_timer_component__["a" /* TimerComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__timer_timer_component__["a" /* TimerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timer_timer_component__["a" /* TimerComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "timerComponent", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(224),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ChangeDetectorRef */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timer_timer_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__timer_timer_component__["a" /* TimerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, "div {\n    color: #ff0000;\n    margin-top: 24px;\n    text-align: center;\n}\nh1, h2 {\n    display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    To-Do List\n  </h1>\n</div>\n<hr>\n<div *ngIf=\"tasks\" class=\"row\">\n  <div class =\"col-md-1 col-sm-1\"></div>\n  <div class=\"col-md-2 col-sm-2 text-center\" style=\"margin-top:15px\">\n    <h4>Current Task:</h4>\n  </div>\n  <md-select class=\"col-md-8 col-sm-8\" style=\"width:66%\" [(ngModel)]=\"selectedTask\" (change)=\"beRender()\">\n    <md-option *ngFor=\"let task of tasks\" value=\"{{task.name}}\">{{task.name}}</md-option>      \n  </md-select>\n\n</div>\n\n\n<app-timer *ngIf=\"currentTask && render\" [ticks]=\"currentTask.ticks\" (change)=\"changeTicks($event)\"></app-timer>\n\n<div class=\"row\">\n    <div class =\"col-md-1 col-sm-1\"></div>\n    <div class=\"col-md-2 col-sm-2 text-center\" style=\"margin-top:10px\">\n      <h4>New Task:</h4>\n    </div>\n    <form class=\"col-md-6 col-sm-6\" style=\"width:50%\">\n        <md-form-field style=\"width:100%\">\n          <input mdInput placeholder=\"Task\" #input>\n        </md-form-field>\n    </form>\n    <button md-raised-button color=\"primary\" (click)=\"submitTask(input.value)\" style=\"margin-top:10px\">Add Task</button>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-2 col-sm-2\"></div>\n  <div class=\"text-center col-md-4 col-sm-4\">\n      <input type='file' accept='text/plain' multiple (change)='openFile($event)'>    \n  </div>\n  <div class=\"text-center col-md-2 col-sm-2\">\n      <button md-raised-button color=\"secondary\" (click)=\"downloadFile()\" style=\"margin-top:10px\">Export Data</button>\n  </div>\n  <div class =\"col-md-4 col-sm-4\"></div>\n</div>  \n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<div>\n<h1>\n  {{hoursDisplay ? hoursDisplay : '00'}} : {{(minutesDisplay) && (minutesDisplay <= 59) ? minutesDisplay : '00'}} : {{(secondsDisplay) && (secondsDisplay <= 59) ? secondsDisplay : '00'}}\n</h1>\n<h2>: {{(msecondsDisplay) && (msecondsDisplay <= 99) ? msecondsDisplay : '00'}}\n</h2>\n<md-checkbox class=\"float:right\" style=\"margin-left:40px; margin-top:-5px\" [(ngModel)]=\"checked\" (change)=\"changeCheck()\">Start</md-checkbox>\n</div>"

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = (function () {
    function TimerComponent() {
        this.checked = false;
        this.minutesDisplay = this.getMinutes(this.ticks);
        this.hoursDisplay = this.getHours(this.ticks);
        this.secondsDisplay = this.getSeconds(this.ticks);
        this.msecondsDisplay = this.getMilliSeconds(this.ticks);
        this.save = this.ticks;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.minutesDisplay = this.getMinutes(this.ticks);
        this.hoursDisplay = this.getHours(this.ticks);
        this.secondsDisplay = this.getSeconds(this.ticks);
        this.msecondsDisplay = this.getMilliSeconds(this.ticks);
        this.save = this.ticks;
    };
    TimerComponent.prototype.startTimer = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(1, 10);
        this.sub = timer.subscribe(function (t) {
            _this.ticks = _this.save + t;
            _this.msecondsDisplay = _this.getMilliSeconds(_this.ticks);
            _this.secondsDisplay = _this.getSeconds(_this.ticks);
            _this.minutesDisplay = _this.getMinutes(_this.ticks);
            _this.hoursDisplay = _this.getHours(_this.ticks);
        });
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.save = this.ticks;
        if (!this.checked && this.sub) {
            this.sub.unsubscribe();
        }
        this.change.emit(this.ticks);
    };
    TimerComponent.prototype.changeCheck = function () {
        if (this.checked) {
            this.startTimer();
        }
        else {
            this.pauseTimer();
        }
    };
    TimerComponent.prototype.getMilliSeconds = function (ticks) {
        return this.pad(ticks % 100);
    };
    TimerComponent.prototype.getSeconds = function (ticks) {
        return this.pad(Math.floor(ticks / 100) % 60);
    };
    TimerComponent.prototype.getMinutes = function (ticks) {
        return this.pad((Math.floor(ticks / 6000)) % 60);
    };
    TimerComponent.prototype.getHours = function (ticks) {
        return this.pad(Math.floor((ticks / 6000) / 60));
    };
    TimerComponent.prototype.pad = function (digit) {
        return digit <= 9 ? '0' + digit : digit;
    };
    return TimerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], TimerComponent.prototype, "ticks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]) === "function" && _a || Object)
], TimerComponent.prototype, "change", void 0);
TimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-timer',
        template: __webpack_require__(225),
        styles: [__webpack_require__(222)]
    })
], TimerComponent);

var _a;
//# sourceMappingURL=timer.component.js.map

/***/ })

},[494]);
//# sourceMappingURL=main.bundle.js.map