function maskify(cc) {
    
  if ( cc == '' ) {
      return '';
  }
  if ( typeof(cc) !== 'string' ) {
      cc = cc.toString(); 
  };

  let ccLength = cc.length; 
  if ( ccLength > 4 ) {
      for ( let i = 0; i < ccLength - 4; i++ ) {
          cc = cc.replace(cc[i], "#");
      }
  };
  return cc;
}

maskify(42426477589);