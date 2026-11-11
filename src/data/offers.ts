/**
 * Slushman Digital offers, organized as the three-step plan:
 * Get found. Get chosen. Get them back.
 *
 * Every page that shows a price reads it from here, so a price change
 * only happens in one place.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface Tier {
  name: string;
  price: string;
  summary: string;
  featured?: boolean;
}

export interface Offer {
  id: string;
  name: string;
  tagline: string;
  /** Short price shown on cards, e.g. "From $399/mo". */
  fromPrice: string;
  /** Longer price explanation shown on the offer section. */
  priceDetail: string;
  includes: string[];
  tiers?: Tier[];
  minimum: string;
  goodFit: string[];
  notFit: string[];
  faqs: Faq[];
  badge?: string;
}

export interface Stage {
  slug: string;
  step: number;
  name: string;
  short: string;
  promise: string;
  problem: string;
  offers: Offer[];
}

export const stages: Stage[] = [
  {
    slug: 'get-found',
    step: 1,
    name: 'Get found',
    short: 'New customers find you first.',
    promise: 'Show up when people nearby search for what you do.',
    problem:
      'If you are not in the top few results on Google Maps, you are mostly invisible. People pick from what they see, and they rarely scroll.',
    offers: [
      {
        id: 'get-found-and-get-reviews',
        name: 'Get Found and Get Reviews',
        badge: 'Start here',
        tagline: 'Show up on Google Maps and give people a reason to pick you.',
        fromPrice: '$399/mo',
        priceDetail:
          '$399/mo, plus a one-time $399 profile audit and tune-up. Commit to 12 months and the tune-up is free.',
        includes: [
          'A full audit and tune-up of your Google Business Profile',
          'Fresh posts and photos on your profile every week',
          'Automatic review requests after every job or visit',
          'A reply to every review, good or otherwise',
          'Missed-call text-back, so a call you could not answer still turns into a conversation',
          'A monthly report of calls, direction requests, website clicks, and new reviews',
        ],
        minimum:
          '3 months. Local search takes a little while to move, and this gives it a fair shot.',
        goodFit: [
          'You serve customers in the Wentzville area',
          'You have happy customers who have never been asked for a review',
          'You want a small first step before anything bigger',
        ],
        notFit: [
          'You want fake reviews or review "gating". I do not do that, and Google does not like it either',
          'You do not have a physical location or service area',
        ],
        faqs: [
          {
            q: 'How fast will I see results?',
            a: 'Review requests start working the first week. Ranking changes on Google Maps usually show up over two to three months.',
          },
          {
            q: 'Do I have to sign a long contract?',
            a: 'No. The minimum is 3 months. After that it is month to month. The 12-month option just gets you the tune-up for free.',
          },
          {
            q: 'What does missed-call text-back do?',
            a: 'When you miss a call, the caller gets a friendly text from your business number right away. Most people would rather text than leave a voicemail anyway.',
          },
        ],
      },
      {
        id: 'grow-organic-leads',
        name: 'Grow Organic Leads',
        tagline: 'Become the business people already know before they need you.',
        fromPrice: 'From $2,299/mo',
        priceDetail:
          'Packages from $2,299/mo. Each one has a $1,499 launch fee. Need something in between? Let’s talk.',
        tiers: [
          {
            name: 'Blogs + Social',
            price: '$2,299/mo',
            summary:
              'A monthly interview with you becomes 4 to 5 blog posts written for search and AI answers, plus social posts to share them.',
          },
          {
            name: 'Long-form Video',
            price: '$3,499/mo',
            summary:
              'Everything in Blogs + Social, plus an on-site shoot each month that becomes 4 to 5 YouTube episodes and podcast episodes.',
          },
          {
            name: 'The Full Show',
            price: '$4,999/mo',
            featured: true,
            summary:
              'Everything in Long-form Video, plus about 30 short videos and daily posting. One shoot a month fills your channels for the whole month.',
          },
        ],
        includes: [
          'One monthly session with you. You talk about what you know, and I turn it into everything else',
          'Content written for Google search, AI answers (AEO), and AI assistants (GEO)',
          'Tracking links and call tracking, so we can see which content brings in customers',
          'A weekly dashboard and a monthly call about results, not just views',
        ],
        minimum: '6 months. Content compounds, and the first few months are the slow part.',
        goodFit: [
          'You know your trade and can talk about it for 15 minutes without notes',
          'You want customers who already trust you before they call',
          'You can commit to one session a month',
        ],
        notFit: [
          'You need leads this week. Look at ads or Win Back Old Leads first',
          'You would rather not be on camera at all. Blogs + Social works without it',
        ],
        faqs: [
          {
            q: 'Do I have to write anything?',
            a: 'No. You talk, I do the rest. You approve things before they go out.',
          },
          {
            q: 'How do you know it is working?',
            a: 'Every piece goes out with tracking links, and calls come in on tracking numbers. We count leads and booked jobs, not likes.',
          },
          {
            q: 'What is the launch fee for?',
            a: 'Setting up your channels, tracking, templates, and the first shoot plan. It is a one-time fee.',
          },
        ],
      },
      {
        id: 'get-leads-now-with-ads',
        name: 'Get Leads Now with Ads',
        tagline: 'Turn on the faucet while the slower stuff grows.',
        fromPrice: '$999/mo',
        priceDetail:
          '$999/mo for management, plus a one-time $5,000 setup. Ad spend goes straight to Google or Meta and is separate.',
        includes: [
          'Campaign setup on Google Ads, Local Services Ads, or Meta',
          'Conversion tracking, so we know which ads bring in customers',
          'Landing pages built to convert the clicks you pay for',
          'Ongoing testing of ads, keywords, and audiences',
          'A monthly report on leads, cost per lead, and booked jobs',
          'You own every ad account, always',
        ],
        minimum: '3 months. The first month is mostly learning what works.',
        goodFit: [
          'You need leads soon, not in six months',
          'You can answer the phone (or let missed-call text-back do it)',
          'You have room in your budget for ad spend on top of management',
        ],
        notFit: [
          'Your ad budget is very small. Management fees would eat most of it',
          'Your website is not ready to turn visitors into customers yet. Start with a website',
        ],
        faqs: [
          {
            q: 'How much should I spend on ads?',
            a: 'It depends on your market and what a customer is worth to you. We will figure out a starting budget together before anything goes live.',
          },
          {
            q: 'Who owns the ad accounts?',
            a: 'You do. If we ever part ways, you keep everything.',
          },
        ],
      },
    ],
  },
  {
    slug: 'get-chosen',
    step: 2,
    name: 'Get chosen',
    short: 'Visitors turn into customers.',
    promise: 'A website that makes picking you the obvious choice.',
    problem:
      'Most small business websites are digital brochures. They look fine and do nothing. People visit, shrug, and call someone else.',
    offers: [
      {
        id: 'website',
        name: 'A Website That Brings In Customers',
        tagline: 'Built to turn visitors into calls, bookings, and sales.',
        fromPrice: '$3,999',
        priceDetail:
          '$3,999 one-time. Starting out and want to keep monthly costs low? There is a monthly payment option on a 12-month term.',
        includes: [
          'A custom site built to get people to call, book, or buy',
          'Search optimization (SEO), plus optimization for AI answers (AEO) and AI assistants (GEO)',
          'Fast loading on phones, because that is where your customers are',
          'Every form and call goes into a CRM with automatic follow-up, so leads do not go cold',
          'Analytics and conversion tracking from day one',
          'You own the site',
        ],
        minimum: 'None for the one-time build. The monthly payment option is a 12-month term.',
        goodFit: [
          'Your current site is old, slow, or embarrassing',
          'People visit your site but do not call',
          'You want a site that works as hard as you do',
        ],
        notFit: [
          'You want 40 pages of everything you have ever done',
          'You need an online store with hundreds of products',
        ],
        faqs: [
          {
            q: 'How long does a build take?',
            a: 'Most sites launch in four to six weeks. The biggest factor is how quickly we get your content and photos.',
          },
          {
            q: 'Can I pay monthly instead?',
            a: 'Yes. The monthly option spreads the cost over 12 months. It costs a bit more in total than paying upfront.',
          },
          {
            q: 'What if I already have a site?',
            a: 'I will look at it with you first. Sometimes a tune-up is enough. Sometimes it is cheaper to start over.',
          },
        ],
      },
      {
        id: 'website-care',
        name: 'Website Care',
        tagline: 'Hosting, updates, and backups, so your site keeps working.',
        fromPrice: '$199/mo',
        priceDetail: '$199/mo, month to month.',
        includes: [
          'Hosting',
          'Security and software updates',
          'Backups',
          'Small content updates each month on sites I build',
          'A real person to email when something looks off',
        ],
        minimum: 'None. Month to month.',
        goodFit: [
          'You never want to think about plugins, updates, or hosting again',
          'You want small changes done without writing a support ticket',
        ],
        notFit: ['You like doing your own updates and have the time for it'],
        faqs: [
          {
            q: 'How many updates are included?',
            a: 'Small updates like new photos, hours, or a text change are included each month, up to a set limit. Bigger projects get quoted separately.',
          },
        ],
      },
    ],
  },
  {
    slug: 'get-them-back',
    step: 3,
    name: 'Get them back',
    short: 'Customers return and bring friends.',
    promise: 'Fill your calendar with people who already like you.',
    problem:
      'Getting a new customer costs a lot more than keeping one. Yet most businesses do nothing after the first visit, and those customers quietly drift away.',
    offers: [
      {
        id: 'keep-them-coming-back',
        name: 'Keep Them Coming Back',
        tagline: 'Fewer no-shows, fuller calendars, more repeat customers.',
        fromPrice: 'Pricing coming soon',
        priceDetail: 'Pricing coming soon. Email me and I will give you a quote.',
        includes: [
          'Everything in Get Found and Get Reviews',
          'Appointment reminders and confirmations by text and email',
          'Automatic rebooking when someone cancels',
          'Filling empty slots by inviting past customers back',
          'An optional loyalty program to reward regulars',
        ],
        minimum: '3 months.',
        goodFit: [
          'You run on appointments: salons, dentists, chiropractors, auto shops, groomers',
          'No-shows cost you money every week',
        ],
        notFit: ['You do not book appointments or see repeat customers'],
        faqs: [
          {
            q: 'Will this annoy my customers?',
            a: 'No. Reminders and rebooking messages are short, friendly, and only go to people who agreed to hear from you.',
          },
          {
            q: 'Do I need special software?',
            a: 'No. I set everything up and connect it to how you already book appointments where possible.',
          },
        ],
      },
      {
        id: 'win-back-old-leads',
        name: 'Win Back Old Leads',
        badge: 'Quick win',
        tagline: 'Turn the leads you already paid for into booked jobs.',
        fromPrice: 'Pricing coming soon',
        priceDetail: 'A one-time campaign. Pricing coming soon. Email me and I will give you a quote.',
        includes: [
          'A review of your old leads and past customers',
          'A friendly, personal re-engagement campaign by text and email',
          'Replies handled quickly so interested people get booked',
          'A report of every appointment the campaign booked',
        ],
        minimum: 'None. It is a one-time campaign.',
        goodFit: [
          'You have a list of people who asked about your services and never booked',
          'You want results in weeks, not months',
        ],
        notFit: [
          'Your contacts never agreed to hear from you. Texting them without consent can bring real fines',
        ],
        faqs: [
          {
            q: 'Is this legal?',
            a: 'Yes, when it is done right. We only contact people who gave you permission, from a properly registered number.',
          },
        ],
      },
    ],
  },
];

export const allOffers = stages.flatMap((stage) =>
  stage.offers.map((offer) => ({ ...offer, stage })),
);

/** The site's single call to action, used in the header, hero, and closing band. */
export const primaryCta = {
  label: 'Start with Get Found',
  href: '/services/get-found/#get-found-and-get-reviews',
};
