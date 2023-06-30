# Use an official Node.js runtime as the base image
FROM node:16.14.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire client directory to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the desired port (e.g., 3000 for React)
EXPOSE 3000

# Start the React app
CMD [ "npm", "start" ]