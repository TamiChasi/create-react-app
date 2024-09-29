# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Create the React app (if you want to do it here)
# RUN npx create-react-app my-app

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]