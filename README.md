# MERN E-Commerce Platform

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform includes features for both customers and administrators, with a modern UI and secure backend.

## 🚀 Live Demo

- **Frontend**: [https://mern-ecomm-pink.vercel.app/auth/login](https://mern-ecomm-pink.vercel.app/auth/login)
- **Backend API**: [https://mern-ecomm-backend-3y6l.onrender.com](https://mern-ecomm-backend-3y6l.onrender.com)

## ✨ Features

### Customer Features
- User authentication (register/login)
- Browse products with search and filtering
- Product details with reviews and ratings
- Shopping cart functionality
- Address management
- Order placement and tracking
- PayPal payment integration
- Product reviews and ratings

### Admin Features
- Admin dashboard
- Product management (add, edit, delete)
- Order management
- User management
- Feature toggles

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **React Router** - Routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image storage
- **PayPal SDK** - Payment processing

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- PayPal developer account
- Cloudinary account

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shreyaschauhan/MERN_ecommerce
   cd mernecommerce
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the `server` directory with the following variables:
   ```env
   PORT=5030
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   ```

## 🚀 Usage

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:5030`

2. **Start the frontend**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

## 📦 Build for Production

### Client
```bash
cd client
npm run build
```

### Server
```bash
cd server
npm start
```

## 🚀 Deployment

This project is already deployed:

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render

### Deployment Instructions

#### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set the build command: `npm run build`
3. Set the output directory: `dist`
4. Add environment variables if needed

#### Backend (Render)
1. Connect your GitHub repository to Render
2. Set the build command: `npm install`
3. Set the start command: `npm start`
4. Add all environment variables from your `.env` file

## 📁 Project Structure

```
mernecommerce/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── adminView/
│   │   │   ├── auth/
│   │   │   ├── common/
│   │   │   ├── shoppingView/
│   │   │   └── ui/
│   │   ├── pages/
│   │   ├── store/
│   │   └── ...
│   └── package.json
├── server/                 # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── helpers/
│   └── server.js
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shreyas Chauhan**

---

Made with ❤️ using MERN Stack