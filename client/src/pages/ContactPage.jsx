import React from 'react';
import ContactDialog from '../components/Contact/ContactDialog';
import FeedbackForm from '../components/Contact/FeedBackForm';

const ContactPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#04000D] flex items-center justify-center py-16 px-4">
      
      {/* This container is now simplified to just arrange the components with a gap. */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8">
        
        {/* The Contact Dialog Component */}
        <ContactDialog />
        
        {/* The Feedback Form Component (no longer in a wrapper div) */}
        <FeedbackForm />

      </div>
    </main>
  );
};

export default ContactPage;
