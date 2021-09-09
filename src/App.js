
const myChampionList = [{id:1,name :"리 신",image:"https://ww.namu.la/s/96d63f1c7aae8d3362cc73bc71d8e61e2fca89729828fe754218a102adf3800230f3fa5b3df6a04d4e102db04655be4d0f2eb2975cc1e9aec7529af58aeb58e46592af44cc85cea9e676d5ccd33374a4f9c3a31eb27bff9b66b20714cc86572b"
},{id:2,name:"엘리스",image:"https://w.namu.la/s/66c71754476c436b8e36fd38ce44c778157b20b3107fd380b5c4f3f58409690d369a36157ea5ebeb63d5523fd9234a51bb6c72a5f681ddb8f4699ea2b2efaa933d4ca201f8d548c36bada5114bd398ad8da19d9da433a1aa7c17e4f69fb58dc4"}
,{id:3,name:"에코",image:"https://w.namu.la/s/bd195ee7daff2b2b1562c0de8213b829c8bc7377537a1fe641d6e2cb7070d17d5b911321f189ad44c5100cd1186ce656c225887bee94be975730e9273d0446a4f0153c6a77d60f616c3a778605596cf58389d24157444c1e4d66db9458828be7"}
,{id:4,name:"신짜오",image:"https://ww.namu.la/s/3c59448e3ef2cb87353d437bd71bf3fc3e3d68d913618c0103ac1af6b3ffcf5284d999d2f57eb6a5e254155b7450c811309ce60cf7d94263f5df1da294cae11bd7ab89df957d2229d348ba84363a821432a131f005aea5506e910cea5f411290"}
,{id:5,name:"니달리",image:"https://w.namu.la/s/021cb63231d9919d20cc61db924210fa329c8798d1dbf1d68503bab8e4fb6feb90f52e31d6e805494334cac4d22f02f9a5a460829654375dfbee31537e6baaef02fdc465a756dc1fc2d3ea565692a7fb561d7349e8c453484168a7a0b1ab9338"}
];
function Champion({name,image}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} / >
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {myChampionList.map(ChampList=>(<Champion key={ChampList.id} name={ChampList.name} image={ChampList.image} />))}
    </div>
  );
}

export default App;
