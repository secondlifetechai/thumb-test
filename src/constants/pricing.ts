export type PlanFeature = {
    text: string;
    included: boolean;
};

export type Plan = {
    name: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Basic",
        description: "For small teams and individual recruiters",
        price: {
            monthly: 19,
            yearly: 190,
        },
        features: [
            { text: "Unlimited Video Calls", included: true },
            { text: "Screen Sharing", included: true },
            { text: "Basic Interview Recording (Up to 5 per month)", included: true },
            { text: "Candidate Management Dashboard", included: true },
            { text: "AI Insights", included: false },
            { text: "Advanced Analytics", included: false },
        ],
    },
    {
        name: "Professional",
        description: "For growing recruitment agencies and businesses",
        price: {
            monthly: 49,
            yearly: 490,
        },
        popular: true,
        features: [
            { text: "Unlimited Video Calls", included: true },
            { text: "Screen Sharing", included: true },
            { text: "Unlimited Interview Recording", included: true },
            { text: "Candidate Management Dashboard", included: true },
            { text: "AI Insights", included: true },
            { text: "Advanced Analytics", included: true },
        ],
    },
    {
        name: "Enterprise",
        description: "For large organizations and enterprises",
        price: {
            monthly: 99,
            yearly: 990,
        },
        features: [
            { text: "Unlimited Video Calls", included: true },
            { text: "Screen Sharing", included: true },
            { text: "Unlimited Interview Recording", included: true },
            { text: "Candidate Management Dashboard", included: true },
            { text: "AI Insights & Smart Hiring Analytics", included: true },
            { text: "API Access & Custom Integrations", included: true },
        ],
    },
];
