var map = {

	'chile' : [
		{
			name: 'SANTIAGO - HEAD OFFICE',
			dir : [
				'Rosario Norte 100, 3rd Floor Office 301',
				'Las Condes, Santiago.',
				'Postal Code: 7561258'
			],
			lat: -33.4077712,
			lon: -70.5736081,
			phone: [ '223472100' ],
			fax: [ '223472161' ],
			mail: [ 'b.m.scl' ]
		},
		{
			name: 'IQUIQUE',
			dir: [
				'Edificio Dharma',
				'Calle Sotomayor 575 Of. 407, Iquique'
			], 
			lat: -20.2108381,
			lon: -70.5736081,
			agent: 'Luis Miranda',
			phone: [ '57 2523628 ' ], 
			mail: [ 'b.m.iqq' ]
		},
		{
			name: 'TOCOPILLA',
			dir: [
				'Sargento Aldea 1250',
				'Tocopilla'
			], 
			lat: -22.0965281,
			lon: -70.2081063,
			agent: 'Luis Miranda',
			phone: [ '55 2811192' ], 
			mail: [ 'b.m.toc' ]
		},
		{
			name: 'MEJILLONES',
			dir: [
				'Avenida Andalican 881',
				'Mejillones'
			], 
			lat : -23.1019336,
			lon : -70.4473956,
			agent: 'Alex Belmar',
			phone: [ '55 2624 694', '55 2624 722' ], 
			mail: [ 'b.m.mej' ]
		},
		{
			name: 'ANTOFAGASTA',
			dir: [
				'Condell 2026,"C" Tower',
				'Of. 8 2nd Floor, Antofagasta'
			], 
			lat : -23.6547848,
			lon : -70.4044284,
			agent: 'Alex Belmar',
			phone: [ '55 22897664', '55 22897665' ], 
			mail: [ 'b.m.anf' ]
		},
		{
			name: 'CHAÑARAL',
			dir: [
				'Carretera Panamericana Norte s/n',
				'Puerto Barquitos Codelco Inside Camp'
			], 
			lat : -26.358415, 
			lon : -70.645564,
			agent: 'Jorge Videla',
			phone: [ '9 71403197' ], 
			mail: [ 'b.m.chl' ]
		},
		{
			name: 'CALDERA',
			dir: [
				'Pasaje Manuel Orella 415, Caldera'
			], 
			lat : -27.0678813,
			lon : -70.8107015,
			agent: 'Jorge Videla',
			phone: [ '52 2319053' ], 
			mail: [ 'b.m.caldera' ]
		},
		{
			name: 'HUASCO',
			dir: [
				'Craig 345 A, Piso 2, Huasco'
			], 
			lat : -28.4634595,
			lon : -71.2228396,
			agent: 'José Torrealba',
			phone: [ '51 2531651' ], 
			mail: [ 'b.m.huasco' ]
		},
		{
			name: 'QUINTERO',
			dir: [
				'Avda. Francia 947, Quintero'
			], 
			lat : -32.782693,
			lon : -71.5392777,
			agent: 'Rolando Horzella',
			phone: [ '32 2933948' ], 
			mail: [ 'b.m.qtv' ]
		},
		{
			name: 'VALPARAISO',
			dir: [
				'Blanco Nº 1131',
	            'Edificio Espacio Errazuriz',
				'Piso 3, Oficina 33, Valparaíso'
			], 
			lat : -33.1181834,
			lon : -71.5521343,
			agent: 'Rolando Horzella',
			phone: [ '32 2215232' ], 
			mail: [ 'b.m.valpo' ]
		},
		{
			name: 'SAN ANTONIO',
			dir: [
				'Edificio Bioceanica, Barros Luco 1613',
	            'Of. 407, San Antonio'
			], 
			lat : -33.593922,
			lon : -71.613442,
			agent: 'Carlos Martínez',
			phone: [ '35 2239641' ], 
			mail: [ 'b.m.sai' ]
		},
		{
			name: 'CONCEPCIÓN BAY',
			dir: [
				'Lirquen - Penco - Talcahuano - San Vicente - Coronel',
	            'Avda. San Andrés 225-A, Concepción'
			], 
			lat : -36.791768,
			lon : -73.0614412,
			agent: 'Hernán Huerta',
			phone: [ '41 2486816' ], 
			mail: [ 'b.m.conce' ]
		},
		{
			name: 'PUERTO MONTT',
			dir: [
				'Chinquihue Km. 6, Puerto Montt'
			], 
			lat : -41.5231081,
			lon : -73.0457644,
			agent: 'Luis Viveros',
			phone: [ '94 2684946' ], 
			mail: [ 'puertomontt' ]
		},
		{
			name: 'PUNTA ARENAS',
			dir: [
				'Pasaje Korner 1028, Piso 2',
				'Punta Arenas'
			], 
			lat : -53.1642065, 
			lon : -70.9055032,
			agent: 'Ricardo Cárcamo',
			phone: [ '9 9546 5226' ], 
			mail: [ 'magellan' ]
		},
		{
			name: 'PUERTO WILLIAMS',
			dir: [
				'Pasaje Korner 1028, Piso 2',
				'Punta Arenas'
			], 
			lat : -53.1642065, 
			lon : -70.9055032,
			agent: 'Ricardo Cárcamo',
			phone: [ '9 9546 5226' ], 
			mail: [ 'magellan' ]
		} 
	],

	'peru' : [ 
	/*
		{
			name: 'LIMA - HEAD OFFICE',
			dir: [
				'Calle German Schreiber 184 Of. 301',
				'San Isidro, Lima.',
				'Postal Code: 7561258'
			],  
			lat : -12.0964146,
			lon : -76.9797957,
			phone: [ '+51 1 2215052' ], 
			mail: [ 'peru@bm-maritima.cl' ]
		}, 
		{
			name: 'LIMA - CALLAO',
			dir: [
				'Av. Saenz Peña N° 284',
				'Oficina 603, Piso 6, Callao',
				'Postal Code: 7561258'
			],  
			lat : -12.0612497,
			lon : -77.1469993,
			phone: [ '+51 1 399 68 22', '+51 944 899 844' ], 
			mail: [ 'callao@bm-maritima.cl', 'cbiese@bm-maritima.cl' ]
		}, 
		{
			name: 'LIMA - SUPE-PARAMONGA',
			dir: [
				'Jr. Tacna N° 150-B',
				'Nueva Victoria',
				'Supe Puerto'
			],  
			lat : -10.8031864,
			lon : -77.7553325,
			phone: [ '+51 1 399 68 22', '+51 959 473 270' ], 
			mail: [ 'supe@bm-maritima.cl', 'carlos.chirito@bm-maritima.cl' ]
		}, 
		{
			name: 'LIMA - PAITA',
			dir: [
				'Jr. Independencia N° 167',
				'Paita'
			],  
			lat : -5.0861488,
			lon : -81.1129099,
			phone: [ '+51 73 253 341' ], 
			mail: [ 'paita@bm-maritima.cl', 'martin.coronado@bm-maritima.cl' ]
		}, 
		{
			name: 'LIMA - BAYOVAR',
			dir: [
				'Jr. Independencia N° 167',
				'Paita'
			],  
			lat: -5.08917,
			lon: -81.11444,
			phone: [ '+51 73 253 341' ], 
			mail: [ 'bayovar@bm-maritima.cl', 'martin.coronado@bm-maritima.cl' ]
		},*/
		{
			name : 'Lima',
			dir: [
				'San Isidro - Head Office',
				'German Schreiber 184, 03rd Floor Office 301',
				'San Isidro-Lima'
			],
			lat: -12.0951594,
			lon: -77.0233696,
			phone: [ '+51 1 221 5052' ],
			mail: [ 'peru@bm-maritima.pe' ] 
		},
		{

			name : 'Paita',
			dir: [
				'Jr. Independencia 167, Paita',
			],
			lat: -5.0863197,
			lon: -81.1106583,
			agent: 'Martin Coronado',
			phone: [ '+73 253 341' ],
			mail: [ 'paita@bm-maritima.pe' ] 

		},
		{

			name : 'Bayovar',
			dir: [
				'Jr. Independencia 167, Paita' 
			],
			lat: -5.0863197,
			lon: -81.1106583,
			agent: 'Martin Coronado',
			phone: [ '+73 253 341' ],
			mail: [ 'bayovar@bm-maritima.pe' ] 

		},
		{

			name : 'Salaverry',
			dir: [
				'Calle Libertad 647, Salaverry'
			],
			lat: -8.2240854,
			lon: -78.9765458,
			agent: 'Alberto Delgado',
			phone: [ '+44 468 004' ],
			mail: [ 'salaverry@bm-maritima.pe' ] 

		},
		{

			name : 'Supe',
			dir: [
				'Jr. Tacna 150-B Nueva Victoria, Supe' 
			],
			lat: -10.7975,
			lon: -77.71306,
			agent: 'Carlos Chirito',
			phone: [ '+ 51 978 215 276' ],
			mail: [ 'supe@bm-maritima.pe' ] 

		},
		{

			name : 'Callao',
			dir: [
				'Av. Sáenz Peña 284 Int. 603, Callao' 
			],
			lat: -12.0597548,
			lon: -77.1347925,
			agent: 'Carlos Chirito',
			phone: [ '+ 51 1 399 6822' ],
			mail: [ 'callao@bm-maritima.pe' ]

		},
		{

			name : 'Conchan',
			dir: [
				'Av. Sáenz Peña 284 Int. 603, Callao'
			],
			lat: -12.0597548,
			lon: -77.1347925,
			agent: 'Carlos Chirito',
			phone: [ '+ 51 1 399 6822' ],
			mail: [ 'conchan@bm-maritima.pe' ]

		},
		{

			name : 'Pisco',
			dir: [
				'Punta Pejerrey Km 40, Paracas, Pisco'
			],
			lat: -13.8002383,
			lon: -76.2934336,
			agent: 'Jose Alex Lopez',
			phone: [ '+51 963 963 831' ],
			mail: [ 'pisco@bm-maritima.pe' ]

		},
		{

			name : 'Matarani',
			dir: [
				'Avis Bahía del Puerto D-01, Islay, Mollendo' 
			],
			lat: -17.02306,
			lon: -72.01472,
			agent: 'Christian Biese',
			phone: [ '+51 944 899 844' ],
			mail: [ 'matarani@bm-maritima.pe' ]

		}
	]

};