/*
Import the external libraries:
- dotenv
*/
import dotenv from 'dotenv';

// Activatie the dotenv settings from .env file
dotenv.config();

// Create configuration object
const config = {
    nodeHostname: process.env.NODE_SERVER_HOSTNAME,
    nodePort: process.env.NODE_SERVER_PORT,
}
export default config;