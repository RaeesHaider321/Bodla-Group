export const calculateConstructionCost = (data) => {
  const baseRates = {
    'Multan': {
      'grey structure': { 'with material': 1500, 'without material': 1000 },
      'furnished': { 'with material': 2500, 'without material': 1800 }
    },
    'Lahore': {
      'grey structure': { 'with material': 1700, 'without material': 1200 },
      'furnished': { 'with material': 2700, 'without material': 2000 }
    },
    'Karachi': {
      'grey structure': { 'with material': 1600, 'without material': 1100 },
      'furnished': { 'with material': 2600, 'without material': 1900 }
    },
    'Islamabad': {
      'grey structure': { 'with material': 1800, 'without material': 1300 },
      'furnished': { 'with material': 2800, 'without material': 2100 }
    }
  };

  const qualityMultipliers = {
    'Basic': 0.8,
    'Standard': 1,
    'Premium': 1.3
  };

  const convertToSqft = (size, unit) => {
    const conversionFactors = {
      'marla': 272.25,
      'square feet': 1,
      'kanal': 5445
    };
    return size * conversionFactors[unit];
  };

  const areaInSqft = convertToSqft(parseFloat(data.areaSize), data.areaUnit);
  const baseRate = baseRates[data.city][data.constructionType][data.constructionMode];
  const qualityMult = qualityMultipliers[data.constructionQuality];
  const totalCost = areaInSqft * baseRate * qualityMult;

  return {
    totalCost,
    areaInSqft,
    details: data,
    baseRate,
    qualityMult
  };
};