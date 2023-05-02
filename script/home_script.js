const rule = 
["يتم تسجيل الطلاب من خلال مدارسهم ومشرفيهم.",
"بعد التسجيل، يستلم كل طالب مسجل جواز المرحلة الأولى ذي اللون الأحمر والذي يحتوي على 10 تأشيرات قراءة بواقع 10 صفحات. يقرأ الطالب الكتاب ويلخصه في صفحة واحدة ليحصل بذلك على تأشيرة القراءة.",
"يكمل الطالب عشرة كتب ويلخصها في عشر صفحات حتى ينهي المرحلة الأولى وينتقل للمرحلة الثانية والجواز الأخضر.",
"يكمل الطالب عشرة كتب جديدة ويلخصها في عشر صفحات حتى ينهي المرحلة الثانية وينتقل للمرحلة الثالثة والجواز الأزرق.",
"يكمل الطالب عشرة كتب جديدة ويلخصها في عشر صفحات حتى ينهي المرحلة الثالثة وينتقل للمرحلة الرابعة والجواز الفضي.",
"يكمل الطالب عشرة كتب جديدة ويلخصها في عشر صفحات حتى ينهي المرحلة الرابعة وينتقل للمرحلة الخامسة والجواز الذهبي. يكمل الطالب عشرة كتب جديدة ويلخصها في عشر صفحات حتى ينهي المرحلة الخامسة والأخيرة من القراءة، ويكون بذلك قد قام بقراءة وتلخيص خمسين كتاباً خارج المقرر خلال العام الدراسي."
]


const navBar = document.getElementById("navBar");


changeRule('right');
function changeRule(side){
    const ruleNumber = document.getElementById("ruleNumber");
    const textContrainer =document.getElementById("textContrainer");
    if(ruleNumber == null || ruleNumber == undefined || textContrainer == null || textContrainer == undefined){return 0}
    let index = Number(ruleNumber.innerHTML);
 
        if(index<=6&&index>0){
            if(side=='left')
            index++
            else
            index--;
        ruleNumber.innerHTML = (index).toString();
        textContrainer.innerHTML = rule[index-1];
    }
    if(index>6 && side=='left'){
        ruleNumber.innerHTML = "1";
        textContrainer.innerHTML = rule[0];
    }
    if(index<1 &&side=='right'){
        ruleNumber.innerHTML = "6";
        textContrainer.innerHTML = rule[5];
    }


}

function openNav() {
    navBar.style.width = "100%";
  }
  
  function closeNav() {
    navBar.style.width = "0%";
  }


  var slide0Index = 0;
  var slide1Index = 0;
  var slide2Index = 0;
  var slide3Index = 0;
  var slides0 = document.getElementsByClassName("mySlides0");
  var slides1 = document.getElementsByClassName("mySlides1");
  var slides2 = document.getElementsByClassName("mySlides2");
  var slides3 = document.getElementsByClassName("mySlides3");
  showSlides();

  function showSlides() {
    removeActive(slides0);
    removeActive(slides1);
    removeActive(slides2);
    removeActive(slides3);
    slide0Index++;
    slide1Index++;
    slide2Index ++;
    slide3Index ++;
    if (slide0Index > slides0.length) {slide0Index = 1}
    if (slide1Index > slides1.length) {slide1Index = 1}
    if (slide2Index > slides2.length) {slide2Index = 1}
    if (slide3Index > slides3.length) {slide3Index = 1}
     slides0[slide0Index-1]?.classList.add("active");
     slides1[slide1Index-1]?.classList.add("active");
     slides2[slide2Index-1]?.classList.add("active");
     slides3[slide3Index-1]?.classList.add("active");
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
  function removeActive(slides){
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
  }
  function swiper1(){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    rewind: true,

    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
      rewind: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  }
  function swiper2(){
  var passports = new Swiper(".mySwiper1", {
    effect: "cards",
    grabCursor: true,
  });
  }
  function swiper3(){
  var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  }
  function focuse(id){
    document.getElementById(id).focus();
  }

//statistics charts script
//first chart bars

const ctx1 = document.getElementById('myChart1');     
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['عام(حكومي)','خاص (اهلي)'],
    datasets: [{
      label: 'نسبة المشاركة',
      data: [93,18],
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio:false,
    responsive:true,
    
  }
});
  // line chart
  function getCharts(){
   
    const ctx2 = document.getElementById('myChart2');     
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: [2021,2022,2023],
        datasets: [{
          label: 'نسب المشاركة',
          data: [2540,3133,34641],
          fill: false,
          borderColor: '#FCB343',
          tension: 0.1
        }]
      },
      options: {
        maintainAspectRatio:false,
        responsive:true,
        
      }
    });


     //donut chart
            const ctx3 = document.getElementById('myChart3');     
            new Chart(ctx3, {
              type: 'doughnut',
              data: {
                labels: ['ذكور','إناث'],
                datasets: [{
                  label: 'نسبة المشاركة',
                  data: [17781,16860],
                  borderWidth: 1
                }]
              },
              options: {
                maintainAspectRatio:false,
                responsive:true,
                
              }
            });

            //polar chart 
                //Doughnut chart
                const ctx4 = document.getElementById('myChart4');     
                new Chart(ctx4, {
                  type: 'polarArea',
                  data: {
                    labels: ['العدد الجملي المدارس المسجلة','العدد الجملي للمدارس المشاركة'],
                    datasets: [{
                      label: 'نسبة المشاركة',
                      data: [119,40],
                      borderWidth: 1
                    }]
                  },
                  options: {
                    maintainAspectRatio:false,
                    responsive:true,
                    
                  }
                });

                //horizontal bar chart
                const ctx5 = document.getElementById('myChart5');  
                new Chart(ctx5, {
                  type: 'pie',
                  data: {
                    labels: [2021,2022,2023],
                    datasets: [{
                      label: 'نسبة المشاركة',
                      data: [6,17,28],
                      borderWidth: 1,
                      backgroundColor: [
                        'rgba(54, 162, 235, 0.9)',
                        'rgba(255, 99, 132, 0.9)',
                        'rgba(252, 185, 86, 0.9)'
                      ]
                    }]
                  },
                
                  hoverOffset: 4
               
              });
  }