import React from 'react';
import Card from './Card';

const OurApproach = () => {
  return (
    <section id="our-approach">
        <div className='container'>
            <h1 className='our-approuch-title'>Our Approuch</h1>
            <p className='our-approuch-text'>We are ready to provide personalized fitness plans and a supportive community to help you reach your health and wellness goals.</p>
            <div className='card-list'>
                <Card title="Support" icon="" description="Our gym fosters a supportive community to help you achieve your fitness goals. Join us today!"/>
                <Card title="Equipment" icon="" description="Achieve your best workout yet with our professional equipment. Designed to meet the needs of serious fitness enthusiasts."/>
                <Card title="Nutrions" icon="" description="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."/>
                <Card title="Workout" icon="" description="Certificate trainers will prepare the best optimized workout plan to meet your needs and unleash your potential."/>
            </div>
        </div>
    </section>
  )
}

export default OurApproach