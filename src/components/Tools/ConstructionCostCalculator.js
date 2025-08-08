import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ConstructionForm from './ConstructionForm';
import ConstructionResults from './ConstructionResults';
import { calculateConstructionCost } from '../../utils/constructionCalculations';

const ConstructionCostCalculator = () => {
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({
    city: 'Multan',
    areaUnit: 'marla',
    areaSize: '',
    coveredArea: '',
    constructionType: 'grey structure',
    constructionMode: 'with material',
    propertyType: 'Residential',
    numFloors: 1,
    constructionQuality: 'Standard',
    materialType: 'Grey Structure',
    additionalFeatures: []
  });

  const handleFormSubmit = (data) => {
    const calculatedResults = calculateConstructionCost(data);
    setFormData(data);
    setResults(calculatedResults);
  };

  const handleUpdateCalculation = (updatedData) => {
    const calculatedResults = calculateConstructionCost(updatedData);
    setFormData(updatedData);
    setResults(calculatedResults);
  };

  return (
    <Container className="construction-cost-calculator">
      {!results ? (
        <ConstructionForm 
          initialData={formData} 
          onSubmit={handleFormSubmit} 
        />
      ) : (
        <ConstructionResults 
          results={results} 
          formData={formData}
          onUpdate={handleUpdateCalculation}
        />
      )}
    </Container>
  );
};

export default ConstructionCostCalculator;