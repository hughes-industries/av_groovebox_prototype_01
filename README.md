# av_groovebox_prototype_01

A prototype tool for creating audio/visual output, by reacting to audio and midi inputs

Basic env and dependencies

```bash
node --version
v12.16.0

npm --version
6.14.5

entr
release: 4.6

tidy --version
HTML Tidy for Mac OS X released on 31 October 2006 - Apple Inc. build 16.4
# with a ~/.tidyrc
# http://api.html-tidy.org/tidy/tidylib_api_5.2.0/tidy_config.html

# install
npm i
# run
npm start
```

## Rout Midi From DAW to av_groovebox_prototype_01

MacOS:

- Open Audio Midi Setup
- Window > Show Midi Studio
- IAC Driver > Device is Online

Will now show up as a midi bus in DAWs and
av_groovebox_prototype_01, hook up I/O as required.
