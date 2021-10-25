
var map;
var score;
score =0;


function initMap() {

var chicago = {lat: 41.8781, lng: -87.6298};
var indianapolis = {lat: 39.7684, lng: -86.1581};
var jaipur = {lat:26.9124, lng :75.7873};
var la = {lat:34.0522, lng :-118.2437};
var dc = {lat:38.9072, lng :-77.0369};
var brazil = {lat : 40.0583, lng: -74.4057};
var baroda = {lat : 22.310696, lng: 73.192635};
var rome = {lat :40.7128, lng: -74.0060};
var mexico ={ lat:19.4326, lng:-99.1332};
var hawaii = { lat:19.741755,lng:-155.844437};

  
map = new google.maps.Map(document.getElementById('ID'), {
  center: {lat: 0, lng: 0}, zoom: 3,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  gestureHandling: "cooperative", // pan 

  //mapId: "8e0a97af9386fef",
});
 
  var chicagoMarker = new google.maps.Marker({
  position: chicago,      
  label:{ text: '1 Chicago,IL', fontSize: '20px'}
  
});

  var jaipurMarker = new google.maps.Marker({
  position: jaipur,
  label:{ text: '2 Jaipur, RJ, India', fontSize: '20px'}
  
});

  var indianapolisMarker = new google.maps.Marker({
  position: indianapolis,
  label:{ text: '3 IndianaPolis, IN', fontSize: '20px'}
  
});

  var laMarker = new google.maps.Marker({
  position: la,
  label:{ text: '4 Los Angeles', fontSize: '20px'}

});

  var dcMarker = new google.maps.Marker({
  position: dc,
  label:{ text: '5 Washington, D.C', fontSize: '20px'}


});
  var brazilMarker = new google.maps.Marker({
  position: brazil,
  label:{ text: '6 NJ', fontSize: '20px'}


});

var barodaMarker = new google.maps.Marker({
  position: baroda,
  label:{ text: ' 7 Vadodra, GJ', fontSize: '20px'}


});

var romeMarker = new google.maps.Marker({
  position: rome,
  label:{ text: '8 NY', fontSize: '20px'}

});

var mexicoMarker = new google.maps.Marker({
  position: mexico,
  label:{ text: '9 Mexico City', fontSize: '20px'}


});

var hawaiiMarker = new google.maps.Marker({
  position: hawaii,
  label:{ text: '10 Hawaii', fontSize: '20px'}

});



if (score==0) {
  
  chicagoMarker.setVisible(false);
  chicagoMarker.setMap(map);
  
  map.addListener('bounds_changed',function(){
    
    //console.log(zoom)
    var bounds = map.getBounds();
    var zoom = map.getZoom();
    
    if (zoom==4 && bounds.contains(chicagoMarker.getPosition())){
      
      SetHint("You're getting closer to CHI  ")
    }
    else if (zoom==3 && bounds.contains(chicagoMarker.getPosition())){
      SetHint("You're getting close.to Chi. ")
    }
    else if (zoom==2 && bounds.contains(chicagoMarker.getPosition())){
      SetHint("You're getting there..c..i..o ")
    }

    else if(zoom >=7 && bounds.contains(chicagoMarker.getPosition())){
      
      SetHint('You have found the city 1! Another city is close if you have not found with first city')
      chicagoMarker.setVisible(true);
      score = 1; 
      SetScore(score);
    }       
    }) 

  }
  

if (score==0) {

  jaipurMarker.setVisible(false);
  jaipurMarker.setMap(map)
  map.addListener('bounds_changed',function(){
    
          //console.log(zoom)
    var bounds = map.getBounds();
    var zoom = map.getZoom();
          
    if (zoom==4 && bounds.contains(jaipurMarker.getPosition())){
      SetHint("You're getting closer to jaipur  ")
          }
    if (zoom==3 && bounds.contains(jaipurMarker.getPosition())){
      SetHint("You're getting close..jaipur ")
          }
    if (zoom==2 && bounds.contains(jaipurMarker.getPosition())){
      SetHint("You're getting there.. jaipur")
          }
      
          
    if(zoom >=7 && bounds.contains(jaipurMarker.getPosition())){
      jaipurMarker.setVisible(true);
            
      SetHint("You have found the city Jaipur ! BACK to USA")
      score =2
      SetScore(score);
      
      jaipurMarker.setVisible(true);
     

          }
        })
        SetScore(score);
      }
    
if ( score ==0 ||score==1) {
  indianapolisMarker.setVisible(false);
  indianapolisMarker.setMap(map);
  map.addListener('bounds_changed',function(){
  
        //console.log(zoom)
        var bounds = map.getBounds();
        var zoom = map.getZoom();
        
        if (zoom==4 && bounds.contains(indianapolisMarker.getPosition())){
          SetHint("You're getting closer..to IP ")
        }
        if (zoom==3 && bounds.contains(indianapolisMarker.getPosition())){
          SetHint("You're getting close...to IP. ")
        }
        if (zoom==2 && bounds.contains(indianapolisMarker.getPosition())){
          SetHint("You're getting there....to IP ")
        }
     
        if(zoom >=7 && bounds.contains(indianapolisMarker.getPosition())){
          
          SetHint('if You have found the city 2 & 1.. you were supposed to travel to other location!  Now find 2nd location(INDIA)')
          score =3
          SetScore(score);
          
          indianapolisMarker.setVisible(true);
          
        }
      })
}

if (score==3 || score ==0) {
  laMarker.setVisible(false);
  laMarker.setMap(map);
  map.addListener('bounds_changed',function(){
  
        //console.log(zoom)
        var bounds = map.getBounds();
        var zoom = map.getZoom();
        
        if (zoom==4 && bounds.contains(laMarker.getPosition())){
          SetHint("You're getting closer  ")
        }
        if (zoom==3 && bounds.contains(laMarker.getPosition())){
          SetHint("You're getting close.. ")
        }
        if (zoom==2 && bounds.contains(laMarker.getPosition())){
          SetHint("You're getting in the bounds ")
        }
     
        if(zoom >=6 && bounds.contains(laMarker.getPosition())){
          laMarker.setVisible(true);
          SetHint('Great. You just found fourth location!  Now find 5th location, DC')
        score =4
        SetScore(score);
        
          
        }
        
      })
}

if (score==4||score ==0) {
  dcMarker.setVisible(false);
  dcMarker.setMap(map);
  map.addListener('bounds_changed',function(){
    
          //console.log(zoom)
          var bounds = map.getBounds();
          var zoom = map.getZoom();
          
          if (zoom==4 && bounds.contains(dcMarker.getPosition())){
            SetHint("You're getting closer  ")
          }
          if (zoom==3 && bounds.contains(dcMarker.getPosition())){
            SetHint("You're getting close.. ")
          }
          if (zoom==2 && bounds.contains(dcMarker.getPosition())){
            SetHint("You're getting there.. ")
          }
       
          if(zoom >=7 && bounds.contains(dcMarker.getPosition())){
            
            dcMarker.setVisible(true);
            SetHint('yay..you reached DC.. now time to go to Brazil')
            score =5
            SetScore(score);
            
          }

SetScore(score);
        })
  }

  if (score==5 ||score ==0) {
    brazilMarker.setVisible(false);
    brazilMarker.setMap(map);
    map.addListener('bounds_changed',function(){
      
            //console.log(zoom)
            var bounds = map.getBounds();
            var zoom = map.getZoom();
            
            if (zoom==4 && bounds.contains(brazilMarker.getPosition())){
              SetHint("You're getting closer  ")
            }
            if (zoom==3 && bounds.contains(brazilMarker.getPosition())){
              SetHint("You're getting close.. ")
            }
            if (zoom==2 && bounds.contains(brazilMarker.getPosition())){
              SetHint("You're getting there.. ")
            }
         
            if(zoom >=7 && bounds.contains(brazilMarker.getPosition())){
              
              SetHint('NJ was fun... wasnt it..lets go to India')
              score =6
              SetScore(score);
           
            brazilMarker.setVisible(true);
            }
          })
    }

    if (score==6||score ==0) {
      barodaMarker.setVisible(false);
      barodaMarker.setMap(map);
      map.addListener('bounds_changed',function(){
        
              //console.log(zoom)
              var bounds = map.getBounds();
              var zoom = map.getZoom();
              
              if (zoom==4 && bounds.contains(barodaMarker.getPosition())){
                SetHint("You're getting closer to baroda ")
              }
              if (zoom==3 && bounds.contains(barodaMarker.getPosition())){
                SetHint("You're getting close..baroda ")
              }
              if (zoom==2 && bounds.contains(barodaMarker.getPosition())){
                SetHint("You're getting there.. baroda")
              }
           
              if(zoom >=7 && bounds.contains(barodaMarker.getPosition())){
                
                SetHint('Welcome to Baroda... you have found 7 places..go to ROME')
                score =7
                SetScore(score);
              
                barodaMarker.setVisible(true);
              }
  
            })
      }

if (score==7||score ==0) {
romeMarker.setVisible(false);
romeMarker.setMap(map);
map.addListener('bounds_changed',function(){

    //console.log(zoom)
  var bounds = map.getBounds();
  var zoom = map.getZoom();
    
    if (zoom==4 && bounds.contains(romeMarker.getPosition())){
      SetHint("You're getting closer...NY")
    }
    if (zoom==3 && bounds.contains(romeMarker.getPosition())){
      SetHint("You're getting close..NY ")
    }
    if (zoom==2 && bounds.contains(romeMarker.getPosition())){
      SetHint("You're getting there.. NY")
    }
  
    if(zoom >=7 && bounds.contains(romeMarker.getPosition())){
      
      SetHint('congrats..you just found NY..next is MExi..c')
      score =8;
      SetScore(score);
   
      romeMarker.setVisible(true);
    }

  })
}


if ( score== 0 || score ==0) {
  mexicoMarker.setVisible(false);
  mexicoMarker.setMap(map);
  map.addListener('bounds_changed',function(){
            
    //console.log(zoom)
    var bounds = map.getBounds();
    var zoom = map.getZoom();
    
    if (zoom==4 && bounds.contains(mexicoMarker.getPosition())){
      SetHint("You're getting closer...to M--co")
    }
    if (zoom==3 && bounds.contains(mexicoMarker.getPosition())){
      SetHint("You're in bounds ..zoom in to Mexico or USA ")
    }
    if (zoom==2 && bounds.contains(mexicoMarker.getPosition())){
      SetHint("You're getting there..m---co ")
    }
  
    if(zoom >=7 && bounds.contains(mexicoMarker.getPosition())){
      
      SetHint('congrats..you just found Mexico City .next is H..wii.')
      score =9;SetScore(score); mexicoMarker.setVisible(true);}
   
    
  })

}


if (score==9||score ==0) {
  hawaiiMarker.setVisible(false);
      
  map.addListener('bounds_changed',function(){
            
    //console.log(zoom)
    var bounds = map.getBounds();
    var zoom = map.getZoom();
    
    if (zoom==4 && bounds.contains(hawaiiMarker.getPosition())){
      SetHint("You're getting closer..to H...ii ")
    }
    if (zoom==3 && bounds.contains(hawaiiMarker.getPosition())){
      SetHint("You're getting close...to H...ii ")
    }
    if (zoom==2 && bounds.contains(hawaiiMarker.getPosition())){
      SetHint("You're getting there....to H...ii ")
    }
  
    if(zoom >=7 && bounds.contains(hawaiiMarker.getPosition())){

      
      
      SetHint('You found HAWAIIII, the lAST LOCATION.Thank you for playing this game.')
      score =10;
      SetScore(score);
      hawaiiMarker.setVisible(true);
       
    }
 
  })

}


  //cheat code 
function visible(){
  
  score =10;
  SetScore(score);
  alert("You won the game...all locations are marked with a marker!")
  
  chicagoMarker.setVisible(true);
  chicagoMarker.setMap(map);

  indianapolisMarker.setVisible(true);
  indianapolisMarker.setMap(map);
  jaipurMarker.setVisible(true);

  jaipurMarker.setMap(map)
  laMarker.setVisible(true);
  laMarker.setMap(map);

  dcMarker.setVisible(true);
  dcMarker.setMap(map);

  brazilMarker.setVisible(true);
  
  barodaMarker.setVisible(true);
  barodaMarker.setMap(map);

  romeMarker.setVisible(true);
  romeMarker.setMap(map);

  mexicoMarker.setVisible(true);
  mexicoMarker.setMap(map);

  hawaiiMarker.setVisible(true);
  hawaiiMarker.setMap(map);
  SetHint('You won the game');
 
}



// when clicked on map anny where cheat code runs
google.maps.event.addListener(map, 'click', function(){

visible();
//visible()

})

function SetHint(hint) {
  document.getElementById("hint-id").value = hint;  
}

function SetScore() {
  document.getElementById("score-id").value = score; 
  
}

SetHint('Top Left');
SetScore(score);


// checking if the marker is in bounds and showing it on console
function updateGame() {
  console.log('function UpdateGame()!');
  var zoomLevel = map.getZoom()
  var inBounds = false;

  // Check if Hawaii is in the currently displayed map
  if (map.getBounds().contains({lat:19.741755,lng:-155.844437})) {
      inBounds = true;
  }

  console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
  
}

google.maps.event.addListener (map,'idle', function(){
  updateGame()

});

}


function initApp() {
  
  console.log('Map Mania Version 2... Starting!');
   
}
