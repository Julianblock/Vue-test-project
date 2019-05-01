<template>
<div>
  <h1>Hello man</h1><br />
  <h1>Hello man</h1><br />
  <h1>Hello man</h1><br />
  <div id="app">
    <button
    v-for="lang in $ml.list"
    :key="lang"
    @click="$ml.change(lang)"
    v-text="lang"
/>
    <p v-text="$ml.with('VueJS').get('msg')" />
  </div>
  <div class="container" id="people">
  <div class="filter">
		<label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
		<label><input type="radio" v-model="selectedCategory" value="Tech" /> Tech</label>
		<label><input type="radio" v-model="selectedCategory" value="Entertainment" /> Entertainment</label>
		<label><input type="radio" v-model="selectedCategory" value="Fictional" /> Fictional</label>
	</div>
	
	<ul class="people-list">
		<li  v-for="person in filteredPeople" v-bind:key="person" >{{ person.name }}</li>
	</ul>
  <div class='ehealth-row'>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <a href=''>Silver 70 HMO</a>
        <p>Silver </p>
        <h1>Feature Plan</h1>
        <checkbox />Compare
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p  v-text="$ml.with('VueJS').get('officevisit')" />
        <h2>$45</h2>
        <a href=''>Find Doctor</a>
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('deductible')" />
        <h2>$2150</h2>
        <a href=''>Find Doctor</a>
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('drugsavings')" />
        <a href=''>Add RX savings</a>
        <h2> to see savings</h2>
      </div>
    </div>
    <div class="ehealth-row-tile">
      <div class='ehealth-row-tile-content'>
        <p v-text="$ml.with('VueJS').get('monthlycost')" />
        <h2>$102</h2>
        <a href='' class='Apply' > Apply </a>
        <a href='' class='Details'> View Details </a>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
// export default {
  // el:  "#people",
	// data: {
	// 	people: [
	// 		{ name: "Bill Gates", category: "Tech" },
	// 		{ name: "Steve Jobs", category: "Tech" },
	// 		{ name: "Jeff Bezos", category: "Tech" },
	// 		{ name: "George Clooney", category: "Entertainment" },
	// 		{ name: "Meryl Streep", category: "Entertainment" },
	// 		{ name: "Amy Poehler", category: "Entertainment" },
	// 		{ name: "Lady of Lórien", category: "Fictional" },
	// 		{ name: "BB8", category: "Fictional" },
	// 		{ name: "Michael Scott", category: "Fictional" }
	// 	],
	// 	selectedCategory: "All"
	// },
	// computed: {
	// 	filteredPeople: function() {
	// 		var vm = this;
	// 		var category = vm.selectedCategory;
			
	// 		if(category === "All") {
	// 			return vm.people;
	// 		} else {
	// 			return vm.people.filter(function(person) {
	// 				return person.category === category;
	// 			});
	// 		}
	// 	}
	// }
// }

Vue.use(MLInstaller) 

export default new MLCreate({
  initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
      title: `Hello {0}!`,
      monthlycost: 'Monthly Cost',
      drugsavings: 'Drug Savings',
      deductible: 'Deductible',
      officevisit: 'Office Visit',
      msg: `Theodore Roosevelt Jr. (/ˈroʊzəvɛlt/ ROH-zə-velt;[b] October 27, 1858 – January 6, 1919) was an American statesman, politician, conservationist, naturalist, and writer who served as the 26th president of the United States from 1901 to 1909. He previously served as the 25th vice president of the United States from March to September 1901 and as the 33rd governor of New York from 1899 to 1900. As a leader of the Republican Party during this time, he became a driving force for the Progressive Era in the United States in the early 20th century. His face is depicted on Mount Rushmore, alongside those of George Washington, Thomas Jefferson, and Abraham Lincoln. In polls of historians and political scientists, Roosevelt is generally ranked as one of the five best presidents.[3] Roosevelt was born a sickly child with debilitating asthma, but he overcame his physical health problems by embracing a strenuous lifestyle. He integrated his exuberant personality, vast range of interests, and world-famous achievements into a "cowboy" persona defined by robust masculinity. Home-schooled, he began a lifelong naturalist avocation before attending Harvard College. His book, The Naval War of 1812 (1882), established his reputation as both a learned historian and as a popular writer. Upon entering politics, he became the leader of the reform faction of Republicans in New York's state legislature.`
    }),
 
    new MLanguage('spanish').create({
      title: 'Oi {0}!',
      monthlycost: 'Costo mensual',
      drugsavings: 'ahorro de medicamentos',
      deductible: 'Deducible',
      officevisit: 'visita de oficina',
      msg: `Theodore Roosevelt Jr. (/ ˈroʊzəvɛlt / ROH-zə-velt; [b] 27 de octubre de 1858 - 6 de enero de 1919) fue un estadista, político, conservacionista, naturalista y escritor estadounidense que se desempeñó como el vigésimo sexto presidente de los Estados Unidos. de 1901 a 1909. Anteriormente se desempeñó como el vicepresidente número 25 de los Estados Unidos de marzo a septiembre de 1901 y como el 33º gobernador de Nueva York de 1899 a 1900. Como líder del Partido Republicano durante este tiempo, se convirtió en un conductor Fuerza para la Era Progresista en los Estados Unidos a principios del siglo XX. Su rostro está representado en el Monte Rushmore, junto con los de George Washington, Thomas Jefferson y Abraham Lincoln. En encuestas de historiadores y científicos políticos, Roosevelt es generalmente clasificado como uno de los cinco mejores presidentes. [3] Roosevelt nació como un niño enfermizo con asma debilitante, pero superó sus problemas de salud física al adoptar un estilo de vida agotador. Integró su personalidad exuberante, su vasta gama de intereses y sus logros mundialmente famosos en una persona "vaquera" definida por una masculinidad robusta. Educado en casa, comenzó una vocación naturalista de por vida antes de asistir a Harvard College. Su libro, La guerra naval de 1812 (1882), estableció su reputación como un historiador erudito y como un escritor popular. Al ingresar a la política, se convirtió en el líder de la facción reformista de los republicanos en la legislatura estatal de Nueva York.`
    }),
    new MLanguage('Norwegian').create({
      title: 'norwegian',
      monthlycost: 'Månedlig kostnad',
      drugsavings: 'narkotika besparelser',
      deductible: 'egenandel',
      officevisit: 'kontorbesøk',
      msg: `Theodore Roosevelt Jr. (/ roʊzəvɛlt / ROH-zə-velt; b) 27. oktober 1858 - 6. januar 1919) var en amerikansk statsmann, politiker, naturvitenskapsmann og skribent som tjente som 26. president i USA fra 1901 til 1909. Han har tidligere tjent som 25. vice president i USA fra mars til september 1901 og som den 33. guvernør i New York fra 1899 til 1900. Som leder av det republikanske partiet i løpet av denne tiden ble han en kjører tvinge for den progressive tiden i USA tidlig i det 20. århundre. Ansiktet hans er avbildet på Mount Rushmore, sammen med George Washington, Thomas Jefferson og Abraham Lincoln. I meningsmålinger av historikere og politiske forskere er Roosevelt generelt rangert som en av de fem beste presidenter. [3] Roosevelt ble født et sykelig barn med svekkende astma, men han overviste sine fysiske helseproblemer ved å omfavne en anstrengende livsstil. Han integrerte sin utrolige personlighet, et stort spekter av interesser og verdensberømte prestasjoner i en "cowboy" persona definert av robust maskulinitet. Hjemmeskole, begynte han en livslang naturforsker, før han gikk på Harvard College. Hans bok, The Naval War of 1812 (1882), etablerte sitt rykte som både en lært historiker og som en populær forfatter. Ved å komme inn i politikken ble han leder av reformen fraksjon av republikanere i New Yorks statslovgiver.`
    }),
    new MLanguage('Pashto').create({
      title: 'pashto',
      monthlycost: 'میاشتنی لګښت',
      drugsavings: 'د مخدره توکو سپما',
      deductible: 'د مجرايي وړ',
      officevisit: 'د دفتر لیدنه',
      msg: `د تیودوور روسویلټ جرید (/ / ژورزیسټلاټ / ROH-zə-velt؛ [b] د اکتوبر 27، 1858 - جنوري 6، 1 919) یو امریکایی سیاستوال، سیاستوال، محافظه کار، طبیعی او لیکونکی و چې د متحده ایالاتو د 26 رئیس په توګه یې دنده ترسره کوله. هغه له 1901 څخه تر 1909 پورې د مخه د متحده ایالاتو د 25 ویں مرستیال ولسمشر په توګه د مارچ تر سپتامبر پورې تر 0101 پورې خدمت وکړ او د نیویارک د 33 والي له 1899 څخه تر 1900 پورې یې دنده ترسره کړه. د دې وخت په اوږدو کې د جمهوري غوښتونکي ګوند مشر په توګه، د شلمې پیړۍ په لومړیو کې په متحده ایالتونو کې د پروسیژیک ایر لپاره ځواک. د هغه مخ د رشمور په غر کې ښودل شوی، د جورج واشنګتن، توماس جیفرسن او ابراهیم لینکن سره یو ځای. د تاریخ پوهانو او سیاسي علومو په ټاکنو کې، روزویلټ په عمومي ډول د پنځو غوره ولسمشرانو په حیث دی. [3]
روزویلټ یو ناروغ ماشوم زېږېدلی دښته کې زېږېدلی و، مګر هغه د ژوندانه سخت ژوند کولو سره د خپل فزیکي روغتیا ستونزو ته مخه کړه. هغه د خپل متخصص شخصیت، پراخه ګټو، او د نړۍ نامتو الس ته راوړنو سره یو "چروایي" شخص ته د پیاوړې مذکوره تعریف لخوا تعریف شوی. په کور کې زده کړې، هغه د هارورډ کالج کې د ګډون کولو دمخه د ژوند کولو طبیعي استوګنځلو څخه پیل وکړ. د هغه کتاب، د 1812 کال بحري جګړې (1882)، د یو پوه شوي تاریخپوه او د مشهور لیکوال په توګه خپل شهرت وټاکه. د داخلیدو په سیاست کې، هغه د نیویارک په دولتي مقننه کې د ریپبلینډ د اصالحاتو د ډلې مشر و.`
    })
  ]
})

</script>

