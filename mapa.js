var map = {

	'chile' : [
		{
			name: 'SANTIAGO - HEAD OFFICE',
			dir : [
				'Rosario Norte 100, 3rd Floor Office 301',
				'Las Condes, Santiago.',
				'Postal Code: 7561258'
			],
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
			agent: 'Jorge Videla',
			phone: [ '9 71403197' ], 
			mail: [ 'b.m.chl' ]
		},
		{
			name: 'CALDERA',
			dir: [
				'Pasaje Manuel Orella 415, Caldera'
			], 
			agent: 'Jorge Videla',
			phone: [ '52 2319053' ], 
			mail: [ 'b.m.caldera' ]
		},
		{
			name: 'HUASCO',
			dir: [
				'Craig 345 A, Piso 2, Huasco'
			], 
			agent: 'José Torrealba',
			phone: [ '51 2531651' ], 
			mail: [ 'b.m.huasco' ]
		},
		{
			name: 'QUINTERO',
			dir: [
				'Avda. Francia 947, Quintero'
			], 
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
			agent: 'Hernán Huerta',
			phone: [ '41 2486816' ], 
			mail: [ 'b.m.conce' ]
		},
		{
			name: 'PUERTO MONTT',
			dir: [
				'Chinquihue Km. 6, Puerto Montt'
			], 
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
			agent: 'Ricardo Cárcamo',
			phone: [ '9 9546 5226' ], 
			mail: [ 'magellan' ]
		} 
	],

	'peru' : [ 
		{
			name: 'LIMA - HEAD OFFICE',
			dir: [
				'Calle German Schreiber 184 Of. 301',
				'San Isidro, Lima.',
				'Postal Code: 7561258'
			],  
			phone: [ '1 2215052' ], 
			mail: [ 'peru' ]
		}, 
		{
			name: 'LIMA - CALLAO',
			dir: [
				'Av. Saenz Peña N° 284',
				'Oficina 603, Piso 6, Callao',
				'Postal Code: 7561258'
			],  
			phone: [ '1 399 68 22', '944 899 844' ], 
			mail: [ 'callao', 'cbiese' ]
		}, 
		{
			name: 'LIMA - SUPE-PARAMONGA',
			dir: [
				'Jr. Tacna N° 150-B',
				'Nueva Victoria',
				'Supe Puerto'
			],  
			phone: [ '1 399 68 22', '959 473 270' ], 
			mail: [ 'supe', 'carlos.chirito' ]
		}, 
		{
			name: 'LIMA - PAITA',
			dir: [
				'Jr. Independencia N° 167',
				'Paita'
			],  
			phone: [ '73 253 341' ], 
			mail: [ 'paita', 'martin.coronado' ]
		}, 
		{
			name: 'LIMA - BAYOVAR',
			dir: [
				'Jr. Independencia N° 167',
				'Paita'
			],  
			phone: [ '73 253 341' ], 
			mail: [ 'bayovar', 'martin.coronado' ]
		}
	]

};

var tabs = document.getElementById('box-lugares').children[0];

document.addEventListener('DOMContentLoaded', tab(), sucursales() );

function tab(){

	for( var loc in map ){

		var tab = document.createElement('span');
		tab.innerHTML =  loc.toUpperCase();
		tab.classList.add( 'btntab' , loc );
		tabs.appendChild(tab);   

		var acc = document.createElement('div');
		tabs.parentElement.parentElement.appendChild(acc);
		acc.classList.add( 'acordeon', loc );

		if( acc.classList.contains('peru') ){

			acc.style.display = 'none';

		}
	
	}

	tabs.children[0].classList.add('active');

}

function sucursales(){
 
	var acordeon = document.querySelectorAll('.acordeon'); 

 	for( pais in map ){ 
 
 		for ( var i = 0; map[pais].length > i; i++ ) {

			var sucursal = document.createElement('div'); 

			if( pais === 'chile' ){ acordeon[0].appendChild(sucursal) } else { acordeon[1].appendChild(sucursal) }

			sucursal.classList.add('sucursal');

			var titulo = document.createElement('h3'); 
			var list = document.createElement('ul');

			sucursal.appendChild(titulo);
			sucursal.appendChild(list);

			titulo.innerHTML = map[pais][i].name;

			var item1 = document.createElement('li');
			item1.classList.add( 'dir' );
			list.append(item1);

			for( var d = 0; map[pais][i].dir.length > d; d++){
 
				var span = document.createElement('span');
				item1.append(span);
				span.innerHTML = map[pais][i].dir[d] + '<br>'; 

			}

			var item2 = document.createElement('li');
			item2.classList.add( 'phone' );
			list.append(item2);

			for( var p = 0; map[pais][i].phone.length > p; p++){

				var span = document.createElement('span');
				item2.append(span);
				if( pais === 'chile' ){ 
					item2.innerHTML = 'Phone : +56 ' + map[pais][i].phone[p] + '<br>';
				} else { 
					item2.innerHTML = 'Phone : +51 ' + map[pais][i].phone[p] + '<br>';
				}

			}

			if( map[pais][i].fax){

				var span = document.createElement('span');
				item2.append(span);
				if( pais === 'chile' ){ 
					span.innerHTML = 'Fax : +56 ' + map[pais][i].fax;
				} else { 
					span.innerHTML = 'Fax : +51 ' + map[pais][i].fax;
				}

			}

			if( map[pais][i].agent ){

				var item4 = document.createElement('li');
				item4.classList.add( 'agent' );
				list.append(item4);
				item4.innerHTML = 'Agent : ' + map[pais][i].agent;

			}

			var item5 = document.createElement('li');
			item5.classList.add( 'mail' );
			list.append(item5);

			for( var m = 0; map[pais][i].mail.length > m; m++){

				var span = document.createElement('span');
				item5.append(span);
				span.innerHTML = map[pais][i].mail[m] + '@bm-maritima.cl <br>';

			}
				 
		} 

	}
 
} 