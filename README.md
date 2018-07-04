## Code42 Senior Web Engineer Excercise

This repo contains an application that explores GitHub users from a few different 
organizations. This app was built using [React][A] and [Semantic UI][B], starting with the 
[create-react-app][C] scaffold utility.

You can find a live version of this app running at [https://cmc42.now.sh][D]

The data is pulled from the public REST Github API v3 and is rate-limited. All requests are 
also capped at 30 results, with no pagination implemented at this point. 

### Installation

```
git clone git@github.com:crstffr/code42.react.git

cd code42.react && npm install
```

### Run Dev Server

Dev server will run on [localhost:3000](http://localhost:3000)

```
npm start 
```

### Build For Production

``` 
npm run build
```

### Deployment

**Note: Requires authentication with Zeit**

Static files are deployed to Zeit Now with a custom domain for each deployment.

```
npm run deploy
```

### Publish

**Note: Requires authentication with Zeit**

Publish the last deployment to [https://cmc42.now.sh/](D)

```
npm run publish
```

[A]: https://reactjs.org/
[B]: https://semantic-ui.com/
[C]: https://github.com/facebook/create-react-app
[D]: https://cmc42.now.sh/


