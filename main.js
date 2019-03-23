document.addEventListener('DOMContentLoaded', tab(), sucursales(), markers() );

function tab() {

	var tabs = document.getElementById('box-lugares').children[0];

	for (var loc in map) {

		if (map) {

			var tab = document.createElement('span');
			tab.classList.add('btntab', loc);

			tab.innerHTML = loc.charAt(0).toUpperCase() + loc.slice(1);

			if (tab.classList.contains('chile')) {  
				tab.innerHTML = loc.charAt(0).toUpperCase() + loc.slice(1);
			} else{
				var res = loc.replace('u','ú');
				tab.innerHTML = loc.charAt(0).toUpperCase() + res.slice(1);
			}
			
			tabs.appendChild(tab);

			var acc = document.createElement('div');
			tabs.parentElement.appendChild(acc);
			acc.classList.add('acordeon', loc);

			if (acc.classList.contains('peru')) {

				acc.style.display = 'none'; 

			} 


		}
	}

	tabs.children[0].classList.add('active');

}

function sucursales() {

	var acordeon = document.querySelectorAll('.acordeon');

	for (var pais in map) {

		if (map) {

			for (var i = 0; map[pais].length > i; i++) {

				var sucursal = document.createElement('div');

				if (pais === 'chile') {
					acordeon[0].appendChild(sucursal);
				} else {
					acordeon[1].appendChild(sucursal);
				}

				sucursal.classList.add('sucursal');

				var titulo = document.createElement('h3');
				var list = document.createElement('ul');

				sucursal.appendChild(titulo);
				sucursal.appendChild(list);

				titulo.innerHTML = map[pais][i].name.toUpperCase();

				var item1 = document.createElement('li');
				item1.classList.add('dir');
				list.append(item1);

				for (var d = 0; map[pais][i].dir.length > d; d++) {

					var span1 = document.createElement('span');
					item1.append(span1);
					span1.innerHTML = map[pais][i].dir[d] + '<br>';

				}

				var item2 = document.createElement('li');
				item2.classList.add('phone');
				list.append(item2);

				for (var p = 0; map[pais][i].phone.length > p; p++) {

					var span2 = document.createElement('span');
					item2.append(span2);
					if (pais === 'chile') {
						span2.innerHTML = 'Phone : +56 ' + map[pais][i].phone[p] + '<br>';
					} else {
						span2.innerHTML = map[pais][i].phone[p] + '<br>';
					}

				}

				if (map[pais][i].fax) {

					var span3 = document.createElement('span');
					item2.append(span3);
					if (pais === 'chile') {
						span3.innerHTML = 'Fax : +56 ' + map[pais][i].fax;
					} else {
						span3.innerHTML = map[pais][i].fax;
					}

				}

				if (map[pais][i].agent) {

					var item4 = document.createElement('li');
					item4.classList.add('agent');
					list.append(item4);
					if (pais === 'chile') {
						item4.innerHTML = 'Agent : ' + map[pais][i].agent;
					} else {
						item4.innerHTML = 'Branch Manager : ' + map[pais][i].agent;
					}

				}

				var item5 = document.createElement('li');
				item5.classList.add('mail');
				list.append(item5);

				for (var m = 0; map[pais][i].mail.length > m; m++) {

					var span4 = document.createElement('span');
					item5.append(span4);
					if (pais === 'chile') {
						span4.innerHTML = map[pais][i].mail[m] + '@bm-maritima.cl <br>';
					} else {
						span4.innerHTML = map[pais][i].mail[m] + '<br>';
					}

				}

			}

		}

	}

}

function markers(){ 
	for( marker in map ){

		for(var i = 0; map[marker].length > i; i++){

			var marks = document.getElementById('marcadores');
			var marca = document.createElement('p');
			marks.appendChild(marca);

			marca.innerHTML = " [ '" + map[marker][i].dir.join(", ") + "' , " + map[marker][i].lat + ", " + map[marker][i].lon + " ], ";
	
		}

	}
}