var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "UserBackgroundHints": "ShadowBackground"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Memory Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "memory/physical/used": "108,144,244"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"memory/physical/total\"]",
                            "totalSensors": "[\"memory/physical/usedPercent\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.memory",
                    "title": "Memory Usage"
                },
                {
                    "config": {
                        "/Appearance": {
                            "boldText": "true",
                            "fuzzyness": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.fuzzyclock",
                    "title": "Fuzzy Clock"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1463x914": "Applet-125:336.875,144.175,624,96,329;Applet-100:1056,224,256,240,0;",
                    "ItemGeometries-2560x1600": "Applet-100:-1.4133,304,192,272,0;Applet-94:0,0,480,304,0;",
                    "ItemGeometriesHorizontal": "Applet-125:336.875,144.175,624,96,329;Applet-100:1056,224,256,240,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "216",
                    "ToolBoxButtonY": "37"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Blur": "true",
                    "Image": "/home/nokiapapir/.local/share/wallpapers/Sweet-Wallpapers/Sweet-space.png",
                    "SlidePaths": "/home/nokiapapir/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/General": {
                            "launchers": "preferred://browser,preferred://filemanager,applications:systemsettings.desktop,applications:org.kde.discover.desktop,applications:org.kde.konsole.desktop,applications:org.kde.kdeconnect.sms.desktop,applications:chrome-hnpfjngllnobngcgfapefoaidbinmjnm-Default.desktop,applications:chrome-pjibgclleladliembfgfagdaldikeohf-Default.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1463"
                }
            },
            "height": 2.2222222222222223,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 81.27777777777777,
            "minimumLength": 81.27777777777777,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "customButtonImage": "plasma-nano",
                            "favoritesPortedToKAstats": "true",
                            "recentOrdering": "1",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "360",
                            "popupWidth": "360"
                        }
                    },
                    "plugin": "org.kde.plasma.mediacontroller"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "75",
                            "popupHeight": "450",
                            "popupWidth": "396"
                        },
                        "/Appearance": {
                            "showDate": "false",
                            "showSeconds": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "85"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "70"
                        },
                        "/General": {
                            "migrated": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.volume"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65"
                        }
                    },
                    "plugin": "org.kde.kdeconnect"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "267",
                            "popupWidth": "360"
                        }
                    },
                    "plugin": "org.kde.plasma.battery"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "75",
                            "popupHeight": "432",
                            "popupWidth": "324"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1463"
                }
            },
            "height": 2.0555555555555554,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 81.27777777777777,
            "minimumLength": 81.27777777777777,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
