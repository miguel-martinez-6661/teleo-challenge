A. 
Keeping in mind that the app was created with React. First I will see if there's a way to do it natively or if
there's something built-in way.
Depending on the effort/time of do it natively VS dependency. I will start doing it or use a library.

0) First option https://www.npmjs.com/package/react-screen-capture: A tiny React library allows you to take a snapshot of the webpage's screen or part of the screen.
pros: 
- Easy to use
- Compatible with both JavaScript and TypeScript
- Take a snapshot of the webpage's screen or part of the screen
- Demo option in documentation
- Last publish: 3 months ago (still mantained).
- Small and light.

cons:
- Depends on a component (ScreenCapture) to invoke the functionality.
- Documentation is based in class-component.
- Only 664 weekly downloads in average.
- Depends on html2canvas (already included)
- 5 issues

1) Second option https://www.npmjs.com/package/use-react-screenshot: React hook which allows you to make component screenshot and get an image in different extensions. 
It's implemented as hook so the usage is really straight-forward and works over components reference which makes it really versatil.

pros:
- Implemented as React-hook. Clear usage.
- returns an image in different extensions.
- 11,216 Weekly download.
- 17 issues

cons
- Last publish: 2 years ago. (probably not maintained)
- Depends on another lib html2canvas (You must install it manually).
- You need to always pass the ref of the component that you want to shot.

2) Third option https://www.npmjs.com/package/react-screenshots: a screenshot cropper tool by react.

pros:
- Could be used in React and also Electron.
- Offer more control to deal with screenshots. 
- Last publish: 5 months ago. (still maintained).
- Small and Light.

cons: 
- Usage is not straight-forward.
- You are enforced to use a component to invoke functionality.
- Only 115 weekly download.
- No demo in docs.
- Part of the doc is not in english.
- 32 Issues.

My suggestion: 
In my opinion it depends on what the expected funcionality (crop part of the screen and shot, shot specific components).
- If we want to crop a section of the screen: react-screen-capture is the better option since it's really light, it's maintained and it doesn't have too much issues. 
- In the other hand: use-react-screenshot is the good option since it gets a whole component shot by ref, really easy to use, and you don't need to code too much and
leave you decide the extension of the image.

B. 
Once the screenshots are generated they would be store in the server's dedicated-storage, so we avoid keeping them in memory. Once they're taken, upload them in the
storage with a loading spin animation. Once it's uploaded, store the reference asociated with the user in the DB.