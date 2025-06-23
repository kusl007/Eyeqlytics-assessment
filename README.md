# EyeQlytics User Directory

A modern, responsive React web application that fetches and displays user data from the RandomUser.me API with a clean, professional interface built entirely with Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with hover effects and smooth animations
- **Pure Tailwind CSS**: No external UI libraries, built entirely with Tailwind CSS
- **API Integration**: Fetches user data from RandomUser.me API
- **Search Functionality**: Filter users by name, country, or email
- **Loading States**: Beautiful skeleton loading animations
- **Error Handling**: Graceful error handling with user-friendly messages
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Reusable Components**: Modular component architecture

## 🛠️ Tech Stack

- **Framework**: React JS
- **Styling**: Tailwind CSS (Pure CSS, no UI libraries)
- **Icons**: Lucide React
- **API**: RandomUser.me


## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd user-directory
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 API Integration

The app fetches data from the RandomUser.me API:
- **Endpoint**: `https://randomuser.me/api/?results=10`
- **Data**: Fetches 10 random users with complete profile information
- **Fields Used**: Avatar, full name, email, country, phone, age, city

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: 1 column grid
- **Tablet**: 2 column grid  
- **Desktop**: 3 column grid
- **Large Desktop**: 4 column grid

## 🎨 UI Features

- **Pure Tailwind CSS**: No external UI component libraries
- **Hover Effects**: Cards lift and show enhanced shadows on hover
- **Loading States**: Custom skeleton components during data fetching
- **Search**: Real-time filtering by name, country, or email
- **Error Handling**: User-friendly error messages with icons
- **Refresh**: Manual refresh button to fetch new users
- **Gradient Backgrounds**: Beautiful gradient backgrounds
- **Custom Animations**: Smooth transitions and hover effects

## 🎯 Custom Components

All components are built from scratch using Tailwind CSS:
- **UserCard**: Professional user profile cards with avatars and contact info
- **SearchBar**: Custom search input with icon
- **LoadingSkeleton**: Animated loading placeholders
- **Error States**: Custom error messages with icons


