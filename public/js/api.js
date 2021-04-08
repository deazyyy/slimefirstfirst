    var lohiarrprice=[];
    var lohiarrdate=[];
    var currdemo=[];
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';


    var symbol = "BTC"
    const urls = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=250&sparkline=false";
    fetch(urls, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(resp => resp.json())
    .then(function(data) {
    cointablebtc = data;

    // for btc coin list
    var overallTable;
    $("#mybtctbl").html("");
    for (let i = 0; i < cointablebtc.length; i++) {
        var  pricechange = 0;
        var classname ="pr-up ";
        if(cointablebtc[i].price_change_percentage_24h){
            pricechange = cointablebtc[i].price_change_percentage_24h.toFixed(2);
            classname = cointablebtc[i].price_change_percentage_24h.toFixed(2) > 0 ?"pr-up" : "pr-down" 
        }
         overallTable = ` <tr>
            <td class="tab-nm"><span class="user-ic"><img src="${cointablebtc[i].image}" alt="icon"></span> ${cointablebtc[i].name} (${cointablebtc[i].symbol})</td>
            <td class="tab-num"><p>${scientificToDecimal(data[i].current_price)}<span>${symbol}</span></p></td>
            <td class="tab-num"><p>${cointablebtc[i].market_cap}<span>${symbol}</span></p></td>
            <td class="tab-num"><p>${cointablebtc[i].market_cap_change_24h != null ? Math.abs(cointablebtc[i].market_cap_change_24h.toFixed(2)): " "}<span>${symbol}</span></p></td>
            <td class="`+ (classname)+`"><span>${pricechange}%</span></td>

        </tr>`;
         $("#mybtctbl").append(overallTable);
         
    }
    for (let i = 0; i < 100; i++) {
        $("#mybtctbl").children('tr').eq(i).css("display","table-row");
    }


    var topgainerbtc;
    btcdataarray =data;
    btcdataarray.sort(GetSortOrder("price_change_percentage_24h")); 

     $("#btctopgainer").html("");
    for (let i = cointablebtc.length-1; i > cointablebtc.length-6; i--) {
        topgainerbtc = `  <tr>
            <td class="tab-nm"><span class="user-ic"><img src="${btcdataarray[i].image}" alt="icon"></span> ${btcdataarray[i].name} (${btcdataarray[i].symbol})</td>
            <td class="tab-num"><p>${scientificToDecimal(btcdataarray[i].current_price)}<span>BTC</span></p></td>
            <td class="pr-up"><span>${btcdataarray[i].price_change_percentage_24h.toFixed(2)}%</span></td>
          
        </tr>`;

        $("#btctopgainer").append(topgainerbtc);

    }
    $('.dtblbtcgan').DataTable({
        "order": [[ 2, "desc" ]],
        "ordering": true,
        columnDefs: [{
          orderable: false,
          targets: "no-sort"
        }]
    })
    

    //////////////////////////////






    // for top losers
    var toploserbtc;; 
    $("#btctoploser").html("");
    for (let i = 0; i < 5; i++) {
        if (i%2) {
          var odeve = "even"
        }else{
          var odeve = "odd"
        }
        
        toploserbtc = `<tr>
            <td class="tab-nm"><span class="user-ic"><img src="${data[i].image}" alt="icon"></span> ${data[i].name} (${data[i].symbol})</td>
            <td class="tab-num"><p>${scientificToDecimal(data[i].current_price)}<span>BTC</span></p></td>
            <td class="pr-down"><span>${data[i].price_change_percentage_24h.toFixed(2)}%</span></td>
          
        </tr>`;

        $("#btctoploser").append(toploserbtc);
       
    }
    $('.dtblbtclos').DataTable({
        "order": [[ 2, "asc" ]],
        "ordering": true,
        columnDefs: [{
          orderable: false,
          targets: "no-sort"
        }]
    })
  })
  .catch(function(error) {
    console.log(error);
  });













































// $("#usdonclk").click(function(){
  const urlus = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&sparkline=false";

    fetch(urlus, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(resp => resp.json())
    .then(function(data) {

        cointableusd = data;

        // for usd coin list
        var overallTable;
        $("#myusdtbl").html("");
        var symbolu = "USD"
        for (let i = 0; i < cointableusd.length; i++) {
            var  pricechange = 0;
            var classname ="pr-up ";
            if(cointableusd[i].price_change_percentage_24h){
                pricechange = cointableusd[i].price_change_percentage_24h.toFixed(2);
                classname = cointableusd[i].price_change_percentage_24h.toFixed(2) > 0 ?"pr-up" : "pr-down" 
            }
             overallTable = ` <tr>
                <td class="tab-nm"><span class="user-ic"><img src="${cointableusd[i].image}" alt="icon"></span> ${cointableusd[i].name} (${cointableusd[i].symbol})</td>
                <td class="tab-num"><p>${scientificToDecimal(data[i].current_price)}<span>${symbolu}</span></p></td>
                <td class="tab-num"><p>${cointableusd[i].market_cap}<span>${symbolu}</span></p></td>
                <td class="tab-num"><p>${cointableusd[i].market_cap_change_24h != null ? Math.abs(cointableusd[i].market_cap_change_24h.toFixed(2)): " "}<span>${symbolu}</span></p></td>
                <td class="`+ (classname)+`"><span>${pricechange}%</span></td>

            </tr>`;
             $("#myusdtbl").append(overallTable);
             
        }
        for (let i = 0; i < 100; i++) {
            $("#myusdtbl").children('tr').eq(i).css("display","table-row");
        }





    

    // for top gainers
    var topgainerbtc;
    btcdataarray =data;
    btcdataarray.sort(GetSortOrder("price_change_percentage_24h")); 

     $("#usdtopgainer").html("");
    for (let i = btcdataarray.length-1; i > btcdataarray.length-6; i--) {
        topgainerbtc = `  <tr>
            <td class="tab-nm"><span class="user-ic"><img src="${btcdataarray[i].image}" alt="icon"></span> ${btcdataarray[i].name} (${btcdataarray[i].symbol})</td>
            <td class="tab-num"><p>${scientificToDecimal(btcdataarray[i].current_price)}<span>USD</span></p></td>
            <td class="pr-up"><span>${btcdataarray[i].price_change_percentage_24h.toFixed(2)}%</span></td>
   
        </tr>`;

        $("#usdtopgainer").append(topgainerbtc);


    }

    $('.dtblusdgan').DataTable({
        "order": [[ 2, "desc" ]],
        "ordering": true,
        columnDefs: [{
          orderable: false,
          targets: "no-sort"
        }]
    })
    

    // for top losers
    var toploserbtc;; 
    $("#usdtoploser").html("");
    for (let i = 0; i < 5; i++) {
        if (i%2) {
          var odeve = "odd"
        }else{
          var odeve = "even"
        }
        
        toploserbtc = `  <tr role="row" class=`+odeve+`>
            <td class="tab-nm"><span class="user-ic"><img src="${data[i].image}" alt="icon"></span> ${data[i].name} (${data[i].symbol})</td>
            <td class="tab-nm"><p>${scientificToDecimal(data[i].current_price)}<span> USD</span></p></td>
            <td class="pr-down"><span>${data[i].price_change_percentage_24h.toFixed(2)}%</span></td>
     
        </tr>`;

        $("#usdtoploser").append(toploserbtc);


        // end fetching chart of top loser 
    }
    $('.dtblusdlos').DataTable({
        "order": [[ 2, "asc" ]],
        "ordering": true,
        columnDefs: [{
          orderable: false,
          targets: "no-sort"
        }]
    })
    

  })
  .catch(function(error) {
    console.log(error);
  });




// });






//sorting function
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}           




function scientificToDecimal (num) {
    var nsign = Math.sign(num);
    //remove the sign
    num = Math.abs(num);
    //if the number is in scientific notation remove it
    if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        var zero = '0',
                parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
                e = parts.pop(), //store the exponential part
                l = Math.abs(e), //get the number of zeros
                sign = e / l,
                coeff_array = parts[0].split('.');
        if (sign === -1) {
            l = l - coeff_array[0].length;
            if (l < 0) {
              num = coeff_array[0].slice(0, l) + '.' + coeff_array[0].slice(l) + (coeff_array.length === 2 ? coeff_array[1] : '');
            } 
            else {
              num = zero + '.' + new Array(l + 1).join(zero) + coeff_array.join('');
            }
        } 
        else {
            var dec = coeff_array[1];
            if (dec)
                l = l - dec.length;
            if (l < 0) {
              num = coeff_array[0] + dec.slice(0, l) + '.' + dec.slice(l);
            } else {
              num = coeff_array.join('') + new Array(l + 1).join(zero);
            }
        }
    }

    return nsign < 0 ? '-'+num : num;
};




$(document).ready(function(){
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        for (let i = 100; i < cointablebtc.length; i++) {
            $("#mybtctbl").children('tr').eq(i).css("display","table-row");
        }
        $(this).hide()
   })
    $("#loadMore2").on("click", function(e){
        e.preventDefault();
        for (let i = 100; i < cointableusd.length; i++) {
            $("#myusdtbl").children('tr').eq(i).css("display","table-row");
        }
        $(this).hide()
   })
});


    



// for getting volume week
 const volweek = "https://api.godex.io/api/v1/transactions/volume-week?affiliate[0]=rz5ukL2BqGLbqHQr&affiliate[1]=rz5ukL2BqGLbqHQr";
    fetch(volweek, {
      method: "POST",
      headers: {
        "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU4OWIzZDIwY2FlNDc0NWEyMmRmYjZkY2Y5ODllNzkzM2RlNjMyZTBmODcxYmJhNmQ2NzNiZGQxZWRjNGMxOTMwOTZjZmFlOTAzN2IyMzY0In0.eyJhdWQiOiIzIiwianRpIjoiNTg5YjNkMjBjYWU0NzQ1YTIyZGZiNmRjZjk4OWU3OTMzZGU2MzJlMGY4NzFiYmE2ZDY3M2JkZDFlZGM0YzE5MzA5NmNmYWU5MDM3YjIzNjQiLCJpYXQiOjE2MDg3NTg0NzgsIm5iZiI6MTYwODc1ODQ3OCwiZXhwIjoxOTI0MjkxMjc4LCJzdWIiOiI2NjUyIiwic2NvcGVzIjpbXX0.GNqxGYz7ej-A4qzHdOho4sLxMGNPK23g-SduePi7vCqWFVAm7H1dObMB9AiDkLRUUpuWex1jOy6CoosP3PaY2yzyYCvQzqTDARdMaKtBJop5M4TiPctchVd6w3mkeqAxgSXopSpsPtIJaeuD4Cq3Uck2GZsvB0jlPR4yyUBgwqmNXgAZ9sN8fQxcATvqsspUQ5mOXSfj1ig1_tzfYtprXrUgREAgaI4VaqXVjRHQnRXrPJYPoyJUeldXMiWUabKTdcAp02902E__y_c9sQxktSYG-ahTDSeC48YTFSm7YEhNLcbgFTKiS70wKrZA_6-NgRs8XDo8RQ81a6EnmYXL4-Vs5SOs2r-u8uJYeDiqTOQnT93yhpChqlu9eQYCAiCU8P2OcAWe3NLg2raJ8mJWU28wlzYoO1P_ygbDRBLTHhP7fOMZ_tafY49PLAoOeU2GJMWSCcyCQ_Vu1UScN2-Xik04LcHraaUiDZzIDO6g2VtWPs7agmMmQG1poBGOoS85YqUdtyUWJ63MbssHdcC0MJ_bWPUX8SY3lkRjkajDgqz-foOMQyMLjI2JEDPvwJ4kuuEBiAQVzpkUNOkNpEyhxUlwx0rD0IVYpgMUQVERzs65HiHE79GtXxnLgitO52J8SW8IkecHz7yyXF0zApV6_Arh04sWkZ5v8BWN-xoVl4s",
        "Content-Type": "application/json",
      }
    })
    .then(resp => resp.json())
    .then(function(data) {
        var volweek =  `<div class="dt-outer">
                            <div>From : <span>${data.data_from}</span></div>
                            <div>To : <span>${data.data_to}</span></div>
                        </div>
                        <div class="vol-out">
                            Total exchange volume in BTC : <span>${data.volume_btc}</span>
                        </div>`;

        $(".vol-week").html(volweek);
    })