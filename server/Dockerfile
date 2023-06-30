# Use an official Node.js runtime as the base image
FROM node:16.14.2

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire server directory to the working directory
COPY . .

# Expose the desired port (e.g., 8000 for the server)
EXPOSE 8000

# Start the server
CMD [ "npm", "start" ]