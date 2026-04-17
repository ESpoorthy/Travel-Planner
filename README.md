# ✈️ TravelCraft - Smart Travel Planner

A beautiful, feature-rich travel planning application built with React. Plan your perfect trip with smart itineraries, budget tracking, and personalized recommendations.

![TravelCraft](https://img.shields.io/badge/React-19.1.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

### 🔐 Authentication System
- **Secure Login/Signup** - Email and password validation
- **User Profiles** - Personalized avatars with initials
- **Session Management** - Persistent login with localStorage
- **Demo Account** - Try it instantly with demo credentials

### 🗺️ Smart Trip Planning
- **Multi-Category Planning** - Adventure, Sightseeing, Food & Drink, Relaxation
- **Day-by-Day Itineraries** - Morning, afternoon, and evening activities
- **Budget Optimization** - Automatic cost adjustment to fit your budget
- **Multi-Traveler Support** - Plan for groups with per-person cost calculation
- **Activity Details** - Duration, difficulty level, and cost for each activity

### 💰 Budget Management
- **Real-time Budget Tracking** - Visual progress bar showing spend vs budget
- **Smart Cost Optimization** - Automatically adjusts activities to fit budget
- **Transparent Pricing** - Includes meals and transport costs
- **Multi-currency Support** - INR (₹) formatting

### 🎨 Beautiful UI/UX
- **Glassmorphism Design** - Modern, translucent interface elements
- **Smooth Animations** - Staggered card reveals, floating icons, hover effects
- **Responsive Layout** - Works perfectly on mobile, tablet, and desktop
- **Interactive Cards** - Expandable day cards with detailed activity breakdown
- **Travel Graphics** - Animated background patterns and floating travel icons

### 📱 User Features
- **Trip Statistics** - Track total trips planned
- **Copy to Clipboard** - Export itinerary as formatted text
- **Save Trips** - Store your favorite itineraries (for logged-in users)
- **Regenerate Plans** - Get new activity suggestions instantly
- **User Dropdown** - Quick access to profile, settings, and saved trips

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ESpoorthy/Travel-Planner.git
   cd Travel-Planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Login
Use the demo account or create your own:
- **Email:** demo@travelcraft.com
- **Password:** demo123

### Plan a Trip
1. Enter your destination (e.g., "Bali", "Paris", "Goa")
2. Select number of days (1-30)
3. Choose number of travelers
4. Set your budget (optional)
5. Pick a trip style (Adventure, Sightseeing, Food, Relaxation)
6. Click "Generate Itinerary"

### Explore Your Itinerary
- Click on any day card to expand and see detailed activities
- View morning, afternoon, and evening plans
- Check activity duration, difficulty, and cost
- See total daily and trip costs

### Save & Share
- Click "Copy Plan" to copy the full itinerary
- Click "Save Trip" to store it in your profile (requires login)
- Click "Regenerate" to get new activity suggestions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Login.jsx              # Authentication page
│   ├── Login.css              # Login page styles
│   ├── UserProfile.jsx        # User dropdown menu
│   └── UserProfile.css        # User profile styles
├── context/
│   └── AuthContext.jsx        # Authentication state management
├── TravelPlanner.jsx          # Main planner component
├── TravelPlanner.css          # Main planner styles
├── App.js                     # Root component with routing
├── index.js                   # Entry point
└── index.css                  # Global styles
```

## 🎨 Design Features

### Color Palette
- **Primary:** Gradient from Indigo (#6366f1) to Purple (#8b5cf6)
- **Adventure:** Orange (#f97316)
- **Sightseeing:** Blue (#3b82f6)
- **Food:** Red (#ef4444)
- **Relaxation:** Green (#10b981)

### Animations
- Floating travel icons in login background
- Plane flying animation in navbar
- Staggered card reveal on itinerary generation
- Smooth hover effects on all interactive elements
- Gradient shifting in hero section
- Pattern scrolling background

### Typography
- **Font Family:** Inter, system-ui, -apple-system
- **Headings:** 800-900 weight for strong hierarchy
- **Body:** 400-600 weight for readability

## 🔧 Technologies Used

- **React 19.1.1** - UI library
- **React Context API** - State management
- **CSS3** - Styling with animations
- **LocalStorage** - Data persistence
- **React Scripts 5.0.1** - Build tooling

## 📦 Available Scripts

- `npm start` - Run development server
- `npm build` - Create production build
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Security

- Passwords are stored in localStorage (demo purposes only)
- Email validation on signup
- Password minimum length requirement (6 characters)
- Session management with automatic logout

**Note:** This is a demo application. For production use, implement proper backend authentication with encrypted passwords, JWT tokens, and secure API endpoints.

## 🎯 Future Enhancements

- [ ] Backend API integration
- [ ] Real destination data from travel APIs
- [ ] Weather information integration
- [ ] Hotel and flight booking links
- [ ] Social sharing features
- [ ] Trip collaboration (invite friends)
- [ ] Photo galleries for destinations
- [ ] Reviews and ratings
- [ ] Map integration
- [ ] Export to PDF
- [ ] Calendar sync
- [ ] Push notifications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ by TravelCraft Team

## 🙏 Acknowledgments

- Activity data is sample data for demonstration
- Icons are emoji-based for universal compatibility
- Design inspired by modern travel apps

---

**Happy Traveling! ✈️🌍**
