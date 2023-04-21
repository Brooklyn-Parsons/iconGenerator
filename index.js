let $input = $("#input");
let $submitButton = $("#submit");
let $result = $("#results");
let $emoji = $("#emoji");
let $smileys = $("#smileys");
let $animals = $("#animals");
let $food = $("#food");
let $travel = $("#travel");
let $activities = $("#activities");
let $objects = $("#objects");
let $symbols = $("#symbols");
let $flags = $("#flags");
let $animalsText = $("#animals").val();
let $foodText = $("#food").val();
let $travelText = $("#travel").val();
let $activitiesText = $("#activities").val();
let $objectsText = $("#objects").val();
let $symbolssText = $("#symbolss").val();
let $flagsText = $("#flags").val();


$smileys.on("click", () => {
      $emoji.empty();
      fetch(`https://emojihub.yurace.pro/api/all/category/smileys-and-people`)
      .then(response =>{
        console.log(response);
        return response.json();
      }) 
      .then(json => { 
        for (let i = 0; i <= json.length-1; i++){
          let test = json[i].htmlCode[0];
          let $allEmojis = jQuery('<div class="class"></div>')
          $emoji.append($allEmojis);
          $allEmojis.html(test);
        }
      });
    })
    $animals.on("click", () => {
          $emoji.empty();
          fetch(`https://emojihub.yurace.pro/api/all/category/animals-and-nature`)
          .then(response =>{
            console.log(response);
            return response.json();
          }) 
          .then(json => { 
            for (let i = 0; i <= json.length-1; i++){
              let test = json[i].htmlCode[0];
              let $allEmojis = jQuery('<div class="class"></div>')
              $emoji.append($allEmojis);
              $allEmojis.html(test);
            }
          });
        })
        $food.on("click", () => {
              $emoji.empty();
              fetch(`https://emojihub.yurace.pro/api/all/category/food-and-drink`)
              .then(response =>{
                console.log(response);
                return response.json();
              }) 
              .then(json => { 
                for (let i = 0; i <= json.length-1; i++){
                  let test = json[i].htmlCode[0];
                  let $allEmojis = jQuery('<div class="class"></div>')
                  $emoji.append($allEmojis);
                  $allEmojis.html(test);
                }
              });
            })
            $travel.on("click", () => {
                  $emoji.empty();
                  fetch(`https://emojihub.yurace.pro/api/all/category/travel-and-places`)
                  .then(response =>{
                    console.log(response);
                    return response.json();
                  }) 
                  .then(json => { 
                    for (let i = 0; i <= json.length-1; i++){
                      let test = json[i].htmlCode[0];
                      let $allEmojis = jQuery('<div class="class"></div>')
                      $emoji.append($allEmojis);
                      console.log(json);
                      $allEmojis.html(test);
                    }
                  });
                })
                $activities.on("click", () => {
                      $emoji.empty();
                      fetch(`https://emojihub.yurace.pro/api/all/category/activities`)
                      .then(response =>{
                        console.log(response);
                        return response.json();
                      }) 
                      .then(json => { 
                        for (let i = 0; i <= json.length-1; i++){
                          let test = json[i].htmlCode[0];
                          let $allEmojis = jQuery('<div class="class"></div>')
                          $emoji.append($allEmojis);
                          $allEmojis.html(test);
                        }
                      });
                    })
                    $objects.on("click", () => {
                          $emoji.empty();
                          fetch(`https://emojihub.yurace.pro/api/all/category/objects`)
                          .then(response =>{
                            console.log(response);
                            return response.json();
                          }) 
                          .then(json => { 
                            for (let i = 0; i <= json.length-1; i++){
                              let test = json[i].htmlCode[0];
                              let $allEmojis = jQuery('<div class="class"></div>')
                              $emoji.append($allEmojis);
                              $allEmojis.html(test);
                            }
                          });
                        })
                        $symbols.on("click", () => {
                              $emoji.empty();
                              fetch(`https://emojihub.yurace.pro/api/all/category/symbols`)
                              .then(response =>{
                                console.log(response);
                                return response.json();
                              }) 
                              .then(json => { 
                                for (let i = 0; i <= json.length-1; i++){
                                  let test = json[i].htmlCode[0];
                                  let $allEmojis = jQuery('<div class="class"></div>')
                                  $emoji.append($allEmojis);
                                  $allEmojis.html(test);
                                }
                              });
                            })
                            $flags.on("click", () => {
                                  $emoji.empty();
                                  fetch(`https://emojihub.yurace.pro/api/all/category/flags`)
                                  .then(response =>{
                                    console.log(response);
                                    return response.json();
                                  }) 
                                  .then(json => { 
                                    for (let i = 0; i <= json.length-1; i++){
                                      let test = json[i].htmlCode[0];
                                      let $allEmojis = jQuery('<div class="class"></div>')
                                      $emoji.append($allEmojis);
                                      $allEmojis.html(test);
                                    }
                                  });
                                })

        