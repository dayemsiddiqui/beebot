=======
# beebot
BeeBot Demo

This is how this web app works:

1. Using the Web Speech API’s `SpeechRecognition` interface to listen your voice from a microphone
2. Send your message to [API.ai](https://api.ai) (the natural language processing platform) as a text string
3. Once the AI from the API.ai returns the reply text back, use the `SpeechSynthesis` interface to give it a synthetic voice.




### Try It on Your Own Server

Rename the `.env.local` to `.env` and fill the env vars:

```
APIAI_TOKEN=
APIAI_SESSION_ID=some_unique_session_id
```

The first one is an API.ai API key (Please get one by sign up with [API.ai](https://api.ai)), and the second one is a session ID, which is an arbitrary string (we could make this unique within the app, but that's beyond the scope of this demo).

Or use this Heroku button to deploy to Heroku server. You just need to fill out the env vars with the API key and a session ID. No need to create an `.env` file.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/girliemac/web-speech-ai)
