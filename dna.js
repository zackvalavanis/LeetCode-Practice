// Features
// Solutions
// Plans
// Pricing
// Resources
// Log in
// Get Trello for free
// Atlassian uses cookies to improve your browsing experience, perform analytics and research, and conduct advertising. Accept all cookies to indicate that you agree to our use of cookies on your device. Atlassian cookies and tracking notice, (opens new window)

// Preferences

// Only necessary

// Accept all
// Algorithm Ladder



// Filters


// RNA Transcription
// in list
// Basic Hash

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

const dna = (input) => { 

  var rna = []
  for(let i = 0; i < input.length; i++){ 
    if(input[i] === 'G'){ 
      rna.push('C')
    } else if (input[i] === 'C'){ 
      rna.push('G')
    } else if(input[i] === 'T'){ 
      rna.push('A')
    } else if (input[i] === 'A'){ 
      rna.push('U')
    } 
  }
  return rna.join('')
}

console.log(dna(input))