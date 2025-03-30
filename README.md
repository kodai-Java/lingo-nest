# DeepL API with Netlify Functions

## Getting started

- Install the Netlify CLI: `npm install -g netlify-cli`
- Run the dev server: `netlify dev`

### To use this page & function:

- Local development home: http://localhost:8888
- Local development function: http://localhost:8888/.netlify/functions/hello
- Production: https://your-site.netlify.app/.netlify/functions/hello

## Deploy to Netlify

- Run build command: `bun run build`
- Run deploy command: `netlify deploy --dir=out --prod`

## Learn more

Here are the official documentation links for Netlify Functions:

### Main Documentation:

https://docs.netlify.com/functions/overview/

### Build Functions (Core concepts and getting started):

https://docs.netlify.com/functions/build-with-javascript/

### Examples and Tutorials:

https://functions.netlify.com/examples/

### Netlify Functions Playground (Interactive examples):

https://functions.netlify.com/playground/

### Advanced Topics:

- Background Functions: https://docs.netlify.com/functions/background-functions/
- Scheduled Functions: https://docs.netlify.com/functions/scheduled-functions/
- Environment Variables: https://docs.netlify.com/environment-variables/overview/

The official documentation is very comprehensive and regularly updated. I recommend starting with the main documentation and then exploring the examples to get a practical understanding of how to implement different types of functions.
If you're new to Netlify Functions, I suggest following this order:

- Overview documentation
- Build Functions guide
- Examples
- Advanced topics as needed for your specific use case
