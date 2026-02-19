// src/app/services/[id]/page.tsx
"use client";

import React from 'react';
import { useParams, notFound } from 'next/navigation';

// Import your bespoke layouts (We will build these next)
import CustomSoftwareLayout from '../layouts/CustomSoftwareLayout';
import DevOpsLayout from '../layouts/DevOpsLayout';
import UiUxLayout from '../layouts/UiUxLayout';
import WebDevelopmentLayout from '../layouts/WebDevelopmentLayout';
import MobileDevelopmentLayout from '../layouts/MobileDevelopmentLayout';
import WebAccessibilityLayout from '../layouts/WebAccessibiltyLayout';
import QualityAssuranceLayout from '../layouts/QualityAssuranceLayout';
import CodeAuditLayout from '../layouts/CodeAuditLayout';
import ITConsultingLayout from '../layouts/ITConsultingLayout';
import BusinessAnalysisLayout from '../layouts/BusinessAnalysisLayout';
// import MobileAppLayout from '../../../components/services/layouts/MobileAppLayout';

export default function ServiceDetail() {
  const params = useParams();
  const id = (Array.isArray(params?.id) ? params.id[0] : params?.id);

  // The Dispatcher Logic: Route to completely unique designs
  switch (id) {
    case 'custom-software':
      return <CustomSoftwareLayout />;
    
    case 'web-development':
      return <WebDevelopmentLayout />;
    
    case 'mobile-development':
      return <MobileDevelopmentLayout />;
    
    case 'web-accessibility':
      return <WebAccessibilityLayout />;
      
    case 'quality-assurance':
      return <QualityAssuranceLayout />;
    
    case 'code-audit':
      return <CodeAuditLayout />;
   
    case 'it-consulting':
      return <ITConsultingLayout />;
    
    case 'devops-as-a-service':
      return <DevOpsLayout />;
   
    case 'business-analysis':
      return <BusinessAnalysisLayout />;

    // case 'mobile-development':
    //   return <MobileAppLayout />;
    case 'ui-ux-design': 
      return <UiUxLayout />;

    default:
      // If the ID isn't found, trigger Next.js 404
      return notFound(); 
  }
}