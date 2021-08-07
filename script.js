function euclideanDistance(point1, point2){
  
  let distance = 0;
  let sum = 0;

  if ( point1.length === 1 ) {

    distance = Math.abs( point1[0] - point2[0] );
    return + distance.toFixed(2);

  } else {

    for ( let i = 0; i < point1.length; i++ ) {
      sum = sum + (point2[i] - point1[i])**2;
    };

    distance = Math.sqrt(sum);
    return + distance.toFixed(2);
  };
};

console.log(euclideanDistance([-1,2,5],[2,4,9]));   