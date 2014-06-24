
var ATS = angular.module('ATS', []);

ATS.controller('ATSCtrl', function ($scope) {
	$scope.regionSelected;
	$scope.countrySelected;
	$scope.catalogSelected;
	$scope.box1;
	$scope.box2;
	$scope.box3;
	$scope.box;
	$scope.iseditable=false;
	$scope.subscriptionData={"subscriptions":[]};
	$scope.subscriptionDataCopy;
	$scope.isEmpty=function(x){
	if(x.length==0)
	return true;
	else
	return false;
	}
	$scope.createCopy=function(){
	$scope.subscriptionDataCopy=JSON.parse(JSON.stringify($scope.subscriptionData));
	}
	$scope.destroyCopy=function(){
	$scope.subscriptionDataCopy={"subscriptions":[]};
	}
	$scope.changeEditState=function(){
	$scope.createCopy();
	if($scope.iseditable==false)
	{
	$scope.iseditable=true;
	//$scope.subscriptionDataCopy=JSON.parse(JSON.stringify($scope.subscriptionData));
	}
	else
	$scope.iseditable=false;
	}
	$scope.setBox=function(isActive){
	$scope.box=false;
	if(isActive==1)
	$scope.box=true;
	}
	
	$scope.regionIdToName=function(id)
	{
		switch(id)
		{
			case 1:
				return "APJ";
			case 2:
				return "EMEA";
			case 3:
				return "AMERICAS";
				
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
	
	$scope.formData={
		"regions": [
			{
				"name": "EMEA",
				"code": 3,
				"countries": [
					{
						"name": "SOUTH AFRICA",
						"code": 87,
						"catalogs": [
							{
								"name": "ZA CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-17427",
										"description": "I3-3220, 4GB,1X4G, 1T, STND"
									},
									{
										"code": "998-17452",
										"description": "I5-3330S, 8GB,2X4G, 1T, STND"
									},
									{
										"code": "998-17420",
										"description": "G2020, 4GB,1X4G, 500gb, STND"
									}									
								]
							}
						]	
					},
					{
						"name": "RUSSIA",
						"code": 75,
						"catalogs": [
							{
								"name": "RU",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-19090",
										"description": "XPS10,RUS,32G,with KB-Dock"
									},
									{
										"code": "998-19088",
										"description": "XPS10,RUS,64G,with KB-Dock"
									},
									{
										"code": "998-18997",
										"description": "XPS10,RUS,TUR,32G,w/o KBD"
									},
									{
										"code": "998-19087",
										"description": "XPS10,RUS,TUR,64G,w/o KBD"
									}									
								]
							}
						] 	
					},
					{
						"name": "SAUDI ARABIA",
						"code": 76,
						"catalogs": [
							{
								"name": "SA CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-19007",
										"description": "XPS10,UAE.KSA,64G,w/o KBD"
									},
									{
										"code": "998-18999",
										"description": "XPS10,UAE,KSA,32G,w/o KBD"
									},
									{
										"code": "998-19089",
										"description": "XPS10,UAE,KSA,32G,with KB-Dock"
									},
									{
										"code": "998-19086",
										"description": "XPS10,UAE,KSA,64G,with KB-Dock"
									}								
								]
							}
						] 
					},
					{
						"name": "SWEDEN",
						"code": 17,
						"catalogs": [
							{
								"name": "SE CNS",
								"code": 121287,
								"SKUs": [
									{
										"code": "998-15720",
										"description": "CE i5-3330s, 2.70GHz 6MB Cache, 4C	4096DDR3_1x4GB 1600MHz_Jedec	1TB(SATA)"
									},
									{
										"code": "998-16203",
										"description": "Olympic Nordic"
									},
									{
										"code": "998-17285",
										"description": "I5-3330S/6G/1TB/ARTCL STAND"
									},
									{
										"code": "998-16195",
										"description": "Princeville Touch Nordic"
									},
									{
										"code": "998-17280",
										"description": "I5-3330S/4GB/1TB/BAC STAND"
									}									
								]
							},
							{
								"name": "SE SMB",
								"code": 1212,
								"SKUs": [
									{
										"code": "998-18578",
										"description": "Vostro 3360"
									},
									{
										"code": "998-17212",
										"description": "Vostro 270s"
									},
									{
										"code": "998-17731",
										"description": "Vostro 270s"
									},
									{
										"code": "998-17732",
										"description": "Vostro 270s"
									},
									{
										"code": "998-17331",
										"description": "Vostro 270"
									}									
								]
							}					
						] 
					},
					{
						"name": "TURKEY",
						"code": 81,
						"catalogs": [
							{
								"name": "TR CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-19087",
										"description": "XPS10,RUS,TUR,64G,w/o KBD"
									},
									{
										"code": "998-18997",
										"description": "XPS10,RUS,TUR,32G,w/o KBD"
									}									
								]
							}
						] 
					},
					{
						"name": "UNITED KINGDOM",
						"code": 11,
						"catalogs": [
							{
								"name": "UK CNS",
								"code": 20211,
								"SKUs": [
									{
										"code": "998-17596",
										"description": "Core i7-3537U, 8GB,1TB 5400rpm SATA HDD"
									},
									{
										"code": "998-16412",
										"description": "XPS10,UKI,64G,w/o KB-Dock"
									},
									{
										"code": "998-16381",
										"description": "XPS10,UKI,32G,with KB-Dock"
									},
									{
										"code": "998-16411",
										"description": "XPS10,UKI,64G,with KB-Dock"
									},
									{
										"code": "998-17214",
										"description": "Vostro 270"
									}									
								]
							},
							{
								"name": "UK SMB",
								"code": 202,
								"SKUs": [
									{
										"code": "998-17213",
										"description": "Vostro 270"
									},
									{
										"code": "998-12927",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-17217",
										"description": "Vostro 270"
									},
									{
										"code": "998-14244",
										"description": "Mercedes C - MBC1303_003, SILVER, Core i3-2370M, 2.30 GHz, 3MB, 2C_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 320GB_7200rpm SATA HDD_Vostro, V3460 14HDF (1378x768) WLED AG, V3560 Intergated Intel HD Graphics"
									},
									{
										"code": "998-14243",
										"description": "Mercedes C - MBC1303_026, SILVER, Core i3-2370M, 2.30 GHz, 3MB, 2C_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 500GB_7200rpm SATA HDD_Vostro, V3460 14HDF (1378x768) WLED AG, V3460 Nvidia GeForce GT 630M 1GB,"
									}									
								]
							}					
						] 
					},
					{
						"name": "UNITED ARAB EMIRATES",
						"code": 31,
						"catalogs": [
							{
								"name": "UAE CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-18999",
										"description": "XPS10,UAE,KSA,32G,w/o KBD"
									},
									{
										"code": "998-19086",
										"description": "XPS10,UAE,KSA,64G,with KB-Dock"
									},
									{
										"code": "998-19007",
										"description": "XPS10,UAE.KSA,64G,w/o KBD"
									},
									{
										"code": "998-19089",
										"description": "XPS10,UAE,KSA,32G,with KB-Dock"
									},
									{
										"code": "998-20070",
										"description": "Latitude E6230"
									}									
								]
							}
						] 
					},
					{
						"name": "POLAND",
						"code": 21,
						"catalogs": [
							{
								"name": "PL CNS",
								"code": 313118,
								"SKUs": [
									{
										"code": "998-16212",
										"description": "Olympic Poland"
									},
									{
										"code": "998-16216",
										"description": "Olympic Poland"
									},
									{
										"code": "998-16217",
										"description": "Olympic Poland"
									},
									{
										"code": "998-17902",
										"description": "XPS10,NL,PL,64G, w/o KB-Dock"
									},
									{
										"code": "998-16201",
										"description": "Princeville Poland non touch"
									}									
								]
							}
						] 
					},
					{
						"name": "NETHERLANDS",
						"code": 16,
						"catalogs": [
							{
								"name": "NL CNS",
								"code": 212131,
								"SKUs": [
									{
										"code": "998-17279",
										"description": "CE i5-3330s, 2.70GHz 6MB Cache, 4C	6144DDR3_1x4GB/1x2GB 1600MHz_Jedec	1TB(SATA) + Intel SRT"
									},
									{
										"code": "998-17284",
										"description": "CE i7-3770s, 3.10GHz 8MB Cache, 4C	8192DDR3_2x4GB 1600MHz_Jedec	2TB(SATA) + Intel SRT"
									},
									{
										"code": "998-17426",
										"description": "CE i5-3330s, 2.70GHz 6MB Cache, 4C	8192DDR3_2x4GB 1600MHz_Jedec	1TB(SATA)"
									},
									{
										"code": "998-17283",
										"description": "CE i5-3330s, 2.70GHz 6MB Cache, 4C	4096DDR3_1x4GB 1600MHz_Jedec	1TB(SATA)"
									},
									{
										"code": "998-17394",
										"description": "PDC ULV 2117U, 1.80Ghz, 2MB, 2C	DDR 3_4GB (1600)1s	320GB 5400rpm SATA HDD"
									}									
								]
							},
							{
								"name": "NL SMB",
								"code": 2121,
								"SKUs": [
									{
										"code": "998-19133",
										"description": "3rd Gen Intel® Core™ i5-3340M (2.70GHz, 3MB cache, Dual Core)	4GB (1x4GB) 1600MHz DDR3 Memory	320GB (7.200 Rpm) Serial ATA Hard Drive"
									},
									{
										"code": "998-18965",
										"description": "i5-3230M	 4GB_1DIMMS_1600MHZ	500GB (7200rpm) Hybrid Drive with 8GB flash"
									},
									{
										"code": "998-19059",
										"description": "Intel Core i3-2348M (SB)	4GB 1600MHz DDR3 1S_Vostro	320GB_5400rpm SATA HDD_Vostro"
									},
									{
										"code": "998-17207",
										"description": "Vostro 270s"
									},
									{
										"code": "998-17217",
										"description": "Vostro 270"
									}									
								]
							}					
						]
					},
					{
						"name": "NORWAY",
						"code": 18,
						"catalogs": [
							{
								"name": "NO CNS",
								"code": 232382,
								"SKUs": [
									{
										"code": "998-17896",
										"description": "XPS10,NORDIC,64G,w/o KB-Dock"
									},
									{
										"code": "998-17895",
										"description": "XPS10,NORDIC,32G,with KB-Dock"
									},
									{
										"code": "998-17893",
										"description": "XPS10,NORDIC,64G,with KB-Dock"
									},
									{
										"code": "998-16204",
										"description": "Olympic Nordic"
									},
									{
										"code": "998-17416",
										"description": "I3-3220, 4GB,1X4G, 1T, STND"
									}									
								]
							},
							{
								"name": "NO SMB",
								"code": 232301,
								"SKUs": [
									{
										"code": "998-16205",
										"description": "Olympic Nordic"
									},
									{
										"code": "998-18578",
										"description": "Vostro 3360"
									},
									{
										"code": "998-17865",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-17820",
										"description": "Vostro 3560"
									},
									{
										"code": "998-17554",
										"description": "Inspiron 3721"
									}									
								]
							}					
						]
					},
					{
						"name": "GERMANY",
						"code": 12,
						"catalogs":[
							{
								"name": "DE CNS",
								"code": 122457,
								"SKUs": [
									{
										"code": "123-LipsaTest2",
										"description": "123-LipsaTest2"
									},
									{
										"code": "121-LipsaTest3",
										"description": "121-LipsaTest3"
									},
									{
										"code": "123-LipsaTest5",
										"description": "123-LipsaTest5"
									},
									{
										"code": "001-001",
										"description": "TESTSTG"
									},
									{
										"code": "998-15764",
										"description": "Core i7-3632QM, xxx	DDR 3_8GB (1600)2s	1TB 5400rpm SATA HDD   32GB mSATA"
									}									
								]
							},
							{
								"name": "DE SMB",
								"code": 808,
								"SKUs": [
									{
										"code": "998-15554",
										"description": "Vostro 3360"
									},
									{
										"code": "998-16189",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-15678",
										"description": "Vostro 3460"
									},
									{
										"code": "998-15680",
										"description": "Vostro 3460"
									},
									{
										"code": "998-15540",
										"description": "Vostro 3560"
									}									
								]
							}					
						]
					},
					{
						"name": "DENMARK",
						"code": 15,
						"catalogs":[
							{
								"name": "DK CNS",
								"code": 122457,
								"SKUs": [
									{
										"code": "001-001",
										"description": "TESTSTG"
									},
									{
										"code": "998-17894",
										"description": "XPS10,NORDIC,32G,w/o KB-Dock"
									},
									{
										"code": "998-17412",
										"description": "I5-3330S, 8GB,2X4G, 1T, STND"
									},
									{
										"code": "998-16204",
										"description": "Olympic Nordic"
									},
									{
										"code": "998-17416",
										"description": "I3-3220, 4GB,1X4G, 1T, STND"
									}									
								]
							},
							{
								"name": "DK SMB",
								"code": 1224,
								"SKUs": [
									{
										"code": "998-12941",
										"description": "Mercedes E - MBEI1303_006, Silver, Core i3-2350M, 2.30 GHz, 3MB, 2C_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 500GB_7200rpm SATA HDD_Vostro, V3560 15.6HDF (1378x768) AG, V3560 Intergated Intel HD Graphics,"
									},
									{
										"code": "998-13949",
										"description": "Mercedes E - MBEI1303_006, Silver, Core i3-2370M, 2.30 GHz, 3MB, 2C_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 500GB_7200rpm SATA HDD_Vostro, V3560 15.6HDF (1378x768) AG, V3560 Intergated Intel HD Graphics,"
									},
									{
										"code": "998-12942",
										"description": "Mercedes E - MBEI1303_031, Silver, New i5-Ivy bridge_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 500GB_7200rpm SATA HDD_Vostro, V3560 15.6HDF (1378x768) AG, V3560 Intergated Intel HD Graphics, V3560 8X DVD+/-"
									},
									{
										"code": "998-13070",
										"description": "Mercedes SLK - MBSLK1303_002, Core i3-2367M, 1.40 Ghz, 3MB,2C_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 320GB_7200rpm SATA HDD_Vostro, V3360 13.3HDF (1378x768) WLED AG, V3360 Intergated Intel HD Graphics, V"
									},
									{
										"code": "998-13460",
										"description": "Mercedes SLK - MBSLK1303_009, Core i5-3317U,1.70GHz_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 320GB_7200rpm SATA HDD_Vostro, V3360 13.3HDF (1378x768) WLED AG, V3360 Intergated Intel HD Graphics 3000, V3360"
									}									
								]
							}					
						]
					},
					{
						"name": "SPAIN",
						"code": 14,
						"catalogs": [
							{
								"name": "ES",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-15748",
										"description": "Olympic Nordic/Spain"
									},
									{
										"code": "998-15652",
										"description": "Olympic Nordic/Spain"
									},
									{
										"code": "998-17414",
										"description": "IVY,I3-3220, 4GB,1X4G, 1T, STND"
									},
									{
										"code": "998-17415",
										"description": "I5-3330S, 8GB,2X4G, 1T, STND"
									},
									{
										"code": "998-17901",
										"description": "XPS10,SPN,32G,with KB-Dock"
									}									
								]
							}
						]
					},
					{
						"name": "FINLAND",
						"code": 19,
						"catalogs": [
							{
								"name": "FI",
								"code": 122271,
								"SKUs": [
									{
										"code": "998-15720",
										"description": "CE i5-3330s, 2.70GHz 6MB Cache, 4C	4096DDR3_1x4GB 1600MHz_Jedec	1TB(SATA)"
									},
									{
										"code": "998-17416",
										"description": "I3-3220, 4GB,1X4G, 1T, STND"
									},
									{
										"code": "998-17280",
										"description": "I5-3330S/4GB/1TB/BAC STAND"
									},
									{
										"code": "998-17281",
										"description": "I7-3770S/8GB (2x4gb)/2TB/ARTCL STAND"
									},
									{
										"code": "998-17285",
										"description": "I5-3330S/6G/1TB/ARTCL STAND"
									}									
								]
							}
						] 
					},
					{
						"name": "FRANCE",
						"code": 30,
						"catalogs": [
							{
								"name": "FR CNS",
								"code": 90919,
								"SKUs": [
									{
										"code": "998-17379",
										"description": "CE i5-3330,1x4GB/1x2GB,1TB(SATA)"
									},
									{
										"code": "998-17378",
										"description": "PDC _G2020_2.90GHz_3M_2C,4GB,500GB (SATA)_NCQ"
									},
									{
										"code": "998-10613",
										"description": "P6200,	4GB,500GB 5400RPM"
									},
									{
										"code": "998-19369",
										"description": "XPS One 18"
									},
									{
										"code": "998-19384",
										"description": "XPS One 18"
									}									
								]
							},
							{
								"name": "FR SMB",
								"code": 909,
								"SKUs": [
									{
										"code": "998-15821",
										"description": "Audi A7 . Inspiron 17R"
									},
									{
										"code": "998-15555",
										"description": "Vostro 3360"
									},
									{
										"code": "998-15681",
										"description": "Vostro 3460"
									},
									{
										"code": "998-15682",
										"description": "Vostro 3460"
									},
									{
										"code": "998-15536",
										"description": "Vostro 3560"
									}									
								]
							}					
						]
					},
					{
						"name": "AUSTRIA",
						"code": 34,
						"catalogs": [
							{
								"name": "AT CNS1",
								"code": 383842,
								"SKUs": [
									{
										"code": "998-12810",
										"description": "Core i3-2370M, 2.40 GHz, 3MB, 2C	DDR 3_4GB (1600)1s	500GB 5400rpm SATA HDD"
									},
									{
										"code": "998-12797",
										"description": "Core i5-3210M, xxx	DDR 3_4GB (1600)1s	1TB 5400rpm SATA HDD"
									},
									{
										"code": "998-12798",
										"description": "Core i5-3210M, xxx	DDR 3_6GB (1600)2s	1TB 5400rpm SATA HDD"
									},
									{
										"code": "998-12794",
										"description": "Core i3-2370M, 2.40 GHz, 3MB, 2C	DDR 3_4GB (1333)1s	500GB 5400rpm SATA HDD"
									},
									{
										"code": "998-12799",
										"description": "Core i5-3210M, xxx	DDR 3_6GB (1600)2s	1TB 5400rpm SATA HDD"
									}
								]
							},
							{
								"name": "AT SMB1",
								"code": 383821,
								"SKUs": [
									{
										"code": "998-15314",
										"description": "Vostro 270s - Sunrise ST"
									},
									{
										"code": "998-17858",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-12840",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-15825",
										"description": "Audi A7 . Inspiron 17R"
									},
									{
										"code": "998-18560",
										"description": "Vostro 3360"
									}									
								]
							}
						]
					},
					{
						"name": "SWITZERLAND",
						"code": 39,
						"catalogs": [
							{
								"name": "CH CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-16219",
										"description": "Olympic Switzerland"
									},
									{
										"code": "998-16218",
										"description": "Olympic Switzerland"
									},
									{
										"code": "998-17288",
										"description": "I5-3330S/6G/1TB/ARTCS  STAND"
									},
									{
										"code": "998-17286",
										"description": "I5-3330S/4G/1TB/BAC STAND"
									},
									{
										"code": "998-16197",
										"description": "Princeville Touch Switzerland"
									}									
								]						
							}
						] 
					},
					{
						"name": "IRELAND",
						"code": 49,
						"catalogs": [
							{
								"name": "IE CNS",
								"code": 510295,
								"SKUs": [
									{
										"code": "001-001",
										"description": "TESTSTG"
									},
									{
										"code": "998-12782",
										"description": "Core i7-3612QM,6GB,1TB 5400rpm"
									},
									{
										"code": "998-12639",
										"description": "Core i5-3210M,6GB ,	1.5TB 7200RPM"
									},
									{
										"code": "998-10305",
										"description": "Breitling 1 - n0014z14"
									},
									{
										"code": "998-17363",
										"description": "CE i5-3330,4GB,2TB(SATA)"
									}									
								]
							},
							{
								"name": "IE SMB",
								"code": 5102,
								"SKUs": [
									{
										"code": "998-12661",
										"description": "Mercedes E - MBEI1303_031, Silver, New i5-Ivy bridge_Vostro, 4GB 1600MHz DDR3 1S_Vostro, 500GB_7200rpm SATA HDD_Vostro, V3560 15.6HDF (1378x768) AG, V3560 Intergated Intel HD Graphics, V3560 8X DVD+/-"
									},
									{
										"code": "998-13421",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-18553",
										"description": "Vostro 3360"
									},
									{
										"code": "998-18565",
										"description": "Vostro 3460"
									},
									{
										"code": "998-18561",
										"description": "Vostro 3460"
									}									
								]
							}					
						] 
					},
					{
						"name": "ISRAEL",
						"code": 50,
						"catalogs": [
							{
								"name": "IL",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-18995",
										"description": "XPS10,ISR,32G,w/o KBD"
									},
									{
										"code": "998-19002",
										"description": "XPS10,ISR,32G,w/o KBD"
									}									
								]
							}
						] 		
					},
					{
						"name": "ITALY",
						"code": 13,
						"catalogs": [
							{
								"name": "IT CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-17900",
										"description": "XPS10,SPN,ITL,64G,w/o KB-Dock"
									},
									{
										"code": "998-17898",
										"description": "XPS10,SPN,ITL,32G,w/o KB-Dock"
									},
									{
										"code": "SKU_W7RV7",
										"description": "SKU_W7RV7"
									},
									{
										"code": "998-17423",
										"description": "I3-3220, 4GB,1X4G, 1T, STND"
									},
									{
										"code": "998-17277",
										"description": "I5-3330S/4G/1TB/BAC STAND"
									}									
								]
							}
						] 	
					},
					{
						"name": "BELGIUM",
						"code": 36,
						"catalogs": [
							{
								"name": "BE CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "998-16198",
										"description": "Princeville Touch Belgium"
									},
									{
										"code": "998-17422",
										"description": "I5-3330S, 8GB,2X4G, 1T, STND"
									},
									{
										"code": "998-17282",
										"description": "I5-3330S/6G/1TB/ARTCL STAND"
									},
									{
										"code": "998-17899",
										"description": "XPS10,NL,PL,32G, w/o KB-Dock"
									},
									{
										"code": "998-19031",
										"description": "XPS10,BE,64G,with KB-Dock"
									}									
								]
							}					
						] 
					}
				]
			},
			{
				"name": "APJ",
				"code": 2,
				"countries": [
					{
						"name": "NEW ZEALAND",
						"code": 4,
						"catalogs": [
							{
								"name": "NZ CNS",
								"code": 36102,
								"SKUs": [
									{
										"code": "998-10109",
										"description": "FGA,INSP LPT N5110,BTS"
									},
									{
										"code": "210-35762",
										"description": "Inspiron N5110 Notebook"
									},
									{
										"code": "210-36717",
										"description": "Inspiron N5110"
									},
									{
										"code": "210-36720",
										"description": "Inspiron N5110"
									},
									{
										"code": "210-36574",
										"description": "XPS L70"
									}									
								]
							}
						] 
					},
					{
						"name": "MALAYSIA",
						"code": 62,
						"catalogs": [
							{
								"name": "MY CNS",
								"code": 30002,
								"SKUs": [
									{
										"code": "1223-LipsaTest",
										"description": "LipsaTest"
									},
									{
										"code": "998-16049",
										"description": "Oak 14 Value"
									}									
								]
							}
						] 
					},
					{
						"name": "JAPAN",
						"code": 8,
						"catalogs": [
							{
								"name": "JP CNS",
								"code": 353502,
								"SKUs": [
									{
										"code": "998-15361",
										"description": "88F2P - Spyder MLK Ci5 256GB (Autumn)"
									},
									{
										"code": "998-15358",
										"description": "MRG69 - Spyder MLK Ci5 256GB H&B (Autumn)"
									},
									{
										"code": "998-15930",
										"description": "PTT0W - BMWZ5 Ci7 4GB"
									},
									{
										"code": "998-15934",
										"description": "W2DCN - BMWZ5 Ci7 4GB H&B"
									},
									{
										"code": "998-14614",
										"description": "YXCK0 - Ci7 1TB BDRW (Summer)"
									}									
								]
							},
							{
								"name": "JP SMB",
								"code": 353503,
								"SKUs": [
									{
										"code": "998-12420",
										"description": "JRJX0 - Vostro 3560 V-1"
									},
									{
										"code": "998-12416",
										"description": "62KP3 - Vostro 3560 VP-1"
									},
									{
										"code": "998-12417",
										"description": "Y80WN - Vostro 3560 VH-1"
									},
									{
										"code": "998-12418",
										"description": "MMW3K - Vostro 3560 VN-1"
									},
									{
										"code": "998-14071",
										"description": "0WTT1 - Vostro 2520 RN-1"
									}									
								]
							}					
						] 	
					},
					{
						"name": "INDONESIA",
						"code": 48,
						"catalogs": [
							{
								"name": "ID CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "730-6971",
										"description": "Jakarta SKU"
									}								
								]
							}
						] 
					},
					{
						"name": "AUSTRALIA",
						"code": 3,
						"catalogs": [
							{
								"name": "AU CNS",
								"code": 39102,
								"SKUs": [
									{
										"code": "998-11035",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "998-13994",
										"description": "BMWZ41303_026/BTS/C3"
									},
									{
										"code": "998-13801",
										"description": "A7TRBO1303_025/BTS/C3"
									},
									{
										"code": "998-13993",
										"description": "BMWZ41303_040/BTS/C3"
									},
									{
										"code": "998-13786",
										"description": "A5INT1303_020/BTS/C3"
									}									
								]
							},
							{
								"name": "AU SMB",
								"code": 391014,
								"SKUs": [
									{
										"code": "730-1273",
										"description": "PDC/4/500"
									},
									{
										"code": "998-20461",
										"description": "qwr"
									},
									{
										"code": "210-AAMK",
										"description": "i7|16|2 256|660|BR|Win8Pro"
									},
									{
										"code": "998-15596",
										"description": "MBE1305_017"
									},
									{
										"code": "998-15595",
										"description": "MBE1305_008"
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
						"name": "PERU",
						"code": 67,
						"catalogs": [
							{
								"name": "PE CSMB",
								"code": 143509,
								"SKUs": [
									{
										"code": "210-AAMT",
										"description": "Vostro 470"
									},
									{
										"code": "730-4205",
										"description": "XPS15"
									},
									{
										"code": "730-4698",
										"description": "Vostro 270"
									},
									{
										"code": "730-4513",
										"description": "Vostro 3460"
									},
									{
										"code": "730-4701",
										"description": "Vostro 270"
									}									
								]
							}
						] 
					},
					{
						"name": "MEXICO",
						"code": 25,
						"catalogs": [
							{
								"name": "MX CSMB",
								"code": 323223,
								"SKUs": [
									{
										"code": "332-1067",
										"description": "Dell OptiPlex 7010 DT Label Ship Fast, FCG22"
									},
									{
										"code": "332-1062",
										"description": "6430u"
									},
									{
										"code": "332-1065",
										"description": "OptiPlex 7010DT"
									},
									{
										"code": "332-1066",
										"description": "Dell OptiPlex 7010 DT Label Ship Fast, FCG21"
									},
									{
										"code": "332-1068",
										"description": "Dell OptiPlex 7010 DT Label Ship Fast, FCG23"
									}									
								]
							},
							{
								"name": "MX MMPLE",
								"code": 323203,
								"SKUs": [
									{
										"code": "262-7252",
										"description": "6430u"
									},
									{
										"code": "262-7338",
										"description": "E5430"
									},
									{
										"code": "262-7339",
										"description": "E5430"
									},
									{
										"code": "262-7340",
										"description": "E5430"
									},
									{
										"code": "262-7359",
										"description": "E5430"
									}									
								]
							}					
						] 	
					},
					{
						"name": "PORTUGAL-BR",
						"code": 26,
						"catalogs": [
							{
								"name": "BR CNS",
								"code": 369304,
								"SKUs": [
									{
										"code": "471-4047",
										"description": "Inspiron 14"
									},
									{
										"code": "225-2151",
										"description": "XPS 15z BRZ FCG01"
									}							
								]
							}
						]
					},
					{
						"name": "USA",
						"code": 1,
						"catalogs": [
							{
								"name": "US CNS",
								"code": 29,
								"SKUs": [
									{
										"code": "730-1929",
										"description": "NT/PDC/4/500 (no AV)"
									},
									{
										"code": "730-1875",
										"description": "NT/i3/6/1TB"
									},
									{
										"code": "730-1850",
										"description": "i5/8/1TB"
									},
									{
										"code": "730-1852",
										"description": "i5/6/500"
									},
									{
										"code": "730-4291",
										"description": "OAK15M_1401_077"
									}									
								]
							},
							{
								"name": "US PLE",
								"code": 5,
								"SKUs": [
									{
										"code": "225-3854",
										"description": "Dell Latitude E5530, Ships Fast, FCG22"
									},
									{
										"code": "225-3855",
										"description": "Dell Latitude E5530, Ships Fast, FCG21"
									},
									{
										"code": "225-3316",
										"description": "OptiPlex 7010 Desktop, Ship Fast,BRC12"
									},
									{
										"code": "225-3944",
										"description": "Dell Optiplex 7010 SFF Ships Fast (FCG28)"
									},
									{
										"code": "225-3897",
										"description": "Optiplex 3010 DT"
									}									
								]
							},
							{
								"name": "US RETAIL",
								"code": 17,
								"SKUs": [
									{
										"code": "331-5125",
										"description": "RtlPck#19849 BBY SD Alienware Swift Aurora Black"
									},
									{
										"code": "331-7347",
										"description": "RtlPck#60249 Best Buy Queen 15 Switch AMD Inspiron 15R Black"
									},
									{
										"code": "331-7353",
										"description": "RtlPck#20927 Best Buy SD Specter Alienware M14x Black"
									},
									{
										"code": "331-7457",
										"description": "RtlPck#20928 Best Buy SD Specter Alienware M14x Black"
									},
									{
										"code": "331-7354",
										"description": "RtlPck#20929 Best Buy SD Voyager Alienware M17x R3 Black"
									}									
								]
							},
							{
								"name": "US SMB",
								"code": 4,
								"SKUs": [
									{
										"code": "225-2217",
										"description": "OptiPlex 390 Minitower,Fast Track,FCG11"
									},
									{
										"code": "225-2135",
										"description": "Opti 790,Minitower Base,Fast Track VAL 2"
									},
									{
										"code": "225-1555",
										"description": "OptiPlex 390 Small Form Factor,Fast Track,FCG10"
									},
									{
										"code": "225-2218",
										"description": "OptiPlex 390 Minitower,Fast Track,FCG12"
									},
									{
										"code": "225-1896",
										"description": "Vostro V3555 FAST TRACK 1"
									}									
								]
							},
							{
								"name": "US SNP CNS",
								"code": "NULL",
								"SKUs": [
									{
										"code": "320-9606",
										"description": "Dell E2013H"
									},
									{
										"code": "320-2606",
										"description": "Dell E1912HC, 18.5-inch Flat Panel Monitor"
									},
									{
										"code": "320-9707",
										"description": "Dell E1913"
									},
									{
										"code": "730-4927",
										"description": "PDC (SB)/4/1TB Win7"
									},
									{
										"code": "730-6948",
										"description": "730-6948"
									}									
								]
							}																				
						] 
					},
					{
						"name": "BRAZIL",
						"code": 89,
						"catalogs": [
							{
								"name": "BRCNS",
								"code": 369604,
								"SKUs": [
									{
										"code": "730-2492",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "471-4537",
										"description": "Inspiron 14"
									},
									{
										"code": "Test Entity model",
										"description": "Test Entity model"
									},
									{
										"code": "730-3101",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "121-145",
										"description": "121-145"
									}									
								]
							}
						]
					},
					{
						"name": "CANADA",
						"code": 2,
						"catalogs": [
							{
								"name": "CA CNS",
								"code": 70702,
								"SKUs": [
									{
										"code": "225-3789",
										"description": "XPS 8500 Fast track config09"
									},
									{
										"code": "224-3594",
										"description": "Test"
									},
									{
										"code": "730-3349",
										"description": "CA WIFI 32 w/ FR kybd FGA"
									},
									{
										"code": "730-3347",
										"description": "US WIFI 64 w/kybd FGA"
									},
									{
										"code": "730-3353",
										"description": "CA WIFI 64 w/ FR kybd FGA"
									}									
								]
							},
							{
								"name": "CA SMB",
								"code": 70703,
								"SKUs": [
									{
										"code": "225-2180",
										"description": "Dell Latitude E6520. Ships Fast, FCG5"
									},
									{
										"code": "225-2181",
										"description": "Dell Latitude E6520. Ships Fast, FCG6"
									},
									{
										"code": "225-2182",
										"description": "Mac 15 Con 13"
									},
									{
										"code": "225-2184",
										"description": "Dell Latitude E6520. Ships Fast, FCG9"
									},
									{
										"code": "225-2185",
										"description": "Dell Latitude E5420. Ships Fast, FCG4"
									}									
								]
							}					
						] 
					},
					{
						"name": "COLOMBIA",
						"code": 41,
						"catalogs":[
							{
								"name": "CO CNS",
								"code": 787802,
								"SKUs": [
									{
										"code": "730-0712",
										"description": "Thank You for Choosing Dell"
									},
									{
										"code": "225-2014",
										"description": "XPS 14Z"
									},
									{
										"code": "225-2657",
										"description": "LATITUDE"
									},
									{
										"code": "730-4181",
										"description": "Inspiron 15R"
									},
									{
										"code": "730-4299",
										"description": "Inspiron 2020"
									}									
								]
							}
						]
					}
				] 
			}
		]
	}
	
	$scope.search=function(skuId){
	for(i=0,len=$scope.subscriptionDataCopy.subscriptions.length;i<len;i++)
	{
		if($scope.subscriptionDataCopy.subscriptions[i].SkuId==skuId)
		{return($scope.subscriptionDataCopy.subscriptions[i]);}
	}
	return null;
	}
	$scope.findIndex=function(skuId){
	for(i=0,len=$scope.subscriptionDataCopy.subscriptions.length;i<len;i++)
	{
		if($scope.subscriptionDataCopy.subscriptions[i].SkuId==skuId)
		{return(i);}
	}
	return -1;
	
	}
	$scope.testValue="hello";
	$scope.test=function(){
		$scope.testValue="hi";
		//$scope.subscriptionData.subscriptions.push({});
		//$scope.subscriptionData.subscriptions[1]['SkuId']="12345";

	}
	$scope.clearData=function(){
	//destroy_data();
	//$scope.testValue="data";
	$scope.destroyCopy();
	//$scope.subscriptionDataCopy=JSON.parse(JSON.stringify($scope.subscriptionData));
	$scope.iseditable=false;
	$scope.regionSelected="";
	destroy_data();
	}
	$scope.editCurrentSubscriptions=function(id,sub,eventId) {
	var event=eventId-1;
	if(id==true)
	{
		 	sub.Events[event].IsActive=1;
	}
	else
	{
	sub.Events[event].IsActive=0;
	if(sub.Events[0].IsActive==0 && sub.Events[1].IsActive==0 && sub.Events[2].IsActive==0)
	{
	var index=$scope.findIndex(sub.SkuId);
	$scope.subscriptionDataCopy.subscriptions.splice(index,1);
	}
	}
	
	}
	
	$scope.editSubscriptions=function(id,sku,region,country,catalog,event) {
	
	if(id==true)
	{
		//$scope.testValue="here";
		if($scope.search(sku.code)!=null)
		{
			//$scope.testValue="now";
			var subscription=$scope.search(sku.code);
		 	subscription.Events[event].IsActive=1;
		}
		else
		{
			var subscription = {'SkuId': sku.code, 
								'SkuDesc': sku.description,
								'RegionCode': region.code,
								'BUCode': country.code,
								'BUName': country.name,
								'CatalogID': catalog.code,
								'CatalogName': catalog.name,
								'Events': [
									{
										'EventName': "Sell Action Changed",
										'EventID': 1,
										'IsActive': 0
									},
									{
										'EventName': "Activated or Deactivated",
										'EventID': 2,
										'IsActive': 0
									},
									{
										'EventName': "Lead Time Changed",
										'EventID': 3,
										'IsActive': 0
									}
								]};
			subscription.Events[event].IsActive=1;
			$scope.subscriptionDataCopy.subscriptions.push(subscription);				
		}
	}
	else
	{
	var ssku=$scope.search(sku.code);
	ssku.Events[event].IsActive=0;
	if(ssku.Events[0].IsActive==0 && ssku.Events[1].IsActive==0 && ssku.Events[2].IsActive==0)
	{
	var index=$scope.findIndex(sku.code);
	$scope.subscriptionDataCopy.subscriptions.splice(index,1);
	}
	}
	
	}
	$scope.save=function(){
	$scope.subscriptionData=JSON.parse(JSON.stringify($scope.subscriptionDataCopy));
	$scope.destroyCopy();
	$scope.iseditable=false;
	//$scope.regionSelected="";
	destroy_data();
	}
	$scope.setBoxes=function(skuId){
	
	$scope.box1=false;
	$scope.box2=false;
	$scope.box3=false;
	if($scope.search(skuId)!=null) 
	{
		if($scope.search(skuId).Events[0].IsActive==1)
		 {$scope.box1=true;}
		if($scope.search(skuId).Events[1].IsActive==1)
		 {$scope.box2=true;}
		if($scope.search(skuId).Events[2].IsActive==1)
		 {$scope.box3=true;}
	}
	}
	});