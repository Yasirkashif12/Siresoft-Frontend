import React from 'react';
import { Button } from '../common';

/**
 * PlanCard component - Individual subscription plan card
 * @param {Object} props - Component props
 * @param {Object} props.plan - Plan data object
 * @param {string} props.plan.name - Plan name
 * @param {string} props.plan.description - Plan description
 * @param {boolean} [props.plan.highlighted] - Highlight as featured plan
 * @param {Array} props.plan.features - List of features
 */
const PlanCard = ({ plan }) => (
  <article 
    className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
    aria-label={`${plan.name} pricing plan`}
  >
    {plan.highlighted && (
      <div className="h-2 bg-green-600" aria-hidden="true"></div>
    )}
    <div className="p-5 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-sm sm:text-base text-gray-600">{plan.description}</p>
      <hr className="my-4 sm:my-6 border-gray-200" aria-hidden="true"/>
      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="mr-2" aria-hidden="true">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-6 sm:mt-8 w-full sm:w-auto text-sm">
        View Details
      </Button>
    </div>
  </article>
);

export default React.memo(PlanCard);
