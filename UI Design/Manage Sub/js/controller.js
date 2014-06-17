var ATS = angular.module('ATS', []);

ATS.controller('ATSCtrl', function ($scope) {
	$scope.regionSelected;
	$scope.countrySelected;
	$scope.catalogSelected;
	$scope.regionIdToName=function(id)
	{
		switch(id)
		{
			case 1:
				return "AMERICAS";
			case 2:
				return "APJ";
			case 3:
				return "EMEA";
				
		}
	}
	$scope.activeToGlyph=function(active)
	{
		switch(active)
		{
			case 1:
				return "ok";
			case 0:
				return "remove";
		}
	}
	$scope.subscriptionData={
			"subscriptions": [
			{
				"SkuId":"222-2345",
				"SkuDesc":"Some description",
				"RegionCode":1,
				"BUCode":11,
				"BUName":"US",
				"CatalogID": 111,
				"CatalogName": "US-CNS",
				"Events":[
					{
						"EventName":"Sell Action Changed",
						"EventID":1,
						"IsActive":1
					},
					{
						"EventName":"Activated or Deactivated",
						"EventID":2,
						"IsActive":0
					},
					{
						"EventName":"Lead Time Changed",
						"EventID":3,
						"IsActive":0
					}
				]
			}
		]
	}
	$scope.formData={
	"regions": [
			{
				"name": "APJ",
				"code": 1,
				"countries": [
					{
						"name": "India",
						"code": 11,
						"catalogs": [
							{
								"name": "cat-1",
								"code": 111,
								"SKUs": [
									{
										"code": "code11",
										"description": "desc11"
									},
									{
										"code": "code12",
										"description": "desc12"
									},
									{
										"code": "code13",
										"description": "desc13"
									}
								]
							},
							{
								"name": "cat-2",
								"code": 112,
								"SKUs": [
									{
										"code": "code21",
										"description": "desc21"
									},
									{
										"code": "code22",
										"description": "desc22"
									},
									{
										"code": "code23",
										"description": "desc23"
									}
								]
							},
							{
								"name": "cat-3",
								"code": 113,
								"SKUs": [
									{
										"code": "code31",
										"description": "desc31"
									},
									{
										"code": "code32",
										"description": "desc32"
									},
									{
										"code": "code33",
										"description": "desc33"
									}
								]
							}
						]
					},
					{
						"name": "China",
						"code": 12,
						"catalogs": [
							{
								"name": "cat-4",
								"code": 121,
								"SKUs": [
									{
										"code": "code41",
										"description": "desc41"
									},
									{
										"code": "code42",
										"description": "desc42"
									},
									{
										"code": "code43",
										"description": "desc43"
									}
								]
							},
							{
								"name": "cat-5",
								"code": 122,
								"SKUs": [
									{
										"code": "code51",
										"description": "desc51"
									},
									{
										"code": "code52",
										"description": "desc52"
									},
									{
										"code": "code53",
										"description": "desc53"
									}
								]
							},
							{
								"name": "cat-6",
								"code": 123,
								"SKUs": [
									{
										"code": "code61",
										"description": "desc61"
									},
									{
										"code": "code62",
										"description": "desc62"
									},
									{
										"code": "code63",
										"description": "desc63"
									}
								]
							}
						]
					},
					{
						"name": "Japan",
						"code": 13,
						"catalogs": [
							{
								"name": "cat-7",
								"code": 131,
								"SKUs": [
									{
										"code": "code71",
										"description": "desc71"
									},
									{
										"code": "code72",
										"description": "desc72"
									},
									{
										"code": "code73",
										"description": "desc73"
									}
								]
							},
							{
								"name": "cat-8",
								"code": 132,
								"SKUs": [
									{
										"code": "code81",
										"description": "desc81"
									},
									{
										"code": "code82",
										"description": "desc82"
									},
									{
										"code": "code83",
										"description": "desc83"
									}
								]
							},
							{
								"name": "cat-9",
								"code": 133,
								"SKUs": [
									{
										"code": "code91",
										"description": "desc91"
									},
									{
										"code": "code92",
										"description": "desc92"
									},
									{
										"code": "code93",
										"description": "desc93"
									}
								]
							}
						]
					}
				]
			},
			{
				"name": "EMEA",
				"code": 2,
				"countries": [
					{
						"name": "England",
						"code": 21,
						"catalogs": [
							{
								"name": "cat-10",
								"code": 211,
								"SKUs": [
									{
										"code": "code101",
										"description": "desc101"
									},
									{
										"code": "code102",
										"description": "desc102"
									},
									{
										"code": "code103",
										"description": "desc103"
									}
								]
							},
							{
								"name": "cat-11",
								"code": 212,
								"SKUs": [
									{
										"code": "code111",
										"description": "desc111"
									},
									{
										"code": "code112",
										"description": "desc112"
									},
									{
										"code": "code113",
										"description": "desc113"
									}
								]
							},
							{
								"name": "cat-12",
								"code": 213,
								"SKUs": [
									{
										"code": "code121",
										"description": "desc121"
									},
									{
										"code": "code122",
										"description": "desc122"
									},
									{
										"code": "code123",
										"description": "desc123"
									}
								]
							}
						]
					},
					{
						"name": "France",
						"code": 22,
						"catalogs": [
							{
								"name": "cat-13",
								"code": 221,
								"SKUs": [
									{
										"code": "code131",
										"description": "desc131"
									},
									{
										"code": "code132",
										"description": "desc132"
									},
									{
										"code": "code133",
										"description": "desc133"
									}
								]
							},
							{
								"name": "cat-14",
								"code": 222,
								"SKUs": [
									{
										"code": "code141",
										"description": "desc141"
									},
									{
										"code": "code142",
										"description": "desc142"
									},
									{
										"code": "code143",
										"description": "desc143"
									}
								]
							},
							{
								"name": "cat-15",
								"code": 223,
								"SKUs": [
									{
										"code": "code151",
										"description": "desc151"
									},
									{
										"code": "code152",
										"description": "desc152"
									},
									{
										"code": "code153",
										"description": "desc153"
									}
								]
							}
						]
					},
					{
						"name": "Germany",
						"code": 23,
						"catalogs": [
							{
								"name": "cat-16",
								"code": 231,
								"SKUs": [
									{
										"code": "code161",
										"description": "desc161"
									},
									{
										"code": "code162",
										"description": "desc162"
									},
									{
										"code": "code163",
										"description": "desc163"
									}
								]
							},
							{
								"name": "cat-17",
								"code": 232,
								"SKUs": [
									{
										"code": "code171",
										"description": "desc171"
									},
									{
										"code": "code172",
										"description": "desc172"
									},
									{
										"code": "code173",
										"description": "desc173"
									}
								]
							},
							{
								"name": "cat-18",
								"code": 233,
								"SKUs": [
									{
										"code": "code181",
										"description": "desc181"
									},
									{
										"code": "code182",
										"description": "desc182"
									},
									{
										"code": "code183",
										"description": "desc183"
									}
								]
							}
						]
					}
				]
			},
			{
				"name": "AMERICAS",
				"code": 1,
				"countries": [
					{
						"name": "US",
						"code": 31,
						"catalogs": [
							{
								"name": "cat-19",
								"code": 311,
								"SKUs": [
									{
										"code": "code191",
										"description": "desc191"
									},
									{
										"code": "code192",
										"description": "desc192"
									},
									{
										"code": "code193",
										"description": "desc193"
									}
								]
							},
							{
								"name": "cat-20",
								"code": 312,
								"SKUs": [
									{
										"code": "code201",
										"description": "desc201"
									},
									{
										"code": "code202",
										"description": "desc202"
									},
									{
										"code": "code203",
										"description": "desc203"
									}
								]
							},
							{
								"name": "cat-21",
								"code": 313,
								"SKUs": [
									{
										"code": "code211",
										"description": "desc211"
									},
									{
										"code": "code212",
										"description": "desc212"
									},
									{
										"code": "code213",
										"description": "desc213"
									}
								]
							}
						]
					},
					{
						"name": "Brazil",
						"code": 32,
						"catalogs": [
							{
								"name": "cat-22",
								"code": 321,
								"SKUs": [
									{
										"code": "code221",
										"description": "desc221"
									},
									{
										"code": "code222",
										"description": "desc222"
									},
									{
										"code": "code223",
										"description": "desc223"
									}
								]
							},
							{
								"name": "cat-23",
								"code": 322,
								"SKUs": [
									{
										"code": "code231",
										"description": "desc231"
									},
									{
										"code": "code232",
										"description": "desc232"
									},
									{
										"code": "code233",
										"description": "desc233"
									}
								]
							},
							{
								"name": "cat-24",
								"code": 323,
								"SKUs": [
									{
										"code": "code241",
										"description": "desc241"
									},
									{
										"code": "code242",
										"description": "desc242"
									},
									{
										"code": "code243",
										"description": "desc243"
									}
								]
							}
						]
					},
					{
						"name": "Canada",
						"code": 33,
						"catalogs": [
							{
								"name": "cat-25",
								"code": 331,
								"SKUs": [
									{
										"code": "code251",
										"description": "desc251"
									},
									{
										"code": "code252",
										"description": "desc252"
									},
									{
										"code": "code253",
										"description": "desc253"
									}
								]
							},
							{
								"name": "cat-26",
								"code": 332,
								"SKUs": [
									{
										"code": "code261",
										"description": "desc261"
									},
									{
										"code": "code262",
										"description": "desc262"
									},
									{
										"code": "code263",
										"description": "desc263"
									}
								]
							},
							{
								"name": "cat-27",
								"code": 333,
								"SKUs": [
									{
										"code": "code271",
										"description": "desc271"
									},
									{
										"code": "code272",
										"description": "desc272"
									},
									{
										"code": "code273",
										"description": "desc273"
									}
								]
							}
						]
					}
				]
			}
		]
	}
});