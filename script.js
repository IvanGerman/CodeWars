function DNAStrand(dna){

  let arr = [];
  for ( let i = 0; i < dna.length + 1; i++ ) {
    
    switch(dna[i]) {

      case "A": 
        arr.push("T");
        break;

        case "T": 
        arr.push("A");
        break;

        case "G": 
        arr.push("C");
        break;

        case "C": 
        arr.push("G");
        break;
    };
  };  
  
  arr = arr.join('');
  return arr;
};

DNAStrand("ATGCC");

// second solution:
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}