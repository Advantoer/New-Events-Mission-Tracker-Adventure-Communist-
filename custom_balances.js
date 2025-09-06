// Event Data
DATA["thanksgiving-bal-10"] = {
    "AirDrops": [
        {
            "Id": 10001,
            "AirDropRewardType": "CoreResource",
            "IsAd": false,
            "IsAdSkippable": false,
            "Weight": 15,
            "MaxAdsPerInterval": - 1,
            "RewardCalculation": {
                "A": 1800,
                "B": 5,
                "C": 0.125,
                "D": 25
            }
        },
        {
            "Id": 10002,
            "AirDropRewardType": "PrimaryCurrency",
            "IsAd": false,
            "IsAdSkippable": false,
            "Weight": 15,
            "MaxAdsPerInterval": -1,
            "RewardCalculation": {
                "A": 450,
                "B": 1.55,
                "C": 0.4,
                "D": 10
            }
        },
        {
            "Id": 10003,
            "AirDropRewardType": "PrimaryCurrency",
            "IsAd": true,
            "IsAdSkippable": false,
            "Weight": 40,
            "MaxAdsPerInterval": 6,
            "RewardCalculation": {
                "A": 7500,
                "B": 1.7,
                "C": 0.2,
                "D": -650
            }
        },
        {
            "Id": 10004,
            "AirDropRewardType": "SoftCurrency",
            "IsAd": true,
            "IsAdSkippable": false,
            "Weight": 35,
            "MaxAdsPerInterval": 6,
            "RewardCalculation": {
                "A": 700,
                "B": 1.02,
                "C": 1.001,
                "D": 40
            }
        }
    ],
    "AirDropsConfig": [
        {
            "AirDropBaseInterval": 50,
            "AirDropIntervalVariance": 0.1,
            "AirDropIntervalMultiplier": 1.2,
            "ClaimCountResetInterval": 5400,
            "AdCountResetInterval": 43200,
            "StartupDelay": 30,
            "StartCondition": {
                "ConditionType": "RankReached",
                "Threshold": 2
            },
            "HasAdFreeAirDrops": true,
            "ProratedAdFreeAirDropsEnabled": true
        }
    ],
    "GachaFreeCycle": [
        {
            "Cycle": [
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic"
            ],
            "ScriptId": "sc3"
        }
    ],
    "GachaGoldCycle": [
        {
            "Cycle": {
                "plastic": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "armored": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
    ],
    "GachaLootTable": [
        {
            "Id": "plastic",
            "CardWeight": 12,
            "RareWeight": - 1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 6,
            "ScienceMin": 80,
            "ScienceMax": 82,
            "TrophyMin": 10,
            "TrophyMax": 10,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Normal"
        },
        {
            "Id": "armored",
            "CardWeight": 36,
            "RareWeight": - 1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 9,
            "ScienceMin": 160,
            "ScienceMax": 164,
            "TrophyMin": 30,
            "TrophyMax": 30,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Normal"
        },
        {
            "Id": "titanium",
            "CardWeight": 350,
            "RareWeight": - 1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 5,
            "ScienceMin": 3500,
            "ScienceMax": 3500,
            "TrophyMin": 0,
            "TrophyMax": 0,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Premium"
        },
        {
            "Id": "tech",
            "CardWeight": 100,
            "RareWeight": - 1,
            "EpicWeight": -1,
            "SupremeWeight": -1,
            "LteRareWeight": 1,
            "ScienceMin": 0,
            "ScienceMax": 0,
            "TrophyMin": 0,
            "TrophyMax": 0,
            "ChanceMultiplier": 10,
            "WeightDivider": 10,
            "Type": "Fixed"
        },
        {
            "Id": "sc_m01",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m02",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m03",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m04",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m05",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m06",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m07",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m08",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m09",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m10",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m11",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m12",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m13",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m14",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m15",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m16",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m17",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m18",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m19",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m20",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m21",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m22",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m23",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m24",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m25",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m26",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m27",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m28",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m29",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m30",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m31",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m32",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m33",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m34",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m35",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m36",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m37",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m38",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m39",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m40",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m41",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m42",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m43",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m44",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m45",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m46",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m47",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m48",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m49",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m50",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m51",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m52",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m53",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m54",
            "Type": "Scripted"
        },
        {
            "Id": "sc_m55",
            "Type": "Scripted"
        },
        {
            "Id": "sc3",
            "Type": "Scripted"
        }
    ],
    "GachaScripts": [
        {
            "GachaId": "sc_m01",
            "MimicGachaId": "plastic",
            "Science": 65,
            "Gold": 0,
            "Trophy": 10,
            "Card": [
                {
                    "Id": "THX001",
                    "Value": 3
                },
                {
                    "Id": "THX002",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m02",
            "MimicGachaId": "plastic",
            "Science": 70,
            "Gold": 0,
            "Trophy": 20,
            "Card": [
                {
                    "Id": "THX036",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m03",
            "MimicGachaId": "plastic",
            "Science": 75,
            "Gold": 0,
            "Trophy": 20,
            "Card": [
                {
                    "Id": "THX042",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m04",
            "MimicGachaId": "plastic",
            "Science": 80,
            "Gold": 0,
            "Trophy": 30,
            "Card": [
                {
                    "Id": "THX010",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m05",
            "MimicGachaId": "plastic",
            "Science": 85,
            "Gold": 0,
            "Trophy": 30,
            "Card": [
                {
                    "Id": "THX002",
                    "Value": 3
                },
                {
                    "Id": "THX003",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m06",
            "MimicGachaId": "plastic",
            "Science": 90,
            "Gold": 0,
            "Trophy": 40,
            "Card": [
                {
                    "Id": "THX010",
                    "Value": 4
                },
                {
                    "Id": "THX043",
                    "Value": 3
                },
            ]
        },
        {
            "GachaId": "sc_m07",
            "MimicGachaId": "plastic",
            "Science": 95,
            "Gold": 0,
            "Trophy": 50,
            "Card": [
                {
                    "Id": "THX010",
                    "Value": 5
                },
                {
                    "Id": "THX037",
                    "Value": 3
                },
            ]
        },
        {
            "GachaId": "sc_m08",
            "MimicGachaId": "plastic",
            "Science": 105,
            "Gold": 0,
            "Trophy": 50,
            "Card": [
                {
                    "Id": "THX011",
                    "Value": 8
                },
                {
                    "Id": "THX037",
                    "Value": 1
                },
                {
                    "Id": "THX043",
                    "Value": 1
                },
            ]
        },
         {
            "GachaId": "sc_m09",
            "MimicGachaId": "plastic",
            "Science": 115,
            "Gold": 0,
            "Trophy": 70,
            "Card": [
                {
                    "Id": "THX055",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m10",
            "MimicGachaId": "plastic",
            "Science": 115,
            "Gold": 0,
            "Trophy": 70,
            "Card": [
                {
                    "Id": "THX004",
                    "Value": 9
                },
                {
                    "Id": "THX036",
                    "Value": 3
                },
                {
                    "Id": "THX042",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m11",
            "MimicGachaId": "plastic",
            "Science": 125,
            "Gold": 0,
            "Trophy": 80,
            "Card": [
                {
                    "Id": "THX018",
                    "Value": 6
                },
                {
                    "Id": "THX043",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m12",
            "MimicGachaId": "plastic",
            "Science": 130,
            "Gold": 0,
            "Trophy": 100,
            "Card": [
                {
                    "Id": "THX011",
                    "Value": 3
                },
                {
                    "Id": "THX044",
                    "Value": 4
                },
                {
                    "Id": "THX037",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m13",
            "MimicGachaId": "plastic",
            "Science": 135,
            "Gold": 0,
            "Trophy": 100,
            "Card": [
                {
                    "Id": "THX012",
                    "Value": 7
                },
                {
                    "Id": "THX037",
                    "Value": 2
                },
                {
                    "Id": "THX043",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m14",
            "MimicGachaId": "plastic",
            "Science": 140,
            "Gold": 0,
            "Trophy": 125,
            "Card": [
                {
                    "Id": "THX005",
                    "Value": 8
                },
                {
                    "Id": "THX037",
                    "Value": 3
                },
            ]
        },
        {
            "GachaId": "sc_m15",
            "MimicGachaId": "plastic",
            "Science": 150,
            "Gold": 0,
            "Trophy": 125,
            "Card": [
                {
                    "Id": "THX011",
                    "Value": 1
                },
                {
                    "Id": "THX047",
                    "Value": 2
                },
                {
                    "Id": "THX042",
                    "Value": 2
                },
                {
                    "Id": "THX043",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m16",
            "MimicGachaId": "plastic",
            "Science": 150,
            "Gold": 0,
            "Trophy": 125,
            "Card": [
                {
                    "Id": "THX018",
                    "Value": 2
                },
                {
                    "Id": "THX038",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m17",
            "MimicGachaId": "plastic",
            "Science": 155,
            "Gold": 0,
            "Trophy": 125,
            "Card": [
                {
                    "Id": "THX018",
                    "Value": 9
                },
                {
                    "Id": "THX019",
                    "Value": 6
                },
                {
                    "Id": "THX044",
                    "Value": 2
                },
                {
                    "Id": "THX047",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m18",
            "MimicGachaId": "plastic",
            "Science": 165,
            "Gold": 0,
            "Trophy": 200,
            "Card": [
                {
                    "Id": "THX048",
                    "Value": 1
                },
                {
                    "Id": "THX001",
                    "Value": 5
                },
                {
                    "Id": "THX002",
                    "Value": 4
                },
                {
                    "Id": "THX003",
                    "Value": 3
                },
                {
                    "Id": "THX004",
                    "Value": 2
                },
                {
                    "Id": "THX005",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m19",
            "MimicGachaId": "plastic",
            "Science": 280,
            "Gold": 0,
            "Trophy": 320,
            "Card": [
                {
                    "Id": "THX040",
                    "Value": 3
                },
            ]
        },
        {
            "GachaId": "sc_m20",
            "MimicGachaId": "plastic",
            "Science": 180,
            "Gold": 0,
            "Trophy": 250,
            "Card": [
                {
                    "Id": "THX049",
                    "Value": 2
                },
                {
                    "Id": "THX010",
                    "Value": 4
                },
                {
                    "Id": "THX011",
                    "Value": 3
                },
                {
                    "Id": "THX012",
                    "Value": 2
                },
                {
                    "Id": "THX013",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m21",
            "MimicGachaId": "plastic",
            "Science": 185,
            "Gold": 0,
            "Trophy": 255,
            "Card": [
                {
                    "Id": "THX020",
                    "Value": 4
                },
                {
                    "Id": "THX044",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m22",
            "MimicGachaId": "plastic",
            "Science": 185,
            "Gold": 0,
            "Trophy": 265,
            "Card": [
                {
                    "Id": "THX006",
                    "Value": 9
                },
                {
                    "Id": "THX041",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m23",
            "MimicGachaId": "plastic",
            "Science": 200,
            "Gold": 0,
            "Trophy": 275,
            "Card": [
                {
                    "Id": "THX041",
                    "Value": 2
                },
                {
                    "Id": "THX036",
                    "Value": 1
                },
                {
                    "Id": "THX037",
                    "Value": 1
                },
                {
                    "Id": "THX038",
                    "Value": 1
                },
                {
                    "Id": "THX006",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m24",
            "MimicGachaId": "plastic",
            "Science": 200,
            "Gold": 0,
            "Trophy": 275,
            "Card": [
                {
                    "Id": "THX025",
                    "Value": 5
                },
                {
                    "Id": "THX047",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m25",
            "MimicGachaId": "plastic",
            "Science": 200,
            "Gold": 0,
            "Trophy": 270,
            "Card": [
                {
                    "Id": "THX050",
                    "Value": 3
                },
                {
                    "Id": "THX018",
                    "Value": 5
                },
                {
                    "Id": "THX019",
                    "Value": 3
                },
                {
                    "Id": "THX020",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m26",
            "MimicGachaId": "plastic",
            "Science": 200,
            "Gold": 0,
            "Trophy": 275,
            "Card": [
                {
                    "Id": "THX045",
                    "Value": 3
                },
                {
                    "Id": "THX025",
                    "Value": 10
                },
            ]
        },
        {
            "GachaId": "sc_m27",
            "MimicGachaId": "plastic",
            "Science": 210,
            "Gold": 0,
            "Trophy": 275,
            "Card": [
                {
                    "Id": "THX039",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m28",
            "MimicGachaId": "plastic",
            "Science": 250,
            "Gold": 0,
            "Trophy": 300,
            "Card": [
                {
                    "Id": "THX014",
                    "Value": 4
                },
                {
                    "Id": "THX041",
                    "Value": 4
                },
                {
                    "Id": "THX039",
                    "Value": 1
                },
                {
                    "Id": "THX038",
                    "Value": 1
                },
                {
                    "Id": "THX037",
                    "Value": 2
                },
                {
                    "Id": "THX036",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m29",
            "MimicGachaId": "plastic",
            "Science": 205,
            "Gold": 0,
            "Trophy": 275,
            "Card": [
                {
                    "Id": "THX039",
                    "Value": 4
                },
                {
                    "Id": "THX041",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m30",
            "MimicGachaId": "plastic",
            "Science": 215,
            "Gold": 0,
            "Trophy": 280,
            "Card": [
                {
                    "Id": "THX021",
                    "Value": 3
                },
                {
                    "Id": "THX020",
                    "Value": 4
                },
                {
                    "Id": "THX019",
                    "Value": 5
                },
                {
                    "Id": "THX018",
                    "Value": 6
                },
                {
                    "Id": "THX045",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m31",
            "MimicGachaId": "plastic",
            "Science": 225,
            "Gold": 0,
            "Trophy": 280,
            "Card": [
                {
                    "Id": "THX007",
                    "Value": 11
                },
            ]
        },
        {
            "GachaId": "sc_m32",
            "MimicGachaId": "plastic",
            "Science": 225,
            "Gold": 0,
            "Trophy": 280,
            "Card": [
                {
                    "Id": "THX026",
                    "Value": 9
                },
            ]
        },
        {
            "GachaId": "sc_m33",
            "MimicGachaId": "plastic",
            "Science": 225,
            "Gold": 0,
            "Trophy": 280,
            "Card": [
                {
                    "Id": "THX015",
                    "Value": 12
                },
            ]
        },
        {
            "GachaId": "sc_m34",
            "MimicGachaId": "plastic",
            "Science": 230,
            "Gold": 0,
            "Trophy": 280,
            "Card": [
                {
                    "Id": "THX050",
                    "Value": 3
                },
            ]
        },
        {
            "GachaId": "sc_m35",
            "MimicGachaId": "plastic",
            "Science": 234,
            "Gold": 0,
            "Trophy": 286,
            "Card": [
                {
                    "Id": "THX021",
                    "Value": 11
                },
            ]
        },
        {
            "GachaId": "sc_m36",
            "MimicGachaId": "plastic",
            "Science": 225,
            "Gold": 0,
            "Trophy": 280,
            "Card": [
                {
                    "Id": "THX015",
                    "Value": 12
                },
            ]
        },
        {
            "GachaId": "sc_m37",
            "MimicGachaId": "plastic",
            "Science": 250,
            "Gold": 0,
            "Trophy": 300,
            "Card": [
                {
                    "Id": "THX053",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m38",
            "MimicGachaId": "plastic",
            "Science": 265,
            "Gold": 0,
            "Trophy": 305,
            "Card": [
                {
                    "Id": "THX022",
                    "Value": 1
                },
            ]
        },
        {
            "GachaId": "sc_m39",
            "MimicGachaId": "plastic",
            "Science": 275,
            "Gold": 0,
            "Trophy": 325,
            "Card": [
                {
                    "Id": "THX051",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m40",
            "MimicGachaId": "plastic",
            "Science": 280,
            "Gold": 0,
            "Trophy": 335,
            "Card": [
                {
                    "Id": "THX028",
                    "Value": 8
                },
            ]
        },
        {
            "GachaId": "sc_m41",
            "MimicGachaId": "plastic",
            "Science": 275,
            "Gold": 0,
            "Trophy": 325,
            "Card": [
                {
                    "Id": "THX031",
                    "Value": 10
                },
            ]
        },
        {
            "GachaId": "sc_m42",
            "MimicGachaId": "plastic",
            "Science": 275,
            "Gold": 0,
            "Trophy": 325,
            "Card": [
                {
                    "Id": "THX008",
                    "Value": 8
                },
            ]
        },
        {
            "GachaId": "sc_m43",
            "MimicGachaId": "plastic",
            "Science": 300,
            "Gold": 0,
            "Trophy": 350,
            "Card": [
                {
                    "Id": "THX016",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m44",
            "MimicGachaId": "plastic",
            "Science": 300,
            "Gold": 0,
            "Trophy": 350,
            "Card": [
                {
                    "Id": "THX032",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m45",
            "MimicGachaId": "plastic",
            "Science": 300,
            "Gold": 0,
            "Trophy": 350,
            "Card": [
                {
                    "Id": "THX023",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m46",
            "MimicGachaId": "plastic",
            "Science": 320,
            "Gold": 0,
            "Trophy": 350,
            "Card": [
                {
                    "Id": "THX054",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m47",
            "MimicGachaId": "plastic",
            "Science": 300,
            "Gold": 0,
            "Trophy": 350,
            "Card": [
                {
                    "Id": "THX009",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m48",
            "MimicGachaId": "plastic",
            "Science": 300,
            "Gold": 0,
            "Trophy": 350,
            "Card": [
                {
                    "Id": "THX029",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m49",
            "MimicGachaId": "plastic",
            "Science": 325,
            "Gold": 0,
            "Trophy": 375,
            "Card": [
                {
                    "Id": "THX017",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m50",
            "MimicGachaId": "plastic",
            "Science": 350,
            "Gold": 0,
            "Trophy": 400,
            "Card": [
                {
                    "Id": "THX033",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m51",
            "MimicGachaId": "plastic",
            "Science": 360,
            "Gold": 0,
            "Trophy": 500,
            "Card": [
                {
                    "Id": "THX024",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m52",
            "MimicGachaId": "plastic",
            "Science": 380,
            "Gold": 0,
            "Trophy": 600,
            "Card": [
                {
                    "Id": "THX052",
                    "Value": 2
                },
            ]
        },
        {
            "GachaId": "sc_m53",
            "MimicGachaId": "plastic",
            "Science": 450,
            "Gold": 0,
            "Trophy": 700,
            "Card": [
                {
                    "Id": "THX034",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m54",
            "MimicGachaId": "plastic",
            "Science": 600,
            "Gold": 0,
            "Trophy": 750,
            "Card": [
                {
                    "Id": "THX030",
                    "Value": 5
                },
            ]
        },
        {
            "GachaId": "sc_m55",
            "MimicGachaId": "plastic",
            "Science": 700,
            "Gold": 0,
            "Trophy": 1000,
            "Card": [
                {
                    "Id": "THX035",
                    "Value": 15
                },
            ]
        },
        {
            "GachaId": "sc3",
            "MimicGachaId": "plastic",
            "Science": 52,
            "Gold": 0,
            "Trophy": 5,
            "Card": [
                {
                    "Id": "THX001",
                    "Value": 3
                },
                {
                    "Id": "THX042",
                    "Value": 1
                },
            ]
        }
    ],
    "Generators": [
        {
            "Id": "comradegenerator",
            "Name": "Comrade",
            "ResourceType": "comradegenerator",
            "GeneratorType": "Automatic",
            "Generate": {
                "Resource": "comrade",
                "Qty": 1
            },
            "BaseCompletionTime": 1,
            "IncludeInAll": false,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            }
        },
        {
            "Id": "potatomasher",
            "Name": "PotatoMasher",
            "ResourceType": "potatomasher",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "Mashpotato",
                    "Qty": 10
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "Mashpotato",
                "Qty": 5
            },
            "BaseCompletionTime": 2,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "Mashpotato",
                    "Threshold": 0
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "foodlabour",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 2
            }
        },
        {
            "Id": "chef",
            "Name": "Chefs",
            "ResourceType": "chef",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "potatomasher",
                    "Qty": 10
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 1e+6
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "potatomasher",
                "Qty": 10
            },
            "BaseCompletionTime": 6,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "potatomasher",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "potatomasher",
                "Threshold": 250
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 4
            }
        },
        {
            "Id": "kitchen",
            "Name": "Kitchens",
            "ResourceType": "kitchen",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "chef",
                    "Qty": 1000
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 1e+12
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "chef",
                "Qty": 15
            },
            "BaseCompletionTime": 18,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "chef",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "chef",
                "Threshold": 50000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 6
            }
        },
        {
            "Id": "tatertruck",
            "Name": "Tatertrucks",
            "ResourceType": "tatertruck",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "kitchen",
                    "Qty": 1000
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 5e+23
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "kitchen",
                "Qty": 20
            },
            "BaseCompletionTime": 54,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "kitchen",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "kitchen",
                "Threshold": 5e+6
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 8
            }
        },
        {
            "Id": "silosmasher",
            "Name": "Silosmashers",
            "ResourceType": "silosmasher",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "tatertruck",
                    "Qty": 2.5e+6
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 2e+44
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "tatertruck",
                "Qty": 25
            },
            "BaseCompletionTime": 162,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "tatertruck",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "tatertruck",
                "Threshold": 7.5e+7
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 10
            }
        },
        {
            "Id": "gravyfeds",
            "Name": "Gravyfeds",
            "ResourceType": "gravyfeds",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "silosmasher",
                    "Qty": 7.5e+6
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 1e+74
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "silosmasher",
                "Qty": 30
            },
            "BaseCompletionTime": 486,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "silosmasher",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "silosmasher",
                "Threshold": 7.5e+8
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 12
            }
        },
        {
            "Id": "feastfoundry",
            "Name": "Feastfoundries",
            "ResourceType": "feastfoundry",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "gravyfeds",
                    "Qty": 5e+9
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 2.5e+90
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "gravyfeds",
                "Qty": 35
            },
            "BaseCompletionTime": 1458,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "gravyfeds",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "gravyfeds",
                "Threshold": 2.5e+11
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 14
            }
        },
        {
            "Id": "carbcollective",
            "Name": "Carbcollectives",
            "ResourceType": "carbcollective",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "feastfoundry",
                    "Qty": 2.5e+10
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 2.5e+116
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "feastfoundry",
                "Qty": 40
            },
            "BaseCompletionTime": 4374,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "feastfoundry",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "feastfoundry",
                "Threshold": 1e+12
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 16
            }
        },
        {
            "Id": "mashmonument",
            "Name": "Mashmonuments",
            "ResourceType": "mashmonument",
            "GeneratorType": "Manual",
            "IndustryId": "foodlabour",
            "Cost": [
                {
                    "Resource": "carbcollective",
                    "Qty": 2.5e+12
                },
                {
                    "Resource": "Mashpotato",
                    "Qty": 5e+151
                },
                {
                    "Resource": "Comrade",
                    "Qty": 1
                }
            ],
            "Generate": {
                "Resource": "carbcollective",
                "Qty": 45
            },
            "BaseCompletionTime": 13122,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "carbcollective",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "carbcollective",
                "Threshold": 2e+13
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 18
            }
        },
        {
            "Id": "backyardturkey",
            "Name": "Backyardturkeys",
            "ResourceType": "backyardturkey",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "Turkeyleg",
                    "Qty": 25
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "Turkeyleg",
                "Qty": 10
            },
            "BaseCompletionTime": 3,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "Mashpotato",
                    "Threshold": 1e+11
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "animallabour",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 4
            }
        },
        {
            "Id": "gobblepen",
            "Name": "Gobblepens",
            "ResourceType": "gobblepen",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "backyardturkey",
                    "Qty": 100
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 1e+10
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "backyardturkey",
                "Qty": 20
            },
            "BaseCompletionTime": 12,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "backyardturkey",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "backyardturkey",
                "Threshold": 25000
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 8
            }
        },
        {
            "Id": "drumstickfarm",
            "Name": "Drumstickfarms",
            "ResourceType": "drumstickfarm",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "gobblepen",
                    "Qty": 50000
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 3e+27
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "gobblepen",
                "Qty": 30
            },
            "BaseCompletionTime": 48,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "gobblepen",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "gobblepen",
                "Threshold": 2.5e+7
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 12
            }
        },
        {
            "Id": "feastfactory",
            "Name": "Feastfactories",
            "ResourceType": "feastfactory",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "drumstickfarm",
                    "Qty": 2.5e+6
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 5e+46
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "drumstickfarm",
                "Qty": 40
            },
            "BaseCompletionTime": 192,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "drumstickfarm",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "drumstickfarm",
                "Threshold": 5e+8
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 16
            }
        },
        {
            "Id": "turkeylegtycoon",
            "Name": "Turkeylegtycoons",
            "ResourceType": "turkeylegtycoon",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "feastfactory",
                    "Qty": 5e+8
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 5e+66
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "feastfactory",
                "Qty": 50
            },
            "BaseCompletionTime": 768,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "feastfactory",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "feastfactory",
                "Threshold": 3e+10
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 20
            }
        },
        {
            "Id": "gravyreactor",
            "Name": "Gravyreactors",
            "ResourceType": "gravyreactor",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "turkeylegtycoon",
                    "Qty": 4e+9
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 5e+96
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "turkeylegtycoon",
                "Qty": 60
            },
            "BaseCompletionTime": 3072,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "turkeylegtycoon",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "turkeylegtycoon",
                "Threshold": 2.5e+11
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 24
            }
        },
        {
            "Id": "pilgrimpoultrysyndicate",
            "Name": "Pilgrimpoultrysyndicates",
            "ResourceType": "pilgrimpoultrysyndicate",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "gravyreactor",
                    "Qty": 5e+10
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 1e+117
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "gravyreactor",
                "Qty": 70
            },
            "BaseCompletionTime": 12288,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "gravyreactor",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "gravyreactor",
                "Threshold": 1.5e+12
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 28
            }
        },
        {
            "Id": "thegreatgobbler",
            "Name": "Thegreatgobblers",
            "ResourceType": "thegreatgobbler",
            "GeneratorType": "Manual",
            "IndustryId": "animallabour",
            "Cost": [
                {
                    "Resource": "pilgrimpoultrysyndicate",
                    "Qty": 2.5e+11
                },
                {
                    "Resource": "Turkeyleg",
                    "Qty": 2.5e+141
                },
                {
                    "Resource": "Comrade",
                    "Qty": 3
                }
            ],
            "Generate": {
                "Resource": "pilgrimpoultrysyndicate",
                "Qty": 80
            },
            "BaseCompletionTime": 49152,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "pilgrimpoultrysyndicate",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "pilgrimpoultrysyndicate",
                "Threshold": 1.75e+13
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 32
            }
        },
        {
            "Id": "toasteroven",
            "Name": "Toasterovens",
            "ResourceType": "toasteroven",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "Fire",
                    "Qty": 100
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "Fire",
                "Qty": 15
            },
            "BaseCompletionTime": 4,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "Turkeyleg",
                    "Threshold": 1e+20
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "technician",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 6
            }
        },
        {
            "Id": "familyoven",
            "Name": "Familyovens",
            "ResourceType": "familyoven",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "toasteroven",
                    "Qty": 50000
                },
                {
                    "Resource": "Fire",
                    "Qty": 5e+18
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "toasteroven",
                "Qty": 30
            },
            "BaseCompletionTime": 20,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "toasteroven",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "toasteroven",
                "Threshold": 5e+6
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 12
            }
        },
        {
            "Id": "commercialroaster",
            "Name": "Commercialroasters",
            "ResourceType": "commercialroaster",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "familyoven",
                    "Qty": 2.5e+7
                },
                {
                    "Resource": "Fire",
                    "Qty": 5e+32
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "familyoven",
                "Qty": 45
            },
            "BaseCompletionTime": 100,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "familyoven",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "familyoven",
                "Threshold": 3e+9
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 18
            }
        },
        {
            "Id": "conveyorbeltbakeline",
            "Name": "Conveyorbeltbakelines",
            "ResourceType": "conveyorbeltbakeline",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "commercialroaster",
                    "Qty": 2.5e+8
                },
                {
                    "Resource": "Fire",
                    "Qty": 2.5e+56
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "commercialroaster",
                "Qty": 60
            },
            "BaseCompletionTime": 500,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "commercialroaster",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "commercialroaster",
                "Threshold": 5e+10
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 24
            }
        },
        {
            "Id": "smartaioven",
            "Name": "Smartaiovens",
            "ResourceType": "smartaioven",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "conveyorbeltbakeline",
                    "Qty": 7.5e+9
                },
                {
                    "Resource": "Fire",
                    "Qty": 2.5e+77
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "conveyorbeltbakeline",
                "Qty": 75
            },
            "BaseCompletionTime": 2500,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "conveyorbeltbakeline",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "conveyorbeltbakeline",
                "Threshold": 2.5e+11
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 30
            }
        },
        {
            "Id": "volcanicbakingchamber",
            "Name": "Volcanicbakingchambers",
            "ResourceType": "volcanicbakingchamber",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "smartaioven",
                    "Qty": 5e+10
                },
                {
                    "Resource": "Fire",
                    "Qty": 1e+108
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "smartaioven",
                "Qty": 90
            },
            "BaseCompletionTime": 12500,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "smartaioven",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "smartaioven",
                "Threshold": 1.5e+12
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 36
            }
        },
        {
            "Id": "theeternalovn",
            "Name": "Theeternaloven",
            "ResourceType": "theeternalovn",
            "GeneratorType": "Manual",
            "IndustryId": "technician",
            "Cost": [
                {
                    "Resource": "volcanicbakingchamber",
                    "Qty": 5e+11
                },
                {
                    "Resource": "Fire",
                    "Qty": 1e+144
                },
                {
                    "Resource": "Comrade",
                    "Qty": 5
                }
            ],
            "Generate": {
                "Resource": "volcanicbakingchamber",
                "Qty": 105
            },
            "BaseCompletionTime": 62500,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "volcanicbakingchamber",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "volcanicbakingchamber",
                "Threshold": 1.5e+13
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 42
            }
        },
        {
            "Id": "crustkneader",
            "Name": "Crustkneaders",
            "ResourceType": "crustkneader",
            "GeneratorType": "Manual",
            "IndustryId": "baker",
            "Cost": [
                {
                    "Resource": "Pie",
                    "Qty": 10000
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "Pie",
                "Qty": 20
            },
            "BaseCompletionTime": 5,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "Fire",
                    "Threshold": 1e+33
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "baker",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 8
            }
        },
        {
            "Id": "fillingwhipper",
            "Name": "Fillingwhippers",
            "ResourceType": "fillingwhipper",
            "GeneratorType": "Manual",
            "IndustryId": "baker",
            "Cost": [
                {
                    "Resource": "crustkneader",
                    "Qty": 2.5e+7
                },
                {
                    "Resource": "Pie",
                    "Qty": 5e+20
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "crustkneader",
                "Qty": 40
            },
            "BaseCompletionTime": 30,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "crustkneader",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "crustkneader",
                "Threshold": 1e+9
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 16
            }
        },
        {
            "Id": "pieassemblyline",
            "Name": "Pieassemblylines",
            "ResourceType": "pieassemblyline",
            "GeneratorType": "Manual",
            "IndustryId": "baker",
            "Cost": [
                {
                    "Resource": "fillingwhipper",
                    "Qty": 5e+7
                },
                {
                    "Resource": "Pie",
                    "Qty": 1e+41
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "fillingwhipper",
                "Qty": 60
            },
            "BaseCompletionTime": 180,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "fillingwhipper",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "fillingwhipper",
                "Threshold": 1e+10
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 24
            }
        },
        {
            "Id": "pieempireexecutive",
            "Name": "Pieempireexecutives",
            "ResourceType": "pieempireexecutive",
            "GeneratorType": "Manual",
            "IndustryId": "baker",
            "Cost": [
                {
                    "Resource": "pieassemblyline",
                    "Qty": 1e+10
                },
                {
                    "Resource": "Pie",
                    "Qty": 1e+57
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "pieassemblyline",
                "Qty": 80
            },
            "BaseCompletionTime": 1080,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "pieassemblyline",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "pieassemblyline",
                "Threshold": 2e+11
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 32
            }
        },
        {
            "Id": "sweetfusionlab",
            "Name": "Sweetfusionlabs",
            "ResourceType": "sweetfusionlab",
            "GeneratorType": "Manual",
            "IndustryId": "baker",
            "Cost": [
                {
                    "Resource": "pieempireexecutive",
                    "Qty": 5e+10
                },
                {
                    "Resource": "Pie",
                    "Qty": 1e+100
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "pieempireexecutive",
                "Qty": 100
            },
            "BaseCompletionTime": 6480,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "pieempireexecutive",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "pieempireexecutive",
                "Threshold": 1.5e+12
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 40
            }
        },
        {
            "Id": "thegreatbaker",
            "Name": "Thegreatbakers",
            "ResourceType": "thegreatbaker",
            "GeneratorType": "Manual",
            "IndustryId": "baker",
            "Cost": [
                {
                    "Resource": "sweetfusionlab",
                    "Qty": 5e+11
                },
                {
                    "Resource": "Pie",
                    "Qty": 1e+122
                },
                {
                    "Resource": "Comrade",
                    "Qty": 7
                }
            ],
            "Generate": {
                "Resource": "sweetfusionlab",
                "Qty": 120
            },
            "BaseCompletionTime": 38880,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "sweetfusionlab",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "sweetfusionlab",
                "Threshold": 1.25e+13
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 48
            }
        },
        {
            "Id": "dumpsterhorn",
            "Name": "Dumpsterhorns",
            "ResourceType": "dumpsterhorn",
            "GeneratorType": "Manual",
            "IndustryId": "botanist",
            "Cost": [
                {
                    "Resource": "Cornucopia",
                    "Qty": 1e+9
                },
                {
                    "Resource": "Comrade",
                    "Qty": 9
                }
            ],
            "Generate": {
                "Resource": "Cornucopia",
                "Qty": 25
            },
            "BaseCompletionTime": 6,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "Pie",
                    "Threshold": 1e+60
                }
            ],
            "Unlock": {
                "ConditionType": "IndustryUnlocked",
                "ConditionId": "botanist",
                "Threshold": 0
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 10
            }
        },
        {
            "Id": "craftfairsupply",
            "Name": "Craftfairsupplies",
            "ResourceType": "craftfairsupply",
            "GeneratorType": "Manual",
            "IndustryId": "botanist",
            "Cost": [
                {
                    "Resource": "dumpsterhorn",
                    "Qty": 5e+8
                },
                {
                    "Resource": "Cornucopia",
                    "Qty": 1e+26
                },
                {
                    "Resource": "Comrade",
                    "Qty": 9
                }
            ],
            "Generate": {
                "Resource": "dumpsterhorn",
                "Qty": 50
            },
            "BaseCompletionTime": 42,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "dumpsterhorn",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "dumpsterhorn",
                "Threshold": 1.5e+10
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 20
            }
        },
        {
            "Id": "harvesthornsmith",
            "Name": "Harvesthornsmiths",
            "ResourceType": "harvesthornsmith",
            "GeneratorType": "Manual",
            "IndustryId": "botanist",
            "Cost": [
                {
                    "Resource": "craftfairsupply",
                    "Qty": 3e+9
                },
                {
                    "Resource": "Cornucopia",
                    "Qty": 2.5e+50
                },
                {
                    "Resource": "Comrade",
                    "Qty": 9
                }
            ],
            "Generate": {
                "Resource": "craftfairsupply",
                "Qty": 75
            },
            "BaseCompletionTime": 294,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "craftfairsupply",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "craftfairsupply",
                "Threshold": 5e+11
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 30
            }
        },
        {
            "Id": "gildedgourd",
            "Name": "Gildedgourdsconsortium",
            "ResourceType": "gildedgourd",
            "GeneratorType": "Manual",
            "IndustryId": "botanist",
            "Cost": [
                {
                    "Resource": "harvesthornsmith",
                    "Qty": 3e+10
                },
                {
                    "Resource": "Cornucopia",
                    "Qty": 2.5e+72
                },
                {
                    "Resource": "Comrade",
                    "Qty": 9
                }
            ],
            "Generate": {
                "Resource": "harvesthornsmith",
                "Qty": 100
            },
            "BaseCompletionTime": 2058,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "harvesthornsmith",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "harvesthornsmith",
                "Threshold": 2e+12
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 40
            }
        },
        {
            "Id": "theinfinitehorn",
            "Name": "Theinfinitehorn",
            "ResourceType": "theinfinitehorn",
            "GeneratorType": "Manual",
            "IndustryId": "botanist",
            "Cost": [
                {
                    "Resource": "gildedgourd",
                    "Qty": 5e+11
                },
                {
                    "Resource": "Cornucopia",
                    "Qty": 5e+97
                },
                {
                    "Resource": "Comrade",
                    "Qty": 9
                }
            ],
            "Generate": {
                "Resource": "gildedgourd",
                "Qty": 125
            },
            "BaseCompletionTime": 14406,
            "Visible": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "gildedgourd",
                    "Threshold": 2
                }
            ],
            "Unlock": {
                "ConditionType": "ResourceQuantity",
                "ConditionId": "gildedgourd",
                "Threshold": 1e+13
            },
            "IncludeInAll": true,
            "Crit": {
                "ChancePercent": 0,
                "Multiplier": 1
            },
            "ObjectiveReward": {
                "Reward": "Resources",
                "RewardId": "darkscience",
                "Value": 50
            }
        },
    ],
    "CardStoreCost": [
        {
            "Rarity": "Common",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "Rare",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "Epic",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "Supreme",
            "ScienceCost": 0,
            "GoldCost": 0,
            "AdWatchStackModifier": 0
        },
        {
            "Rarity": "LteCommon",
            "ScienceCost": 30,
            "GoldCost": 2,
            "AdWatchStackModifier": 0.25
        },
        {
            "Rarity": "LteRare",
            "ScienceCost": 250,
            "GoldCost": 15,
            "AdWatchStackModifier": 0.1
        }
    ],
    "CardStoreStackSize": [
        {
            "Rank": 1,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 5,
            "LteRare": 1
        },
        {
            "Rank": 2,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 10,
            "LteRare": 2
        },
        {
            "Rank": 3,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 15,
            "LteRare": 2
        },
        {
            "Rank": 4,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 20,
            "LteRare": 3
        },
        {
            "Rank": 5,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 25,
            "LteRare": 3
        },
        {
            "Rank": 6,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 30,
            "LteRare": 3
        },
        {
            "Rank": 7,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 4
        },
        {
            "Rank": 8,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 40,
            "LteRare": 4
        },
        {
            "Rank": 9,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 45,
            "LteRare": 4
        },
        {
            "Rank": 10,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 50,
            "LteRare": 5
        },
        {
            "Rank": 11,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 50,
            "LteRare": 5
        },
        {
            "Rank": 12,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 50,
            "LteRare": 5
        },
        {
            "Rank": 13,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 55,
            "LteRare": 5
        },
        {
            "Rank": 14,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 55,
            "LteRare": 5
        },
        {
            "Rank": 15,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 60,
            "LteRare": 6
        },
        {
            "Rank": 16,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 60,
            "LteRare": 6
        },
        {
            "Rank": 17,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 60,
            "LteRare": 6
        },
        {
            "Rank": 18,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 65,
            "LteRare": 6
        },
        {
            "Rank": 19,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 65,
            "LteRare": 6
        },
        {
            "Rank": 20,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 70,
            "LteRare": 7
        },
        {
            "Rank": 21,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 70,
            "LteRare": 7
        },
        {
            "Rank": 22,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 70,
            "LteRare": 7
        },
        {
            "Rank": 23,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 75,
            "LteRare": 7
        },
        {
            "Rank": 24,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 75,
            "LteRare": 7
        },
        {
            "Rank": 25,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 80,
            "LteRare": 8
        },
        {
            "Rank": 26,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 80,
            "LteRare": 8
        },
        {
            "Rank": 27,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 80,
            "LteRare": 8
        },
        {
            "Rank": 28,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 85,
            "LteRare": 8
        },
        {
            "Rank": 29,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 85,
            "LteRare": 8
        },
        {
            "Rank": 30,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 90,
            "LteRare": 9
        },
        {
            "Rank": 31,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 95,
            "LteRare": 10
        },
        {
            "Rank": 32,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 100,
            "LteRare": 10
        },
        {
            "Rank": 33,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 105,
            "LteRare": 10
        },
        {
            "Rank": 34,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 110,
            "LteRare": 11
        },
        {
            "Rank": 35,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 115,
            "LteRare": 12
        },
        {
            "Rank": 36,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 120,
            "LteRare": 12
        },
        {
            "Rank": 37,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 125,
            "LteRare": 12
        },
        {
            "Rank": 38,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 130,
            "LteRare": 13
        },
        {
            "Rank": 39,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 135,
            "LteRare": 14
        },
        {
            "Rank": 40,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 140,
            "LteRare": 14
        },
        {
            "Rank": 41,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 145,
            "LteRare": 14
        },
        {
            "Rank": 42,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 150,
            "LteRare": 15
        },
        {
            "Rank": 43,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 160,
            "LteRare": 16
        },
        {
            "Rank": 44,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 160,
            "LteRare": 16
        },
        {
            "Rank": 45,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 170,
            "LteRare": 17
        },
        {
            "Rank": 46,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 180,
            "LteRare": 18
        },
        {
            "Rank": 47,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 190,
            "LteRare": 19
        },
        {
            "Rank": 48,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 200,
            "LteRare": 20
        },
        {
            "Rank": 49,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 210,
            "LteRare": 21
        },
        {
            "Rank": 50,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 230,
            "LteRare": 23
        },
        {
            "Rank": 51,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 250,
            "LteRare": 25
        },
    ],
    "CardToScienceConversion": {
        "Common": 0,
        "Rare": 0,
        "Epic": 0,
        "Supreme": 0,
        "LteCommon": 15,
        "LteRare": 125
    },
    "CrossPromoTitles": [
        {
            "Id": "adcap",
            "IconId": "icon-crosspromo-adcap",
            "TitleSpriteId": "art-crosspromo-adcap-header",
            "BackgroundSpriteId": "art-crosspromo-adcap-header",
            "LinkedAppId_IOS": "927006017",
            "LinkedAppId_Android": "com.kongregate.mobile.adventurecapitalist.google"
        },
        {
            "Id": "adages",
            "IconId": "icon-crosspromo-adages",
            "TitleSpriteId": "art-crosspromo-adages-header",
            "BackgroundSpriteId": "art-crosspromo-adages-background",
            "LinkedAppId_IOS": "1510649539",
            "LinkedAppId_Android": "ca.hyperhippo.adventureages"
        }
    ],
    "DailyDealSlotChance": [
        {
            "Slot": 1,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0.8,
            "LteRare": 0.2,
            "GoldCostChance": 0,
            "AdWatchChance": 1,
            "RollAttempt": 1,
            "GoldCost": 20,
            "MaxRoll": 3
        },
        {
            "Slot": 2,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0.8,
            "LteRare": 0.2,
            "GoldCostChance": 0,
            "AdWatchChance": 1,
            "RollAttempt": 2,
            "GoldCost": 50
        },
        {
            "Slot": 3,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0.8,
            "LteRare": 0.2,
            "GoldCostChance": 0,
            "AdWatchChance": 1,
            "RollAttempt": 3,
            "GoldCost": 100
        },
        {
            "Slot": 4,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0.5,
            "LteRare": 0.5,
            "GoldCostChance": 0,
            "AdWatchChance": 0
        },
        {
            "Slot": 5,
            "Common": 0,
            "Rare": 0,
            "Epic": 0,
            "Supreme": 0,
            "LteCommon": 0,
            "LteRare": 1,
            "GoldCostChance": 1,
            "AdWatchChance": 0
        }
    ],
    "FreeGachaData": {
        "TimeBetweenGachas": 7200,
        "MaxStackCount": 2

    },
    "GachaFreeCycle": [
        {
            "Cycle": [
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
                "plastic",
                "armored",
                "plastic",
            ],
            "ScriptId": "sc3"
        }
    ],
    "GachaGoldCycle": [
        {
            "Cycle": {
                "plastic": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "armored": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        }
    ],
    "GachaStackSplit": [
        {
            "Split": 2,
            "LteCommon": 8,
            "LteRare": 4
        },
        {
            "Split": 3,
            "LteCommon": 25,
            "LteRare": 25
        },
        {
            "Split": 4,
            "LteRare": 75
        }
    ],
    "GeneratorObjectiveLimits": [
        {
            "GeneratorId": "potatomasher",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "chef",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "kitchen",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "tatertruck",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "silosmasher",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "gravyfeds",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "feastfoundry",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "carbcollective",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "mashmonument",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "backyardturkey",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "gobblepen",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "drumstickfarm",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "feastfactory",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "turkeylegtycoon",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "gravyreactor",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "pilgrimpoultrysyndicate",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "thegreatgobbler",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "toasteroven",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "familyoven",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "commercialroaster",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "conveyorbeltbakeline",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "smartaioven",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "volcanicbakingchamber",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "theeternalovn",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "crustkneader",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "fillingwhipper",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "pieassemblyline",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "pieempireexecutive",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "sweetfusionlab",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "thegreatbaker",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "dumpsterhorn",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "craftfairsupply",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "harvesthornsmith",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "gildedgourd",
            "MaximumObjectivesForRank": [
                999
            ]
        },
        {
            "GeneratorId": "theinfinitehorn",
            "MaximumObjectivesForRank": [
                999
            ]
        }
    ],
    "Industries": [
        {
            "Id": "foodlabour",
            "SortingOrder": 1,
            "VisibleConditions": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "mashpotato"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "ResourceQuantity",
                    "ConditionId": "mashpotato",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "animallabour",
            "SortingOrder": 2,
            "UnlockCostResourceId": "mashpotato",
            "UnlockCostResourceQty": 1e+11,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "foodlabour"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "mashpotato",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "technician",
            "SortingOrder": 3,
            "UnlockCostResourceId": "turkeyleg",
            "UnlockCostResourceQty": 2.5e+17,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "foodlabour"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "turkeyleg",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "baker",
            "SortingOrder": 4,
            "UnlockCostResourceId": "fire",
            "UnlockCostResourceQty": 1e+34,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "animallabour"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "fire",
                    "Threshold": 0
                }
            ]
        },
        {
            "Id": "botanist",
            "SortingOrder": 5,
            "UnlockCostResourceId": "pie",
            "UnlockCostResourceQty": 1e+60,
            "VisibleConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "technician"
                }
            ],
            "InteractableConditions": [
                {
                    "ConditionType": "IndustryUnlocked",
                    "ConditionId": "pie",
                    "Threshold": 0
                }
            ]
        }
    ],
    "MiscBalance": {
        "SoftCurrencyId": "darkscience",
        "PrimaryGeneratorId": "comradegenerator",
        "PrimaryResourceId": "comrade",
        "HardToSoftCurrencyConversionRatio": 20,
        "OfferwallPlatforms": "android",
        "TotalSpendIncludesLte": false,
        "DaysForRecentSpend": 26,
        "RanksToTriggerOffers": "4,7,10,13,16,20",
        "ComradeSpendWarningEnableRank": 3,
        "ReferralReward": 110,
        "WelcomeBackBonusComrades": 0.3,
        "EmailFeatureEnabled": true,
        "EnableNewBucketing": false
    },
    "Missions": [
        {
            "Id": "M001",
            "Rank": 1,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 4,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1

            }
        },
        {
            "Id": "M002",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 2,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1

            }
        },
        {
            "Id": "M003",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 20,
                "ConditionId": "potatomasher"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1

            }
        },
        {
            "Id": "M004",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 50000,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M005",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 15,
                "ConditionId": "chef"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m01",
                "Value": 1
            }
        },
        {
            "Id": "M006",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 200,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M007",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1500,
                "ConditionId": "chef"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m02",
                "Value": 1
            }
        },
        {
            "Id": "M008",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.e+9,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m03",
                "Value": 1
            }
        },
        {
            "Id": "M009",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7777,
                "ConditionId": "chef"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m02",
                "Value": 1
            }
        },
        {
            "Id": "M010",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 3,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M011",
            "Rank": 1,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "animallabour"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m04",
                "Value": 1
            }
        },
        {
            "Id": "M012",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 500,
                "ConditionId": "backyardturkey"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m06",
                "Value": 1
            }
        },
        {
            "Id": "M013",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.5e+8,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M014",
            "Rank": 1,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 5,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M015",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 400,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M016",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 33333,
                "ConditionId": "chef"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m05",
                "Value": 1
            }
        }, 
        {
            "Id": "M017",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 25,
                "ConditionId": "kitchen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M018",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 24680,
                "ConditionId": "backyardturkey"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m08",
                "Value": 1
            }
        },
        {
            "Id": "M019",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M020",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8e+10,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M021",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 13337,
                "ConditionId": "kitchen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m07",
                "Value": 1
            }
        },
        {
            "Id": "M022",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+18,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M023",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 56789,
                "ConditionId": "kitchen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m09",
                "Value": 1
            }
        },
        {
            "Id": "M024",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 15,
                "ConditionId": "gobblepen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M025",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },   
        {
            "Id": "M026",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+21,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M027",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 333444,
                "ConditionId": "kitchen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M028",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.5e+12,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M029",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+6,
                "ConditionId": "kitchen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M030",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.56e+14,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M031",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 2,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M032",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.7e+25,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m10",
                "Value": 1
            }
        },
        {
            "Id": "M033",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 30,
                "ConditionId": "tatertruck"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M034",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 48000,
                "ConditionId": "gobblepen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M035",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 820000,
                "ConditionId": "gobblepen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M036",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1337,
                "ConditionId": "tatertruck"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M037",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.5e+19,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M038",
            "Rank": 1,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "technician"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m11",
                "Value": 1
            }
        },   
        {
            "Id": "M039",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 85000,
                "ConditionId": "toasteroven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M040",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.2e+11,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M041",
            "Rank": 1,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 8,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M042",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsUpgradedSinceSubscription",
                "Threshold": 3,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M043",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9700,
                "ConditionId": "tatertruck"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M044",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.2e+6,
                "ConditionId": "toasteroven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M045",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.9e+6,
                "ConditionId": "gobblepen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M046",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+6,
                "ConditionId": "tatertruck"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
         {
            "Id": "M047",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+13,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M048",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        
        {
            "Id": "M049",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.5e+23,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M050",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+7,
                "ConditionId": "gobblepen"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1    
            }
        },
        {
            "Id": "M051",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.11e+40,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1  
            }
        },
        {
            "Id": "M052",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 12,
                "ConditionId": "drumstickfarm"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m12",
                "Value": 1   
            }
        },
        {
            "Id": "M053",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.7e+26,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m13",
                "Value": 1
            }
        },
        {
            "Id": "M054",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6.4e+7,
                "ConditionId": "tatertruck"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m14",
                "Value": 1
            }
        },
        {
            "Id": "M055",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.97e+41,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M056",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "silosmasher"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m15",
                "Value": 1
            }
        },
        {
            "Id": "M057",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5.335e+16,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M058",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.6e+6,
                "ConditionId": "toasteroven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m16",
                "Value": 1
            }
        },
        {
            "Id": "M059",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2829,
                "ConditionId": "drumstickfarm"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m17",
                "Value": 1
            }
        },
        {
            "Id": "M060",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.2e+32,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M061",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+19,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M062",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 16,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M063",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 4,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M064",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.95e+46,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M065",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 789789,
                "ConditionId": "drumstickfarm"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M066",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.56e+38,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M067",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.7e+6,
                "ConditionId": "silosmasher"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M068",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 900,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M069",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 550,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M070",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+7,
                "ConditionId": "drumstickfarm"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M071",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1050,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M072",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7000,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M073",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+25,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M074",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8.4e+7,
                "ConditionId": "silosmasher"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m18",
                "Value": 1
            }
        },
        {
            "Id": "M075",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 1000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M076",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.25e+42,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M077",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.333e+56,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M078",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 5,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M079",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1200,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M080",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.56e+57,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M081",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 142000,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M082",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.21e+27,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M083",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.5e+8,
                "ConditionId": "silosmasher"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M084",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.4e+7,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M085",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.6e+46,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M086",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.52e+8,
                "ConditionId": "drumstickfarm"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M087",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.49e+47,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m20",
                "Value": 1
            }
        },
        {
            "Id": "M088",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+30,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M089",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.44e+8,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M090",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.3e+61,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M091",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 5,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M092",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+8,
                "ConditionId": "drumstickfarm"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M093",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M094",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+68,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M095",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.23e+47,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M096",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 123,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M097",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.5e+69,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M098",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.1e+31,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M099",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.7e+9,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M100",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.2e+32,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m21",
                "Value": 1
            }
        },
        {
            "Id": "M101",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3456,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M102",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 1800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M103",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+9,
                "ConditionId": "familyoven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m23",
                "Value": 1
            }
        },
        {
            "Id": "M104",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.9e+70,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M105",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.56e+33,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M106",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1900,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M107",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+8,
                "ConditionId": "silosmasher"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M108",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.7e+72,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M109",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.33e+33,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M110",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+73,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M111",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m22",
                "Value": 1
            }
        },
        {
            "Id": "M112",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.73e+54,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M113",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 55,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m25",
                "Value": 1
            }
        },
        {
            "Id": "M114",
            "Rank": 1,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "baker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m24",
                "Value": 1
            }
        },
        {
            "Id": "M115",
            "Rank": 1,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 13,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M116",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+7,
                "ConditionId": "crustkneader"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M117",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+16,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M118",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 650,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M119",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 5,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M120",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+40,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M121",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.15e+74,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M122",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 11400,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M123",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.48e+6,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M124",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.5e+55,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M125",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1100,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M126",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 22,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M127",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+17,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M128",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 150000,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M129",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5.4e+75,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M130",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.56e+41,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m25",
                "Value": 1
            }
        },
        {
            "Id": "M131",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.6e+7,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M132",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+8,
                "ConditionId": "crustkneader"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m26",
                "Value": 1
            }
        },
        {
            "Id": "M133",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.79e+7,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M134",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1650,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M135",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+19,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M136",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.66e+57,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M137",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.31e+8,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M138",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 350,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M139",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9e+8,
                "ConditionId": "crustkneader"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m29",
                "Value": 1
            }
        },
        {
            "Id": "M140",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.2e+9,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M141",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3,
                "ConditionId": "fillingwhipper"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m32",
                "Value": 1
            }
        },
        {
            "Id": "M142",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9.9e+9,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M143",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.626e+8,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M144",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 3450,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M145",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 12000,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M146",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.9e+49,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M147",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.52e+10,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M148",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8e+78,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M149",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+10,
                "ConditionId": "commercialroaster"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M150",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 265000,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M151",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9600,
                "ConditionId": "fillingwhipper"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M152",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.2e+51,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M153",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.75e+63,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M154",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.44e+7,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M155",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 5,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M156",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M157",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.1e+52,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M158",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.5e+8,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M159",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+81,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M160",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.18e+65,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M161",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.75e+6,
                "ConditionId": "fillingwhipper"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M162",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 2600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M163",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.3e+56,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m30",
                "Value": 1
            }
        },
        {
            "Id": "M164",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.97e+10,
                "ConditionId": "feastfactory"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m28",
                "Value": 1
            }
        },
        {
            "Id": "M165",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e27,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M166",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7,
                "ConditionId": "turkeylegtycoon"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M167",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+10,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M168",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.1e+83,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M169",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M170",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 6,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M171",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 2700,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M172",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.22e+11,
                "ConditionId": "gravyfeds"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m31",
                "Value": 1
            }
        },
        {
            "Id": "M173",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9.5e+8,
                "ConditionId": "fillingwhipper"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M174",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 270,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M175",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2100,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M176",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.222e38,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M177",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 15,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m37",
                "Value": 1
            }
        },
        {
            "Id": "M178",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1728,
                "ConditionId": "turkeylegtycoon"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M179",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 56000,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M180",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8.25e+9,
                "ConditionId": "fillingwhipper"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M181",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 4200,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M182",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 465,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M183",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 4,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M184",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 987987,
                "ConditionId": "turkeylegtycoon"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M185",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.55e39,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M186",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4350,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M187",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.13e+6,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M188",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8e+8,
                "ConditionId": "turkeylegtycoon"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M189",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.99e+95,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M190",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.99e+62,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M191",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 20000,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M192",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+7,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M193",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.75e+80,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M194",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.99e+39,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m32",
                "Value": 1
            }
        },
        {
            "Id": "M195",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M196",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.7e+6,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M197",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.55e+42,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M198",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 5,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M199",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 4500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M200",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5250,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M201",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 300,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M202",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+44,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M203",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8e+9,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M204",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+10,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M205",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+11,
                "ConditionId": "turkeylegtycoon"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M206",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.5e+107,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M207",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 450000,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M208",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+70,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M209",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.25e+11,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M210",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.5e+73,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M211",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+47,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M212",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.4e+89,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M213",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6.75e+8,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M214",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+11,
                "ConditionId": "conveyorbeltbakeline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M215",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.5e+74,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M216",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.75e+11,
                "ConditionId": "turkeylegtycoon"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M217",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+111,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M218",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.75e+10,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M219",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7750,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M220",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 32,
                "ConditionId": "smartaioven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m38",
                "Value": 1
            }
        },
        {
            "Id": "M221",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearchersUpgradedSinceSubscription",
                "Threshold": 5,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M222",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.5e+11,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M223",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6e+78,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M224",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8e+10,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M225",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 4800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M226",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+53,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M227",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 16807,
                "ConditionId": "smartaioven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M228",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.77e+83,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M229",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.89e+95,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M230",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 65,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m36",
                "Value": 1
            }
        },  
        {
            "Id": "M231",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+12,
                "ConditionId": "feastfoundry"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M232",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 5500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M233",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.88e+98,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m39",
                "Value": 1
            }
        },
        {
            "Id": "M234",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1200,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M235",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.02e+11,
                "ConditionId": "pieassemblyline"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M236",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m40",
                "Value": 1
            }
        },   
        {
            "Id": "M237",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4e+58,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M238",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 128,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M239",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5100,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M240",
            "Rank": 1,
            "Condition": {
                "ConditionType": "IndustryUnlocked",
                "Threshold": 1,
                "ConditionId": "botanist"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m41",
                "Value": 1
            }
        },
        {
            "Id": "M241",
            "Rank": 1,
            "Condition": {
                "ConditionType": "TradesSinceSubscription",
                "Threshold": 18,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M242",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+8,
                "ConditionId": "dumpsterhorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M243",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+20,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M244",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 21600,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M245",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9450,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M246",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.77e+8,
                "ConditionId": "smartaioven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M247",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+114,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M248",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M249",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+9,
                "ConditionId": "dumpsterhorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M250",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 6800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M251",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+21,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M252",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+116,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m42",
                "Value": 1
            }
        },
        {
            "Id": "M253",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.45e+6,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M254",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8.88e+10,
                "ConditionId": "smartaioven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M255",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+88,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M256",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 256,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M257",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5250,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M258",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.417e+8,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M259",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+105,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M260",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.86e+6,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M261",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.6e+64,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M262",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+22,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M263",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.23e+10,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M264",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 7800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M265",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8192,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M266",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6e+9,
                "ConditionId": "dumpsterhorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M267",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.656e+11,
                "ConditionId": "smartaioven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M268",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M269",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.86e+9,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M270",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6e+97,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M271",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6.15e+11,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M272",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+111,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M273",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.1e+6,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M274",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.86e+11,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M275",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.56e+76,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M276",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+12,
                "ConditionId": "gravyreactor"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m19",
                "Value": 1
            }
        }, 
        {
            "Id": "M277",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8,
                "ConditionId": "pilgrimpoultrysyndicate"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M278",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.22e+11,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M279",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 512,
                "ConditionId": "pilgrimpoultrysyndicate"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M280",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.25e+120,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m43",
                "Value": 1
            }
        },
        {
            "Id": "M281",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.56e+77,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M282",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.86e+12,
                "ConditionId": "pieempireexecutive"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M283",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+10,
                "ConditionId": "dumpsterhorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M284",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+26,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m44",
                "Value": 1
            }
        }, 
        {
            "Id": "M285",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 500,
                "ConditionId": "craftfairsupply"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M286",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.2e+7,
                "ConditionId": "pilgrimpoultrysyndicate"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M287",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M288",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+13,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M289",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4.8e+80,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M290",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 7600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M291",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.6e+81,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M292",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.3e+31,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M293",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 5700,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M294",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5850,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M295",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+12,
                "ConditionId": "smartaioven"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M296",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.4e+98,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m45",
                "Value": 1
            }
        },
        {
            "Id": "M297",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M298",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M299",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+13,
                "ConditionId": "carbcollective"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M300",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.2e+142,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M301",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 204,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M302",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.6e+109,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M303",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 750000,
                "ConditionId": "craftfairsupply"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M304",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 7800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M305",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.25e+34,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M306",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6.4e+11,
                "ConditionId": "pilgrimpoultrysyndicate"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M307",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesSpentSinceSubscription",
                "Threshold": 4000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M308",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+35,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m46",
                "Value": 1
            }
        }, 
        {
            "Id": "M309",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.5e+145,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m47",
                "Value": 1
            }
        },
        {
            "Id": "M310",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M311",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.23e+11,
                "ConditionId": "craftfairsupply"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M312",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M313",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5.55e+89,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M314",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 80,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M315",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+11,
                "ConditionId": "craftfairsupply"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M316",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.56e+156,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M317",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.9e+12,
                "ConditionId": "pilgrimpoultrysyndicate"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M318",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 142000,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M319",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 32768,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M320",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M321",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.22e+90,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m48",
                "Value": 1
            }
        }, 
        {
            "Id": "M322",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6,
                "ConditionId": "sweetfusionlab"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M323",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9.9e+7,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M324",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4100,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M325",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.6e+13,
                "ConditionId": "pilgrimpoultrysyndicate"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M326",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 4e+40,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m50",
                "Value": 1
            }
        }, 
         {
            "Id": "M327",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.368e+8,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M328",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9.9e+10,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M329",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.8e+125,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m49",
                "Value": 1
            }
        }, 
        {
            "Id": "M330",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 20,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M331",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M332",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.84e+12,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M333",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.74e+11,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M334",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6666,
                "ConditionId": "sweetfusionlab"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M335",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8400,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M336",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 600,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M337",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 800,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M338",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.8e+13,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M339",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+102,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M340",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8.5e+12,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M341",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6.6e+7,
                "ConditionId": "sweetfusionlab"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M342",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 43434,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M343",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 327680,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M344",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+54,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M345",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8600,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M346",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.2e+169,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M347",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.33e+144,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M348",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+128,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M349",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+13,
                "ConditionId": "volcanicbakingchamber"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m51",
                "Value": 1
            }
        }, 
        {
            "Id": "M350",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.8e+6,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M351",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.38e+9,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M352",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M353",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6.6e+10,
                "ConditionId": "sweetfusionlab"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M354",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.7e+12,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M355",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9.25e+8,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M356",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+13,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M357",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8800,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M358",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.5e+56,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m52",
                "Value": 1
            }
        }, 
        {
            "Id": "M359",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.5e+9,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M360",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.5e+13,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M361",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 6e+11,
                "ConditionId": "sweetfusionlab"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M362",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8192,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M363",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.771e+130,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M364",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3.33e+149,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M365",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9.99e+170,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        }, 
        {
            "Id": "M366",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.75e+131,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M367",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.05e+6,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M368",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.234e+10,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M369",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        }, 
        {
            "Id": "M370",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 6.6e+58,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        }, 
        {
            "Id": "M371",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+110,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m54",
                "Value": 1
            }
        }, 
        {
            "Id": "M372",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.2e+12,
                "ConditionId": "sweetfusionlab"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M373",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.1e+7,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M374",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.45e+11,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M375",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M376",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+12,
                "ConditionId": "harvesthornsmith"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m53",
                "Value": 1
            }
        },
        {
            "Id": "M377",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7,
                "ConditionId": "gildedgourd"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M378",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+14,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M379",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+13,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M380",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.15e+10,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M381",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9200,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M382",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 128,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M383",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 8192,
                "ConditionId": "gildedgourd"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M384",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 8.88e+68,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M385",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.2e+12,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M386",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7.5e+173,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M387",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.21e+121,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M388",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5.42e+152,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M389",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5.5e+13,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M390",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.7e+13,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M391",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 18756,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M392",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.02e+155,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M393",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.22e+7,
                "ConditionId": "gildedgourd"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M394",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.78e+14,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M395",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 9500,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M396",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4e+10,
                "ConditionId": "gildedgourd"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M397",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3.9e+13,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M398",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+8,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M399",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+79,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M400",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.11e+14,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M401",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+13,
                "ConditionId": "gildedgourd"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "sc_m55",
                "Value": 1
            }
        },
        {
            "Id": "M402",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M403",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.8e+10,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M404",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.56e+14,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
        
            "Id": "M405",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.2e+12,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M406",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 10000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M407",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+94,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M408",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+13,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M409",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1024,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M410",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+7,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M411",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+97,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M412",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4.9e+14,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M413",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.1e+14,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M414",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+183,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M415",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.2e+14,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M416",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 9.1e+13,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M417",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+13,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M418",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.11e+111,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        }, 
        {
            "Id": "M419",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+176,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M420",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 15000,
                "ConditionId": "darkscience"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        }, 
        {
            "Id": "M421",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+15,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M422",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+14,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M423",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+14,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M424",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+14,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M425",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+14,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        }, 
        {
            "Id": "M426",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+184,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M427",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+177,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M428",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+169,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M429",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+156,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M430",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+121,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M431",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+15,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M432",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+15,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M433",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+14,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M434",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+14,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },
        {
            "Id": "M435",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+14,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },
        {
            "Id": "M436",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+184,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M437",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+177,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M438",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+169,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M439",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+156,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 1
            }
        },  
        {
            "Id": "M440",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 3e+121,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },        
        {
            "Id": "M441",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 1000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M442",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+15,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M443",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+184,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M444",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+15,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M445",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+177,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M446",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+15,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M447",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+169,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M448",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+14,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M449",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+156,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M450",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+14,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M451",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 5e+121,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M452",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 1250,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M453",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+15,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M454",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+185,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M455",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+15,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M456",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+178,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M457",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+15,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M458",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+170,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M459",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+15,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M460",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+157,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M461",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+15,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M462",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+122,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M463",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 1500,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M464",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+16,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M465",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+186,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M466",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+16,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M467",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+179,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M468",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+16,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M469",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+171,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M470",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+15,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M471",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+158,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M472",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+15,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M473",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+123,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M474",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 2000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M475",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+17,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M476",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+186,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M477",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+16,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M478",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+179,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M479",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+16,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M480",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+171,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M481",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+16,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M482",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+158,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M483",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+16,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M484",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+123,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M485",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 2500,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M486",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+18,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M487",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+187,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M488",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+17,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M489",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+180,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M490",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+17,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M491",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+172,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M492",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+17,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M493",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+159,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M494",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+17,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M495",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 7e+124,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M496",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 3000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M497",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+19,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M498",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.05e+189,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M499",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.25e+19,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M500",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.05e+182,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M501",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+19,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M502",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.05e+174,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M503",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 7.5e+18,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M504",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.05e+161,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M505",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+18,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M506",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.05e+126,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M507",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 3500,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M508",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+21,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M509",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.1e+190,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M510",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+20,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M511",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.1e+183,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M512",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 4e+20,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M513",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.1e+175,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M514",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+20,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M515",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.1e+162,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M516",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+20,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M517",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2.1e+127,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M518",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 4000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M519",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+22,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M520",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+192,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M521",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+22,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M522",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+185,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M523",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.5e+22,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M524",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+177,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M525",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1.25e+22,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M526",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+164,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M527",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+22,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M528",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+129,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M529",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 4500,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M530",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+25,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M531",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+194,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M532",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+24,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M533",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+187,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M534",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+24,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M535",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+179,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M536",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+24,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M537",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+166,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M538",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+24,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M539",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+131,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M540",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 5000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M541",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+28,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M542",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+197,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M543",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+27,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M544",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+190,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M545",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+27,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M546",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+182,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M547",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+27,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M548",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+169,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M549",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+27,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M550",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+134,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M551",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 6000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M552",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+32,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M553",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+201,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M554",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 5e+31,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M555",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+194,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M556",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 3e+31,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M557",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+186,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M558",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2.5e+31,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M559",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+173,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M560",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 2e+31,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M561",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 2e+138,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M562",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 7000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M563",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+36,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M564",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+204,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M565",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+36,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M566",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+198,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M567",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+36,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M568",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+189,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M569",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+36,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M570",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+177,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M571",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+36,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M572",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+141,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M573",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 8000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M574",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+39,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M575",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+210,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M576",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+39,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M577",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+204,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M578",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+39,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M579",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+195,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M580",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+39,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M581",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+183,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M582",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+39,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M583",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+147,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M584",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 9000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M585",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+42,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M586",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+216,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M587",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+42,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M588",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+210,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M589",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+42,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M590",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+201,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M591",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+42,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M592",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+189,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M593",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+42,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M594",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+153,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M595",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 10000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M596",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+45,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M597",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+222,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M598",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+45,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M599",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+216,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M600",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+45,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M601",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+207,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M602",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+45,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M603",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+195,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M604",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+45,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M605",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+159,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M606",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 11250,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M607",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+48,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M608",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+228,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M609",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+48,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M610",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+222,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M611",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+48,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M612",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+213,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M613",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+48,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M614",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+201,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M615",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+48,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M616",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+165,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M617",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 12500,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M618",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+51,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M619",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+234,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M620",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+51,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M621",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+228,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M622",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+51,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M623",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+219,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M624",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+51,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M625",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+207,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M626",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+51,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M627",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+171,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M628",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 13750,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M629",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+55,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M630",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+249,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M631",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+55,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M632",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+234,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M633",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+55,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M634",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+225,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M635",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+55,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M636",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+213,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M637",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+55,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M638",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+177,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M639",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 15000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
        {
            "Id": "M640",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+60,
                "ConditionId": "mashmonument"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M641",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.75e+308,
                "ConditionId": "mashpotato"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M642",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+60,
                "ConditionId": "thegreatgobbler"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M643",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.75e+308,
                "ConditionId": "turkeyleg"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },   
        {
            "Id": "M644",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+60,
                "ConditionId": "theeternalovn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M645",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1.75e+308,
                "ConditionId": "fire"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M646",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+60,
                "ConditionId": "thegreatbaker"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M647",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+300,
                "ConditionId": "pie"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        }, 
        {
            "Id": "M648",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourceQuantity",
                "Threshold": 1e+60,
                "ConditionId": "theinfinitehorn"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },    
        {
            "Id": "M649",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResourcesEarnedSinceSubscription",
                "Threshold": 1e+264,
                "ConditionId": "cornucopia"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "plastic",
                "Value": 2
            }
        },  
        {
            "Id": "M650",
            "Rank": 1,
            "Condition": {
                "ConditionType": "ResearcherCardsEarnedSinceSubscription",
                "Threshold": 25000,
                "ConditionId": "any"
            },
            "Reward": {
                "Reward": "Gacha",
                "RewardId": "armored",
                "Value": 1
            }
        },  
    ],
    "Ranks": [
        {
            "Rank": "1",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "0",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.25,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 0.9,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 1,
            "AirDropScience": 35,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "2",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.375,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 1,
            "AirDropScience": 40,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "3",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "4",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.5,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.1,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 1.5,
            "AirDropScience": 45,
            "AirDropRankUpCoolDown": 60
        },
        {

            "Rank": "4",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.625,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.2,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 2,
            "AirDropScience": 50,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "5",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "4",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.75,
            "PremiumGachaMultiplier": 1,
            "NormalGachaMultiplierScience": 1.3,
            "PremiumGachaMultiplierScience": 1,
            "GachaMultiplierTrophy": 3,
            "AirDropScience": 60,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "6",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 0.875,
            "PremiumGachaMultiplier": 1.2,
            "NormalGachaMultiplierScience": 1.4,
            "PremiumGachaMultiplierScience": 1.2,
            "GachaMultiplierTrophy": 4,
            "AirDropScience": 65,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "7",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1,
            "PremiumGachaMultiplier": 1.2,
            "NormalGachaMultiplierScience": 1.5,
            "PremiumGachaMultiplierScience": 1.2,
            "GachaMultiplierTrophy": 5,
            "AirDropScience": 75,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "8",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.125,
            "PremiumGachaMultiplier": 1.2,
            "NormalGachaMultiplierScience": 1.6,
            "PremiumGachaMultiplierScience": 1.2,
            "GachaMultiplierTrophy": 6,
            "AirDropScience": 80,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "9",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.25,
            "PremiumGachaMultiplier": 1.2,
            "NormalGachaMultiplierScience": 1.7,
            "PremiumGachaMultiplierScience": 1.2,
            "GachaMultiplierTrophy": 7,
            "AirDropScience": 90,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "10",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.375,
            "PremiumGachaMultiplier": 1.2,
            "NormalGachaMultiplierScience": 1.8,
            "PremiumGachaMultiplierScience": 1.2,
            "GachaMultiplierTrophy": 8,
            "AirDropScience": 95,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "11",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.5,
            "PremiumGachaMultiplier": 1.2,
            "NormalGachaMultiplierScience": 1.9,
            "PremiumGachaMultiplierScience": 1.2,
            "GachaMultiplierTrophy": 9,
            "AirDropScience": 105,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "12",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.625,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 10,
            "AirDropScience": 110,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "13",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.75,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2.125,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 11,
            "AirDropScience": 115,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "14",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "3",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 1.875,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2.25,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 12,
            "AirDropScience": 125,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "15",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2.375,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 13,
            "AirDropScience": 130,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "16",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.1,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2.5,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 14,
            "AirDropScience": 140,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "17",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "7",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.2,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2.7,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 15,
            "AirDropScience": 145,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "18",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.3,
            "PremiumGachaMultiplier": 1.4,
            "NormalGachaMultiplierScience": 2.9,
            "PremiumGachaMultiplierScience": 1.4,
            "GachaMultiplierTrophy": 16,
            "AirDropScience": 150,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "19",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.4,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 3.15,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 17,
            "AirDropScience": 160,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "20",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.5,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 3.4,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 18,
            "AirDropScience": 165,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "21",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.6,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 3.7,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 19,
            "AirDropScience": 175,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "22",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 2.8,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 4,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 20,
            "AirDropScience": 180,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "23",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 4.3,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 22,
            "AirDropScience": 185,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "24",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "5",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.2,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 4.6,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 24,
            "AirDropScience": 195,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "25",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.4,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 5,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 26,
            "AirDropScience": 200,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "26",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "9",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.6,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 5.5,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 28,
            "AirDropScience": 220,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "27",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "6",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 3.8,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 6,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 30,
            "AirDropScience": 235,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "28",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4,
            "PremiumGachaMultiplier": 1.6,
            "NormalGachaMultiplierScience": 6.5,
            "PremiumGachaMultiplierScience": 1.6,
            "GachaMultiplierTrophy": 32.5,
            "AirDropScience": 250,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "29",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.25,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 7,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 35,
            "AirDropScience": 260,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "30",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.5,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 7.5,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 37.5,
            "AirDropScience": 275,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "31",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "14",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 4.75,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 8,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 40,
            "AirDropScience": 290,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "32",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 5,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 8.5,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 43,
            "AirDropScience": 305,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "33",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "12",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 5.25,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 9,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 46,
            "AirDropScience": 320,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "34",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "8",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 5.5,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 9.5,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 50,
            "AirDropScience": 330,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "35",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 5.75,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 10,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 55,
            "AirDropScience": 345,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "36",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "9",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 6,
            "PremiumGachaMultiplier": 2,
            "NormalGachaMultiplierScience": 11,
            "PremiumGachaMultiplierScience": 2,
            "GachaMultiplierTrophy": 60,
            "AirDropScience": 365,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "37",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "12",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 6.3,
            "PremiumGachaMultiplier": 2.2,
            "NormalGachaMultiplierScience": 11.5,
            "PremiumGachaMultiplierScience": 2.2,
            "GachaMultiplierTrophy": 65,
            "AirDropScience": 380,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "38",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 6.6,
            "PremiumGachaMultiplier": 2.2,
            "NormalGachaMultiplierScience": 12,
            "PremiumGachaMultiplierScience": 2.2,
            "GachaMultiplierTrophy": 70,
            "AirDropScience": 400,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "39",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 6.9,
            "PremiumGachaMultiplier": 2.2,
            "NormalGachaMultiplierScience": 12.5,
            "PremiumGachaMultiplierScience": 2.2,
            "GachaMultiplierTrophy": 75,
            "AirDropScience": 415,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "40",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "13",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 7.2,
            "PremiumGachaMultiplier": 2.2,
            "NormalGachaMultiplierScience": 13.1,
            "PremiumGachaMultiplierScience": 2.2,
            "GachaMultiplierTrophy": 80,
            "AirDropScience": 435,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "41",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "13",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 7.5,
            "PremiumGachaMultiplier": 2.6,
            "NormalGachaMultiplierScience": 13.8,
            "PremiumGachaMultiplierScience": 2.6,
            "GachaMultiplierTrophy": 85,
            "AirDropScience": 450,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "42",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 7.8,
            "PremiumGachaMultiplier": 2.6,
            "NormalGachaMultiplierScience": 14.5,
            "PremiumGachaMultiplierScience": 2.6,
            "GachaMultiplierTrophy": 90,
            "AirDropScience": 470,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "43",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 8.1,
            "PremiumGachaMultiplier": 2.6,
            "NormalGachaMultiplierScience": 15.2,
            "PremiumGachaMultiplierScience": 2.6,
            "GachaMultiplierTrophy": 95,
            "AirDropScience": 485,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "44",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "13",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 8.4,
            "PremiumGachaMultiplier": 2.6,
            "NormalGachaMultiplierScience": 16,
            "PremiumGachaMultiplierScience": 2.6,
            "GachaMultiplierTrophy": 100,
            "AirDropScience": 520,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "45",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 8.7,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 17,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 105,
            "AirDropScience": 550,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "46",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 9,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 18,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 110,
            "AirDropScience": 585,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "47",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "14",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 9.3,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 19,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 115,
            "AirDropScience": 620,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "48",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 9.6,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 20,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 120,
            "AirDropScience": 655,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "49",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "11",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 10,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 21.5,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 125,
            "AirDropScience": 690,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "50",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "10",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 10.5,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 23,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 135,
            "AirDropScience": 750,
            "AirDropRankUpCoolDown": 60
        },
        {
            "Rank": "51",
            "Name": "UNUSED",
            "SpriteName": "art-avatar",
            "Missions": "20",
            "ActiveMissionCount": 3,
            "RewardType": "None",
            "NormalGachaMultiplier": 11,
            "PremiumGachaMultiplier": 3,
            "NormalGachaMultiplierScience": 25,
            "PremiumGachaMultiplierScience": 3,
            "GachaMultiplierTrophy": 150,
            "AirDropScience": 815,
            "AirDropRankUpCoolDown": 60
        },
    ],
    "ResearcherRankCosts": [
        {
            "Rarity": "Common",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "Rare",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "Epic",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "Supreme",
            "Quantity": [
                9999
            ],
            "Science": [
                999999
            ]
        },
        {
            "Rarity": "LteCommon",
            "Quantity": [
                5,
                10,
                20,
                50,
                100,
                200,
                400,
                800,
                1000,
            ],
            "Science": [
                100,
                200,
                300,
                400,
                800,
                2000,
                4000,
                8000,
                20000,

            ]
        },
        {
            "Rarity": "LteRare",
            "Quantity": [
                5,
                10,
                20,
                50,
                100,
                200,
                400,
                800,

            ],
            "Science": [
                250,
                500,
                1000,
                2500,
                5000,
                10000,
                20000,
                50000,
            ]
        }
    ],
    "Researchers": [
        {
            "Id": "THX001",
            "Name": "I1T1",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["potatomasher"],
            "ExpoMultiplier": 1,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX002",
            "Name": "I1T2",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["chef"],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX003",
            "Name": "I1T3",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["kitchen"],
            "ExpoMultiplier": 3,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 3,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX004",
            "Name": "I1T4",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["tatertruck"],
            "ExpoMultiplier": 7,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 7,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX005",
            "Name": "I1T5",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["silosmasher"],
            "ExpoMultiplier": 5,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX006",
            "Name": "I1T6",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["gravyfeds"],
            "ExpoMultiplier": 7,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 20,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX007",
            "Name": "I1T7",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["feastfoundry"],
            "ExpoMultiplier": 7,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 27,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX008",
            "Name": "I1T8",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["carbcollective"],
            "ExpoMultiplier": 8,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 35,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX009",
            "Name": "I1T9",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["mashmonument"],
            "ExpoMultiplier": 9,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 40,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },

        {
            "Id": "THX010",
            "Name": "I2T1",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["backyardturkey"],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 3,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX011",
            "Name": "I2T2",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["gobblepen"],
            "ExpoMultiplier": 4,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 5,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX012",
            "Name": "I2T3",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["drumstickfarm"],
            "ExpoMultiplier": 6,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 10,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX013",
            "Name": "I2T4",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["feastfactory"],
            "ExpoMultiplier": 8,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 18,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX014",
            "Name": "I2T5",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["turkeylegtycoon"],
            "ExpoMultiplier": 10,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 26,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX015",
            "Name": "I2T6",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["gravyreactor"],
            "ExpoMultiplier": 12,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 32,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX016",
            "Name": "I2T7",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["pilgrimpoultrysyndicate"],
            "ExpoMultiplier": 14,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 38,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX017",
            "Name": "I2T8",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["thegreatgobbler"],
            "ExpoMultiplier": 16,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 42,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX018",
            "Name": "I3T1",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["toasteroven"],
            "ExpoMultiplier": 3,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 8,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX019",
            "Name": "I3T2",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["familyoven"],
            "ExpoMultiplier": 6,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX020",
            "Name": "I3T3",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["commercialroaster"],
            "ExpoMultiplier": 9,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 20,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX021",
            "Name": "I3T4",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["conveyorbeltbakeline"],
            "ExpoMultiplier": 12,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 26,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX022",
            "Name": "I3T5",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["smartaioven"],
            "ExpoMultiplier": 15,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 32,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX023",
            "Name": "I3T6",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["volcanicbakingchamber"],
            "ExpoMultiplier": 18,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 39,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX024",
            "Name": "I3T7",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["theeternalovn"],
            "ExpoMultiplier": 21,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 44,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },

        {
            "Id": "THX025",
            "Name": "I4T1",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["crustkneader"],
            "ExpoMultiplier": 4,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 20,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX026",
            "Name": "I4T2",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["fillingwhipper"],
            "ExpoMultiplier": 8,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 24,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX027",
            "Name": "I4T3",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["pieassemblyline"],
            "ExpoMultiplier": 12,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 30,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX028",
            "Name": "I4T4",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["pieempireexecutive"],
            "ExpoMultiplier": 16,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 36,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX029",
            "Name": "I4T5",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["sweetfusionlab"],
            "ExpoMultiplier": 20,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 41,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX030",
            "Name": "I4T6",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["thegreatbaker"],
            "ExpoMultiplier": 24,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 46,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX031",
            "Name": "I5T1",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["dumpsterhorn"],
            "ExpoMultiplier": 5,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 34,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX032",
            "Name": "I5T2",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["craftfairsupply"],
            "ExpoMultiplier": 10,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 38,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX033",
            "Name": "I5T3",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["harvesthornsmith"],
            "ExpoMultiplier": 15,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 42,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX034",
            "Name": "I5T4",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["gildedgourd"],
            "ExpoMultiplier": 20,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 46,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX035",
            "Name": "I5T5",
            "ModType": "GenManagerAndSpeedMult",
            "TargetIds": ["theinfinitehorn"],
            "ExpoMultiplier": 25,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteCommon",
            "PlayerRankUnlock": 48,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX036",
            "Name": "I1Trade",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "mashpotato"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX037",
            "Name": "I2Trade",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "turkeyleg"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 5,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX038",
            "Name": "I3Trade",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "fire"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX039",
            "Name": "I4Trade",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "pie"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 23,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX040",
            "Name": "I5Trade",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "cornucopia"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 3,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 37,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX041",
            "Name": "GlobalTrade",
            "ModType": "TradePayoutMultiplier",
            "TargetIds": [
                "mashpotato, turkeyleg, fire, pie, cornucopia"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 18,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX042",
            "Name": "I1Production",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "foodlabour"
            ],
            "ExpoMultiplier": 0.5,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 1,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX043",
            "Name": "I2Production",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "animallabour"
            ],
            "ExpoMultiplier": 0.5,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 4,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX044",
            "Name": "I3Production",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "technician"
            ],
            "ExpoMultiplier": 0.75,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 10,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX045",
            "Name": "I4Production",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "baker"
            ],
            "ExpoMultiplier": 1,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 22,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX046",
            "Name": "I5Production",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "botanist"
            ],
            "ExpoMultiplier": 1,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 36,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX047",
            "Name": "GlobalProduction",
            "ModType": "GeneratorPayoutMultiplier",
            "TargetIds": [
                "foodlabour, animallabour, technician, baker, botanist"
            ],
            "ExpoMultiplier": 0.5,
            "ExpoGrowth": 4,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 11,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX048",
            "Name": "I1CritBonus",
            "ModType": "GeneratorCritPowerMult",
            "TargetIds": [
                "foodlabour"
            ],
            "ExpoMultiplier": 3,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 15,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX049",
            "Name": "I2CritBonus",
            "ModType": "GeneratorCritPowerMult",
            "TargetIds": [
                "animallabour"
            ],
            "ExpoMultiplier": 3,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 17,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX050",
            "Name": "I3CritBonus",
            "ModType": "GeneratorCritPowerMult",
            "TargetIds": [
                "technician"
            ],
            "ExpoMultiplier": 4,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 22,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX051",
            "Name": "I4CritBonus",
            "ModType": "GeneratorCritPowerMult",
            "TargetIds": [
                "baker"
            ],
            "ExpoMultiplier": 5,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 33,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX052",
            "Name": "I5CritBonus",
            "ModType": "GeneratorCritPowerMult",
            "TargetIds": [
                "botanist"
            ],
            "ExpoMultiplier": 5,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 44,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX053",
            "Name": "GlobalCritBonus",
            "ModType": "GeneratorCritPowerMult",
            "TargetIds": [
                "foodlabour,animallabour,technician,baker,botanist"
            ],
            "ExpoMultiplier": 2,
            "ExpoGrowth": 2,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 28,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX054",
            "Name": "GlobalDiscount",
            "ModType": "GeneratorCostReduction",
            "TargetIds": [
                "foodlabour, animallabour, technician, baker, botanist"
            ],
            "ExpoMultiplier": 1,
            "ExpoGrowth": 10,
            "UpgradePower": 0,
            "CurveModifier": 0,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 40,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
        {
            "Id": "THX055",
            "Name": "GlobalCritChance",
            "ModType": "GeneratorCritChance",
            "TargetIds": [
                "foodlabour,animallabour,technician,baker,botanist"
            ],
            "ExpoMultiplier": 0,
            "ExpoGrowth": 0,
            "UpgradePower": 0,
            "CurveModifier": 0.125,
            "BasePower": 0,
            "Rarity": "LteRare",
            "PlayerRankUnlock": 5,
            "ResearchOutputType": "Constant",
            "ResearchOutputRate": 1
        },
    ],
    "Resources": [
        {
            "Id": "mashpotato",
            "Singular": "mashedpotato",
            "Plural": "Mashedpotatoes",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "turkeyleg",
            "Singular": "turkeyleg",
            "Plural": "Turkeylegs",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "fire",
            "Singular": "fire",
            "Plural": "Fires",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "pie",
            "Singular": "pie",
            "Plural": "Pies",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "cornucopia",
            "Singular": "cornucopia",
            "Plural": "Cornucopias",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "potatomasher",
            "Singular": "Potatomasher",
            "Plural": "potatomashers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "chef",
            "Singular": "Chef",
            "Plural": "chefs",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "kitchen",
            "Singular": "Kitchen",
            "Plural": "kitchens",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "tatertruck",
            "Singular": "Tatertruck",
            "Plural": "tatertrucks",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "silosmasher",
            "Singular": "Silosmasher",
            "Plural": "silosmashers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "gravyfeds",
            "Singular": "Gravyfeds",
            "Plural": "gravyfedgens",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "feastfoundry",
            "Singular": "Feastfoundry",
            "Plural": "feastfoundries",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "carbcollective",
            "Singular": "Carbcollective",
            "Plural": "carbcollectives",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "mashmonument",
            "Singular": "Mashmonument",
            "Plural": "mashmonuments",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "backyardturkey",
            "Singular": "Backyardturkey",
            "Plural": "backyardturkeys",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "gobblepen",
            "Singular": "Gobblepen",
            "Plural": "gobblepens",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "drumstickfarm",
            "Singular": "Drumstickfarm",
            "Plural": "drumstickfarms",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "feastfactory",
            "Singular": "Feastfactory",
            "Plural": "feastfactories",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "turkeylegtycoon",
            "Singular": "Turkeylegtycoon",
            "Plural": "turkeylegtycoons",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "gravyreactor",
            "Singular": "Gravyreactor",
            "Plural": "gravyreactors",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "pilgrimpoultrysyndicate",
            "Singular": "Pilgrimpoultrysyndicate",
            "Plural": "pilgrimpoultrysyndicates",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "thegreatgobbler",
            "Singular": "Thegreatgobbler",
            "Plural": "thegreatgobblers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "toasteroven",
            "Singular": "Toasteroven",
            "Plural": "toasterovens",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "familyoven",
            "Singular": "Familyoven",
            "Plural": "familyovens",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "commercialroaster",
            "Singular": "Commercialroaster",
            "Plural": "commercialroasters",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "conveyorbeltbakeline",
            "Singular": "Conveyorbeltbakeline",
            "Plural": "conveyorbeltbakelines",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "smartaioven",
            "Singular": "Smartaioven",
            "Plural": "smartaiovens",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "volcanicbakingchamber",
            "Singular": "Volcanicbakingchamber",
            "Plural": "volcanicbakingchambers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "theeternalovn",
            "Singular": "Theeternalovn",
            "Plural": "theeternaloven",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "crustkneader",
            "Singular": "Crustkneader",
            "Plural": "crustkneaders",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "fillingwhipper",
            "Singular": "Fillingwhipper",
            "Plural": "fillingwhippers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "pieassemblyline",
            "Singular": "Pieassemblyline",
            "Plural": "pieassemblylines",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "pieempireexecutive",
            "Singular": "Pieempireexecutive",
            "Plural": "pieempireexecutives",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "sweetfusionlab",
            "Singular": "Sweetfusionlab",
            "Plural": "sweetfusionlabs",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "thegreatbaker",
            "Singular": "Thegreatbaker",
            "Plural": "thegreatbakers",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "dumpsterhorn",
            "Singular": "Dumpsterhorn",
            "Plural": "dumpsterhorns",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "craftfairsupply",
            "Singular": "Craftfairsupply",
            "Plural": "craftfairsupplies",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "harvesthornsmith",
            "Singular": "Harvesthornsmith",
            "Plural": "harvesthornsmiths",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "gildedgourd",
            "Singular": "Thegildedgourd",
            "Plural": "gildedgourdconsortium",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "theinfinitehorn",
            "Singular": "Theinfinitehorn",
            "Plural": "theinfinithorns",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "darkscience",
            "Singular": "Dark Science",
            "Plural": "Dark Science",
            "CurrencyCode": "SC",
            "Resettable": false,
            "SharedData": false
        },
        {
            "Id": "comrade",
            "Singular": "Comrade",
            "Plural": "Comrades",
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "comradegenerator",
            "Singular": "Comrade",
            "Plural": "Comrades",
            "StartingQty": 1,
            "Resettable": true,
            "SharedData": false
        },
        {
            "Id": "gold",
            "Singular": "Gold",
            "Plural": "Gold",
            "CurrencyCode": "GO",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "trophy",
            "Singular": "Trophy",
            "Plural": "Trophies",
            "Resettable": false,
            "SharedData": false
        },
        {
            "Id": "timehack_1",
            "Singular": "Basic Warp",
            "Plural": "Basic Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "timehack_4",
            "Singular": "Super Warp",
            "Plural": "Super Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "timehack_24",
            "Singular": "Elite Warp",
            "Plural": "Elite Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "timehack_8",
            "Singular": "More Than Basic Time Warp",
            "Plural": "More Than Basic Time Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "timehack_12",
            "Singular": "Semi Mega Time Warp",
            "Plural": "Semi Mega Time Warps",
            "CurrencyCode": "TH",
            "Resettable": false,
            "SharedData": true
        },
        {
            "Id": "specops_point",
            "Singular": "SpecialOps Point",
            "Plural": "SpecialOps Points",
            "StartingQty": 0,
            "Resettable": false,
            "SharedData": false
        },
    ],
    "Store": [
        {
            "Name": "Bit O'Gold",
            "InternalId": "t02_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 199,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 160,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold1\"}"
        },
        {
            "Name": "Lot O'Gold",
            "InternalId": "t05_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 499,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 500,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold2\"}"
        },
        {
            "Name": "Tonne O'Gold",
            "InternalId": "t10_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 1200,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold3\",\"popular\":\"true\"}"
        },
        {
            "Name": "Bucket O'Gold",
            "InternalId": "t20_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 1999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 2500,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold4\"}"
        },
        {
            "Name": "Barrel O'Gold",
            "InternalId": "t50_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 4999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 6500,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold5\"}"
        },
        {
            "Name": "Wheels O'Gold",
            "InternalId": "t60_gold",
            "ItemClass": "VirtualCurrencyGold",
            "Price": 9999,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 14000,
                    "RewardId": "GO"
                }
            ],
            "CustomData": "{\"icon\":\"vc-gold6\",\"bestValue\":\"true\"}"
        },
        {
            "Name": "Discovery Pack",
            "InternalId": "darkscience_1000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 50,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 1000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science1\",\"topUp\":\"true\"}"
        },
        {
            "Name": "Ad Free Airdrops",
            "InternalId": "t06_adfreeairdrop06",
            "ItemClass": "AdFreeAirdrop",
            "Price": 599,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ]
        },
        {
            "Name": "Ad Free Airdrops",
            "InternalId": "t05_adfreeairdrop05",
            "ItemClass": "AdFreeAirdrop",
            "Price": 499,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ]
        },
        {
            "Name": "Ad Free Airdrops",
            "InternalId": "t04_adfreeairdrop04",
            "ItemClass": "AdFreeAirdrop",
            "Price": 399,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ]
        },
        {
            "Name": "Ad Free Airdrops",
            "InternalId": "t03_adfreeairdrop03",
            "ItemClass": "AdFreeAirdrop",
            "Price": 299,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ]
        },
        {
            "Name": "Ad Free Airdrops",
            "InternalId": "t02_adfreeairdrop02",
            "ItemClass": "AdFreeAirdrop",
            "Price": 199,
            "Currency": "RM",
            "Tags": [
                "RealMoneyPurchase"
            ]
        },
        {
            "Name": "Discovery Pack",
            "InternalId": "darkscience_1000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 50,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 1000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science1\",\"topUp\":\"true\"}"
        },
        {
            "Name": "Wise Pack",
            "InternalId": "darkscience_5000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 200,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 5000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science2\"}"
        },
        {
            "Name": "Super Wise Pack",
            "InternalId": "darkscience_15000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 500,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 15000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science4\"}"
        },
        {
            "Name": "Brilliant Pack",
            "InternalId": "darkscience_25000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 800,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 25000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science5\"}"
        },
        {
            "Name": "Super Brilliant Pack",
            "InternalId": "darkscience_35000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 1100,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 35000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science6\"}"
        },
        {
            "Name": "Super Duper Brilliant Pack",
            "InternalId": "darkscience_50000",
            "ItemClass": "VirtualCurrencyScience",
            "Price": 1500,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "VirtualCurrency",
                    "Value": 50000,
                    "RewardId": "SC"
                }
            ],
            "CustomData": "{\"icon\":\"vc-science3\",\"bestValue\":\"true\"}"
        },
        {
            "Name": "Titanium Capsule",
            "InternalId": "gacha_titanium",
            "ItemClass": "Gacha",
            "Price": 750,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Gacha",
                    "Value": 1,
                    "RewardId": "titanium"
                }
            ],
            "CustomData": "{\"icon\":\"ga-titanium\"}"
        },
        {
            "Name": "Skip 1 Hour!",
            "InternalId": "timehack_1",
            "ItemClass": "Experiment",
            "Price": 50,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX167"
                }
            ],
            "CustomData": "{\"rarity\":\"Rare\"}"
        },
        {
            "Name": "Skip 4 Hours!",
            "InternalId": "timehack_4",
            "ItemClass": "Experiment",
            "Price": 150,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX164"
                }
            ],
            "CustomData": "{\"rarity\":\"Epic\"}"
        },
        {
            "Name": "Skip 8 Hours!",
            "InternalId": "timehack_8",
            "ItemClass": "Experiment",
            "Price": 280,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX168"
                }
            ],
            "CustomData": "{\"rarity\":\"Epic\"}"
        },
        {
            "Name": "Skip 12 Hours!",
            "InternalId": "timehack_12",
            "ItemClass": "Experiment",
            "Price": 400,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX169"
                }
            ],
            "CustomData": "{\"rarity\":\"Epic\"}"
        },
        {
            "Name": "Skip 1 Day!",
            "InternalId": "timehack_24",
            "ItemClass": "Experiment",
            "Price": 750,
            "Currency": "GO",
            "Tags": [
                "GoldPurchase"
            ],
            "Rewards": [
                {
                    "Reward": "Experiment",
                    "Value": 1,
                    "RewardId": "EX165"
                }
            ],
        }
    ],
    "SupremePassConfig": {
        "NumExtraFreeGachaCapsule": 2,
        "PropagandaAdsRemoved": true,
        "SpecOpsTimeReduction": 4,
        "NumExtraSpecOpsSlots": 1,
        "NumPerks": 6,
        "SupremePassStoreItemId": "t10_supremepass",
        "PurchaseTierCost": 250
    },
    "Trades": [
        {
            "Resource": "mashpotato",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 1,
            "MaxLevel": 304
        },
        {
            "Resource": "turkeyleg",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 2,
            "MaxLevel": 304
        },
        {
            "Resource": "fire",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 3,
            "MaxLevel": 304
        },
        {
            "Resource": "pie",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 4,
            "MaxLevel": 304
        },
        {
            "Resource": "cornucopia",
            "CostExponent": 10,
            "CostMultiplier": 500,
            "ComradeMultiplier": 0,
            "ComradeAdd": 5,
            "MaxLevel": 304
        }
    ]
}

// Adding Custom Capsules
DATA['evergreen'].GachaLootTable.push({
    "Id": "turkey",
    "SortingOrder": 7,
    "CardWeight": 40,
    "RareWeight": 5,
    "EpicWeight": 40,
    "SupremeWeight": 225,
    "LteRareWeight": -1,
    "ScienceMin": 285,
    "ScienceMax": 315,
    "ChanceMultiplier": 2,
    "WeightDivider": 10,
    "Type": "Premium",
    "SupremeWeightModifier": 1.5
})

// Schedule Info
SCHEDULE_CYCLES.LteOneOff.push({
    "BalanceId": "thanksgiving-bal-10",
    "BalanceType": "Lte",
    "StartTime": "2025-11-14T12:00:00",
    "EndTime": "2025-12-06T16:00:00",
    "ThemeId": "thanksgiving",
    "RewardId": "rewardThanksgiving",
    "LeaderboardId": "leaderboard3",
    "LteShortLeaderboardId": "bucketThanksgiving",
    "SpecOpsIds": ""
});

SCHEDULE_CYCLES.LteRewards.push({
    "RewardId": "rewardThanksgiving",
    "Rewards": [
        {
            "Reward": "Resources",
            "RewardId": "scientist",
            "Value": 500,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "common",
            "Value": 50,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "wood",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "rare",
            "Value": 10,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "epic",
            "Value": 2,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "turkey",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Resources",
            "RewardId": "gold",
            "Value": 10,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "event",
            "Value": 5,
            "AvatarId": "null"
        },
        {
            "Reward": "Resources",
            "RewardId": "scientist",
            "Value": 2000,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "turkey",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Resources",
            "RewardId": "timehack_1",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "stone",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Resources",
            "RewardId": "gold",
            "Value": 25,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "turkey",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "rare",
            "Value": 50,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "epic",
            "Value": 4,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "rankup",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "turkey",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Resources",
            "RewardId": "scientist",
            "Value": 5000,
            "AvatarId": "null"
        },
        {
            "Reward": "Resources",
            "RewardId": "timehack_4",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "gold",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Gacha",
            "RewardId": "turkey",
            "Value": 1,
            "AvatarId": "null"
        },
        {
            "Reward": "Researcher",
            "RewardId": "event",
            "Value": 20,
            "AvatarId": "null"
        },
    ]
})

SCHEDULE_CYCLES.LteShortLeaderboards.push({
      "LeaderboardId": "bucketThanksgiving",
      "BracketsActive": true,
      "Brackets": [
        {
          "IsPercentage": false,
          "Value": 1
        },
        {
          "IsPercentage": false,
          "Value": 2
        },
        {
          "IsPercentage": false,
          "Value": 3
        },
        {
          "IsPercentage": false,
          "Value": 4
        },
        {
          "IsPercentage": false,
          "Value": 5
        },
        {
          "IsPercentage": false,
          "Value": 6
        },
        {
          "IsPercentage": false,
          "Value": 7
        },
        {
          "IsPercentage": false,
          "Value": 8
        },
        {
          "IsPercentage": false,
          "Value": 9
        },
        {
          "IsPercentage": false,
          "Value": 10
        },
        {
          "IsPercentage": false,
          "Value": 11
        },
        {
          "IsPercentage": false,
          "Value": 12
        },
        {
          "IsPercentage": false,
          "Value": 13
        },
        {
          "IsPercentage": false,
          "Value": 14
        },
        {
          "IsPercentage": false,
          "Value": 15
        },
        {
          "IsPercentage": false,
          "Value": 16
        },
        {
          "IsPercentage": false,
          "Value": 17
        },
        {
          "IsPercentage": false,
          "Value": 18
        },
        {
          "IsPercentage": false,
          "Value": 19
        },
        {
          "IsPercentage": false,
          "Value": 20
        },
        {
          "IsPercentage": false,
          "Value": 21
        },
        {
          "IsPercentage": false,
          "Value": 22
        },
        {
          "IsPercentage": false,
          "Value": 23
        },
        {
          "IsPercentage": false,
          "Value": 24
        },
        {
          "IsPercentage": false,
          "Value": 25
        }
      ],
      "BracketRewards": [
        {
          "Reward": "Gacha",
          "RewardId": "diamond",
          "Value": 1
        },
        {
          "Reward": "Gacha",
          "RewardId": "supreme",
          "Value": 1
        },
        {
          "Reward": "Resources",
          "RewardId": "gold",
          "Value": 250
        },
        {
          "Reward": "Gacha",
          "RewardId": "gold",
          "Value": 1
        },
        {
          "Reward": "Resources",
          "RewardId": "gold",
          "Value": 100
        },
        {
          "Reward": "Resources",
          "RewardId": "timehack_4",
          "Value": 1
        },
        {
          "Reward": "Researcher",
          "RewardId": "event",
          "Value": 10
        },
        {
          "Reward": "Gacha",
          "RewardId": "iron",
          "Value": 1
        },
        {
          "Reward": "Resources",
          "RewardId": "gold",
          "Value": 50
        },
        {
          "Reward": "Gacha",
          "RewardId": "prime",
          "Value": 75
        },
        {
          "Reward": "Resources",
          "RewardId": "scientist",
          "Value": 4000
        },
        {
          "Reward": "Researcher",
          "RewardId": "rare",
          "Value": 50
        },
        {
          "Reward": "Researcher",
          "RewardId": "epic",
          "Value": 5
        },
        {
          "Reward": "Researcher",
          "RewardId": "event",
          "Value": 5
        },
        {
          "Reward": "Gacha",
          "RewardId": "rankup",
          "Value": 1
        },
        {
          "Reward": "Resources",
          "RewardId": "gold",
          "Value": 25
        },
        {
          "Reward": "Resources",
          "RewardId": "scientist",
          "Value": 2000
        },
        {
          "Reward": "Researcher",
          "RewardId": "rare",
          "Value": 25
        },
        {
          "Reward": "Gacha",
          "RewardId": "iron",
          "Value": 20
        },
        {
          "Reward": "Resources",
          "RewardId": "gold",
          "Value": 15
        },
        {
          "Reward": "Resources",
          "RewardId": "gold",
          "Value": 5
        },
        {
          "Reward": "Researcher",
          "RewardId": "common",
          "Value": 50
        },
        {
          "Reward": "Researcher",
          "RewardId": "common",
          "Value": 25
        },
        {
          "Reward": "Resources",
          "RewardId": "scientist",
          "Value": 750
        },
        {
          "Reward": "Resources",
          "RewardId": "scientist",
          "Value": 500
        }
      ]
})

// Localisation
let ADDITIONAL_LANGUAGE = `
placeholder=placeholder
lte.thanksgiving.name=Glorious Thanksgiving Feast
lte.thanksgiving.desc=It's that time of year where comrades get together, enjoy a massive feast, huddle up and celebrate the Motherland!

gacha.turkey.name=Turkey

foodlabour=Mash Potato
foodlabour.allindustries=All Mash Potato Industries
resource.mashpotato.singular=Mashed Potato
resource.mashpotato.plural=Mashed Potatoes
resource.potatomasher.singular=Potato Masher
resource.potatomasher.plural=Potato Mashers
resource.chef.singular=Chef
resource.chef.plural=Chefs
resource.kitchen.singular=Kitchen
resource.kitchen.plural=Kitchens
resource.tatertruck.singular=Tater Truck
resource.tatertruck.plural=Tater Trucks
resource.silosmasher.singular=Silo Smasher
resource.silosmasher.plural=Silo Smashers
resource.gravyfeds.singular=Gravy-Fed Generator
resource.gravyfeds.plural=Gravy-Fed Generators
resource.feastfoundry.singular=Feast Foundry
resource.feastfoundry.plural=Feast Foundries
resource.carbcollective.singular=Carb Collective
resource.carbcollective.plural=Carb Collectives
resource.mashmonument.singular=Mash Monument
resource.mashmonument.plural=Mash Monuments

researcher.THX001.name=Researcher I1T1
researcher.THX002.name=Researcher I1T2
researcher.THX003.name=Researcher I1T3
researcher.THX004.name=Researcher I1T4
researcher.THX005.name=Researcher I1T5
researcher.THX006.name=Researcher I1T6
researcher.THX007.name=Researcher I1T7
researcher.THX008.name=Researcher I1T8
researcher.THX009.name=Researcher I1T9
researcher.THX036.name=I1Trade
researcher.THX042.name=I1Production
researcher.THX048.name=I1CritBonus



animallabour=Turkey Leg
animallabour.allindustries=All Turkey Leg Industries
resource.turkeyleg.singular=Turkey Leg
resource.turkeyleg.plural=Turkey Legs
resource.backyardturkey.singular=Backyard Turkey
resource.backyardturkey.plural=Backyard Turkeys
resource.gobblepen.singular=Gobble Pen
resource.gobblepen.plural=Gobble Pens
resource.drumstickfarm.singular=Drumstick Farm
resource.drumstickfarm.plural=Drumstick Farms
resource.feastfactory.singular=Feast Factory
resource.feastfactory.plural=Feast Factories
resource.turkeylegtycoon.singular=Turkey Leg Tycoon
resource.turkeylegtycoon.plural=Turkey Leg Tycoons
resource.gravyreactor.singular=Gravy Reactor
resource.gravyreactor.plural=Gravy Reactors
resource.pilgrimpoultrysyndicate.singular=Pilgrim Poultry Syndicate
resource.pilgrimpoultrysyndicate.plural=Pilgrim Poultry Syndicates
resource.thegreatgobbler.singular=The Great Gobbler
resource.thegreatgobbler.plural=The Great Gobblers

researcher.THX010.name=Researcher I2T1
researcher.THX011.name=Researcher I2T2
researcher.THX012.name=Researcher I2T3
researcher.THX013.name=Researcher I2T4
researcher.THX014.name=Researcher I2T5
researcher.THX015.name=Researcher I2T6
researcher.THX016.name=Researcher I2T7
researcher.THX017.name=Researcher I2T8
researcher.THX037.name=I2Trade
researcher.THX043.name=I2Production
researcher.THX049.name=I2CritBonus



technician=Fire
technician.allindustries=All Fire Industries
resource.fire.singular=Fire
resource.fire.plural=Fires
resource.toasteroven.singular=Toaster Oven
resource.toasteroven.plural=Toaster Ovens
resource.familyoven.singular=Family Oven
resource.familyoven.plural=Family Ovens
resource.commercialroaster.singular=Commercial Roaster
resource.commercialroaster.plural=Commercial Roasters
resource.conveyorbeltbakeline.singular=Conveyor Belt Bake Line
resource.conveyorbeltbakeline.plural=Conveyor Belt Bake Lines
resource.smartaioven.singular=Smart-AI Oven
resource.smartaioven.plural=Smart-AI Ovens
resource.volcanicbakingchamber.singular=Volcanic Baking Chamber
resource.volcanicbakingchamber.plural=Volcanic Baking Chambers
resource.theeternalovn.singular=Eternal Oven
resource.theeternalovn.plural=Eternal Ovens

researcher.THX018.name=Researcher I3T1
researcher.THX019.name=Researcher I3T2
researcher.THX020.name=Researcher I3T3
researcher.THX021.name=Researcher I3T4
researcher.THX022.name=Researcher I3T5
researcher.THX023.name=Researcher I3T6
researcher.THX024.name=Researcher I3T7
researcher.THX038.name=I3Trade
researcher.THX044.name=I3Production
researcher.THX050.name=I3CritBonus



baker=Pie
baker.allindustries=All Pie Industries
resource.pie.singular=Pie
resource.pie.plural=Pies
resource.crustkneader.singular=Crust Kneader
resource.crustkneader.plural=Crust Kneaders
resource.fillingwhipper.singular=Filling Whipper
resource.fillingwhipper.plural=Filling Whippers
resource.pieassemblyline.singular=Pie Assembly Line
resource.pieassemblyline.plural=Pie Assembly Lines
resource.pieempireexecutive.singular=Pie Empire Executive
resource.pieempireexecutive.plural=Pie Empire Executives
resource.sweetfusionlab.singular=Sweet Fusion Lab
resource.sweetfusionlab.plural=Sweet Fusion Labs
resource.thegreatbaker.singular=The Great Baker
resource.thegreatbaker.plural=The Great Bakers

researcher.THX025.name=Researcher I4T1
researcher.THX026.name=Researcher I4T2
researcher.THX027.name=Researcher I4T3
researcher.THX028.name=Researcher I4T4
researcher.THX029.name=Researcher I4T5
researcher.THX030.name=Researcher I4T6
researcher.THX039.name=I4Trade
researcher.THX045.name=I4Production
researcher.THX051.name=I4CritBonus



botanist=Cornucopia
botanist.allindustries=All Cornucopia Industries
resource.cornucopia.singular=Cornucopia
resource.cornucopia.plural=Cornucopias
resource.dumpsterhorn.singular=Dumpster Horn
resource.dumpsterhorn.plural=Dumpster Horns
resource.craftfairsupply.singular=Craft Fair Supply
resource.craftfairsupply.plural=Craft Fair Supplies
resource.harvesthornsmith.singular=Harvest Hornsmith
resource.harvesthornsmith.plural=Harvest Hornsmiths
resource.gildedgourd.singular=Gilded Gourd Consortium
resource.gildedgourd.plural=Gilded Gourd Consortiums
resource.theinfinitehorn.singular=The Infinite Horn
resource.theinfinitehorn.plural=The Infinite Horns

researcher.THX031.name=Researcher I5T1
researcher.THX032.name=Researcher I5T2
researcher.THX033.name=Researcher I5T3
researcher.THX034.name=Researcher I5T4
researcher.THX035.name=Researcher I5T5
researcher.THX040.name=I5Trade
researcher.THX046.name=I5Production
researcher.THX052.name=I5CritBonus



researcher.THX041.name=GlobalTrade
researcher.THX047.name=GlobalProduction
researcher.THX053.name=GlobalCritBonus
researcher.THX054.name=GlobalDiscount
researcher.THX055.name=GlobalCritChance





`.trim();

ENGLISH_LOCALIZATION_STRING += btoa(ADDITIONAL_LANGUAGE);
