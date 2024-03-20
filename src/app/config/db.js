import mongoose from "mongoose";

const DATABASE_URL = "mongodb+srv://bughlani:bughlani@cluster0.9qki3lg.mongodb.net/";

// utils/db.js
export async function connectDB() {
  try {
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

// Call connectDB function when your server starts
connectDB();

// Optionally, you can handle disconnect and error events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
  // Optionally, attempt to reconnect
  // mongoose.connect(DATABASE_URL);
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB error:', error);
  // Optionally, handle the error in a more graceful way
});

// Export the mongoose connection for reuse in other parts of your application
export default mongoose.connection