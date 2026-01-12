# ItemStore - Next.js Item Management Application

A modern, full-stack web application built with Next.js 15 and Express.js for managing and showcasing items. Features a beautiful landing page, authentication system, and comprehensive item management capabilities.

## 🚀 Features

### Landing Page

- **7 Content Sections**: Hero, Features, About, Services, Testimonials, Stats, and Call-to-Action
- **Smooth Animations**: Powered by Lenis smooth scrolling, GSAP, AOS, and Framer Motion
- **Interactive Hero Carousel**: Built with Swiper.js featuring multiple slides
- **Responsive Design**: Optimized for all device sizes

### Authentication System

- **Mock Authentication**: Secure login with hardcoded credentials
- **Cookie-based Sessions**: Persistent authentication state
- **Route Protection**: Middleware-protected routes for authenticated users
- **Automatic Redirects**: Seamless navigation flow

### Item Management

- **Public Item Listing**: Browse all available items without authentication
- **Detailed Item Views**: Comprehensive item information pages
- **Protected Item Creation**: Add new items (authentication required)
- **Real-time API Integration**: Express.js backend with JSON data storage

### Technical Features

- **Modern UI/UX**: Inspired by ThemeForest and Dribbble designs
- **Toast Notifications**: User feedback with react-hot-toast
- **Loading States**: Smooth loading indicators and error handling
- **SEO Optimized**: Next.js App Router with proper meta tags

## 🛠 Technologies Used

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Modern ES6+ syntax

### Animation Libraries

- **Lenis** - Smooth scrolling
- **GSAP** - Advanced animations
- **AOS** - Scroll-triggered animations
- **Swiper** - Touch slider/carousel
- **Framer Motion** - React animation library

### Backend

- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique identifier generation
- **JSON File Storage** - Simple data persistence

### Additional Libraries

- **js-cookie** - Cookie management
- **react-hot-toast** - Toast notifications
- **Next/Image** - Optimized image loading

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <repository-url>
cd nextjs-item-store
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Start the Development Servers

#### Start the API Server (Terminal 1)

```bash
cd server
npm run dev
```

The API server will run on `http://localhost:5000`

#### Start the Next.js Application (Terminal 2)

```bash
npm run dev
```

The application will run on `http://localhost:3000`

## 🔐 Login Credentials

Use these credentials to access protected features:

- **Email**: `admin@itemstore.com`
- **Password**: `admin123`

## 📍 Routes Summary

### Public Routes

- `/` - Landing page with 7 sections
- `/items` - Browse all items (public access)
- `/items/[id]` - View individual item details
- `/login` - User authentication

### Protected Routes

- `/add-item` - Create new items (requires authentication)

### API Routes

- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch single item
- `POST /api/items` - Create new item
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/health` - API health check

## 🎨 UI/UX Features

### Design Inspiration

- Modern, clean interface inspired by premium themes
- Consistent color scheme with primary blue tones
- Professional typography using Inter font family
- Smooth transitions and hover effects

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts and responsive images
- Touch-friendly navigation on mobile devices

### Animation Details

- **Lenis**: Smooth scrolling with customizable easing
- **GSAP**: Timeline-based animations for hero section
- **AOS**: Scroll-triggered fade and slide animations
- **Swiper**: Hero carousel with fade transitions and autoplay

## 🔧 Development Features

### Code Quality

- ESLint configuration for code consistency
- Modern JavaScript (ES6+) syntax
- Component-based architecture
- Proper error handling and loading states

### Performance Optimizations

- Next.js Image optimization
- Lazy loading for images and components
- Efficient bundle splitting
- Optimized CSS with Tailwind

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with automatic builds
4. Set up environment variables if needed

### Manual Deployment

1. Build the application: `npm run build`
2. Start production server: `npm start`
3. Deploy API server separately

## 📝 Project Structure

```
nextjs-item-store/
├── src/
│   ├── app/
│   │   ├── api/auth/          # Authentication API routes
│   │   ├── items/             # Items pages
│   │   ├── add-item/          # Protected add item page
│   │   ├── login/             # Login page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   ├── providers/         # Context providers
│   │   └── sections/          # Landing page sections
│   └── middleware.js          # Route protection
├── server/
│   ├── data/                  # JSON data storage
│   ├── server.js              # Express.js server
│   └── package.json           # Server dependencies
├── public/                    # Static assets
└── README.md                  # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Design inspiration from ThemeForest and Dribbble
- Animation libraries for smooth user experience
- Next.js team for the excellent framework
- Open source community for the amazing tools

---

**Live Demo**: [Deploy to see live version]
**Repository**: [GitHub Repository Link]

For questions or support, please open an issue in the repository.
