// Description
// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

// Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

// G becomes C
// C becomes G
// T becomes A
// A becomes U

// So based on all this, here's a sample input/output:

// Input:    'ACGTGGTCTTAA'
// Output: 'UGCACCAGAAUU'

var input = 'ACGTGGTCTTAA'
// 'UGCACCAGAAUU'
// 'UGCACCAGAAUU'

const rnas = (input) => { 
  var array = input.split('')
  var rna = []
for(let i = 0; i < array.length; i++){
  // console.log(array[i])
  if(array[i] === 'G'){ 
    rna.push('C')
  } else if (array[i] === 'C'){ 
    rna.push('G')
  } else if (array[i] === "T"){ 
    rna.push('A')
  } else if (array[i] === 'A') { 
    rna.push('U')
  }
}
return rna.join('')
}

console.log(rnas(input))
