import React from 'react';
import { PlanCard } from '../../cards';
import { SUBSCRIPTION_PLANS } from '../../../constants';

const SubscriptionPlans = () => (
  <section 
    className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white" 
    aria-labelledby="plans-title"
  >
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <h2 id="plans-title" className="sr-only">Our Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {SUBSCRIPTION_PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

export default React.memo(SubscriptionPlans);
