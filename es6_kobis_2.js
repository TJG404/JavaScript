
const kobisData = function(sdate){
 
    fetch(
      'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+sdate
    )
    .then((response) =>  response.json())
      // const data ={ response.json();
      // console.log(data)})
    .then((kobis) => {
      let showKobis = kobis.boxOfficeResult;
      let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList;
      const movieList = `
        <h3>박스오피스 타입 : ${showKobis.boxofficeType}</h3>
        <h3>박스오피스 날짜 : ${showKobis.showRange}</h3>
        <table border=1>
      ${showKobisRankList.map(movie => 
        `<tr>
          <td>${movie.rank}</td>
          <td>${movie.movieNm}</td>
          <td>${movie.openDt}</td>
          <td>${movie.audiAcc}</td>
          <td>${movie.salesAcc}</td>
        </tr>
        `).join('\n')}

        </table>
        `;
      

      document.querySelector('#kobisContent').innerHTML = movieList;
    });

}

document.addEventListener("DOMContentLoaded", () => {
  let sdate = form.searchDate.value;
  kobisData(sdate);
  
  btnRun.addEventListener('click', () => {
    sdate = form.searchDate.value;
     //alert(sdate);
    kobisData(sdate);
  });

});



// let button = document.querySelector( '#btnRun' );
// button.addEventListener( 'click' , onClickButton);

// function onClickButton( ) {

//    alert( ' 버튼 클릭 이벤트가 발생하였습니다.' );

// }

/*
const kobis = {
  "boxOfficeResult": {
    "boxofficeType": "일별 박스오피스",  //kobis.boxOfficeResult.boxofficeType
    "showRange": "20230906~20230906", //kobis.boxOfficeResult.showRange
    "dailyBoxOfficeList": [
      {
        "rnum": "1",
        "rank": "1",
        "rankInten": "25",
        "rankOldAndNew": "OLD",
        "movieCd": "20224667",
        "movieNm": "잠",      //kobis.boxOfficeResult.dailyBoxOfficeList[0].movieNm
        "openDt": "2023-09-06",
        "salesAmt": "735086507",
        "salesShare": "44.9",
        "salesInten": "733556507",
        "salesChange": "47944.9",
        "salesAcc": "814820407",
        "audiCnt": "79435",
        "audiInten": "79265",
        "audiChange": "46626.5",
        "audiAcc": "87543",
        "scrnCnt": "1072",
        "showCnt": "4947"
      },
      {
        "rnum": "2",
        "rank": "2",
        "rankInten": "-1",
        "rankOldAndNew": "OLD",
        "movieCd": "20226431",
        "movieNm": "오펜하이머",
        "openDt": "2023-08-15",
        "salesAmt": "209727019",
        "salesShare": "12.8",
        "salesInten": "-21184712",
        "salesChange": "-9.2",
        "salesAcc": "30316354087",
        "audiCnt": "19831",
        "audiInten": "-2577",
        "audiChange": "-11.5",
        "audiAcc": "2841435",
        "scrnCnt": "879",
        "showCnt": "2367"
      },
      {
        "rnum": "3",
        "rank": "3",
        "rankInten": "0",
        "rankOldAndNew": "OLD",
        "movieCd": "20226500",
        "movieNm": "달짝지근해: 7510",
        "openDt": "2023-08-15",
        "salesAmt": "125541095",
        "salesShare": "7.7",
        "salesInten": "-27331297",
        "salesChange": "-17.9",
        "salesAcc": "11338836912",
        "audiCnt": "13662",
        "audiInten": "-2967",
        "audiChange": "-17.8",
        "audiAcc": "1165302",
        "scrnCnt": "697",
        "showCnt": "1841"
      },
      {
        "rnum": "4",
        "rank": "4",
        "rankInten": "-2",
        "rankOldAndNew": "OLD",
        "movieCd": "20233014",
        "movieNm": "타겟",
        "openDt": "2023-08-30",
        "salesAmt": "118797823",
        "salesShare": "7.3",
        "salesInten": "-67443709",
        "salesChange": "-36.2",
        "salesAcc": "2963671983",
        "audiCnt": "12990",
        "audiInten": "-7053",
        "audiChange": "-35.2",
        "audiAcc": "314638",
        "scrnCnt": "766",
        "showCnt": "2125"
      },
      {
        "rnum": "5",
        "rank": "5",
        "rankInten": "-1",
        "rankOldAndNew": "OLD",
        "movieCd": "20204264",
        "movieNm": "콘크리트 유토피아",
        "openDt": "2023-08-09",
        "salesAmt": "114860158",
        "salesShare": "7.0",
        "salesInten": "-28954320",
        "salesChange": "-20.1",
        "salesAcc": "35719917721",
        "audiCnt": "12362",
        "audiInten": "-3041",
        "audiChange": "-19.7",
        "audiAcc": "3657632",
        "scrnCnt": "717",
        "showCnt": "2012"
      },
      {
        "rnum": "6",
        "rank": "6",
        "rankInten": "0",
        "rankOldAndNew": "NEW",
        "movieCd": "20090379",
        "movieNm": "해리 포터와 혼혈 왕자",
        "openDt": "2009-07-15",
        "salesAmt": "70743500",
        "salesShare": "4.3",
        "salesInten": "70743500",
        "salesChange": "100",
        "salesAcc": "20338227500",
        "audiCnt": "6339",
        "audiInten": "6339",
        "audiChange": "100",
        "audiAcc": "2964075",
        "scrnCnt": "41",
        "showCnt": "214"
      },
      {
        "rnum": "7",
        "rank": "7",
        "rankInten": "-2",
        "rankOldAndNew": "OLD",
        "movieCd": "20218541",
        "movieNm": "밀수",
        "openDt": "2023-07-26",
        "salesAmt": "37207927",
        "salesShare": "2.3",
        "salesInten": "-25159483",
        "salesChange": "-40.3",
        "salesAcc": "49166017434",
        "audiCnt": "3991",
        "audiInten": "-2698",
        "audiChange": "-40.3",
        "audiAcc": "5089666",
        "scrnCnt": "420",
        "showCnt": "626"
      },
      {
        "rnum": "8",
        "rank": "8",
        "rankInten": "0",
        "rankOldAndNew": "NEW",
        "movieCd": "20211540",
        "movieNm": "듣보인간의 생존신고",
        "openDt": "2023-09-06",
        "salesAmt": "32409900",
        "salesShare": "2.0",
        "salesInten": "32409900",
        "salesChange": "100",
        "salesAcc": "42978900",
        "audiCnt": "3503",
        "audiInten": "3503",
        "audiChange": "100",
        "audiAcc": "4788",
        "scrnCnt": "72",
        "showCnt": "97"
      },
      {
        "rnum": "9",
        "rank": "9",
        "rankInten": "-3",
        "rankOldAndNew": "OLD",
        "movieCd": "20228930",
        "movieNm": "엘리멘탈",
        "openDt": "2023-06-14",
        "salesAmt": "20281885",
        "salesShare": "1.2",
        "salesInten": "-10305296",
        "salesChange": "-33.7",
        "salesAcc": "70145608677",
        "audiCnt": "2202",
        "audiInten": "-1026",
        "audiChange": "-31.8",
        "audiAcc": "7138995",
        "scrnCnt": "247",
        "showCnt": "317"
      },
      {
        "rnum": "10",
        "rank": "10",
        "rankInten": "5",
        "rankOldAndNew": "OLD",
        "movieCd": "20231253",
        "movieNm": "일주일간 친구",
        "openDt": "2023-09-06",
        "salesAmt": "17372250",
        "salesShare": "1.1",
        "salesInten": "15230250",
        "salesChange": "711",
        "salesAcc": "98192250",
        "audiCnt": "1936",
        "audiInten": "1630",
        "audiChange": "532.7",
        "audiAcc": "8009",
        "scrnCnt": "133",
        "showCnt": "321"
      }
    ]
  }
};

//일별 박스오피스 출력 - 순위, 영화제목, 개봉일, 누적관객수, 누적매출액
let showKobis = kobis.boxOfficeResult;
let showKobisRankList = kobis.boxOfficeResult.dailyBoxOfficeList;
const movieList = `${showKobisRankList.map(movie => 
  `${movie.rank}, ${movie.movieNm}, ${movie.openDt}, ${movie.audiAcc}, ${movie.salesAcc}`).join('\n')}
`;
console.log(`박스오피스 타입 - ${showKobis.boxofficeType}`);
console.log(`일자 - ${showKobis.showRange}`);
console.log(movieList);
*/