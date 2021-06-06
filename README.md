# node-js-no-code-server

So [PwnFunction](https://www.youtube.com/channel/UCW6MNdOsqv2E9AjQkv9we7A) made a video on a website with no code. 
Here is the [link](https://www.youtube.com/watch?v=msdymgkhePo&t=1s) to the video.

He created a server in Flask but I don't know Flash. Hence I converted the code to NodeJs. I like it.

Here is the link to the original [repo](https://github.com/PwnFunction/Blank-Rick-Roll).

## How to setup locally:
1. Clone the repo.
2. Run ```npm install``` or ```yarn install```, which ever you like.
3. Use ```node server``` to start a server at port 5000. Or if you have nodemon installed, then use ```nodemon server```.

### Few observations:
1. Had to add ```X-Content-Type-Options``` and ```Content-type``` to the header as Firefox was blocking the css file. I did not face the issue while using express before but google came in clutch.

Happy rickrolling :)