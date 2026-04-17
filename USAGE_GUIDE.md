# 📖 TravelCraft Usage Guide

## 🚀 Quick Start

### 1. First Launch
When you first open TravelCraft, you'll see:
- **Welcome Screen** - Animated loading with travel icons
- **Progress Bar** - Shows loading progress
- This only appears once per browser session

### 2. Login/Sign Up

#### Using Demo Account (Fastest)
```
Email: demo@travelcraft.com
Password: demo123
```

#### Creating New Account
1. Click "Sign Up" button
2. Enter your full name
3. Enter a valid email address
4. Create a password (minimum 6 characters)
5. Click "Create Account"
6. You'll be automatically logged in

#### Login Validation
- ❌ Invalid email format → Shows error
- ❌ Password too short → Shows error
- ❌ Wrong password → Shows "Invalid password"
- ❌ Email not found → Shows "User not found"
- ✅ Valid credentials → Logs you in

## 🗺️ Planning Your First Trip

### Step 1: Fill the Form

#### Destination
- Enter any city or country name
- Examples: "Bali", "Paris", "Tokyo", "Goa"
- Required field

#### Number of Days
- Choose between 1-30 days
- Default: 3 days
- Affects number of day cards generated

#### Travelers
- Choose between 1-20 people
- Default: 1 traveler
- Costs multiply by this number

#### Budget (Optional)
- Enter total budget in Indian Rupees (₹)
- Leave empty for no budget constraint
- App will try to optimize activities to fit budget

### Step 2: Choose Trip Style

Click one of the four category cards:

**⛰️ Adventure**
- Mountain Trekking, River Rafting, Scuba Diving
- Rock Climbing, Paragliding, Bungee Jumping
- Desert Safari, Wildlife Safari, Caving
- Orange theme

**🏛️ Sightseeing**
- City Tours, Museum Visits, Historic Landmarks
- Boat Rides, Heritage Walks, Cultural Performances
- Architectural Tours, Photography Tours
- Blue theme

**🍜 Food & Drink**
- Street Food Tours, Fine Dining
- Cooking Classes, Night Food Markets
- Wine Tasting, Chef's Table Experiences
- Red theme

**🌴 Relaxation**
- Beach Days, Spa & Massage
- Yoga & Meditation, Pool Days
- Sunset Cruises, Stargazing
- Green theme

### Step 3: Generate Itinerary

Click the **"🚀 Generate Itinerary"** button

The app will:
1. Create 3 activities per day (morning/afternoon/evening)
2. Calculate costs including meals (₹500/day) and transport (₹300/day)
3. Optimize to fit your budget if provided
4. Display results with animations

## 📊 Understanding Your Itinerary

### Summary Stats
At the top, you'll see 5 cards:
- **📍 Destination** - Your chosen location
- **🗓️ Duration** - Number of days
- **👥 Travelers** - Number of people
- **🎯 Trip Style** - Selected category
- **💰 Est. Total** - Total estimated cost

### Budget Status Message
- **✅ Green** - "Your plan fits within ₹XX,XXX"
- **⚠️ Yellow** - "Plan slightly exceeds ₹XX,XXX"
- **ℹ️ Blue** - "No budget set — showing a suggested plan"

### Budget Progress Bar
- **Green Bar** - Under budget (good!)
- **Red Bar** - Over budget (optimized as much as possible)
- **Percentage** - Shows XX% of budget used

### Day Cards

#### Collapsed View (Default)
- Day badge (e.g., "Day 1")
- Total cost for the day
- Activity icons preview
- Activity names (truncated)
- Click anywhere to expand

#### Expanded View
Shows 3 time slots:

**🌅 Morning Activity**
- Activity name with icon
- Cost tag (₹X,XXX)
- Duration tag (⏱ Xh)
- Difficulty badge (Easy/Medium/Hard)

**☀️ Afternoon Activity**
- Same details as morning

**🌙 Evening Activity**
- Same details as morning

**Footer**
- "🍽️ Meals + 🚌 Transport included"
- Day Total: ₹X,XXX

## 🎯 Using Action Buttons

### 📋 Copy Plan
1. Click "Copy Plan" button
2. Button changes to "✅ Copied!"
3. Paste anywhere (Ctrl+V / Cmd+V)

**Format:**
```
✈️ Trip to Bali — 5 days (Adventure)

Day 1:
  🌅 Morning: 🏔️ Mountain Trekking (₹2,500, 6h)
  ☀️ Afternoon: 🚣 River Rafting (₹1,800, 4h)
  🌙 Evening: 🛶 Kayaking (₹900, 3h)
  Day Total: ₹6,000

...

Grand Total: ₹30,000
```

### 💾 Save Trip (Logged-in Users Only)
1. Click "Save Trip" button
2. Trip is saved to your profile
3. Access later from user dropdown → "Saved Trips"

### 🔀 Regenerate
1. Click "Regenerate" button
2. Keeps same destination, days, budget, category
3. Generates NEW random activities
4. Use this to get different suggestions

### 🔄 Reset
1. Click "Reset" button
2. Clears all results
3. Keeps form data
4. Start fresh with same inputs

## 👤 User Profile Features

### Accessing Profile
Click your avatar (colored circle with initials) in top right

### Profile Dropdown Shows:
- **Your Name** - Full name
- **Email Address** - Login email
- **Trip Statistics**
  - ✈️ Trips Planned - Auto-increments each time you generate
  - 📅 Member Since - Join date
- **Quick Actions**
  - ⚙️ Settings (placeholder)
  - 💾 Saved Trips (placeholder)
  - ❤️ Favorites (placeholder)
  - 🚪 Sign Out

### Sign Out
1. Click "Sign Out" in dropdown
2. Returns to login page
3. Your data is saved (can log back in)

## 💡 Pro Tips

### Getting Best Results

**Budget Planning**
- Set realistic budgets (₹5,000-10,000 per day per person)
- Include buffer for unexpected expenses
- Budget includes activities + meals + transport

**Activity Selection**
- Mix categories for variety (plan separate trips)
- Adventure activities are typically more expensive
- Relaxation activities often have free options

**Multi-Traveler Trips**
- Costs scale linearly (2 travelers = 2x cost)
- Some activities may have group discounts (not reflected in demo)
- Consider shared accommodation in real planning

**Regenerating**
- Click regenerate multiple times to see all activity options
- Each generation is random within the category
- Save your favorite itineraries before regenerating

### Keyboard Shortcuts
- **Tab** - Navigate between form fields
- **Enter** - Submit form (when focused on input)
- **Escape** - Close user dropdown (when open)
- **Ctrl/Cmd + V** - Paste copied itinerary

### Mobile Usage
- All features work on mobile
- Tap day cards to expand
- Swipe-friendly interface
- Form fields stack vertically
- Category picker becomes 2x2 grid

## 🔧 Troubleshooting

### "Invalid email address"
- Check for typos
- Must include @ and domain (e.g., .com)
- No spaces allowed

### "Password must be at least 6 characters"
- Password too short
- Add more characters

### "Email already registered"
- Account exists with this email
- Click "Sign In" instead
- Or use different email

### "User not found"
- No account with this email
- Click "Sign Up" to create account
- Check for typos in email

### "Invalid password"
- Password doesn't match account
- Try again or reset (feature not implemented in demo)

### Budget Not Optimizing
- Some trips can't fit budget constraints
- Try:
  - Increase budget
  - Reduce days
  - Reduce travelers
  - Choose cheaper category (Relaxation/Sightseeing)

### Activities Repeating
- Shouldn't happen, but if it does:
- Click "Regenerate" for new selection
- Try different category

### Profile Not Showing
- Make sure you're logged in
- Refresh page if needed
- Check browser console for errors

## 📱 Browser Compatibility

### Fully Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Features Used
- CSS Grid & Flexbox
- CSS Animations
- LocalStorage API
- Clipboard API
- Backdrop Filter (glassmorphism)

### If Something Doesn't Work
1. Update your browser
2. Clear cache and cookies
3. Disable browser extensions
4. Try incognito/private mode
5. Check browser console for errors

## 🎨 Customization Ideas

### For Developers

**Add More Activities**
Edit `src/TravelPlanner.jsx` → `POOLS` object:
```javascript
adventure: [
  { name: "Your Activity", cost: 1000, hours: 3, diff: "Medium", icon: "🎯" },
  // Add more...
]
```

**Change Colors**
Edit `src/TravelPlanner.css` → `:root` variables:
```css
:root {
  --accent: #your-color;
  --green: #your-green;
  /* etc */
}
```

**Add New Categories**
1. Add to `POOLS` object
2. Add to `CATEGORY_META` object
3. Update category picker in JSX

## 📞 Support

For issues or questions:
1. Check this guide first
2. Review README.md
3. Check FEATURES.md for technical details
4. Open an issue on GitHub (if applicable)

---

**Enjoy planning your adventures with TravelCraft! ✈️🌍**
