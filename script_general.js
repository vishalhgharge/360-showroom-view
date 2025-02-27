(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"gap":10,"scripts":{"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"isPanorama":TDV.Tour.Script.isPanorama,"quizShowScore":TDV.Tour.Script.quizShowScore,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"openLink":TDV.Tour.Script.openLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPixels":TDV.Tour.Script.getPixels,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizStart":TDV.Tour.Script.quizStart,"showWindow":TDV.Tour.Script.showWindow,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"historyGoForward":TDV.Tour.Script.historyGoForward,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeJS":TDV.Tour.Script.executeJS,"init":TDV.Tour.Script.init,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMainViewer":TDV.Tour.Script.getMainViewer,"enableVR":TDV.Tour.Script.enableVR,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setValue":TDV.Tour.Script.setValue,"cloneBindings":TDV.Tour.Script.cloneBindings,"startMeasurement":TDV.Tour.Script.startMeasurement,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"textToSpeech":TDV.Tour.Script.textToSpeech,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"toggleVR":TDV.Tour.Script.toggleVR,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"disableVR":TDV.Tour.Script.disableVR,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"mixObject":TDV.Tour.Script.mixObject,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"shareSocial":TDV.Tour.Script.shareSocial,"setMapLocation":TDV.Tour.Script.setMapLocation,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"downloadFile":TDV.Tour.Script.downloadFile,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setLocale":TDV.Tour.Script.setLocale,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"createTween":TDV.Tour.Script.createTween},"scrollBarColor":"#000000","minHeight":20,"id":"rootPlayer","minWidth":20,"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"start":"this.init()","layout":"absolute","vrPolyfillScale":0.5,"propagateClick":false,"data":{"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false},"locales":{"en":"locale/en.txt"},"history":{},"defaultLocale":"en","name":"Player445","displayTooltipInTouchScreens":true},"scrollBarMargin":2,"hash": "0e3c4e370604541a51250b2014a2295d7d7a40d6031b65d400675d0bb4814e92", "definitions": [{"label":trans('video_49E973C1_462A_6A22_41C8_A30DD402226B.label'),"thumbnailUrl":"media/video_49E973C1_462A_6A22_41C8_A30DD402226B_t.jpg","id":"video_49E973C1_462A_6A22_41C8_A30DD402226B","video":"this.videores_574C7844_462A_E622_41CF_7A126057F2C0","data":{"label":"Sasken_Telematics_and_Ride-Hailing_Case_Study"},"width":854,"height":480,"class":"Video"},{"arrowKeysAction":"translate","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true},{"vfov":180,"label":trans('panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB.label'),"overlays":["this.overlay_542C26A7_475F_EBEB_41C5_D9AFB6525B3A","this.overlay_545226A9_475F_EBE4_41C9_4132A7DD88AA","this.overlay_545DE6AB_475F_EBE4_41C3_1EE1235BB565"],"thumbnailUrl":"media/panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_t.jpg","frames":[{"cube":{"levels":[{"tags":"ondemand","rowCount":6,"width":18432,"url":"media/panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_0/{face}/0/{row}_{column}.jpg","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"tags":"ondemand","rowCount":3,"width":9216,"url":"media/panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_0/{face}/1/{row}_{column}.jpg","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"tags":"ondemand","rowCount":2,"width":6144,"url":"media/panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_0/{face}/2/{row}_{column}.jpg","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"rowCount":1,"width":3072,"url":"media/panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_0/{face}/3/{row}_{column}.jpg","height":512,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_t.jpg","class":"CubicPanoramaFrame"}],"id":"panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB","hfovMax":130,"hfov":360,"data":{"label":"poly_haven_studio_8k"},"class":"Panorama","hfovMin":"120%"},{"initialPosition":{"pitch":-1.3,"yaw":-132.14,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_559E05D3_475D_69A5_41C3_FD1F088FE536","class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_camera"},{"items":[{"media":"this.video_49E973C1_462A_6A22_41C8_A30DD402226B","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_54778B53_4745_FAA4_4183_DA39348C64C6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_54778B53_4745_FAA4_4183_DA39348C64C6, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","class":"VideoPlayListItem"}],"id":"playList_54778B53_4745_FAA4_4183_DA39348C64C6","class":"PlayList"},{"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarRight":0,"data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"firstTransitionDuration":0,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"subtitlesBottom":50,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"progressRight":0,"toolTipPaddingRight":6,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesFontFamily":"Arial","toolTipShadowColor":"#333333","playbackBarHeadBorderRadius":0,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","progressBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","id":"MainViewer","playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"progressHeight":10,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":0,"progressBorderSize":0,"progressBarBorderSize":0,"propagateClick":false,"playbackBarHeadShadow":true,"vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","progressBorderRadius":0,"playbackBarBottom":5,"progressLeft":0,"height":"100%","width":"100%","class":"ViewerArea","toolTipPaddingTop":4},{"items":[{"camera":"this.panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB_camera","media":"this.panorama_54144B51_475D_5AA4_41CF_1F888D60B2AB","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"clickAction":"play_pause","displayPlayOverlay":true,"class":"VideoPlayer","viewerArea":"this.MainViewer","id":"MainViewerVideoPlayer","displayPlaybackBar":true},{"closeButtonRollOverBackgroundColorRatios":[0],"veilColor":["#000000","#000000"],"footerBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"layout":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"veilOpacity":0.4,"minHeight":0,"titlePaddingLeft":5,"minWidth":0,"shadowHorizontalLength":3,"headerPaddingTop":10,"titlePaddingBottom":5,"backgroundColorRatios":[],"closeButtonPressedBorderSize":0,"footerBorderColor":"#000000","footerBackgroundColorRatios":[0,0.8980392156862745,1],"titleFontColor":"#00CCFF","footerBackgroundOpacity":1,"titleFontFamily":"Arial","headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonIconHeight":12,"headerVerticalAlign":"middle","closeButtonIconColor":"#000000","closeButtonPaddingLeft":0,"modal":true,"data":{"name":"Window34668"},"bodyPaddingRight":5,"footerBorderSize":0,"scrollBarMargin":2,"title":trans('window_545846AA_475F_EBE4_41B9_A515189C3FBD.title'),"bodyBorderSize":0,"closeButtonBorderRadius":11,"borderRadius":5,"headerBorderColor":"#000000","veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonPressedIconColor":"#FFFFFF","children":["this.htmlText_545A46AA_475F_EBE4_41CC_771ADEAA5259"],"footerHeight":5,"bodyBackgroundColorDirection":"vertical","closeButtonBorderSize":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"closeButtonRollOverIconLineWidth":2,"closeButtonRollOverBorderSize":0,"headerPaddingRight":10,"shadowSpread":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonRollOverBackgroundOpacity":0,"closeButtonPaddingRight":0,"titlePaddingRight":5,"horizontalAlign":"center","closeButtonBackgroundColor":[],"scrollBarColor":"#000000","headerBackgroundColorDirection":"vertical","id":"window_545846AA_475F_EBE4_41B9_A515189C3FBD","verticalAlign":"middle","titleFontSize":"4vmin","bodyPaddingLeft":5,"veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"backgroundColor":[],"veilColorRatios":[0,1],"bodyBorderColor":"#000000","closeButtonIconWidth":12,"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"shadow":true,"closeButtonPressedBackgroundColor":["#3A1D1F"],"titleFontWeight":"bold","veilColorDirection":"horizontal","bodyPaddingBottom":5,"showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonPressedBackgroundColorRatios":[0],"titlePaddingTop":5,"closeButtonRollOverBackgroundColor":["#C13535"],"bodyPaddingTop":5,"overflow":"scroll","closeButtonRollOverBorderColor":"#000000","shadowColor":"#000000","propagateClick":false,"closeButtonPressedIconLineWidth":2,"headerBackgroundOpacity":1,"closeButtonPressedBackgroundOpacity":0,"shadowVerticalLength":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonBackgroundColorRatios":[],"closeButtonPressedBorderColor":"#000000","bodyBackgroundOpacity":1,"width":400,"titleHorizontalAlign":"center","closeButtonBorderColor":"#000000","height":600,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"headerBorderSize":0,"closeButtonBackgroundOpacity":0,"headerPaddingBottom":10,"closeButtonPaddingTop":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"gap":10,"class":"Window","closeButtonIconLineWidth":2},{"closeButtonRollOverBackgroundColorRatios":[0],"veilColor":["#000000","#000000"],"footerBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"layout":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"veilOpacity":0.4,"minHeight":0,"titlePaddingLeft":5,"minWidth":0,"shadowHorizontalLength":3,"headerPaddingTop":10,"titlePaddingBottom":5,"backgroundColorRatios":[],"closeButtonPressedBorderSize":0,"footerBorderColor":"#000000","footerBackgroundColorRatios":[0,0.8980392156862745,1],"titleFontColor":"#00CCFF","footerBackgroundOpacity":1,"titleFontFamily":"Arial","headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonIconHeight":12,"headerVerticalAlign":"middle","closeButtonIconColor":"#000000","closeButtonPaddingLeft":0,"modal":true,"data":{"name":"Window36342"},"bodyPaddingRight":5,"footerBorderSize":0,"scrollBarMargin":2,"title":trans('window_545D26AB_475F_EBE4_41C8_A4A24B1F78DF.title'),"bodyBorderSize":0,"closeButtonBorderRadius":11,"borderRadius":5,"headerBorderColor":"#000000","veilShowEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonPressedIconColor":"#FFFFFF","children":["this.htmlText_545D16AC_475F_EBFC_41B3_F02B58DB04F4"],"footerHeight":5,"bodyBackgroundColorDirection":"vertical","closeButtonBorderSize":0,"headerPaddingLeft":10,"shadowOpacity":0.5,"closeButtonRollOverIconLineWidth":2,"closeButtonRollOverBorderSize":0,"headerPaddingRight":10,"shadowSpread":1,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonRollOverBackgroundOpacity":0,"closeButtonPaddingRight":0,"titlePaddingRight":5,"horizontalAlign":"center","closeButtonBackgroundColor":[],"scrollBarColor":"#000000","headerBackgroundColorDirection":"vertical","id":"window_545D26AB_475F_EBE4_41C8_A4A24B1F78DF","verticalAlign":"middle","titleFontSize":"4vmin","bodyPaddingLeft":5,"veilHideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"backgroundColor":[],"veilColorRatios":[0,1],"bodyBorderColor":"#000000","closeButtonIconWidth":12,"hideEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeOutEffect"},"shadow":true,"closeButtonPressedBackgroundColor":["#3A1D1F"],"titleFontWeight":"bold","veilColorDirection":"horizontal","bodyPaddingBottom":5,"showEffect":{"easing":"cubic_in_out","duration":500,"class":"FadeInEffect"},"closeButtonPressedBackgroundColorRatios":[0],"titlePaddingTop":5,"closeButtonRollOverBackgroundColor":["#C13535"],"bodyPaddingTop":5,"overflow":"scroll","closeButtonRollOverBorderColor":"#000000","shadowColor":"#000000","propagateClick":false,"closeButtonPressedIconLineWidth":2,"headerBackgroundOpacity":1,"closeButtonPressedBackgroundOpacity":0,"shadowVerticalLength":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonBackgroundColorRatios":[],"closeButtonPressedBorderColor":"#000000","bodyBackgroundOpacity":1,"width":400,"titleHorizontalAlign":"center","closeButtonBorderColor":"#000000","height":600,"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"headerBorderSize":0,"closeButtonBackgroundOpacity":0,"headerPaddingBottom":10,"closeButtonPaddingTop":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"gap":10,"class":"Window","closeButtonIconLineWidth":2},{"height":480,"levels":["this.videolevel_5459FA93_4745_FBA4_41C5_96022483169A"],"width":854,"id":"videores_574C7844_462A_E622_41CF_7A126057F2C0","class":"VideoResource"},{"image":"this.res_55EF8600_4636_2A22_41AD_E36AC53849C8","useHandCursor":true,"autoplay":true,"cues":[],"distance":50,"data":{"label":"Video"},"vertices":[{"pitch":4.07,"yaw":-140.55,"class":"PanoramaPoint"},{"pitch":3.95,"yaw":-123.51,"class":"PanoramaPoint"},{"pitch":-5.62,"yaw":-123.51,"class":"PanoramaPoint"},{"pitch":-5.9,"yaw":-140.61,"class":"PanoramaPoint"}],"click":"if(this.overlay_542C26A7_475F_EBEB_41C5_D9AFB6525B3A.get('state') != 'playing'){ this.overlay_542C26A7_475F_EBEB_41C5_D9AFB6525B3A.play(); } else { this.overlay_542C26A7_475F_EBEB_41C5_D9AFB6525B3A.pause(); }","class":"QuadVideoPanoramaOverlay","id":"overlay_542C26A7_475F_EBEB_41C5_D9AFB6525B3A","video":"this.videores_574C7844_462A_E622_41CF_7A126057F2C0"},{"data":{"label":"Industrial"},"id":"overlay_545226A9_475F_EBE4_41C9_4132A7DD88AA","maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_545266A9_475F_EBE4_41C5_8B74FB53A509"],"items":[{"pitch":-1.07,"vfov":5.31,"yaw":-101.99,"data":{"label":"Industrial"},"distance":50,"image":"this.res_5F17832B_41CD_C01B_41CB_2B4897770B8F","hfov":6.04,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","roll":0}],"useHandCursor":true},{"data":{"label":"Semiconductor"},"id":"overlay_545DE6AB_475F_EBE4_41C3_1EE1235BB565","maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_545DD6AB_475F_EBE4_41D1_7FE9C50E26C2"],"items":[{"pitch":-0.76,"vfov":5,"yaw":178.87,"data":{"label":"Semiconductor"},"distance":50,"image":"this.res_5F16132C_41CD_C01D_41C6_A5F8592800EA","hfov":5,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","roll":0.09}],"useHandCursor":true},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_559E05D3_475D_69A5_41C3_FD1F088FE536"},{"paddingTop":10,"paddingBottom":10,"scrollBarVisible":"always","scrollBarColor":"#000000","minHeight":0,"id":"htmlText_545A46AA_475F_EBE4_41CC_771ADEAA5259","minWidth":0,"data":{"name":"HTMLText34669"},"scrollBarHorizontalMargin":-3,"backgroundOpacity":0,"propagateClick":false,"paddingLeft":10,"paddingRight":10,"width":"100%","height":"100%","html":trans('htmlText_545A46AA_475F_EBE4_41CC_771ADEAA5259.html'),"class":"HTMLText"},{"paddingTop":10,"paddingBottom":10,"scrollBarVisible":"always","scrollBarColor":"#000000","minHeight":0,"id":"htmlText_545D16AC_475F_EBFC_41B3_F02B58DB04F4","minWidth":0,"data":{"name":"HTMLText36343"},"scrollBarHorizontalMargin":-3,"backgroundOpacity":0,"propagateClick":false,"paddingLeft":10,"paddingRight":10,"width":"100%","height":"100%","html":trans('htmlText_545D16AC_475F_EBFC_41B3_F02B58DB04F4.html'),"class":"HTMLText"},{"width":854,"url":trans('videolevel_5459FA93_4745_FBA4_41C5_96022483169A.url'),"codec":"h264","type":"video/mp4","height":480,"framerate":25,"posterURL":trans('videolevel_5459FA93_4745_FBA4_41C5_96022483169A.posterURL'),"id":"videolevel_5459FA93_4745_FBA4_41C5_96022483169A","bitrate":768,"class":"VideoResourceLevel"},{"levels":[{"width":854,"url":"media/res_55EF8600_4636_2A22_41AD_E36AC53849C8_0.jpg","height":480,"class":"ImageResourceLevel"}],"id":"res_55EF8600_4636_2A22_41AD_E36AC53849C8","class":"ImageResource"},{"click":"this.showWindow(this.window_545846AA_475F_EBE4_41B9_A515189C3FBD, null, false)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_545266A9_475F_EBE4_41C5_8B74FB53A509"},{"levels":[{"width":171,"url":"media/res_5F17832B_41CD_C01B_41CB_2B4897770B8F_0.png","height":171,"class":"ImageResourceLevel"}],"id":"res_5F17832B_41CD_C01B_41CB_2B4897770B8F","class":"ImageResource"},{"click":"this.showWindow(this.window_545D26AB_475F_EBE4_41C8_A4A24B1F78DF, null, false)","mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_545DD6AB_475F_EBE4_41D1_7FE9C50E26C2"},{"levels":[{"width":161,"url":"media/res_5F16132C_41CD_C01D_41C6_A5F8592800EA_0.png","height":161,"class":"ImageResourceLevel"}],"id":"res_5F16132C_41CD_C01D_41C6_A5F8592800EA","class":"ImageResource"}],"width":"100%","height":"100%","defaultMenu":["fullscreen","mute","rotation"],"class":"Player","children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Thu Feb 27 2025