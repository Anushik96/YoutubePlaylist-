"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_translate_1 = require("ng2-translate");
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var search_component_1 = require('./search/search.component');
var about_component_1 = require('./about/about.component');
var spotify_service_1 = require('./services/spotify.service');
var video_component_1 = require('./video_play/video.component');
var home_page_component_1 = require('./home/home-page.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_translate_1.TranslateModule.forRoot(),
                router_1.RouterModule.forRoot([
                    {
                        path: 'home',
                        component: home_page_component_1.HomeComponent
                    },
                    {
                        path: 'about',
                        component: about_component_1.AboutComponent
                    },
                    {
                        path: 'search',
                        component: search_component_1.SearchComponent
                    },
                    {
                        path: 'search/video/:id',
                        component: video_component_1.VideoComponent
                    },
                    {
                        path: '',
                        component: login_component_1.LoginComponent
                    },
                    {
                        path: 'register',
                        component: register_component_1.RegisterComponent
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                about_component_1.AboutComponent,
                search_component_1.SearchComponent,
                login_component_1.LoginComponent,
                video_component_1.VideoComponent,
                home_page_component_1.HomeComponent,
                register_component_1.RegisterComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [spotify_service_1.SpotifyService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map