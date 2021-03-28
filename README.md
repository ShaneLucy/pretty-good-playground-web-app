# Pretty Good Playground

[![Coverage Status](https://coveralls.io/repos/github/ShaneLucy/pretty-good-playground/badge.svg?branch=master)](https://coveralls.io/github/ShaneLucy/pretty-good-playground?branch=master)

## Steps to run this project locally

Clone this repo
Make sure you are in the root directory

### Using Docker

1. Build the image using the following command and give it a memorable name
   ```
   docker build ./ -t 'TAG'
   ```
   - `-t` tags the image
2. Create and run a container from the image created in the previous step
   ```
   docker run -d  --rm -p 5000:5000 --name 'NAME' TAG'
   ```
   - ` -d` runs the container in detached mode
   - ` -rm` cleans up the container on exit
   - ` -p` maps port 5000 from the container to your machine
   - `--name` gives the container a name
3. Kill the container when finished
   ```
   docker stop 'NAME'
   ```

### Using Node

1. Install dependencies
   ```
   npm i
   ```
2. Verify tests are passing (Optional)
   ```
   npm run test
   ```
3. Build the project
   ```
   npm run build
   ```
4. Serve the project
   ```
   npm run serve
   ```

Now the site should be accesible from localhost:5000 regardless of the method used
