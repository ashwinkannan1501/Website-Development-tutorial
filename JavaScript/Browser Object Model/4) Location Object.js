/*
Location Object :- 
--------------------
    The "location" object belongs to the "window" object.
    The "location" object can be used to get the current URL and to redirect the browser to a new page.
*/

const googleHomePage = () => {
    open('https://google.com', '_blank'); // This is a function
    location.href = 'https://google.com/search?How to be a perfect Programmer'
};

const facebookHomePage = () => {
    open('https://www.facebook.com', '_blank'); // This is a function
    location.href = "https://www.facebook.com"
};

const twitterHomePage = () => {
    open('https://twitter.com', '_blank'); // This is a function
    location.href = "https://www.twitter.com"
};

const linkedinHomePage = () => {
    open('https://www.linkedin.com', '_blank'); // This is a function
    location.href = "https://www.linkedin.com"
};

const githubHomePage = () => {
    open('https://github.com', '_blank'); // This is a
    location.href = "https://github.com"
};

// Properties :- 
// (i) href :- It returns the URL of the current page and also can be used to set the specified URL.
console.log(`Current Path : ${location.href}`); // href - hyperlink reference
console.log(`${location.hash}`); 
// (ii) pathname :- It returns the pathname of the current page and also can be set to navigate to the same URl with a changed path.
console.log(`Current File Path Name : ${location.pathname}`);
// (iii) host :- It returns the name of the internet host / ip address and post number and it can be set to navigate to the same URL with a changed host & port.
console.log(`Current Host (IP Address & Port Number) :- ${location.host}`);
// (iv) hostname :- It returns the name of the internet host / ip address of the current page and it can be set to navigate to the same URL with a changed host.
console.log(`Current Host Name (IP Address) : ${location.hostname}`) 
// (v) protocol :- It returns the protocol of the current page (http or https).
console.log(`Current Protocol : ${location.protocol}`);
// (vi) port :- It returns the port number of the current page and it can be set to navigate to the same URL with a changed port.
// Note :- Most browsers will not display the default port numbers (80 - http & 443 - https)
console.log(`Current Port Number : ${location.port}`);
// (vii) search :- It returns the current URL's query and it can be set to navigate to the same URL with a changed query
console.log(`Current Search : ${location.search}`);
// (viii) origin :- It returns the current URl's origin
console.log(`Current Origin : ${location.origin}`);
// (ix) ancestorsOrigins :- It returns all the list of the browsing context.
console.log(`Ancestor Origins : ${location.ancestorOrigins}`);


// Methods :- 
// (i) assign() :- It loads the new document with a specified URL
const instagramHomePage = () => {
    location.assign(`https://www.instagram.com`);
}

// (ii) replace() :- It removes the current page from the session and navigates to the given URL
const replaceWithNotion = () => {
    location.replace(`https://www.notion.so`); // It removes the current web page in the browser history and loads the given URL.
}

// (iii) reload() :- It reloads the current page.
const clickToReload = () => {
    location.reload();
}

const searchOnYoutube = () => {
    let searchQuery = "How to become a Master in Full Stack Web Development ?";
    let youtubeSearch = `https://www.Youtube.com/search?q=${searchQuery}`;
    const target = '_blank'; // It opens the youtube search result in a new tab 
    open(youtubeSearch, target);
}

