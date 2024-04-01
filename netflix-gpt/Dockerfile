# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory in the container
COPY ../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the current context (src) to /app inside the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]