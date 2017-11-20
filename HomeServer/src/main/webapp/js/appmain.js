requirejs.config({
    baseUrl: 'js',
    paths: {
       jQuery:"lib/jquery",
       popper:"lib/popper.min",
       bootstrap:"lib/bootstrap.min",
       router:'lib/router',
       appRouter:'lib/appRouter'
    },
    shim: {
        bootstrap: {
          deps: ['jQuery','popper']
        }
      }
});

// Start the main app logic.
require(['jQuery','popper','bootstrap','appRouter'],
function   () {});
