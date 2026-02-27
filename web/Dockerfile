FROM node:20-alpine

WORKDIR /usr/src/app


# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Run Next.js in development mode (enables hot-reloading!)
CMD ["npm", "run", "dev"]