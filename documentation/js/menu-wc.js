'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">nie-frontend documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' : 'data-target="#xs-components-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' : 'id="xs-components-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' : 'data-target="#xs-injectables-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' : 'id="xs-injectables-links-module-AppModule-68d1cdf285c5e8dfc6f61adc7067f164"' }>
                                        <li class="link">
                                            <a href="injectables/AlertService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AlertService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UserService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/BaseTypeFormsModule.html" data-type="entity-link">BaseTypeFormsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-BaseTypeFormsModule-6b26ceabb79f8595cda757da5e5b3153"' : 'data-target="#xs-components-links-module-BaseTypeFormsModule-6b26ceabb79f8595cda757da5e5b3153"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-BaseTypeFormsModule-6b26ceabb79f8595cda757da5e5b3153"' : 'id="xs-components-links-module-BaseTypeFormsModule-6b26ceabb79f8595cda757da5e5b3153"' }>
                                        <li class="link">
                                            <a href="components/BooleanValueEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BooleanValueEditorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DateValueEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateValueEditorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DateValueViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DateValueViewerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DecimalValueEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DecimalValueEditorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/IntValueEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IntValueEditorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinkValueEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkValueEditorComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LinkValueLabelViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LinkValueLabelViewerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextValueEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextValueEditorComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ComplexTextViewsModule.html" data-type="entity-link">ComplexTextViewsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ComplexTextViewsModule-e5d7eab9e53a086b36de8a8601c7160f"' : 'data-target="#xs-components-links-module-ComplexTextViewsModule-e5d7eab9e53a086b36de8a8601c7160f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ComplexTextViewsModule-e5d7eab9e53a086b36de8a8601c7160f"' : 'id="xs-components-links-module-ComplexTextViewsModule-e5d7eab9e53a086b36de8a8601c7160f"' }>
                                        <li class="link">
                                            <a href="components/TextPageOfWordsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextPageOfWordsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextSvgViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextSvgViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' : 'data-target="#xs-components-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' : 'id="xs-components-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' }>
                                        <li class="link">
                                            <a href="components/DialogUserSettingsDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogUserSettingsDialog</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/InitPopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">InitPopupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PizzaPartyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PizzaPartyComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' : 'data-target="#xs-injectables-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' : 'id="xs-injectables-links-module-CoreModule-60a1df594aef332f790b8d6dd5a6e4bf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KnoraAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>KnoraAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/KnoraRequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>KnoraRequestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ResultToTextMapperService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ResultToTextMapperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SparqlRequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SparqlRequestService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SynopsisObjectStorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SynopsisObjectStorageService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CreateResourceModule.html" data-type="entity-link">CreateResourceModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' : 'data-target="#xs-components-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' : 'id="xs-components-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' }>
                                        <li class="link">
                                            <a href="components/CreateResourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateResourceComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' : 'data-target="#xs-injectables-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' : 'id="xs-injectables-links-module-CreateResourceModule-f1511ef7f034e6c32421a2a3d9678ae1"' }>
                                        <li class="link">
                                            <a href="injectables/KnoraV1RequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>KnoraV1RequestService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CreateResourceViewModule.html" data-type="entity-link">CreateResourceViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CreateResourceViewModule-422cd41428180d8cfc1e5d8563f9865d"' : 'data-target="#xs-components-links-module-CreateResourceViewModule-422cd41428180d8cfc1e5d8563f9865d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CreateResourceViewModule-422cd41428180d8cfc1e5d8563f9865d"' : 'id="xs-components-links-module-CreateResourceViewModule-422cd41428180d8cfc1e5d8563f9865d"' }>
                                        <li class="link">
                                            <a href="components/CreateResourceViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateResourceViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/D3jsModule.html" data-type="entity-link">D3jsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-D3jsModule-0662c87e5056b7b8089692732b6a51a9"' : 'data-target="#xs-components-links-module-D3jsModule-0662c87e5056b7b8089692732b6a51a9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-D3jsModule-0662c87e5056b7b8089692732b6a51a9"' : 'id="xs-components-links-module-D3jsModule-0662c87e5056b7b8089692732b6a51a9"' }>
                                        <li class="link">
                                            <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BarChartComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BrushAndZoomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BrushAndZoomComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChordDiagramComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChordDiagramComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/D3tutorialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">D3tutorialComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LeafletExampleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeafletExampleComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MultiLineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MultiLineChartComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PieChartComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RadialBarchartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RadialBarchartComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SankeyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SankeyComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StackedBarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StackedBarChartComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' : 'data-target="#xs-components-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' : 'id="xs-components-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' }>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DialogOverviewExampleDialog.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogOverviewExampleDialog</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' : 'data-target="#xs-injectables-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' : 'id="xs-injectables-links-module-DashboardModule-0cf5da5a8c474168f7ce9ad92d0af667"' }>
                                        <li class="link">
                                            <a href="injectables/ActionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ActionService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DataManagementToolModule.html" data-type="entity-link">DataManagementToolModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' : 'data-target="#xs-components-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' : 'id="xs-components-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' }>
                                        <li class="link">
                                            <a href="components/DataChooserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataChooserComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DataChooserSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataChooserSettingsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResponseTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResponseTreeComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' : 'data-target="#xs-injectables-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' : 'id="xs-injectables-links-module-DataManagementToolModule-19774edca91c3f97172cce46846a110a"' }>
                                        <li class="link">
                                            <a href="injectables/FileDatabase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>FileDatabase</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DeveloperNotesModule.html" data-type="entity-link">DeveloperNotesModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DevelopmentViewsModule.html" data-type="entity-link">DevelopmentViewsModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/EditResourceViewModule.html" data-type="entity-link">EditResourceViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-EditResourceViewModule-f962aa080369917a0f476cc044400046"' : 'data-target="#xs-components-links-module-EditResourceViewModule-f962aa080369917a0f476cc044400046"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-EditResourceViewModule-f962aa080369917a0f476cc044400046"' : 'id="xs-components-links-module-EditResourceViewModule-f962aa080369917a0f476cc044400046"' }>
                                        <li class="link">
                                            <a href="components/EditResourceViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditResourceViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FactSheetModule.html" data-type="entity-link">FactSheetModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FactSheetModule-ef28438b1745f5ccc49dc88216815a27"' : 'data-target="#xs-components-links-module-FactSheetModule-ef28438b1745f5ccc49dc88216815a27"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FactSheetModule-ef28438b1745f5ccc49dc88216815a27"' : 'id="xs-components-links-module-FactSheetModule-ef28438b1745f5ccc49dc88216815a27"' }>
                                        <li class="link">
                                            <a href="components/FactSheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FactSheetComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HowToProgramWithNieOSModule.html" data-type="entity-link">HowToProgramWithNieOSModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HowToProgramWithNieOSModule-4dafaafa290ce3cc1aee57b5ae99444a"' : 'data-target="#xs-components-links-module-HowToProgramWithNieOSModule-4dafaafa290ce3cc1aee57b5ae99444a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HowToProgramWithNieOSModule-4dafaafa290ce3cc1aee57b5ae99444a"' : 'id="xs-components-links-module-HowToProgramWithNieOSModule-4dafaafa290ce3cc1aee57b5ae99444a"' }>
                                        <li class="link">
                                            <a href="components/DictionaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DictionaryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MyPractiseComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyPractiseComponentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextDisplayComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ImageFrameModule.html" data-type="entity-link">ImageFrameModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' : 'data-target="#xs-components-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' : 'id="xs-components-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' }>
                                        <li class="link">
                                            <a href="components/ImageFrameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageFrameComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ImageFrameSizesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageFrameSizesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ImageWithOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageWithOverlayComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' : 'data-target="#xs-injectables-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' : 'id="xs-injectables-links-module-ImageFrameModule-e8f00fdde7df6ecc3a4641fcc75cae70"' }>
                                        <li class="link">
                                            <a href="injectables/RegionToSvgService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>RegionToSvgService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ImageViewModule.html" data-type="entity-link">ImageViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ImageViewModule-83a4f9758294c57c67f690db38af8bfb"' : 'data-target="#xs-components-links-module-ImageViewModule-83a4f9758294c57c67f690db38af8bfb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ImageViewModule-83a4f9758294c57c67f690db38af8bfb"' : 'id="xs-components-links-module-ImageViewModule-83a4f9758294c57c67f690db38af8bfb"' }>
                                        <li class="link">
                                            <a href="components/ImageViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/MetadataViewModule.html" data-type="entity-link">MetadataViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MetadataViewModule-72201c24a7f3c02a9dbeaedadee5aea5"' : 'data-target="#xs-components-links-module-MetadataViewModule-72201c24a7f3c02a9dbeaedadee5aea5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MetadataViewModule-72201c24a7f3c02a9dbeaedadee5aea5"' : 'id="xs-components-links-module-MetadataViewModule-72201c24a7f3c02a9dbeaedadee5aea5"' }>
                                        <li class="link">
                                            <a href="components/MetadataViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MetadataViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MockupTutorialModule.html" data-type="entity-link">MockupTutorialModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MockupTutorialModule-9f163ed480c6a3a1efb16dfa27f6228a"' : 'data-target="#xs-components-links-module-MockupTutorialModule-9f163ed480c6a3a1efb16dfa27f6228a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MockupTutorialModule-9f163ed480c6a3a1efb16dfa27f6228a"' : 'id="xs-components-links-module-MockupTutorialModule-9f163ed480c6a3a1efb16dfa27f6228a"' }>
                                        <li class="link">
                                            <a href="components/MyMainComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyMainComponentComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MyPageSetModule.html" data-type="entity-link">MyPageSetModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' : 'data-target="#xs-components-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' : 'id="xs-components-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' }>
                                        <li class="link">
                                            <a href="components/DialogCreateNewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogCreateNewPageComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PageSetLandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageSetLandingPageComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UpdatePageSetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdatePageSetComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' : 'data-target="#xs-injectables-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' : 'id="xs-injectables-links-module-MyPageSetModule-d33204821826ad065f8d6da4f42b18cc"' }>
                                        <li class="link">
                                            <a href="injectables/ActionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ActionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreatePageAndLinkToAction.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CreatePageAndLinkToAction</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreatePageSetAndLinkToActionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CreatePageSetAndLinkToActionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GenerateHashService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>GenerateHashService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageSetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>PageSetService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NIEOSModule.html" data-type="entity-link">NIEOSModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' : 'data-target="#xs-components-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' : 'id="xs-components-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' }>
                                        <li class="link">
                                            <a href="components/GrapesjsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrapesjsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NIEOSComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NIEOSComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/Popup.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">Popup</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextlistViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextlistViewerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' : 'data-target="#xs-injectables-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' : 'id="xs-injectables-links-module-NIEOSModule-177e24743fbba79a1ca7e28d9949a969"' }>
                                        <li class="link">
                                            <a href="injectables/GenerateHashService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>GenerateHashService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SendGravSearchQueryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SendGravSearchQueryService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ResourceFormModule.html" data-type="entity-link">ResourceFormModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' : 'data-target="#xs-components-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' : 'id="xs-components-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' }>
                                        <li class="link">
                                            <a href="components/ResourceFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceFormComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceValueHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceValueHistoryComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ResourceValueHistoryValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceValueHistoryValueComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' : 'data-target="#xs-injectables-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' : 'id="xs-injectables-links-module-ResourceFormModule-ed7a3bae2c61902a0db1a4b818e3120e"' }>
                                        <li class="link">
                                            <a href="injectables/KnoraV1RequestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>KnoraV1RequestService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SpaTextModule.html" data-type="entity-link">SpaTextModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SpaTextModule-c773e8904a4aae62e26534e051cd421a"' : 'data-target="#xs-components-links-module-SpaTextModule-c773e8904a4aae62e26534e051cd421a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SpaTextModule-c773e8904a4aae62e26534e051cd421a"' : 'id="xs-components-links-module-SpaTextModule-c773e8904a4aae62e26534e051cd421a"' }>
                                        <li class="link">
                                            <a href="components/SpaTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpaTextComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/StaticPagesModule.html" data-type="entity-link">StaticPagesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-StaticPagesModule-48fe93b197fdf7361893e7076bebdd4d"' : 'data-target="#xs-components-links-module-StaticPagesModule-48fe93b197fdf7361893e7076bebdd4d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-StaticPagesModule-48fe93b197fdf7361893e7076bebdd4d"' : 'id="xs-components-links-module-StaticPagesModule-48fe93b197fdf7361893e7076bebdd4d"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SynopsisModule.html" data-type="entity-link">SynopsisModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' : 'data-target="#xs-components-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' : 'id="xs-components-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' }>
                                        <li class="link">
                                            <a href="components/FloatLightTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FloatLightTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FloatingImageObjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FloatingImageObjectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FloatingTextObjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FloatingTextObjectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LightTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LightTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LightTableMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LightTableMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoadLightTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadLightTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RemoveObjectsByIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RemoveObjectsByIdComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SaveLightTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SaveLightTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ShareLightTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareLightTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SynopsisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SynopsisComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SynopsisObjectManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SynopsisObjectManagerComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SynopsisObjectToolboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SynopsisObjectToolboxComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ThumbnailbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThumbnailbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TiledImageObjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TiledImageObjectComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TiledLightTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TiledLightTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TiledTextObjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TiledTextObjectComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' : 'data-target="#xs-directives-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' : 'id="xs-directives-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' }>
                                        <li class="link">
                                            <a href="directives/DraggableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DraggableStubDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableStubDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/FloatDropTargetDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FloatDropTargetDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ModifiableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModifiableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ModifiableStubDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModifiableStubDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SelectableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SelectableStubDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectableStubDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SynopsisObjectAnchorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SynopsisObjectAnchorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TileDropTargetDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TileDropTargetDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' : 'data-target="#xs-injectables-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' : 'id="xs-injectables-links-module-SynopsisModule-15485d31e3705eefa21f4465c600367f"' }>
                                        <li class="link">
                                            <a href="injectables/DragService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>DragService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LightTableLayoutService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LightTableLayoutService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LightTableStashService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LightTableStashService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SynopsisObjectModifierService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SynopsisObjectModifierService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SynopsisObjectSelectorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SynopsisObjectSelectorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SynopsisObjectSerializerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SynopsisObjectSerializerService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TagChipsModule.html" data-type="entity-link">TagChipsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TagChipsModule-067a20c347a6f4f3185a21d432c2f125"' : 'data-target="#xs-components-links-module-TagChipsModule-067a20c347a6f4f3185a21d432c2f125"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TagChipsModule-067a20c347a6f4f3185a21d432c2f125"' : 'id="xs-components-links-module-TagChipsModule-067a20c347a6f4f3185a21d432c2f125"' }>
                                        <li class="link">
                                            <a href="components/TagChipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TagChipsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TextDevViewModule.html" data-type="entity-link">TextDevViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TextDevViewModule-27ac35a1c691c2433563e3e13adfa8ab"' : 'data-target="#xs-components-links-module-TextDevViewModule-27ac35a1c691c2433563e3e13adfa8ab"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TextDevViewModule-27ac35a1c691c2433563e3e13adfa8ab"' : 'id="xs-components-links-module-TextDevViewModule-27ac35a1c691c2433563e3e13adfa8ab"' }>
                                        <li class="link">
                                            <a href="components/TextDevViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextDevViewComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TextStructureModule.html" data-type="entity-link">TextStructureModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TextStructureModule-1b87a43a334f241f322e1161017381ac"' : 'data-target="#xs-components-links-module-TextStructureModule-1b87a43a334f241f322e1161017381ac"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TextStructureModule-1b87a43a334f241f322e1161017381ac"' : 'id="xs-components-links-module-TextStructureModule-1b87a43a334f241f322e1161017381ac"' }>
                                        <li class="link">
                                            <a href="components/TextLineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextLineComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextLineGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextLineGroupComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextLineMarginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextLineMarginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextLineNumberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextLineNumberComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TextViewModule.html" data-type="entity-link">TextViewModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' : 'data-target="#xs-components-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' : 'id="xs-components-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' }>
                                        <li class="link">
                                            <a href="components/TextViewCanvasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextViewCanvasComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextViewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextViewMetadataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextViewMetadataComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextViewStructureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextViewStructureComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextViewToolsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextViewToolsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' : 'data-target="#xs-injectables-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' : 'id="xs-injectables-links-module-TextViewModule-72c58c640714df154528d4ddfab19fe9"' }>
                                        <li class="link">
                                            <a href="injectables/CanvasOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>CanvasOptionsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NavigationComponent-1.html" data-type="entity-link">NavigationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavigationComponent-2.html" data-type="entity-link">NavigationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextDisplayComponent-1.html" data-type="entity-link">TextDisplayComponent</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/ActivatedRouteStub.html" data-type="entity-link">ActivatedRouteStub</a>
                    </li>
                    <li class="link">
                        <a href="classes/BasicModel.html" data-type="entity-link">BasicModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/FileFlatNode.html" data-type="entity-link">FileFlatNode</a>
                    </li>
                    <li class="link">
                        <a href="classes/FileNode.html" data-type="entity-link">FileNode</a>
                    </li>
                    <li class="link">
                        <a href="classes/IIIFImage.html" data-type="entity-link">IIIFImage</a>
                    </li>
                    <li class="link">
                        <a href="classes/ImageViewer.html" data-type="entity-link">ImageViewer</a>
                    </li>
                    <li class="link">
                        <a href="classes/InstantErrorStateMatcher.html" data-type="entity-link">InstantErrorStateMatcher</a>
                    </li>
                    <li class="link">
                        <a href="classes/JulianDate.html" data-type="entity-link">JulianDate</a>
                    </li>
                    <li class="link">
                        <a href="classes/LightTableStorage.html" data-type="entity-link">LightTableStorage</a>
                    </li>
                    <li class="link">
                        <a href="classes/MyErrorStateMatcher.html" data-type="entity-link">MyErrorStateMatcher</a>
                    </li>
                    <li class="link">
                        <a href="classes/OpenAppsModel.html" data-type="entity-link">OpenAppsModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/Page.html" data-type="entity-link">Page</a>
                    </li>
                    <li class="link">
                        <a href="classes/PageSetModel.html" data-type="entity-link">PageSetModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/Person.html" data-type="entity-link">Person</a>
                    </li>
                    <li class="link">
                        <a href="classes/Place.html" data-type="entity-link">Place</a>
                    </li>
                    <li class="link">
                        <a href="classes/RequestTemplate.html" data-type="entity-link">RequestTemplate</a>
                    </li>
                    <li class="link">
                        <a href="classes/Standoff.html" data-type="entity-link">Standoff</a>
                    </li>
                    <li class="link">
                        <a href="classes/SubjectTag.html" data-type="entity-link">SubjectTag</a>
                    </li>
                    <li class="link">
                        <a href="classes/SynopsisImageData.html" data-type="entity-link">SynopsisImageData</a>
                    </li>
                    <li class="link">
                        <a href="classes/SynopsisItem.html" data-type="entity-link">SynopsisItem</a>
                    </li>
                    <li class="link">
                        <a href="classes/SynopsisTextData.html" data-type="entity-link">SynopsisTextData</a>
                    </li>
                    <li class="link">
                        <a href="classes/Text.html" data-type="entity-link">Text</a>
                    </li>
                    <li class="link">
                        <a href="classes/TextTemplate.html" data-type="entity-link">TextTemplate</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ImageViewerService.html" data-type="entity-link">ImageViewerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/InitService.html" data-type="entity-link">InitService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/KnoraV2RequestService.html" data-type="entity-link">KnoraV2RequestService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MongoActionService.html" data-type="entity-link">MongoActionService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MongoContactService.html" data-type="entity-link">MongoContactService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MongoPageService.html" data-type="entity-link">MongoPageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RequestService.html" data-type="entity-link">RequestService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ResultToModelMapperService.html" data-type="entity-link">ResultToModelMapperService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/StandoffReconcilerService.html" data-type="entity-link">StandoffReconcilerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SynopsisObjectSerializerServiceStub.html" data-type="entity-link">SynopsisObjectSerializerServiceStub</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/FakeBackendInterceptor.html" data-type="entity-link">FakeBackendInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Action.html" data-type="entity-link">Action</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Action-1.html" data-type="entity-link">Action</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ActionArray.html" data-type="entity-link">ActionArray</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AuthData.html" data-type="entity-link">AuthData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ComponentRefTracker.html" data-type="entity-link">ComponentRefTracker</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DAG.html" data-type="entity-link">DAG</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DropTargetOptions.html" data-type="entity-link">DropTargetOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Frequency.html" data-type="entity-link">Frequency</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Frequency-1.html" data-type="entity-link">Frequency</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Margin.html" data-type="entity-link">Margin</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Margin-1.html" data-type="entity-link">Margin</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ObjectDimensions.html" data-type="entity-link">ObjectDimensions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Page.html" data-type="entity-link">Page</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SLinkExtra.html" data-type="entity-link">SLinkExtra</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SNodeExtra.html" data-type="entity-link">SNodeExtra</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Stock.html" data-type="entity-link">Stock</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/StorageObject.html" data-type="entity-link">StorageObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SynopsisObject.html" data-type="entity-link">SynopsisObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SynopsisObjectData.html" data-type="entity-link">SynopsisObjectData</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
