
let path = process.env.PUBLIC_URL;

export default {
  orgs: [
    {
      text: 'Code42',
      value: 'code42',
      image: {
        size: 'mini',
        src: `${path}/icons/code42.png`
      }
    },
    {
      text: 'Github',
      value: 'github',
      image: {
        size: 'mini',
        src: `${path}/icons/github.png`
      }
    },
    {
      text: 'Google',
      value: 'google',
      image: {
        size: 'mini',
        src: `${path}/icons/google.png`
      }
    },
    {
      text: 'Facebook',
      value: 'facebook',
      image: {
        size: 'mini',
        src: `${path}/icons/facebook.png`
      }
    }
  ]
}
