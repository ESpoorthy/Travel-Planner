// Comprehensive destination data with detailed day-by-day plans

export const DESTINATIONS = {
  hyderabad: {
    name: "Hyderabad",
    country: "India",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    dayPlans: {
      1: {
        morning: {
          name: "Check-in at Hotel near Hitech City & IT Hub Tour",
          cost: 0,
          hours: 3,
          diff: "Easy",
          icon: "🏨",
          location: "Hitech City, Madhapur, Hyderabad",
          coordinates: { lat: 17.4485, lng: 78.3908 },
          description: "Stay near Hyderabad's IT hub. Explore modern tech parks, Google, Microsoft, Amazon offices. Visit Inorbit Mall and Cyber Towers."
        },
        afternoon: {
          name: "Lunch at Paradise Biryani (Original)",
          cost: 350,
          hours: 1.5,
          diff: "Easy",
          icon: "🍛",
          location: "Paradise Circle, Secunderabad",
          coordinates: { lat: 17.4399, lng: 78.4983 },
          description: "Experience authentic Hyderabadi Biryani at the legendary Paradise Restaurant. Try their signature chicken or mutton dum biryani with raita and mirchi ka salan."
        },
        evening: {
          name: "Boating at Durgam Cheruvu (Secret Lake)",
          cost: 100,
          hours: 2,
          diff: "Easy",
          icon: "🚣",
          location: "Durgam Cheruvu, Madhapur",
          coordinates: { lat: 17.4504, lng: 78.3808 },
          description: "Enjoy pedal boating in the scenic Secret Lake surrounded by rocks and greenery. Beautiful sunset views with Hitech City skyline backdrop."
        },
        night: {
          name: "Dinner at Tatva (Aesthetic Telugu Restaurant)",
          cost: 600,
          hours: 2,
          diff: "Easy",
          icon: "🍽️",
          location: "Jubilee Hills, Hyderabad",
          coordinates: { lat: 17.4239, lng: 78.4138 },
          description: "Fine dining Telugu cuisine in aesthetic ambiance. Try Gongura Mutton, Natu Kodi Pulusu. Other options: Rayalaseema Ruchulu, Chutneys, Ulavacharu."
        }
      },
      2: {
        morning: {
          name: "Travel to Charminar & Check-in Hotel near Old City",
          cost: 0,
          hours: 2,
          diff: "Easy",
          icon: "🏨",
          location: "Near Charminar, Old City",
          coordinates: { lat: 17.3616, lng: 78.4747 },
          description: "Move to heritage area. Stay near Charminar for authentic old city experience. Explore narrow lanes and Mughal architecture."
        },
        afternoon: {
          name: "Charminar Monument & Laad Bazaar Shopping",
          cost: 50,
          hours: 3,
          diff: "Easy",
          icon: "🕌",
          location: "Charminar, Old City",
          coordinates: { lat: 17.3616, lng: 78.4747 },
          description: "Visit iconic 400-year-old Charminar. Climb 149 steps for city views. Shop for bangles, pearls, and Hyderabadi jewelry at Laad Bazaar."
        },
        evening: {
          name: "Mecca Masjid & Chowmahalla Palace",
          cost: 100,
          hours: 2,
          diff: "Easy",
          icon: "🏛️",
          location: "Near Charminar",
          coordinates: { lat: 17.3612, lng: 78.4731 },
          description: "Visit one of India's largest mosques. Explore Nizam's palace with vintage cars, Belgian crystal chandeliers, and royal artifacts."
        },
        night: {
          name: "Midnight Charminar Exploration & Street Food",
          cost: 200,
          hours: 2,
          diff: "Easy",
          icon: "🌙",
          location: "Charminar Area",
          coordinates: { lat: 17.3616, lng: 78.4747 },
          description: "Experience illuminated Charminar at night. Try Haleem, Lukhmi, Patthar ka Gosht at street stalls. Shop till midnight in bustling bazaars."
        }
      },
      3: {
        morning: {
          name: "Irani Chai & Osmania Biscuits Breakfast",
          cost: 50,
          hours: 1,
          diff: "Easy",
          icon: "☕",
          location: "Nimrah Cafe, Charminar",
          coordinates: { lat: 17.3615, lng: 78.4746 },
          description: "Start day with authentic Irani chai and Osmania/Karachi biscuits at iconic Nimrah Cafe. Try Bun Maska and Kheema Samosa."
        },
        afternoon: {
          name: "Birla Mandir (Lakshmi Narayan Temple)",
          cost: 0,
          hours: 2,
          diff: "Easy",
          icon: "🛕",
          location: "Naubat Pahad, Hyderabad",
          coordinates: { lat: 17.4062, lng: 78.4691 },
          description: "White marble temple on hilltop with panoramic city views. Peaceful atmosphere with intricate carvings. Best visited during sunset."
        },
        evening: {
          name: "Hussain Sagar Lake & Buddha Statue",
          cost: 100,
          hours: 2,
          diff: "Easy",
          icon: "⛵",
          location: "Tank Bund, Hyderabad",
          coordinates: { lat: 17.4239, lng: 78.4738 },
          description: "Boat ride to see world's tallest monolithic Buddha statue (18m). Enjoy Tank Bund promenade with street food and city lights."
        },
        night: {
          name: "Dinner at Shah Ghouse Cafe",
          cost: 300,
          hours: 1.5,
          diff: "Easy",
          icon: "🍖",
          location: "Tolichowki, Hyderabad",
          coordinates: { lat: 17.3987, lng: 78.4102 },
          description: "Famous for late-night biryani and kebabs. Try Mutton Seekh Kebabs, Brain Fry, and their special biryani. Open till 2 AM."
        }
      },
      4: {
        morning: {
          name: "Golconda Fort Exploration",
          cost: 100,
          hours: 3,
          diff: "Medium",
          icon: "🏰",
          location: "Golconda, Hyderabad",
          coordinates: { lat: 17.3833, lng: 78.4011 },
          description: "Explore 13th-century fort with acoustic system. Climb to top for stunning views. Visit Fateh Rahben gun and royal palaces."
        },
        afternoon: {
          name: "Qutb Shahi Tombs & Lunch at Bawarchi",
          cost: 400,
          hours: 3,
          diff: "Easy",
          icon: "⚱️",
          location: "Ibrahim Bagh, Hyderabad",
          coordinates: { lat: 17.3894, lng: 78.3931 },
          description: "Visit royal tombs with Indo-Persian architecture. Then lunch at Bawarchi for authentic biryani. Try their special chicken 65 and double ka meetha."
        },
        evening: {
          name: "Ramoji Film City Tour",
          cost: 800,
          hours: 5,
          diff: "Easy",
          icon: "🎬",
          location: "Ramoji Film City, Hyderabad",
          coordinates: { lat: 17.2543, lng: 78.6808 },
          description: "World's largest film studio. Guided tour of film sets, gardens, and live shows. Experience Bollywood magic with stunt shows and movie sets."
        },
        night: {
          name: "Dinner at Jewel of Nizam (Falaknuma Palace)",
          cost: 1500,
          hours: 2,
          diff: "Easy",
          icon: "👑",
          location: "Falaknuma Palace, Hyderabad",
          coordinates: { lat: 17.3289, lng: 78.4630 },
          description: "Royal dining experience at Taj Falaknuma Palace. Authentic Nizami cuisine in opulent setting. Advance booking required."
        }
      },
      5: {
        morning: {
          name: "Salar Jung Museum",
          cost: 50,
          hours: 3,
          diff: "Easy",
          icon: "🏺",
          location: "Darulshifa, Hyderabad",
          coordinates: { lat: 17.3713, lng: 78.4804 },
          description: "One of India's largest museums. See Veiled Rebecca sculpture, vintage clocks, Mughal miniatures, and artifacts from around the world."
        },
        afternoon: {
          name: "Lunch at Cafe Bahar & Necklace Road",
          cost: 350,
          hours: 3,
          diff: "Easy",
          icon: "🍴",
          location: "Basheerbagh & Necklace Road",
          coordinates: { lat: 17.4126, lng: 78.4656 },
          description: "Lunch at Cafe Bahar for biryani. Then stroll along Necklace Road with lake views, musical fountain, and Lumbini Park."
        },
        evening: {
          name: "Shilparamam Arts & Crafts Village",
          cost: 100,
          hours: 2,
          diff: "Easy",
          icon: "🎨",
          location: "Madhapur, Hyderabad",
          coordinates: { lat: 17.4504, lng: 78.3808 },
          description: "Cultural village showcasing Indian handicrafts, tribal art, and traditional performances. Shop for souvenirs and watch artisans at work."
        },
        night: {
          name: "Farewell Dinner at Ohri's Gufaa",
          cost: 500,
          hours: 2,
          diff: "Easy",
          icon: "🍽️",
          location: "Road No. 1, Banjara Hills",
          coordinates: { lat: 17.4126, lng: 78.4467 },
          description: "Unique cave-themed restaurant. Multi-cuisine with Hyderabadi specialties. Perfect ambiance for farewell dinner with live music."
        }
      }
    }
  },

  goa: {
    name: "Goa",
    country: "India",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    dayPlans: {
      1: {
        morning: {
          name: "Arrival & Check-in at North Goa Beach Resort",
          cost: 0,
          hours: 2,
          diff: "Easy",
          icon: "🏖️",
          location: "Calangute/Baga Beach Area",
          coordinates: { lat: 15.5430, lng: 73.7551 },
          description: "Check into beachfront resort. Relax and freshen up. Explore nearby Calangute Beach, known as 'Queen of Beaches'."
        },
        afternoon: {
          name: "Lunch at Britto's & Beach Activities",
          cost: 400,
          hours: 3,
          diff: "Easy",
          icon: "🍤",
          location: "Baga Beach",
          coordinates: { lat: 15.5559, lng: 73.7516 },
          description: "Seafood lunch at iconic Britto's beach shack. Try Goan fish curry, prawn balchão. Enjoy parasailing, jet skiing, or banana boat rides."
        },
        evening: {
          name: "Fort Aguada Sunset & Lighthouse",
          cost: 50,
          hours: 2,
          diff: "Easy",
          icon: "🏰",
          location: "Candolim, North Goa",
          coordinates: { lat: 15.4897, lng: 73.7732 },
          description: "17th-century Portuguese fort with stunning sunset views. Visit lighthouse and old jail. Perfect for photography."
        },
        night: {
          name: "Tito's Lane Nightlife Experience",
          cost: 800,
          hours: 3,
          diff: "Easy",
          icon: "🎉",
          location: "Tito's Lane, Baga",
          coordinates: { lat: 15.5559, lng: 73.7516 },
          description: "Experience Goa's famous nightlife. Visit Tito's, Cafe Mambo, and Cape Town Cafe. Live music, dancing, and beach parties."
        }
      },
      2: {
        morning: {
          name: "Dudhsagar Waterfall Trek & Jeep Safari",
          cost: 2500,
          hours: 6,
          diff: "Hard",
          icon: "🏞️",
          location: "Dudhsagar Falls, Mollem",
          coordinates: { lat: 15.3144, lng: 74.3144 },
          description: "Early morning jeep safari through Mollem forest. Trek to India's 5th tallest waterfall. Swim in natural pool. Packed breakfast included."
        },
        afternoon: {
          name: "Spice Plantation Tour with Traditional Lunch",
          cost: 1000,
          hours: 3,
          diff: "Easy",
          icon: "🌿",
          location: "Sahakari Spice Farm, Ponda",
          coordinates: { lat: 15.4009, lng: 74.0118 },
          description: "Guided tour of spice gardens. See cardamom, pepper, vanilla growing. Traditional Goan thali lunch. Optional elephant bath."
        },
        evening: {
          name: "Old Goa Churches Tour",
          cost: 0,
          hours: 2,
          diff: "Easy",
          icon: "⛪",
          location: "Old Goa",
          coordinates: { lat: 15.5008, lng: 73.9114 },
          description: "Visit UNESCO sites: Basilica of Bom Jesus, Se Cathedral. See St. Francis Xavier's preserved body. Beautiful baroque architecture."
        },
        night: {
          name: "Dinner Cruise on Mandovi River",
          cost: 1200,
          hours: 2,
          diff: "Easy",
          icon: "🛳️",
          location: "Panaji Jetty",
          coordinates: { lat: 15.4909, lng: 73.8278 },
          description: "Sunset cruise with buffet dinner. Live Goan folk music and dance performances. See illuminated Panaji cityscape."
        }
      },
      3: {
        morning: {
          name: "Scuba Diving at Grande Island",
          cost: 3500,
          hours: 4,
          diff: "Medium",
          icon: "🤿",
          location: "Grande Island, Goa",
          coordinates: { lat: 15.4909, lng: 73.7271 },
          description: "Boat ride to Grande Island. Professional scuba diving with certified instructors. See coral reefs, tropical fish, and underwater caves."
        },
        afternoon: {
          name: "Lunch at Fisherman's Wharf & Panjim Heritage Walk",
          cost: 900,
          hours: 3,
          diff: "Easy",
          icon: "🏘️",
          location: "Panjim, Goa",
          coordinates: { lat: 15.4909, lng: 73.8278 },
          description: "Goan-Portuguese fusion lunch. Walk through Fontainhas Latin Quarter with colorful Portuguese houses. Visit art galleries and cafes."
        },
        evening: {
          name: "Anjuna Flea Market Shopping",
          cost: 500,
          hours: 2,
          diff: "Easy",
          icon: "🛍️",
          location: "Anjuna Beach",
          coordinates: { lat: 15.5736, lng: 73.7401 },
          description: "Famous Wednesday flea market (if available). Shop for handicrafts, jewelry, clothes. Try local snacks and fresh fruit juices."
        },
        night: {
          name: "Beach Shack Dinner at Curlies",
          cost: 1000,
          hours: 2,
          diff: "Easy",
          icon: "🦞",
          location: "Anjuna Beach",
          coordinates: { lat: 15.5736, lng: 73.7401 },
          description: "Iconic beach shack with feet-in-sand dining. Fresh seafood BBQ, cocktails, and live music. Watch waves under starlit sky."
        }
      }
    }
  },

  // Add more destinations with similar detailed structure
  bali: {
    name: "Bali",
    country: "Indonesia",
    coordinates: { lat: -8.3405, lng: 115.0920 },
    dayPlans: {
      1: {
        morning: {
          name: "Arrival Ngurah Rai Airport & Ubud Check-in",
          cost: 0,
          hours: 3,
          diff: "Easy",
          icon: "🏨",
          location: "Ubud, Bali",
          coordinates: { lat: -8.5069, lng: 115.2625 },
          description: "Transfer to Ubud cultural heart. Check into jungle resort. Explore Ubud Palace and traditional market."
        },
        afternoon: {
          name: "Tegalalang Rice Terraces & Jungle Swing",
          cost: 500,
          hours: 3,
          diff: "Easy",
          icon: "🌾",
          location: "Tegalalang, Ubud",
          coordinates: { lat: -8.4344, lng: 115.2825 },
          description: "Walk through UNESCO rice paddies. Try famous Bali swing over jungle. Coffee plantation visit with luwak coffee tasting."
        },
        evening: {
          name: "Sacred Monkey Forest Sanctuary",
          cost: 800,
          hours: 2,
          diff: "Easy",
          icon: "🐒",
          location: "Monkey Forest, Ubud",
          coordinates: { lat: -8.5189, lng: 115.2585 },
          description: "Ancient temple complex with 700+ monkeys. Walk through sacred forest. See moss-covered statues and holy springs."
        },
        night: {
          name: "Dinner at Locavore (Fine Dining)",
          cost: 4000,
          hours: 2,
          diff: "Easy",
          icon: "🍽️",
          location: "Ubud Center",
          coordinates: { lat: -8.5069, lng: 115.2625 },
          description: "Asia's 50 Best Restaurants. Modern Indonesian cuisine with local ingredients. Tasting menu experience. Book in advance."
        }
      },
      2: {
        morning: {
          name: "Mount Batur Sunrise Trek",
          cost: 4500,
          hours: 6,
          diff: "Hard",
          icon: "🌋",
          location: "Mount Batur, Kintamani",
          coordinates: { lat: -8.2425, lng: 115.3751 },
          description: "2 AM start for summit trek. Watch sunrise from active volcano. Breakfast cooked by volcanic steam. Hot springs after descent."
        },
        afternoon: {
          name: "Tirta Empul Holy Water Temple",
          cost: 300,
          hours: 2,
          diff: "Easy",
          icon: "⛲",
          location: "Tampaksiring, Bali",
          coordinates: { lat: -8.4153, lng: 115.3153 },
          description: "Sacred water temple with purification pools. Participate in cleansing ritual. Beautiful temple architecture and koi ponds."
        },
        evening: {
          name: "Tanah Lot Temple Sunset",
          cost: 600,
          hours: 2,
          diff: "Easy",
          icon: "🛕",
          location: "Tanah Lot, Tabanan",
          coordinates: { lat: -8.6211, lng: 115.0868 },
          description: "Iconic sea temple on rocky outcrop. Best sunset spot in Bali. Traditional Kecak dance performance available."
        },
        night: {
          name: "Jimbaran Seafood BBQ on Beach",
          cost: 2000,
          hours: 2,
          diff: "Easy",
          icon: "🦞",
          location: "Jimbaran Bay",
          coordinates: { lat: -8.7689, lng: 115.1631 },
          description: "Choose fresh seafood, grilled on beach. Candlelit dinner with toes in sand. Watch fishing boats and sunset."
        }
      },
      3: {
        morning: {
          name: "Balinese Cooking Class with Market Tour",
          cost: 2500,
          hours: 4,
          diff: "Medium",
          icon: "👨‍🍳",
          location: "Ubud Traditional Market",
          coordinates: { lat: -8.5069, lng: 115.2625 },
          description: "Morning market tour for ingredients. Learn 5 traditional dishes. Hands-on cooking in traditional kitchen. Take recipes home."
        },
        afternoon: {
          name: "White Water Rafting Ayung River",
          cost: 3000,
          hours: 3,
          diff: "Medium",
          icon: "🚣",
          location: "Ayung River, Ubud",
          coordinates: { lat: -8.5069, lng: 115.2625 },
          description: "Navigate class II-III rapids through jungle. See waterfalls and carved stone walls. Lunch included after rafting."
        },
        evening: {
          name: "Uluwatu Temple & Kecak Fire Dance",
          cost: 1000,
          hours: 3,
          diff: "Easy",
          icon: "🔥",
          location: "Uluwatu, Bali",
          coordinates: { lat: -8.8290, lng: 115.0849 },
          description: "Clifftop temple with ocean views. Watch traditional Kecak fire dance at sunset. Dramatic Ramayana performance."
        },
        night: {
          name: "Dinner at Rock Bar Ayana Resort",
          cost: 3500,
          hours: 2,
          diff: "Easy",
          icon: "🍹",
          location: "Jimbaran, Bali",
          coordinates: { lat: -8.7689, lng: 115.1631 },
          description: "Bar on rocks above ocean. Sunset cocktails and Mediterranean cuisine. Arrive early for cable car access."
        }
      }
    }
  }
};

// Currency conversion rates (base: INR — all activity costs stored in INR)
export const CURRENCIES = {
  INR: { symbol: "₹", name: "Indian Rupee",      rate: 1 },
  USD: { symbol: "$", name: "US Dollar",          rate: 0.012 },
  EUR: { symbol: "€", name: "Euro",               rate: 0.011 },
  GBP: { symbol: "£", name: "British Pound",      rate: 0.0095 },
  JPY: { symbol: "¥", name: "Japanese Yen",       rate: 1.79 },
  AUD: { symbol: "A$", name: "Australian Dollar", rate: 0.018 },
  CAD: { symbol: "C$", name: "Canadian Dollar",   rate: 0.016 },
  AED: { symbol: "د.إ", name: "UAE Dirham",       rate: 0.044 },
  SGD: { symbol: "S$", name: "Singapore Dollar",  rate: 0.016 },
  CNY: { symbol: "¥", name: "Chinese Yuan",       rate: 0.087 },
};

// Helper to find destination by name
export function findDestination(searchTerm) {
  if (!searchTerm) return null;
  const term = searchTerm.toLowerCase().trim();
  
  const exactMatch = Object.values(DESTINATIONS).find(
    dest => dest.name.toLowerCase() === term
  );
  if (exactMatch) return exactMatch;
  
  return Object.values(DESTINATIONS).find(
    dest => dest.name.toLowerCase().includes(term) || term.includes(dest.name.toLowerCase())
  );
}

// Get all destination names
export function getDestinationNames() {
  return Object.values(DESTINATIONS).map(d => d.name);
}

// Get activities for a specific day
export function getDayPlan(destination, dayNumber) {
  if (!destination || !destination.dayPlans) return null;
  return destination.dayPlans[dayNumber] || null;
}

// Build itinerary from day plans
export function buildItineraryFromDayPlans(destination, numDays) {
  if (!destination || !destination.dayPlans) return [];
  
  const itinerary = [];
  const availableDays = Object.keys(destination.dayPlans).length;
  
  for (let day = 1; day <= numDays; day++) {
    const dayPlan = destination.dayPlans[day] || destination.dayPlans[day % availableDays || availableDays];
    
    if (dayPlan) {
      const activities = [
        dayPlan.morning,
        dayPlan.afternoon,
        dayPlan.evening,
        dayPlan.night
      ].filter(Boolean);
      
      const dayCost = activities.reduce((sum, act) => sum + (act.cost || 0), 0);
      
      itinerary.push({
        day,
        activities,
        dayCost: dayCost + 800 // Add meals & transport
      });
    }
  }
  
  return itinerary;
}
