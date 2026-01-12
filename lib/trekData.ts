import { Trek } from '@/types'

export const trekDetails: Record<string, Trek> = {
  'everest-base-camp-trek': {
    id: '1',
    slug: 'everest-base-camp-trek',
    name: 'Everest Base Camp Trek',
    region: 'Nepal',
    startLocation: 'Kathmandu, Nepal',
    duration: 14,
    difficulty: 'Difficult',
    maxAltitude: 5364,
    price: 45000,
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920',
    nextDeparture: '2024-04-15',
    slotsLeft: 8,
    badge: 'Filling Fast',
    tagline: 'Journey to the roof of the world',
    bestSeason: 'March - May, September - November',
    story: [
      "The Everest Base Camp Trek is more than a journey—it&apos;s a pilgrimage to the heart of the Himalayas. Every step takes you closer to the world&apos;s highest peak, through Sherpa villages, ancient monasteries, and landscapes that redefine your understanding of beauty.",
      "This iconic trek follows in the footsteps of legendary mountaineers, taking you through diverse terrain from lush rhododendron forests to the stark beauty of high-altitude landscapes. Along the way, you'll experience the rich Sherpa culture, witness breathtaking sunrises over snow-capped peaks, and push your limits in the most rewarding way possible.",
      "Our carefully planned itinerary ensures proper acclimatization, allowing you to fully appreciate the journey while maintaining safety as our top priority. With experienced guides, comfortable tea house accommodations, and comprehensive support, this trek becomes an adventure you'll remember for a lifetime."
    ],
    highlights: [
      'Witness sunrise over Mount Everest from Kala Patthar',
      'Visit Tengboche Monastery, the spiritual heart of the Khumbu',
      'Experience authentic Sherpa culture in traditional villages',
      'Photograph rhododendron forests and glacial landscapes',
      'Trek through Sagarmatha National Park, a UNESCO World Heritage Site'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Upon arrival at Tribhuvan International Airport, you\'ll be greeted by our team and transferred to your hotel. Take the day to rest, explore Thamel, and prepare for your adventure. Evening briefing session with your guide.',
        stayType: 'Hotel in Kathmandu',
        activities: ['Airport pickup and hotel check-in', 'Welcome dinner', 'Gear check and briefing']
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding (2,651m)',
        description: 'Early morning flight to Lukla, one of the world\'s most thrilling airport landings. After landing, begin your trek with a gentle descent to Phakding, following the Dudh Koshi River.',
        distance: '8 km',
        elevationGain: '-200m',
        stayType: 'Tea house'
      },
      {
        day: 3,
        title: 'Trek to Namche Bazaar (3,440m)',
        description: 'Cross suspension bridges and enter Sagarmatha National Park. The trail gradually ascends to Namche Bazaar, the bustling Sherpa capital and gateway to Everest.',
        distance: '12 km',
        elevationGain: '+789m',
        stayType: 'Tea house'
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Rest day for acclimatization. Optional hike to Everest View Hotel for your first glimpse of Mount Everest, or explore the local markets and Sherpa Museum.',
        stayType: 'Tea house'
      },
      {
        day: 5,
        title: 'Trek to Tengboche (3,867m)',
        description: 'Descend to the river, then climb through rhododendron forests to Tengboche Monastery, the largest monastery in the Khumbu region.',
        distance: '10 km',
        elevationGain: '+427m',
        stayType: 'Tea house'
      },
      {
        day: 6,
        title: 'Trek to Dingboche (4,410m)',
        description: 'Continue through alpine meadows and yak pastures, with stunning views of Ama Dablam. Arrive at Dingboche, a beautiful village surrounded by stone walls.',
        distance: '12 km',
        elevationGain: '+543m',
        stayType: 'Tea house'
      },
      {
        day: 7,
        title: 'Acclimatization Day in Dingboche',
        description: 'Another rest day for acclimatization. Optional hike to Nagarjun Hill for panoramic mountain views.',
        stayType: 'Tea house'
      },
      {
        day: 8,
        title: 'Trek to Lobuche (4,940m)',
        description: 'Ascend to the memorials of climbers who lost their lives on Everest. The landscape becomes more barren as you approach Lobuche.',
        distance: '7 km',
        elevationGain: '+530m',
        stayType: 'Tea house'
      },
      {
        day: 9,
        title: 'Trek to Gorak Shep, then Everest Base Camp (5,364m)',
        description: 'Early start to Gorak Shep, then continue to Everest Base Camp. Walk among the tents of expedition teams and witness the Khumbu Icefall up close.',
        distance: '14 km',
        elevationGain: '+424m',
        stayType: 'Tea house'
      },
      {
        day: 10,
        title: 'Kala Patthar (5,545m), then descend to Pheriche',
        description: 'Early morning climb to Kala Patthar for the best views of Mount Everest at sunrise. Descend to Pheriche for the night.',
        distance: '16 km',
        elevationGain: '+181m / -1,000m',
        stayType: 'Tea house'
      },
      {
        day: 11,
        title: 'Trek to Namche Bazaar',
        description: 'Retrace your steps through beautiful valleys, descending back to Namche Bazaar.',
        distance: '15 km',
        stayType: 'Tea house'
      },
      {
        day: 12,
        title: 'Trek to Lukla',
        description: 'Final day of trekking, descending through forests and villages back to Lukla.',
        distance: '19 km',
        stayType: 'Tea house'
      },
      {
        day: 13,
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Rest of the day free for shopping and exploring.',
        stayType: 'Hotel in Kathmandu'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Transfer to airport for your departure flight.',
        activities: ['Airport transfer', 'Farewell']
      }
    ],
    inclusions: [
      'All accommodation (hotels in Kathmandu + tea houses during trek)',
      'All meals (breakfast, lunch, dinner)',
      'Experienced trekking guide',
      'Porter support (1 porter per 2 trekkers)',
      'All permits and entry fees (Sagarmatha National Park, TIMS)',
      'Airport transfers',
      'Domestic flights (Kathmandu - Lukla - Kathmandu)',
      'Medical kit and oxygen cylinder',
      'Certificate of completion'
    ],
    exclusions: [
      'International flights',
      'Travel insurance (mandatory)',
      'Personal trekking gear',
      'Tips for guides and porters',
      'Extra meals and beverages',
      'Emergency evacuation costs',
      'Visa fees'
    ],
    fitnessRequirements: [
      'Can walk 6-8 hours daily with a backpack',
      'Previous high-altitude trekking experience recommended',
      'Good cardiovascular fitness',
      'No major health issues',
      'Comfortable with basic accommodation'
    ],
    preparationTips: [
      'Start cardio training 2-3 months before',
      'Practice walking with a loaded backpack',
      'Focus on leg strength and endurance',
      'Acclimatize gradually if possible',
      'Mental preparation is equally important'
    ],
    safetyMeasures: 'Your safety is our priority. All guides are certified by the Nepal Mountaineering Association, carry comprehensive medical kits, and are trained in high-altitude first aid. We maintain small group sizes for better supervision and have emergency evacuation plans in place.',
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
      'https://images.unsplash.com/photo-1551524164-6cf77f5e7b8e?w=1200',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200'
    ],
    faqs: [
      {
        question: 'What is the best time to do this trek?',
        answer: 'The best months are March-May and September-November when weather is clear and stable. These periods offer the best visibility and comfortable temperatures.'
      },
      {
        question: 'Do I need travel insurance?',
        answer: 'Yes, comprehensive travel insurance covering high-altitude trekking and emergency evacuation is mandatory. Make sure your policy covers activities up to 6,000 meters.'
      },
      {
        question: 'What happens if I can\'t complete the trek?',
        answer: 'Our guides will assess your condition and arrange descent if needed. Partial refunds may apply depending on the circumstances. Your safety is always our priority.'
      },
      {
        question: 'What kind of accommodation will I stay in?',
        answer: 'In Kathmandu, you\'ll stay in comfortable hotels. During the trek, accommodation is in tea houses—basic but clean lodges run by local families. Rooms are typically twin-share with shared bathrooms.'
      },
      {
        question: 'How difficult is the trek?',
        answer: 'This is a challenging trek due to high altitude and long days. However, with proper preparation, acclimatization days, and our experienced guides, most people in good physical condition can complete it.'
      },
      {
        question: 'What should I pack?',
        answer: 'We provide a detailed packing list upon booking. Essentials include good trekking boots, warm layers, sleeping bag, headlamp, and personal items. Porters will carry most of your gear.'
      }
    ],
    packages: [
      {
        name: 'Base Package',
        price: 45000,
        description: 'Essential trekking experience with all basic amenities',
        inclusions: [
          'All accommodation',
          'All meals',
          'Guide and porter',
          'Permits and flights',
          'Basic support'
        ]
      },
      {
        name: 'Plus Package',
        price: 55000,
        description: 'Enhanced experience with additional comforts',
        recommended: true,
        inclusions: [
          'Everything in Base Package',
          'Better accommodation in Kathmandu',
          'Extra porter for personal gear',
          'Hot showers during trek',
          'Priority support'
        ]
      },
      {
        name: 'Premium Package',
        price: 65000,
        description: 'Luxury experience with maximum comfort',
        inclusions: [
          'Everything in Plus Package',
          'Luxury hotel in Kathmandu',
          'Private room during trek (where available)',
          'Extra acclimatization day',
          'Dedicated support team'
        ]
      }
    ]
  },
  'annapurna-circuit-trek': {
    id: '2',
    slug: 'annapurna-circuit-trek',
    name: 'Annapurna Circuit Trek',
    region: 'Nepal',
    startLocation: 'Pokhara, Nepal',
    duration: 16,
    difficulty: 'Difficult',
    maxAltitude: 5416,
    price: 48000,
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
    nextDeparture: '2024-05-01',
    slotsLeft: 12,
    badge: 'Upcoming',
    tagline: 'Complete circuit around the Annapurna massif',
    bestSeason: 'March - May, September - November',
    story: [
      "The Annapurna Circuit Trek is one of the world&apos;s most diverse and rewarding treks, taking you around the entire Annapurna massif through varied landscapes, cultures, and climates. From subtropical forests to high-altitude deserts, this trek offers an unparalleled Himalayan experience.",
      "This classic circuit trek showcases the incredible diversity of Nepal—from lush rice terraces and rhododendron forests to the stark beauty of the Tibetan plateau. You&apos;ll cross the formidable Thorong La Pass at 5,416 meters, visit ancient monasteries, and experience the unique culture of the Manang and Mustang regions.",
      "Our carefully planned itinerary ensures proper acclimatization with rest days in Manang, allowing you to fully appreciate the journey while maintaining safety. With experienced guides, comfortable accommodations, and comprehensive support, this trek becomes an adventure of a lifetime."
    ],
    highlights: [
      'Cross Thorong La Pass at 5,416 meters—one of the highest trekking passes',
      'Experience diverse landscapes from subtropical to high-altitude desert',
      'Visit ancient monasteries and experience Tibetan Buddhist culture',
      'Witness stunning views of Annapurna, Dhaulagiri, and Manaslu ranges',
      'Explore traditional villages of Manang and Mustang regions'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu (1,400m)',
        description: 'Welcome to Nepal! Upon arrival, you&apos;ll be transferred to your hotel. Evening briefing about the trek.',
        stayType: 'Hotel in Kathmandu',
        activities: ['Airport pickup', 'Welcome dinner', 'Trek briefing']
      },
      {
        day: 2,
        title: 'Drive to Besisahar, Trek to Bhulbhule (840m)',
        description: 'Scenic drive to Besisahar, then begin trekking to Bhulbhule along the Marsyangdi River.',
        distance: '6 km',
        elevationGain: '+200m',
        stayType: 'Tea house'
      },
      {
        day: 3,
        title: 'Trek to Jagat (1,300m)',
        description: 'Continue along the river, passing through several villages and suspension bridges.',
        distance: '8 km',
        elevationGain: '+460m',
        stayType: 'Tea house'
      },
      {
        day: 4,
        title: 'Trek to Dharapani (1,860m)',
        description: 'Enter the Manang district and notice the change in architecture and culture.',
        distance: '10 km',
        elevationGain: '+560m',
        stayType: 'Tea house'
      },
      {
        day: 5,
        title: 'Trek to Chame (2,670m)',
        description: 'Walk through pine forests with views of Annapurna II and Lamjung Himal.',
        distance: '15 km',
        elevationGain: '+810m',
        stayType: 'Tea house'
      },
      {
        day: 6,
        title: 'Trek to Pisang (3,200m)',
        description: 'Continue through forests and reach Pisang with stunning mountain views.',
        distance: '14 km',
        elevationGain: '+530m',
        stayType: 'Tea house'
      },
      {
        day: 7,
        title: 'Trek to Manang (3,540m)',
        description: 'Enter the Manang valley, a beautiful high-altitude desert landscape.',
        distance: '12 km',
        elevationGain: '+340m',
        stayType: 'Tea house'
      },
      {
        day: 8,
        title: 'Acclimatization Day in Manang',
        description: 'Rest day for acclimatization. Optional hike to Gangapurna Lake or visit the monastery.',
        stayType: 'Tea house'
      },
      {
        day: 9,
        title: 'Trek to Yak Kharka (4,050m)',
        description: 'Ascend gradually through alpine meadows, watching for blue sheep and yaks.',
        distance: '9 km',
        elevationGain: '+510m',
        stayType: 'Tea house'
      },
      {
        day: 10,
        title: 'Trek to Thorong Phedi (4,450m)',
        description: 'Short day to prepare for the pass crossing. Rest and hydrate.',
        distance: '7 km',
        elevationGain: '+400m',
        stayType: 'Tea house'
      },
      {
        day: 11,
        title: 'Cross Thorong La Pass (5,416m), Trek to Muktinath (3,800m)',
        description: 'Early start to cross the pass. Long descent to Muktinath, a sacred pilgrimage site.',
        distance: '17 km',
        elevationGain: '+966m / -1,616m',
        stayType: 'Tea house'
      },
      {
        day: 12,
        title: 'Trek to Jomsom (2,720m)',
        description: 'Descend through the Kali Gandaki valley, the world&apos;s deepest gorge.',
        distance: '20 km',
        elevationGain: '-1,080m',
        stayType: 'Tea house'
      },
      {
        day: 13,
        title: 'Fly to Pokhara',
        description: 'Morning flight to Pokhara. Rest of the day free to explore the lakeside.',
        stayType: 'Hotel in Pokhara'
      },
      {
        day: 14,
        title: 'Drive to Kathmandu',
        description: 'Scenic drive back to Kathmandu through the hills.',
        stayType: 'Hotel in Kathmandu'
      },
      {
        day: 15,
        title: 'Free Day in Kathmandu',
        description: 'Free day for shopping, sightseeing, or rest.',
        stayType: 'Hotel in Kathmandu'
      },
      {
        day: 16,
        title: 'Departure',
        description: 'Transfer to airport for your departure flight.',
        activities: ['Airport transfer', 'Farewell']
      }
    ],
    inclusions: [
      'All accommodation (hotels + tea houses)',
      'All meals during trek',
      'Experienced trekking guide',
      'Porter support (1 porter per 2 trekkers)',
      'All permits (ACAP, TIMS)',
      'Airport transfers',
      'Domestic flight (Jomsom - Pokhara)',
      'Ground transportation',
      'Medical kit and oxygen cylinder',
      'Certificate of completion'
    ],
    exclusions: [
      'International flights',
      'Travel insurance (mandatory)',
      'Personal trekking gear',
      'Tips for guides and porters',
      'Extra meals and beverages',
      'Emergency evacuation costs',
      'Visa fees',
      'Meals in Kathmandu and Pokhara'
    ],
    fitnessRequirements: [
      'Can walk 6-8 hours daily with a backpack',
      'Previous high-altitude trekking experience recommended',
      'Excellent cardiovascular fitness',
      'No major health issues',
      'Comfortable with basic accommodation'
    ],
    preparationTips: [
      'Start cardio training 3-4 months before',
      'Practice walking with a loaded backpack',
      'Focus on leg strength and endurance',
      'Acclimatize gradually if possible',
      'Mental preparation for high-altitude pass crossing'
    ],
    safetyMeasures: 'Your safety is our priority. All guides are certified and trained in high-altitude first aid. We maintain small group sizes, carry comprehensive medical kits, and have emergency evacuation plans in place. The Thorong La Pass crossing is carefully planned with early starts and proper acclimatization.',
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
      'https://images.unsplash.com/photo-1551524164-6cf77f5e7b8e?w=1200',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200'
    ],
    faqs: [
      {
        question: 'What is the best time to do the Annapurna Circuit?',
        answer: 'The best months are March-May and September-November. These periods offer clear weather, stable conditions, and the best views. Winter treks are possible but more challenging.'
      },
      {
        question: 'How difficult is crossing Thorong La Pass?',
        answer: 'The pass crossing is challenging due to altitude (5,416m) and requires an early start. However, with proper acclimatization, our experienced guides, and careful planning, most trekkers successfully cross it.'
      },
      {
        question: 'What is the accommodation like?',
        answer: 'Accommodation is in tea houses—basic but clean lodges. Rooms are typically twin-share with shared bathrooms. In Kathmandu and Pokhara, you&apos;ll stay in comfortable hotels.'
      },
      {
        question: 'Do I need previous trekking experience?',
        answer: 'Previous high-altitude trekking experience is recommended but not mandatory. Good physical fitness and mental preparation are essential. We provide comprehensive support throughout.'
      },
      {
        question: 'What happens if I can\'t cross the pass?',
        answer: 'Our guides will assess conditions and your fitness. If crossing isn&apos;t possible, alternative routes are available. Your safety is always our priority.'
      },
      {
        question: 'What should I pack?',
        answer: 'We provide a detailed packing list. Essentials include good trekking boots, warm layers (including down jacket), sleeping bag, headlamp, and personal items. Porters carry most gear.'
      }
    ],
    packages: [
      {
        name: 'Base Package',
        price: 48000,
        description: 'Essential trekking experience with all basic amenities',
        inclusions: [
          'All accommodation',
          'All meals during trek',
          'Guide and porter',
          'Permits and flights',
          'Basic support'
        ]
      },
      {
        name: 'Plus Package',
        price: 58000,
        description: 'Enhanced experience with additional comforts',
        recommended: true,
        inclusions: [
          'Everything in Base Package',
          'Better accommodation in cities',
          'Extra porter for personal gear',
          'Hot showers during trek',
          'Priority support'
        ]
      },
      {
        name: 'Premium Package',
        price: 68000,
        description: 'Luxury experience with maximum comfort',
        inclusions: [
          'Everything in Plus Package',
          'Luxury hotels in cities',
          'Private room during trek (where available)',
          'Extra acclimatization day',
          'Dedicated support team'
        ]
      }
    ]
  },
  'hampta-pass-trek': {
    id: '3',
    slug: 'hampta-pass-trek',
    name: 'Hampta Pass Trek',
    region: 'Himachal Pradesh, India',
    startLocation: 'Manali, India',
    duration: 5,
    difficulty: 'Moderate',
    maxAltitude: 4270,
    price: 18000,
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920',
    nextDeparture: '2024-04-20',
    slotsLeft: 15,
    badge: 'New',
    tagline: 'From lush valleys to stark deserts in 5 days',
    bestSeason: 'May - October',
    story: [
      "The Hampta Pass Trek is a perfect introduction to high-altitude trekking in the Indian Himalayas. This relatively short but spectacular trek takes you from the lush green valleys of Kullu to the stark, moon-like landscapes of Lahaul and Spiti.",
      "In just 5 days, you&apos;ll experience dramatic contrasts—from dense pine forests and gushing streams to high-altitude meadows and barren deserts. The trek culminates at Hampta Pass (4,270m), offering breathtaking views of the surrounding peaks and valleys.",
      "This trek is ideal for beginners looking to experience Himalayan trekking without the commitment of longer expeditions. With our experienced guides, comfortable camping arrangements, and comprehensive support, you&apos;ll have an unforgettable adventure in the heart of the Himalayas."
    ],
    highlights: [
      'Cross Hampta Pass at 4,270 meters with stunning panoramic views',
      'Experience dramatic landscape change from green valleys to desert',
      'Camp under starlit skies in pristine mountain settings',
      'Witness diverse flora and fauna of the Himalayan region',
      'Perfect introduction to high-altitude trekking'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali (2,050m)',
        description: 'Arrive in Manali and check into your hotel. Evening briefing about the trek and gear check.',
        stayType: 'Hotel in Manali',
        activities: ['Hotel check-in', 'Trek briefing', 'Gear check']
      },
      {
        day: 2,
        title: 'Drive to Jobra, Trek to Chika (3,100m)',
        description: 'Drive to Jobra, then begin trekking through forests to Chika campsite by the river.',
        distance: '2 km',
        elevationGain: '+1,050m',
        stayType: 'Camping'
      },
      {
        day: 3,
        title: 'Trek to Balu Ka Ghera (3,600m)',
        description: 'Continue through forests and meadows, crossing streams. Beautiful views of surrounding peaks.',
        distance: '5 km',
        elevationGain: '+500m',
        stayType: 'Camping'
      },
      {
        day: 4,
        title: 'Cross Hampta Pass (4,270m), Trek to Shea Goru (3,900m)',
        description: 'Early start to cross Hampta Pass. Witness the dramatic landscape change from green to desert. Descend to Shea Goru.',
        distance: '7 km',
        elevationGain: '+670m / -370m',
        stayType: 'Camping'
      },
      {
        day: 5,
        title: 'Trek to Chatru, Drive to Manali',
        description: 'Final descent to Chatru, then drive back to Manali. Trip concludes.',
        distance: '4 km',
        elevationGain: '-850m',
        stayType: 'Hotel in Manali',
        activities: ['Drive to Manali', 'Trip conclusion']
      }
    ],
    inclusions: [
      'All accommodation (hotel in Manali + camping during trek)',
      'All meals (breakfast, lunch, dinner)',
      'Experienced trekking guide',
      'Camping equipment (tents, sleeping bags, mattresses)',
      'Kitchen team and support staff',
      'All permits and entry fees',
      'Transportation (Manali - Jobra - Chatru - Manali)',
      'Medical kit',
      'Certificate of completion'
    ],
    exclusions: [
      'Transportation to/from Manali',
      'Travel insurance',
      'Personal trekking gear',
      'Tips for guides and staff',
      'Extra meals and beverages',
      'Emergency evacuation costs',
      'Any expenses due to natural calamities'
    ],
    fitnessRequirements: [
      'Can walk 4-6 hours daily with a backpack',
      'Basic fitness level',
      'No major health issues',
      'Comfortable with camping',
      'Age: 12-60 years recommended'
    ],
    preparationTips: [
      'Start walking 4-5 km daily 2-3 weeks before',
      'Practice walking on inclines',
      'Build basic cardiovascular fitness',
      'Get comfortable with carrying a daypack',
      'Mental preparation for camping and basic facilities'
    ],
    safetyMeasures: 'Your safety is our priority. All guides are experienced and trained in first aid. We maintain small group sizes, carry comprehensive medical kits, and have emergency evacuation plans. Weather conditions are monitored closely, and routes may be adjusted if needed.',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      'https://images.unsplash.com/photo-1551524164-6cf77f5e7b8e?w=1200',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200'
    ],
    faqs: [
      {
        question: 'What is the best time to do Hampta Pass Trek?',
        answer: 'The best time is May to October. May-June offers spring flowers, July-August has monsoon greenery, and September-October provides clear skies and stable weather.'
      },
      {
        question: 'Is this trek suitable for beginners?',
        answer: 'Yes! This is an ideal trek for beginners. The duration is short (5 days), altitude is moderate, and the difficulty level is manageable for people with basic fitness.'
      },
      {
        question: 'What kind of accommodation will I have?',
        answer: 'In Manali, you&apos;ll stay in a hotel. During the trek, accommodation is in tents with sleeping bags and mattresses provided. All camping equipment is included.'
      },
      {
        question: 'Do I need to carry my own camping gear?',
        answer: 'No, all camping equipment including tents, sleeping bags, and mattresses is provided. You only need to carry your personal items in a daypack.'
      },
      {
        question: 'What about food and water?',
        answer: 'All meals are provided and prepared by our kitchen team. Safe drinking water is provided at campsites. You should carry a water bottle for during the day.'
      },
      {
        question: 'How do I reach Manali?',
        answer: 'Manali is well-connected by road from Delhi (12-14 hours) and Chandigarh (8-9 hours). You can also fly to Kullu airport and drive to Manali (1 hour).'
      }
    ],
    packages: [
      {
        name: 'Base Package',
        price: 18000,
        description: 'Essential trekking experience with camping',
        inclusions: [
          'Hotel in Manali',
          'Camping accommodation',
          'All meals',
          'Guide and support staff',
          'Camping equipment',
          'Permits'
        ]
      },
      {
        name: 'Plus Package',
        price: 22000,
        description: 'Enhanced experience with better accommodation',
        recommended: true,
        inclusions: [
          'Everything in Base Package',
          'Better hotel in Manali',
          'Extra support staff',
          'Hot water for washing',
          'Priority support'
        ]
      },
      {
        name: 'Premium Package',
        price: 26000,
        description: 'Luxury experience with maximum comfort',
        inclusions: [
          'Everything in Plus Package',
          'Luxury hotel in Manali',
          'Extra day in Manali',
          'Dedicated support team',
          'Additional activities'
        ]
      }
    ]
  }
}
