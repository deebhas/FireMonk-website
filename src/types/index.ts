export type ServiceType = 'Consulting' | 'Auditing' | 'Training' | 'Training Only';

export type StandardCategory = 
  | 'Core ISO'
  | 'InfoSec, Tech & Privacy'
  | 'Risk Management'
  | 'Life Sciences & Pharma'
  | 'Aerospace & Automotive'
  | 'Sustainability & Governance';

export interface StandardItem {
  id: string;
  code: string;
  name: string;
  category: StandardCategory;
  shortDesc: string;
  fullDesc: string;
  services: ServiceType[];
  isTrainingOnly?: boolean;
  typicalTimeline: string;
  keyClauses: string[];
  deliverables: string[];
  targetAudience: string[];
  recommendedIndustries: string[];
  popular?: boolean;
}

export type IndustrySector = 
  | 'High-Tech & Software'
  | 'Life Sciences & Healthcare'
  | 'Heavy Industry & Manufacturing'
  | 'Corporate & Infrastructure';

export interface IndustryItem {
  id: IndustrySector;
  title: string;
  iconName: string;
  description: string;
  subSectors: string[];
  recommendedStandards: string[];
  keyChallenges: string[];
  benefits: string[];
}

export interface LeadSubmission {
  id: string;
  submittedAt: string;
  type: 'Custom Quote' | 'Express Booking';
  fullName: string;
  email: string;
  mobile: string;
  companyName?: string;
  employeeCount?: string;
  industry?: string;
  selectedStandards?: string[];
  servicesNeeded?: string[];
  projectTimeline?: string;
  comments?: string;
  bookingDate?: string;
  bookingTimeSlot?: string;
  consultationType?: string;
  status: 'New' | 'In Review' | 'Proposal Sent' | 'Scheduled' | 'Completed';
}

export interface ConsultationSlot {
  id: string;
  time: string;
  available: boolean;
}
