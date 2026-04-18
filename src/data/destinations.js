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
  },

  paris: {
    name: "Paris",
    country: "France",
    coordinates: { lat: 48.8566, lng: 2.3522 },
    dayPlans: {
      1: {
        morning: {
          name: "Eiffel Tower Visit & Champ de Mars",
          cost: 2800, hours: 3, diff: "Easy", icon: "🗼",
          location: "Champ de Mars, 5 Av. Anatole France, Paris",
          coordinates: { lat: 48.8584, lng: 2.2945 },
          description: "Skip-the-line access to the iconic Eiffel Tower. Climb to the summit for panoramic Paris views. Stroll through Champ de Mars gardens."
        },
        afternoon: {
          name: "Lunch at Café de Flore & Saint-Germain Walk",
          cost: 1800, hours: 2.5, diff: "Easy", icon: "☕",
          location: "172 Bd Saint-Germain, Paris",
          coordinates: { lat: 48.8539, lng: 2.3328 },
          description: "Iconic Parisian café frequented by Sartre and Picasso. Try croque-monsieur and café au lait. Stroll the literary Saint-Germain-des-Prés quarter."
        },
        evening: {
          name: "Louvre Museum Highlights Tour",
          cost: 4500, hours: 3, diff: "Easy", icon: "🎨",
          location: "Rue de Rivoli, 75001 Paris",
          coordinates: { lat: 48.8606, lng: 2.3376 },
          description: "See Mona Lisa, Venus de Milo, and Winged Victory. Expert guide reveals hidden stories. World's largest art museum with 35,000 works."
        },
        night: {
          name: "Seine River Dinner Cruise",
          cost: 7000, hours: 2.5, diff: "Easy", icon: "🛳️",
          location: "Port de la Bourdonnais, Paris",
          coordinates: { lat: 48.8606, lng: 2.2945 },
          description: "Gourmet 3-course dinner while cruising past illuminated Notre-Dame, Eiffel Tower, and Musée d'Orsay. Live accordion music included."
        }
      },
      2: {
        morning: {
          name: "Palace of Versailles & Gardens",
          cost: 5500, hours: 5, diff: "Easy", icon: "🏰",
          location: "Place d'Armes, 78000 Versailles",
          coordinates: { lat: 48.8049, lng: 2.1204 },
          description: "UNESCO World Heritage royal palace. See Hall of Mirrors, King's Grand Apartments, and 800-hectare formal gardens with fountains."
        },
        afternoon: {
          name: "Montmartre & Sacré-Cœur Basilica",
          cost: 0, hours: 3, diff: "Easy", icon: "⛪",
          location: "35 Rue du Chevalier de la Barre, Paris",
          coordinates: { lat: 48.8867, lng: 2.3431 },
          description: "Climb the bohemian hilltop village. Visit the white-domed Sacré-Cœur. Explore Place du Tertre where artists paint portraits."
        },
        evening: {
          name: "Moulin Rouge Show",
          cost: 12000, hours: 2.5, diff: "Easy", icon: "🎭",
          location: "82 Bd de Clichy, 75018 Paris",
          coordinates: { lat: 48.8841, lng: 2.3322 },
          description: "World-famous cabaret show since 1889. Spectacular can-can dancers, feathers, and rhinestones. Champagne included. Book weeks in advance."
        },
        night: {
          name: "Late Night Crêpes at Rue de la Huchette",
          cost: 400, hours: 1, diff: "Easy", icon: "🥞",
          location: "Rue de la Huchette, Paris",
          coordinates: { lat: 48.8527, lng: 2.3472 },
          description: "Paris's most famous street for late-night crêpes. Try Nutella, salted caramel, or ham-cheese crêpes from street vendors."
        }
      },
      3: {
        morning: {
          name: "Notre-Dame Cathedral & Île de la Cité",
          cost: 0, hours: 2, diff: "Easy", icon: "🕍",
          location: "6 Parvis Notre-Dame, Paris",
          coordinates: { lat: 48.8530, lng: 2.3499 },
          description: "Gothic masterpiece under restoration after 2019 fire. Explore the island, Sainte-Chapelle's stunning stained glass, and Conciergerie palace."
        },
        afternoon: {
          name: "Le Marais District & Picasso Museum",
          cost: 1400, hours: 3, diff: "Easy", icon: "🖼️",
          location: "5 Rue de Thorigny, 75003 Paris",
          coordinates: { lat: 48.8596, lng: 2.3622 },
          description: "Trendy historic district with medieval mansions. Visit Musée Picasso with 5,000 works. Browse boutiques and falafel shops on Rue des Rosiers."
        },
        evening: {
          name: "Arc de Triomphe & Champs-Élysées",
          cost: 1300, hours: 2, diff: "Easy", icon: "🏛️",
          location: "Pl. Charles de Gaulle, 75008 Paris",
          coordinates: { lat: 48.8738, lng: 2.2950 },
          description: "Climb Napoleon's triumphal arch for sunset views down the Champs-Élysées. Watch the eternal flame at the Tomb of the Unknown Soldier."
        },
        night: {
          name: "Dinner at Le Jules Verne, Eiffel Tower",
          cost: 15000, hours: 2, diff: "Easy", icon: "🍽️",
          location: "Eiffel Tower, 2nd Floor, Paris",
          coordinates: { lat: 48.8584, lng: 2.2945 },
          description: "Michelin-starred restaurant on the 2nd floor of the Eiffel Tower. Contemporary French cuisine with breathtaking city views. Reserve months ahead."
        }
      }
    }
  },

  dubai: {
    name: "Dubai",
    country: "UAE",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    dayPlans: {
      1: {
        morning: {
          name: "Burj Khalifa At The Top & Dubai Fountain",
          cost: 4500, hours: 3, diff: "Easy", icon: "🏙️",
          location: "1 Sheikh Mohammed bin Rashid Blvd, Dubai",
          coordinates: { lat: 25.1972, lng: 55.2744 },
          description: "World's tallest building at 828m. Observation deck at 555m with desert and Gulf views. Watch the Dubai Fountain show at the base."
        },
        afternoon: {
          name: "Dubai Mall & Aquarium",
          cost: 1500, hours: 3, diff: "Easy", icon: "🐠",
          location: "Financial Centre Rd, Downtown Dubai",
          coordinates: { lat: 25.1972, lng: 55.2796 },
          description: "World's largest mall. Walk through the 10-million-litre aquarium tunnel with sharks and rays. Ice rink, VR park, and 1,200+ stores."
        },
        evening: {
          name: "Gold Souk & Spice Souk, Deira",
          cost: 500, hours: 2, diff: "Easy", icon: "💍",
          location: "Gold Souk, Deira, Dubai",
          coordinates: { lat: 25.2697, lng: 55.3094 },
          description: "Traditional Arabian market with 300+ gold shops. Cross the Dubai Creek by abra (water taxi). Explore aromatic spice souk with saffron and frankincense."
        },
        night: {
          name: "Dinner at Pierchic, Madinat Jumeirah",
          cost: 8000, hours: 2, diff: "Easy", icon: "🦞",
          location: "Al Qasr Hotel, Madinat Jumeirah, Dubai",
          coordinates: { lat: 25.1324, lng: 55.1856 },
          description: "Overwater restaurant on a private pier with Burj Al Arab views. Fresh seafood and Mediterranean cuisine. Most romantic restaurant in Dubai."
        }
      },
      2: {
        morning: {
          name: "Desert Safari with Dune Bashing",
          cost: 3500, hours: 6, diff: "Medium", icon: "🏜️",
          location: "Dubai Desert Conservation Reserve",
          coordinates: { lat: 24.8607, lng: 55.7281 },
          description: "Thrilling 4x4 dune bashing at sunset. Camel ride, sandboarding, henna painting. BBQ dinner under stars with belly dance and tanoura show."
        },
        afternoon: {
          name: "Jumeirah Mosque & Al Fahidi District",
          cost: 300, hours: 2.5, diff: "Easy", icon: "🕌",
          location: "Jumeirah Beach Rd, Dubai",
          coordinates: { lat: 25.2285, lng: 55.2614 },
          description: "Dubai's most photographed mosque open to non-Muslims. Walk through Al Fahidi Historical Neighbourhood with wind-tower architecture and art galleries."
        },
        evening: {
          name: "Palm Jumeirah & Atlantis View",
          cost: 0, hours: 2, diff: "Easy", icon: "🌴",
          location: "Palm Jumeirah, Dubai",
          coordinates: { lat: 25.1124, lng: 55.1390 },
          description: "Walk or monorail across the world's largest artificial island. View the iconic Atlantis hotel. Visit The Pointe for waterfront dining and fountain views."
        },
        night: {
          name: "Dubai Frame & Night City Views",
          cost: 1200, hours: 2, diff: "Easy", icon: "🖼️",
          location: "Zabeel Park, Dubai",
          coordinates: { lat: 25.2350, lng: 55.3000 },
          description: "World's largest picture frame at 150m. Glass-floored sky bridge between old and new Dubai. Stunning panoramic night views of the entire city."
        }
      },
      3: {
        morning: {
          name: "Dubai Museum & Old Dubai Creek",
          cost: 400, hours: 2.5, diff: "Easy", icon: "🏺",
          location: "Al Fahidi Fort, Bur Dubai",
          coordinates: { lat: 25.2631, lng: 55.2972 },
          description: "Oldest building in Dubai (1787). Exhibits on Bedouin life, pearl diving, and city's transformation. Take an abra across the historic Dubai Creek."
        },
        afternoon: {
          name: "Lunch at Arabian Tea House & Bastakiya",
          cost: 1200, hours: 2, diff: "Easy", icon: "🍲",
          location: "Al Fahidi St, Bur Dubai",
          coordinates: { lat: 25.2631, lng: 55.2972 },
          description: "Authentic Emirati cuisine in a 100-year-old courtyard. Try machboos, luqaimat, and karak chai. Explore the restored Bastakiya quarter."
        },
        evening: {
          name: "Kite Beach & Sunset Walk",
          cost: 0, hours: 2, diff: "Easy", icon: "🏖️",
          location: "Kite Beach, Jumeirah, Dubai",
          coordinates: { lat: 25.1924, lng: 55.2406 },
          description: "Public beach with Burj Al Arab backdrop. Watch kite surfers, beach volleyball. Food trucks, outdoor gym, and stunning sunset over the Arabian Gulf."
        },
        night: {
          name: "La Mer & Bluewaters Island",
          cost: 2000, hours: 3, diff: "Easy", icon: "🎡",
          location: "Bluewaters Island, Dubai",
          coordinates: { lat: 25.0800, lng: 55.1200 },
          description: "Trendy beachfront district with street art and restaurants. Visit Ain Dubai — world's largest observation wheel at 250m. Vibrant nightlife and dining."
        }
      }
    }
  },

  tokyo: {
    name: "Tokyo",
    country: "Japan",
    coordinates: { lat: 35.6762, lng: 139.6503 },
    dayPlans: {
      1: {
        morning: {
          name: "Senso-ji Temple & Nakamise Shopping Street",
          cost: 0, hours: 2.5, diff: "Easy", icon: "⛩️",
          location: "2 Chome-3-1 Asakusa, Taito City, Tokyo",
          coordinates: { lat: 35.7148, lng: 139.7967 },
          description: "Tokyo's oldest temple founded in 628 AD. Walk through the iconic Thunder Gate (Kaminarimon). Shop for traditional souvenirs on Nakamise-dori street."
        },
        afternoon: {
          name: "Tsukiji Outer Market & Sushi Lunch",
          cost: 2500, hours: 2.5, diff: "Easy", icon: "🍣",
          location: "4 Chome-16-2 Tsukiji, Chuo City, Tokyo",
          coordinates: { lat: 35.6654, lng: 139.7707 },
          description: "World-famous fish market outer section. Sample fresh sushi, tamagoyaki, and seafood skewers. Watch skilled chefs at work in tiny stalls."
        },
        evening: {
          name: "Shibuya Crossing & Scramble Square",
          cost: 2000, hours: 2, diff: "Easy", icon: "🚦",
          location: "2 Chome-24-12 Shibuya, Tokyo",
          coordinates: { lat: 35.6595, lng: 139.7004 },
          description: "World's busiest pedestrian crossing with 3,000 people per light cycle. Climb Shibuya Sky observation deck for 360° views. Explore Shibuya 109 fashion."
        },
        night: {
          name: "Omoide Yokocho (Memory Lane) Dinner",
          cost: 2000, hours: 2, diff: "Easy", icon: "🍢",
          location: "1 Chome-2 Nishishinjuku, Shinjuku, Tokyo",
          coordinates: { lat: 35.6938, lng: 139.7006 },
          description: "Narrow alley of tiny yakitori bars dating from 1940s. Sit elbow-to-elbow with locals. Try grilled chicken skewers, sake, and smoky atmosphere."
        }
      },
      2: {
        morning: {
          name: "TeamLab Borderless Digital Art Museum",
          cost: 3200, hours: 3, diff: "Easy", icon: "🎨",
          location: "Azabudai Hills, Minato City, Tokyo",
          coordinates: { lat: 35.6595, lng: 139.7432 },
          description: "Immersive digital art museum with no maps or boundaries. Walk through infinite crystal universes, flower forests, and interactive light installations."
        },
        afternoon: {
          name: "Meiji Shrine & Harajuku Takeshita Street",
          cost: 0, hours: 3, diff: "Easy", icon: "🌿",
          location: "1-1 Yoyogikamizonocho, Shibuya, Tokyo",
          coordinates: { lat: 35.6763, lng: 139.6993 },
          description: "Serene Shinto shrine in forested park. Walk the 700m gravel path through towering torii gates. Then explore Harajuku's wild Takeshita Street fashion."
        },
        evening: {
          name: "Akihabara Electric Town",
          cost: 1500, hours: 2.5, diff: "Easy", icon: "🎮",
          location: "Akihabara, Chiyoda City, Tokyo",
          coordinates: { lat: 35.7022, lng: 139.7741 },
          description: "Tokyo's electronics and anime mecca. Multi-floor arcades, manga shops, maid cafes, and retro game stores. Neon-lit streets buzzing with otaku culture."
        },
        night: {
          name: "Tokyo Skytree Night View",
          cost: 3000, hours: 2, diff: "Easy", icon: "🌃",
          location: "1 Chome-1-2 Oshiage, Sumida City, Tokyo",
          coordinates: { lat: 35.7101, lng: 139.8107 },
          description: "World's second tallest structure at 634m. Two observation decks with glass floors. Stunning night panorama of Tokyo's 37-million-person metropolis."
        }
      },
      3: {
        morning: {
          name: "Shinjuku Gyoen National Garden",
          cost: 500, hours: 2, diff: "Easy", icon: "🌸",
          location: "11 Naitomachi, Shinjuku City, Tokyo",
          coordinates: { lat: 35.6852, lng: 139.7100 },
          description: "Beautiful 58-hectare garden blending French, English, and Japanese styles. 1,500 cherry trees (best in spring). Greenhouse with tropical plants."
        },
        afternoon: {
          name: "Ramen Museum & Lunch in Shinjuku",
          cost: 1500, hours: 2, diff: "Easy", icon: "🍜",
          location: "Shinjuku, Tokyo",
          coordinates: { lat: 35.6938, lng: 139.7034 },
          description: "Try authentic regional ramen styles — tonkotsu, shoyu, miso. Visit Ichiran for solo ramen booths. Explore Shinjuku's underground food halls."
        },
        evening: {
          name: "Odaiba Island & teamLab Planets",
          cost: 3200, hours: 3, diff: "Easy", icon: "🏝️",
          location: "6 Chome-1-16 Toyosu, Koto City, Tokyo",
          coordinates: { lat: 35.6226, lng: 139.7853 },
          description: "Futuristic artificial island with Rainbow Bridge views. Walk through water and flower immersive art at teamLab Planets. Gundam statue and Odaiba beach."
        },
        night: {
          name: "Kabukicho & Golden Gai Bar Hopping",
          cost: 2500, hours: 3, diff: "Easy", icon: "🍺",
          location: "Kabukicho, Shinjuku, Tokyo",
          coordinates: { lat: 35.6938, lng: 139.7034 },
          description: "Tokyo's entertainment district. Explore Golden Gai's 200 tiny bars each seating 5-8 people. Unique themed bars, jazz clubs, and izakayas."
        }
      }
    }
  },

  mumbai: {
    name: "Mumbai",
    country: "India",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    dayPlans: {
      1: {
        morning: {
          name: "Gateway of India & Harbour View",
          cost: 0, hours: 2, diff: "Easy", icon: "🏛️",
          location: "Apollo Bandar, Colaba, Mumbai",
          coordinates: { lat: 18.9220, lng: 72.8347 },
          description: "Iconic 26m basalt arch built in 1924. Watch fishing boats and ferries on Mumbai Harbour. The last British troops left India through this gate in 1948."
        },
        afternoon: {
          name: "Lunch at Leopold Cafe & Colaba Causeway",
          cost: 800, hours: 2.5, diff: "Easy", icon: "🍛",
          location: "Colaba Causeway, Mumbai",
          coordinates: { lat: 18.9220, lng: 72.8317 },
          description: "Historic café since 1871, featured in Shantaram. Try butter chicken and cold coffee. Shop for antiques, clothes, and handicrafts on Colaba Causeway."
        },
        evening: {
          name: "Elephanta Caves (UNESCO Heritage)",
          cost: 600, hours: 3, diff: "Medium", icon: "🗿",
          location: "Elephanta Island, Mumbai Harbour",
          coordinates: { lat: 18.9633, lng: 72.9315 },
          description: "5th-century rock-cut cave temples dedicated to Shiva. 1-hour ferry from Gateway of India. See the magnificent 6m Trimurti sculpture."
        },
        night: {
          name: "Marine Drive & Chowpatty Beach",
          cost: 200, hours: 2, diff: "Easy", icon: "🌊",
          location: "Marine Drive, Mumbai",
          coordinates: { lat: 18.9438, lng: 72.8231 },
          description: "Mumbai's 'Queen's Necklace' — 3.6km seafront promenade. Watch the sunset over the Arabian Sea. Try bhel puri and pav bhaji at Chowpatty Beach."
        }
      },
      2: {
        morning: {
          name: "Dharavi Slum Tour & Craft Workshops",
          cost: 1500, hours: 3, diff: "Easy", icon: "🏭",
          location: "Dharavi, Mumbai",
          coordinates: { lat: 19.0422, lng: 72.8530 },
          description: "Asia's largest slum is also a thriving industrial hub. See leather, pottery, and recycling industries. Respectful guided tour showing resilience and enterprise."
        },
        afternoon: {
          name: "Dabbawala System Tour & Lunch",
          cost: 1000, hours: 2.5, diff: "Easy", icon: "🍱",
          location: "Churchgate Station, Mumbai",
          coordinates: { lat: 18.9356, lng: 72.8258 },
          description: "Meet Mumbai's legendary tiffin delivery network with 99.99% accuracy. Watch 5,000 dabbawalas sort 200,000 lunch boxes. Lunch at a local Maharashtrian thali."
        },
        evening: {
          name: "Bandra-Worli Sea Link & Bandra",
          cost: 100, hours: 2, diff: "Easy", icon: "🌉",
          location: "Bandra-Worli Sea Link, Mumbai",
          coordinates: { lat: 19.0330, lng: 72.8185 },
          description: "8-lane cable-stayed bridge spanning 5.6km. Drive across for stunning sunset views. Explore Bandra's hip cafes, street art, and Bandstand promenade."
        },
        night: {
          name: "Dinner at Trishna (Seafood)",
          cost: 2000, hours: 2, diff: "Easy", icon: "🦀",
          location: "7 Sai Baba Marg, Kala Ghoda, Mumbai",
          coordinates: { lat: 18.9281, lng: 72.8319 },
          description: "Mumbai's most celebrated seafood restaurant since 1981. Try butter-garlic crab, Bombay duck fry, and koliwada prawns. Book in advance."
        }
      },
      3: {
        morning: {
          name: "Chhatrapati Shivaji Terminus (UNESCO)",
          cost: 0, hours: 1.5, diff: "Easy", icon: "🚂",
          location: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
          coordinates: { lat: 18.9400, lng: 72.8353 },
          description: "Victorian Gothic railway station built in 1887. UNESCO World Heritage Site. Blend of Indian and Victorian architecture with gargoyles and peacocks."
        },
        afternoon: {
          name: "Kala Ghoda Art District & Lunch",
          cost: 700, hours: 3, diff: "Easy", icon: "🎨",
          location: "Kala Ghoda, Fort, Mumbai",
          coordinates: { lat: 18.9281, lng: 72.8319 },
          description: "Mumbai's cultural hub with galleries, cafes, and street art. Visit Jehangir Art Gallery. Try Irani café food at Britannia & Co. Explore heritage buildings."
        },
        evening: {
          name: "Juhu Beach & Street Food",
          cost: 300, hours: 2, diff: "Easy", icon: "🏖️",
          location: "Juhu Beach, Mumbai",
          coordinates: { lat: 19.0883, lng: 72.8264 },
          description: "Mumbai's most popular beach. Try pav bhaji, vada pav, and pani puri from street vendors. Watch the sunset and spot Bollywood stars' bungalows nearby."
        },
        night: {
          name: "Bollywood Night Tour & Dinner",
          cost: 2500, hours: 3, diff: "Easy", icon: "🎬",
          location: "Film City, Goregaon, Mumbai",
          coordinates: { lat: 19.1530, lng: 72.8479 },
          description: "Evening tour of Film City studios. See live sets and shooting locations. Dinner at a Bollywood-themed restaurant with live music and dance performances."
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
