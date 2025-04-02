import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// Define the structure for risk factors, similar to your types.ts
interface RiskFactor {
  icon: string
  title: string
  description: string
  type: 'warning' | 'success' | 'low' | 'medium' | 'high' // Allow more types if needed
}

// Define the structure for a risk breakdown item
interface RiskBreakdownItem {
  title: string
  riskLevel: string
  percentage: number
  factors: readonly RiskFactor[]
}

// Define the structure for a risk category bar item
interface RiskCategoryItem {
  name: string
  riskLevel: string
  percentage: number
}

// Define the structure for statistic cards
interface Statistics {
  overallRiskPercent: number
  overallRiskLevel: string
  highRiskFactorCount: number
  mediumRiskFactorCount: number
  lowRiskFactorCount: number
}

// --- Pinia Store Definition ---
export const useAssessmentStore = defineStore('assessment', () => {
  // --- State --- 
  // Initialize with placeholder or default data (similar to current hardcoded)

  const statistics = ref<Statistics>({
    overallRiskPercent: 78,
    overallRiskLevel: 'High',
    highRiskFactorCount: 12,
    mediumRiskFactorCount: 28,
    lowRiskFactorCount: 45,
  });

  const riskCategories = ref<readonly RiskCategoryItem[]>([
    { name: "Procedural Risk", riskLevel: "High Risk", percentage: 85 },
    { name: "Data Source", riskLevel: "Medium Risk", percentage: 60 },
    { name: "Stakeholder Consultation", riskLevel: "Low Risk", percentage: 30 },
    { name: "Data Quality", riskLevel: "High Risk", percentage: 75 },
    { name: "Procedural Fairness", riskLevel: "Medium Risk", percentage: 50 },
    { name: "Privacy", riskLevel: "Low Risk", percentage: 34 },
  ]);

  // Define initial state for riskBreakdownItems with all 6 categories
  const riskBreakdownItems = ref<readonly RiskBreakdownItem[]>([
    {
      title: 'Procedural Risk', // Added
      riskLevel: 'High Risk',    // Placeholder
      percentage: 85,           // Placeholder
      factors: [                // Placeholder factors
        {
          icon: 'https://via.placeholder.com/16/FF0000/FFFFFF?text=!', // Placeholder icon
          title: 'Placeholder Factor 1',
          description: 'Details about procedural risk factor 1.',
          type: 'warning'
        }
      ]
    },
    {
      title: 'Data Source', 
      riskLevel: 'Medium Risk',
      percentage: 70,
      factors: [
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/432747a084d723a2bb0909d40ade8494f735c7ee?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66',
          title: 'Data Sensitivity',
          description: 'Personal information collected by model in deployment and training is highly sensative',
          type: 'warning'
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0001bd67f6ba5c852fc8b68196dc1fe3e8b130dc?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66',
          title: 'Data Collection Consent',
          description: 'Proper processes has been put in place to ensure consent of people\'s data for model training/testing',
          type: 'success'
        }
      ]
    },
    {
      title: 'Stakeholder Consultation', 
      riskLevel: 'Low Risk',       
      percentage: 30,              
      factors: [                   
        {
          icon: 'https://via.placeholder.com/16/00FF00/FFFFFF?text=✓', // Placeholder icon
          title: 'Consultation Factor 1',
          description: 'Details about stakeholder consultation factor 1.',
          type: 'success'
        }
      ]
    },
    {
      title: 'Data Quality',       
      riskLevel: 'High Risk',      
      percentage: 75,              
      factors: [                   
        {
          icon: 'https://via.placeholder.com/16/FF0000/FFFFFF?text=!', // Placeholder icon
          title: 'Quality Factor 1',
          description: 'Details about data quality factor 1.',
          type: 'warning'
        }
      ]
    },
    {
      title: 'Procedural Fairness', 
      riskLevel: 'Medium Risk',
      percentage: 70,
      factors: [
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9ab1b954a839992731a46722047ceeae4a2a184c?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66',
          title: 'Data Sensitivity', // Note: Copied from other section, might need unique factors
          description: 'Personal information collected by model in deployment and training is highly sensative',
          type: 'warning'
        },
        {
          icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ca98a100faeb92d48e39a62a626279ef120fbe3?placeholderIfAbsent=true&apiKey=c4a26b41dfb84ff28723655a292abe66',
          title: 'Data Collection Consent', // Note: Copied from other section, might need unique factors
          description: 'Proper processes has been put in place to ensure consent of people\'s data for model training/testing',
          type: 'success'
        }
      ]
    },
    {
      title: 'Privacy',            
      riskLevel: 'Low Risk',       
      percentage: 34,              
      factors: [                   
        {
          icon: 'https://via.placeholder.com/16/00FF00/FFFFFF?text=✓', // Placeholder icon
          title: 'Privacy Factor 1',
          description: 'Details about privacy factor 1.',
          type: 'success'
        }
      ] 
    }    
  ]);

  // --- Getters (Computed Properties) --- 
  // Example: You could add computed properties derived from state if needed

  // --- Actions --- 
  // Action to update the assessment based on form data
  // The 'formData' parameter type will depend on your form library (e.g., SurveyJS result)
  function updateAssessment(formData: any) {
    console.log("Received form data:", formData); 
    
    // ** TODO: Implement Calculation Logic **
    // Based on formData, calculate new statistics, categories, breakdown items
    // For now, let's just simulate an update:
    const newOverallRiskPercent = Math.round(Math.random() * 100); // Calculate percentage first
    let newOverallRiskLevel = 'Low'; // Default to Low
    if (newOverallRiskPercent > 65) {
        newOverallRiskLevel = 'High';
    } else if (newOverallRiskPercent >= 30) { // Between 30 and 65 (inclusive)
        newOverallRiskLevel = 'Medium';
    }
    
    // Log the calculated values before updating state
    console.log(`Calculated Percent: ${newOverallRiskPercent}, Calculated Level: ${newOverallRiskLevel}`);

    statistics.value = {
      overallRiskPercent: newOverallRiskPercent, 
      overallRiskLevel: newOverallRiskLevel,
      highRiskFactorCount: Math.round(Math.random() * 20),
      mediumRiskFactorCount: Math.round(Math.random() * 30),
      lowRiskFactorCount: Math.round(Math.random() * 50),
    };
    
    // Simulate updating one category and one breakdown item
    // In reality, you'd recalculate all based on formData
    const updatedCategories = [...riskCategories.value];
    if (updatedCategories.length > 0) {
      updatedCategories[0] = { ...updatedCategories[0], percentage: Math.round(Math.random() * 100) };
    }
    riskCategories.value = updatedCategories;

    const updatedBreakdown = [...riskBreakdownItems.value];
    if (updatedBreakdown.length > 0 && updatedBreakdown[0].factors.length > 0) {
        updatedBreakdown[0].factors[0].description = "Description updated by form: " + Date.now();
    }
     riskBreakdownItems.value = updatedBreakdown;

    console.log("Store updated!");
  }

  // Return state and actions
  return { 
    statistics, 
    riskCategories, 
    riskBreakdownItems,
    updateAssessment
  }
}) 