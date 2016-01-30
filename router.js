function route(handle, pathname) {
    console.log("About to route a request for " + pathname );
    if (typeof handle[pathname] === 'function'){
        handle[pathname]();
    }
    else{
        console.log("No handler found for " + pathname);
        return "404 Not Found";
    }
}

exports.route = route;