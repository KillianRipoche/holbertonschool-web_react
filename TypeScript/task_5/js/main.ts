// =======================
// Tâche 10 : Nominal Typing & Branding
// =======================

// Interface pour MajorCredits
interface MajorCredits {
  credits: number;
  readonly __brand: 'major'; // propriété unique de branding
}

// Interface pour MinorCredits
interface MinorCredits {
  credits: number;
  readonly __brand: 'minor'; // propriété unique de branding
}

// Fonction pour additionner deux MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

// Fonction pour additionner deux MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}

// =======================
// Exemple d'utilisation
// =======================

const major1: MajorCredits = { credits: 3, __brand: 'major' };
const major2: MajorCredits = { credits: 4, __brand: 'major' };

const minor1: MinorCredits = { credits: 1, __brand: 'minor' };
const minor2: MinorCredits = { credits: 2, __brand: 'minor' };

console.log('Total Major:', sumMajorCredits(major1, major2)); // { credits: 7, __brand: 'major' }
console.log('Total Minor:', sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: 'minor' }
