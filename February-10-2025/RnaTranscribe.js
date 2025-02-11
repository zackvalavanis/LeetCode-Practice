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

const rna = (input) => { 
  var string = ''
  for(let i = 0; i < input.length; i++){ 
    var letter = input[i]
    if(letter === 'G'){ 
      string += 'C'
    } else if(letter === 'C'){ 
      string += 'G'
    } else if (letter === 'T'){ 
      string += 'A'
    } else if (letter === 'A'){ 
      string += 'U'
    }
  }
return string

}

console.log(rna(input))