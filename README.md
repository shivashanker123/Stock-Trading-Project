# Stock Market Trading Application

A full-stack web application for stock market trading, featuring user authentication, order management, and a real-time trading dashboard.

## 📋 Project Overview

This is a modern stock market trading platform built with:
- **Frontend**: React with Material-UI and Bootstrap for responsive UI
- **Backend**: Node.js with Express.js for API management
- **Database**: MongoDB for data persistence
- **Authentication**: JWT-based authentication with bcrypt password hashing

## 🏗️ Architecture

### Project Structure

```
STOCK MARKET-2/
├── backend/                          # Express.js server
│   ├── index.js                     # Main server file
│   ├── package.json                 # Backend dependencies
│   ├── middleware/
│   │   └── authMiddleware.js        # JWT authentication middleware
│   ├── models/
│   │   ├── UserModel.js             # User schema & model
│   │   ├── HoldingsModel.js         # Stock holdings model
│   │   ├── OrdersModel.js           # Trading orders model
│   │   └── PositionsModel.js        # Open positions model
│   ├── routes/
│   │   └── authRoutes.js            # Authentication endpoints
│   └── schemas/
│       ├── HoldingsSchema.js        # Holdings schema definition
│       ├── OrdersSchema.js          # Orders schema definition
│       └── PositionsSchema.js       # Positions schema definition
└── dashboard/                        # React application
    ├── package.json                 # Frontend dependencies
    ├── public/
    │   └── index.html               # Main HTML file
    └── src/
        ├── index.js                 # React entry point
        ├── index.css                # Global styles
        └── components/              # React components
            ├── Home.js
            ├── Apps.js
            └── ...
```

---

## 🚀 Features

### Backend Features
- ✅ **User Authentication**: Register and login with secure password hashing
- ✅ **JWT Tokens**: Stateless authentication with 1-hour expiration
- ✅ **Protected Routes**: Authentication middleware protects API endpoints
- ✅ **Order Management**: Create new trading orders
- ✅ **Portfolio Tracking**: Store and retrieve stock holdings
- ✅ **Position Management**: Track open trading positions
- ✅ **MongoDB Integration**: Persistent data storage

### Frontend Features
- 📊 **Interactive Dashboard**: Real-time trading data visualization
- 📈 **Chart Integration**: Chart.js for financial data visualization
- 🔐 **Secure Authentication**: Login/Register with JWT tokens
- 📱 **Responsive Design**: Bootstrap & Material-UI for mobile-friendly interface
- 🎨 **Material Design**: Professional UI with Material-UI components

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local or cloud instance)

### Environment Setup

1. **Clone the repository** (if not already done)
   ```bash
   cd "STOCK MARKET-2"
   ```

2. **Create `.env` file in the `backend` directory**
   ```bash
   cd backend
   touch .env
   ```

3. **Add the following environment variables to `backend/.env`**
   ```
   PORT=3002
   MONGO_URL=mongodb://localhost:27017/stock-market
   JWT_SECRET=your_secret_key_here
   NODE_ENV=development
   ```

   **Example for MongoDB Cloud (Atlas):**
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/stock-market?retryWrites=true&w=majority
   ```

### Backend Setup

```bash
cd backend
npm install
npm start
```

**Expected Output:**
```
✅ Connected to MongoDB
🚀 Server running on port 3002
```

### Frontend Setup

```bash
cd dashboard
npm install
npm start
```

The dashboard will open at `http://localhost:3000`

---

## 📡 API Endpoints

### Authentication Routes
**Base URL:** `http://localhost:3002/api/auth`

#### 1. Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (Success - 201):**
```json
{
  "message": "User created successfully!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "username": "john_doe"
}
```

**Response (Error - 400):**
```json
{
  "message": "User already exists..."
}
```

#### 2. Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (Success - 200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Protected Routes (Require JWT Token)
All requests must include the Authorization header:
```http
Authorization: Bearer <your_jwt_token>
```

#### 3. Fetch Holdings
```http
GET /addHoldings
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "symbol": "AAPL",
    "quantity": 10,
    "avgPrice": 150.25,
    "currentPrice": 155.00,
    ...
  }
]
```

#### 4. Fetch Positions
```http
GET /addPositions
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "symbol": "GOOGL",
    "entryPrice": 2800,
    "quantity": 5,
    "pnl": 250,
    ...
  }
]
```

#### 5. Create New Order
```http
POST /newOrder
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "AAPL",
  "qty": 5,
  "price": 150.25,
  "mode": "BUY"
}
```

**Response (Success - 201):**
```json
{
  "message": "Order created successfully"
}
```

---

## 🗄️ Database Models

### User Model
```javascript
{
  username: String (required),
  email: String (required, unique, lowercase),
  password: String (required, hashed with bcryptjs),
  createdAt: Date (auto-generated)
}
```

### Holdings Model
```javascript
{
  userId: ObjectId (reference to User),
  symbol: String,
  quantity: Number,
  avgPrice: Number,
  currentPrice: Number,
  totalValue: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Orders Model
```javascript
{
  userId: ObjectId (reference to User),
  name: String (stock symbol),
  qty: Number,
  price: Number,
  mode: String (BUY or SELL),
  status: String (PENDING, COMPLETED, CANCELLED),
  orderDate: Date,
  executionDate: Date
}
```

### Positions Model
```javascript
{
  userId: ObjectId (reference to User),
  symbol: String,
  entryPrice: Number,
  quantity: Number,
  currentPrice: Number,
  pnl: Number (Profit/Loss),
  openDate: Date,
  closeDate: Date
}
```

---

## 🔐 Authentication Flow

### Registration Flow
1. User submits username, email, and password
2. Backend checks if user already exists
3. Password is hashed using bcryptjs (12 salt rounds)
4. User is saved to MongoDB
5. JWT token is generated (expires in 1 hour)
6. Token is returned to frontend

### Login Flow
1. User submits email and password
2. Backend finds user by email
3. Password is compared with stored hash using bcrypt
4. If match, JWT token is generated
5. Token is returned to client

### Protected Routes Flow
1. Frontend sends request with `Authorization: Bearer <token>` header
2. Middleware extracts and verifies token
3. If valid, request proceeds to route handler
4. If invalid/expired, 401 Unauthorized is returned

---

## 🛠️ Technologies Used

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Express.js | ^5.1.0 | Web framework |
| Mongoose | ^8.19.1 | MongoDB ODM |
| MongoDB | ^6.20.0 | Database |
| jsonwebtoken | ^9.0.2 | JWT authentication |
| bcryptjs | ^3.0.2 | Password hashing |
| Passport.js | ^0.7.0 | Authentication strategies |
| CORS | ^2.8.5 | Cross-origin requests |
| dotenv | ^17.2.3 | Environment variables |
| nodemon | ^3.1.10 | Development auto-reload |

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | ^18.2.0 | UI library |
| React Router | ^6.22.2 | Navigation |
| Material-UI (MUI) | ^5.15.11 | Component library |
| Bootstrap | ^5.3.8 | CSS framework |
| Chart.js | ^4.5.1 | Data visualization |
| react-chartjs-2 | ^5.3.0 | React wrapper for Chart.js |
| Axios | ^1.12.2 | HTTP client |
| Emotion | ^11.11.4 | CSS-in-JS styling |

---

## 🚦 Running the Application

### Option 1: Development Mode (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Output: 🚀 Server running on port 3002
```

**Terminal 2 - Frontend:**
```bash
cd dashboard
npm start
# Opens http://localhost:3000
```

### Option 2: Production Build

**Build Frontend:**
```bash
cd dashboard
npm run build
# Creates optimized build in dashboard/build
```

**Run Backend:**
```bash
cd backend
NODE_ENV=production npm start
```

---

## 📊 Usage Workflow

1. **Register/Login**: Create an account or login with existing credentials
2. **View Dashboard**: See your portfolio, holdings, and positions
3. **Place Orders**: Create buy/sell orders for stocks
4. **Track Performance**: Monitor your trading positions and P&L
5. **View Analytics**: Use charts to analyze trading data

---

## 🔄 API Request/Response Examples

### Complete Login Flow Example

**1. Register:**
```bash
curl -X POST http://localhost:3002/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "trader_john",
    "email": "john@trading.com",
    "password": "Trade@123"
  }'
```

**Response:**
```json
{
  "message": "User created successfully!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGM0YjQ4YzMwMDAwMDAwMDAwMDAxIn0sImlhdCI6MTcwNTQ0OTQyOCwiZXhwIjoxNzA1NDUzMDI4fQ.abc123...",
  "username": "trader_john"
}
```

**2. Place Order with Token:**
```bash
curl -X POST http://localhost:3002/newOrder \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -d '{
    "name": "MSFT",
    "qty": 10,
    "price": 380.50,
    "mode": "BUY"
  }'
```

**Response:**
```json
{
  "message": "Order created successfully"
}
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
**Error:** `❌ MongoDB connection error: connect ECONNREFUSED`

**Solution:**
- Ensure MongoDB is running: `mongod` (local) or check MongoDB Atlas credentials
- Verify `MONGO_URL` in `.env` file
- Check network connection if using MongoDB Cloud

### JWT Token Expired
**Error:** `401 Not authorized, token failed`

**Solution:**
- Tokens expire after 1 hour
- Re-login to get a new token
- Store token securely on frontend

### CORS Issues
**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
- CORS is already enabled in backend
- Verify frontend and backend are running on correct ports
- Check `Authorization` header is being sent correctly

### Port Already in Use
**Error:** `Address already in use :::3002`

**Solution:**
```bash
# Find process using port 3002
lsof -i :3002
# Kill the process
kill -9 <PID>
```

---

## 📝 Environment Variables Reference

### Backend (.env)
```env
# Server Configuration
PORT=3002
NODE_ENV=development

# Database
MONGO_URL=mongodb://localhost:27017/stock-market

# Authentication
JWT_SECRET=your_super_secret_key_change_in_production

# Optional
LOG_LEVEL=debug
```

---

## 🔒 Security Best Practices

- ✅ Passwords are hashed with bcryptjs (12 salt rounds)
- ✅ JWT tokens have 1-hour expiration
- ✅ Protected routes require valid tokens
- ✅ Environment variables store sensitive data
- ⚠️ **TODO**: Implement HTTPS/TLS for production
- ⚠️ **TODO**: Add rate limiting to prevent brute force attacks
- ⚠️ **TODO**: Implement refresh tokens for better UX

---

## 📈 Future Enhancements

- [ ] Real-time stock price updates with WebSockets
- [ ] Advanced charting with technical indicators
- [ ] Portfolio analytics and performance metrics
- [ ] Email notifications for order execution
- [ ] Two-factor authentication (2FA)
- [ ] User profile management
- [ ] Watchlist feature
- [ ] Trade history and reports
- [ ] Mobile app (React Native)
- [ ] Paper trading mode for practice

---

## 👥 Team & Contributing

This is a personal project. For improvements or bug reports, please document issues clearly.

---

## 📄 License

ISC License - See package.json for details

---

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Verify all environment variables are set correctly
3. Check MongoDB connection
4. Review server logs in terminal

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [JWT.io](https://jwt.io/)
- [Material-UI Docs](https://mui.com/)

---

**Last Updated:** March 10, 2026
